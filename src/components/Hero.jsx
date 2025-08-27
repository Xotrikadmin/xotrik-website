// src/components/Hero.jsx
import React, { useEffect, useRef, useState, useMemo } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import gsap from "gsap";

// tsParticles (API moderna)
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim"; // o "@tsparticles/all" si quieres todos los features

export default function Hero() {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const btnRef = useRef(null);
  const logoRef = useRef(null);
  const svgLines = useRef(null);

  // Carga del engine de partículas (evita checkVersion y mezclas de versiones)
  const [particlesReady, setParticlesReady] = useState(false);
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      // Carga un bundle ligero; cambia a loadAll(engine) si necesitas más formas/interacciones
      await loadSlim(engine);
    }).then(() => setParticlesReady(true));
  }, []);

  // Opciones de partículas (memoizadas)
  const particleOptions = useMemo(
    () => ({
      fpsLimit: 60,
      detectRetina: true,
      background: { color: "transparent" },
      fullScreen: { enable: false }, // usamos contenedor absoluto, no fullscreen
      particles: {
        color: { value: "#D4AF37" },
        links: {
          enable: true,
          distance: 160,
          color: "#D4AF37",
          opacity: 0.16,
          width: 1,
        },
        move: {
          enable: true,
          speed: 0.28,
          direction: "none",
          outModes: { default: "out" },
        },
        number: {
          value: 24,
          density: { enable: true, area: 900 },
        },
        opacity: { value: 0.17 },
        shape: { type: "circle" },
        size: { value: 3.2, random: { enable: true, minimumValue: 1.2 } },
      },
      interactivity: {
        events: {
          onHover: { enable: false, mode: "repulse" },
          onClick: { enable: false, mode: "push" },
          resize: true,
        },
      },
    }),
    []
  );

  useEffect(() => {
    gsap.fromTo(
      [logoRef.current, titleRef.current, subtitleRef.current, btnRef.current],
      { opacity: 0, y: 50, scale: 0.97 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 1.05,
        stagger: 0.18,
        delay: 0.15,
        ease: "power2.out",
      }
    );

    if (svgLines.current) {
      const lines = svgLines.current.querySelectorAll("path");
      lines.forEach((line) => {
        const len = line.getTotalLength();
        line.setAttribute("stroke-dasharray", String(len));
        line.setAttribute("stroke-dashoffset", String(len));
      });

      gsap.to(lines, {
        strokeDashoffset: 0,
        opacity: 0.16,
        duration: 1.8,
        ease: "power2.out",
        stagger: 0.1,
        delay: 0.25,
        onStart() {
          gsap.to(lines, {
            filter: "blur(2.5px)",
            yoyo: true,
            repeat: 1,
            duration: 2.2,
            ease: "power1.inOut",
            delay: 0.1,
          });
        },
      });
    }
  }, []);

  const goServices = () => {
    // navega a Services
    navigate("/services");
  };

  return (
    <section
      className="
        relative flex flex-col justify-center items-center text-center 
        py-32 min-h-[90vh] overflow-hidden select-none bg-center bg-cover
      "
      style={{
        backgroundImage: `
          linear-gradient(110deg, rgba(10,24,40,0.81) 18%, rgba(23,133,130,0.60) 100%),
          url('/hero.jpg')
        `,
      }}
    >
      {/* Partículas */}
      {particlesReady && (
        <Particles
          id="tsparticles"
          className="absolute inset-0 z-0 pointer-events-none"
          options={particleOptions}
        />
      )}

      {/* Líneas SVG decorativas */}
      <svg
        ref={svgLines}
        className="absolute left-1/2 bottom-10 -translate-x-1/2 z-10 pointer-events-none blur-[0.5px]"
        width="800"
        height="220"
        viewBox="0 0 800 220"
        fill="none"
      >
        {[...Array(8)].map((_, i) => (
          <path
            key={`l-${i}`}
            d={`M400 110 Q${90 + 46 * i} ${56 + 9 * i},100 205`}
            stroke="#D4AF37"
            strokeOpacity="0.13"
            strokeWidth="2"
            style={{ filter: "blur(1.3px)" }}
          />
        ))}
        {[...Array(8)].map((_, i) => (
          <path
            key={`r-${i}`}
            d={`M400 110 Q${710 - 46 * i} ${56 + 9 * i},700 205`}
            stroke="#D4AF37"
            strokeOpacity="0.13"
            strokeWidth="2"
            style={{ filter: "blur(1.3px)" }}
          />
        ))}
      </svg>

      {/* Logo */}
      <div ref={logoRef} className="relative z-20 flex flex-col items-center mb-10">
        <div className="w-28 h-28 rounded-2xl bg-[#178582]/20 flex items-center justify-center shadow-2xl border-2 border-[#D4AF37]/60 backdrop-blur-2xl overflow-hidden transition-all duration-500 hover:scale-105">
          <img src="/favicon.svg" alt="Xotrik logo" className="w-20 h-20 object-contain drop-shadow-lg" />
        </div>
      </div>

      {/* Título y subtítulo traducibles */}
      <div className="relative z-20 px-4">
        <h1
          ref={titleRef}
          className="max-w-3xl mx-auto text-5xl md:text-6xl font-black tracking-wide mb-5 text-white drop-shadow-2xl"
        >
          {t("hero.title.before")}{" "}
          <span className="text-[#D4AF37] font-extrabold">
            {t("hero.title.brand")}
          </span>
        </h1>

        <p
          ref={subtitleRef}
          className="max-w-2xl mx-auto text-xl md:text-2xl mb-8 text-white/90 font-light leading-relaxed"
        >
          {t("hero.subtitle")}
        </p>

        <button
          ref={btnRef}
          onClick={goServices}
          aria-label={t("hero.cta.ariaLabel")}
          className="inline-flex items-center gap-2 bg-[#D4AF37] text-[#0A1828] font-semibold px-8 py-4 rounded-xl shadow-xl
            hover:scale-105 hover:shadow-[0_0_20px_rgba(212,175,55,0.32)] 
            transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-[#D4AF37]/40 group relative overflow-hidden"
        >
          <span className="z-10 relative">{t("hero.cta.label")}</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 transform group-hover:translate-x-1 transition"
            fill="none" viewBox="0 0 24 24" stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </section>
  );
}
