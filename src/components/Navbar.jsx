
// // import React, { useState, useEffect } from "react";
// // import { Link, NavLink, useLocation } from "react-router-dom";
// // import { IoMdClose } from "react-icons/io";
// // import { FaInstagram, FaFacebookF, FaXTwitter } from "react-icons/fa6";
// // import { motion, AnimatePresence } from "framer-motion";
// // import clsx from "clsx";
// // import { useTranslation } from "react-i18next";

// // import useScrollDirection from "../hooks/useScrollDirection";
// // import ScrollProgressBar from "./ScrollProgressBar";
// // import LanguageDropdown from "./LanguageDropdown";

// // const NAV_LINKS = [
// //   { to: "/", key: "navbar.home" },
// //   { to: "/about", key: "navbar.about" },
// //   { to: "/services", key: "navbar.services" },
// // ];

// // const SOCIALS = [
// //   { href: "#", icon: FaInstagram, label: "Instagram" },
// //   { href: "#", icon: FaFacebookF, label: "Facebook" },
// //   { href: "#", icon: FaXTwitter, label: "X" },
// // ];

// // export default function Navbar() {
// //   const { t } = useTranslation();
// //   const location = useLocation();

// //   const [open, setOpen] = useState(false);
// //   const scrollDirection = useScrollDirection();
// //   const [scrolled, setScrolled] = useState(false);

// //   /* ———————————————————————————————————————
// //      Effects
// //   ————————————————————————————————————————*/
// //   /* Cerrar menú al cambiar de ruta */
// //   useEffect(() => setOpen(false), [location.pathname]);

// //   /* Cambiar fondo cuando se hace scroll */
// //   useEffect(() => {
// //     const handler = () => setScrolled(window.scrollY > 16);
// //     window.addEventListener("scroll", handler, { passive: true });
// //     return () => window.removeEventListener("scroll", handler);
// //   }, []);

// //   /* Evitar scroll del body cuando el menú móvil está abierto */
// //   useEffect(() => {
// //     document.body.style.overflow = open ? "hidden" : "";
// //     return () => (document.body.style.overflow = "");
// //   }, [open]);

// //   const navHidden = scrollDirection === "down" && window.scrollY > 100;

// //   /* ———————————————————————————————————————
// //      Animations helpers
// //   ————————————————————————————————————————*/
// //   const slidePanel = {
// //     initial: { x: "-100vw", opacity: 0 },
// //     animate: { x: 0, opacity: 1 },
// //     exit: { x: "-100vw", opacity: 0 },
// //     transition: { type: "spring", stiffness: 70, damping: 19 },
// //   };

// //   return (
// //     <>
// //       <ScrollProgressBar />

// //       <nav
// //         aria-label="Main Navigation"
// //         className={clsx(
// //           "fixed w-full z-50 transition-all duration-500 select-none",
// //           navHidden ? "-translate-y-28 opacity-0" : "translate-y-0 opacity-100"
// //         )}
// //       >
// //         {/* ═══════════════ DESKTOP NAV ═══════════════ */}
// //         <header
// //           className={clsx(
// //             "hidden md:flex items-center justify-between px-7 py-4 bg-white/10 dark:bg-[#0f172a]/80 backdrop-blur-xl border-b border-white/10 shadow-lg transition-all duration-500",
// //             scrolled &&
// //               "backdrop-blur-2xl bg-white/20 dark:bg-[#0f172a]/90 border-b-2"
// //           )}
// //         >
// //           {/* Logo */}
// //           <Link to="/" className="flex items-center gap-3 group">
// //             <motion.img
// //               src="/xotrik.png"
// //               alt="Xotrik"
// //               className="w-11 h-11 rounded-xl shadow-lg group-hover:scale-110 group-hover:shadow-[#D4AF37]/60 transition-all duration-300"
// //               whileTap={{ scale: 0.96, rotate: -8 }}
// //             />
// //             <span
// //               className="text-2xl font-black tracking-tight bg-gradient-to-r from-[#D4AF37] via-yellow-200 to-[#D4AF37] bg-clip-text text-transparent animate-gradient-x"
// //             >
// //               XOTRIK
// //             </span>
// //           </Link>

// //           {/* Links */}
// //           <ul className="flex items-center gap-2 relative">
// //             {NAV_LINKS.map(({ to, key }) => (
// //               <li key={to}>
// //                 <NavLink
// //                   to={to}
// //                   className={({ isActive }) =>
// //                     clsx(
// //                       "px-4 py-2 rounded-md text-base font-semibold transition-all group relative tracking-wide",
// //                       isActive
// //                         ? "text-[#D4AF37] font-extrabold drop-shadow-[0_2px_16px_#D4AF3755] after:scale-x-100"
// //                         : "text-white dark:text-white hover:text-[#D4AF37] after:scale-x-0"
// //                     )
// //                   }
// //                 >
// //                   {t(key)}
// //                   <span className="absolute left-1/2 bottom-0.5 w-6 h-1 bg-[#D4AF37] rounded-full opacity-90 scale-x-0 group-hover:scale-x-100 transition-transform origin-center duration-300"></span>
// //                 </NavLink>
// //               </li>
// //             ))}
// //           </ul>

// //           {/* Right controls */}
// //           <div className="flex items-center gap-3">
// //             {SOCIALS.map((s) => (
// //               <motion.a
// //                 key={s.href}
// //                 href={s.href}
// //                 target="_blank"
// //                 rel="noopener noreferrer"
// //                 aria-label={s.label}
// //                 whileHover={{
// //                   scale: 1.17,
// //                   rotate: 8,
// //                   boxShadow: "0 0 16px #D4AF37AA",
// //                 }}
// //                 className="glass px-2 py-2 rounded-full text-[#D4AF37] shadow-md hover:shadow-[#D4AF3760] transition"
// //               >
// //                 <s.icon size={22} />
// //               </motion.a>
// //             ))}

// //             {/* Selector de idioma */}
// //             <LanguageDropdown />

// //             {/* CTA */}
// //             <Link
// //               to="/contact"
// //               className="ml-4 px-6 py-2 rounded-xl bg-[#D4AF37] text-[#121212] font-bold shadow-[0_2px_12px_2px_#D4AF3740] border border-[#ffe9b5] relative transition-all active:scale-95 hover:shadow-[0_0_24px_5px_#D4AF3740] hover:bg-gradient-to-r hover:from-[#ffe9b5] hover:to-[#D4AF37] focus-visible:ring-2 focus-visible:ring-[#D4AF37]/80 focus-visible:outline-none"
// //             >
// //               {t("navbar.cta")}
// //             </Link>
// //           </div>
// //         </header>

// //         {/* ═══════════════ MOBILE TOP BAR ═══════════════ */}
// //         <header className="md:hidden flex items-center justify-between px-5 py-3 shadow-xl bg-[#12181Fdd] backdrop-blur-xl transition-all duration-500">
// //           <Link to="/" className="flex items-center gap-2 font-extrabold text-xl">
// //             <img src="/xotrik.png" alt="Xotrik" className="w-8 h-8 rounded shadow" />
// //             <span className="font-black">Xotrik</span>
// //           </Link>

// //           <button
// //             onClick={() => setOpen((p) => !p)}
// //             aria-label={open ? "Close menu" : "Open menu"}
// //             className="group relative w-10 h-10 flex flex-col justify-center items-center focus:outline-none"
// //           >
// //             {open ? (
// //               <IoMdClose size={30} className="text-white transition" />
// //             ) : (
// //               <span className="flex flex-col gap-1.5 items-center justify-center w-full h-full">
// //                 <span className="block w-8 h-0.5 bg-white rounded transition-all group-hover:bg-[#D4AF37]" />
// //                 <span className="block w-6 h-0.5 bg-white rounded transition-all group-hover:bg-[#D4AF37]" />
// //                 <span className="block w-8 h-0.5 bg-white rounded transition-all group-hover:bg-[#D4AF37]" />
// //               </span>
// //             )}
// //           </button>
// //         </header>

// //         {/* ═══════════════ MOBILE SLIDE‑OUT MENU ═══════════════ */}
// //         <AnimatePresence>
// //           {open && (
// //             <>
// //               {/* Panel */}
// //               <motion.div
// //                 {...slidePanel}
// //                 className="
// //                   fixed top-0 left-0 z-40 w-11/12 max-w-[22rem] h-full
// //                   bg-[#161c22ee] border-r border-[#D4AF37]/30
// //                   shadow-2xl backdrop-blur-[48px]
// //                   flex flex-col p-7 pb-12 gap-2
// //                 "
// //                 tabIndex={0}
// //                 aria-modal="true"
// //                 role="dialog"
// //               >
// //                 {/* header inside panel */}
// //                 <div className="flex items-center justify-between mb-8">
// //                   <Link
// //                     to="/"
// //                     className="flex items-center gap-2 font-black text-xl"
// //                     onClick={() => setOpen(false)}
// //                   >
// //                     <img src="/xotrik.png" alt="Xotrik" className="w-8 h-8 rounded shadow" />
// //                     <span>Xotrik</span>
// //                   </Link>

// //                   <button
// //                     aria-label="Close"
// //                     className="p-2 rounded-full hover:bg-[#D4AF37]/10"
// //                     onClick={() => setOpen(false)}
// //                   >
// //                     <IoMdClose size={28} className="text-white" />
// //                   </button>
// //                 </div>

// //                 {/* nav links */}
// //                 <ul className="flex flex-col gap-1.5">
// //                   {NAV_LINKS.map(({ to, key }) => (
// //                     <li key={to}>
// //                       <NavLink
// //                         to={to}
// //                         onClick={() => setOpen(false)}
// //                         className={({ isActive }) =>
// //                           clsx(
// //                             "block px-3 py-3 text-lg font-bold rounded-xl transition group tracking-wide",
// //                             isActive
// //                               ? "text-[#D4AF37] bg-white/5"
// //                               : "text-white hover:text-[#D4AF37] hover:bg-white/5"
// //                           )
// //                         }
// //                       >
// //                         {t(key)}
// //                       </NavLink>
// //                     </li>
// //                   ))}
// //                 </ul>

// //                 {/* social icons + language */}
// //                 <div className="flex flex-wrap gap-3 mt-10 mb-8">
// //                   {SOCIALS.map((s) => (
// //                     <motion.a
// //                       key={s.href}
// //                       href={s.href}
// //                       target="_blank"
// //                       rel="noopener noreferrer"
// //                       aria-label={s.label}
// //                       whileHover={{ scale: 1.15, rotate: 6 }}
// //                       className="px-3 py-3 rounded-full text-[#D4AF37] bg-white/10 shadow-md"
// //                     >
// //                       <s.icon size={22} />
// //                     </motion.a>
// //                   ))}

// //                   {/* Selector de idioma en móvil */}
// //                   <LanguageDropdown />
// //                 </div>

// //                 {/* CTA */}
// //                 <Link
// //                   to="/contact"
// //                   onClick={() => setOpen(false)}
// //                   className="mt-auto w-full px-5 py-3 rounded-xl bg-[#D4AF37] text-[#0A1828] font-black shadow-lg text-center hover:scale-[1.04] hover:bg-gradient-to-l hover:from-[#ffe9b5] hover:to-[#D4AF37] transition"
// //                 >
// //                   {t("common.contactUs")}
// //                 </Link>
// //               </motion.div>

// //               {/* Overlay */}
// //               <motion.div
// //                 className="fixed inset-0 z-30 bg-black/60 backdrop-blur-[2px]"
// //                 initial={{ opacity: 0 }}
// //                 animate={{ opacity: 1 }}
// //                 exit={{ opacity: 0 }}
// //                 onClick={() => setOpen(false)}
// //                 aria-label="Close menu overlay"
// //               />
// //             </>
// //           )}
// //         </AnimatePresence>
// //       </nav>
// //     </>
// //   );
// // }
// import React, { useState, useEffect } from "react";
// import { Link, NavLink, useLocation } from "react-router-dom";
// import { IoMdClose } from "react-icons/io";
// import { FaInstagram, FaFacebookF, FaXTwitter } from "react-icons/fa6";
// import { motion, AnimatePresence } from "framer-motion";
// import clsx from "clsx";
// import { useTranslation } from "react-i18next";

// import useScrollDirection from "../hooks/useScrollDirection";
// import ScrollProgressBar from "./ScrollProgressBar";
// import LanguageDropdown from "./LanguageDropdown";

// const NAV_LINKS = [
//   { to: "/", key: "navbar.home" },
//   { to: "/about", key: "navbar.about" },
//   { to: "/services", key: "navbar.services" },
// ];

// const SOCIALS = [
//   { href: "#", icon: FaInstagram, label: "Instagram" },
//   { href: "#", icon: FaFacebookF, label: "Facebook" },
//   { href: "#", icon: FaXTwitter, label: "X" },
// ];

// export default function Navbar() {
//   const { t } = useTranslation();
//   const location = useLocation();

//   const [open, setOpen] = useState(false);
//   const scrollDirection = useScrollDirection();
//   const [scrolled, setScrolled] = useState(false);

//   useEffect(() => setOpen(false), [location.pathname]);

//   useEffect(() => {
//     const handler = () => setScrolled(window.scrollY > 16);
//     window.addEventListener("scroll", handler, { passive: true });
//     return () => window.removeEventListener("scroll", handler);
//   }, []);

//   useEffect(() => {
//     document.body.style.overflow = open ? "hidden" : "";
//     return () => (document.body.style.overflow = "");
//   }, [open]);

//   const navHidden = scrollDirection === "down" && window.scrollY > 100;

//   const slidePanel = {
//     initial: { x: "-100vw", opacity: 0 },
//     animate: { x: 0, opacity: 1 },
//     exit: { x: "-100vw", opacity: 0 },
//     transition: { type: "spring", stiffness: 70, damping: 19 },
//   };

//   return (
//     <>
//       <ScrollProgressBar />

//       <nav
//         aria-label="Main Navigation"
//         className={clsx(
//           "fixed w-full z-50 transition-all duration-500 select-none",
//           navHidden ? "-translate-y-28 opacity-0" : "translate-y-0 opacity-100"
//         )}
//       >
//         {/* ═══════════════ DESKTOP NAV ═══════════════ */}
//         <header
//           className={clsx(
//             "hidden md:flex items-center justify-between px-7 py-4 bg-white/10 dark:bg-[#0f172a]/80 backdrop-blur-xl border-b border-white/10 shadow-lg transition-all duration-500",
//             scrolled && "backdrop-blur-2xl bg-white/20 dark:bg-[#0f172a]/90 border-b-2"
//           )}
//         >
//           <Link to="/" className="flex items-center gap-3 group">
//             <motion.img
//               src="/xotrik.png"
//               alt="Xotrik"
//               className="w-11 h-11 rounded-xl shadow-lg group-hover:scale-110 group-hover:shadow-[#D4AF37]/60 transition-all duration-300"
//               whileTap={{ scale: 0.96, rotate: -8 }}
//             />
//             <span className="text-2xl font-black tracking-tight bg-gradient-to-r from-[#D4AF37] via-yellow-200 to-[#D4AF37] bg-clip-text text-transparent animate-gradient-x">
//               XOTRIK
//             </span>
//           </Link>

//           {/* Links con subrayado dorado */}
//           <ul className="flex items-center gap-2 relative">
//             {NAV_LINKS.map(({ to, key }) => (
//               <li key={to}>
//                 <NavLink
//                   to={to}
//                   className={({ isActive }) =>
//                     clsx(
//                       "px-4 py-2 rounded-md text-base font-semibold transition-all group relative tracking-wide",
//                       isActive
//                         ? "text-[#D4AF37] font-extrabold drop-shadow-[0_2px_16px_#D4AF3755] after:scale-x-100"
//                         : "text-white dark:text-white hover:text-[#D4AF37] after:scale-x-0"
//                     )
//                   }
//                 >
//                   {t(key)}
//                   <span className="absolute left-1/2 bottom-0.5 w-6 h-1 bg-[#D4AF37] rounded-full opacity-90 scale-x-0 group-hover:scale-x-100 transition-transform origin-center duration-300"></span>
//                 </NavLink>
//               </li>
//             ))}
//           </ul>

//           <div className="flex items-center gap-3">
//             {SOCIALS.map((s) => (
//               <motion.a
//                 key={s.href}
//                 href={s.href}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 aria-label={s.label}
//                 whileHover={{
//                   scale: 1.17,
//                   rotate: 8,
//                   boxShadow: "0 0 16px #D4AF37AA",
//                 }}
//                 className="glass px-2 py-2 rounded-full text-[#D4AF37] shadow-md hover:shadow-[#D4AF3760] transition"
//               >
//                 <s.icon size={22} />
//               </motion.a>
//             ))}

//             <LanguageDropdown />

//             <Link
//               to="/contact"
//               className="ml-4 px-6 py-2 rounded-xl bg-[#D4AF37] text-[#121212] font-bold shadow-[0_2px_12px_2px_#D4AF3740] border border-[#ffe9b5] relative transition-all active:scale-95 hover:shadow-[0_0_24px_5px_#D4AF3740] hover:bg-gradient-to-r hover:from-[#ffe9b5] hover:to-[#D4AF37] focus-visible:ring-2 focus-visible:ring-[#D4AF37]/80 focus-visible:outline-none"
//             >
//               {t("navbar.cta")}
//             </Link>
//           </div>
//         </header>

//         {/* ═══════════════ MOBILE TOP BAR ═══════════════ */}
//         <header className="md:hidden flex items-center justify-between px-5 py-3 shadow-xl bg-[#12181Fdd] backdrop-blur-xl transition-all duration-500">
//           <Link to="/" className="flex items-center gap-2 font-extrabold text-xl">
//             <img src="/xotrik.png" alt="Xotrik" className="w-8 h-8 rounded shadow" />
//             <span className="text-[#D4AF37] font-black">Xotrik</span>
//           </Link>

//           <button
//             onClick={() => setOpen((p) => !p)}
//             aria-label={open ? "Close menu" : "Open menu"}
//             className="group relative w-10 h-10 flex flex-col justify-center items-center focus:outline-none"
//           >
//             {open ? (
//               <IoMdClose size={30} className="text-white transition" />
//             ) : (
//               <span className="flex flex-col gap-1.5 items-center justify-center w-full h-full">
//                 <span className="block w-8 h-0.5 bg-white rounded transition-all group-hover:bg-[#D4AF37]" />
//                 <span className="block w-6 h-0.5 bg-white rounded transition-all group-hover:bg-[#D4AF37]" />
//                 <span className="block w-8 h-0.5 bg-white rounded transition-all group-hover:bg-[#D4AF37]" />
//               </span>
//             )}
//           </button>
//         </header>

//         {/* ═══════════════ MOBILE SLIDE‑OUT MENU ═══════════════ */}
//         <AnimatePresence>
//           {open && (
//             <>
//               <motion.div
//                 {...slidePanel}
//                 className="fixed top-0 left-0 z-40 w-11/12 max-w-[22rem] h-full bg-[#161c22ee] border-r border-[#D4AF37]/30 shadow-2xl backdrop-blur-[48px] flex flex-col p-7 pb-12 gap-2"
//                 tabIndex={0}
//                 aria-modal="true"
//                 role="dialog"
//               >
//                 <div className="flex items-center justify-between mb-8">
//                   <Link
//                     to="/"
//                     className="flex items-center gap-2 font-black text-xl"
//                     onClick={() => setOpen(false)}
//                   >
//                     <img src="/xotrik.png" alt="Xotrik" className="w-8 h-8 rounded shadow" />
//                     <span className="text-[#D4AF37]">Xotrik</span>
//                   </Link>

//                   <button
//                     aria-label="Close"
//                     className="p-2 rounded-full hover:bg-[#D4AF37]/10"
//                     onClick={() => setOpen(false)}
//                   >
//                     <IoMdClose size={28} className="text-white" />
//                   </button>
//                 </div>

//                 <ul className="flex flex-col gap-1.5">
//                   {NAV_LINKS.map(({ to, key }) => (
//                     <li key={to}>
//                       <NavLink
//                         to={to}
//                         onClick={() => setOpen(false)}
//                         className={({ isActive }) =>
//                           clsx(
//                             "block px-3 py-3 text-lg font-bold rounded-xl transition-all group tracking-wide relative",
//                             isActive
//                               ? "text-[#D4AF37] bg-white/5 after:scale-x-100"
//                               : "text-white hover:text-[#D4AF37] hover:bg-white/5 after:scale-x-0"
//                           )
//                         }
//                       >
//                         {t(key)}
//                         <span className="absolute left-5 bottom-2 h-0.5 w-8 bg-[#D4AF37] rounded-full opacity-90 transition-transform duration-300 origin-left scale-x-0 group-hover:scale-x-100" />
//                       </NavLink>
//                     </li>
//                   ))}
//                 </ul>

//                 <div className="flex flex-wrap gap-3 mt-10 mb-8">
//                   {SOCIALS.map((s) => (
//                     <motion.a
//                       key={s.href}
//                       href={s.href}
//                       target="_blank"
//                       rel="noopener noreferrer"
//                       aria-label={s.label}
//                       whileHover={{ scale: 1.15, rotate: 6 }}
//                       className="px-3 py-3 rounded-full text-[#D4AF37] bg-white/10 shadow-md"
//                     >
//                       <s.icon size={22} />
//                     </motion.a>
//                   ))}
//                   <LanguageDropdown />
//                 </div>

//                 <Link
//                   to="/contact"
//                   onClick={() => setOpen(false)}
//                   className="mt-auto w-full px-5 py-3 rounded-xl bg-[#D4AF37] text-[#0A1828] font-black shadow-lg text-center hover:scale-[1.04] hover:bg-gradient-to-l hover:from-[#ffe9b5] hover:to-[#D4AF37] transition"
//                 >
//                   {t("common.contactUs")}
//                 </Link>
//               </motion.div>

//               <motion.div
//                 className="fixed inset-0 z-30 bg-black/60 backdrop-blur-[2px]"
//                 initial={{ opacity: 0 }}
//                 animate={{ opacity: 1 }}
//                 exit={{ opacity: 0 }}
//                 onClick={() => setOpen(false)}
//                 aria-label="Close menu overlay"
//               />
//             </>
//           )}
//         </AnimatePresence>
//       </nav>
//     </>
//   );
// }
// Archivo: Navbar.jsx
import React, { useState, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import clsx from "clsx";
import { useTranslation } from "react-i18next";

import useScrollDirection from "../hooks/useScrollDirection";
import ScrollProgressBar from "./ScrollProgressBar";
import RightControls from "./RightControls";
import MobileMenu from "./MobileMenu";
import MobileMenuToggle from "./MobileMenuToggle";

const NAV_LINKS = [
  { to: "/", key: "navbar.home" },
  { to: "/about", key: "navbar.about" },
  { to: "/services", key: "navbar.services" },
  { to: "/contact", key: "navbar.cta" },
];

export default function Navbar() {
  const { t } = useTranslation();
  const location = useLocation();

  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const scrollDirection = useScrollDirection();

  useEffect(() => setOpen(false), [location.pathname]);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 16);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => (document.body.style.overflow = "");
  }, [open]);

  const navHidden = scrollDirection === "down" && window.scrollY > 100;

  return (
    <>
      <ScrollProgressBar />

      <nav
        aria-label="Main Navigation"
        className={clsx(
          "fixed w-full z-50 transition-all duration-500 select-none",
          navHidden ? "-translate-y-28 opacity-0" : "translate-y-0 opacity-100"
        )}
      >
        {/* Desktop navbar */}
        <header
          className={clsx(
            "hidden md:flex items-center justify-between px-7 py-4 bg-[#0d1b29] border-b border-white/10 shadow-lg transition-all duration-500",
            scrolled && "bg-[#0d1b29]/90 backdrop-blur"
          )}
        >
          {/* Logo + texto Xotrik con gradiente */}
          <Link to="/" className="flex items-center gap-3 group">
            <motion.img
              src="/xotrik.png"
              alt="Xotrik"
              className="w-11 h-11 rounded-xl shadow-lg group-hover:shadow-[#D4AF37]/60 transition-all duration-300"
              whileTap={{ scale: 0.96, rotate: -8 }}
            />
            <span
              className="text-2xl font-black tracking-tight bg-gradient-to-r from-[#D4AF37] via-yellow-200 to-[#D4AF37] bg-clip-text text-transparent animate-gradient-x"
            >
              XOTRIK
            </span>
          </Link>

          {/* Enlaces con subrayado dorado animado */}
          <ul className="flex items-center gap-2 relative">
            {NAV_LINKS.map(({ to, key }) => (
              <li key={to}>
                <NavLink
                  to={to}
                  className={({ isActive }) =>
                    clsx(
                      "px-4 py-2 rounded-md text-base font-semibold transition-all group relative tracking-wide",
                      isActive
                        ? "text-[#D4AF37] font-extrabold drop-shadow-[0_2px_16px_#D4AF3755] after:scale-x-100"
                        : "text-white hover:text-[#D4AF37] after:scale-x-0"
                    )
                  }
                >
                  {t(key)}
                  <span className="absolute left-1/2 bottom-0.5 w-6 h-1 bg-[#D4AF37] rounded-full opacity-90 scale-x-0 group-hover:scale-x-100 transition-transform origin-center duration-300" />
                </NavLink>
              </li>
            ))}
          </ul>

          {/* Área derecha: redes, idiomas, CTA */}
          <RightControls />
        </header>

        {/* Mobile navbar */}
        <header className="md:hidden flex items-center justify-between px-5 py-3 bg-[#0d1b29]/95 backdrop-blur">
          <Link to="/" className="flex items-center gap-2 font-extrabold text-xl group">
            <motion.img
              src="/xotrik.png"
              alt="Xotrik"
              className="w-8 h-8 rounded shadow-lg transition-all duration-300"
              whileTap={{ scale: 0.96, rotate: -8 }}
              whileHover={{ scale: 1.1 }}
            />
            <motion.span
              whileHover={{ scale: 1.05 }}
              className="bg-gradient-to-r from-[#D4AF37] via-yellow-200 to-[#D4AF37] bg-clip-text text-transparent font-black tracking-tight"
            >
              XOTRIK
            </motion.span>
          </Link>

          <MobileMenuToggle open={open} onToggle={() => setOpen(!open)} />
        </header>

        {/* Mobile Slide-out menu */}
        <MobileMenu open={open} onClose={() => setOpen(false)} />
      </nav>
    </>
  );
}
