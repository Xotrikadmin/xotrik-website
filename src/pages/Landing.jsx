// src/pages/Landing.jsx
import React, { Suspense, lazy, useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

// Hero arriba del pliegue → render inmediato
import Hero from "../components/Hero";

// Lazy (resto)
const Features = lazy(() => import("../pages/Features"));
const About = lazy(() => import("../pages/About"));
const ServicesSection = lazy(() => import("../pages/ServicesSection"));
const FaqSection = lazy(() => import("../components/FaqSection"));
const TechnologiesSection = lazy(() => import("../components/TechnologiesSection"));
const SuccessCasesSection = lazy(() => import("../components/SuccessCasesSection"));
const WhyChooseUsSection = lazy(() => import("../components/WhyChooseUsSection"));

/* ---------- UTIL: Esqueleto ultra-liviano ---------- */
function SectionSkeleton({ h = 520 }) {
  return (
    <div
      aria-hidden
      className="mx-auto max-w-7xl w-full rounded-2xl"
      style={{
        height: h,
        background:
          "linear-gradient(180deg, rgba(255,255,255,0.06), rgba(255,255,255,0.02))",
        border: "1px solid rgba(255,255,255,0.06)",
        animation: "pulse 1.4s ease-in-out infinite",
      }}
    />
  );
}

/* ---------- UTIL: Montaje diferido por visibilidad ---------- */
function Deferred({ children, fallback = null, rootMargin = "200px" }) {
  const ref = useRef(null);
  const [show, setShow] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setShow(true);
          obs.disconnect();
        }
      },
      { rootMargin }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [rootMargin]);

  return <div ref={ref}>{show ? children : fallback}</div>;
}

/* ---------- UI: Indicador “haz scroll” + barra de progreso ---------- */
function ScrollHint() {
  return (
    <div className="pointer-events-none absolute inset-x-0 bottom-6 flex justify-center">
      <motion.div
        initial={{ y: 0, opacity: 0.85 }}
        animate={{ y: [0, 8, 0], opacity: [0.85, 1, 0.85] }}
        transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
        className="flex flex-col items-center gap-1"
        role="img"
        aria-label="Desplázate hacia abajo"
      >
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
          <path
            d="M6 9l6 6 6-6"
            stroke="#D4AF37"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <span className="text-xs font-medium text-[#D4AF37]/85 tracking-wider">
          SCROLL
        </span>
      </motion.div>
    </div>
  );
}

function ScrollProgress() {
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    const onScroll = () => {
      const sTop = window.scrollY;
      const docH = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(docH > 0 ? (sTop / docH) * 100 : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <div className="fixed top-0 left-0 right-0 z-[60] h-[3px] bg-transparent">
      <div
        className="h-full"
        style={{
          width: `${progress}%`,
          background:
            "linear-gradient(90deg,#FFD369 0%,#D4AF37 70%, rgba(23,133,130,0.8) 100%)",
          boxShadow: "0 0 12px #D4AF37aa",
          transition: "width .15s linear",
        }}
      />
    </div>
  );
}

export default function Landing() {
  return (
    <>
      {/* Barra de progreso de scroll */}
      <ScrollProgress />

      {/* 1) HERO */}
      <section id="hero" className="relative">
        <Hero />
        <ScrollHint />
      </section>

      {/* 2) WHY CHOOSE US (value props rápidos) */}
      <Deferred rootMargin="300px" fallback={<SectionSkeleton h={520} />}>
        <Suspense fallback={<SectionSkeleton h={520} />}>
          <section id="why-choose-us">
            <WhyChooseUsSection />
          </section>
        </Suspense>
      </Deferred>

      {/* 3) SERVICES (qué haces) */}
      <Deferred fallback={<SectionSkeleton h={560} />}>
        <Suspense fallback={<SectionSkeleton h={560} />}>
          <section id="services">
            <ServicesSection />
          </section>
        </Suspense>
      </Deferred>

      {/* 4) FEATURES (cómo lo haces / diferenciadores) */}
      <Deferred fallback={<SectionSkeleton h={540} />}>
        <Suspense fallback={<SectionSkeleton h={540} />}>
          <section id="features">
            <Features />
          </section>
        </Suspense>
      </Deferred>

      {/* 5) SUCCESS CASES (prueba social temprano) */}
      <Deferred fallback={<SectionSkeleton h={560} />}>
        <Suspense fallback={<SectionSkeleton h={560} />}>
          <section id="success-cases">
            <SuccessCasesSection />
          </section>
        </Suspense>
      </Deferred>

      {/* 6) ABOUT (credenciales humanas) */}
      <Deferred fallback={<SectionSkeleton h={520} />}>
        <Suspense fallback={<SectionSkeleton h={520} />}>
          <section id="about">
            <About />
          </section>
        </Suspense>
      </Deferred>

      {/* 7) TECH STACK (refuerzo de confianza) */}
      <Deferred fallback={<SectionSkeleton h={520} />}>
        <Suspense fallback={<SectionSkeleton h={520} />}>
          <section id="tech">
            <TechnologiesSection />
          </section>
        </Suspense>
      </Deferred>

      {/* 8) FAQ (cierra objeciones) */}
      <Deferred fallback={<SectionSkeleton h={520} />}>
        <Suspense fallback={<SectionSkeleton h={520} />}>
          <section id="faq">
            <FaqSection />
          </section>
        </Suspense>
      </Deferred>

      {/* CSS del esqueleto */}
      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: .55 }
          50% { opacity: .85 }
        }
      `}</style>
    </>
  );
}
