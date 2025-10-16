
// src/routes/AppRoutes.jsx
import React, { Suspense, lazy, useState, useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Layout from "../components/Layout";
import { RingLoader } from "react-spinners";
import { motion, AnimatePresence } from "framer-motion";

const Landing = lazy(() => import("../pages/Landing"));
const Branding = lazy(() => import("../pages/Branding"));
const NotFound = lazy(() => import("../pages/NotFound"));
const About = lazy(() => import("../pages/About"));
const ContactPage = lazy(() => import("../pages/ContactPage"));
const Features = lazy(() => import("../pages/Features"));
const ServiceAISolutions = lazy(() => import("../pages/ServiceAISolutions"));
const ServiceCustomDev = lazy(() => import("../pages/ServiceCustomDev"));
const ServiceAutomation = lazy(() => import("../pages/ServiceAutomation"));
const ServiceDataScience = lazy(() => import("../pages/ServiceDataScience"));
const CookiesPolicy = lazy(() => import("../pages/CookiesPolicy"));
const AboutPage = lazy(() => import("../pages/AboutPage"));
const CioSection = lazy(() => import("../pages/CioSection"));
// Temporarily hidden but keeping CioSection accessible
// const DirectorsBoard = lazy(() => import("../pages/DirectorsBoard"));
// ✅ Opcional: página unificada con hero + secciones (no afecta tus rutas existentes)
const ServicesPage = lazy(() => import("../pages/ServicesPage"));

import xotrikLogo from "/xotrik.png";

// --- UI: Splash + Loader ---
function SplashScreen() {
  return (
    <div className="fixed inset-0 z-[99999] flex flex-col items-center justify-center bg-[#0a1828]">
      <motion.img
        src={xotrikLogo}
        alt="Xotrik Logo"
        width={108}
        height={108}
        initial={{ scale: 0.7, opacity: 0, rotate: -18 }}
        animate={{ scale: 1, opacity: 1, rotate: 0 }}
        transition={{ duration: 1, type: "spring" }}
        className="mb-4 drop-shadow-xl rounded-full border-4 border-[#D4AF37] bg-white/10"
      />
      <motion.h1
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7, duration: 0.6 }}
        className="text-4xl font-black text-gold tracking-widest drop-shadow mb-2"
        style={{ letterSpacing: "0.19em" }}
      >
        XOTRIK
      </motion.h1>
      <motion.span
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.5 }}
        className="text-xl text-white/70 tracking-wide font-medium"
      >
        Innovación & Automación
      </motion.span>
    </div>
  );
}

const Loader = () => (
  <div className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#0a1828f4] backdrop-blur">
    <RingLoader color="#D4AF37" size={82} speedMultiplier={0.98} />
    <span className="mt-6 text-lg font-bold text-gold animate-pulse tracking-wide drop-shadow-sm">
      Loading Xotrik...
    </span>
  </div>
);

const pageMotion = {
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -18 },
  transition: { duration: 0.46, ease: [0.39, 0.575, 0.565, 1] }
};

// (Opcional) Scroll suave si usas anchors dentro de /services
function ScrollToHash() {
  const location = useLocation();
  useEffect(() => {
    const handleScroll = () => {
      let elementId = "";
      const teamPaths = ["/CEO", "/CTO", "/CFO"];
      if (teamPaths.includes(location.pathname)) {
        elementId = "our-team";
      } else if (location.hash) {
        elementId = location.hash.replace("#", "");
      }

      if (elementId) {
        const el = document.getElementById(elementId);
        if (el) {
          const yOffset = -80; // Ajustado para la altura del navbar
          const y = el.getBoundingClientRect().top + window.scrollY + yOffset;
          window.scrollTo({ top: y, behavior: "smooth" });
        }
      } else {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    }

    // Usamos un pequeño timeout para dar tiempo a que la página se renderice
    const timer = setTimeout(handleScroll, 100);

    return () => clearTimeout(timer);
  }, [location.pathname, location.hash]);
  return null;
}

export default function AppRoutes() {
  const location = useLocation();
  const [showSplash, setShowSplash] = useState(false);

  useEffect(() => {
    const splashShown = localStorage.getItem("xotrikSplashShown");
    if (!splashShown) {
      setShowSplash(true);
      setTimeout(() => {
        setShowSplash(false);
        localStorage.setItem("xotrikSplashShown", "1");
      }, 1600);
    }
  }, []);

  if (showSplash) return <SplashScreen />;

  return (
    <Suspense fallback={<Loader />}>
      <ScrollToHash />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Layout />}>
            <Route index element={<motion.div {...pageMotion}><Landing /></motion.div>} />
            <Route path="branding" element={<motion.div {...pageMotion}><Branding /></motion.div>} />
            <Route path="/about" element={<motion.div {...pageMotion}><AboutPage /></motion.div>} />
            {/* Temporarily hidden but keeping CIO section accessible */}
            {/* <Route path="/directors-board" element={<motion.div {...pageMotion}><DirectorsBoard /></motion.div>} /> */}
            <Route path="/CIO" element={<motion.div {...pageMotion}><CioSection /></motion.div>} />
            <Route path="/CEO" element={<motion.div {...pageMotion}><AboutPage /></motion.div>} />
            <Route path="/CTO" element={<motion.div {...pageMotion}><AboutPage /></motion.div>} />
            <Route path="/CFO" element={<motion.div {...pageMotion}><AboutPage /></motion.div>} />
            <Route
              path="/politica-cookies"
              element={
                <Suspense fallback={<div className="p-10 text-white">Cargando...</div>}>
                  <CookiesPolicy />
                </Suspense>
              }
            />

            <Route path="contact" element={<motion.div {...pageMotion}><ContactPage /></motion.div>} />
            <Route path="features" element={<motion.div {...pageMotion}><Features /></motion.div>} />

            {/* ✅ Mantengo tus rutas individuales exactamente igual */}
            <Route path="/services/aiSolutions" element={<motion.div {...pageMotion}><ServiceAISolutions /></motion.div>} />
            <Route path="/services/customDev" element={<motion.div {...pageMotion}><ServiceCustomDev /></motion.div>} />
            <Route path="/services/automation" element={<motion.div {...pageMotion}><ServiceAutomation /></motion.div>} />
            <Route path="/services/dataScience" element={<motion.div {...pageMotion}><ServiceDataScience /></motion.div>} />

            {/* ✅ (Opcional) Página unificada /services con hero + secciones */}
            <Route path="/services" element={<motion.div {...pageMotion}><ServicesPage /></motion.div>} />

            <Route path="*" element={<motion.div {...pageMotion}><NotFound /></motion.div>} />
          </Route>
        </Routes>
      </AnimatePresence>
    </Suspense>
  );
}
