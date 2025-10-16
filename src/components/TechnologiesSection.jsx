// import React, { useCallback } from "react";
// import { useTranslation } from "react-i18next";
// import { motion } from "framer-motion";
// import Tilt from "react-parallax-tilt";
// import Particles from "react-tsparticles";
// import { loadSlim } from "tsparticles-slim";

// // ICONOS principales
// import {
//   SiReact,
//   SiPython,
//   SiDotnet,
//   SiNodedotjs,
//   SiPostgresql,
//   SiDocker,
//   SiTypescript,
// } from "react-icons/si";
// import { FaRobot } from "react-icons/fa";

// const TECH = [
//   {
//     key: "react",
//     icon: SiReact,
//     color: "from-cyan-400 via-blue-500 to-indigo-600",
//     title: "React",
//     description: "UI library for building interactive interfaces.",
//   },
//   {
//     key: "python",
//     icon: SiPython,
//     color: "from-violet-500 via-fuchsia-500 to-pink-500",
//     title: "Python",
//     description: "Versatile programming language for modern applications.",
//   },
//   {
//     key: "dotnet",
//     icon: SiDotnet,
//     color: "from-purple-500 via-indigo-500 to-blue-600",
//     title: ".NET",
//     description: "Enterprise-grade backend framework.",
//   },
//   {
//     key: "nodejs",
//     icon: SiNodedotjs,
//     color: "from-lime-400 via-green-500 to-emerald-600",
//     title: "Node.js",
//     description: "High-performance JavaScript runtime.",
//   },
//   {
//     key: "postgresql",
//     icon: SiPostgresql,
//     color: "from-blue-400 via-blue-600 to-indigo-700",
//     title: "PostgreSQL",
//     description: "Advanced open-source SQL database.",
//   },
//   {
//     key: "docker",
//     icon: SiDocker,
//     color: "from-sky-400 via-cyan-400 to-teal-500",
//     title: "Docker",
//     description: "Containerization and DevOps tool.",
//   },
//   {
//     key: "typescript",
//     icon: SiTypescript,
//     color: "from-blue-400 via-cyan-400 to-indigo-500",
//     title: "TypeScript",
//     description: "Typed JavaScript for scalable apps.",
//   },
//   {
//     key: "ai-automation",
//     icon: FaRobot, 
//     color: "from-fuchsia-500 via-blue-400 to-cyan-400",
//     title: "AI Automation",
//     description: "Intelligent automation and generative AI solutions to transform business processes.",
//   },
// ];

// export default function TechnologiesSection({ fullPage = false }) {
//   const { t } = useTranslation();

//   const particlesInit = useCallback(async (engine) => {
//     await loadSlim(engine);
//   }, []);

//   const container = { hidden: {}, show: { transition: { staggerChildren: 0.12 } } };
//   const item = {
//     hidden: { opacity: 0, y: 30 },
//     show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
//   };

//   return (
//     <section
//       id="technologies"
//       className={`relative isolate overflow-hidden bg-[#030B16] ${fullPage ? "pt-36 pb-44" : "py-28"}`}
//     >
//       {/* Fondo de estrellas animadas */}
//       <Particles
//         id="techParticles"
//         init={particlesInit}
//         options={{
//           fullScreen: { enable: false },
//           background: { color: "transparent" },
//           particles: {
//             number: { value: 60, density: { enable: true, area: 900 } },
//             color: { value: "#ffffff" },
//             size: { value: { min: 1, max: 2.5 } },
//             move: { enable: true, speed: 0.2 },
//             opacity: { value: 0.18 },
//             links: { enable: true, distance: 130, color: "#ffffff", opacity: 0.05, width: 1 },
//           },
//         }}
//         className="absolute inset-0 -z-10"
//       />

//       {/* Título */}
//     <motion.h2
//   initial={{ opacity: 0, y: 30 }}
//   whileInView={{ opacity: 1, y: 0 }}
//   viewport={{ once: true }}
//   className="
//     mx-auto mb-24 max-w-5xl
//     text-center
//     text-4xl sm:text-5xl md:text-6xl
//     font-black tracking-tight
//     text-transparent bg-clip-text
//     bg-gradient-to-r from-[#D4AF37] via-yellow-200 to-[#D4AF37]
//     break-words leading-[1.15]
//     drop-shadow-[0_2px_16px_#D4AF3755]
//   "
//   style={{ lineHeight: 1.18, overflow: "visible" }}
// >
//   {t("tech.heading", "We build with next‑gen technologies")}
// </motion.h2>


//       {/* Grid de tecnologías */}
//       <motion.div
//         variants={container}
//         initial="hidden"
//         whileInView="show"
//         viewport={{ once: true, amount: 0.2 }}
//         className="
//           mx-auto grid max-w-[1400px]
//           gap-y-14 gap-x-10
//           sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4
//           px-8 lg:px-20
//         "
//       >
//         {TECH.map(({ key, icon: Icon, color, title, description }) => (
//           <motion.div key={key} variants={item} className="flex justify-center">
//             <Tilt tiltMaxAngleX={8} tiltMaxAngleY={8} glareEnable glareMaxOpacity={0.22} className="h-full">
//               <div
//                 className={`relative flex h-full w-full max-w-[320px] flex-col items-center rounded-[30px] p-[2px] shadow-2xl bg-gradient-to-br ${color} animate-[gradientShift_8s_linear_infinite]`}
//               >
//                 <div className="relative flex h-full flex-col items-center rounded-[28px] bg-black/40 p-10 backdrop-blur-2xl">
//                   {/* Icono */}
//                   <div className="relative mb-8 flex h-20 w-20 items-center justify-center">
//                     <span className={`absolute inset-0 rounded-full bg-gradient-to-br ${color} opacity-40 animate-ping`} />
//                     <div className={`relative flex h-full w-full items-center justify-center rounded-full bg-gradient-to-br ${color} text-[2.5rem] text-slate-900 shadow-lg`}>
//                       <Icon />
//                     </div>
//                   </div>
//                   {/* Nombre */}
//                   <h3 className="text-2xl font-bold text-white capitalize">
//                     {title}
//                   </h3>
//                   {/* Descripción */}
//                   <p className="mt-2 text-sm text-slate-300 text-center">
//                     {description}
//                   </p>
//                 </div>
//               </div>
//             </Tilt>
//           </motion.div>
//         ))}
//       </motion.div>

//       {/* Animación de gradiente global */}
//       <style jsx>{`
//         @keyframes gradientShift {
//           0%   { background-position: 0% 50%; }
//           50%  { background-position: 100% 50%; }
//           100% { background-position: 0% 50%; }
//         }
//       `}</style>
//     </section>
//   );
// }
import React, { useCallback } from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";

// ICONOS
import {
  SiReact,
  SiPython,
  SiDotnet,
  SiNodedotjs,
  SiPostgresql,
  SiDocker,
  SiTypescript,
} from "react-icons/si";
import { FaRobot } from "react-icons/fa";

// Solo metadatos fijos (key, icono y color). El texto viene desde i18n.
const TECH_META = [
  { key: "react",       icon: SiReact,       color: "from-cyan-400 via-blue-500 to-indigo-600" },
  { key: "python",      icon: SiPython,      color: "from-violet-500 via-fuchsia-500 to-pink-500" },
  { key: "dotnet",      icon: SiDotnet,      color: "from-purple-500 via-indigo-500 to-blue-600" },
  { key: "nodejs",      icon: SiNodedotjs,   color: "from-lime-400 via-green-500 to-emerald-600" },
  { key: "postgresql",  icon: SiPostgresql,  color: "from-blue-400 via-blue-600 to-indigo-700" },
  { key: "docker",      icon: SiDocker,      color: "from-sky-400 via-cyan-400 to-teal-500" },
  { key: "typescript",  icon: SiTypescript,  color: "from-blue-400 via-cyan-400 to-indigo-500" },
  { key: "aiAutomation",icon: FaRobot,       color: "from-fuchsia-500 via-blue-400 to-cyan-400" },
];

export default function TechnologiesSection({ fullPage = false }) {
  const { t } = useTranslation();

  // helper con fallback
  const tr = (path, fallback) => {
    const val = t(path);
    return val === path ? fallback : val;
  };

  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  const container = { hidden: {}, show: { transition: { staggerChildren: 0.12 } } };
  const item = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <section
      id="technologies"
      className={`relative isolate overflow-hidden bg-[#030B16] ${
        fullPage ? "pt-36 pb-44" : "py-28"
      }`}
    >
      {/* Fondo de partículas */}
      <Particles
        id="techParticles"
        init={particlesInit}
        options={{
          fullScreen: { enable: false },
          background: { color: "transparent" },
          particles: {
            number: { value: 60, density: { enable: true, area: 900 } },
            color: { value: "#ffffff" },
            size: { value: { min: 1, max: 2.5 } },
            move: { enable: true, speed: 0.2 },
            opacity: { value: 0.18 },
            links: { enable: true, distance: 130, color: "#ffffff", opacity: 0.05, width: 1 },
          },
        }}
        className="absolute inset-0 -z-10"
      />

      {/* Título */}
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="
          mx-auto mb-24 max-w-5xl
          text-center
          text-4xl sm:text-5xl md:text-6xl
          font-black tracking-tight
          text-transparent bg-clip-text
          bg-gradient-to-r from-[#D4AF37] via-yellow-200 to-[#D4AF37]
          break-words leading-[1.15]
          drop-shadow-[0_2px_16px_#D4AF3755]
        "
        style={{ lineHeight: 1.18, overflow: "visible" }}
      >
        {tr("tech.heading", "We build with next-gen technologies")}
      </motion.h2>

      {/* Grid */}
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="
          mx-auto grid max-w-[1400px]
          gap-y-14 gap-x-10
          sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4
          px-8 lg:px-20
        "
      >
        {TECH_META.map(({ key, icon: Icon, color }) => {
          const title = tr(`tech.items.${key}.title`, key);
          const description = tr(
            `tech.items.${key}.desc`,
            "Modern technology for scalable applications."
          );

          return (
            <motion.div key={key} variants={item} className="flex justify-center">
              <Tilt tiltMaxAngleX={8} tiltMaxAngleY={8} glareEnable glareMaxOpacity={0.22} className="h-full">
                <div
                  className={`relative flex h-full w-full max-w-[320px] flex-col items-center rounded-[30px] p-[2px] shadow-2xl bg-gradient-to-br ${color} animate-[gradientShift_8s_linear_infinite]`}
                >
                  <div className="relative flex h-full flex-col items-center rounded-[28px] bg-black/40 p-10 backdrop-blur-2xl">
                    {/* Icono */}
                    <div className="relative mb-8 flex h-20 w-20 items-center justify-center">
                      <span className={`absolute inset-0 rounded-full bg-gradient-to-br ${color} opacity-40 animate-ping`} />
                      <div className={`relative flex h-full w-full items-center justify-center rounded-full bg-gradient-to-br ${color} text-[2.5rem] text-slate-900 shadow-lg`}>
                        <Icon aria-hidden="true" />
                      </div>
                    </div>
                    {/* Título */}
                    <h3 className="text-2xl font-bold text-white capitalize">{title}</h3>
                    {/* Descripción */}
                    <p className="mt-2 text-sm text-slate-300 text-center">{description}</p>
                  </div>
                </div>
              </Tilt>
            </motion.div>
          );
        })}
      </motion.div>

      <style jsx>{`
        @keyframes gradientShift {
          0%   { background-position: 0% 50%; }
          50%  { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
      `}</style>
    </section>
  );
}
