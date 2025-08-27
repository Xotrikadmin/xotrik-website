'use client';
import React, { useEffect, useMemo, useRef, useState } from "react";
import {
  FaChartLine, FaCloud, FaRobot, FaMobileAlt, FaSyncAlt, FaDatabase,
  FaArrowLeft, FaArrowRight,
} from "react-icons/fa";
import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Autoplay, Pagination, Navigation, A11y } from "swiper/modules";
import { useTranslation } from "react-i18next";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import bgImage from "../assets/bg-casos-exito.png";

// --------- DEFAULTS (fallback si algo falta en i18n/props) ---------
const DEFAULT_ICONS = {
  chart: FaChartLine,
  cloud: FaCloud,
  robot: FaRobot,
  mobile: FaMobileAlt,
  sync: FaSyncAlt,
  db: FaDatabase,
};
const DEFAULT_BADGES = [
  { text: "FINANZAS", color: "#D4AF37" },
  { text: "CLOUD", color: "#178582" },
  { text: "IA", color: "#114F55" },
  { text: "INDUSTRIA", color: "#5be4b4" },
  { text: "INTEGRACIÓN", color: "#e2c185" },
  { text: "DATOS", color: "#3cc3f2" },
];
const DEFAULT_CASES = [
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

export default function SuccessCasesSection({
  cases,
  badges,
  icons = DEFAULT_ICONS,
  id = "success-cases-carousel",
  dictKey = "successCasesCarousel" // <-- NUEVO: path en tus en/es.json
}) {
  const { t } = useTranslation(); // usas tu setup de i18n existente

  // Lee arrays desde i18n (si no hay props)
  const i18nCases = t(`${dictKey}.cases`, { returnObjects: true });
  const i18nBadges = t(`${dictKey}.badges`, { returnObjects: true });
  const i18nBadgeFallback = t(`${dictKey}.badgeFallback`, { returnObjects: true }) || { text: "TECH", color: "#FFD369" };

  // Prioridad: props > i18n > defaults
  const casesData = Array.isArray(cases) && cases.length
    ? cases
    : (Array.isArray(i18nCases) && i18nCases.length ? i18nCases : DEFAULT_CASES);

  const badgesData = Array.isArray(badges) && badges.length
    ? badges
    : (Array.isArray(i18nBadges) && i18nBadges.length ? i18nBadges : DEFAULT_BADGES);

  const title = t(`${dictKey}.title`, "Casos de Éxito");
  const ariaCarousel = t(`${dictKey}.aria.carouselLabel`, "Carrusel de casos de éxito");
  const ariaPrev = t(`${dictKey}.aria.prev`, "Anterior");
  const ariaNext = t(`${dictKey}.aria.next`, "Siguiente");
  const slideLabelMessage = t(`${dictKey}.aria.slideLabelMessage`, "{{index}} de {{slidesLength}}");
  const casePrefix = t(`${dictKey}.aria.casePrefix`, "Caso de éxito");

  const swiperRef = useRef(null);
  const sectionRef = useRef(null);
  const [inView, setInView] = useState(true);

  // Respeta prefers-reduced-motion
  const prefersReducedMotion = useMemo(() => {
    if (typeof window === "undefined") return false;
    return window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  }, []);

  // Autoplay config según reduce-motion
  const autoplayConfig = useMemo(
    () => (prefersReducedMotion ? false : { delay: 5200, disableOnInteraction: false }),
    [prefersReducedMotion]
  );

  // Pausar/continuar autoplay cuando el carrusel entra/sale del viewport
  useEffect(() => {
    if (!sectionRef.current) return;
    const io = new IntersectionObserver(
      (entries) => {
        const onScreen = entries[0]?.isIntersecting;
        setInView(!!onScreen);
      },
      { threshold: 0.15 }
    );
    io.observe(sectionRef.current);
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    const sw = swiperRef.current;
    if (!sw?.autoplay) return;
    if (inView && !prefersReducedMotion) sw.autoplay.start();
    else sw.autoplay.stop();
  }, [inView, prefersReducedMotion]);

  const handleMouseEnter = () => {
    const sw = swiperRef.current;
    if (sw?.autoplay) sw.autoplay.stop();
  };
  const handleMouseLeave = () => {
    const sw = swiperRef.current;
    if (sw?.autoplay && inView && !prefersReducedMotion) sw.autoplay.start();
  };

  const onKeyDown = (e) => {
    if (!swiperRef.current) return;
    if (e.key === "ArrowLeft") {
      e.preventDefault();
      swiperRef.current.slidePrev();
    } else if (e.key === "ArrowRight") {
      e.preventDefault();
      swiperRef.current.slideNext();
    }
  };

  return (
    <section
      ref={sectionRef}
      className="relative py-32 md:py-40 overflow-x-clip"
      style={{
        background: `linear-gradient(117deg,rgba(10,24,40,.99) 84%,rgba(212,175,55,.085) 100%), url(${bgImage}) center/cover no-repeat`
      }}
      aria-labelledby={`${id}-title`}
    >
      {/* Textura leve */}
      <div
        className="pointer-events-none absolute inset-0 z-0 mix-blend-soft-light"
        style={{ background: "url('/noise.png') repeat, transparent", opacity: 0.08 }}
      />

      {/* Header */}
      <div className="flex flex-col items-center mb-14 select-none">
        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          whileInView={{ scaleX: 1, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          style={{
            width: 68, height: 4, borderRadius: 3, marginBottom: 17,
            background: `linear-gradient(90deg,#FFD369 0%,#D4AF37 70%)`,
            boxShadow: `0 2px 16px #FFD36977`, opacity: 0.67, transformOrigin: "left",
          }}
        />
        <motion.h2
          id={`${id}-title`}
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
          {title}
        </motion.h2>
      </div>

      {/* Slider */}
      <div
        className="relative max-w-7xl mx-auto px-2 md:px-4"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onKeyDown={onKeyDown}
        role="region"
        aria-roledescription="carousel"
        aria-label={ariaCarousel}
        aria-live="off"
        tabIndex={0}
      >
        {/* Botones */}
        <button
          aria-label={ariaPrev}
          onClick={() => swiperRef.current?.slidePrev()}
          className="absolute left-1 top-1/2 -translate-y-1/2 z-20 bg-[#0A1828]/80 hover:bg-[#FFD369]/90 transition rounded-full p-3 shadow-xl border border-[#FFD369]/70 text-[#FFD369] hover:text-[#0A1828] focus:outline-none focus:ring-2 focus:ring-[#FFD369] focus:ring-offset-2 hidden md:flex"
        >
          <FaArrowLeft size={22} />
        </button>
        <button
          aria-label={ariaNext}
          onClick={() => swiperRef.current?.slideNext()}
          className="absolute right-1 top-1/2 -translate-y-1/2 z-20 bg-[#0A1828]/80 hover:bg-[#FFD369]/90 transition rounded-full p-3 shadow-xl border border-[#FFD369]/70 text-[#FFD369] hover:text-[#0A1828] focus:outline-none focus:ring-2 focus:ring-[#FFD369] focus:ring-offset-2 hidden md:flex"
        >
          <FaArrowRight size={22} />
        </button>

        <Swiper
          id={id}
          slidesPerView={1.15}
          spaceBetween={42}
          centeredSlides
          loop
          effect="coverflow"
          coverflowEffect={{ rotate: 0, stretch: 54, depth: 180, modifier: 1.7, slideShadows: false }}
          autoplay={autoplayConfig}
          pagination={{
            el: ".swiper-custom-pagination",
            clickable: true,
            bulletClass: "custom-dot",
            bulletActiveClass: "active-dot",
          }}
          navigation={false}
          modules={[EffectCoverflow, Autoplay, Pagination, Navigation, A11y]}
          a11y={{
            enabled: true,
            prevSlideMessage: ariaPrev,
            nextSlideMessage: ariaNext,
            slideLabelMessage: slideLabelMessage,
          }}
          className="w-full pb-20 select-none"
          onSwiper={(sw) => { swiperRef.current = sw; }}
          breakpoints={{
            768: { slidesPerView: 2.09 },
            1024: { slidesPerView: 3 },
          }}
          /* ==== FIX CLIPPING ==== */
          autoHeight
          style={{ overflow: "visible" }}
        >
          {casesData.map(({ icon, title, desc, image }, i) => {
            const Icon = (icon && icons[icon]) ? icons[icon] : FaChartLine;
            const badge = badgesData[i % badgesData.length] || i18nBadgeFallback;
            return (
              <SwiperSlide key={i}>
                <div className="py-6">
                  <Tilt
                    tiltMaxAngleX={7}
                    tiltMaxAngleY={7}
                    glareEnable
                    glareMaxOpacity={0.13}
                    glareColor="#FFD369"
                    scale={1.012}
                    transitionSpeed={1000}
                    className="h-full"
                  >
                    <motion.div
                      initial={prefersReducedMotion ? { opacity: 0 } : { opacity: 0, y: 36, scale: 0.96 }}
                      whileInView={prefersReducedMotion ? { opacity: 1 } : { opacity: 1, y: 0, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ ...spring, delay: prefersReducedMotion ? 0 : 0.08 * i }}
                      aria-label={`${casePrefix}: ${title}`}
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
                      {/* Glow */}
                      {!prefersReducedMotion && (
                        <motion.span
                          className="absolute left-1/2 top-8 -translate-x-1/2 rounded-full blur-2xl opacity-25"
                          animate={{ scale: [1, 1.15, 1], opacity: [0.23, 0.38, 0.23] }}
                          transition={{ repeat: Infinity, duration: 3.1, ease: "easeInOut" }}
                          style={{
                            width: "98px",
                            height: "34px",
                            background: "radial-gradient(circle,#FFD36999 20%,transparent 80%)",
                            zIndex: 0,
                          }}
                        />
                      )}

                      <div className="flex flex-col items-center mb-3 z-10">
                        <motion.span
                          whileHover={prefersReducedMotion ? undefined : { rotate: -10, scale: 1.08 }}
                          transition={spring}
                          className="mb-2"
                        >
                          <Icon className="text-4xl text-[#FFD369] drop-shadow-[0_1px_8px_#FFD36940]" />
                        </motion.span>
                        <img
                          src={image}
                          alt={title}
                          width={64}
                          height={64}
                          loading="lazy"
                          decoding="async"
                          className="w-16 h-16 rounded-lg shadow-md border-2 border-[#FFD369]/40 object-cover"
                          style={{ background: "linear-gradient(137deg,#17858210 40%,#FFD36909 100%)" }}
                          sizes="(max-width: 768px) 64px, 64px"
                        />
                      </div>

                      <motion.span
                        whileHover={prefersReducedMotion ? undefined : { scale: 1.13, backgroundColor: badge.color, color: "#fff" }}
                        transition={spring}
                        className="font-bold px-3 py-1 rounded-full uppercase text-xs mb-3 tracking-wider shadow-lg transition-all"
                        style={{ background: badge.color, color: "#0A1828", boxShadow: "0 0 12px 2px #FFD36930" }}
                      >
                        {badge.text}
                      </motion.span>

                      <motion.h3
                        whileHover={prefersReducedMotion ? undefined : { scale: 1.05, color: "#FFD369" }}
                        transition={spring}
                        className="text-2xl font-extrabold text-[#FFD369] mb-2 text-center tracking-tight"
                      >
                        {title}
                      </motion.h3>

                      <p className="text-slate-100 text-base leading-6 text-center flex-1 font-medium drop-shadow-[0_2px_14px_#0A182890]">
                        {desc}
                      </p>
                    </motion.div>
                  </Tilt>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>

        {/* Dots */}
        <div className="swiper-custom-pagination flex justify-center gap-3 -mt-8" />

        <style>{`
          /* ==== FIX CLIPPING ==== */
          .swiper, .swiper-wrapper, .swiper-slide {
            overflow: visible !important;
          }
          .custom-dot {
            width: 18px; height: 18px; border-radius: 50%;
            border: 2px solid #FFD369; background: transparent;
            margin: 0 5px; transition: all .22s cubic-bezier(.45,.67,.23,1);
            box-shadow: 0 2px 10px #FFD36922; position: relative; cursor: pointer; outline: none;
          }
          .custom-dot:focus-visible { box-shadow: 0 0 0 3px #0A1828, 0 0 0 6px #FFD369; }
          .active-dot {
            background: radial-gradient(circle, #FFD369 65%, #D4AF37 100%);
            box-shadow: 0 0 20px #FFD369c0; border-color: #FFD369; transform: scale(1.18);
          }
        `}</style>
      </div>
    </section>
  );
}
