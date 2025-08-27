import React, { useCallback } from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";

// ICONO/TIMELINE (puedes personalizar, aquí un simple círculo animado para cada paso)
function StepIcon({ index }) {
  return (
    <motion.span
      className="flex items-center justify-center rounded-full bg-[#D4AF37]/20 w-10 h-10 mr-4 shadow-lg ring-2 ring-[#D4AF37]/30"
      initial={{ scale: 0.8, opacity: 0.6 }}
      whileInView={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.7, delay: index * 0.14, type: "spring", stiffness: 170 }}
    >
      <span className="text-xl font-bold text-[#D4AF37]">{index + 1}</span>
    </motion.span>
  );
}

export default function HistorySection() {
  const { t } = useTranslation();

  // Animaciones
  const sectionAnim = {
    hidden: { opacity: 0, y: 50 },
    show: { opacity: 1, y: 0, transition: { duration: 1, ease: "easeOut" } },
  };
  const cardAnim = {
    hidden: { opacity: 0, y: 38 },
    show: (i) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 1.08, delay: i * 0.18, ease: "easeOut" },
    }),
  };

  // Texto y pasos
  const steps = t("historySection.steps", { returnObjects: true });

  return (
    <motion.section
      variants={sectionAnim}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      className="relative isolate overflow-hidden bg-gradient-to-b from-[#0A1828] to-[#114F55] pt-16 pb-28 px-4 flex flex-col items-center"
    >
      {/* Partículas tenues doradas */}
      <Particles
        id="historyParticles"
        init={useCallback(async (engine) => await loadSlim(engine), [])}
        options={{
          fullScreen: { enable: false },
          background: { color: "transparent" },
          particles: {
            number: { value: 18, density: { enable: true, area: 1200 } },
            color: { value: "#D4AF37" },
            size: { value: { min: 1, max: 2.3 } },
            move: { enable: true, speed: 0.06 },
            opacity: { value: 0.08 },
            links: { enable: true, distance: 110, color: "#D4AF37", opacity: 0.028, width: 1 },
          },
        }}
        className="absolute inset-0 -z-10"
      />

      {/* Tagline hero */}
      <motion.h3
        initial={{ opacity: 0, y: 22 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-2 text-xl sm:text-2xl font-semibold text-[#D4AF37] text-center tracking-wide"
      >
        {t("historySection.tagline")}
      </motion.h3>
      {/* Header */}
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-12 text-3xl sm:text-4xl lg:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-[#fff7e0] via-[#D4AF37] to-[#16d9e3] text-center drop-shadow-[0_3px_22px_rgba(22,217,227,0.13)]"
      >
        {t("historySection.title")}
      </motion.h2>

      {/* Timeline glassy cards */}
      <div className="w-full max-w-4xl flex flex-col gap-9">
        {steps.map((text, i) => (
          <motion.div
            key={i}
            custom={i}
            variants={cardAnim}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className={`
              group flex items-start sm:items-center bg-gradient-to-br from-[#0A1828bb] to-[#17858244]
              rounded-2xl shadow-[0_6px_28px_0_#114F5566]
              border border-[#D4AF37]/20 border-t-2 border-t-[#fff7e0]/18
              px-6 py-7 md:py-8 mb-2
              backdrop-blur-[30px]
              hover:shadow-[0_0px_44px_0_#D4AF3719]
              transition-shadow duration-300
            `}
          >
            <StepIcon index={i} />
            <div className="flex-1 min-w-0">
              <p className="text-base sm:text-lg text-white/90 font-normal leading-relaxed">
                {text}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* CSS */}
      <style jsx>{`
        .animate-pulse-slow {
          animation: pulseSlow 2.7s cubic-bezier(.4,0,.6,1) infinite;
        }
        @keyframes pulseSlow {
          0%, 100% { opacity: 0.28; }
          50% { opacity: 0.89; }
        }
      `}</style>
    </motion.section>
  );
}
