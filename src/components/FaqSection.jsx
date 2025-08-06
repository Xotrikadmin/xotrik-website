import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { motion, AnimatePresence } from "framer-motion";
import { FaQuestionCircle, FaHeadset, FaUndoAlt, FaLock, FaCogs , FaChevronDown,FaChevronUp } from "react-icons/fa";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";

const faqs = [
  {
    key: "support",
    icon: <FaHeadset className="text-[#16d9e3] text-2xl" />,
    questionKey: "faq.support.q",
    answerKey: "faq.support.a",
  },
  {
    key: "returns",
    icon: <FaUndoAlt className="text-[#D4AF37] text-2xl" />,
    questionKey: "faq.returns.q",
    answerKey: "faq.returns.a",
  },
  {
    key: "secure",
    icon: <FaLock className="text-[#D4AF37] text-2xl" />,
    questionKey: "faq.secure.q",
    answerKey: "faq.secure.a",
  },
  {
    key: "install",
    icon: <FaCogs className="text-[#16d9e3] text-2xl" />,
    questionKey: "faq.install.q",
    answerKey: "faq.install.a",
  },
];

export default function FaqSection() {
  const { t } = useTranslation();
  const [open, setOpen] = useState(null);

  return (
    <motion.section
      id="faq"
      initial={{ opacity: 0, y: 72 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.33 }}
      className="relative isolate overflow-hidden bg-[#0A1828] pt-24 pb-28 px-3 sm:px-8 flex flex-col items-center select-none"
    >
      {/* Partículas fondo */}
      <Particles
        id="faqParticles"
        init={async (engine) => await loadSlim(engine)}
        options={{
          fullScreen: { enable: false },
          particles: {
            number: { value: 22, density: { enable: true, area: 900 } },
            color: { value: ["#D4AF37", "#16d9e3"] },
            size: { value: { min: 1, max: 2.3 } },
            move: { enable: true, speed: 0.09 },
            opacity: { value: 0.12 },
            links: { enable: true, distance: 110, color: "#D4AF37", opacity: 0.05, width: 1 },
            shape: { type: "circle" },
          },
        }}
        className="absolute inset-0 -z-10"
      />

      {/* Título */}
      <motion.h2
        initial={{ opacity: 0, y: 22 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-10 text-3xl sm:text-4xl lg:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-[#D4AF37] via-[#fff7e0] to-[#D4AF37] drop-shadow-[0_3px_22px_rgba(212,175,55,0.14)]"
      >
        {t("faq.title")}
      </motion.h2>

      {/* FAQ Cards Grid - horizontal in desktop */}
      <div className="
        w-full max-w-4xl grid gap-6
        grid-cols-1 md:grid-cols-2
        ">
        {faqs.map((f, idx) => (
          <motion.div
            key={f.key}
            initial={{ opacity: 0, y: 36 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={`
              rounded-2xl border border-[#D4AF37]/30 bg-gradient-to-br from-[#114F55e8] to-[#0A1828f6]
              shadow-[0_1px_22px_0_#17858233]
              px-6 py-5 transition-all duration-300
              cursor-pointer select-none relative
              hover:shadow-[0_0_24px_4px_#D4AF3714]
              backdrop-blur-[28px]
              flex flex-col
            `}
            onClick={() => setOpen(open === idx ? null : idx)}
          >
            <div className="flex items-center justify-between gap-3">
              <div className="flex items-center gap-3">
                {f.icon}
                <span className="text-lg font-semibold text-white">{t(f.questionKey)}</span>
              </div>
              <span>
                {open === idx ? (
                  <FaChevronUp className="text-[#D4AF37] text-lg transition-transform" />
                ) : (
                  <FaChevronDown className="text-[#D4AF37] text-lg transition-transform" />
                )}
              </span>
            </div>
            <AnimatePresence initial={false}>
              {open === idx && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="overflow-hidden mt-3"
                >
                  <p className="text-slate-100/90 text-base leading-relaxed">
                    {t(f.answerKey)}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
      <style jsx>{`
        .animate-pulse-slow {
          animation: pulseSlow 2.7s cubic-bezier(.4,0,.6,1) infinite;
        }
        @keyframes pulseSlow {
          0%, 100% { opacity: 0.28; }
          50% { opacity: 0.89; }
        }
      `}</style>
    </motion.section>
  );
}
