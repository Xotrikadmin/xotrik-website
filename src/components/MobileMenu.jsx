import React from "react";
import { Link, NavLink } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { IoMdClose } from "react-icons/io";
import { FaInstagram, FaFacebookF, FaXTwitter, FaWhatsapp } from "react-icons/fa6";
import clsx from "clsx";
import LanguageDropdown from "./LanguageDropdown";
import { useTranslation } from "react-i18next";

const NAV_LINKS = [
  { to: "/", key: "navbar.home" },
  { to: "/about", key: "navbar.about" },
  { to: "/services", key: "navbar.services" },
  { to: "/contact", key: "navbar.cta" },
];

const SOCIALS = [
  { href: "#", icon: FaInstagram },
  { href: "#", icon: FaFacebookF },
  { href: "#", icon: FaXTwitter },
];

const slidePanel = {
  initial: { x: "-100vw", opacity: 0, scale: 0.95 },
  animate: { x: 0, opacity: 1, scale: 1 },
  exit: { x: "-100vw", opacity: 0, scale: 0.95 },
  transition: { type: "spring", stiffness: 70, damping: 18 },
};

export default function MobileMenu({ open, onClose }) {
  const { t } = useTranslation();

  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Panel principal */}
          <motion.div
            {...slidePanel}
            className="fixed top-0 left-0 z-50 w-[90%] max-w-sm h-full bg-[#0A1828f5] border-r border-[#D4AF37]/30 backdrop-blur-2xl shadow-lg p-6 flex flex-col"
            role="dialog"
            aria-modal="true"
          >
            {/* Header */}
            <div className="flex items-center justify-between mb-8">
              <Link
                to="/"
                onClick={onClose}
                className="flex items-center gap-2 text-xl font-extrabold text-[#D4AF37]"
              >
                <img src="/xotrik.png" alt="Xotrik" className="w-9 h-9 rounded shadow" />
                XOTRIK
              </Link>
              <button
                aria-label="Close menu"
                onClick={onClose}
                className="p-2 rounded-full hover:bg-white/10"
              >
                <IoMdClose size={28} className="text-white" />
              </button>
            </div>

            {/* Navegación */}
            <nav className="flex flex-col gap-2">
              {NAV_LINKS.map(({ to, key }) => (
                <NavLink
                  key={to}
                  to={to}
                  onClick={onClose}
                  className={({ isActive }) =>
                    clsx(
                      "block px-4 py-3 rounded-lg font-semibold tracking-wide transition",
                      isActive
                        ? "bg-[#D4AF37]/10 text-[#D4AF37]"
                        : "text-white hover:text-[#D4AF37] hover:bg-white/5"
                    )
                  }
                >
                  {t(key)}
                </NavLink>
              ))}
            </nav>

            {/* Redes sociales mejoradas */}
            <div className="mt-10 flex gap-4 justify-center">
              {SOCIALS.map(({ href, icon: Icon }) => (
                <motion.a
                  key={href}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition text-[#D4AF37]"
                >
                  <Icon size={20} />
                </motion.a>
              ))}
              <LanguageDropdown />
            </div>

            {/* Botón de WhatsApp mejorado */}
            <motion.a
              href="https://wa.me/50689190811"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mt-auto w-full px-4 py-3 rounded-full bg-[#25D366] hover:bg-[#1ebe57] text-white font-bold shadow-md flex justify-center items-center gap-2 transition"
              aria-label="WhatsApp"
            >
              <FaWhatsapp size={20} />
              WhatsApp
            </motion.a>
          </motion.div>

          {/* Overlay oscuro */}
          <motion.div
            className="fixed inset-0 z-40 bg-black/60 backdrop-blur"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            aria-hidden="true"
          />
        </>
      )}
    </AnimatePresence>
  );
}
