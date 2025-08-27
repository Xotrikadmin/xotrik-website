import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  FaCode, FaCheckCircle, FaMobileAlt, FaCogs, FaCloud, FaShieldAlt,
  FaServer, FaChartLine, FaSyncAlt, FaRocket
} from "react-icons/fa";

/* =========================
 *  Fondo pro (mesh + grid + noise + vignette)
 *  ========================= */
function CinematicBG() {
  const noiseDataURI =
    "url(\"data:image/svg+xml;utf8,\
<svg xmlns='http://www.w3.org/2000/svg' width='80' height='80' viewBox='0 0 80 80'>\
<filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='2' stitchTiles='stitch'/></filter>\
<rect width='100%' height='100%' filter='url(%23n)' opacity='0.06'/>\
</svg>\")";

  return (
    <div className="absolute inset-0 -z-10 pointer-events-none overflow-hidden">
      {/* Base mesh */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `
            radial-gradient(60% 90% at 20% 10%, rgba(20,115,104,0.55) 0%, rgba(10,25,47,0) 60%),
            radial-gradient(55% 75% at 85% 20%, rgba(16,185,129,0.25) 0%, rgba(10,25,47,0) 60%),
            radial-gradient(100% 100% at 50% 95%, rgba(6,78,59,0.4) 0%, rgba(6,78,59,0) 60%),
            linear-gradient(180deg, #062225 0%, #0a192f 55%, #071923 100%)
          `,
        }}
      />
      {/* Grid sutil */}
      <div
        className="absolute inset-0 opacity-15 mix-blend-soft-light"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.06) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.06) 1px, transparent 1px)
          `,
          backgroundSize: "70px 70px, 70px 70px",
          maskImage: "radial-gradient(120% 80% at 50% 40%, black 45%, transparent 100%)",
          WebkitMaskImage: "radial-gradient(120% 80% at 50% 40%, black 45%, transparent 100%)",
        }}
      />
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
          opacity: 0.75,
        }}
      />
    </div>
  );
}

/* =========================
 *  Variants
 *  ========================= */
const fadeUp = (d = 0) => ({
  initial: { opacity: 0, y: 32 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.6, delay: d, ease: "easeOut" } },
});

const scaleIn = (d = 0) => ({
  initial: { opacity: 0, scale: 0.96 },
  animate: { opacity: 1, scale: 1, transition: { duration: 0.5, delay: d, ease: "easeOut" } },
});

/* =========================
 *  UI Helpers
 *  ========================= */
const GlassCard = ({ children, className = "" }) => (
  <div
    className={`relative rounded-2xl bg-white/5 backdrop-blur-xl border border-emerald-400/10 shadow-[0_12px_48px_rgba(16,185,129,0.15)] ${className}`}
  >
    <div className="absolute inset-0 rounded-2xl pointer-events-none" style={{ boxShadow: "0 1px 0 0 rgba(255,255,255,0.04) inset" }} />
    {children}
  </div>
);

const Badge = ({ children }) => (
  <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-emerald-400/30 bg-emerald-900/20 text-emerald-300 text-xs font-semibold">
    {children}
  </span>
);

/* =========================
 *  Componente principal
 *  ========================= */
export default function ServiceCustomDev() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section
      aria-labelledby="custom-dev-title"
      className="relative min-h-screen py-20 px-4 md:px-10 bg-[#0a192f] flex flex-col items-center overflow-hidden"
    >
      <CinematicBG />

      {/* Hero */}
      <motion.div
        {...fadeUp(0)}
        className="max-w-3xl mx-auto text-center"
      >
        <span className="inline-flex items-center gap-2 text-emerald-300 font-bold text-sm uppercase tracking-widest mb-2">
          <FaCode className="text-xl" aria-hidden />
          Custom Development
        </span>

        <h1 id="custom-dev-title" className="text-4xl sm:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-teal-300 via-emerald-300 to-teal-200 drop-shadow mb-4">
          Software a la Medida, Potencia Total
        </h1>

        <p className="text-lg text-slate-200/90 mb-8">
          Soluciones personalizadas, robustas, escalables y seguras, alineadas a tus objetivos.
          Modernizamos tu stack con metodologías ágiles y mejores prácticas de la industria.
        </p>

        {/* Badges de confianza */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          <Badge>Arquitecturas limpias</Badge>
          <Badge>DevSecOps & Compliance</Badge>
          <Badge>Cloud-first</Badge>
          <Badge>Observabilidad</Badge>
        </div>
      </motion.div>

      {/* Cards principales */}
      <motion.div
        {...scaleIn(0.1)}
        className="w-full max-w-5xl grid md:grid-cols-2 gap-6 lg:gap-8 mb-10"
      >
        <GlassCard className="p-7">
          <h2 className="text-xl font-bold text-emerald-300 mb-4">¿Qué desarrollamos?</h2>
          <ul className="space-y-3 text-slate-100/95 text-base">
            <li className="flex items-start gap-3">
              <FaMobileAlt className="mt-1 text-emerald-400" aria-hidden /> Apps web, móviles y multiplataforma de alto rendimiento.
            </li>
            <li className="flex items-start gap-3">
              <FaCloud className="mt-1 text-emerald-400" aria-hidden /> Integraciones con APIs, sistemas legacy y cloud.
            </li>
            <li className="flex items-start gap-3">
              <FaServer className="mt-1 text-emerald-400" aria-hidden /> Backend, microservicios y automatización de procesos.
            </li>
            <li className="flex items-start gap-3">
              <FaChartLine className="mt-1 text-emerald-400" aria-hidden /> Dashboards, portales y herramientas a medida.
            </li>
          </ul>
        </GlassCard>

        <GlassCard className="p-7">
          <h2 className="text-xl font-bold text-emerald-300 mb-4">Ventajas competitivas</h2>
          <ul className="space-y-3">
            <li className="flex items-center gap-2 text-slate-100/95">
              <FaCheckCircle className="text-green-400" aria-hidden /> Time‑to‑market rápido y entrega ágil.
            </li>
            <li className="flex items-center gap-2 text-slate-100/95">
              <FaCheckCircle className="text-green-400" aria-hidden /> Soporte, mantenimiento y escalabilidad.
            </li>
            <li className="flex items-center gap-2 text-slate-100/95">
              <FaCheckCircle className="text-green-400" aria-hidden /> Seguridad y compliance empresarial.
            </li>
            <li className="flex items-center gap-2 text-slate-100/95">
              <FaCheckCircle className="text-green-400" aria-hidden /> Optimización de costos y recursos TI.
            </li>
          </ul>
        </GlassCard>
      </motion.div>

      {/* Grid de capacidades */}
      <motion.div
        {...fadeUp(0.15)}
        className="w-full max-w-6xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-12"
      >
        {[
          { icon: <FaCogs />, title: "Arquitectura & Diseño", desc: "DDD, Clean/Hexagonal, CQRS, SOLID y patrones modernos." },
          { icon: <FaSyncAlt />, title: "APIs & Integración", desc: "REST/GraphQL, gRPC, colas/eventos, ETL y conectores." },
          { icon: <FaCloud />, title: "Cloud & DevOps", desc: "CI/CD, IaC, contenedores, autoscaling y resiliencia." },
          { icon: <FaShieldAlt />, title: "Seguridad", desc: "Auth/OIDC, JWT, OWASP Top 10, hardening y compliance." },
          { icon: <FaServer />, title: "Data & Backend", desc: "Caching, performance, observabilidad y SRE practices." },
          { icon: <FaRocket />, title: "Entrega continua", desc: "Pipelines, quality gates, pruebas y feature flags." },
        ].map((item, idx) => (
          <GlassCard
            key={item.title}
            className="p-6 transition-transform will-change-transform hover:-translate-y-1 hover:shadow-[0_12px_48px_rgba(16,185,129,0.25)]"
          >
            <div className="flex items-center gap-3 mb-2">
              <span className="text-emerald-400 text-xl" aria-hidden>{item.icon}</span>
              <h3 className="text-lg font-bold text-slate-100">{item.title}</h3>
            </div>
            <p className="text-slate-300 text-sm">{item.desc}</p>
          </GlassCard>
        ))}
      </motion.div>

      {/* Stack / Tecnologías */}
      <motion.div
        {...fadeUp(0.2)}
        className="w-full max-w-5xl mb-12"
      >
        <GlassCard className="p-6">
          <div className="flex flex-wrap items-center gap-2 mb-3">
            <Badge>TypeScript</Badge>
            <Badge>.NET / C#</Badge>
            <Badge>Node.js</Badge>
            <Badge>React / React Native</Badge>
            <Badge>PostgreSQL / SQL Server</Badge>
            <Badge>Docker / Kubernetes</Badge>
            <Badge>Azure / AWS</Badge>
          </div>
          <p className="text-slate-300 text-sm">
            Elegimos el stack de acuerdo a tus objetivos, compliance y TCO.
            Priorizamos mantenibilidad, seguridad y rendimiento desde el día uno.
          </p>
        </GlassCard>
      </motion.div>

      {/* CTA */}
      <motion.div
        {...fadeUp(0.25)}
        className="flex flex-col sm:flex-row gap-5"
      >
        <Link
          to="/contact"
          className="px-8 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-lg font-bold shadow-md transition focus:outline-none focus:ring-2 focus:ring-emerald-300 focus:ring-offset-2 focus:ring-offset-[#0a192f]"
          aria-label="Agenda una consultoría"
        >
          Agenda una consultoría
        </Link>
        <Link
          to="/services"
          className="px-8 py-3 rounded-xl border border-emerald-400/60 text-emerald-200 font-semibold hover:bg-emerald-700/30 transition focus:outline-none focus:ring-2 focus:ring-emerald-300 focus:ring-offset-2 focus:ring-offset-[#0a192f]"
          aria-label="Volver a Servicios"
        >
          Volver a Servicios
        </Link>
      </motion.div>

      {/* Sutileza de animación decorativa */}
      {!prefersReducedMotion && (
        <motion.div
          aria-hidden
          className="absolute -z-10 left-1/2 top-[15%] w-[38rem] h-[38rem] -translate-x-1/2 rounded-full blur-3xl"
          style={{ background: "radial-gradient(circle at center, rgba(16,185,129,0.25), rgba(16,185,129,0) 60%)" }}
          initial={{ opacity: 0.22, scale: 1.02 }}
          animate={{ opacity: [0.22, 0.36, 0.22], scale: [1.02, 1, 1.02] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
      )}
    </section>
  );
}
