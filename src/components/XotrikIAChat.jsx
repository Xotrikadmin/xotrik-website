import React, { useState } from "react";
import { Bot, Sparkles, Zap, BarChart4, Languages, CornerDownLeft } from "lucide-react";

const GEMINI_API_KEY = "AIzaSyBzoEKE3hrZ2UltGiluGsdvUcSx69r7lYI"; 

// Llama Gemini API (prompt simple)
async function callGemini(prompt) {
  const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${GEMINI_API_KEY}`;
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

const SUGGESTIONS = [
  {
    icon: <Zap className="text-cyan-300" size={16} />,
    label: "¿Cómo puedo automatizar reportes en mi empresa?",
    prompt: "¿Cómo puedo automatizar reportes en mi empresa con IA?"
  },
  {
    icon: <BarChart4 className="text-amber-300" size={16} />,
    label: "¿Puedes predecir ventas para el próximo mes?",
    prompt: "¿Puedes predecir las ventas del próximo mes con base en estos datos: ...?"
  },
  {
    icon: <Languages className="text-blue-300" size={16} />,
    label: "Traduce esto a inglés: 'Optimiza tu negocio con Xotrik IA'",
    prompt: "Traduce esto a inglés: 'Optimiza tu negocio con Xotrik IA'"
  },
  {
    icon: <Sparkles className="text-pink-300" size={16} />,
    label: "¿Qué tendencias de IA serán clave en 2025?",
    prompt: "¿Qué tendencias de inteligencia artificial serán clave en 2025 para empresas?"
  }
];

export default function XotrikIAChat() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([
    { user: "bot", text: "¡Hola! Soy Xotrik IA 🤖, tu copiloto inteligente. Hazme una pregunta sobre automatización, predicción, chatbots o IA." }
  ]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [suggesting, setSuggesting] = useState(false);

  // Envía el mensaje a Gemini
  const handleSend = async (e) => {
    e.preventDefault();
    setError("");
    if (!input.trim() || loading) return;
    setMessages(m => [...m, { user: "user", text: input }]);
    setLoading(true);
    try {
      const reply = await callGemini(input);
      setMessages(m => [...m, { user: "bot", text: reply }]);
    } catch (err) {
      setMessages(m => [...m, { user: "bot", text: "Ocurrió un error con Gemini. Intenta de nuevo." }]);
      setError("Error consultando Gemini API.");
    }
    setLoading(false);
    setInput("");
  };

  // Click en sugerencia: autocompleta input
  const handleSuggestion = (prompt) => {
    setInput(prompt);
    setSuggesting(false);
  };

  return (
    <section className="w-full max-w-lg mx-auto bg-gradient-to-br from-cyan-900/80 to-blue-950/70 border border-cyan-700/40 rounded-2xl p-7 shadow-2xl mt-12 mb-20">
      <div className="flex items-center gap-3 mb-2">
        <Bot className="text-cyan-400" size={28} />
        <h3 className="text-lg font-bold text-cyan-200">Xotrik IA Chat</h3>
      </div>
      {/* Sugerencias inteligentes */}
      <div className="flex flex-wrap gap-2 mb-3 animate-fade-in">
        {SUGGESTIONS.map((sug, i) => (
          <button
            key={i}
            type="button"
            onClick={() => handleSuggestion(sug.prompt)}
            className="flex items-center gap-1 bg-black/30 border border-cyan-700/30 px-3 py-1.5 rounded-full text-xs text-slate-200 hover:bg-cyan-800/30 hover:text-white transition focus:outline-none"
          >
            {sug.icon}
            {sug.label}
          </button>
        ))}
      </div>
      {/* Chat */}
      <div className="h-64 bg-black/40 rounded-xl p-4 overflow-y-auto mb-4 border border-cyan-900/50 flex flex-col gap-1">
        {messages.map((msg, i) =>
          msg.user === "bot" ? (
            <div key={i} className="flex items-center gap-2 mb-1">
              <Bot className="text-cyan-400" size={18} />
              <span className="text-cyan-100 font-semibold text-sm whitespace-pre-line">{msg.text}</span>
            </div>
          ) : (
            <div key={i} className="flex items-center gap-2 mb-1 justify-end">
              <span className="text-slate-200 text-sm bg-cyan-700/10 px-3 py-1 rounded-xl">{msg.text}</span>
            </div>
          )
        )}
        {loading && (
          <div className="flex items-center gap-2 mt-2 text-cyan-300 animate-pulse">
            <Bot className="text-cyan-400" size={18} />
            Pensando...
          </div>
        )}
      </div>
      {/* Formulario */}
      <form onSubmit={handleSend} className="flex gap-2 relative">
        <input
          type="text"
          className="flex-1 px-4 py-2 rounded-lg bg-slate-800 text-white placeholder:text-slate-400 border border-cyan-700 focus:outline-none focus:ring-2 focus:ring-cyan-400"
          placeholder="Pregunta a Xotrik IA..."
          value={input}
          onChange={e => setInput(e.target.value)}
          disabled={loading}
          autoFocus
          onFocus={() => setSuggesting(false)}
        />
        <button
          type="submit"
          disabled={loading}
          className="px-4 py-2 rounded-lg bg-cyan-600 hover:bg-cyan-400 text-white font-bold transition flex items-center gap-1"
        >
          {loading ? "Enviando..." : <><CornerDownLeft size={17} /> Enviar</>}
        </button>
      </form>
      <div className="text-xs text-slate-500 mt-3 text-right">
        Powered by Gemini
      </div>
      {error && <div className="text-red-400 mt-1">{error}</div>}
    </section>
  );
}
