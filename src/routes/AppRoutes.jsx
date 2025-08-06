// import React, { Suspense, lazy, useState, useEffect } from "react";
// import { Routes, Route, useLocation } from "react-router-dom";
// import Layout from "../components/Layout";
// import { RingLoader } from "react-spinners";
// import { motion, AnimatePresence } from "framer-motion";

// // Lazy imports de tus páginas...
// const Landing = lazy(() => import("../pages/Landing"));
// const Branding = lazy(() => import("../pages/Branding"));
// const NotFound = lazy(() => import("../pages/NotFound"));
// const About = lazy(() => import("../pages/About"));
// const Contact = lazy(() => import("../pages/Contact"));
// const Features = lazy(() => import("../pages/Features"));
// const ServiceAISolutions = lazy(() => import("../pages/ServiceAISolutions"));
// const ServiceCustomDev = lazy(() => import("../pages/ServiceCustomDev"));
// const ServiceAutomation = lazy(() => import("../pages/ServiceAutomation"));
// const ServiceDataScience = lazy(() => import("../pages/ServiceDataScience"));

// import xotrikLogo from "/xotrik.png"; // Cambia la ruta según tu estructura

// // 1. Splash Screen animado solo la primera vez
// function SplashScreen() {
//   return (
//     <div className="fixed inset-0 z-[99999] flex flex-col items-center justify-center bg-[#0a1828]">


      
//    <motion.img
//   src={xotrikLogo}
//   alt="Xotrik Logo"
//   width={108}
//   height={108}
//   initial={{ scale: 0.7, opacity: 0, rotate: -18 }}
//   animate={{ scale: 1, opacity: 1, rotate: 0 }}
//   transition={{ duration: 1, type: "spring" }}
//   className="mb-4 drop-shadow-xl rounded-full border-4 border-[#D4AF37] bg-white/10"
// />

//       <motion.h1
//         initial={{ opacity: 0, y: 16 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ delay: 0.7, duration: 0.6 }}
//         className="text-4xl font-black text-gold tracking-widest drop-shadow mb-2"
//         style={{ letterSpacing: "0.19em" }}
//       >
//         XOTRIK
//       </motion.h1>
//       <motion.span
//         initial={{ opacity: 0, y: 8 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ delay: 1, duration: 0.5 }}
//         className="text-xl text-white/70 tracking-wide font-medium"
//       >
//         Innovación & Automación
//       </motion.span>
//     </div>
//   );
// }

// // 2. Loader principal para lazy-loading
// const Loader = () => (
//   <div className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#0a1828f4] backdrop-blur">
//     <RingLoader color="#D4AF37" size={82} speedMultiplier={0.98} />
//     <span className="mt-6 text-lg font-bold text-gold animate-pulse tracking-wide drop-shadow-sm">Loading Xotrik...</span>
//   </div>
// );

// // 3. Animación de páginas
// const pageMotion = {
//   initial: { opacity: 0, y: 24 },
//   animate: { opacity: 1, y: 0 },
//   exit: { opacity: 0, y: -18 },
//   transition: { duration: 0.46, ease: [0.39, 0.575, 0.565, 1] }
// };

// export default function AppRoutes() {
//   const location = useLocation();
//   const [showSplash, setShowSplash] = useState(false);

//   useEffect(() => {
//     // Solo muestra splash si no existe en localStorage
//     const splashShown = localStorage.getItem("xotrikSplashShown");
//     if (!splashShown) {
//       setShowSplash(true);
//       setTimeout(() => {
//         setShowSplash(false);
//         localStorage.setItem("xotrikSplashShown", "1");
//       }, 1600); 
//     }
//   }, []);

//   if (showSplash) return <SplashScreen />;

//   return (
//     <Suspense fallback={<Loader />}>
//       <AnimatePresence mode="wait">
//         <Routes location={location} key={location.pathname}>
//           <Route path="/" element={<Layout />}>
//             <Route index element={<motion.div {...pageMotion}><Landing /></motion.div>} />
//             <Route path="branding" element={<motion.div {...pageMotion}><Branding /></motion.div>} />
//             <Route path="about" element={<motion.div {...pageMotion}><About /></motion.div>} />
//             <Route path="contact" element={<motion.div {...pageMotion}><Contact /></motion.div>} />
//             <Route path="features" element={<motion.div {...pageMotion}><Features /></motion.div>} />
//             <Route path="/services/aiSolutions" element={<motion.div {...pageMotion}><ServiceAISolutions /></motion.div>} />
//             <Route path="/services/customDev" element={<motion.div {...pageMotion}><ServiceCustomDev /></motion.div>} />
//             <Route path="/services/automation" element={<motion.div {...pageMotion}><ServiceAutomation /></motion.div>} />
//             <Route path="/services/dataScience" element={<motion.div {...pageMotion}><ServiceDataScience /></motion.div>} />
//             <Route path="*" element={<motion.div {...pageMotion}><NotFound /></motion.div>} />
//           </Route>
//         </Routes>
//       </AnimatePresence>
//     </Suspense>
//   );
// }

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
const ContactPage = lazy(() => import("../pages/ContactPage")); // Aquí importamos ContactPage
const Features = lazy(() => import("../pages/Features"));
const ServiceAISolutions = lazy(() => import("../pages/ServiceAISolutions"));
const ServiceCustomDev = lazy(() => import("../pages/ServiceCustomDev"));
const ServiceAutomation = lazy(() => import("../pages/ServiceAutomation"));
const ServiceDataScience = lazy(() => import("../pages/ServiceDataScience"));

import xotrikLogo from "/xotrik.png"; 

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
    <span className="mt-6 text-lg font-bold text-gold animate-pulse tracking-wide drop-shadow-sm">Loading Xotrik...</span>
  </div>
);

const pageMotion = {
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -18 },
  transition: { duration: 0.46, ease: [0.39, 0.575, 0.565, 1] }
};

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
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Layout />}>
            <Route index element={<motion.div {...pageMotion}><Landing /></motion.div>} />
            <Route path="branding" element={<motion.div {...pageMotion}><Branding /></motion.div>} />
            <Route path="about" element={<motion.div {...pageMotion}><About /></motion.div>} />
            {/* Aquí usamos ContactPage que tiene Hero + Contact */}
            <Route path="contact" element={<motion.div {...pageMotion}><ContactPage /></motion.div>} />
            <Route path="features" element={<motion.div {...pageMotion}><Features /></motion.div>} />
            <Route path="/services/aiSolutions" element={<motion.div {...pageMotion}><ServiceAISolutions /></motion.div>} />
            <Route path="/services/customDev" element={<motion.div {...pageMotion}><ServiceCustomDev /></motion.div>} />
            <Route path="/services/automation" element={<motion.div {...pageMotion}><ServiceAutomation /></motion.div>} />
            <Route path="/services/dataScience" element={<motion.div {...pageMotion}><ServiceDataScience /></motion.div>} />
            <Route path="*" element={<motion.div {...pageMotion}><NotFound /></motion.div>} />
          </Route>
        </Routes>
      </AnimatePresence>
    </Suspense>
  );
}
