import React, { useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import { FaRocket, FaLightbulb, FaUsers } from "react-icons/fa";
import gsap from "gsap";

export default function Features() {
  const { t } = useTranslation();
  const svgCurvesRef = useRef(null);
  const svgConnectRef = useRef(null);

  useEffect(() => {
    // Prepara cada curva para animar el trazo
    const curves = svgCurvesRef.current.querySelectorAll("path");
    curves.forEach((path) => {
      const len = path.getTotalLength();
      path.style.strokeDasharray = len;
      path.style.strokeDashoffset = len;
    });

    // Prepara las líneas de conexión
    const lines = svgConnectRef.current.querySelectorAll("line");
    lines.forEach((line) => {
      const len = line.getTotalLength();
      line.style.strokeDasharray = len;
      line.style.strokeDashoffset = len;
    });

    // Anima curvas y líneas juntos
    gsap.to(
      [...curves, ...lines],
      {
        strokeDashoffset: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power2.out",
      }
    );
  }, []);

  const features = [
    {
      icon: <FaRocket />,
      title: t("features.innovation"),
      desc: t("features.innovationDesc"),
    },
    {
      icon: <FaLightbulb />,
      title: t("features.excellence"),
      desc: t("features.excellenceDesc"),
    },
    {
      icon: <FaUsers />,
      title: t("features.talent"),
      desc: t("features.talentDesc"),
    },
  ];

  return (
    <section className="relative py-28 px-4 bg-[#0A1828] flex flex-col items-center overflow-hidden">
      {/* Tres curvas colgando (idénticas al header de Vite) */}
      <svg
        ref={svgCurvesRef}
        className="absolute top-8 left-1/2 transform -translate-x-1/2 z-10"
        width="120"
        height="80"
        viewBox="0 0 120 80"
        fill="none"
      >
        <defs>
          <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="2" result="BLUR" />
            <feMerge>
              <feMergeNode in="BLUR" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
        {/* Curva izquierda + puntito */}
        <path
          d="M30 80 C30 45, 10 35, 10 0"
          stroke="#9FDFFF"
          strokeWidth="2"
          strokeLinecap="round"
          filter="url(#glow)"
        />
        <circle
          cx="30"
          cy="45"
          r="3"
          fill="#9FDFFF"
          filter="url(#glow)"
        />
        {/* Curva central */}
        <path
          d="M60 80 C60 50, 60 35, 60 0"
          stroke="rgba(255,255,255,0.5)"
          strokeWidth="2"
          strokeLinecap="round"
        />
        {/* Curva derecha */}
        <path
          d="M90 80 C90 50, 110 35, 110 0"
          stroke="rgba(255,255,255,0.3)"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>

      {/* Título de sección */}
      <h2 className="relative z-20 text-4xl md:text-5xl font-bold mb-16 text-gold drop-shadow-[0_3px_20px_rgba(212,175,55,0.7)]">
        {t("features.title")}
      </h2>

      {/* Líneas de conexión entre el centro de cada tarjeta */}
      <svg
        ref={svgConnectRef}
        className="absolute inset-0 pointer-events-none z-0"
        viewBox="0 0 100 20"
        preserveAspectRatio="none"
      >
        <line
          x1="16.6%"
          y1="50%"
          x2="50%"
          y2="50%"
          stroke="#D4AF37"
          strokeWidth="0.2"
        />
        <line
          x1="50%"
          y1="50%"
          x2="83.4%"
          y2="50%"
          stroke="#D4AF37"
          strokeWidth="0.2"
        />
      </svg>

      {/* Grid de Features */}
      <div className="grid md:grid-cols-3 gap-10 w-full max-w-6xl z-20">
        {features.map((f, i) => (
          <div
            key={i}
            className="relative group bg-white/10 border border-gold/10 backdrop-blur-lg rounded-2xl p-8 shadow-2xl flex flex-col items-center transition-transform duration-500 hover:scale-105 hover:border-gold/60 hover:shadow-[0_6px_36px_8px_rgba(212,175,55,0.17)]"
          >
            <div className="text-gold text-4xl mb-4">{f.icon}</div>
            <h3 className="text-2xl font-semibold mb-2 text-white">{f.title}</h3>
            <p className="text-center text-white/70">{f.desc}</p>
            {/* Glow al hover */}
            <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-80 transition-opacity duration-500">
              <div className="absolute -inset-1 rounded-2xl bg-gold/10 blur-xl"></div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
