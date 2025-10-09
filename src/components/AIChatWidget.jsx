
import React, { useEffect, useMemo, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { motion, AnimatePresence } from "framer-motion";
import {
  Bot, X, CornerDownLeft, Trash2, ShieldCheck, Building2, Cpu, Database,
  Sparkles, BarChart4, Languages, Zap, Mic, MicOff
} from "lucide-react";

const GOLD = "#D4AF37";
const MODEL = "gemini-2.5-flash";
const STORAGE_KEY = "xotrik_ai_chat_v3";
const SETTINGS_KEY = "xotrik_ai_chat_settings";
const PERSIST_MS = 30 * 60 * 1000; // 30 min

async function callGeminiDirect(prompt, apiKey) {
  if (!apiKey) throw new Error("MISSING_API_KEY");
  const url = `https://generativelanguage.googleapis.com/v1beta/models/${MODEL}:generateContent?key=${apiKey}`;
  const body = { contents: [{ parts: [{ text: prompt }]}] };
  const res = await fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(body) });
  if (!res.ok) throw new Error(await res.text());
  const data = await res.json();
  return data?.candidates?.[0]?.content?.parts?.[0]?.text || "";
}

/* ---------- helpers ---------- */
function ensureArray(v){ if(Array.isArray(v)) return v; if(!v) return []; if(typeof v==="object") return Object.values(v); return []; }

/* Limpia Markdown básico y elimina asteriscos */
function sanitizeMarkdown(md) {
  if (!md) return "";
  let txt = String(md);

  // code fences -> quita ``` (pero deja contenido)
  txt = txt.replace(/```([\s\S]*?)```/g, (_, code) => code);

  // inline code `
  txt = txt.replace(/`+/g, "");

  // encabezados #
  txt = txt.replace(/^#{1,6}\s*/gm, "");

  // bold/italic con * o _
  txt = txt.replace(/\*\*(.*?)\*\*/g, "$1");
  txt = txt.replace(/\*(.*?)\*/g, "$1");
  txt = txt.replace(/__(.*?)__/g, "$1");
  txt = txt.replace(/_(.*?)_/g, "$1");

  // listas * - +  -> viñeta •
  txt = txt.replace(/^\s*[-*+]\s+/gm, "• ");

  // blockquote >
  txt = txt.replace(/^\s*>\s?/gm, "");

  // links [text](url) -> text
  txt = txt.replace(/\[([^\]]+)\]\([^)]+\)/g, "$1");

  // elimina cualquier * suelto restante
  txt = txt.replace(/\*/g, "");

  // espacios/line breaks
  txt = txt.replace(/[ \t]+\n/g, "\n").replace(/\n{3,}/g, "\n\n");

  return txt.trim();
}

/* ---------- UI ---------- */
const DEFAULT_ICONS = [<Zap size={16} />, <BarChart4 size={16} />, <Languages size={16} />, <Sparkles size={16} />];

const FALLBACK_SUGGESTIONS = [
  { label: "Plan de IA 90 días", prompt: "Crea un plan de adopción de IA en 90 días con quick wins, riesgos y métricas." },
  { label: "Reducir costos cloud 25%", prompt: "Propón un plan de FinOps para reducir un 25% el gasto cloud sin afectar SLA." },
  { label: "RAG seguro", prompt: "Diseña un sistema RAG seguro para consultar PDFs internos con control de acceso." },
  { label: "KPIs de producto", prompt: "Define KPIs de producto y un cuadro de mando ejecutivo con alertas." }
];

const MODES = {
  strategy:   { key: "strategy",   icon: <Building2 size={16}/>, color: GOLD },
  engineering:{ key: "engineering",icon: <Cpu size={16}/>,       color: "#16d9e3" },
  data:       { key: "data",       icon: <Database size={16}/>,  color: "#9AE6B4" },
  ops:        { key: "ops",        icon: <ShieldCheck size={16}/>,color: "#FFD166" }
};

function systemPrompt(mode, lang="es") {
  const baseES = `Actúa como Xotrik AI Enterprise, un asesor senior de ${mode} para ejecutivos y equipos técnicos.
- Responde de forma estructurada, concisa y accionable.
- Incluye bullets, riesgos, KPIs sugeridos y próximos pasos.
- Expón supuestos y pide solo lo mínimo faltante.
- Tono profesional, claro y seguro.`;
  const baseEN = `Act as Xotrik AI Enterprise, a senior ${mode} advisor for executives and technical teams.
- Answer structured, concise and actionable.
- Include bullets, risks, suggested KPIs and next steps.
- State assumptions and ask minimally for missing info.
- Professional, clear, confident tone.`;
  return lang.startsWith("en") ? baseEN : baseES;
}

export default function AIChatWidget() {
  const { t, i18n } = useTranslation();
  const tr = (k,f) => t(k,{ defaultValue:f });

  const API_KEY = import.meta.env.VITE_GEMINI_API_KEY;

  const [open, setOpen] = useState(false);
  const [mode, setMode] = useState("strategy");
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        if (parsed?.ts && Array.isArray(parsed?.messages) && (Date.now() - parsed.ts) < PERSIST_MS) {
          return parsed.messages;
        }
      }
    } catch {}
    return [{ user: "bot", text: tr("assistant.greeting","¡Hola! Soy Xotrik IA 🤖. Pregúntame sobre estrategia de IA, arquitectura, datos o operaciones.") }];
  });
  const [loading, setLoading] = useState(false);
  const [streaming, setStreaming] = useState(false);

  // Enter para enviar (ajustable)
  const [enterToSend, setEnterToSend] = useState(() => {
    try {
      const s = JSON.parse(localStorage.getItem(SETTINGS_KEY) || "{}");
      return typeof s.enterToSend === "boolean" ? s.enterToSend : true;
    } catch { return true; }
  });
  useEffect(() => {
    try { localStorage.setItem(SETTINGS_KEY, JSON.stringify({ enterToSend })); } catch {}
  }, [enterToSend]);

  // Voz a texto (Web Speech API)
  const recognitionRef = useRef(null);
  const [listening, setListening] = useState(false);
  const [partial, setPartial] = useState("");
  const SpeechRecognition = typeof window !== "undefined" && (window.SpeechRecognition || window.webkitSpeechRecognition);
  const canVoice = !!SpeechRecognition;
  const recogLang = useMemo(() => {
    const base = i18n.language?.slice(0,2) || "es";
    if (base === "es") return "es-ES";
    if (base === "en") return "en-US";
    return "en-US";
  }, [i18n.language]);

  const startDictation = () => {
    if (!canVoice || listening) return;
    try {
      const rec = new SpeechRecognition();
      rec.continuous = true;
      rec.interimResults = true;
      rec.lang = recogLang;

      rec.onresult = (e) => {
        let interim = "";
        let final = "";
        for (let i = e.resultIndex; i < e.results.length; i++) {
          const transcript = e.results[i][0].transcript;
          if (e.results[i].isFinal) final += transcript + " ";
          else interim += transcript;
        }
        if (final) setInput(prev => (prev ? prev + " " : "") + final.trim());
        setPartial(interim);
      };
      rec.onerror = () => { setListening(false); setPartial(""); };
      rec.onend = () => { setListening(false); setPartial(""); };

      recognitionRef.current = rec;
      rec.start();
      setListening(true);
    } catch { setListening(false); }
  };
  const stopDictation = () => { try { recognitionRef.current?.stop(); } catch {} setListening(false); setPartial(""); };

  // Persistencia + autoscroll
  const boxRef = useRef(null);
  const inputRef = useRef(null);
  const scrollToBottom = (smooth = true) =>
    requestAnimationFrame(() => {
      const el = boxRef.current;
      if (el) el.scrollTo({ top: el.scrollHeight, behavior: smooth ? "smooth" : "auto" });
    });

  useEffect(() => {
    try { localStorage.setItem(STORAGE_KEY, JSON.stringify({ ts: Date.now(), messages })); } catch {}
    scrollToBottom(true);
  }, [messages, open]);

  // ---- TYPEWRITER STREAMING ----
  const typeOutToMessage = (msgIndex, fullText) => {
    setStreaming(true);
    let i = 0;
    const step = Math.max(2, Math.ceil(fullText.length / 220));
    const tick = () => {
      i = Math.min(fullText.length, i + step);
      setMessages(prev => {
        const copy = [...prev];
        const msg = { ...copy[msgIndex], text: fullText.slice(0, i) };
        copy[msgIndex] = msg;
        return copy;
      });
      scrollToBottom(true);
      if (i < fullText.length) {
        streamRaf.current = requestAnimationFrame(tick);
      } else {
        setStreaming(false);
      }
    };
    streamRaf.current = requestAnimationFrame(tick);
  };
  const streamRaf = useRef(null);
  useEffect(() => () => { if (streamRaf.current) cancelAnimationFrame(streamRaf.current); }, []);

  // Envío
  const busy = loading || streaming;
  const send = async (prompt) => {
    if (!prompt?.trim() || busy) return;

    let botIndex;
    setMessages(prev => {
      const next = [...prev, { user: "user", text: prompt }, { user: "bot", text: "" }];
      botIndex = next.length - 1;
      return next;
    });

    setLoading(true);
    setInput("");

    try {
      const sys = systemPrompt(mode, i18n.language);
      const final = `${sys}\n\nUsuario: ${prompt}`;
      const raw = await callGeminiDirect(final, API_KEY);
      const clean = sanitizeMarkdown(raw) || tr("assistant.noResponse","No hay respuesta de Xotrik IA.");
      typeOutToMessage(botIndex, clean);
    } catch (e) {
      const msg = e?.message === "MISSING_API_KEY"
        ? tr("assistant.missingKey","Falta VITE_GEMINI_API_KEY en tu .env")
        : tr("assistant.errorMsg","Ocurrió un error con el servicio de IA. Intenta de nuevo.");
      setMessages(prev => {
        const copy = [...prev];
        copy[copy.length - 1] = { user: "bot", text: msg };
        return copy;
      });
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = (e) => { e.preventDefault(); send(input); };
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      if (enterToSend) {
        if (!e.shiftKey) { e.preventDefault(); send(input); }
      } else {
        if (e.metaKey || e.ctrlKey) { e.preventDefault(); send(input); }
      }
    }
  };

  const handleOpen = () => { setOpen(o=>!o); if (!open) setTimeout(()=>inputRef.current?.focus(), 120); };
  const clearChat = () => {
    setMessages([{ user: "bot", text: tr("assistant.greeting","¡Hola! Soy Xotrik IA 🤖. Pregúntame sobre estrategia de IA, arquitectura, datos o operaciones.") }]);
    try { localStorage.removeItem(STORAGE_KEY); } catch {}
  };

  return (
    <>
      {/* FAB dorado */}
      <button
        onClick={handleOpen}
        aria-label={tr("assistant.open","Abrir asistente Xotrik IA")}
        className="fixed bottom-5 right-5 z-50 h-14 w-14 rounded-full shadow-xl flex items-center justify-center transition-transform hover:-translate-y-0.5 focus:outline-none focus-visible:ring-4"
        style={{ backgroundColor: GOLD, color: "#0A1828", boxShadow: "0 10px 30px rgba(212,175,55,0.45)" }}
      >
        <Bot size={24} />
      </button>

      <AnimatePresence>
        {open && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-50">
            {/* Backdrop (click fuera para cerrar) */}
            <div onClick={() => setOpen(false)} className="absolute inset-0 bg-black/40" />

            {/* Ventana flotante SIEMPRE (no full-screen) */}
            <motion.aside
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 16 }}
              transition={{ type: "spring", stiffness: 240, damping: 22 }}
              className="absolute flex flex-col bg-[#0A1828]/95 backdrop-blur-xl rounded-2xl border"
              style={{
                right: 20,
                bottom: 100,
                width: "min(92vw, 460px)",
                height: "min(78vh, 720px)",
                borderColor: "rgba(212,175,55,0.35)",
                boxShadow: "0 18px 60px rgba(0,0,0,.45)"
              }}
              role="dialog" aria-modal="true" aria-labelledby="xotrik-ai-title"
              onClick={(e)=>e.stopPropagation()}
            >
              {/* Header */}
              <div className="shrink-0 p-4 border-b bg-[#0A1828]/95 backdrop-blur-xl" style={{ borderColor: "rgba(212,175,55,0.25)" }}>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="h-9 w-9 grid place-items-center rounded-xl shadow" style={{ backgroundColor: GOLD, color: "#0A1828" }}>
                      <Bot size={18} />
                    </div>
                    <div>
                      <h3 id="xotrik-ai-title" className="font-extrabold leading-tight" style={{ color: GOLD }}>
                        {tr("assistant.title","Xotrik AI Enterprise")}
                      </h3>
                      <p className="text-xs text-white/60">
                        {tr("assistant.subtitle","Asistente estratégico para crecimiento y eficiencia")}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <label className="text-[11px] text-white/70 flex items-center gap-2 px-2 py-1 rounded-md border" style={{ borderColor: "rgba(212,175,55,0.25)" }}>
                      <input type="checkbox" checked={enterToSend} onChange={(e)=>setEnterToSend(e.target.checked)} className="accent-[#D4AF37]" />
                      {tr("assistant.enterToSendLabel","Enter para enviar")}
                    </label>
                    <button onClick={clearChat} title={tr("assistant.clear","Limpiar chat")} className="h-8 w-8 grid place-items-center rounded-lg hover:bg-white/5 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37]/40">
                      <Trash2 size={18} className="text-white/85" />
                    </button>
                    <button onClick={() => setOpen(false)} aria-label={tr("assistant.close","Cerrar asistente")} className="h-8 w-8 grid place-items-center rounded-lg hover:bg-white/5 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37]/40">
                      <X size={18} className="text-white/80" />
                    </button>
                  </div>
                </div>

                {/* Modos */}
                <div className="mt-3 flex flex-wrap gap-2">
                  {Object.values(MODES).map(m => (
                    <button
                      key={m.key}
                      onClick={() => setMode(m.key)}
                      className="text-xs px-3 py-1.5 rounded-full border transition"
                      style={{
                        borderColor: mode === m.key ? m.color : "rgba(212,175,55,0.25)",
                        color: mode === m.key ? "#0A1828" : "#e7edf3",
                        backgroundColor: mode === m.key ? m.color : "transparent",
                        boxShadow: mode === m.key ? "0 0 0 1px rgba(0,0,0,.08) inset" : "none"
                      }}
                    >
                      <span className="inline-flex items-center gap-1">{m.icon}{tr(`assistant.modes.${m.key}`, m.key)}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Mensajes (flex-1) */}
              <div ref={boxRef} className="flex-1 px-4 pt-3 pb-3 overflow-y-auto">
                {messages.map((m, i) =>
                  m.user === "bot" ? (
                    <div key={i} className="flex items-start gap-2 mb-2">
                      <div className="h-7 w-7 grid place-items-center rounded-full" style={{ backgroundColor: GOLD, color: "#0A1828" }}>
                        <Bot size={16} />
                      </div>
                      <div className="text-sm text-cyan-50 whitespace-pre-line">{m.text}</div>
                    </div>
                  ) : (
                    <div key={i} className="flex justify-end mb-2">
                      <div className="text-sm text-white bg-white/10 border border-white/10 px-3 py-1.5 rounded-xl max-w-[85%]">
                        {m.text}
                      </div>
                    </div>
                  )
                )}
                {loading && (
                  <div className="flex items-center gap-2 text-cyan-200 animate-pulse">
                    <Bot size={16} className="text-cyan-300" />
                    {tr("assistant.thinking","Pensando...")}
                  </div>
                )}

                {/* Sugerencias */}
                <div className="mt-2 flex flex-wrap gap-2">
                  {(() => {
                    const raw = t("assistant.suggestions", { returnObjects: true, defaultValue: [] });
                    const suggestions = (ensureArray(raw).length ? ensureArray(raw) : FALLBACK_SUGGESTIONS)
                      .map((s,i)=> typeof s === "string" ? { label: s, prompt: s } : s);
                    return suggestions.map((s, i) => (
                      <button
                        key={i}
                        type="button"
                        onClick={() => send(s.prompt ?? s.label)}
                        className="text-xs px-3 py-1.5 rounded-full border bg-white/5 hover:bg-white/[.08] transition"
                        style={{ borderColor: "rgba(212,175,55,0.25)", color: "#e7edf3" }}
                      >
                        <span className="inline-flex items-center gap-1 opacity-90">
                          {DEFAULT_ICONS[i % DEFAULT_ICONS.length]} {s.label}
                        </span>
                      </button>
                    ));
                  })()}
                </div>
              </div>

              {/* Input (footer) */}
              <form onSubmit={handleSubmit} className="shrink-0 p-4 border-t bg-[#0A1828]/95 backdrop-blur-xl" style={{ borderColor: "rgba(212,175,55,0.25)" }}>
                <div className="flex gap-2 items-center">
                  <button
                    type="button"
                    onClick={listening ? stopDictation : startDictation}
                    disabled={!canVoice}
                    title={
                      !canVoice
                        ? tr("assistant.mic.unsupported","Dictado no soportado en este navegador")
                        : listening
                          ? tr("assistant.mic.stop","Detener dictado")
                          : tr("assistant.mic.start","Iniciar dictado")
                    }
                    className="h-10 w-10 grid place-items-center rounded-lg border hover:bg-white/5 disabled:opacity-50"
                    style={{ borderColor: "rgba(212,175,55,0.25)", color: "#e7edf3" }}
                  >
                    {listening ? <MicOff size={18}/> : <Mic size={18}/>}
                  </button>

                  <div className="flex-1">
                    <textarea
                      ref={inputRef}
                      value={input}
                      onChange={(e)=>setInput(e.target.value)}
                      onKeyDown={(e) => {
                        if (e.key === "Enter") {
                          if (enterToSend) {
                            if (!e.shiftKey) { e.preventDefault(); send(input); }
                          } else {
                            if (e.metaKey || e.ctrlKey) { e.preventDefault(); send(input); }
                          }
                        }
                      }}
                      rows={1}
                      placeholder={
                        listening && partial
                          ? `${tr("assistant.mic.listening","Escuchando…")} ${partial}`
                          : tr("assistant.placeholder","Pregunta a Xotrik IA...")
                      }
                      className="w-full px-3 py-2 rounded-lg bg-[#0F2236] text-white placeholder:text-white/40 border focus:outline-none focus:ring-2 focus:ring-[#D4AF37]/40 resize-none"
                      style={{ borderColor: "rgba(212,175,55,0.25)" }}
                    />
                    <div className="mt-1 text-[11px] text-white/40">
                      {enterToSend
                        ? tr("assistant.hintEnter","Enter para enviar • Shift+Enter para salto de línea")
                        : tr("assistant.hintCtrlEnter","Ctrl/Cmd+Enter para enviar")}
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={busy || !input.trim()}
                    className="px-3 py-2 rounded-lg font-semibold transition disabled:opacity-60"
                    style={{ backgroundColor: GOLD, color: "#0A1828", boxShadow: "0 10px 24px rgba(212,175,55,0.45)" }}
                  >
                    <span className="inline-flex items-center gap-1">
                      <CornerDownLeft size={16} /> {tr("assistant.send","Enviar")}
                    </span>
                  </button>
                </div>
              </form>
            </motion.aside>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
