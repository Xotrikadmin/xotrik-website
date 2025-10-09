
// import React, { useCallback } from "react";
// import { useTranslation } from "react-i18next";
// import { motion } from "framer-motion";
// import Tilt from "react-parallax-tilt";
// import Particles from "react-tsparticles";
// import { loadSlim } from "tsparticles-slim";

// // ...AnimatedLightbulb, AnimatedChart, AnimatedShield igual que antes...
// // Iconos SVG animados (con aura dorada)
// function AnimatedLightbulb() {
//   return (
//     <span className="relative flex items-center justify-center">
//       <span className="absolute animate-pulse-slow rounded-full bg-[#D4AF37]/30 blur-[8px] w-12 h-12 z-0" />
//       <svg width="38" height="38" viewBox="0 0 38 38" fill="none" className="relative z-10">
//         <motion.circle
//           cx="19"
//           cy="19"
//           r="10"
//           fill="#D4AF37"
//           initial={{ opacity: 0.5, scale: 0.95 }}
//           animate={{ opacity: [0.5, 1, 0.5], scale: [0.95, 1.05, 0.95] }}
//           transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
//         />
//         <motion.path d="M19 6V12" stroke="#D4AF37" strokeWidth="2" strokeLinecap="round"
//           initial={{ pathLength: 0 }} animate={{ pathLength: 1 }}
//           transition={{ duration: 1.5, delay: 0.3 }} />
//         <motion.path d="M19 26V32" stroke="#D4AF37" strokeWidth="2" strokeLinecap="round"
//           initial={{ pathLength: 0 }} animate={{ pathLength: 1 }}
//           transition={{ duration: 1.2, delay: 0.4 }} />
//         <motion.path d="M10 19H4" stroke="#D4AF37" strokeWidth="2" strokeLinecap="round"
//           initial={{ pathLength: 0 }} animate={{ pathLength: 1 }}
//           transition={{ duration: 1, delay: 0.6 }} />
//         <motion.path d="M34 19H28" stroke="#D4AF37" strokeWidth="2" strokeLinecap="round"
//           initial={{ pathLength: 0 }} animate={{ pathLength: 1 }}
//           transition={{ duration: 1, delay: 0.8 }} />
//       </svg>
//     </span>
//   );
// }
// function AnimatedChart() {
//   return (
//     <span className="relative flex items-center justify-center">
//       <span className="absolute animate-pulse-slow rounded-full bg-[#D4AF37]/25 blur-[8px] w-12 h-12 z-0" />
//       <svg width="38" height="38" viewBox="0 0 38 38" fill="none" className="relative z-10">
//         <motion.polyline
//           points="6,28 14,18 24,28 32,10"
//           fill="none"
//           stroke="#D4AF37"
//           strokeWidth="2.5"
//           strokeLinecap="round"
//           strokeLinejoin="round"
//           initial={{ pathLength: 0 }}
//           animate={{ pathLength: 1 }}
//           transition={{
//             duration: 2,
//             repeat: Infinity,
//             repeatType: "reverse",
//             ease: "easeInOut",
//           }}
//         />
//         <motion.circle
//           cx="32"
//           cy="10"
//           r="3"
//           fill="#D4AF37"
//           initial={{ scale: 0.85 }}
//           animate={{ scale: [0.85, 1, 0.85] }}
//           transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
//         />
//       </svg>
//     </span>
//   );
// }
// function AnimatedShield() {
//   return (
//     <span className="relative flex items-center justify-center">
//       <span className="absolute animate-pulse-slow rounded-full bg-[#D4AF37]/20 blur-[8px] w-12 h-12 z-0" />
//       <svg width="38" height="38" viewBox="0 0 38 38" fill="none" className="relative z-10">
//         <motion.path
//           d="M19 6L31 11V19C31 27 19 32 19 32C19 32 7 27 7 19V11L19 6Z"
//           stroke="#D4AF37"
//           strokeWidth="2"
//           fill="none"
//           initial={{ pathLength: 0.3 }}
//           animate={{ pathLength: [0.3, 1, 0.3] }}
//           transition={{
//             duration: 2.3,
//             repeat: Infinity,
//             ease: "easeInOut",
//           }}
//         />
//         <motion.path
//           d="M19 14V21"
//           stroke="#D4AF37"
//           strokeWidth="2"
//           strokeLinecap="round"
//           initial={{ pathLength: 0 }}
//           animate={{ pathLength: 1 }}
//           transition={{
//             duration: 1.5,
//             delay: 0.7,
//             repeat: Infinity,
//             repeatType: "reverse",
//             ease: "easeInOut",
//           }}
//         />
//       </svg>
//     </span>
//   );
// }

// export default function Features() {
//   const { t } = useTranslation();

//   const CARDS = [
//     { key: "innovation", icon: <AnimatedLightbulb />, title: t("features.innovation"), desc: t("features.innovationDesc") },
//     { key: "excellence", icon: <AnimatedChart />, title: t("features.excellence"), desc: t("features.excellenceDesc") },
//     { key: "talent", icon: <AnimatedShield />, title: t("features.talent"), desc: t("features.talentDesc") },
//   ];

//   return (
//     <section
//       id="features"
//       className="relative min-h-[700px] flex flex-col items-center justify-center py-24 px-4 bg-[#0A1828] overflow-hidden select-none"
//     >
//       {/* Imagen protagonista */}
//       <div
//         className="
//           absolute inset-0 w-full h-full z-0
//           after:content-[''] after:absolute after:inset-0
//           after:bg-gradient-to-t after:from-[#0A1828ee] after:to-[#114F5599]
//           after:backdrop-blur-[2.5px]
//         "
//         style={{
//           background: `url('/features-bg.jpg') center center/cover no-repeat`
//         }}
//       />
//       {/* Partículas doradas suaves */}
//       <Particles
//         id="featuresParticles"
//         init={useCallback(async (engine) => await loadSlim(engine), [])}
//         options={{
//           fullScreen: { enable: false },
//           background: { color: "transparent" },
//           particles: {
//             number: { value: 18, density: { enable: true, area: 950 } },
//             color: { value: "#D4AF37" },
//             size: { value: { min: 1.3, max: 2.7 } },
//             move: { enable: true, speed: 0.12 },
//             opacity: { value: 0.10 },
//             links: { enable: true, distance: 115, color: "#D4AF37", opacity: 0.035, width: 1 },
//           },
//         }}
//         className="absolute inset-0 z-0"
//       />

//       {/* Glass panel central */}
//       <motion.div
//         initial={{ opacity: 0, y: 50, scale: 0.97 }}
//         whileInView={{ opacity: 1, y: 0, scale: 1 }}
//         viewport={{ once: true }}
//         transition={{ duration: 1, ease: "easeOut" }}
//         className="
//           relative z-10 mx-auto mb-16 w-full max-w-3xl
//           bg-gradient-to-br from-[#fff]/[0.03] via-[#0A182899] to-[#114F55ee]
//           backdrop-blur-[38px]
//           rounded-3xl shadow-2xl border border-[#D4AF37]/30
//           px-8 py-12
//           flex flex-col items-center
//         "
//         style={{
//           boxShadow: "0 14px 64px 0 #114F5550, 0 2px 32px 0 #D4AF3740"
//         }}
//       >
//        <h2 className="text-center text-4xl sm:text-5xl font-black text-[#D4AF37] drop-shadow-[0_3px_22px_rgba(22,217,227,0.13)]">
//   {t("features.heroTitle")}
// </h2>

//         <p className="mt-6 text-lg sm:text-xl text-white/85 text-center font-light max-w-2xl mx-auto tracking-wide">
//           {t("features.heroTagline")}
//         </p>
//       </motion.div>

//       {/* CARDS glass "flotantes", con más profundidad */}
//       <motion.div
//         initial={{ opacity: 0, y: 40 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         viewport={{ once: true, amount: 0.17 }}
//         transition={{ duration: 1.1, ease: "easeOut" }}
//         className="relative z-20 grid gap-8 md:grid-cols-2 lg:grid-cols-3 w-full max-w-5xl justify-items-center"
//       >
//         {CARDS.map(({ key, icon, title, desc }) => (
//           <motion.div
//             key={key}
//             whileHover={{
//               scale: 1.08,
//               y: -12,
//               boxShadow: "0 14px 68px 0 #D4AF3790, 0 2px 36px 0 #17858260",
//               background: "rgba(23, 133, 130, 0.19)",
//             }}
//             className={`
//               group relative rounded-[22px]
//               bg-gradient-to-br from-[#0A1828f3] to-[#178582e6]
//               bg-clip-padding 
//               backdrop-blur-[28px]
//               border border-[#D4AF37]/40 shadow-xl
//               w-[245px] h-[270px] md:w-[218px] md:h-[240px] xl:w-[245px] xl:h-[265px]
//               transition-all duration-300
//               flex flex-col items-center justify-center
//               hover:shadow-[0_0_70px_18px_#D4AF3744]
//             `}
//             style={{ zIndex: 22 }}
//           >
//             <div className="mb-2 flex items-center justify-center">{icon}</div>
//             <h3 className="mb-1 text-center text-lg font-bold text-[#D4AF37] tracking-wide drop-shadow">
//               {title}
//             </h3>
//             <p className="text-center text-slate-100/90 text-sm leading-relaxed px-2">
//               {desc}
//             </p>
//           </motion.div>
//         ))}
//       </motion.div>
//       {/* Opcional: puedes poner aquí mockups de planos/laptops como <img className="absolute ..." src="/mockup.png" alt="" /> */}

//       {/* SHIMMER CSS */}
//       <style jsx>{`
//         .shimmer-highlight {
//           position: relative;
//           z-index: 1;
//         }
//         .shimmer-anim {
//           display: block;
//           pointer-events: none;
//           position: absolute;
//           inset: 0;
//           z-index: 2;
//           background: linear-gradient(
//             120deg,
//             rgba(255, 255, 255, 0) 35%,
//             rgba(255, 255, 255, 0.7) 55%,
//             rgba(255, 255, 255, 0) 70%
//           );
//           mix-blend-mode: lighten;
//           filter: blur(2.2px);
//           background-size: 200% 100%;
//           animation: shimmerMove 2.6s cubic-bezier(.65,0,.35,1) infinite;
//         }
//         @keyframes shimmerMove {
//           0% { background-position-x: 110%; }
//           100% { background-position-x: -25%; }
//         }
//         .animate-pulse-slow {
//           animation: pulseSlow 2.5s cubic-bezier(.4,0,.6,1) infinite;
//         }
//         @keyframes pulseSlow {
//           0%, 100% { opacity: 0.45; }
//           50% { opacity: 0.93; }
//         }
//       `}</style>
//     </section>
//   );
// }
// src/pages/Features.jsx
import React, { useCallback } from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";

/* ===================== Iconos animados ===================== */
function AnimatedLightbulb() {
  return (
    <span className="relative flex items-center justify-center">
      <span className="absolute animate-pulse-slow rounded-full bg-[#D4AF37]/30 blur-[8px] w-12 h-12 z-0" />
      <svg width="38" height="38" viewBox="0 0 38 38" fill="none" className="relative z-10">
        <motion.circle
          cx="19" cy="19" r="10" fill="#D4AF37"
          initial={{ opacity: 0.5, scale: 0.95 }}
          animate={{ opacity: [0.5, 1, 0.5], scale: [0.95, 1.05, 0.95] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.path d="M19 6V12" stroke="#D4AF37" strokeWidth="2" strokeLinecap="round"
          initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 1.5, delay: 0.3 }} />
        <motion.path d="M19 26V32" stroke="#D4AF37" strokeWidth="2" strokeLinecap="round"
          initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 1.2, delay: 0.4 }} />
        <motion.path d="M10 19H4" stroke="#D4AF37" strokeWidth="2" strokeLinecap="round"
          initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 1, delay: 0.6 }} />
        <motion.path d="M34 19H28" stroke="#D4AF37" strokeWidth="2" strokeLinecap="round"
          initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 1, delay: 0.8 }} />
      </svg>
    </span>
  );
}
function AnimatedChart() {
  return (
    <span className="relative flex items-center justify-center">
      <span className="absolute animate-pulse-slow rounded-full bg-[#D4AF37]/25 blur-[8px] w-12 h-12 z-0" />
      <svg width="38" height="38" viewBox="0 0 38 38" fill="none" className="relative z-10">
        <motion.polyline
          points="6,28 14,18 24,28 32,10"
          fill="none" stroke="#D4AF37" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
          initial={{ pathLength: 0 }} animate={{ pathLength: 1 }}
          transition={{ duration: 2, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
        />
        <motion.circle cx="32" cy="10" r="3" fill="#D4AF37"
          initial={{ scale: 0.85 }} animate={{ scale: [0.85, 1, 0.85] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        />
      </svg>
    </span>
  );
}
function AnimatedShield() {
  return (
    <span className="relative flex items-center justify-center">
      <span className="absolute animate-pulse-slow rounded-full bg-[#D4AF37]/20 blur-[8px] w-12 h-12 z-0" />
      <svg width="38" height="38" viewBox="0 0 38 38" fill="none" className="relative z-10">
        <motion.path
          d="M19 6L31 11V19C31 27 19 32 19 32C19 32 7 27 7 19V11L19 6Z"
          stroke="#D4AF37" strokeWidth="2" fill="none"
          initial={{ pathLength: 0.3 }} animate={{ pathLength: [0.3, 1, 0.3] }}
          transition={{ duration: 2.3, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.path d="M19 14V21" stroke="#D4AF37" strokeWidth="2" strokeLinecap="round"
          initial={{ pathLength: 0 }} animate={{ pathLength: 1 }}
          transition={{ duration: 1.5, delay: 0.7, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
        />
      </svg>
    </span>
  );
}

/* ===================== Componente ===================== */
export default function Features() {
  const { t } = useTranslation();

  const CARDS = [
    { key: "innovation", icon: <AnimatedLightbulb />, title: t("features.innovation"), desc: t("features.innovationDesc") },
    { key: "excellence", icon: <AnimatedChart />, title: t("features.excellence"), desc: t("features.excellenceDesc") },
    { key: "talent", icon: <AnimatedShield />, title: t("features.talent"), desc: t("features.talentDesc") },
  ];

  return (
    <section
      id="features"
      className="relative min-h-[700px] flex flex-col items-center justify-center py-24 px-4 bg-[#0A1828] overflow-hidden select-none"
    >
      {/* Base gradient + auroras (sin imágenes) */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(1200px_700px_at_80%_-10%,rgba(23,133,130,0.18),transparent),radial-gradient(900px_520px_at_0%_100%,rgba(17,79,85,0.22),transparent)]" />
        <div className="aurora aurora-1" />
        <div className="aurora aurora-2" />
        <div className="aurora aurora-3" />
        {/* sutil línea angular para “tech vibe” */}
        <div className="absolute -skew-y-6 top-1/4 left-[-10%] w-[120%] h-[1px] bg-gradient-to-r from-transparent via-[#D4AF37]/30 to-transparent" />
      </div>

      {/* Partículas doradas muy sutiles */}
      <Particles
        id="featuresParticles"
        init={useCallback(async (engine) => await loadSlim(engine), [])}
        options={{
          fullScreen: { enable: false },
          background: { color: "transparent" },
          particles: {
            number: { value: 12, density: { enable: true, area: 950 } },
            color: { value: "#D4AF37" },
            size: { value: { min: 1, max: 2.2 } },
            move: { enable: true, speed: 0.12 },
            opacity: { value: 0.08 },
            links: { enable: true, distance: 120, color: "#D4AF37", opacity: 0.03, width: 1 },
          },
        }}
        className="absolute inset-0 z-0"
      />

      {/* Panel central “glass” */}
      <motion.div
        initial={{ opacity: 0, y: 50, scale: 0.97 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="relative z-10 mx-auto mb-16 w-full max-w-3xl
                   bg-gradient-to-br from-white/5 via-[#0A1828]/70 to-[#114F55]/80
                   backdrop-blur-[28px] rounded-3xl shadow-2xl
                   border border-[#D4AF37]/30 px-8 py-12 flex flex-col items-center"
        style={{ boxShadow: "0 14px 64px 0 #114F5550, 0 2px 32px 0 #D4AF3740" }}
      >
        <h2 className="text-center text-4xl sm:text-5xl font-black text-[#D4AF37] drop-shadow-[0_3px_22px_rgba(22,217,227,0.13)]">
          {t("features.heroTitle")}
        </h2>
        <p className="mt-6 text-lg sm:text-xl text-white/85 text-center font-light max-w-2xl mx-auto tracking-wide">
          {t("features.heroTagline")}
        </p>
      </motion.div>

      {/* Cards con Tilt */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.17 }}
        transition={{ duration: 1.1, ease: "easeOut" }}
        className="relative z-20 grid gap-8 md:grid-cols-2 lg:grid-cols-3 w-full max-w-5xl justify-items-center"
      >
        {CARDS.map(({ key, icon, title, desc }) => (
          <Tilt
            key={key}
            tiltMaxAngleX={7}
            tiltMaxAngleY={7}
            glareEnable
            glareMaxOpacity={0.18}
            glareColor="rgba(212,175,55,0.25)"
            scale={1.02}
            className="rounded-[22px]"
          >
            <motion.div
              whileHover={{
                y: -10,
                boxShadow: "0 14px 68px 0 #D4AF3790, 0 2px 36px 0 #17858260",
                background: "rgba(23, 133, 130, 0.18)",
              }}
              className="group relative rounded-[22px]
                         bg-gradient-to-br from-[#0A1828f3] to-[#178582e6]
                         backdrop-blur-[26px] border border-[#D4AF37]/40 shadow-xl
                         w-[245px] h-[270px] md:w-[218px] md:h-[240px] xl:w-[245px] xl:h-[265px]
                         transition-all duration-300 flex flex-col items-center justify-center
                         hover:shadow-[0_0_70px_18px_#D4AF3744]"
              style={{ zIndex: 22 }}
            >
              <div className="mb-2 flex items-center justify-center">{icon}</div>
              <h3 className="mb-1 text-center text-lg font-bold text-[#D4AF37] tracking-wide drop-shadow">
                {title}
              </h3>
              <p className="text-center text-slate-100/90 text-sm leading-relaxed px-2">
                {desc}
              </p>
            </motion.div>
          </Tilt>
        ))}
      </motion.div>

      {/* CSS interno */}
      <style>{`
        /* auroras sin imagen */
        .aurora {
          position: absolute;
          filter: blur(38px);
          opacity: 0.45;
          mix-blend-mode: screen;
        }
        .aurora-1 {
          top: 10%;
          left: -8%;
          width: 45vw; height: 45vw;
          background: radial-gradient(45% 55% at 50% 50%, rgba(23,133,130,0.45), transparent 60%);
          animation: drift1 16s ease-in-out infinite;
        }
        .aurora-2 {
          bottom: -12%;
          right: -10%;
          width: 50vw; height: 50vw;
          background: radial-gradient(45% 55% at 50% 50%, rgba(17,79,85,0.5), transparent 60%);
          animation: drift2 20s ease-in-out infinite;
        }
        .aurora-3 {
          top: 25%;
          right: 15%;
          width: 28vw; height: 28vw;
          background: radial-gradient(45% 55% at 50% 50%, rgba(212,175,55,0.28), transparent 60%);
          animation: drift3 18s ease-in-out infinite;
        }
        @keyframes drift1 {
          0%,100% { transform: translate3d(0,0,0) rotate(0deg); }
          50% { transform: translate3d(4%, -2%, 0) rotate(8deg); }
        }
        @keyframes drift2 {
          0%,100% { transform: translate3d(0,0,0) rotate(0deg); }
          50% { transform: translate3d(-5%, 3%, 0) rotate(-10deg); }
        }
        @keyframes drift3 {
          0%,100% { transform: translate3d(0,0,0) rotate(0deg); }
          50% { transform: translate3d(2%, 4%, 0) rotate(12deg); }
        }

        /* helpers */
        .animate-pulse-slow {
          animation: pulseSlow 2.5s cubic-bezier(.4,0,.6,1) infinite;
        }
        @keyframes pulseSlow {
          0%, 100% { opacity: 0.45; }
          50% { opacity: 0.93; }
        }
      `}</style>
    </section>
  );
}
