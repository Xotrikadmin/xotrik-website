import React, { useCallback } from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";

// ICONOS ANIMADOS
function VisionIcon() {
  return (
    <span className="relative flex items-center justify-center">
      <span className="absolute animate-pulse-slow rounded-full bg-[#D4AF37]/30 blur-[16px] w-16 h-16 z-0" />
      <svg width="42" height="42" viewBox="0 0 42 42" fill="none" className="relative z-10">
        <ellipse cx="21" cy="21" rx="15" ry="11" stroke="#D4AF37" strokeWidth="2.1" fill="#178582" opacity="0.18"/>
        <circle cx="21" cy="21" r="4" fill="#D4AF37"/>
        <motion.path
          d="M7 21Q21 6 35 21"
          stroke="#D4AF37"
          strokeWidth="1.4"
          fill="none"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2.1, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
        />
      </svg>
    </span>
  );
}
function MissionIcon() {
  return (
    <span className="relative flex items-center justify-center">
      <span className="absolute animate-pulse-slow rounded-full bg-[#D4AF37]/24 blur-[12px] w-16 h-16 z-0" />
      <svg width="42" height="42" viewBox="0 0 42 42" fill="none" className="relative z-10">
        <circle cx="21" cy="21" r="17" stroke="#D4AF37" strokeWidth="2.1" fill="#114F55" opacity="0.11"/>
        <motion.path
          d="M21 30V12"
          stroke="#D4AF37"
          strokeWidth="2"
          strokeLinecap="round"
          initial={{ pathLength: 0.4 }}
          animate={{ pathLength: [0.4, 1, 0.4] }}
          transition={{ duration: 2.6, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.circle
          cx="21"
          cy="12"
          r="2.9"
          fill="#D4AF37"
          initial={{ scale: 0.85 }}
          animate={{ scale: [0.85, 1.09, 0.85] }}
          transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
        />
      </svg>
    </span>
  );
}

export default function VisionMission() {
  const { t } = useTranslation();

  // ANIMATION
  const sectionAnim = {
    hidden: { opacity: 0, y: 60 },
    show: { opacity: 1, y: 0, transition: { duration: 1.12, ease: "easeOut" } },
  };
  const cardAnim = {
    hidden: { opacity: 0, y: 36, scale: 0.96 },
    show: { opacity: 1, y: 0, scale: 1, transition: { duration: 1.13, ease: "easeOut" } },
  };
  const titleAnim = {
    hidden: { opacity: 0, y: 34 },
    show: { opacity: 1, y: 0, transition: { duration: 1.11, ease: "easeOut" } },
  };

  return (
    <motion.section
      id="vision-mission"
      variants={sectionAnim}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.22 }}
      className="relative isolate overflow-hidden bg-[#0A1828] pt-24 pb-36 px-3 sm:px-8 flex flex-col items-center select-none"
    >
      {/* Partículas GLASS con blur dorado/cyan */}
      <Particles
        id="visionParticles"
        init={useCallback(async (engine) => await loadSlim(engine), [])}
        options={{
          fullScreen: { enable: false },
          background: { color: "transparent" },
          particles: {
            number: { value: 19, density: { enable: true, area: 820 } },
            color: { value: ["#D4AF37", "#16d9e3"] },
            size: { value: { min: 1.2, max: 2.6 } },
            move: { enable: true, speed: 0.10 },
            opacity: { value: 0.15 },
            links: { enable: true, distance: 112, color: "#D4AF37", opacity: 0.048, width: 1.1 },
            shape: { type: "circle" },
            shadow: { enable: true, color: "#D4AF37", blur: 4 },
          },
        }}
        className="absolute inset-0 -z-10"
      />

      {/* HALO gold glow */}
      <div className="pointer-events-none absolute left-1/2 top-10 -translate-x-1/2 w-[340px] h-32 z-0">
        <div className="w-full h-full bg-gradient-to-r from-[#D4AF37]/25 via-transparent to-[#16d9e3]/23 blur-3xl rounded-full opacity-80" />
      </div>

      {/* TITULO */}
      <motion.h2
        variants={titleAnim}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="mb-16 text-3xl sm:text-4xl lg:text-5xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] via-[#fff7e0] to-[#16d9e3] drop-shadow-[0_3px_22px_rgba(22,217,227,0.17)]"
      >
        {t("services.heading", "We're here to help you grow.")}
      </motion.h2>

      {/* CARDS GLASS FLEX */}
      <div className="w-full max-w-5xl flex flex-col md:flex-row gap-12 md:gap-16 justify-center items-center z-10">
        {/* VISIÓN */}
        <motion.div
          variants={cardAnim}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          whileHover={{
            scale: 1.037,
            boxShadow: "0 4px 44px 0 #D4AF3737, 0 1.5px 44px 0 #16d9e333",
            borderColor: "#D4AF37",
            transition: { duration: 0.32 }
          }}
          className="
            flex-1 bg-gradient-to-br from-[#178582f6] via-[#114F55e7] to-[#0A1828f4]
            rounded-3xl border border-[#D4AF37]/30 shadow-[0_2px_44px_0_#16d9e344]
            p-12 min-h-[230px] max-w-md md:max-w-none mx-auto
            backdrop-blur-[44px] flex flex-col items-center hover:shadow-[0_0_48px_10px_#D4AF3733]
            transition-all duration-500 relative z-20
            after:absolute after:inset-0 after:rounded-3xl after:border-2 after:border-[#D4AF37]/17 after:pointer-events-none after:z-10
          "
        >
          <div className="mb-3">{<VisionIcon />}</div>
          <h3 className="text-2xl font-bold text-[#D4AF37] mb-3 tracking-wide drop-shadow">{t("about.visionTitle")}</h3>
          <p className="text-slate-100/95 text-lg text-center font-medium">{t("about.vision")}</p>
        </motion.div>

        {/* MISIÓN */}
        <motion.div
          variants={cardAnim}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          whileHover={{
            scale: 1.037,
            boxShadow: "0 4px 44px 0 #D4AF3737, 0 1.5px 44px 0 #16d9e333",
            borderColor: "#D4AF37",
            transition: { duration: 0.32 }
          }}
          className="
            flex-1 bg-gradient-to-br from-[#178582f6] via-[#114F55e7] to-[#0A1828f4]
            rounded-3xl border border-[#D4AF37]/30 shadow-[0_2px_44px_0_#16d9e344]
            p-12 min-h-[230px] max-w-md md:max-w-none mx-auto
            backdrop-blur-[44px] flex flex-col items-center hover:shadow-[0_0_48px_10px_#D4AF3733]
            transition-all duration-500 relative z-20
            after:absolute after:inset-0 after:rounded-3xl after:border-2 after:border-[#D4AF37]/17 after:pointer-events-none after:z-10
          "
        >
          <div className="mb-3">{<MissionIcon />}</div>
          <h3 className="text-2xl font-bold text-[#D4AF37] mb-3 tracking-wide drop-shadow">{t("about.missionTitle")}</h3>
          <p className="text-slate-100/95 text-lg text-center font-medium">{t("about.mission")}</p>
        </motion.div>
      </div>

      {/* CSS SHIMMER y pulse */}
      <style jsx>{`
        .shimmer-highlight {
          position: relative;
          z-index: 1;
        }
        .shimmer-anim {
          display: block;
          pointer-events: none;
          position: absolute;
          inset: 0;
          z-index: 2;
          background: linear-gradient(
            120deg,
            rgba(255, 255, 255, 0) 35%,
            rgba(255, 255, 255, 0.48) 55%,
            rgba(255, 255, 255, 0) 70%
          );
          mix-blend-mode: lighten;
          filter: blur(2.5px);
          background-size: 220% 100%;
          animation: shimmerMove 2.7s cubic-bezier(.65,0,.35,1) infinite;
        }
        @keyframes shimmerMove {
          0% { background-position-x: 110%; }
          100% { background-position-x: -25%; }
        }
        .animate-pulse-slow {
          animation: pulseSlow 2.7s cubic-bezier(.4,0,.6,1) infinite;
        }
        @keyframes pulseSlow {
          0%, 100% { opacity: 0.22; }
          50% { opacity: 0.92; }
        }
      `}</style>
    </motion.section>
  );
}
