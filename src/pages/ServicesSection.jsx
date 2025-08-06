import React, { useCallback } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import { FaRobot, FaCode, FaCogs, FaChartBar, FaArrowRight } from "react-icons/fa";

// Tooltip simple
function Tooltip({ children, label }) {
  return (
    <span className="relative group cursor-pointer">
      {children}
      <span className="pointer-events-none absolute left-1/2 top-full z-50 mt-2 w-max -translate-x-1/2 scale-95 transform rounded-md bg-slate-900 px-3 py-2 text-xs font-medium text-white opacity-0 shadow-lg transition group-hover:opacity-100 group-hover:scale-100">
        {label}
      </span>
    </span>
  );
}

export default function ServicesSection({ fullPage = false }) {
  const { t } = useTranslation();

  // --- Data ---
  const SERVICES = [
    {
      key: "aiSolutions",
      icon: FaRobot,
      grad: "from-cyan-400 via-sky-500 to-blue-600",
      title: t("services.aiSolutions.title"),
      bullets: [
        t("services.aiSolutions.bullets.0"),
        t("services.aiSolutions.bullets.1"),
        t("services.aiSolutions.bullets.2"),
        t("services.aiSolutions.bullets.3"),
      ],
      tooltip: t("services.aiSolutions.tooltip"),
    },
    {
      key: "customDev",
      icon: FaCode,
      grad: "from-teal-400 via-emerald-500 to-green-600",
      title: t("services.customDev.title"),
      bullets: [
        t("services.customDev.bullets.0"),
        t("services.customDev.bullets.1"),
        t("services.customDev.bullets.2"),
        t("services.customDev.bullets.3"),
      ],
      tooltip: t("services.customDev.tooltip"),
    },
    {
      key: "automation",
      icon: FaCogs,
      grad: "from-amber-400 via-orange-500 to-rose-500",
      title: t("services.automation.title"),
      bullets: [
        t("services.automation.bullets.0"),
        t("services.automation.bullets.1"),
        t("services.automation.bullets.2"),
        t("services.automation.bullets.3"),
      ],
      tooltip: t("services.automation.tooltip"),
    },
    {
      key: "dataScience",
      icon: FaChartBar,
      grad: "from-fuchsia-500 via-pink-500 to-rose-600",
      title: t("services.dataScience.title"),
      bullets: [
        t("services.dataScience.bullets.0"),
        t("services.dataScience.bullets.1"),
        t("services.dataScience.bullets.2"),
        t("services.dataScience.bullets.3"),
      ],
      tooltip: t("services.dataScience.tooltip"),
    },
  ];

  // --- Particles ---
  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  // --- Framer Animations ---
  const container = { hidden: {}, show: { transition: { staggerChildren: 0.14 } } };
  const item = {
    hidden: { opacity: 0, y: 42 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  const sectionAnim = {
    hidden: { opacity: 0, y: 60 },
    show: { opacity: 1, y: 0, transition: { duration: 1.1, ease: "easeOut" } },
  };

  const titleAnim = {
    hidden: { opacity: 0, y: 32 },
    show: { opacity: 1, y: 0, transition: { duration: 1, ease: "easeOut" } },
  };
  const subtitleAnim = {
    hidden: { opacity: 0, y: 16 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, delay: 0.5 } },
  };
  const lineAnim = {
    hidden: { scaleX: 0 },
    show: { scaleX: 1, transition: { duration: 0.7, delay: 1, ease: "easeOut" } },
  };

  return (
    <motion.section
      variants={sectionAnim}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      id={fullPage ? "services" : undefined}
      className={`relative isolate overflow-hidden bg-gradient-to-br from-[#0a1324] via-[#050B13] to-[#111829] ${
        fullPage ? "pt-36 pb-52" : "py-32"
      }`}
    >
      {/* Particles Backdrop */}
      <Particles
        id="servicesStars"
        init={particlesInit}
        options={{
          fullScreen: { enable: false },
          particles: {
            number: { value: 60, density: { enable: true, area: 700 } },
            color: { value: "#fff" },
            size: { value: { min: 1, max: 2.7 } },
            move: { enable: true, speed: 0.17 },
            opacity: { value: 0.12 },
            links: { enable: true, distance: 120, color: "#fff", opacity: 0.06, width: 0.7 },
          },
        }}
        className="absolute inset-0 -z-10"
      />

      {/* Título animado + shimmer */}
      <div className="mx-auto max-w-7xl px-6 flex flex-col items-start mb-20">
      <motion.h2
  variants={titleAnim}
  initial="hidden"
  whileInView="show"
  viewport={{ once: true }}
  className="
    text-[2.5rem] sm:text-5xl lg:text-6xl font-extrabold text-left
    leading-[1.16] tracking-tight mb-4 text-transparent bg-clip-text
    bg-gradient-to-br from-[#D4AF37] via-[#fff7e0] to-[#D4AF37]
    drop-shadow-[0_2px_24px_rgba(212,175,55,0.12)]
  "
style={{ lineHeight: 1.20, overflow: "visible" }}
>
  We're here<br className="hidden sm:block mb-2" />
  to help you grow
</motion.h2>

        {/* Subtítulo */}
        <motion.span
          variants={subtitleAnim}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="block text-lg sm:text-xl text-[#f3dfb3] font-medium tracking-wide mb-2"
        >
          Unlock your digital transformation with tailored software & AI solutions.
        </motion.span>
        {/* Línea dorada animada */}
        <motion.span
          variants={lineAnim}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="block w-24 border-b-4 border-[#D4AF37] mt-2 mb-2 opacity-70 rounded origin-left"
          style={{ transformOrigin: "left" }}
        />
      </div>

      <motion.div
  variants={container}
  initial="hidden"
  whileInView="show"
  viewport={{ once: true, amount: 0.18 }}
  className="
    w-full
    grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4
    gap-x-6 gap-y-10 px-6 md:px-12 xl:px-24
    items-stretch
  "
>
  {SERVICES.map(({ key, icon: Icon, title, bullets, grad, tooltip }) => (
    <motion.div key={key} variants={item} className="flex">
      <Tilt
        tiltMaxAngleX={10}
        tiltMaxAngleY={10}
        glareEnable
        glareMaxOpacity={0.16}
        glareColor="#b5eaff"
        glareBorderRadius="20px"
        className="w-full h-full"
      >
        <Tooltip label={tooltip}>
          <div
            className={`
              group relative w-full h-full
              bg-gradient-to-br ${grad} rounded-2xl p-[2.5px] shadow-2xl flex
            `}
            tabIndex={0}
          >
            {/* Glass card */}
            <div className="
              flex flex-col h-full w-full rounded-xl bg-slate-900/70 p-6 pb-4
              backdrop-blur-3xl shadow-inner transition-all
              group-hover:shadow-2xl group-hover:scale-[1.025] duration-300
              overflow-hidden justify-between
            ">
              {/* Icon + Title */}
              <div>
                <div className="flex justify-center mb-4">
                  <span className={`flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-br ${grad} text-3xl text-white shadow-lg`}>
                    <Icon aria-hidden="true" />
                  </span>
                </div>
                <h3 className="mb-2 text-center text-xl font-bold text-white leading-snug tracking-tight">{title}</h3>
              </div>
              {/* Bullets */}
              <ul className="list-disc space-y-2 pl-5 pr-2 text-sm leading-normal text-slate-200 mb-6 mt-2 flex-grow">
                {bullets.map((b, i) => <li key={i}>{b}</li>)}
              </ul>
              {/* Botón SIEMPRE ABAJO */}
              <div className="flex flex-col justify-end mt-auto w-full">
                <Link
                  to={`/services/${key}`}
                  className="
                    inline-flex items-center gap-2 rounded-lg bg-white/10 px-5 py-2.5
                    text-sm font-semibold text-teal-200 
                    hover:bg-teal-500/25 hover:text-white focus:outline-none
                    focus:ring-2 focus:ring-teal-400 w-full justify-center
                  "
                >
                  {t("common.seeMore")}
                  <FaArrowRight />
                </Link>
              </div>
            </div>
          </div>
        </Tooltip>
      </Tilt>
    </motion.div>
  ))}
</motion.div>

      {/* SHIMMER CSS */}
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
          z-index: 3;
          background: linear-gradient(
            120deg,
            rgba(255, 255, 255, 0) 25%,
            rgba(255, 255, 255, 0.7) 46%,
            rgba(255, 255, 255, 0) 70%
          );
          mix-blend-mode: lighten;
          filter: blur(2px);
          background-size: 200% 100%;
          animation: shimmerMove 2.8s cubic-bezier(.6,0,.4,1) infinite;
        }
        @keyframes shimmerMove {
          0% {
            background-position-x: 120%;
          }
          100% {
            background-position-x: -20%;
          }
        }
      `}</style>
    </motion.section>
  );
}
