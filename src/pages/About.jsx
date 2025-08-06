import React, { useCallback } from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import { Link } from "react-router-dom";

export default function About() {
  const { t } = useTranslation();

  // Animaciones
  const sectionAnim = {
    hidden: { opacity: 0, y: 54 },
    show: { opacity: 1, y: 0, transition: { duration: 1.1, ease: "easeOut" } },
  };
  const cardAnim = {
    hidden: { opacity: 0, y: 38, scale: 0.97 },
    show: { opacity: 1, y: 0, scale: 1, transition: { duration: 1.09, ease: "easeOut" } },
  };

  return (
    <motion.section
      id="about"
      variants={sectionAnim}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.36 }}
      className="relative isolate overflow-hidden bg-[#0A1828] py-24 px-3 sm:px-8 flex flex-col items-center select-none"
    >
      {/* Partículas doradas y cyan */}
      <Particles
        id="aboutParticles"
        init={useCallback(async (engine) => await loadSlim(engine), [])}
        options={{
          fullScreen: { enable: false },
          background: { color: "transparent" },
          particles: {
            number: { value: 28, density: { enable: true, area: 950 } },
            color: { value: ["#D4AF37", "#16d9e3", "#fff"] },
            size: { value: { min: 1.1, max: 2.8 } },
            move: { enable: true, speed: 0.10 },
            opacity: { value: 0.16, random: { enable: true, minimumValue: 0.09 } },
            links: { enable: true, distance: 130, color: "#D4AF37", opacity: 0.035, width: 1 },
            shape: { type: "circle" },
          },
        }}
        className="absolute inset-0 -z-10"
      />

      {/* Glow lateral decorativo */}
      <div className="pointer-events-none absolute right-0 top-1/2 -translate-y-1/2 h-[390px] w-28 hidden lg:block">
        <div className="h-full w-full bg-gradient-to-b from-[#D4AF37]/18 via-transparent to-[#178582]/28 rounded-full blur-[44px] opacity-80"></div>
      </div>

      {/* Glow HALO detrás del card */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-2/3 z-0 w-[410px] h-[120px] pointer-events-none">
        <div className="w-full h-full bg-gradient-to-r from-[#D4AF37]/18 via-transparent to-[#178582]/24 blur-3xl rounded-full opacity-70" />
      </div>

      {/* Contenido principal: Imagen + Card */}
      <div className="relative z-10 flex flex-col lg:flex-row items-center w-full max-w-6xl gap-14 lg:gap-20">
        {/* Imagen más grande y cuadrada */}
        <motion.div
          initial={{ opacity: 0, scale: 0.97, x: 40 }}
          whileInView={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 0.85, ease: "easeOut", delay: 0.12 }}
          viewport={{ once: true }}
          className="
            w-full max-w-2xl aspect-[4/3]
            rounded-3xl shadow-2xl border-2 border-[#D4AF37]/30
            overflow-hidden flex-shrink-0
            min-h-[340px] lg:min-h-[380px]
          "
          style={{
            boxShadow: "0 8px 50px 0 #D4AF3740, 0 2px 30px 0 #17858235"
          }}
        >
          <img
            src="/about.jpg"
            alt="Xotrik team collaboration"
            className="w-full h-full object-cover object-center"
            loading="lazy"
            draggable={false}
          />
        </motion.div>

        {/* Card de texto */}
        <motion.div
          variants={cardAnim}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          whileHover={{
            boxShadow: "0 6px 80px 0 #D4AF3738, 0 2px 48px 0 #16d9e366",
            borderColor: "#D4AF37",
            transition: { duration: 0.23 }
          }}
          className="
            relative w-full max-w-xl
            bg-gradient-to-br from-[#0A1828e8] via-[#114F55ea] to-[#178582e5]
            rounded-3xl shadow-[0_4px_48px_0_#17858255,0_2px_40px_0_#D4AF3735]
            border border-[#D4AF37]/40 border-t-4 border-t-[#fff7e0]/12
            px-5 sm:px-8 py-10 mb-1 backdrop-blur-[58px]
            flex flex-col items-center
            ring-2 ring-[#fff7e0]/8
            transition-all duration-500
            z-10
          "
        >
          <p className="text-center text-lg sm:text-xl font-medium text-white/90 leading-relaxed">
            {t("about.desc")}
          </p>
          <Link
            to="/about"
            className="
              mt-8 inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold
              bg-gradient-to-br from-[#fffbe7e8] to-[#D4AF37f2]
              text-[#114F55] shadow-xl ring-2 ring-[#D4AF37]/10
              hover:scale-105 hover:shadow-[0_0_22px_4px_#D4AF3780]
              hover:bg-gradient-to-br hover:from-[#D4AF37] hover:to-[#fff7e0]
              transition-all duration-200 border border-[#fff7e0]/20
              focus:outline-none focus:ring-4 focus:ring-[#178582]/30
              backdrop-blur-[11px]
            "
          >
            {t("about.learnMore")}
            <motion.svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 ml-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="#114F55"
              initial={{ x: 0 }}
              whileHover={{ x: 5 }}
              transition={{ type: "spring", stiffness: 350, damping: 15 }}
            >
              <motion.path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2.2}
                d="M9 5l7 7-7 7"
              />
            </motion.svg>
          </Link>
        </motion.div>
      </div>

      {/* CSS extra para animaciones */}
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
