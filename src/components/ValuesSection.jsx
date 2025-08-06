import React from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";

// ICONOS SVG ultra custom y animados
function IconInnovation() {
  return (
    <svg width="44" height="44" viewBox="0 0 44 44" fill="none">
      <motion.circle
        cx="22" cy="22" r="15"
        fill="#16d9e3" opacity={0.16}
        animate={{ scale: [0.93, 1.06, 0.93] }}
        transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.path
        d="M22 11V22L29 25"
        stroke="#16d9e3" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 1.3, repeat: Infinity, repeatType: "reverse" }}
      />
      <circle cx="22" cy="22" r="10" fill="#16d9e3" opacity="0.23" />
      <circle cx="22" cy="22" r="5" fill="#16d9e3" />
    </svg>
  );
}
function IconExcellence() {
  return (
    <svg width="44" height="44" viewBox="0 0 44 44" fill="none">
      <motion.polygon
        points="22,8 26,20 39,20 28,27 32,40 22,32 12,40 16,27 5,20 18,20"
        fill="#D4AF37" opacity={0.4}
        animate={{ scale: [0.95, 1.05, 0.95] }}
        transition={{ duration: 2.7, repeat: Infinity, ease: "easeInOut" }}
      />
      <polygon
        points="22,12 25,20 33,20 27,25 29,33 22,28 15,33 17,25 11,20 19,20"
        fill="#D4AF37"
      />
    </svg>
  );
}
function IconCustomer() {
  return (
    <svg width="44" height="44" viewBox="0 0 44 44" fill="none">
      <ellipse cx="22" cy="26" rx="14" ry="10" fill="#16d9e3" opacity="0.18" />
      <ellipse cx="22" cy="28" rx="11" ry="8" fill="#16d9e3" opacity="0.22" />
      <ellipse cx="22" cy="30" rx="7" ry="5" fill="#16d9e3" opacity="0.28" />
      <circle cx="22" cy="19" r="6" fill="#16d9e3" />
    </svg>
  );
}
function IconTalent() {
  return (
    <svg width="44" height="44" viewBox="0 0 44 44" fill="none">
      <motion.ellipse
        cx="22" cy="29" rx="13" ry="7"
        fill="#D4AF37" opacity={0.21}
        animate={{ scaleX: [0.93, 1.07, 0.93] }}
        transition={{ duration: 2.1, repeat: Infinity, ease: "easeInOut" }}
      />
      <ellipse cx="16" cy="18" rx="4" ry="4" fill="#D4AF37" />
      <ellipse cx="28" cy="18" rx="4" ry="4" fill="#D4AF37" />
      <rect x="17" y="25" width="10" height="5" rx="2.5" fill="#D4AF37" opacity="0.6" />
    </svg>
  );
}
function IconIntegrity() {
  return (
    <svg width="44" height="44" viewBox="0 0 44 44" fill="none">
      <rect x="10" y="20" width="24" height="12" rx="6" fill="#16d9e3" opacity="0.21" />
      <motion.path
        d="M14 26L22 34L30 26"
        stroke="#16d9e3"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 1.8, repeat: Infinity, repeatType: "reverse" }}
      />
    </svg>
  );
}
function IconAdaptability() {
  return (
    <svg width="44" height="44" viewBox="0 0 44 44" fill="none">
      <motion.path
        d="M11 27C11 20 33 20 33 27C33 32 25 34 22 34C19 34 11 32 11 27Z"
        fill="#D4AF37"
        opacity="0.23"
        animate={{ scale: [0.97, 1.04, 0.97] }}
        transition={{ duration: 2.6, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.path
        d="M22 17A5 5 0 1 0 22 27A5 5 0 1 0 22 17"
        fill="#D4AF37"
        opacity="0.63"
        animate={{ rotate: [0, 360, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
      />
    </svg>
  );
}

const VALUES = [
  {
    key: "innovation",
    icon: <IconInnovation />,
    titleKey: "values.innovation.title",
    descKey: "values.innovation.desc",
  },
  {
    key: "excellence",
    icon: <IconExcellence />,
    titleKey: "values.excellence.title",
    descKey: "values.excellence.desc",
  },
  {
    key: "customer",
    icon: <IconCustomer />,
    titleKey: "values.customer.title",
    descKey: "values.customer.desc",
  },
  {
    key: "talent",
    icon: <IconTalent />,
    titleKey: "values.talent.title",
    descKey: "values.talent.desc",
  },
  {
    key: "integrity",
    icon: <IconIntegrity />,
    titleKey: "values.integrity.title",
    descKey: "values.integrity.desc",
  },
  {
    key: "adaptability",
    icon: <IconAdaptability />,
    titleKey: "values.adaptability.title",
    descKey: "values.adaptability.desc",
  }
];

export default function ValuesSection() {
  const { t } = useTranslation();

  // Animaciones
  const sectionAnim = {
    hidden: { opacity: 0, y: 64 },
    show: { opacity: 1, y: 0, transition: { duration: 1, ease: "easeOut", staggerChildren: 0.2 } },
  };
  const cardAnim = {
    hidden: { opacity: 0, y: 40, scale: 0.97 },
    show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.9, ease: "easeOut" } },
  };

  return (
    <motion.section
      id="values"
      variants={sectionAnim}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.28 }}
      className="relative isolate overflow-hidden bg-[#0A1828] pt-24 pb-28 px-3 sm:px-8 flex flex-col items-center select-none"
    >
      {/* Partículas */}
      <Particles
        id="valuesParticles"
        init={async (engine) => await loadSlim(engine)}
        options={{
          fullScreen: { enable: false },
          background: { color: "transparent" },
          particles: {
            number: { value: 26, density: { enable: true, area: 900 } },
            color: { value: ["#D4AF37", "#16d9e3", "#fff"] },
            size: { value: { min: 1.1, max: 2.8 } },
            move: { enable: true, speed: 0.08 },
            opacity: { value: 0.13 },
            links: { enable: true, distance: 120, color: "#D4AF37", opacity: 0.037, width: 1 },
            shape: { type: "circle" },
          },
        }}
        className="absolute inset-0 -z-10"
      />

      {/* Header visual glassy */}
      <motion.div
        initial={{ opacity: 0, y: 36 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-14 w-full max-w-3xl mx-auto rounded-3xl bg-gradient-to-br from-[#114F55e0] to-[#178582b2] p-8 px-10 shadow-2xl backdrop-blur-[42px] border border-[#D4AF37]/25 ring-1 ring-[#fff7e0]/10"
      >
        <h2 className="text-center text-4xl sm:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] via-[#16d9e3] to-[#D4AF37] drop-shadow-[0_3px_22px_rgba(22,217,227,0.13)]">
          {t("values.title")}{" "}
          <span className="relative font-black text-transparent bg-clip-text bg-gradient-to-r from-[#fff7e0] to-[#D4AF37] shimmer-highlight px-1">
            {t("values.highlight")}
            <span className="shimmer-anim" aria-hidden="true" />
          </span>
        </h2>
        <p className="mt-6 text-xl sm:text-2xl text-white/85 text-center font-light max-w-2xl mx-auto tracking-wide">
          {t("values.tagline")}
        </p>
      </motion.div>

      {/* Valores en grid glassy */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl z-10">
        {VALUES.map((v) => (
          <motion.div
            key={v.key}
            variants={cardAnim}
            className="
              relative group rounded-3xl bg-gradient-to-br from-[#114F55e5] to-[#0A1828e7]
              border border-[#D4AF37]/30 shadow-2xl
              px-7 py-8 flex flex-col items-center
              backdrop-blur-[38px] transition-all duration-300
              hover:shadow-[0_0_54px_7px_#D4AF3740]
              hover:scale-[1.03]
            "
            whileHover={{
              boxShadow: "0 0 58px 10px #D4AF3766, 0 2px 24px 0 #17858299",
              borderColor: "#16d9e3",
              transition: { duration: 0.23 }
            }}
          >
            <div className="mb-4 flex items-center justify-center">
              {v.icon}
            </div>
            <h3 className="mb-2 text-center text-xl font-extrabold text-[#D4AF37] tracking-wide drop-shadow">
              {t(v.titleKey)}
            </h3>
            <p className="text-center text-slate-100/90 text-base leading-relaxed px-2">
              {t(v.descKey)}
            </p>
          </motion.div>
        ))}
      </div>

      {/* CSS shimmer animación */}
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
            rgba(255, 255, 255, 0) 40%,
            rgba(255, 255, 255, 0.7) 65%,
            rgba(255, 255, 255, 0) 82%
          );
          mix-blend-mode: lighten;
          filter: blur(2.2px);
          background-size: 200% 100%;
          animation: shimmerMove 2.8s cubic-bezier(.65,0,.35,1) infinite;
        }
        @keyframes shimmerMove {
          0% { background-position-x: 120%; }
          100% { background-position-x: -22%; }
        }
      `}</style>
    </motion.section>
  );
}
