import React, { useEffect, useMemo, useRef, useState } from "react";
import { Bot, Sparkles, Zap, BarChart4, Languages, CornerDownLeft, Mic, MicOff } from "lucide-react";

const GOLD = "#D4AF37";
const MODEL = "gemini-2.5-flash";

// ⚠️ Mejor usa VITE_GEMINI_API_KEY en .env; si no existe, cae al hardcode (tu valor actual)
const GEMINI_API_KEY = import.meta.env?.VITE_GEMINI_API_KEY ;
// ---- Llama Gemini (prompt simple) ----
async function callGemini(prompt) {
  const url = `https://generativelanguage.googleapis.com/v1beta/models/${MODEL}:generateContent?key=${GEMINI_API_KEY}`;
  const body = { contents: [{ parts: [{ text: prompt }] }] };
  const res = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });
  if (!res.ok) throw new Error("Gemini API error");
  const data = await res.json();
  return data?.candidates?.[0]?.content?.parts?.[0]?.text || "No response from Xotrik IA.";
}

// ---- Sanitizador: quita **, *, `, #, bullets -> • ----
function sanitizeMarkdown(md) {
  if (!md) return "";
  let txt = String(md);

  // ```code``` → deja contenido
  txt = txt.replace(/```([\s\S]*?)```/g, (_, code) => code);
  // `inline`
  txt = txt.replace(/`+/g, "");
  // encabezados
  txt = txt.replace(/^#{1,6}\s*/gm, "");
  // bold/italic
  txt = txt.replace(/\*\*(.*?)\*\*/g, "$1");
  txt = txt.replace(/\*(.*?)\*/g, "$1");
  txt = txt.replace(/__(.*?)__/g, "$1");
  txt = txt.replace(/_(.*?)_/g, "$1");
  // listas -> viñeta
  txt = txt.replace(/^\s*[-*+]\s+/gm, "• ");
  // blockquote
  txt = txt.replace(/^\s*>\s?/gm, "");
  // [texto](url) -> texto
  txt = txt.replace(/\[([^\]]+)\]\([^)]+\)/g, "$1");
  // asteriscos sueltos
  txt = txt.replace(/\*/g, "");
  // espacios
  txt = txt.replace(/[ \t]+\n/g, "\n").replace(/\n{3,}/g, "\n\n");

  return txt.trim();
}

const SUGGESTIONS = [
  { icon: <Zap className="text-cyan-300" size={16} />, label: "Plan de IA 90 días", prompt: "Crea un plan de adopción de IA en 90 días con quick wins, riesgos y métricas." },
  { icon: <BarChart4 className="text-amber-300" size={16} />, label: "Reducir costos cloud 25%", prompt: "Propón un plan de FinOps para reducir un 25% el gasto cloud sin afectar SLA." },
  { icon: <Languages className="text-blue-300" size={16} />, label: "Traduce copy a inglés", prompt: "Traduce: 'Optimiza tu negocio con Xotrik IA' al inglés." },
  { icon: <Sparkles className="text-pink-300" size={16} />, label: "RAG seguro con PDFs", prompt: "Diseña un sistema RAG seguro para consultar PDFs internos con control de acceso." }
];

export default function XotrikIAChat() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([
    { user: "bot", text: "¡Hola! Soy Xotrik IA 🤖, tu copiloto inteligente. Hazme una pregunta sobre automatización, predicción, chatbots o IA." }
  ]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [streaming, setStreaming] = useState(false);

  // ---- Voz a texto (Web Speech API) ----
  const recognitionRef = useRef(null);
  const [listening, setListening] = useState(false);
  const [partial, setPartial] = useState("");
  const SpeechRecognition = typeof window !== "undefined" && (window.SpeechRecognition || window.webkitSpeechRecognition);
  const canVoice = !!SpeechRecognition;

  const startDictation = () => {
    if (!canVoice || listening) return;
    try {
      const rec = new SpeechRecognition();
      rec.continuous = true;
      rec.interimResults = true;
      rec.lang = navigator.language?.startsWith("es") ? "es-ES" : "en-US";
      rec.onresult = (e) => {
        let interim = "", final = "";
        for (let i = e.resultIndex; i < e.results.length; i++) {
          const txt = e.results[i][0].transcript;
          if (e.results[i].isFinal) final += txt + " ";
          else interim += txt;
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

  // ---- Autoscroll + typewriter ----
  const boxRef = useRef(null);
  const scrollToBottom = (smooth = true) =>
    requestAnimationFrame(() => {
      const el = boxRef.current;
      if (el) el.scrollTo({ top: el.scrollHeight, behavior: smooth ? "smooth" : "auto" });
    });

  useEffect(() => { scrollToBottom(true); }, [messages]);

  const streamRaf = useRef(null);
  useEffect(() => () => { if (streamRaf.current) cancelAnimationFrame(streamRaf.current); }, []);

  const typeOutToMessage = (msgIndex, fullText) => {
    setStreaming(true);
    let i = 0;
    const step = Math.max(2, Math.ceil(fullText.length / 220)); // velocidad proporcional
    const tick = () => {
      i = Math.min(fullText.length, i + step);
      setMessages(prev => {
        const copy = [...prev];
        copy[msgIndex] = { ...copy[msgIndex], text: fullText.slice(0, i) };
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

  // ---- Enviar ----
  const busy = loading || streaming;

  const handleSend = async (e) => {
    e.preventDefault();
    setError("");
    const prompt = input.trim();
    if (!prompt || busy) return;

    // agrega usuario + placeholder bot vacío
    let botIndex;
    setMessages(m => {
      const next = [...m, { user: "user", text: prompt }, { user: "bot", text: "" }];
      botIndex = next.length - 1;
      return next;
    });

    setLoading(true);
    setInput("");

    try {
      const reply = await callGemini(prompt);
      const clean = sanitizeMarkdown(reply);
      typeOutToMessage(botIndex, clean || "No response from Xotrik IA.");
    } catch (err) {
      setMessages(m => {
        const copy = [...m];
        copy[copy.length - 1] = { user: "bot", text: "Ocurrió un error con Gemini. Intenta de nuevo." };
        return copy;
      });
      setError("Error consultando Gemini API.");
    } finally {
      setLoading(false);
    }
  };

  const onKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      if (input.trim() && !busy) handleSend(e);
    }
  };

  // ---- UI ----
  return (
    <section
      className="
        w-full max-w-xl mx-auto
        bg-gradient-to-br from-[#0B1A2A]/90 to-[#113346]/80
        border border-[#D4AF37]/30 rounded-2xl p-6 shadow-2xl mt-12 mb-20
        backdrop-blur-xl
      "
      style={{ boxShadow: "0 12px 36px rgba(212,175,55,0.18), 0 8px 30px rgba(16,185,129,0.12)" }}
    >
      {/* Header */}
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-3">
          <div className="h-9 w-9 grid place-items-center rounded-xl" style={{ backgroundColor: GOLD, color: "#0A1828" }}>
            <Bot size={18} />
          </div>
          <div>
            <h3 className="text-lg font-extrabold" style={{ color: GOLD }}>Xotrik IA Chat</h3>
            <p className="text-xs text-white/60">Asistente profesional para estrategia, ingeniería y datos</p>
          </div>
        </div>
        <div className="hidden sm:flex items-center gap-2 text-[11px] text-white/70">
          <span>Enter: enviar</span>
          <span className="opacity-60">•</span>
          <span>Shift+Enter: salto</span>
        </div>
      </div>

      {/* Sugerencias */}
      <div className="flex flex-wrap gap-2 mb-3">
        {SUGGESTIONS.map((sug, i) => (
          <button
            key={i}
            type="button"
            onClick={() => setInput(sug.prompt)}
            className="flex items-center gap-1 bg-white/5 border border-[#D4AF37]/25 px-3 py-1.5 rounded-full text-xs text-slate-100 hover:bg-white/10 transition focus:outline-none"
          >
            {sug.icon}{sug.label}
          </button>
        ))}
      </div>

      {/* Chat */}
      <div
        ref={boxRef}
        className="h-64 bg-black/30 rounded-xl p-4 overflow-y-auto mb-4 border border-[#D4AF37]/25 flex flex-col gap-2"
      >
        {messages.map((msg, i) =>
          msg.user === "bot" ? (
            <div key={i} className="flex items-start gap-2">
              <div className="h-7 w-7 grid place-items-center rounded-full" style={{ backgroundColor: GOLD, color: "#0A1828" }}>
                <Bot size={16} />
              </div>
              <span className="text-cyan-50 text-sm whitespace-pre-line">{msg.text}</span>
            </div>
          ) : (
            <div key={i} className="flex items-center gap-2 justify-end">
              <span className="text-slate-100 text-sm bg-white/10 border border-white/10 px-3 py-1.5 rounded-xl max-w-[85%]">
                {msg.text}
              </span>
            </div>
          )
        )}
        {(loading || streaming) && (
          <div className="flex items-center gap-2 mt-1 text-cyan-200 animate-pulse">
            <Bot size={16} className="text-cyan-300" />
            Pensando…
          </div>
        )}
      </div>

      {/* Formulario */}
      <form onSubmit={handleSend} className="flex gap-2">
        <button
          type="button"
          onClick={listening ? stopDictation : startDictation}
          disabled={!canVoice}
          title={canVoice ? (listening ? "Detener dictado" : "Iniciar dictado") : "Dictado no soportado en este navegador"}
          className="h-10 w-10 grid place-items-center rounded-lg border hover:bg-white/5 disabled:opacity-50"
          style={{ borderColor: "rgba(212,175,55,0.25)", color: "#e7edf3" }}
        >
          {listening ? <MicOff size={18}/> : <Mic size={18}/>}
        </button>

        <textarea
          className="flex-1 px-4 py-2 rounded-lg bg-slate-900/70 text-white placeholder:text-slate-400 border border-[#D4AF37]/25 focus:outline-none focus:ring-2 focus:ring-[#D4AF37]/40 resize-none"
          placeholder={listening && partial ? `Escuchando… ${partial}` : "Pregunta a Xotrik IA..."}
          value={input}
          onChange={e => setInput(e.target.value)}
          onKeyDown={onKeyDown}
          rows={1}
        />
        <button
          type="submit"
          disabled={busy || !input.trim()}
          className="px-4 py-2 rounded-lg font-bold transition flex items-center gap-1 disabled:opacity-60"
          style={{ backgroundColor: GOLD, color: "#0A1828", boxShadow: "0 10px 22px rgba(212,175,55,0.35)" }}
        >
          <CornerDownLeft size={17} /> Enviar
        </button>
      </form>

      {error && <div className="text-red-400 mt-2 text-sm">{error}</div>}
    </section>
  );
}
