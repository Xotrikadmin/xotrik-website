import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Bot, Zap, Workflow, BarChart4, ShieldCheck, Code2, Cpu, Cog,
  TrendingUp, MessageSquare, UserCog, Terminal, Cloud
} from "lucide-react";

/** =========================
 *  Background Pro (Aurora + Mesh + Grid + Noise + Vignette)
 *  ========================= */
function BackgroundPro() {
  const prefersReducedMotion = useReducedMotion();

  // SVG noise inline (sin requests externos)
  const noiseDataURI =
    "url(\"data:image/svg+xml;utf8,\
<svg xmlns='http://www.w3.org/2000/svg' width='60' height='60' viewBox='0 0 60 60'>\
<filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/></filter>\
<rect width='100%' height='100%' filter='url(%23n)' opacity='0.06'/>\
</svg>\")";

  return (
    <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
      {/* Gradient mesh base */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `
            radial-gradient(70% 120% at 20% 0%, #0b2b3a 0%, rgba(10,24,40,0) 60%),
            radial-gradient(60% 80% at 85% 15%, rgba(23,133,130,0.38) 0%, rgba(23,133,130,0) 60%),
            radial-gradient(110% 110% at 50% 80%, rgba(212,175,55,0.12) 0%, rgba(212,175,55,0) 60%),
            linear-gradient(180deg, #0A1828 0%, #081420 60%, #07101b 100%)
          `,
        }}
      />

      {/* Grid sutil */}
      <div
        className="absolute inset-0 opacity-20 mix-blend-soft-light"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px, 60px 60px",
          maskImage: "radial-gradient(120% 80% at 50% 50%, black 40%, transparent 100%)",
          WebkitMaskImage: "radial-gradient(120% 80% at 50% 50%, black 40%, transparent 100%)",
        }}
      />

      {/* Orbes volumétricos (animados) */}
      {!prefersReducedMotion && (
        <>
          {[{x:"15%",y:"20%",c:"#178582"},{x:"75%",y:"25%",c:"#D4AF37"},{x:"50%",y:"70%",c:"#114F55"}].map((b, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full blur-3xl"
              style={{
                width: 380 + i * 90,
                height: 300 + i * 80,
                left: b.x,
                top: b.y,
                background: `radial-gradient(ellipse at center, ${b.c}55 0%, ${b.c}00 70%)`,
                willChange: "transform, opacity",
              }}
              initial={{ opacity: 0.32, scale: 1 }}
              animate={{ opacity: [0.28, 0.48, 0.28], scale: [1, 1.08, 1] }}
              transition={{ duration: 12 + i * 2, repeat: Infinity, ease: "easeInOut", delay: i * 1.1 }}
            />
          ))}
        </>
      )}

      {/* Cintas de aurora suaves */}
      {!prefersReducedMotion && (
        <motion.div
          className="absolute left-1/2 -translate-x-1/2 top-0 w-[140vw] h-[80vh]"
          style={{
            background:
              "radial-gradient(ellipse at center, rgba(23,133,130,0.28) 0%, rgba(10,24,40,0.05) 70%)",
            filter: "blur(18px)",
            willChange: "transform, opacity",
          }}
          initial={{ opacity: 0.18, scale: 1.05 }}
          animate={{ opacity: [0.18, 0.34, 0.18], scale: [1.05, 1, 1.05] }}
          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
        />
      )}

      {/* Viñeta */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(120% 85% at 50% 35%, rgba(0,0,0,0) 0%, rgba(0,0,0,0.25) 70%, rgba(0,0,0,0.5) 100%)",
        }}
      />

      {/* Noise inline */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: noiseDataURI,
          mixBlendMode: "soft-light",
          opacity: 0.8,
        }}
      />
    </div>
  );
}

/** =========================
 *  UI Helpers
 *  ========================= */
const GlassCard = ({ children, className = "" }) => (
  <div
    className={`relative rounded-3xl bg-white/5 backdrop-blur-2xl shadow-[0_12px_64px_#17858233] border border-[#17858240] p-7 ${className}`}
  >
    <div
      className="absolute inset-0 rounded-3xl pointer-events-none"
      style={{ boxShadow: "0 2px 22px 2px #D4AF3733, 0 0 0 1.5px #D4AF3711" }}
    />
    {children}
  </div>
);

const NeonButton = ({ children, to, variant = "primary", ...props }) => {
  const isGold = variant === "gold";
  const base =
    "inline-flex items-center gap-2 px-8 py-3 rounded-2xl font-bold text-lg shadow-2xl hover:scale-105 transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#D4AF37]/50";
  const cls = isGold
    ? "bg-[#D4AF37] text-[#0A1828] hover:bg-[#178582] hover:text-white shadow-[0_0_24px_#D4AF37cc]"
    : "bg-[#178582] text-white hover:bg-[#D4AF37] hover:text-[#0A1828] shadow-[0_0_24px_#178582bb]";
  return (
    <Link to={to} className={`${base} ${cls}`} {...props}>
      {children}
    </Link>
  );
};

const IconBadge = ({ icon: Icon, label }) => (
  <span className="flex items-center gap-1 px-3 py-1 bg-[#0A1828cc] text-[#D4AF37] font-bold rounded-xl border border-[#D4AF37]/20 shadow hover:shadow-[0_0_18px_#D4AF37bb] text-xs">
    <Icon size={15} className="text-[#D4AF37]" />
    {label}
  </span>
);

const BotExampleCard = ({ icon: Icon, name, desc, accent = "#D4AF37" }) => (
  <GlassCard
    className="w-[220px] min-h-[180px] hover:shadow-[0_0_44px_#D4AF37dd]"
    style={{}}
  >
    <div
      className="rounded-2xl p-2 mb-3"
      style={{
        background: `color-mix(in srgb, ${accent} 30%, transparent)`,
        boxShadow: `0 0 20px ${accent}bb`,
      }}
    >
      <Icon size={32} style={{ color: accent }} />
    </div>
    <span className="font-black text-base text-[#D4AF37] mb-1 block">{name}</span>
    <span className="text-xs text-slate-100 block">{desc}</span>
  </GlassCard>
);

/** =========================
 *  Página principal
 *  ========================= */
export default function ServiceAutomationXotrikProFuturistic() {
  return (
    <div className="relative min-h-screen w-full bg-[#0A1828] font-sans pb-28 overflow-x-hidden">
      <BackgroundPro />

      {/* HERO */}
      <section className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-14 pt-20 pb-14 relative z-10">
        <div className="flex-1 flex flex-col items-center md:items-start">
          <span className="inline-block uppercase tracking-widest font-extrabold text-sm text-[#D4AF37] mb-5 flex items-center gap-2">
            <Cog size={18} className="text-[#178582]" /> Automatización AI
          </span>

          <h1 className="text-5xl md:text-6xl font-black text-white mb-5 md:mb-10 text-center md:text-left leading-tight drop-shadow-[0_10px_40px_#D4AF3740]">
            Un nuevo estándar<br />en Automatización Empresarial
          </h1>

          <p className="text-xl text-[#d4af37d9] mb-10 text-center md:text-left max-w-2xl font-semibold">
            Bots, inteligencia artificial y orquestación total.<br />
            <span className="block text-[#178582] mt-2 font-bold">
              Automatiza lo imposible, lidera el futuro.
            </span>
          </p>

          <div className="flex flex-wrap gap-3 mb-8">
            <IconBadge icon={Zap} label="Bots & RPA" />
            <IconBadge icon={Workflow} label="Workflows Smart" />
            <IconBadge icon={BarChart4} label="KPIs Live" />
            <IconBadge icon={ShieldCheck} label="Auditoría AI" />
            <IconBadge icon={Cpu} label="Integraciones API" />
          </div>

          <div className="flex gap-4 mt-3">
            <NeonButton to="/contact" variant="gold">Cotiza tu automatización</NeonButton>
            <NeonButton to="/services">Volver a Servicios</NeonButton>
          </div>
        </div>

        {/* Bot hero con halo */}
        <div className="flex-1 flex justify-center items-center min-w-[320px] relative">
          <motion.div
            className="absolute left-1/2 -translate-x-1/2 top-10 w-[320px] h-[220px] blur-3xl z-0"
            style={{ background: "radial-gradient(ellipse at center, #D4AF3755 0%, #0A182800 90%)" }}
            animate={{ scale: [1, 1.08, 1], opacity: [0.32, 0.54, 0.32] }}
            transition={{ repeat: Infinity, duration: 10, ease: "easeInOut" }}
          />
          <GlassCard className="z-10 p-0 w-[340px] h-[200px] flex items-center justify-center border-0">
            <motion.div
              className="rounded-2xl bg-[#17858299] w-[180px] h-[38px] absolute left-1/2 -translate-x-1/2 -top-6 blur-md"
              animate={{ opacity: [0.24, 0.34, 0.24], scale: [1.1, 0.96, 1.1] }}
              transition={{ repeat: Infinity, duration: 7, ease: "easeInOut" }}
            />
            <Bot size={90} className="text-[#D4AF37] drop-shadow-[0_2px_24px_#D4AF37cc]" />
          </GlassCard>
        </div>
      </section>

      {/* Ejemplos de bots */}
      <section className="max-w-7xl mx-auto px-4 pt-6 pb-14 relative z-10">
        <h2 className="text-2xl md:text-3xl font-black mb-10 text-center text-white tracking-tight">
          ¿Qué puede hacer un <span className="text-[#D4AF37]">Bot Xotrik</span>?
        </h2>

        <div className="flex flex-wrap gap-10 justify-center items-stretch">
          <BotExampleCard
            icon={MessageSquare}
            name="Bot de Atención 24/7"
            desc="Responde a clientes y canaliza tickets por WhatsApp, Teams y correo, sin intervención humana."
            accent="#D4AF37"
          />
          <BotExampleCard
            icon={Terminal}
            name="Bot RPA Facturación"
            desc="Extrae datos de PDFs, los carga a SAP y reporta en segundos, con trazabilidad total."
            accent="#178582"
          />
          <BotExampleCard
            icon={UserCog}
            name="Onboarding Bot"
            desc="Automatiza el alta de empleados, permisos y capacitaciones."
            accent="#114F55"
          />
          <BotExampleCard
            icon={Cloud}
            name="Bot de Integración Cloud"
            desc="Sincroniza Salesforce, ERP, planillas y correo en tiempo real."
            accent="#D4AF37"
          />
        </div>
      </section>

      {/* Features */}
      <section className="max-w-7xl mx-auto px-4 pt-4 pb-12 relative z-10">
        <h2 className="text-2xl md:text-3xl font-black mb-10 text-center text-white tracking-tight">
          Tecnología <span className="text-[#D4AF37]">real</span> para negocios reales
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <GlassCard>
            <Bot size={36} className="text-[#D4AF37] mb-3" />
            <h3 className="font-black text-lg text-white mb-2">Bots RPA</h3>
            <div className="text-slate-100 text-sm">
              Automatización que ejecuta tareas repetitivas, 24/7, sin errores.
            </div>
          </GlassCard>
          <GlassCard>
            <Cpu size={36} className="text-[#178582] mb-3" />
            <h3 className="font-black text-lg text-white mb-2">Integración API</h3>
            <div className="text-slate-100 text-sm">
              Conecta todos tus sistemas, elimina silos y acelera procesos.
            </div>
          </GlassCard>
          <GlassCard>
            <Code2 size={36} className="text-[#114F55] mb-3" />
            <h3 className="font-black text-lg text-white mb-2">Workflows AI</h3>
            <div className="text-slate-100 text-sm">
              Flujos automáticos, notificaciones, validaciones y monitoreo.
            </div>
          </GlassCard>
          <GlassCard>
            <BarChart4 size={36} className="text-[#D4AF37] mb-3" />
            <h3 className="font-black text-lg text-white mb-2">KPIs Live</h3>
            <div className="text-slate-100 text-sm">
              Dashboards, alertas y datos en tiempo real, siempre disponibles.
            </div>
          </GlassCard>
        </div>
      </section>

      {/* Beneficios */}
      <section className="max-w-5xl mx-auto px-2 pt-10 pb-10 relative z-10">
        <h3 className="text-xl md:text-2xl font-black mb-8 text-center text-[#D4AF37] tracking-tight">
          Resultados <span className="text-[#178582]">exponenciales</span>:
        </h3>

        <ol className="relative border-l-4 border-[#178582]/40 pl-7 space-y-14">
          <li>
            <div className="absolute -left-5 top-1 bg-[#D4AF37] rounded-full w-8 h-8 flex items-center justify-center shadow-xl">
              <TrendingUp size={22} className="text-[#0A1828]" />
            </div>
            <div>
              <span className="text-[#D4AF37] font-black">+70% eficiencia</span>
              <div className="text-white mt-1">Reduce tiempos y errores hasta 70% con bots y automatización.</div>
            </div>
          </li>

          <li>
            <div className="absolute -left-5 top-1 bg-[#178582] rounded-full w-8 h-8 flex items-center justify-center shadow-xl">
              <ShieldCheck size={22} className="text-white" />
            </div>
            <div>
              <span className="text-[#178582] font-black">Auditoría total</span>
              <div className="text-white mt-1">Trazabilidad en cada proceso y control en tiempo real.</div>
            </div>
          </li>

          <li>
            <div className="absolute -left-5 top-1 bg-[#114F55] rounded-full w-8 h-8 flex items-center justify-center shadow-xl">
              <BarChart4 size={22} className="text-[#D4AF37]" />
            </div>
            <div>
              <span className="text-[#114F55] font-black">KPIs automáticos</span>
              <div className="text-white mt-1">Monitoreo, alertas y dashboards siempre actualizados.</div>
            </div>
          </li>
        </ol>
      </section>
    </div>
  );
}
