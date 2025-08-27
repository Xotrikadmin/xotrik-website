import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ShieldCheck } from "lucide-react";

export default function CookieBanner() {
  const [accepted, setAccepted] = useState(true);

  useEffect(() => {
    const isAccepted = localStorage.getItem("xotrik_cookie_accepted");
    if (!isAccepted) setAccepted(false);
  }, []);

  const acceptCookies = () => {
    localStorage.setItem("xotrik_cookie_accepted", "true");
    setAccepted(true);
  };

  if (accepted) return null;

  return (
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 160, damping: 22 }}
      className="fixed bottom-5 left-5 right-5 z-50 bg-[#0A1828] border border-[#D4AF37]/30 text-white p-5 rounded-2xl shadow-lg backdrop-blur-md max-w-3xl mx-auto"
    >
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <ShieldCheck size={28} className="text-[#D4AF37]" />
          <div>
            <p className="font-semibold text-sm">
              Este sitio utiliza cookies para mejorar la experiencia del usuario.
            </p>
            <p className="text-xs text-white/70">
              Al continuar navegando, aceptas nuestra{" "}
              <a
                href="/politica-cookies"
                className="text-[#D4AF37] underline hover:text-yellow-300"
              >
                política de cookies
              </a>.
            </p>
          </div>
        </div>
        <button
          onClick={acceptCookies}
          className="px-5 py-2 rounded-xl bg-[#D4AF37] text-[#0A1828] font-bold text-sm hover:bg-yellow-300 transition"
        >
          Aceptar
        </button>
      </div>
    </motion.div>
  );
}
