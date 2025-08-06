import React, { useRef } from "react";
import { FaChartLine, FaCloud, FaRobot, FaMobileAlt, FaSyncAlt, FaDatabase, FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import bgImage from "../assets/bg-casos-exito.png";

// --------- DUMMY DATA ---------
const ICONS = {
  chart: FaChartLine,
  cloud: FaCloud,
  robot: FaRobot,
  mobile: FaMobileAlt,
  sync: FaSyncAlt,
  db: FaDatabase,
};
const BADGES = [
  { text: "FINANZAS", color: "#D4AF37" },
  { text: "CLOUD", color: "#178582" },
  { text: "IA", color: "#114F55" },
  { text: "INDUSTRIA", color: "#5be4b4" },
  { text: "INTEGRACIÓN", color: "#e2c185" },
  { text: "DATOS", color: "#3cc3f2" },
];
const CASES = [
  {
    icon: "chart",
    title: "Optimización de Costos Financieros",
    desc: "Redujimos en un 23% los gastos operativos de una empresa líder en banca digital, automatizando procesos clave con IA y cloud analytics.",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=facearea&w=128&q=80"
  },
  {
    icon: "cloud",
    title: "Migración Cloud Enterprise",
    desc: "Ejecutamos una migración total a Azure en solo 4 semanas para una industria manufacturera global, logrando 99.99% de uptime y compliance ISO 27001.",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=facearea&w=128&q=80"
  },
  {
    icon: "robot",
    title: "Automatización Inteligente con IA",
    desc: "Desplegamos chatbots y RPA que mejoraron la satisfacción al cliente y aceleraron la resolución de tickets en un 64%.",
    image: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=facearea&w=128&q=80"
  },
  {
    icon: "mobile",
    title: "App Mobile Multiplataforma",
    desc: "Diseñamos una app cross-platform para gestión logística, alcanzando +120K descargas y un rating promedio de 4.9★ en 6 meses.",
    image: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=facearea&w=128&q=80"
  },
  {
    icon: "sync",
    title: "Integración IoT & Automatización",
    desc: "Conectamos sensores industriales a la nube y automatizamos alertas, reduciendo incidentes críticos un 32%.",
    image: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=facearea&w=128&q=80"
  },
  {
    icon: "db",
    title: "Big Data para Decisiones Estratégicas",
    desc: "Implementamos dashboards de BI en tiempo real, ayudando a una compañía top de retail a triplicar la velocidad de decisiones.",
    image: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=facearea&w=128&q=80"
  },
];
const spring = { type: "spring", stiffness: 150, damping: 20 };

export default function SuccessCasesSection() {
  const swiperRef = useRef();

  return (
    <section
      className="relative py-32 md:py-40 overflow-x-clip"
      style={{
        background: `linear-gradient(117deg,rgba(10,24,40,.99) 84%,rgba(212,175,55,.085) 100%), url(${bgImage}) center/cover no-repeat`
      }}
    >
      {/* Sutil textura de ruido (opcional) */}
      <div className="pointer-events-none absolute inset-0 z-0 mix-blend-soft-light" style={{
        background: "url('/noise.png') repeat, transparent",
        opacity: 0.08,
      }} />

      {/* --------- HEADER ELEGANTE UNIFICADO --------- */}
      <div className="flex flex-col items-center mb-14 select-none">
        {/* Divider dorado animado */}
        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          whileInView={{ scaleX: 1, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          style={{
            width: 68,
            height: 4,
            borderRadius: 3,
            marginBottom: 17,
            background: `linear-gradient(90deg,#FFD369 0%,#D4AF37 70%)`,
            boxShadow: `0 2px 16px #FFD36977`,
            opacity: 0.67,
            transformOrigin: "left",
          }}
        />
        {/* Título dorado simple, responsive */}
        <motion.h2
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", stiffness: 120, damping: 16 }}
          viewport={{ once: true }}
          style={{
            fontSize: "clamp(2.3rem,6vw,3.4rem)",
            fontWeight: 900,
            letterSpacing: "-.018em",
            color: "#FFD369",
            textShadow: "0 3px 24px #000b, 0 1.2px 0 #fff7",
            lineHeight: 1.07,
            margin: 0,
            padding: 0,
          }}
          className="text-center font-extrabold"
        >
          Casos de Éxito
        </motion.h2>
      </div>

      {/* --------- SLIDER --------- */}
      <div className="relative max-w-7xl mx-auto px-2 md:px-4">
        {/* Botones custom */}
        <button
          aria-label="Anterior"
          onClick={() => swiperRef.current?.slidePrev()}
          className="absolute left-1 top-1/2 -translate-y-1/2 z-20 bg-[#0A1828]/80 hover:bg-[#FFD369]/90 transition rounded-full p-3 shadow-xl border border-[#FFD369]/70 text-[#FFD369] hover:text-[#0A1828] focus:outline-none focus:ring-2 focus:ring-[#FFD369] focus:ring-offset-2 hidden md:flex"
          tabIndex={0}
        >
          <FaArrowLeft size={22} />
        </button>
        <button
          aria-label="Siguiente"
          onClick={() => swiperRef.current?.slideNext()}
          className="absolute right-1 top-1/2 -translate-y-1/2 z-20 bg-[#0A1828]/80 hover:bg-[#FFD369]/90 transition rounded-full p-3 shadow-xl border border-[#FFD369]/70 text-[#FFD369] hover:text-[#0A1828] focus:outline-none focus:ring-2 focus:ring-[#FFD369] focus:ring-offset-2 hidden md:flex"
          tabIndex={0}
        >
          <FaArrowRight size={22} />
        </button>
        <Swiper
          slidesPerView={1.15}
          spaceBetween={42}
          centeredSlides
          loop
          effect="coverflow"
          coverflowEffect={{
            rotate: 0, stretch: 54, depth: 180, modifier: 1.7, slideShadows: false,
          }}
          autoplay={{ delay: 5200, disableOnInteraction: false }}
          pagination={{
            el: ".swiper-custom-pagination",
            clickable: true,
            bulletClass: "custom-dot",
            bulletActiveClass: "active-dot"
          }}
          navigation={false}
          modules={[EffectCoverflow, Autoplay, Pagination, Navigation]}
          className="w-full pb-20 select-none"
          onSwiper={sw => { swiperRef.current = sw; }}
          breakpoints={{
            768: { slidesPerView: 2.09 },
            1024: { slidesPerView: 3 },
          }}
        >
          {CASES.map(({ icon, title, desc, image }, i) => {
            const Icon = ICONS[icon] || FaChartLine;
            const badge = BADGES[i] || { text: "TECH", color: "#FFD369" };
            return (
              <SwiperSlide key={i}>
                <Tilt
                  tiltMaxAngleX={7} tiltMaxAngleY={7}
                  glareEnable glareMaxOpacity={0.13}
                  glareColor="#FFD369" scale={1.012}
                  transitionSpeed={1000}
                  className="h-full"
                >
                  <motion.div
                    initial={{ opacity: 0, y: 36, scale: .96 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ ...spring, delay: 0.08 * i }}
                    tabIndex={0}
                    aria-label={`Caso de éxito: ${title}`}
                    className={`
                      group relative flex flex-col items-center rounded-[2.2rem]
                      shadow-2xl bg-[#112233]/60 backdrop-blur-lg
                      border-[1.7px] border-[#FFD369]/35 px-8 py-8
                      min-h-[370px] h-[395px] max-h-[410px] transition-all overflow-hidden
                      hover:scale-[1.03] hover:shadow-[0_10px_40px_#FFD36999]
                      hover:border-[#FFD369]
                      duration-500 focus:outline-none focus:ring-2 focus:ring-[#FFD369]
                    `}
                    style={{ boxSizing: "border-box" }}
                  >
                    {/* Glow animado */}
                    <motion.span
                      className="absolute left-1/2 top-8 -translate-x-1/2 rounded-full blur-2xl opacity-25"
                      animate={{ scale: [1,1.15,1], opacity:[.23,.38,.23] }}
                      transition={{ repeat:Infinity, duration:3.1, ease:"easeInOut" }}
                      style={{
                        width: "98px", height: "34px",
                        background: "radial-gradient(circle,#FFD36999 20%,transparent 80%)",
                        zIndex: 0,
                      }}
                    />
                    <div className="flex flex-col items-center mb-3 z-10">
                      <motion.span
                        whileHover={{ rotate: -10, scale: 1.08 }}
                        transition={spring}
                        className="mb-2"
                      >
                        <Icon className="text-4xl text-[#FFD369] drop-shadow-[0_1px_8px_#FFD36940]" />
                      </motion.span>
                      <img
                        src={image}
                        alt={title}
                        className="w-16 h-16 rounded-lg shadow-md border-2 border-[#FFD369]/40"
                        loading="lazy"
                        style={{
                          background: "linear-gradient(137deg,#17858210 40%,#FFD36909 100%)",
                        }}
                      />
                    </div>
                    <motion.span
                      whileHover={{ scale: 1.13, backgroundColor: badge.color, color: "#fff" }}
                      transition={spring}
                      className="font-bold px-3 py-1 rounded-full uppercase text-xs mb-3 tracking-wider shadow-lg transition-all"
                      style={{
                        background: badge.color,
                        color: "#0A1828",
                        boxShadow: "0 0 12px 2px #FFD36930"
                      }}
                    >
                      {badge.text}
                    </motion.span>
                    <motion.h3
                      whileHover={{ scale: 1.05, color: "#FFD369" }}
                      transition={spring}
                      className="text-2xl font-extrabold text-[#FFD369] mb-2 text-center tracking-tight"
                    >
                      {title}
                    </motion.h3>
                    <div className="text-slate-100 text-base leading-6 text-center flex-1 font-medium drop-shadow-[0_2px_14px_#0A182890]">
                      {desc}
                    </div>
                  </motion.div>
                </Tilt>
              </SwiperSlide>
            );
          })}
        </Swiper>
        {/* Custom dots */}
        <div className="swiper-custom-pagination flex justify-center gap-3 -mt-8"></div>
        <style>{`
          .custom-dot {
            width: 17px; height: 17px;
            border-radius: 50%;
            border: 2px solid #FFD369;
            margin: 0 4px;
            background: transparent;
            transition: all .22s cubic-bezier(.45,.67,.23,1);
            box-shadow: 0 2px 10px #FFD36922;
            position: relative;
            cursor: pointer;
            outline: none;
          }
          .active-dot {
            background: radial-gradient(circle, #FFD369 65%, #D4AF37 100%);
            box-shadow: 0 0 20px #FFD369c0;
            border-color: #FFD369;
            scale: 1.18;
          }
        `}</style>
      </div>
    </section>
  );
}




// import React, { useRef } from "react";
// import { FaChartLine, FaCloud, FaRobot, FaMobileAlt, FaSyncAlt, FaDatabase, FaArrowLeft, FaArrowRight } from "react-icons/fa";
// import { motion } from "framer-motion";
// import Tilt from "react-parallax-tilt";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { EffectCoverflow, Autoplay, Pagination, Navigation } from "swiper/modules";
// import "swiper/css";
// import "swiper/css/effect-coverflow";
// import "swiper/css/pagination";

// // --------- DATA ---------
// const ICONS = {
//   chart: FaChartLine, cloud: FaCloud, robot: FaRobot, mobile: FaMobileAlt, sync: FaSyncAlt, db: FaDatabase,
// };
// const BADGES = [
//   { text: "FINANZAS", color: "#D4AF37" }, { text: "CLOUD", color: "#178582" },
//   { text: "IA", color: "#114F55" }, { text: "INDUSTRIA", color: "#5be4b4" },
//   { text: "INTEGRACIÓN", color: "#e2c185" }, { text: "DATOS", color: "#3cc3f2" },
// ];
// const CASES = [
//   {
//     icon: "chart", title: "Optimización de Costos Financieros",
//     desc: "Redujimos en un 23% los gastos operativos de una empresa líder en banca digital, automatizando procesos clave con IA y cloud analytics.",
//     image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=facearea&w=128&q=80"
//   },
//   {
//     icon: "cloud", title: "Migración Cloud Enterprise",
//     desc: "Ejecutamos una migración total a Azure en solo 4 semanas para una industria manufacturera global, logrando 99.99% de uptime y compliance ISO 27001.",
//     image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=facearea&w=128&q=80"
//   },
//   {
//     icon: "robot", title: "Automatización Inteligente con IA",
//     desc: "Desplegamos chatbots y RPA que mejoraron la satisfacción al cliente y aceleraron la resolución de tickets en un 64%.",
//     image: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=facearea&w=128&q=80"
//   },
//   {
//     icon: "mobile", title: "App Mobile Multiplataforma",
//     desc: "Diseñamos una app cross-platform para gestión logística, alcanzando +120K descargas y un rating promedio de 4.9★ en 6 meses.",
//     image: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=facearea&w=128&q=80"
//   },
//   {
//     icon: "sync", title: "Integración IoT & Automatización",
//     desc: "Conectamos sensores industriales a la nube y automatizamos alertas, reduciendo incidentes críticos un 32%.",
//     image: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=facearea&w=128&q=80"
//   },
//   {
//     icon: "db", title: "Big Data para Decisiones Estratégicas",
//     desc: "Implementamos dashboards de BI en tiempo real, ayudando a una compañía top de retail a triplicar la velocidad de decisiones.",
//     image: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=facearea&w=128&q=80"
//   },
// ];
// const spring = { type: "spring", stiffness: 180, damping: 17 };

// // --------- SVG ANIMATED BACKGROUND ---------
// const AnimatedBg = () => (
//   <svg className="absolute inset-0 w-full h-full z-0 pointer-events-none select-none" viewBox="0 0 1920 900" fill="none" style={{ minHeight: 600 }}>
//     <defs>
//       <radialGradient id="g1" cx="50%" cy="40%" r="1" gradientTransform="matrix(1 0 0 .5 .0 .2)">
//         <stop offset="0%" stopColor="#178582" stopOpacity="0.12" />
//         <stop offset="100%" stopColor="#0A1828" stopOpacity="0.7" />
//       </radialGradient>
//     </defs>
//     {/* Glow main */}
//     <ellipse cx="960" cy="440" rx="900" ry="360" fill="url(#g1)" />
//     {/* Pulsing nodes */}
//     {[380, 900, 1500].map((x, i) => (
//       <motion.circle
//         key={i} cx={x} cy={i === 1 ? 250 : 570} r="18"
//         fill="#FFD369"
//         initial={{ opacity: .18, scale: 1 }}
//         animate={{ opacity: [.13,.34,.13], scale: [1,.88,1.06,1] }}
//         transition={{ duration: 4 + i, repeat: Infinity, delay: i * 0.8 }}
//       />
//     ))}
//     {/* Binary lines left */}
//     {[0,1,2].map(i => (
//       <motion.rect
//         key={i}
//         x={150 + i*44} y={250 + i*60} width="4" height="220"
//         rx="2"
//         fill="#178582"
//         initial={{ opacity: 0.21, y: 250 + i*60 }}
//         animate={{ opacity: [.12, .28, .12], y: [250 + i*60, 270 + i*60, 250 + i*60] }}
//         transition={{ duration: 5.8, repeat: Infinity, delay: i*1.1 }}
//       />
//     ))}
//     {/* Binary code falling */}
//     {[0,1,2].map(i => (
//       <motion.text
//         key={i}
//         x={320 + i*64} y={180}
//         fontSize="20" fill="#FFD36999" fontFamily="monospace"
//         initial={{ opacity: 0, y: 140 }}
//         animate={{ opacity: [0.22, 1, 0.22], y: [160, 420, 160] }}
//         transition={{ duration: 7.7 + i*0.7, repeat: Infinity, delay: i*0.5 }}
//       >{["101011", "010010", "100110"][i]}</motion.text>
//     ))}
//     {/* Tree connections (animated) */}
//     <motion.path
//       d="M480 640 Q950 380 1450 640"
//       stroke="#FFD36966" strokeWidth="6" fill="none"
//       initial={{ pathLength: 0, opacity: 0.08 }}
//       animate={{ pathLength: [0,1,0], opacity: [0.13,.31,.13] }}
//       transition={{ duration: 6.3, repeat: Infinity, ease: "easeInOut" }}
//     />
//     {/* Microdots */}
//     {[240, 520, 980, 1300, 1700].map((x, i) => (
//       <motion.circle
//         key={x}
//         cx={x} cy={790 - ((i%2)*32)}
//         r={i === 2 ? 7 : 4}
//         fill="#D4AF37"
//         initial={{ opacity: .14, scale: 1 }}
//         animate={{ opacity: [.24,.48,.24], scale: [1,.95,1.1,1] }}
//         transition={{ duration: 4.6 + i*0.3, repeat: Infinity, delay: i*0.55 }}
//       />
//     ))}
//   </svg>
// );

// export default function SuccessCasesSection() {
//   const swiperRef = useRef();

//   return (
//     <section
//       className="relative py-32 md:py-40 overflow-x-clip"
//       style={{
//         background: "linear-gradient(117deg,rgba(10,24,40,1) 80%,rgba(23,133,130,0.03) 100%)"
//       }}
//     >
//       {/* Fondo SVG animado */}
//       <AnimatedBg />
//       {/* Sutil textura glass/noise */}
//       <div className="pointer-events-none absolute inset-0 z-10 mix-blend-soft-light" style={{
//         background: "url('/noise.png') repeat, transparent",
//         opacity: 0.10,
//       }} />
//       {/* HEADER */}
//       <div className="flex flex-col items-center mb-16 select-none relative z-20">
//         <motion.div
//           initial={{ scaleX: 0, opacity: 0 }}
//           whileInView={{ scaleX: 1, opacity: 1 }}
//           transition={{ duration: 0.8, ease: "easeOut" }}
//           viewport={{ once: true }}
//           style={{
//             width: 78, height: 5, borderRadius: 3, marginBottom: 18,
//             background: `linear-gradient(90deg,#FFD369 0%,#D4AF37 70%)`,
//             boxShadow: `0 2px 16px #FFD36977`, opacity: 0.7, transformOrigin: "left",
//           }}
//         />
//         <motion.h2
//           initial={{ opacity: 0, y: 28 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ type: "spring", stiffness: 110, damping: 16 }}
//           viewport={{ once: true }}
//           style={{
//             fontSize: "clamp(2.4rem,6vw,3.7rem)",
//             fontWeight: 900,
//             letterSpacing: "-.02em",
//             color: "#FFD369",
//             textShadow: "0 3px 24px #000b, 0 1.2px 0 #fff9",
//             lineHeight: 1.06,
//             margin: 0,
//           }}
//           className="text-center font-extrabold"
//         >
//           Casos de Éxito
//         </motion.h2>
//         <p className="text-[#FFD369d2] font-semibold text-lg mt-3 mb-1 text-center max-w-2xl"
//           style={{ textShadow: "0 1px 12px #0A182877" }}>
//           Proyectos que transforman negocios con tecnología, datos e IA.
//         </p>
//       </div>
//       {/* SLIDER */}
//       <div className="relative max-w-7xl mx-auto px-2 md:px-6 z-30">
//         {/* Botones custom */}
//         <button
//           aria-label="Anterior"
//           onClick={() => swiperRef.current?.slidePrev()}
//           className="absolute left-2 top-1/2 -translate-y-1/2 z-40 bg-[#0A1828]/80 hover:bg-[#FFD369]/90 transition rounded-full p-3 shadow-xl border border-[#FFD369]/70 text-[#FFD369] hover:text-[#0A1828] focus:outline-none focus:ring-2 focus:ring-[#FFD369] focus:ring-offset-2 hidden md:flex"
//         ><FaArrowLeft size={22} /></button>
//         <button
//           aria-label="Siguiente"
//           onClick={() => swiperRef.current?.slideNext()}
//           className="absolute right-2 top-1/2 -translate-y-1/2 z-40 bg-[#0A1828]/80 hover:bg-[#FFD369]/90 transition rounded-full p-3 shadow-xl border border-[#FFD369]/70 text-[#FFD369] hover:text-[#0A1828] focus:outline-none focus:ring-2 focus:ring-[#FFD369] focus:ring-offset-2 hidden md:flex"
//         ><FaArrowRight size={22} /></button>
//         <Swiper
//           slidesPerView={1.13}
//           spaceBetween={46}
//           centeredSlides
//           loop
//           effect="coverflow"
//           coverflowEffect={{
//             rotate: 0, stretch: 62, depth: 190, modifier: 1.75, slideShadows: false,
//           }}
//           autoplay={{ delay: 4800, disableOnInteraction: false }}
//           pagination={{
//             el: ".swiper-custom-pagination",
//             clickable: true,
//             bulletClass: "custom-dot",
//             bulletActiveClass: "active-dot"
//           }}
//           navigation={false}
//           modules={[EffectCoverflow, Autoplay, Pagination, Navigation]}
//           className="w-full pb-20 select-none"
//           onSwiper={sw => { swiperRef.current = sw; }}
//           breakpoints={{
//             768: { slidesPerView: 2.05 }, 1024: { slidesPerView: 3 },
//           }}
//         >
//           {CASES.map(({ icon, title, desc, image }, i) => {
//             const Icon = ICONS[icon] || FaChartLine;
//             const badge = BADGES[i] || { text: "TECH", color: "#FFD369" };
//             return (
//               <SwiperSlide key={i}>
//                 <Tilt tiltMaxAngleX={8} tiltMaxAngleY={8} glareEnable glareMaxOpacity={0.17}
//                   glareColor="#FFD369" scale={1.013} transitionSpeed={900} className="h-full">
//                   <motion.div
//                     initial={{ opacity: 0, y: 36, scale: .96 }}
//                     whileInView={{ opacity: 1, y: 0, scale: 1 }}
//                     viewport={{ once: true }}
//                     transition={{ ...spring, delay: 0.06 * i }}
//                     tabIndex={0}
//                     aria-label={`Caso de éxito: ${title}`}
//                     className={`
//                       group relative flex flex-col items-center rounded-[2.5rem]
//                       shadow-2xl bg-[#10202e]/70 backdrop-blur-2xl
//                       border-[2.2px] border-[#FFD369]/30 px-9 py-9
//                       min-h-[390px] h-[405px] max-h-[420px] transition-all overflow-hidden
//                       hover:scale-[1.035] hover:shadow-[0_12px_48px_#FFD36999]
//                       hover:border-[#FFD369] focus:outline-none focus:ring-2 focus:ring-[#FFD369]
//                     `}
//                     style={{ boxSizing: "border-box" }}
//                   >
//                     {/* Glow animado */}
//                     <motion.span
//                       className="absolute left-1/2 top-9 -translate-x-1/2 rounded-full blur-2xl opacity-25"
//                       animate={{ scale: [1,1.17,1], opacity:[.19,.38,.19] }}
//                       transition={{ repeat:Infinity, duration:2.9, ease:"easeInOut" }}
//                       style={{
//                         width: "106px", height: "36px",
//                         background: "radial-gradient(circle,#FFD369b3 16%,transparent 84%)",
//                         zIndex: 0,
//                       }}
//                     />
//                     <div className="flex flex-col items-center mb-3 z-10">
//                       <motion.span whileHover={{ rotate: -11, scale: 1.11 }}
//                         transition={spring} className="mb-2">
//                         <Icon className="text-4xl text-[#FFD369] drop-shadow-[0_1px_8px_#FFD36950]" />
//                       </motion.span>
//                       <img
//                         src={image}
//                         alt={title}
//                         className="w-16 h-16 rounded-lg shadow-md border-2 border-[#FFD369]/50"
//                         loading="lazy"
//                         style={{
//                           background: "linear-gradient(137deg,#17858210 40%,#FFD36909 100%)",
//                         }}
//                       />
//                     </div>
//                     <motion.span
//                       whileHover={{ scale: 1.14, backgroundColor: badge.color, color: "#fff" }}
//                       transition={spring}
//                       className="font-bold px-3 py-1 rounded-full uppercase text-xs mb-3 tracking-wider shadow-lg transition-all"
//                       style={{
//                         background: badge.color, color: "#0A1828", boxShadow: "0 0 14px 2px #FFD36940"
//                       }}
//                     >{badge.text}</motion.span>
//                     <motion.h3
//                       whileHover={{ scale: 1.07, color: "#FFD369" }}
//                       transition={spring}
//                       className="text-2xl font-extrabold text-[#FFD369] mb-2 text-center tracking-tight"
//                     >{title}</motion.h3>
//                     <div className="text-slate-100 text-base leading-6 text-center flex-1 font-medium drop-shadow-[0_2px_14px_#0A182890]">
//                       {desc}
//                     </div>
//                   </motion.div>
//                 </Tilt>
//               </SwiperSlide>
//             );
//           })}
//         </Swiper>
//         <div className="swiper-custom-pagination flex justify-center gap-3 -mt-8"></div>
//         <style>{`
//           .custom-dot {
//             width: 17px; height: 17px; border-radius: 50%;
//             border: 2px solid #FFD369;
//             margin: 0 4px;
//             background: transparent;
//             transition: all .22s cubic-bezier(.45,.67,.23,1);
//             box-shadow: 0 2px 10px #FFD36922;
//             position: relative; cursor: pointer; outline: none;
//           }
//           .active-dot {
//             background: radial-gradient(circle, #FFD369 65%, #D4AF37 100%);
//             box-shadow: 0 0 20px #FFD369c0;
//             border-color: #FFD369;
//             scale: 1.18;
//           }
//         `}</style>
//       </div>
//     </section>
//   );
// }
