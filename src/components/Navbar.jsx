
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
