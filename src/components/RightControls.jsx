// components/RightControls.jsx
import React from "react";
import { motion } from "framer-motion";
import {
  FaInstagram,
  FaFacebookF,
  FaXTwitter,
  FaWhatsapp,
} from "react-icons/fa6";
import LanguageDropdown from "./LanguageDropdown";

const SOCIALS = [
  { href: "#", icon: FaInstagram },
  { href: "#", icon: FaFacebookF },
  { href: "#", icon: FaXTwitter },
];

const iconVariants = {
  rest: { scale: 1, rotate: 0 },
  hover: { scale: 1.15, rotate: 8 },
  tap: { scale: 0.92 },
};

export default function RightControls() {
  return (
    <div className="flex items-center gap-3">
      {SOCIALS.map(({ href, icon: Icon }) => (
        <motion.a
          key={href}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          initial="rest"
          whileHover="hover"
          whileTap="tap"
          variants={iconVariants}
          className="grid place-items-center rounded-full p-2 bg-white/10 backdrop-blur-md shadow-md hover:shadow-[#D4AF37]/40 transition"
        >
          <Icon size={22} className="text-[#D4AF37]" />
        </motion.a>
      ))}

      <LanguageDropdown />

      <motion.a
        href="https://wa.me/50689190811"
        target="_blank"
        rel="noopener noreferrer"
        initial="rest"
        whileHover="hover"
        whileTap="tap"
        variants={iconVariants}
        className="grid place-items-center rounded-full p-2 bg-[#25D366] text-white shadow-lg hover:shadow-[#25D366]/50 transition"
      >
        <FaWhatsapp size={22} />
      </motion.a>
    </div>
  );
}
