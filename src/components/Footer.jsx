import { SiX, SiInstagram, SiFacebook } from "react-icons/si";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

// Si tu logo está en /public/xotrik.png, no lo importes: úsalo directo con src="/xotrik.png"
const GOLD = "#D4AF37";

export default function Footer() {
  const { t } = useTranslation();

  const quickLinks = [
    { to: "/", label: t("navbar.home") },
    { to: "/about", label: t("navbar.about") },
    { to: "/services", label: t("navbar.services") },
    { to: "/contact", label: t("footer.contactUs") },
  ];

  const socials = [
    { href: "https://x.com/xotrik44589", Icon: SiX, label: "X / Twitter" },
    { href: "https://www.instagram.com/xotrik_company?igsh=MWcyODU0bDVmYnZzcg==", Icon: SiInstagram, label: "Instagram" },
    { href: "https://www.facebook.com/share/1G3Q8aYhm4/", Icon: SiFacebook, label: "Facebook" },
  ];

  const socialAnim = {
    initial: { scale: 1, boxShadow: "0 0 0px 0 rgba(212,175,55,0)" },
    hover: {
      scale: 1.14,
      boxShadow: "0 0 18px 3px rgba(212,175,55,.55), 0 2px 16px rgba(23,133,130,.55)",
      transition: { type: "spring", stiffness: 260, damping: 16 },
    },
  };

  return (
    <footer
      className="relative z-30 w-full text-white border-t"
      style={{
        background:
          "linear-gradient(135deg, rgba(10,24,40,.96) 0%, rgba(17,79,85,.92) 55%, rgba(23,133,130,.88) 100%)",
        borderColor: "rgba(212,175,55,.15)",
      }}
      aria-labelledby="footer-title"
    >
      {/* textura sutil */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 mix-blend-soft-light opacity-[0.06]"
        style={{ backgroundImage: "url('/noise.png')" }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-10">
        <div className="grid gap-12 md:gap-10 md:grid-cols-4 border-b border-white/10 pb-12">
          {/* Marca */}
          <div className="flex flex-col items-start">
            <div className="flex items-center gap-3 mb-4">
              <img
                src="/xotrik.png"
                alt="Xotrik logo"
                width={44}
                height={44}
                className="rounded-xl border bg-white/10 shadow-lg"
                style={{ borderColor: GOLD }}
              />
              <span
                id="footer-title"
                className="font-black tracking-tight leading-none"
                style={{
                  fontSize: "clamp(1.5rem, 2.2vw, 1.8rem)",
                  color: GOLD,
                  textShadow:
                    "0 1px 0 #0a1828, 0 6px 22px rgba(212,175,55,.35), 0 0 1px rgba(255,255,255,.2)",
                  letterSpacing: "-0.02em",
                }}
              >
                Xotrik
              </span>
            </div>
            <p className="text-white/80 font-medium text-base drop-shadow-sm">
              {t("hero.subtitle")}
            </p>
          </div>

          {/* Enlaces rápidos */}
          <nav aria-label={t("footer.quickLinks")} className="flex flex-col">
            <h3
              className="mb-3 text-lg font-semibold tracking-wide"
              style={{ color: GOLD }}
            >
              {t("footer.quickLinks")}
            </h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.to}>
                  <a
                    href={link.to}
                    className="relative inline-flex items-center font-medium text-white/85 transition pl-0 hover:pl-1.5"
                  >
                    <span
                      className="absolute -left-3 opacity-0 transition-opacity"
                      aria-hidden="true"
                      style={{ color: GOLD }}
                    >
                      —
                    </span>
                    <span className="hover:text-white">{link.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contacto */}
          <div className="flex flex-col">
            <h3
              className="mb-3 text-lg font-semibold tracking-wide"
              style={{ color: GOLD }}
            >
              {t("footer.contact")}
            </h3>
            <address className="not-italic text-white/85 leading-relaxed">
              <div>{t("contact.address")}</div>
              <div className="mt-2">{t("contact.phone")}</div>
              <a
                href={`mailto:${t("contact.email")}`}
                className="mt-2 inline-block font-semibold underline decoration-transparent hover:decoration-current text-teal-200 hover:text-white transition"
              >
                {t("contact.email")}
              </a>
            </address>
          </div>

          {/* Redes */}
          <div className="flex flex-col items-start">
            <h3
              className="mb-3 text-lg font-semibold tracking-wide"
              style={{ color: GOLD }}
            >
              {t("footer.social")}
            </h3>
            <div className="flex gap-4 mt-2">
              {socials.map(({ href, Icon, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex items-center justify-center w-11 h-11 rounded-full border bg-white/5 text-white transition"
                  style={{ borderColor: "rgba(212,175,55,.3)" }}
                  variants={socialAnim}
                  initial="initial"
                  whileHover="hover"
                  whileFocus="hover"
                >
                  <Icon size={22} />
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        {/* Barra final */}
        <div className="pt-6 text-center text-white/65 text-xs tracking-wide">
          &copy; {new Date().getFullYear()} Xotrik. {t("footer.rights")}
        </div>
      </div>
    </footer>
  );
}
