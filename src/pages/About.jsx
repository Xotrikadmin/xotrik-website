
import React, { useCallback, useMemo, useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { motion, useReducedMotion } from "framer-motion";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import Tilt from "react-parallax-tilt";
import { Link } from "react-router-dom";
import { FaShieldAlt, FaBolt, FaCloud, FaHandsHelping } from "react-icons/fa";

/* Contador animado (respeta reduce-motion) */
function useCountUp(target = 0, ms = 1200, reduce = false) {
  const [value, setValue] = useState(0);
  const rafRef = useRef(null);
  useEffect(() => {
    if (reduce) { setValue(target); return; }
    const start = performance.now();
    const tick = (t) => {
      const p = Math.min(1, (t - start) / ms);
      const eased = 1 - Math.pow(1 - p, 3);
      setValue(Math.floor(eased * target));
      if (p < 1) rafRef.current = requestAnimationFrame(tick);
    };
    rafRef.current = requestAnimationFrame(tick);
    return () => { if (rafRef.current) cancelAnimationFrame(rafRef.current); };
  }, [target, ms, reduce]);
  return value;
}

export default function AboutProPlus() {
  const { t } = useTranslation();
  const reduceMotion = useReducedMotion();

  // Animaciones base
  const container = { hidden: { opacity: 0, y: 40 }, show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } } };
  const stagger = { show: { transition: { staggerChildren: 0.12, delayChildren: 0.12 } } };
  const item = { hidden: { opacity: 0, y: 18 }, show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } } };

  // Partículas
  const particlesInit = useCallback(async (engine) => { await loadSlim(engine); }, []);
  const particlesOptions = useMemo(() => ({
    fullScreen: { enable: false },
    background: { color: "transparent" },
    detectRetina: true,
    particles: {
      number: { value: reduceMotion ? 8 : 22, density: { enable: true, area: 900 } },
      color: { value: ["#D4AF37", "#16d9e3", "#ffffff"] },
      size: { value: { min: 1.1, max: 2.4 } },
      move: { enable: !reduceMotion, speed: 0.12 },
      opacity: { value: 0.15, random: { enable: true, minimumValue: 0.08 } },
      links: { enable: !reduceMotion, distance: 140, color: "#D4AF37", opacity: 0.05, width: 1 },
      shape: { type: "circle" },
    }
  }), [reduceMotion]);

  // Contadores
  const years = useCountUp(8, 1200, reduceMotion);
  const projects = useCountUp(120, 1300, reduceMotion);
  const uptime = useCountUp(99, 1100, reduceMotion);

  const features = [
    { icon: <FaShieldAlt />, text: t("aboutPro.pillSecure", "Seguridad & Compliance") },
    { icon: <FaBolt />, text: t("aboutPro.pillFast", "Entrega Acelerada") },
    { icon: <FaCloud />, text: t("aboutPro.pillCloud", "Nube & Escalabilidad") },
    { icon: <FaHandsHelping />, text: t("aboutPro.pillPartner", "Partner Estratégico") },
  ];

  return (
    <motion.section
      id="about"
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.35 }}
      className="relative isolate overflow-hidden bg-[#0A1828] py-24 px-4 sm:px-8"
      aria-labelledby="aboutpro-title"
    >
      {/* Partículas */}
      <Particles id="aboutProParticles" init={particlesInit} options={particlesOptions} className="absolute inset-0 -z-10" />

      {/* decor */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 opacity-[0.08]" style={{
          backgroundImage: "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.2) 1px, transparent 1px)",
          backgroundSize: "24px 24px"
        }}/>
        <div className="absolute -top-24 -right-24 w-[360px] h-[360px] rounded-full blur-[90px] opacity-30"
             style={{ background: "radial-gradient(closest-side, #D4AF37 30%, transparent 70%)" }} />
        <div className="absolute -bottom-28 -left-20 w-[320px] h-[320px] rounded-full blur-[90px] opacity-30"
             style={{ background: "radial-gradient(closest-side, #178582 30%, transparent 70%)" }} />
      </div>

      <motion.div className="mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center" variants={stagger}>
        {/* Texto */}
        <motion.div variants={item} className="relative">
          {/* Línea dorada */}
          <span className="hidden lg:block absolute -left-8 top-2 h-16 w-1 rounded-full" style={{ backgroundColor: "#D4AF37", boxShadow: "0 0 22px #D4AF3777" }} />
          
          {/* TÍTULO EN DORADO */}
          <h2 id="aboutpro-title" className="text-3xl sm:text-5xl font-extrabold tracking-tight leading-tight" style={{ color: "#D4AF37" }}>
            {t("aboutPro.titleTop", "Somos ingeniería")}{" "}
            <span className="block">{t("aboutPro.titleBottom", "que convierte visión en impacto")}</span>
          </h2>

          <p className="mt-5 text-white/90 text-base sm:text-lg leading-relaxed max-w-xl">
            {t("aboutPro.description", "Diseñamos, construimos y operamos soluciones de software y datos con foco en negocio, seguridad y performance.")}
          </p>

          {/* Pills */}
          <motion.ul variants={stagger} className="mt-6 flex flex-wrap gap-3">
            {features.map((f, i) => (
              <motion.li key={i} variants={item} className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-sm text-white/90 backdrop-blur">
                <span className="text-[#D4AF37]">{f.icon}</span>{f.text}
              </motion.li>
            ))}
          </motion.ul>

          {/* CTA */}
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Link
              to="/about"
              aria-label={t("aboutPro.ctaAria", "Conocer más sobre Xotrik")}
              className="inline-flex items-center gap-2 rounded-xl px-6 py-3 font-semibold bg-[#D4AF37] text-[#0A1828] shadow-[0_10px_28px_rgba(212,175,55,0.45)] transition-transform duration-200 focus:outline-none focus-visible:ring-4 focus-visible:ring-[#D4AF37]/40 hover:-translate-y-0.5 active:translate-y-0"
            >
              {t("aboutPro.cta", "Conocer más")}
              <motion.svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="#0A1828"
                initial={{ x: 0 }} whileHover={{ x: 5 }} transition={{ type: "spring", stiffness: 350, damping: 16 }} aria-hidden="true">
                <motion.path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.2} d="M9 5l7 7-7 7" />
              </motion.svg>
            </Link>
            <span className="text-sm text-white/60">{t("aboutPro.secondaryNote", "Auditorías, workshops y sprints de descubrimiento")}</span>
          </div>

          {/* Stats */}
          <motion.div variants={stagger} className="mt-10 grid grid-cols-3 gap-4 max-w-md">
            <motion.div variants={item} className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-center backdrop-blur">
              <div className="text-2xl font-extrabold text-white tabular-nums">{years}<span className="text-[#D4AF37]">+</span></div>
              <div className="text-xs text-white/70">{t("aboutPro.statYears", "años de experiencia")}</div>
            </motion.div>
            <motion.div variants={item} className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-center backdrop-blur">
              <div className="text-2xl font-extrabold text-white tabular-nums">{projects}<span className="text-[#D4AF37]">+</span></div>
              <div className="text-xs text-white/70">{t("aboutPro.statProjects", "proyectos entregados")}</div>
            </motion.div>
            <motion.div variants={item} className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-center backdrop-blur">
              <div className="text-2xl font-extrabold text-white tabular-nums">{uptime}<span className="text-[#D4AF37]">.%</span></div>
              <div className="text-xs text-white/70">{t("aboutPro.statUptime", "uptime mision crítico")}</div>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Imagen + Tilt */}
        <motion.div variants={item} className="relative">
          <div className="pointer-events-none absolute -top-8 -left-6 h-40 w-40 rounded-full blur-[60px] opacity-50"
               style={{ background: "radial-gradient(closest-side, #D4AF37 30%, transparent 70%)" }} />
          <Tilt tiltMaxAngleX={7} tiltMaxAngleY={7} glareEnable glareMaxOpacity={0.12} glareColor="#D4AF37" scale={1.008} transitionSpeed={1000} className="w-full">
            <div className="relative overflow-hidden rounded-3xl border border-[#D4AF37]/35 bg-[#0B1A2A]/60 backdrop-blur-xl shadow-[0_8px_50px_0_rgba(212,175,55,0.25),0_2px_30px_0_rgba(23,133,130,0.2)]">
              <img src="/about.jpg" alt={t("aboutPro.imageAlt", "Equipo Xotrik trabajando en soluciones cloud e IA")} className="h-[340px] w-full object-cover sm:h-[420px]" loading="lazy" draggable={false} />
              <div className="absolute left-4 top-4 rounded-full bg-[#D4AF37] px-3 py-1 text-xs font-bold text-[#0A1828] shadow-lg">{t("aboutPro.badge", "ISO 27001 Ready")}</div>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#0A1828cc] to-transparent p-4">
                <p className="text-sm text-white/90">{t("aboutPro.caption", "Transformamos operaciones, datos y experiencias en valor medible.")}</p>
              </div>
            </div>
          </Tilt>
        </motion.div>
      </motion.div>

      {/* estilos locales */}
      <style jsx>{`
        /* (dejado por si luego quieres reusar el marquee) */
        @keyframes scrollLeft {
          from { transform: rotateX(8deg) translateX(0); }
          to { transform: rotateX(8deg) translateX(-50%); }
        }
      `}</style>
    </motion.section>
  );
}
