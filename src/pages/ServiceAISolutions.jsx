// import React, { useState } from "react";
// import { motion } from "framer-motion";
// import {
//   BrainCircuit, Bot, Languages, Sparkles, BarChart4, Rocket, Zap, ArrowRight
// } from "lucide-react";

// // SVG Hero visual
// const XotrikBrain = () => (
//   <motion.svg
//     viewBox="0 0 440 270"
//     className="w-[340px] h-[210px] md:w-[420px] md:h-[260px]"
//     aria-hidden="true"
//     initial={{ scale: 0.96, opacity: 0 }}
//     animate={{ scale: 1, opacity: 1 }}
//     transition={{ duration: 1.4, ease: "easeOut" }}
//   >
//     <defs>
//       <radialGradient id="bg1" cx="50%" cy="44%" r="60%">
//         <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.50"/>
//         <stop offset="90%" stopColor="#0ea5e9" stopOpacity="0.07"/>
//         <stop offset="100%" stopColor="#232838" stopOpacity="0"/>
//       </radialGradient>
//       <linearGradient id="l1" x1="0" y1="0" x2="1" y2="1">
//         <stop stopColor="#fff" stopOpacity="0.95"/>
//         <stop offset="1" stopColor="#818cf8" stopOpacity="0.47"/>
//       </linearGradient>
//       <radialGradient id="gN" cx="50%" cy="50%" r="70%">
//         <stop offset="0%" stopColor="#a5f3fc" stopOpacity="0.8"/>
//         <stop offset="85%" stopColor="#06b6d4" stopOpacity="0"/>
//       </radialGradient>
//     </defs>
//     {/* Fondo difuso */}
//     <ellipse cx="220" cy="135" rx="145" ry="97" fill="url(#bg1)" />
//     {/* Trayectorias de red */}
//     <motion.path
//       d="M120 150 Q220 40 320 150"
//       stroke="url(#l1)"
//       strokeWidth="7"
//       fill="none"
//       initial={{ pathLength: 0 }}
//       animate={{ pathLength: 1 }}
//       transition={{ duration: 1.2, delay: 0.4, ease: "easeInOut" }}
//     />
//     <motion.path
//       d="M140 195 Q220 90 300 195"
//       stroke="#06b6d4"
//       strokeWidth="3.5"
//       fill="none"
//       initial={{ pathLength: 0 }}
//       animate={{ pathLength: 1 }}
//       transition={{ duration: 1.3, delay: 0.7, ease: "easeInOut" }}
//       opacity={0.7}
//     />
//     {/* Nodos principales animados */}
//     <motion.circle
//       cx="220" cy="135" r="32"
//       fill="url(#gN)"
//       animate={{ r: [32, 36, 32] }}
//       transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
//       opacity={0.64}
//     />
//     <motion.circle
//       cx="120" cy="150" r="14"
//       fill="#a3e635"
//       animate={{ r: [14, 17, 14] }}
//       transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut", delay: 0.5 }}
//       opacity={0.78}
//     />
//     <motion.circle
//       cx="320" cy="150" r="13"
//       fill="#818cf8"
//       animate={{ r: [13, 16, 13] }}
//       transition={{ repeat: Infinity, duration: 2.3, ease: "easeInOut", delay: 1.1 }}
//       opacity={0.79}
//     />
//     {/* Subnodos flotantes */}
//     <motion.circle
//       cx="160" cy="105" r="8"
//       fill="#fbbf24"
//       animate={{ cy: [105, 101, 105] }}
//       transition={{ repeat: Infinity, duration: 2.7, ease: "easeInOut" }}
//       opacity={0.88}
//     />
//     <motion.circle
//       cx="280" cy="109" r="8"
//       fill="#f472b6"
//       animate={{ cy: [109, 115, 109] }}
//       transition={{ repeat: Infinity, duration: 2.2, ease: "easeInOut" }}
//       opacity={0.88}
//     />
//     {/* Glow debajo */}
//     <ellipse cx="220" cy="215" rx="72" ry="16" fill="#38bdf899" opacity="0.12"/>
//   </motion.svg>
// );

// // Lucide para badges/avatar
// const LucideBadge = ({ icon: Icon, label, color }) => (
//   <span className={`flex items-center gap-1 px-3 py-1 rounded-full text-xs font-bold border ${color?.border || "border-cyan-400"} ${color?.bg || "bg-cyan-700/20"} ${color?.text || "text-cyan-300"}`}>
//     <Icon size={15} className={color?.icon || ""} />
//     {label}
//   </span>
// );

// // Feature card
// const FeatureCard = ({ icon: Icon, title, children, color }) => (
//   <motion.div
//     initial={{ opacity: 0, y: 30 }}
//     whileInView={{ opacity: 1, y: 0 }}
//     viewport={{ once: true }}
//     transition={{ duration: 0.7, ease: "easeOut" }}
//     className="bg-[#121d2c]/80 border border-cyan-700/20 rounded-2xl p-6 md:p-8 shadow-xl flex flex-col items-center text-center backdrop-blur-2xl"
//   >
//     <div className={`mb-3 text-3xl ${color || "text-cyan-300"}`}>
//       <Icon size={32} />
//     </div>
//     <h3 className="font-bold text-lg text-slate-100 mb-2">{title}</h3>
//     <div className="text-slate-300 text-sm">{children}</div>
//   </motion.div>
// );

// export default function XotrikIAProLucide() {
//   // Chat mini demo (sin API)
//   const [input, setInput] = useState("");
//   const [messages, setMessages] = useState([
//     { user: "bot", text: "¡Bienvenido a Xotrik IA! Pregúntame sobre automatización, análisis, chatbots, idiomas, tendencias, lo que quieras." }
//   ]);
//   const [loading, setLoading] = useState(false);

//   const handleSend = async (e) => {
//     e.preventDefault();
//     if (!input.trim() || loading) return;
//     setMessages((m) => [...m, { user: "user", text: input }]);
//     setLoading(true);
//     setTimeout(() => {
//       setMessages((m) => [...m, { user: "bot", text: "Esta es una respuesta simulada de Xotrik IA (integra Gemini API aquí)." }]);
//       setLoading(false);
//       setInput("");
//     }, 1100);
//   };

//   return (
//     <div className="w-full min-h-screen bg-gradient-to-br from-[#101a2e] via-[#101523] to-[#05081c] pb-20 pt-6">
//       {/* HERO */}
//       <section className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-12 pt-10 pb-20">
//         <div className="flex-1 flex flex-col items-center md:items-start z-10">
//           <span className="inline-block uppercase tracking-widest font-bold text-xs md:text-sm text-cyan-300 mb-3 flex items-center gap-2">
//             <BrainCircuit size={18} className="text-cyan-400" /> Xotrik IA
//           </span>
//           <h1 className="text-4xl md:text-6xl font-black bg-clip-text text-transparent bg-gradient-to-br from-[#7dd3fc] via-[#38bdf8] to-[#818cf8] drop-shadow-[0_5px_32px_#38bdf888] mb-4 md:mb-8 text-center md:text-left leading-tight">
//             Inteligencia Artificial<br />
//             que <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 via-cyan-300 to-sky-400">potencia tu empresa</span>
//           </h1>
//           <p className="text-base md:text-lg text-slate-200 mb-7 text-center md:text-left max-w-xl">
//             Xotrik IA conecta tu negocio con la inteligencia artificial más avanzada.<br/>
//             <span className="inline-block mt-2 text-cyan-300 font-semibold">Transforma procesos, automatiza tareas, analiza datos y escala tu impacto.</span>
//           </p>
//           {/* Badges Lucide */}
//           <div className="flex flex-wrap gap-3 mb-7">
//             <LucideBadge icon={Zap} label="Automatización" color={{bg: "bg-cyan-700/20", border: "border-cyan-400", text: "text-cyan-300", icon: "text-cyan-400"}} />
//             <LucideBadge icon={Bot} label="Chatbots" color={{bg: "bg-violet-700/20", border: "border-violet-400", text: "text-violet-300", icon: "text-violet-400"}} />
//             <LucideBadge icon={Sparkles} label="Modelos Generativos" color={{bg: "bg-emerald-800/20", border: "border-emerald-400", text: "text-emerald-300", icon: "text-emerald-400"}} />
//             <LucideBadge icon={BarChart4} label="Análisis Predictivo" color={{bg: "bg-yellow-600/20", border: "border-yellow-300", text: "text-yellow-200", icon: "text-yellow-400"}} />
//             <LucideBadge icon={Languages} label="Traducción" color={{bg: "bg-cyan-800/10", border: "border-cyan-300", text: "text-cyan-200", icon: "text-cyan-400"}} />
//           </div>
//           {/* CTA */}
//           <a
//             href="#xotrik-features"
//             className="inline-flex items-center gap-2 px-8 py-3 rounded-xl bg-cyan-600 hover:bg-cyan-400 text-white text-base font-bold shadow-xl transition-all focus:ring-2 focus:ring-cyan-300"
//           >
//             Descubre Xotrik IA <ArrowRight size={18}/>
//           </a>
//         </div>
//         <div className="flex-1 flex justify-center items-center min-w-[320px]">
//           <XotrikBrain />
//         </div>
//       </section>

//       {/* FEATURES Lucide */}
//       <section id="xotrik-features" className="max-w-7xl mx-auto px-4 pt-4 pb-12">
//         <h2 className="text-2xl md:text-3xl font-extrabold mb-10 text-center text-cyan-200 tracking-tight">
//           ¿Qué puede hacer <span className="text-[#38bdf8]">Xotrik IA</span> por ti?
//         </h2>
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7">
//           <FeatureCard icon={Bot} title="Chatbots & Asistentes">
//             Crea asistentes inteligentes para atención 24/7, soporte y ventas.<br />
//             <span className="text-cyan-400">Conversaciones naturales, integradas con tus sistemas.</span>
//           </FeatureCard>
//           <FeatureCard icon={Zap} title="Automatización Inteligente" color="text-cyan-400">
//             Automatiza tareas repetitivas, documentos y flujos de trabajo.<br />
//             <span className="text-cyan-400">Menos errores, más tiempo para lo estratégico.</span>
//           </FeatureCard>
//           <FeatureCard icon={BarChart4} title="Análisis & Predicción" color="text-yellow-400">
//             Analiza datos, detecta tendencias, predice ventas, rotación, fraude, etc.<br />
//             <span className="text-cyan-400">Toma decisiones informadas en segundos.</span>
//           </FeatureCard>
//           <FeatureCard icon={Languages} title="IA Multilingüe">
//             Traduce documentos y chats, entrena modelos en español o inglés.<br />
//             <span className="text-cyan-400">Conecta tu negocio al mundo.</span>
//           </FeatureCard>
//         </div>
//       </section>

//       {/* Timeline - con Lucide */}
//       <section className="max-w-5xl mx-auto px-2 pt-12 pb-20">
//         <h3 className="text-xl md:text-2xl font-bold mb-8 text-center text-[#f3f5fa] tracking-tight">
//           Así transforma Xotrik IA tu empresa:
//         </h3>
//         <ol className="relative border-l-4 border-cyan-700/60 pl-7 space-y-12">
//           <li>
//             <div className="absolute -left-5 top-1 bg-cyan-400 rounded-full w-8 h-8 flex items-center justify-center shadow-lg">
//               <Rocket size={22} className="text-cyan-900" />
//             </div>
//             <div>
//               <span className="text-cyan-300 font-semibold">1. Integración fácil</span>
//               <div className="text-slate-300 mt-1">Conectamos Xotrik IA a tus sistemas y fuentes de datos, rápido y seguro.</div>
//             </div>
//           </li>
//           <li>
//             <div className="absolute -left-5 top-1 bg-cyan-400 rounded-full w-8 h-8 flex items-center justify-center shadow-lg">
//               <Sparkles size={22} className="text-cyan-900" />
//             </div>
//             <div>
//               <span className="text-cyan-300 font-semibold">2. Entrenamiento personalizado</span>
//               <div className="text-slate-300 mt-1">Ajustamos los modelos y flujos a tus necesidades y reglas de negocio.</div>
//             </div>
//           </li>
//           <li>
//             <div className="absolute -left-5 top-1 bg-cyan-400 rounded-full w-8 h-8 flex items-center justify-center shadow-lg">
//               <BarChart4 size={22} className="text-cyan-900" />
//             </div>
//             <div>
//               <span className="text-cyan-300 font-semibold">3. Resultados reales</span>
//               <div className="text-slate-300 mt-1">Ves mejoras en productividad, calidad y experiencia del usuario desde el primer mes.</div>
//             </div>
//           </li>
//         </ol>
//       </section>

//       {/* DEMO CHAT MINI Lucide */}
//       <section id="xotrik-chat-demo" className="w-full max-w-lg mx-auto bg-gradient-to-br from-cyan-900/80 to-blue-950/70 border border-cyan-700/40 rounded-2xl p-6 shadow-2xl">
//         <div className="flex items-center gap-3 mb-4">
//           <Bot className="text-cyan-400" size={28} />
//           <h3 className="text-lg font-bold text-cyan-200">Prueba Xotrik IA</h3>
//         </div>
//         <div className="h-56 bg-black/40 rounded-xl p-4 overflow-y-auto mb-4 border border-cyan-900/50 flex flex-col gap-1">
//           {messages.map((msg, i) =>
//             msg.user === "bot" ? (
//               <div key={i} className="flex items-center gap-2 mb-1">
//                 <Bot className="text-cyan-400" size={18} />
//                 <span className="text-cyan-100 font-semibold text-sm">{msg.text}</span>
//               </div>
//             ) : (
//               <div key={i} className="flex items-center gap-2 mb-1 justify-end">
//                 <span className="text-slate-200 text-sm bg-cyan-700/10 px-3 py-1 rounded-xl">{msg.text}</span>
//               </div>
//             )
//           )}
//           {loading && (
//             <div className="flex items-center gap-2 mt-2 text-cyan-300 animate-pulse">
//               <Bot className="text-cyan-400" size={18} />
//               Pensando...
//             </div>
//           )}
//         </div>
//         <form onSubmit={handleSend} className="flex gap-2">
//           <input
//             type="text"
//             className="flex-1 px-4 py-2 rounded-lg bg-slate-800 text-white placeholder:text-slate-400 border border-cyan-700 focus:outline-none focus:ring-2 focus:ring-cyan-400"
//             placeholder="Pregunta a Xotrik IA..."
//             value={input}
//             onChange={e => setInput(e.target.value)}
//             disabled={loading}
//           />
//           <button
//             type="submit"
//             disabled={loading}
//             className="px-5 py-2 rounded-lg bg-cyan-600 hover:bg-cyan-400 text-white font-bold transition"
//           >
//             {loading ? "Enviando..." : "Enviar"}
//           </button>
//         </form>
//         <div className="text-xs text-slate-500 mt-2 text-right">
//           Powered by Gemini
//         </div>
//       </section>
//     </div>
//   );
// }
import React from "react";
import { motion } from "framer-motion";
import {
  BrainCircuit, Bot, Languages, Sparkles, BarChart4, Rocket, Zap, ArrowRight
} from "lucide-react";
import XotrikIAChat from "../components/XotrikIAChat"; // <-- Usa tu componente chat aquí

// SVG Hero visual
const XotrikBrain = () => (
  <motion.svg
    viewBox="0 0 440 270"
    className="w-[340px] h-[210px] md:w-[420px] md:h-[260px]"
    aria-hidden="true"
    initial={{ scale: 0.96, opacity: 0 }}
    animate={{ scale: 1, opacity: 1 }}
    transition={{ duration: 1.4, ease: "easeOut" }}
  >
    <defs>
      <radialGradient id="bg1" cx="50%" cy="44%" r="60%">
        <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.50"/>
        <stop offset="90%" stopColor="#0ea5e9" stopOpacity="0.07"/>
        <stop offset="100%" stopColor="#232838" stopOpacity="0"/>
      </radialGradient>
      <linearGradient id="l1" x1="0" y1="0" x2="1" y2="1">
        <stop stopColor="#fff" stopOpacity="0.95"/>
        <stop offset="1" stopColor="#818cf8" stopOpacity="0.47"/>
      </linearGradient>
      <radialGradient id="gN" cx="50%" cy="50%" r="70%">
        <stop offset="0%" stopColor="#a5f3fc" stopOpacity="0.8"/>
        <stop offset="85%" stopColor="#06b6d4" stopOpacity="0"/>
      </radialGradient>
    </defs>
    <ellipse cx="220" cy="135" rx="145" ry="97" fill="url(#bg1)" />
    <motion.path
      d="M120 150 Q220 40 320 150"
      stroke="url(#l1)"
      strokeWidth="7"
      fill="none"
      initial={{ pathLength: 0 }}
      animate={{ pathLength: 1 }}
      transition={{ duration: 1.2, delay: 0.4, ease: "easeInOut" }}
    />
    <motion.path
      d="M140 195 Q220 90 300 195"
      stroke="#06b6d4"
      strokeWidth="3.5"
      fill="none"
      initial={{ pathLength: 0 }}
      animate={{ pathLength: 1 }}
      transition={{ duration: 1.3, delay: 0.7, ease: "easeInOut" }}
      opacity={0.7}
    />
    <motion.circle
      cx="220" cy="135" r="32"
      fill="url(#gN)"
      animate={{ r: [32, 36, 32] }}
      transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
      opacity={0.64}
    />
    <motion.circle
      cx="120" cy="150" r="14"
      fill="#a3e635"
      animate={{ r: [14, 17, 14] }}
      transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut", delay: 0.5 }}
      opacity={0.78}
    />
    <motion.circle
      cx="320" cy="150" r="13"
      fill="#818cf8"
      animate={{ r: [13, 16, 13] }}
      transition={{ repeat: Infinity, duration: 2.3, ease: "easeInOut", delay: 1.1 }}
      opacity={0.79}
    />
    <motion.circle
      cx="160" cy="105" r="8"
      fill="#fbbf24"
      animate={{ cy: [105, 101, 105] }}
      transition={{ repeat: Infinity, duration: 2.7, ease: "easeInOut" }}
      opacity={0.88}
    />
    <motion.circle
      cx="280" cy="109" r="8"
      fill="#f472b6"
      animate={{ cy: [109, 115, 109] }}
      transition={{ repeat: Infinity, duration: 2.2, ease: "easeInOut" }}
      opacity={0.88}
    />
    <ellipse cx="220" cy="215" rx="72" ry="16" fill="#38bdf899" opacity="0.12"/>
  </motion.svg>
);

// Lucide Badge
const LucideBadge = ({ icon: Icon, label, color }) => (
  <span className={`flex items-center gap-1 px-3 py-1 rounded-full text-xs font-bold border ${color?.border || "border-cyan-400"} ${color?.bg || "bg-cyan-700/20"} ${color?.text || "text-cyan-300"}`}>
    <Icon size={15} className={color?.icon || ""} />
    {label}
  </span>
);

// Feature card
const FeatureCard = ({ icon: Icon, title, children, color }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.7, ease: "easeOut" }}
    className="bg-[#121d2c]/80 border border-cyan-700/20 rounded-2xl p-6 md:p-8 shadow-xl flex flex-col items-center text-center backdrop-blur-2xl"
  >
    <div className={`mb-3 text-3xl ${color || "text-cyan-300"}`}>
      <Icon size={32} />
    </div>
    <h3 className="font-bold text-lg text-slate-100 mb-2">{title}</h3>
    <div className="text-slate-300 text-sm">{children}</div>
  </motion.div>
);

export default function XotrikIAProLucide() {
  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-[#101a2e] via-[#101523] to-[#05081c] pb-20 pt-6">
      {/* HERO */}
      <section className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-12 pt-10 pb-20">
        <div className="flex-1 flex flex-col items-center md:items-start z-10">
          <span className="inline-block uppercase tracking-widest font-bold text-xs md:text-sm text-cyan-300 mb-3 flex items-center gap-2">
            <BrainCircuit size={18} className="text-cyan-400" /> Xotrik IA
          </span>
          <h1 className="text-4xl md:text-6xl font-black bg-clip-text text-transparent bg-gradient-to-br from-[#7dd3fc] via-[#38bdf8] to-[#818cf8] drop-shadow-[0_5px_32px_#38bdf888] mb-4 md:mb-8 text-center md:text-left leading-tight">
            Inteligencia Artificial<br />
            que <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 via-cyan-300 to-sky-400">potencia tu empresa</span>
          </h1>
          <p className="text-base md:text-lg text-slate-200 mb-7 text-center md:text-left max-w-xl">
            Xotrik IA conecta tu negocio con la inteligencia artificial más avanzada.<br/>
            <span className="inline-block mt-2 text-cyan-300 font-semibold">Transforma procesos, automatiza tareas, analiza datos y escala tu impacto.</span>
          </p>
          {/* Badges Lucide */}
          <div className="flex flex-wrap gap-3 mb-7">
            <LucideBadge icon={Zap} label="Automatización" color={{bg: "bg-cyan-700/20", border: "border-cyan-400", text: "text-cyan-300", icon: "text-cyan-400"}} />
            <LucideBadge icon={Bot} label="Chatbots" color={{bg: "bg-violet-700/20", border: "border-violet-400", text: "text-violet-300", icon: "text-violet-400"}} />
            <LucideBadge icon={Sparkles} label="Modelos Generativos" color={{bg: "bg-emerald-800/20", border: "border-emerald-400", text: "text-emerald-300", icon: "text-emerald-400"}} />
            <LucideBadge icon={BarChart4} label="Análisis Predictivo" color={{bg: "bg-yellow-600/20", border: "border-yellow-300", text: "text-yellow-200", icon: "text-yellow-400"}} />
            <LucideBadge icon={Languages} label="Traducción" color={{bg: "bg-cyan-800/10", border: "border-cyan-300", text: "text-cyan-200", icon: "text-cyan-400"}} />
          </div>
          {/* CTA */}
          <a
            href="#xotrik-features"
            className="inline-flex items-center gap-2 px-8 py-3 rounded-xl bg-cyan-600 hover:bg-cyan-400 text-white text-base font-bold shadow-xl transition-all focus:ring-2 focus:ring-cyan-300"
          >
            Descubre Xotrik IA <ArrowRight size={18}/>
          </a>
        </div>
        <div className="flex-1 flex justify-center items-center min-w-[320px]">
          <XotrikBrain />
        </div>
      </section>

      {/* FEATURES Lucide */}
      <section id="xotrik-features" className="max-w-7xl mx-auto px-4 pt-4 pb-12">
        <h2 className="text-2xl md:text-3xl font-extrabold mb-10 text-center text-cyan-200 tracking-tight">
          ¿Qué puede hacer <span className="text-[#38bdf8]">Xotrik IA</span> por ti?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7">
          <FeatureCard icon={Bot} title="Chatbots & Asistentes">
            Crea asistentes inteligentes para atención 24/7, soporte y ventas.<br />
            <span className="text-cyan-400">Conversaciones naturales, integradas con tus sistemas.</span>
          </FeatureCard>
          <FeatureCard icon={Zap} title="Automatización Inteligente" color="text-cyan-400">
            Automatiza tareas repetitivas, documentos y flujos de trabajo.<br />
            <span className="text-cyan-400">Menos errores, más tiempo para lo estratégico.</span>
          </FeatureCard>
          <FeatureCard icon={BarChart4} title="Análisis & Predicción" color="text-yellow-400">
            Analiza datos, detecta tendencias, predice ventas, rotación, fraude, etc.<br />
            <span className="text-cyan-400">Toma decisiones informadas en segundos.</span>
          </FeatureCard>
          <FeatureCard icon={Languages} title="IA Multilingüe">
            Traduce documentos y chats, entrena modelos en español o inglés.<br />
            <span className="text-cyan-400">Conecta tu negocio al mundo.</span>
          </FeatureCard>
        </div>
      </section>

      {/* Timeline - con Lucide */}
      <section className="max-w-5xl mx-auto px-2 pt-12 pb-20">
        <h3 className="text-xl md:text-2xl font-bold mb-8 text-center text-[#f3f5fa] tracking-tight">
          Así transforma Xotrik IA tu empresa:
        </h3>
        <ol className="relative border-l-4 border-cyan-700/60 pl-7 space-y-12">
          <li>
            <div className="absolute -left-5 top-1 bg-cyan-400 rounded-full w-8 h-8 flex items-center justify-center shadow-lg">
              <Rocket size={22} className="text-cyan-900" />
            </div>
            <div>
              <span className="text-cyan-300 font-semibold">1. Integración fácil</span>
              <div className="text-slate-300 mt-1">Conectamos Xotrik IA a tus sistemas y fuentes de datos, rápido y seguro.</div>
            </div>
          </li>
          <li>
            <div className="absolute -left-5 top-1 bg-cyan-400 rounded-full w-8 h-8 flex items-center justify-center shadow-lg">
              <Sparkles size={22} className="text-cyan-900" />
            </div>
            <div>
              <span className="text-cyan-300 font-semibold">2. Entrenamiento personalizado</span>
              <div className="text-slate-300 mt-1">Ajustamos los modelos y flujos a tus necesidades y reglas de negocio.</div>
            </div>
          </li>
          <li>
            <div className="absolute -left-5 top-1 bg-cyan-400 rounded-full w-8 h-8 flex items-center justify-center shadow-lg">
              <BarChart4 size={22} className="text-cyan-900" />
            </div>
            <div>
              <span className="text-cyan-300 font-semibold">3. Resultados reales</span>
              <div className="text-slate-300 mt-1">Ves mejoras en productividad, calidad y experiencia del usuario desde el primer mes.</div>
            </div>
          </li>
        </ol>
      </section>

      {/* DEMO CHAT - Xotrik IA con Gemini y sugerencias */}
      <div className="max-w-2xl mx-auto w-full mt-10">
        <XotrikIAChat />
      </div>
    </div>
  );
}
