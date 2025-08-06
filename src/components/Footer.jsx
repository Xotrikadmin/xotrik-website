// import { SiX, SiTiktok, SiInstagram, SiFacebook } from "react-icons/si";
// import { useTranslation } from "react-i18next";
// import { motion, useAnimation } from "framer-motion";
// import { useState } from "react";
// import xotrikLogo from "/xotrik-light.png"; // Ajusta la ruta según tu estructura

// export default function Footer() {
//   const { t } = useTranslation();
//   const [hovered, setHovered] = useState(false);
//   const controls = useAnimation();

//   const quickLinks = [
//     { to: "/", label: t("navbar.home") },
//     { to: "/about", label: t("navbar.about") },
//     { to: "/contact", label: t("navbar.contact") },
//   ];

//   const socials = [
//     { href: "https://x.com/xotrik44589", Icon: SiX, label: "X / Twitter" },
//     { href: "https://instagram.com/tu-cuenta", Icon: SiInstagram, label: "Instagram" },
//     { href: "https://www.facebook.com/share/1AxqfFWWF2/", Icon: SiFacebook, label: "Facebook" },
    
//   ];

//   // Animación social icons
//   const socialAnim = {
//     initial: { scale: 1, boxShadow: "0 0 0px 0 #D4AF3700" },
//     hover: {
//       scale: 1.17,
//       boxShadow: "0 0 18px 3px #D4AF3777, 0 2px 16px 0 #17858277",
//       transition: { type: "spring", stiffness: 260, damping: 13 }
//     }
//   };

//   // Logo animado con glow dorado en hover
//   const logoAnim = {
//     initial: {
//       rotate: -14,
//       scale: 0.93,
//       opacity: 0.92,
//       boxShadow: "0 0 0px 0 #D4AF3700",
//       borderColor: "#D4AF3730",
//       filter: "drop-shadow(0 0 0px #D4AF3700)"
//     },
//     animate: {
//       rotate: 0,
//       scale: 1,
//       opacity: 1,
//       boxShadow: "0 0 10px 2px #D4AF3740",
//       borderColor: "#D4AF37",
//       filter: "drop-shadow(0 0 14px #D4AF3750)"
//     },
//     whileHover: {
//       scale: 1.14,
//       boxShadow: "0 0 30px 10px #D4AF37cc, 0 0 18px 4px #178582aa",
//       borderColor: "#fff7e0",
//       filter: "drop-shadow(0 0 30px #D4AF37) drop-shadow(0 0 10px #178582)",
//       transition: { type: "spring", stiffness: 320, damping: 18 }
//     }
//   };

//   // Nombre "Xotrik" animado con framer-motion (color dorado y glow)
//   const textAnim = {
//     initial: {
//       color: "#fff7e0",
//       textShadow: "none",
//       transition: { duration: 0.2 }
//     },
//     hovered: {
//       color: "#D4AF37",
//       textShadow: "0 0 22px #D4AF37cc, 0 0 4px #fff7e0cc",
//       transition: { duration: 0.4 }
//     }
//   };

//   // Sincroniza hover para logo y texto
//   const setAllHovered = value => {
//     setHovered(value);
//     controls.start(value ? "hovered" : "initial");
//   };

//   return (
//     <footer className="relative z-30 w-full bg-gradient-to-br from-[#0A1828f2] via-[#114F55e7] to-[#178582d9] text-white py-16 px-4 shadow-[0_14px_120px_0_#0a182895] border-t border-[#D4AF37]/15 backdrop-blur-[18px]">
//       <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-12 md:gap-10 border-b border-[#fff7e0]/10 pb-12">
//         {/* Logo & slogan */}
//         <div className="flex flex-col items-start">
//           <div
//             className="flex items-center space-x-2 mb-4"
//             onMouseEnter={() => setAllHovered(true)}
//             onMouseLeave={() => setAllHovered(false)}
//             onFocus={() => setAllHovered(true)}
//             onBlur={() => setAllHovered(false)}
//             tabIndex={0}
//             role="button"
//             aria-label="Xotrik"
//             style={{ outline: "none" }}
//           >
//             <motion.img
//               src={xotrikLogo}
//               alt="Xotrik Logo"
//               width={44}
//               height={44}
//               className="rounded-full border-2 border-gold bg-white/10 shadow-lg"
//               variants={logoAnim}
//               initial="initial"
//               animate="animate"
//               whileHover="whileHover"
//               style={{
//                 transition: "box-shadow 0.4s, border-color 0.4s, filter 0.4s",
//                 cursor: "pointer"
//               }}
//               tabIndex={-1}
//             />
//             <motion.span
//               className="font-black text-2xl tracking-wide drop-shadow"
//               variants={textAnim}
//               initial="initial"
//               animate={controls}
//               style={{ WebkitTextStroke: "0.4px #0A1828" }}
//             >
//               Xotrik
//             </motion.span>
//           </div>
//           <p className="text-white/75 font-semibold text-base drop-shadow-sm mb-1">{t("hero.subtitle")}</p>
//         </div>

//         {/* Quick Links */}
//         <div className="flex flex-col">
//           <h3 className="text-gold font-semibold mb-3 tracking-wide text-lg">{t("footer.quickLinks")}</h3>
//           <ul className="space-y-2">
//             {quickLinks.map(link => (
//               <li key={link.to}>
//                 <a
//                   href={link.to}
//                   className="hover:text-gold transition font-medium text-white/85 hover:pl-2 duration-200"
//                 >
//                   {link.label}
//                 </a>
//               </li>
//             ))}
//           </ul>
//         </div>

//         {/* Contact Info */}
//         <div className="flex flex-col">
//           <h3 className="text-gold font-semibold mb-3 tracking-wide text-lg">{t("footer.contact")}</h3>
//           <p className="text-white/85">{t("contact.address")}</p>
//           <p className="mt-2 text-white/75">{t("contact.phone")}</p>
//           <a
//             href={`mailto:${t("contact.email")}`}
//             className="block mt-2 text-teal-200 hover:text-gold font-semibold underline transition"
//           >
//             {t("contact.email")}
//           </a>
//         </div>

//         {/* Social */}
//         <div className="flex flex-col items-start">
//           <h3 className="text-gold font-semibold mb-3 tracking-wide text-lg">{t("footer.social")}</h3>
//           <div className="flex gap-4 mt-2">
//             {socials.map(({ href, Icon, label }) => (
//               <motion.a
//                 key={label}
//                 href={href}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 aria-label={label}
//                 className="flex items-center justify-center w-11 h-11 rounded-full bg-white/7 border border-[#D4AF37]/30 text-gold hover:bg-gold hover:text-[#0A1828] transition-all shadow-xl"
//                 variants={socialAnim}
//                 initial="initial"
//                 whileHover="hover"
//                 whileFocus="hover"
//               >
//                 <Icon size={24} />
//               </motion.a>
//             ))}
//           </div>
//         </div>
//       </div>
//       {/* Bar final */}
//       <div className="w-full pt-7 pb-2 text-center bg-gradient-to-r from-[#0A1828]/0 via-[#D4AF37]/10 to-[#178582]/0 text-white/60 text-xs tracking-wide font-light">
//         &copy; {new Date().getFullYear()} Xotrik. {t("footer.rights")}
//       </div>
//       {/* CSS extra glassy & gold */}
//       <style jsx="true">{`
//         .text-gold { color: #D4AF37; }
//         .border-gold { border-color: #D4AF37 !important; }
//       `}</style>
//     </footer>
//   );
// }
import { SiX, SiTiktok, SiInstagram, SiFacebook } from "react-icons/si";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { useState } from "react";
import xotrikLogo from "/xotrik-light.png";

export default function Footer() {
  const { t } = useTranslation();
  const [hovered, setHovered] = useState(false);

  const quickLinks = [
    { to: "/", label: t("navbar.home") },
    { to: "/about", label: t("navbar.about") },
    { to: "/services", label: t("navbar.services") },
    { to: "/contact", label: t("footer.contactUs") }, // Ahora “Contáctanos”
  ];

  const socials = [
    { href: "https://x.com/xotrik44589", Icon: SiX, label: "X / Twitter" },
    { href: "https://instagram.com/tu-cuenta", Icon: SiInstagram, label: "Instagram" },
    { href: "https://www.facebook.com/share/1AxqfFWWF2/", Icon: SiFacebook, label: "Facebook" },
  ];

  const socialAnim = {
    initial: { scale: 1, boxShadow: "0 0 0px 0 #D4AF3700" },
    hover: {
      scale: 1.17,
      boxShadow: "0 0 18px 3px #D4AF3777, 0 2px 16px 0 #17858277",
      transition: { type: "spring", stiffness: 260, damping: 13 },
    },
  };

  return (
    <footer className="relative z-30 w-full bg-gradient-to-br from-[#0A1828f2] via-[#114F55e7] to-[#178582d9] text-white py-16 px-4 shadow-[0_14px_120px_0_#0a182895] border-t border-[#D4AF37]/15 backdrop-blur-[18px]">
      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-12 md:gap-10 border-b border-[#fff7e0]/10 pb-12">
        {/* Logo y slogan */}
        <div className="flex flex-col items-start">
          <div className="flex items-center space-x-2 mb-4">
            <img
              src={xotrikLogo}
              alt="Xotrik Logo"
              width={44}
              height={44}
              className="rounded-full border-2 border-gold bg-white/10 shadow-lg"
              style={{ transition: "box-shadow 0.4s, border-color 0.4s, filter 0.4s", cursor: "default" }}
            />
            <span
              className="font-black text-2xl tracking-wide"
              style={{ color: "#D4AF37", WebkitTextStroke: "0.4px #0A1828" }}
            >
              Xotrik
            </span>
          </div>
          <p className="text-white/75 font-semibold text-base drop-shadow-sm mb-1">{t("hero.subtitle")}</p>
        </div>

        {/* Enlaces rápidos */}
        <div className="flex flex-col">
          <h3 className="text-gold font-semibold mb-3 tracking-wide text-lg">{t("footer.quickLinks")}</h3>
          <ul className="space-y-2">
            {quickLinks.map((link) => (
              <li key={link.to}>
                <a
                  href={link.to}
                  className="hover:text-gold transition font-medium text-white/85 hover:pl-2 duration-200"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Información de contacto */}
        <div className="flex flex-col">
          <h3 className="text-gold font-semibold mb-3 tracking-wide text-lg">{t("footer.contact")}</h3>
          <p className="text-white/85">{t("contact.address")}</p>
          <p className="mt-2 text-white/75">{t("contact.phone")}</p>
          <a
            href={`mailto:${t("contact.email")}`}
            className="block mt-2 text-teal-200 hover:text-gold font-semibold underline transition"
          >
            {t("contact.email")}
          </a>
        </div>

        {/* Redes sociales */}
        <div className="flex flex-col items-start">
          <h3 className="text-gold font-semibold mb-3 tracking-wide text-lg">{t("footer.social")}</h3>
          <div className="flex gap-4 mt-2">
            {socials.map(({ href, Icon, label }) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="flex items-center justify-center w-11 h-11 rounded-full bg-white/7 border border-[#D4AF37]/30 text-gold hover:bg-gold hover:text-[#0A1828] transition-all shadow-xl"
                variants={socialAnim}
                initial="initial"
                whileHover="hover"
                whileFocus="hover"
              >
                <Icon size={24} />
              </motion.a>
            ))}
          </div>
        </div>
      </div>

      {/* Barra final */}
      <div className="w-full pt-7 pb-2 text-center bg-gradient-to-r from-[#0A1828]/0 via-[#D4AF37]/10 to-[#178582]/0 text-white/60 text-xs tracking-wide font-light">
        &copy; {new Date().getFullYear()} Xotrik. {t("footer.rights")}
      </div>

      {/* Colores extra */}
      <style jsx="true">{`
        .text-gold {
          color: #D4AF37;
        }
        .border-gold {
          border-color: #D4AF37 !important;
        }
      `}</style>
    </footer>
  );
}
