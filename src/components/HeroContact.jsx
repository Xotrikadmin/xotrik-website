// import React, { useEffect, useRef, useState } from "react";
// import { motion } from "framer-motion";
// import { ChevronDown, ChevronUp } from "lucide-react";
// import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";
// import Particles from "react-tsparticles";
// import { loadFull } from "tsparticles";
// import { useTranslation } from "react-i18next";

// export default function HeroContact() {
//   const { t } = useTranslation();
//   const sectionRef = useRef(null);
//   const [isScrolled, setIsScrolled] = useState(false);
//   const [heroHeight, setHeroHeight] = useState("100vh");

//   // Detectar altura dinámica del navbar
//   useEffect(() => {
//     const adjustHeight = () => {
//       const navbar = document.querySelector("header") || document.querySelector("nav");
//       const navbarHeight = navbar?.offsetHeight || 0;
//       const newHeight = `calc(100vh - ${navbarHeight}px)`;
//       setHeroHeight(newHeight);
//     };

//     adjustHeight();
//     window.addEventListener("resize", adjustHeight);
//     return () => window.removeEventListener("resize", adjustHeight);
//   }, []);

//   // Detectar scroll
//   useEffect(() => {
//     const onScroll = () => setIsScrolled(window.scrollY > 50);
//     window.addEventListener("scroll", onScroll);
//     return () => window.removeEventListener("scroll", onScroll);
//   }, []);

//   // Sonido inicial (opcional)
//   useEffect(() => {
//     const audio = new Audio("/ai-startup.mp3");
//     audio.volume = 0.3;
//     audio.play().catch(() => {});
//   }, []);

//   // Parallax con mouse
//   useEffect(() => {
//     const section = sectionRef.current;
//     const handleMouseMove = (e) => {
//       const x = (e.clientX / window.innerWidth - 0.5) * 10;
//       const y = (e.clientY / window.innerHeight - 0.5) * 10;
//       section.style.backgroundPosition = `${50 + x}% ${10 + y}%`;
//     };
//     section.addEventListener("mousemove", handleMouseMove);
//     return () => section.removeEventListener("mousemove", handleMouseMove);
//   }, []);

//   return (
//     <section
//       ref={sectionRef}
//       id="hero-contact"
//       className="relative w-full flex items-center justify-center overflow-hidden"
//       style={{
//         height: heroHeight,
//         backgroundImage: "url('/xotrik-contact-bg.jpg')",
//         backgroundSize: "cover",
//         backgroundRepeat: "no-repeat",
//         backgroundPosition: "center top",
//         transition: "background-position 0.2s ease",
//       }}
//     >
//       {/* Partículas */}
//       <Particles
//         id="tsparticles"
//         init={loadFull}
//         options={{
//           fullScreen: { enable: false },
//           background: { color: "transparent" },
//           fpsLimit: 60,
//           interactivity: {
//             events: { onHover: { enable: true, mode: "grab" }, resize: true },
//             modes: { grab: { distance: 200, links: { opacity: 0.5 } } },
//           },
//           particles: {
//             color: { value: "#00FFCC" },
//             links: {
//               color: "#00FFCC",
//               distance: 150,
//               enable: true,
//               opacity: 0.3,
//               width: 1,
//             },
//             move: { enable: true, speed: 1.2, outModes: { default: "bounce" } },
//             number: { density: { enable: true, area: 800 }, value: 60 },
//             opacity: { value: 0.3 },
//             shape: { type: "circle" },
//             size: { value: { min: 1, max: 3 } },
//           },
//         }}
//         className="absolute inset-0 z-0"
//       />

//       {/* Overlay */}
//       <motion.div
//         className="absolute inset-0 bg-gradient-to-b from-[#0a1828cc] via-[#0a1828ee] to-[#000000ff]"
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ duration: 1 }}
//       />

//       {/* Contenido principal */}
//       <motion.div
//         className="relative z-10 text-center px-6 sm:px-10 max-w-5xl pt-6"
//         initial={{ opacity: 0, y: 60 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 1.1, ease: "easeOut" }}
//       >
//         <motion.h1
//           className="text-[2rem] sm:text-4xl md:text-5xl font-extrabold leading-tight tracking-tight mb-6 bg-clip-text text-transparent"
//           style={{
//             backgroundImage: "linear-gradient(90deg, #FFD700, #FF8C00)",
//             textShadow: "0 4px 20px rgba(255,215,0,0.3)",
//           }}
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: 0.2 }}
//         >
//           {t("herocontact.title")}
//         </motion.h1>

//         <motion.p
//           className="text-base sm:text-2xl md:text-3xl font-light leading-snug text-white max-w-3xl mx-auto drop-shadow-lg"
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: 0.5 }}
//         >
//           {t("herocontact.subtitle")}
//         </motion.p>
//       </motion.div>

//       {/* Flecha scroll dinámica */}
//       <motion.div
//         className="absolute bottom-10 z-10 text-cyan-300"
//         initial={{ opacity: 0, y: 10 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ delay: 1.2 }}
//       >
//         {isScrolled ? (
//           <div
//             className="cursor-pointer transition-transform hover:scale-110 glow-plasma"
//             onClick={() => scroll.scrollToTop()}
//             aria-label={t("herocontact.backToTop")}
//           >
//             <motion.div
//               animate={{ y: [0, -8, 0] }}
//               transition={{ repeat: Infinity, duration: 2 }}
//             >
//               <ChevronUp size={40} strokeWidth={2.5} />
//             </motion.div>
//           </div>
//         ) : (
//           <ScrollLink
//             to="contact-form"
//             smooth={true}
//             duration={600}
//             offset={-80}
//             className="cursor-pointer transition-transform hover:scale-110 glow-plasma"
//             aria-label={t("herocontact.scrollDown")}
//           >
//             <motion.div
//               animate={{ y: [0, -10, 0] }}
//               transition={{ repeat: Infinity, duration: 2 }}
//             >
//               <ChevronDown size={40} strokeWidth={2.5} />
//             </motion.div>
//           </ScrollLink>
//         )}
//       </motion.div>
//     </section>
//   );
// }
import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown, ChevronUp } from "lucide-react";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { useTranslation } from "react-i18next";

export default function HeroContact() {
  const { t } = useTranslation();
  const sectionRef = useRef(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [heroHeight, setHeroHeight] = useState("100vh");

  useEffect(() => {
    const adjustHeight = () => {
      const navbar = document.querySelector("header") || document.querySelector("nav");
      const navbarHeight = navbar?.offsetHeight || 0;
      const newHeight = `calc(100vh - ${navbarHeight}px)`;
      setHeroHeight(newHeight);
    };

    adjustHeight();
    window.addEventListener("resize", adjustHeight);
    return () => window.removeEventListener("resize", adjustHeight);
  }, []);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const audio = new Audio("/ai-startup.mp3");
    audio.volume = 0.3;
    audio.play().catch(() => {});
  }, []);

  useEffect(() => {
    const section = sectionRef.current;
    const handleMouseMove = (e) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 10;
      const y = (e.clientY / window.innerHeight - 0.5) * 10;
      section.style.backgroundPosition = `${50 + x}% ${10 + y}%`;
    };
    section.addEventListener("mousemove", handleMouseMove);
    return () => section.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section
      ref={sectionRef}
      id="hero-contact"
      className="relative w-full flex items-center justify-center overflow-hidden"
      style={{
        height: heroHeight,
        backgroundImage: "url('/xotrik-contact-bg.jpg')",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center top",
        transition: "background-position 0.2s ease",
      }}
    >
      {/* Partículas */}
      <Particles
        id="tsparticles"
        init={loadFull}
        options={{
          fullScreen: { enable: false },
          background: { color: "transparent" },
          fpsLimit: 60,
          interactivity: {
            events: { onHover: { enable: true, mode: "grab" }, resize: true },
            modes: { grab: { distance: 200, links: { opacity: 0.5 } } },
          },
          particles: {
            color: { value: "#00FFCC" },
            links: {
              color: "#00FFCC",
              distance: 150,
              enable: true,
              opacity: 0.3,
              width: 1,
            },
            move: { enable: true, speed: 1.2, outModes: { default: "bounce" } },
            number: { density: { enable: true, area: 800 }, value: 60 },
            opacity: { value: 0.3 },
            shape: { type: "circle" },
            size: { value: { min: 1, max: 3 } },
          },
        }}
        className="absolute inset-0 z-0"
      />

      {/* Overlay */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-b from-[#0a1828cc] via-[#0a1828ee] to-[#000000ff]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      />

      {/* Contenido principal */}
      <motion.div
        className="relative z-10 text-center px-6 sm:px-10 max-w-5xl pt-6"
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.1, ease: "easeOut" }}
      >
        <motion.h1
            className="text-[2.5rem] sm:text-5xl md:text-6xl font-extrabold leading-tight mb-6"
  style={{
    color: "#D4AF37",                  // Color sólido dorado Xotrik
    textShadow: "0 0 6px rgba(0,0,0,0.6)",
  }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          {t("herocontact.title")}
        </motion.h1>

        <motion.p
          className="text-base sm:text-2xl md:text-3xl font-light leading-snug max-w-3xl mx-auto drop-shadow-lg"
          style={{ color: "#178582" }}

          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          {t("herocontact.subtitle")}
        </motion.p>
      </motion.div>

      {/* Flecha scroll dinámica */}
      <motion.div
        className="absolute bottom-10 z-10 text-cyan-300"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2 }}
      >
        {isScrolled ? (
          <div
            className="cursor-pointer transition-transform hover:scale-110 glow-plasma"
            onClick={() => scroll.scrollToTop()}
            aria-label={t("herocontact.backToTop")}
          >
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ repeat: Infinity, duration: 2 }}
            >
              <ChevronUp size={40} strokeWidth={2.5} />
            </motion.div>
          </div>
        ) : (
          <ScrollLink
            to="contact-form"
            smooth={true}
            duration={600}
            offset={-80}
            className="cursor-pointer transition-transform hover:scale-110 glow-plasma"
            aria-label={t("herocontact.scrollDown")}
          >
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 2 }}
            >
              <ChevronDown size={40} strokeWidth={2.5} />
            </motion.div>
          </ScrollLink>
        )}
      </motion.div>
    </section>
  );
}
