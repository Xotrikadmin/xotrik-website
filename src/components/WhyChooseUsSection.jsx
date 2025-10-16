// WhyChooseUsSection.jsx
import React from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { GraduationCap, Rocket, AlarmClock, Handshake } from "lucide-react";

export default function WhyChooseUsSection() {
  // Usamos keyPrefix para acortar claves
  const { t } = useTranslation("translation", { keyPrefix: "why" });

  // Pedimos arrays sin defaultValue para que funcione el fallback de i18next
  const STATS = (t("metrics", { returnObjects: true }) || []);
  const CARDS = (t("cards",   { returnObjects: true }) || []);

  const ICONS = [GraduationCap, Rocket, AlarmClock, Handshake];

  const container = { hidden: {}, show: { transition: { staggerChildren: 0.12 } } };
  const item = {
    hidden: { opacity: 0, y: 28, scale: 0.98 },
    show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.65, ease: "easeOut" } },
  };

  return (
    <section
      aria-labelledby="why-title"
      className="relative overflow-hidden py-28 px-6"
      style={{
        background:
          "linear-gradient(180deg,#0A1828 0%, #0f2236 50%, rgba(23,133,130,0.15) 100%)",
      }}
    >
      {/* Glows decorativos */}
      <span
        className="pointer-events-none absolute -top-32 -left-24 h-72 w-72 rounded-full blur-[90px] opacity-40"
        style={{ background: "radial-gradient(circle, #D4AF37 0%, transparent 60%)" }}
      />
      <span
        className="pointer-events-none absolute -bottom-24 -right-20 h-80 w-80 rounded-full blur-[100px] opacity-50"
        style={{ background: "radial-gradient(circle, #178582 0%, transparent 60%)" }}
      />

      {/* Grid sutil */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(255,255,255,.12) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,.12) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      {/* Cabecera */}
      <div className="relative z-10 max-w-5xl mx-auto text-center mb-14">
        <motion.span
          initial={{ opacity: 0, y: -8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-block text-xs tracking-[0.22em] uppercase text-teal-200/80"
        >
          {t("eyebrow")}
        </motion.span>

        <motion.h2
          id="why-title"
          initial={{ opacity: 0, y: -16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-2 text-4xl md:text-5xl font-extrabold text-center text-[#D4AF37]"
          style={{ textShadow: "0 3px 24px rgba(212,175,55,.28)" }}
        >
          {t("title")}
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-4 text-slate-200/90 text-lg"
        >
          {t("subtitle")}
        </motion.p>
      </div>

      {/* Métricas */}
      <motion.ul
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.2 }}  // <- re-dispara on change/scroll
        className="relative z-10 max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-14"
      >
        {STATS.map(({ value, label }, i) => (
          <motion.li
            key={`stat-${i}`}                     // <- key ESTABLE (no depende del texto)
            variants={item}
            // initial={false} // <- opcional: evita que quede oculto si se remonta
            className="rounded-2xl border border-[#D4AF37]/25 bg-gradient-to-b from-[#122235]/85 to-[#0E1D2D]/70 p-5 text-center shadow-[0_6px_30px_rgba(0,0,0,.35)]"
          >
            <div className="text-2xl md:text-3xl font-black text-white drop-shadow">{value}</div>
            <div className="mt-1 text-[13px] md:text-sm text-slate-300">{label}</div>
          </motion.li>
        ))}
      </motion.ul>

      {/* Tarjetas */}
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.2 }} // <- re-dispara al estar en viewport
        className="relative z-10 max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-8"
      >
        {CARDS.map(({ title, desc }, i) => {
          const Icon = ICONS[i % ICONS.length];
          return (
            <motion.article
              key={`card-${i}`}                 // <- key ESTABLE (no usa el título traducido)
              variants={item}
              // initial={false} // <- opcional
              whileHover={{
                y: -3,
                boxShadow:
                  "0 10px 40px rgba(212,175,55,.25), 0 6px 28px rgba(23,133,130,.25)",
              }}
              className="
                group relative overflow-hidden rounded-2xl border border-[#D4AF37]/30
                bg-gradient-to-b from-[#141d2b]/95 to-[#0f1a28]/80
                p-7 md:p-8 transition-all duration-300
                shadow-[0_0_24px_rgba(10,24,40,.35)]
              "
            >
              <span
                aria-hidden="true"
                className="absolute left-0 right-0 top-0 h-[3px] opacity-80"
                style={{
                  background:
                    "linear-gradient(180deg, #D4AF37 0%, rgba(212,175,55,0.0) 100%)",
                }}
              />
              <svg className="pointer-events-none absolute -right-10 -top-10 w-36 h-36 opacity-20" viewBox="0 0 100 100" fill="none">
                <circle cx="50" cy="50" r="48" stroke="#178582" strokeOpacity="0.4" />
              </svg>

              <div className="flex items-start gap-4">
                <div className="shrink-0 p-3 rounded-xl bg-gradient-to-b from-[#D4AF37]/18 to-transparent border border-[#D4AF37]/35 shadow-inner">
                  <Icon size={34} className="text-[#D4AF37]" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="text-xl md:text-[1.35rem] font-extrabold text-[#D4AF37] tracking-wide">
                    {title}
                  </h3>
                  <p className="mt-1.5 text-slate-100/90 leading-relaxed">
                    {desc}
                  </p>
                </div>
              </div>

              <motion.span
                aria-hidden="true"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: false }}
                transition={{ duration: 0.8, delay: 0.2 + i * 0.05, ease: "easeOut" }}
                className="absolute left-6 right-6 bottom-4 h-[2px] origin-left"
                style={{
                  background: "linear-gradient(180deg, #178582 0%, rgba(23,133,130,0) 100%)",
                }}
              />
            </motion.article>
          );
        })}
      </motion.div>
    </section>
  );
}
