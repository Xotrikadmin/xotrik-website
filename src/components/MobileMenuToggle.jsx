// // Archivo: MobileMenuToggle.jsx
// import React from "react";
// import { motion } from "framer-motion";
// import { IoMdMenu, IoMdClose } from "react-icons/io";

// export default function MobileMenuToggle({ open, onToggle }) {
//   return (
//     <motion.button
//       onClick={onToggle}
//       aria-label="Toggle mobile menu"
//       initial={false}
//       animate={open ? "open" : "closed"}
//       className="fixed top-4 right-4 z-50 p-2 bg-white/10 hover:bg-white/20 backdrop-blur rounded-full shadow-lg text-[#D4AF37] transition duration-300 md:hidden"
//     >
//       <motion.div
//         variants={{
//           open: { rotate: 180 },
//           closed: { rotate: 0 },
//         }}
//         transition={{ duration: 0.3 }}
//       >
//         {open ? <IoMdClose size={28} /> : <IoMdMenu size={28} />}
//       </motion.div>
//     </motion.button>
//   );
// }
// Archivo: MobileMenuToggle.jsx
import React from "react";
import HamburgerIcon from "./HamburgerIcon";

export default function MobileMenuToggle({ open, onToggle }) {
  return (
    <button
      onClick={onToggle}
      aria-label="Toggle mobile menu"
      className="p-2 rounded-md hover:bg-white/10 transition duration-300"
    >
      <HamburgerIcon open={open} />
    </button>
  );
}

