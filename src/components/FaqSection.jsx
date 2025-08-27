'use client';
import React, { useState, useMemo, useCallback, useRef } from "react";
import { useTranslation } from "react-i18next";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import {
  FaHeadset,
  FaUndoAlt,
  FaLock,
  FaCogs,
  FaChevronDown,
  FaChevronUp,
} from "react-icons/fa";

const GOLD = "#D4AF37";
const CYAN = "#16d9e3";

const faqs = [
  { key: "support", icon: <FaHeadset className="text-[#16d9e3] text-2xl" />, q: "faq.support.q", a: "faq.support.a" },
  { key: "returns", icon: <FaUndoAlt className="text-[#D4AF37] text-2xl" />, q: "faq.returns.q", a: "faq.returns.a" },
  { key: "secure",  icon: <FaLock   className="text-[#D4AF37] text-2xl" />, q: "faq.secure.q",  a: "faq.secure.a"  },
  { key: "install", icon: <FaCogs   className="text-[#16d9e3] text-2xl" />, q: "faq.install.q", a: "faq.install.a" },
];

export default function FaqSection() {
  const { t } = useTranslation();
  const reduceMotion = useReducedMotion();
  const [open, setOpen] = useState(null);
  const buttonsRef = useRef([]);

  // Partículas memorizadas (y suaves con reduce-motion)
  const particlesInit = useCallback(async (engine) => { await loadSlim(engine); }, []);
  const particlesOptions = useMemo(() => ({
    fullScreen: { enable: false },
    background: { color: "transparent" },
    particles: {
      number: { value: reduceMotion ? 10 : 22, density: { enable: true, area: 900 } },
      color: { value: [GOLD, CYAN] },
      size: { value: { min: 1, max: 2.2 } },
      move: { enable: !reduceMotion, speed: 0.10 },
      opacity: { value: 0.12 },
      links: { enable: !reduceMotion, distance: 120, color: GOLD, opacity: 0.05, width: 1 },
      shape: { type: "circle" },
    },
    detectRetina: true,
  }), [reduceMotion]);

  // Navegación con flechas entre preguntas
  const onHeaderKeyDown = (e, idx) => {
    if (e.key === "ArrowDown" || e.key === "ArrowRight") {
      e.preventDefault();
      const next = (idx + 1) % faqs.length;
      buttonsRef.current[next]?.focus();
    } else if (e.key === "ArrowUp" || e.key === "ArrowLeft") {
      e.preventDefault();
      const prev = (idx - 1 + faqs.length) % faqs.length;
      buttonsRef.current[prev]?.focus();
    } else if (e.key === "Home") {
      e.preventDefault();
      buttonsRef.current[0]?.focus();
    } else if (e.key === "End") {
      e.preventDefault();
      buttonsRef.current[faqs.length - 1]?.focus();
    }
  };

  return (
    <motion.section
      id="faq"
      initial={{ opacity: 0, y: 72 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.33 }}
      className="relative isolate overflow-hidden bg-[#0A1828] pt-24 pb-28 px-3 sm:px-8 flex flex-col items-center select-none"
      aria-labelledby="faq-title"
    >
      {/* Partículas fondo */}
      <Particles id="faqParticles" init={particlesInit} options={particlesOptions} className="absolute inset-0 -z-10" />

      {/* Título en dorado Xotrik */}
      <motion.h2
        id="faq-title"
        initial={{ opacity: 0, y: 22 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-3 text-center text-3xl sm:text-4xl lg:text-5xl font-extrabold"
        style={{ color: GOLD, textShadow: "0 3px 18px rgba(212,175,55,.18)" }}
      >
        {t("faq.title")}
      </motion.h2>
      {/* Subrayado sutil */}
      <motion.div
        initial={{ scaleX: 0, opacity: 0 }}
        whileInView={{ scaleX: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        style={{ backgroundColor: GOLD }}
        className="h-1 w-16 rounded-full mb-10 shadow-[0_2px_16px_rgba(212,175,55,.45)]"
        aria-hidden="true"
      />

      {/* Grid de FAQs */}
      <div className="w-full max-w-4xl grid gap-6 grid-cols-1 md:grid-cols-2">
        {faqs.map((f, idx) => {
          const isOpen = open === idx;
          const panelId = `faq-panel-${idx}`;
          const btnId = `faq-button-${idx}`;

          return (
            <motion.article
              key={f.key}
              initial={{ opacity: 0, y: 36 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="
                rounded-2xl border border-[#D4AF37]/30
                bg-gradient-to-br from-[#114F55e8] to-[#0A1828f6]
                shadow-[0_1px_22px_0_#17858233]
                px-6 py-5 transition-all duration-300
                backdrop-blur-[28px] flex flex-col
                hover:shadow-[0_0_24px_4px_#D4AF3714]
              "
            >
              {/* Header accesible como botón */}
              <button
                id={btnId}
                ref={(el) => (buttonsRef.current[idx] = el)}
                type="button"
                className="w-full text-left flex items-center justify-between gap-3 focus:outline-none focus-visible:ring-4 focus-visible:ring-[#D4AF37]/35 rounded-xl px-1 py-1"
                aria-controls={panelId}
                aria-expanded={isOpen}
                onClick={() => setOpen(isOpen ? null : idx)}
                onKeyDown={(e) => onHeaderKeyDown(e, idx)}
              >
                <div className="flex items-center gap-3">
                  {f.icon}
                  <span className="text-lg font-semibold text-white">
                    {t(f.q)}
                  </span>
                </div>
                <motion.span
                  initial={false}
                  animate={{ rotate: isOpen ? 180 : 0 }}
                  transition={{ duration: 0.25 }}
                  className="text-lg"
                  style={{ color: GOLD }}
                >
                  {isOpen ? <FaChevronUp /> : <FaChevronDown />}
                </motion.span>
              </button>

              {/* Panel colapsable */}
              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    id={panelId}
                    role="region"
                    aria-labelledby={btnId}
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.28, ease: "easeInOut" }}
                    className="overflow-hidden mt-3"
                  >
                    <p className="text-slate-100/90 text-base leading-relaxed">
                      {t(f.a)}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.article>
          );
        })}
      </div>

      {/* utilidades opcionales */}
      <style jsx>{`
        .animate-pulse-slow { animation: pulseSlow 2.7s cubic-bezier(.4,0,.6,1) infinite; }
        @keyframes pulseSlow { 0%,100%{opacity:.28} 50%{opacity:.89} }
      `}</style>
    </motion.section>
  );
}
