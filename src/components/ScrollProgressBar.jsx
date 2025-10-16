// components/ScrollProgressBar.jsx
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function ScrollProgressBar() {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.body.scrollHeight - window.innerHeight;
      const percent = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      setWidth(percent);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.div
      className="fixed top-0 left-0 z-[100] h-[3.5px] bg-gradient-to-r from-[#D4AF37] via-yellow-200 to-[#D4AF37] pointer-events-none"
      style={{ width: `${width}%` }}
      initial={{ width: 0 }}
      animate={{ width: width + "%" }}
      transition={{ ease: "easeOut", duration: 0.2 }}
    />
  );
}
