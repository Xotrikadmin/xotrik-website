// Archivo: HamburgerIcon.jsx
import React from "react";
import { motion } from "framer-motion";

export default function HamburgerIcon({ open }) {
  return (
    <div className="flex flex-col justify-center items-center gap-1">
      <motion.span
        animate={{
          width: open ? "1.5rem" : "2rem",
        }}
        className="h-0.5 bg-[#D4AF37] rounded transition-all duration-300"
      />
      <motion.span
        animate={{
          width: open ? "1rem" : "1.5rem",
        }}
        className="h-0.5 bg-[#D4AF37] rounded transition-all duration-300"
      />
      <motion.span
        animate={{
          width: open ? "1.5rem" : "2rem",
        }}
        className="h-0.5 bg-[#D4AF37] rounded transition-all duration-300"
      />
    </div>
  );
}
