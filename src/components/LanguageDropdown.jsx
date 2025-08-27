// LanguageDropdown.jsx
import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { motion, AnimatePresence } from "framer-motion";

export default function LanguageDropdown() {
  const { i18n } = useTranslation();
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  const languages = [
    { code: "en", label: "English" },
    { code: "es", label: "Español" },
  ];

  const toggle = () => setOpen((v) => !v);

  // Cerrar al hacer click afuera o ESC
  useEffect(() => {
    const onClick = (e) => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    };
    const onEsc = (e) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("mousedown", onClick);
    document.addEventListener("keydown", onEsc);
    return () => {
      document.removeEventListener("mousedown", onClick);
      document.removeEventListener("keydown", onEsc);
    };
  }, []);

  // Inicializar desde localStorage si existe
  useEffect(() => {
    const saved = localStorage.getItem("lng");
    if (saved && saved !== i18n.language) i18n.changeLanguage(saved);
  }, [i18n]);

  const change = (lng) => {
    i18n.changeLanguage(lng);
    try { localStorage.setItem("lng", lng); } catch {}
    setOpen(false);
  };

  return (
    <div className="relative" ref={ref}>
      <button
        onClick={toggle}
        className="px-3 py-2 rounded bg-white/10 text-white hover:bg-white/20 transition"
        aria-haspopup="listbox"
        aria-expanded={open}
      >
        {i18n.language?.toUpperCase() || "EN"}
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute right-0 mt-2 w-40 rounded shadow-lg overflow-hidden z-50
                       bg-[#0A1828] border border-white/10"
            role="listbox"
          >
            {languages.map((lng) => {
              const active = i18n.language === lng.code;
              return (
                <button
                  key={lng.code}
                  onClick={() => change(lng.code)}
                  role="option"
                  aria-selected={active}
                  className={`block w-full text-left px-4 py-2 transition
                    ${active ? "bg-[#D4AF37] text-[#0A1828] font-bold" : "text-white hover:bg-white/10"}`}
                >
                  {lng.label}
                </button>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
