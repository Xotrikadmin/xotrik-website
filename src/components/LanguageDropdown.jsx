import { useState } from "react";
import { useTranslation } from "react-i18next";
import { motion, AnimatePresence } from "framer-motion";

export default function LanguageDropdown() {
  const { i18n } = useTranslation();
  const [open, setOpen] = useState(false);

  const languages = [
    { code: "en", label: "English" },
    { code: "es", label: "Español" }
  ];

  const toggleLang = () => setOpen(!open);

  return (
    <div className="relative">
      <button
        onClick={toggleLang}
        className="px-3 py-2 rounded bg-white/10 text-white hover:bg-white/20 transition"
      >
        {i18n.language.toUpperCase()}
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute right-0 mt-2 w-32 bg-primary text-white rounded shadow-lg overflow-hidden z-50"
          >
            {languages.map((lng) => (
              <button
                key={lng.code}
                onClick={() => {
                  i18n.changeLanguage(lng.code);
                  setOpen(false);
                }}
                className={`block w-full text-left px-4 py-2 hover:bg-accent transition ${
                  i18n.language === lng.code && "bg-gold text-primary font-bold"
                }`}
              >
                {lng.label}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
