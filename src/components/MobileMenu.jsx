import React, { useEffect, useMemo, useId, useCallback } from "react";
import PropTypes from "prop-types";
import { Link, NavLink, useLocation } from "react-router-dom";
import { motion, useReducedMotion } from "framer-motion";
import { IoMdClose } from "react-icons/io";
import { FaInstagram, FaFacebookF, FaXTwitter, FaWhatsapp } from "react-icons/fa6";
import clsx from "clsx";
import { useTranslation } from "react-i18next";
import * as Dialog from "@radix-ui/react-dialog";
import LanguageDropdown from "./LanguageDropdown";

/**
 * MobileMenu.next.jsx — Radix Dialog edition
 * - Radix Dialog = focus trap, aria, body scroll lock, ESC to close
 * - Framer Motion animations (open/closed) + drag-to-close
 * - Route-change autoclose
 * - RTL-aware slide direction
 * - Reduced-motion support
 * - Extensible via props
 */

const DEFAULT_NAV_LINKS = [
  { to: "/", key: "navbar.home" },
  { to: "/about", key: "navbar.about" },
  { to: "/services", key: "navbar.services" },
  { to: "/contact", key: "navbar.cta" },
];

const DEFAULT_SOCIALS = [
  { href: "#", label: "Instagram", icon: FaInstagram },
  { href: "#", label: "Facebook", icon: FaFacebookF },
  { href: "#", label: "X / Twitter", icon: FaXTwitter },
];

export default function MobileMenu({
  open,
  onClose,
  navLinks = DEFAULT_NAV_LINKS,
  socials = DEFAULT_SOCIALS,
  logoSrc = "/xotrik.png",
  brand = "XOTRIK",
  whatsappHref = "https://wa.me/50689190811",
}) {
  const { t, i18n } = useTranslation();
  const prefersReducedMotion = useReducedMotion();
  const location = useLocation();
  const dir = (typeof document !== "undefined" && document?.dir) || i18n?.dir?.() || "ltr";
  const fromLeft = dir === "ltr";

  // autoclose on route change
  useEffect(() => {
    if (!open) return;
    onClose?.();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.pathname]);

  // a11y ids
  const dialogId = useId();
  const titleId = `${dialogId}-title`;
  const descId = `${dialogId}-desc`;

  // Motion variants
  const overlayVariants = {
    open: { opacity: 1 },
    closed: { opacity: 0 },
  };

  const contentVariants = {
    open: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: prefersReducedMotion
        ? { duration: 0.12 }
        : { type: "spring", stiffness: 140, damping: 18 },
    },
    closed: { x: fromLeft ? "-100%" : "100%", opacity: 0.98, scale: 0.98 },
  };

  const handleDragEnd = useCallback(
    (_, info) => {
      const threshold = 80; // px
      const deltaX = info.offset.x;
      const shouldClose = fromLeft ? deltaX < -threshold : deltaX > threshold;
      if (shouldClose) onClose?.();
    },
    [fromLeft, onClose]
  );

  return (
    <Dialog.Root open={open} onOpenChange={(v) => (!v ? onClose?.() : void 0)}>
      <Dialog.Portal>
        {/* OVERLAY (kept mounted for exit anims) */}
        <Dialog.Overlay forceMount asChild>
          <motion.button
            type="button"
            className="fixed inset-0 z-[9998] bg-black/40 backdrop-blur-[2px]"
            aria-hidden="true"
            initial={false}
            animate={open ? "open" : "closed"}
            variants={overlayVariants}
            onClick={onClose}
          />
        </Dialog.Overlay>

        {/* PANEL */}
        <Dialog.Content forceMount asChild>
          <motion.aside
            role="dialog"
            aria-modal="true"
            aria-labelledby={titleId}
            aria-describedby={descId}
            className={clsx(
              "fixed top-0 h-[100dvh] w-[92%] max-w-sm z-[9999] bg-[#0A1828] text-white shadow-2xl flex flex-col outline-none",
              fromLeft ? "left-0" : "right-0"
            )}
            initial={false}
            animate={open ? "open" : "closed"}
            variants={contentVariants}
            drag="x"
            dragDirectionLock
            dragConstraints={{ left: fromLeft ? -280 : 0, right: fromLeft ? 0 : 280 }}
            dragElastic={0.08}
            onDragEnd={handleDragEnd}
          >
            {/* HEADER */}
            <div
              className="flex items-center justify-between px-6 pt-5 pb-4 border-b border-[#13253b]"
              style={{ paddingTop: "calc(env(safe-area-inset-top, 0px) + 16px)" }}
            >
              <Link
                to="/"
                onClick={onClose}
                className="flex items-center gap-2 text-xl font-extrabold text-[#D4AF37]"
              >
                {logoSrc ? (
                  <img src={logoSrc} alt={brand} className="w-9 h-9 rounded shadow" />
                ) : null}
                {brand}
              </Link>

              <div className="flex items-center gap-2">
                {/* Integración directa con tu LanguageDropdown */}
                <LanguageDropdown />

                <Dialog.Close asChild>
                  <button
                    type="button"
                    aria-label={t("common.close", "Close menu")}
                    className="p-2 rounded-full hover:bg-[#13253b] focus:outline-none focus:ring-2 focus:ring-[#D4AF37]/70"
                  >
                    <IoMdClose size={24} className="text-white" />
                  </button>
                </Dialog.Close>
              </div>
            </div>

            {/* CONTENT */}
            <div className="relative flex-1 overflow-y-auto px-6 py-5 pb-32" id={descId}>
              <Dialog.Title id={titleId} className="sr-only">
                {t("common.menu", "Mobile menu")}
              </Dialog.Title>
              <Dialog.Description id={descId} className="sr-only">
                {t("common.primaryNavigation", "Primary Navigation")}
              </Dialog.Description>

              <nav aria-label={t("common.primaryNavigation", "Primary Navigation")} className="flex flex-col gap-2">
                {navLinks.map(({ to, key, label }, i) => (
                  <motion.div
                    key={to}
                    initial={prefersReducedMotion ? false : { opacity: 0, y: 8 }}
                    animate={prefersReducedMotion ? false : { opacity: 1, y: 0 }}
                    transition={prefersReducedMotion ? undefined : { delay: 0.04 * i }}
                  >
                    <NavLink
                      to={to}
                      onClick={onClose}
                      className={({ isActive }) =>
                        clsx(
                          "block px-4 py-3 rounded-lg font-semibold tracking-wide transition-colors",
                          isActive
                            ? "bg-[#D4AF37] text-[#0A1828]"
                            : "text-white hover:text-[#D4AF37] hover:bg-[#13253b]"
                        )
                      }
                    >
                      {label ?? t(key)}
                    </NavLink>
                  </motion.div>
                ))}
              </nav>

              {socials?.length > 0 && (
                <div className="mt-8 flex gap-4" aria-label={t("common.social", "Social links")}>
                  {socials.map(({ href, icon: Icon, label: socialLabel }) => (
                    <motion.a
                      key={href}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={prefersReducedMotion ? undefined : { scale: 1.08 }}
                      whileTap={prefersReducedMotion ? undefined : { scale: 0.95 }}
                      className="p-3 rounded-full bg-[#15263d] hover:bg-[#1b2f4a] transition-colors text-[#D4AF37]"
                      aria-label={socialLabel}
                    >
                      <Icon size={20} />
                    </motion.a>
                  ))}
                </div>
              )}

              {whatsappHref && (
                <motion.a
                  href={whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={prefersReducedMotion ? undefined : { scale: 1.01 }}
                  whileTap={prefersReducedMotion ? undefined : { scale: 0.98 }}
                  className="absolute left-6 right-6"
                  style={{ bottom: "calc(env(safe-area-inset-bottom, 0px) + 16px)" }}
                  aria-label={t("common.whatsappCta", "Contact us on WhatsApp")}
                >
                  <div className="relative w-full h-12 rounded-full bg-[#25D366] hover:bg-[#1ebe57] text-white font-bold shadow-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-white/80">
                    <FaWhatsapp size={18} className="absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none" />
                    <span className="absolute inset-0 grid place-items-center px-12 text-[15px]">
                      {t("cta.whatsapp", "WhatsApp")}
                    </span>
                  </div>
                </motion.a>
              )}
            </div>
          </motion.aside>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}

MobileMenu.propTypes = {
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  navLinks: PropTypes.arrayOf(
    PropTypes.shape({
      to: PropTypes.string.isRequired,
      key: PropTypes.string,
      label: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
    })
  ),
  socials: PropTypes.arrayOf(
    PropTypes.shape({
      href: PropTypes.string.isRequired,
      icon: PropTypes.elementType.isRequired,
      label: PropTypes.string,
    })
  ),
  logoSrc: PropTypes.string,
  brand: PropTypes.string,
  whatsappHref: PropTypes.string,
};

// -------------------- Toggle Button --------------------
export function MobileMenuToggle({ open, onToggle, controlsId = "mobile-menu" }) {
  return (
    <button
      onClick={onToggle}
      aria-label="Toggle mobile menu"
      aria-expanded={open}
      aria-controls={controlsId}
      className={clsx(
        "p-2 rounded-md transition duration-300 md:hidden focus:outline-none focus:ring-2",
        open ? "bg-white/20 ring-white/70" : "hover:bg-white/10"
      )}
      data-state={open ? "open" : "closed"}
      type="button"
    >
      <HamburgerIcon open={open} />
    </button>
  );
}

MobileMenuToggle.propTypes = {
  open: PropTypes.bool.isRequired,
  onToggle: PropTypes.func.isRequired,
  controlsId: PropTypes.string,
};

// -------------------- Animated Hamburger --------------------
export function HamburgerIcon({ open }) {
  const transition = { duration: 0.2 };
  return (
    <div className="w-7 h-7 relative" aria-hidden>
      <motion.span
        className="absolute left-1 right-1 top-2 h-0.5 rounded bg-current"
        animate={open ? { rotate: 45, top: "50%" } : { rotate: 0, top: "0.5rem" }}
        transition={transition}
      />
      <motion.span
        className="absolute left-1 right-1 top-1/2 -translate-y-1/2 h-0.5 rounded bg-current"
        animate={open ? { opacity: 0 } : { opacity: 1 }}
        transition={transition}
      />
      <motion.span
        className="absolute left-1 right-1 bottom-2 h-0.5 rounded bg-current"
        animate={open ? { rotate: -45, bottom: "50%" } : { rotate: 0, bottom: "0.5rem" }}
        transition={transition}
      />
    </div>
  );
}

HamburgerIcon.propTypes = { open: PropTypes.bool.isRequired };
