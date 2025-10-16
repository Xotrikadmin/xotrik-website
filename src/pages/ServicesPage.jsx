// src/pages/ServicesPage.jsx
import React from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import {
  Brain,
  Bot,
  MessageSquare,
  LineChart,
  ScanFace,
  Boxes,
  Cable,
  Cloud,
  ShieldCheck,
  Wrench,
  Rocket,
  Workflow,
  FileText,
  ArrowRight,   // ⬅️ flecha para los botones
  Cpu,          // ⬅️ IA
  Settings2,    // ⬅️ Automatización
  BarChart3,    // ⬅️ Data/Analytics
} from "lucide-react";

/**
 * Utilidad para resolver rutas de assets de forma segura en Vite (BASE_URL) y CRA (PUBLIC_URL),
 * soportando despliegues en sub-path (e.g. https://midominio.com/misitio/).
 */
const RAW_BASE =
  (typeof import.meta !== "undefined" && import.meta.env?.BASE_URL) ||
  (typeof process !== "undefined" && process.env?.PUBLIC_URL) ||
  "/";

const BASE = RAW_BASE === "" ? "/" : RAW_BASE;
const asset = (p) =>
  `${BASE.replace(/\/+$/, "")}/${String(p).replace(/^\/+/, "")}`;

const COLORS = {
  dark: "#0A1828",
  tealDeep: "#114F55",
  teal: "#178582",
  gold: "#D4AF37",
};

// Banners/hero resolviendo vía `asset()` para evitar problemas de rutas
const AI_BANNER = asset("AI.png");
const SOFTWARE_BANNER = asset("software.png");
const DATA_BANNER = asset("Data.png");
const AUTOMATION_BANNER = asset("automation.png");
const HERO_IMG = asset("HeroServices.png");

// ================== UI Primitives ==================

function SectionHeader({ eyebrow, title, subtitle }) {
  return (
    <div className="max-w-3xl mx-auto text-center">
      <p
        className="tracking-widest text-xs font-semibold uppercase"
        style={{ color: COLORS.gold }}
      >
        {eyebrow}
      </p>
      <h2 className="mt-2 text-3xl md:text-4xl font-extrabold text-white">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-3 text-slate-300 leading-relaxed">{subtitle}</p>
      )}
    </div>
  );
}

// CTA reutilizable con icono (Lucide) y flecha animada
function SectionCTA({ href, label, Icon }) {
  return (
    <div className="mt-10 flex justify-center">
      <motion.a
        href={href}
        aria-label={label}
        whileHover={{ y: -1 }}
        whileTap={{ scale: 0.98 }}
        className="group inline-flex items-center gap-3 px-6 py-3 rounded-xl font-semibold text-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2"
        style={{
          background:
            "linear-gradient(180deg, rgba(212,175,55,0.95), rgba(212,175,55,0.85))",
          color: "#0B121A",
          border: `1px solid ${COLORS.gold}`,
          boxShadow:
            "0 6px 20px rgba(212,175,55,0.25), inset 0 1px 0 rgba(255,255,255,0.2)",
        }}
      >
        {Icon ? (
          <span
            className="grid place-items-center rounded-lg"
            style={{
              background: "#0B121A0F",
              border: "1px solid rgba(11,18,26,0.12)",
              width: 30,
              height: 30,
            }}
          >
            <Icon size={16} />
          </span>
        ) : null}
        <span>{label}</span>
        <ArrowRight
          className="transition-transform duration-200 group-hover:translate-x-1"
          size={18}
        />
      </motion.a>
    </div>
  );
}

function SectionBanner({ src, alt = "", showDots = false }) {
  const [failed, setFailed] = React.useState(false);

  React.useEffect(() => {
    if (!src) setFailed(true);
  }, [src]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.55 }}
      className="relative overflow-hidden rounded-2xl ring-1 ring-white/10"
    >
      {!failed ? (
        <img
          src={src}
          alt={alt}
          width={1600}
          height={640}
          sizes="(max-width: 768px) 100vw, 1200px"
          className="w-full h-56 md:h-64 object-cover object-center select-none"
          decoding="async"
          loading="lazy"
          referrerPolicy="no-referrer"
          onError={() => setFailed(true)}
        />
      ) : (
        <div className="w-full h-56 md:h-64">
          <div
            className="w-full h-full"
            style={{
              background:
                "radial-gradient(60% 60% at 50% 50%, rgba(23,133,130,0.28), transparent), linear-gradient(180deg, #0A1828, #08131F)",
            }}
          />
        </div>
      )}

      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, rgba(10,24,40,0.12), rgba(10,24,40,0.65))",
        }}
      />

      {showDots && (
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.1]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
            backgroundSize: "22px 22px",
          }}
        />
      )}
    </motion.div>
  );
}

function ServiceCard({ icon: Icon, title, description, bullets }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -4 }}
      className="group relative rounded-2xl border border-white/10 p-6 bg-white/5 backdrop-blur-sm hover:bg-white/10 transition"
    >
      <div
        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition"
        style={{ boxShadow: `0 0 0 1px ${COLORS.teal} inset` }}
      />
      <div className="flex items-center gap-3">
        <div
          className="p-2 rounded-xl"
          style={{
            background: `${COLORS.tealDeep}40`,
            border: `1px solid ${COLORS.teal}`,
          }}
        >
          <Icon className="w-6 h-6" color={COLORS.gold} />
        </div>
        <h3 className="text-xl font-bold text-white">{title}</h3>
      </div>
      {description && <p className="mt-3 text-slate-300">{description}</p>}
      {bullets?.length > 0 && (
        <ul className="mt-4 space-y-2">
          {bullets.map((b, i) => (
            <li
              key={i}
              className="text-slate-300 text-sm leading-relaxed flex gap-2"
            >
              <span
                className="mt-1 w-1.5 h-1.5 rounded-full"
                style={{ background: COLORS.gold }}
              />
              <span>{b}</span>
            </li>
          ))}
        </ul>
      )}
    </motion.div>
  );
}

function Section({ children, grid = false }) {
  return (
    <section className="relative py-16 md:py-24">
      {grid && (
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
            backgroundSize: "24px 24px",
          }}
        />
      )}
      <div className="relative container mx-auto px-4">{children}</div>
    </section>
  );
}

// ================== Page ==================
export default function ServicesPage() {
  const { t } = useTranslation();

  const heroVariants = {
    hidden: { opacity: 0, y: 24 },
    show: { opacity: 1, y: 0, transition: { duration: 0.7 } },
  };

  return (
    <main
      style={{
        background: `linear-gradient(180deg, ${COLORS.dark}, #08131F)`,
      }}
    >
      {/* HERO */}
      <section className="relative min-h-[70vh] flex items-center overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            background: `radial-gradient(1000px 500px at 80% -10%, ${COLORS.teal}22, transparent 70%), radial-gradient(800px 400px at -10% 100%, ${COLORS.tealDeep}33, transparent 60%)`,
          }}
        />
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(24)].map((_, i) => (
            <span
              key={i}
              className="absolute w-[2px] h-[2px] rounded-full bg-white/60"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                opacity: 0.25 + Math.random() * 0.5,
                filter: "blur(0.5px)",
              }}
            />
          ))}
        </div>

        <div className="container mx-auto px-4 relative grid md:grid-cols-2 gap-8 items-center">
          {/* Copy */}
          <motion.div
            variants={heroVariants}
            initial="hidden"
            animate="show"
            className="max-w-2xl"
          >
            <p
              className="tracking-widest text-xs font-semibold uppercase"
              style={{ color: COLORS.gold }}
            >
              {t("servicesPage.heroServices.eyebrow")}
            </p>
            <h1
              className="mt-3 text-4xl md:text-6xl font-extrabold leading-tight"
              style={{ color: COLORS.gold }}
            >
              {t("servicesPage.heroServices.title")}{" "}
              <span style={{ color: COLORS.teal }}>
                {t("servicesPage.heroServices.titleAccent")}
              </span>
            </h1>
            <p className="mt-4 text-slate-300">
              {t("servicesPage.heroServices.subtitle")}
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#ai"
                className="px-5 py-3 rounded-xl font-semibold text-sm"
                style={{
                  background: COLORS.teal,
                  color: "#041018",
                  border: `1px solid ${COLORS.teal}`,
                }}
              >
                {t("servicesPage.heroServices.ctaPrimary")}
              </a>
              <a
                href="#software"
                className="px-5 py-3 rounded-xl font-semibold text-sm text-white border"
                style={{ borderColor: COLORS.gold }}
              >
                {t("servicesPage.heroServices.ctaSecondary")}
              </a>
            </div>
          </motion.div>

          {/* Media */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96, x: 16 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative"
          >
            <img
              src={HERO_IMG}
              alt="Xotrik Services Hero"
              width={1920}
              height={1080}
              sizes="(max-width: 768px) 100vw, 50vw"
              decoding="async"
              loading="eager"
              className="w-full h-[320px] md:h-[420px] object-cover rounded-3xl ring-1 ring-white/10 shadow-2xl"
            />
            <div
              className="absolute -inset-2 rounded-[28px] -z-10"
              style={{
                background:
                  "radial-gradient(60% 60% at 50% 50%, rgba(23,133,130,0.25), transparent)",
                filter: "blur(10px)",
              }}
            />
          </motion.div>
        </div>
      </section>

      {/* AI SOLUTIONS */}
      <Section>
        <SectionBanner src={AI_BANNER} alt="AI solutions" showDots={false} />
        <div className="mt-10">
          <SectionHeader
            eyebrow={t("servicesPage.aiSection.eyebrow")}
            title={t("servicesPage.aiSection.title")}
            subtitle={t("servicesPage.aiSection.subtitle")}
          />
        </div>
        <div id="ai" className="mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <ServiceCard
            icon={Bot}
            title={t("servicesPage.aiSection.items.chatbots.title")}
            description={t("servicesPage.aiSection.items.chatbots.desc")}
            bullets={[
              t("servicesPage.aiSection.items.chatbots.b1"),
              t("servicesPage.aiSection.items.chatbots.b2"),
              t("servicesPage.aiSection.items.chatbots.b3"),
            ]}
          />
          <ServiceCard
            icon={LineChart}
            title={t("servicesPage.aiSection.items.predictive.title")}
            description={t("servicesPage.aiSection.items.predictive.desc")}
            bullets={[
              t("servicesPage.aiSection.items.predictive.b1"),
              t("servicesPage.aiSection.items.predictive.b2"),
              t("servicesPage.aiSection.items.predictive.b3"),
            ]}
          />
          <ServiceCard
            icon={ScanFace}
            title={t("servicesPage.aiSection.items.vision.title")}
            description={t("servicesPage.aiSection.items.vision.desc")}
            bullets={[
              t("servicesPage.aiSection.items.vision.b1"),
              t("servicesPage.aiSection.items.vision.b2"),
              t("servicesPage.aiSection.items.vision.b3"),
            ]}
          />
          <ServiceCard
            icon={Boxes}
            title={t("servicesPage.aiSection.items.integration.title")}
            description={t("servicesPage.aiSection.items.integration.desc")}
            bullets={[
              t("servicesPage.aiSection.items.integration.b1"),
              t("servicesPage.aiSection.items.integration.b2"),
              t("servicesPage.aiSection.items.integration.b3"),
            ]}
          />
          <ServiceCard
            icon={MessageSquare}
            title={t("servicesPage.aiSection.items.cx.title")}
            description={t("servicesPage.aiSection.items.cx.desc")}
            bullets={[
              t("servicesPage.aiSection.items.cx.b1"),
              t("servicesPage.aiSection.items.cx.b2"),
              t("servicesPage.aiSection.items.cx.b3"),
            ]}
          />
          <ServiceCard
            icon={Brain}
            title={t("servicesPage.aiSection.items.strategy.title")}
            description={t("servicesPage.aiSection.items.strategy.desc")}
            bullets={[
              t("servicesPage.aiSection.items.strategy.b1"),
              t("servicesPage.aiSection.items.strategy.b2"),
              t("servicesPage.aiSection.items.strategy.b3"),
            ]}
          />
        </div>
        <SectionCTA
          href="/services/aiSolutions"
          Icon={Cpu}
          label={t("servicesPage.aiSection.cta", "Explorar soluciones de IA")}
        />
      </Section>

      {/* CUSTOM SOFTWARE */}
      <Section>
        <SectionBanner
          src={SOFTWARE_BANNER}
          alt="Custom software"
          showDots={false}
        />
        <div className="mt-10">
          <SectionHeader
            eyebrow={t("servicesPage.softwareSection.eyebrow")}
            title={t("servicesPage.softwareSection.title")}
            subtitle={t("servicesPage.softwareSection.subtitle")}
          />
        </div>
        <div
          id="software"
          className="mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <ServiceCard
            icon={Workflow}
            title={t("servicesPage.softwareSection.items.consulting.title")}
            description={t("servicesPage.softwareSection.items.consulting.desc")}
            bullets={[
              t("servicesPage.softwareSection.items.consulting.b1"),
              t("servicesPage.softwareSection.items.consulting.b2"),
            ]}
          />
          <ServiceCard
            icon={Rocket}
            title={t("servicesPage.softwareSection.items.web.title")}
            description={t("servicesPage.softwareSection.items.web.desc")}
            bullets={[
              t("servicesPage.softwareSection.items.web.b1"),
              t("servicesPage.softwareSection.items.web.b2"),
            ]}
          />
          <ServiceCard
            icon={Cable}
            title={t("servicesPage.softwareSection.items.integration.title")}
            description={t("servicesPage.softwareSection.items.integration.desc")}
            bullets={[
              t("servicesPage.softwareSection.items.integration.b1"),
              t("servicesPage.softwareSection.items.integration.b2"),
              t("servicesPage.softwareSection.items.integration.b3"),
            ]}
          />
          <ServiceCard
            icon={Cloud}
            title={t("servicesPage.softwareSection.items.cloud.title")}
            description={t("servicesPage.softwareSection.items.cloud.desc")}
            bullets={[
              t("servicesPage.softwareSection.items.cloud.b1"),
              t("servicesPage.softwareSection.items.cloud.b2"),
            ]}
          />
          <ServiceCard
            icon={Wrench}
            title={t("servicesPage.softwareSection.items.support.title")}
            description={t("servicesPage.softwareSection.items.support.desc")}
            bullets={[
              t("servicesPage.softwareSection.items.support.b1"),
              t("servicesPage.softwareSection.items.support.b2"),
            ]}
          />
          <ServiceCard
            icon={ShieldCheck}
            title={t("servicesPage.softwareSection.items.modernization.title")}
            description={t("servicesPage.softwareSection.items.modernization.desc")}
            bullets={[
              t("servicesPage.softwareSection.items.modernization.b1"),
              t("servicesPage.softwareSection.items.modernization.b2"),
            ]}
          />
        </div>
        <SectionCTA
          href="/services/customDev"
          Icon={Rocket}
          label={t(
            "servicesPage.softwareSection.cta",
            "Explorar desarrollo a medida"
          )}
        />
      </Section>

      {/* AUTOMATION */}
      <Section>
        <SectionBanner
          src={AUTOMATION_BANNER}
          alt="Automation"
          showDots={false}
        />
        <div className="mt-10">
          <SectionHeader
            eyebrow={t("servicesPage.automationSection.eyebrow")}
            title={t("servicesPage.automationSection.title")}
            subtitle={t("servicesPage.automationSection.subtitle")}
          />
        </div>
        <div
          id="automation"
          className="mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <ServiceCard
            icon={Boxes}
            title={t("servicesPage.automationSection.items.discovery.title")}
            description={t("servicesPage.automationSection.items.discovery.desc")}
            bullets={[
              t("servicesPage.automationSection.items.discovery.b1"),
              t("servicesPage.automationSection.items.discovery.b2"),
            ]}
          />
          <ServiceCard
            icon={Workflow}
            title={t("servicesPage.automationSection.items.rpa.title")}
            description={t("servicesPage.automationSection.items.rpa.desc")}
            bullets={[
              t("servicesPage.automationSection.items.rpa.b1"),
              t("servicesPage.automationSection.items.rpa.b2"),
            ]}
          />
          <ServiceCard
            icon={Brain}
            title={t("servicesPage.automationSection.items.hyper.title")}
            description={t("servicesPage.automationSection.items.hyper.desc")}
            bullets={[
              t("servicesPage.automationSection.items.hyper.b1"),
              t("servicesPage.automationSection.items.hyper.b2"),
              t("servicesPage.automationSection.items.hyper.b3"),
            ]}
          />
          <ServiceCard
            icon={FileText}
            title={t("servicesPage.automationSection.items.docs.title")}
            description={t("servicesPage.automationSection.items.docs.desc")}
            bullets={[
              t("servicesPage.automationSection.items.docs.b1"),
              t("servicesPage.automationSection.items.docs.b2"),
            ]}
          />
        </div>
        <SectionCTA
          href="/services/automation"
          Icon={Settings2}
          label={t(
            "servicesPage.automationSection.cta",
            "Explorar automatización"
          )}
        />
      </Section>

      {/* DATA SCIENCE */}
      <Section>
        <SectionBanner src={DATA_BANNER} alt="Data science" showDots={false} />
        <div className="mt-10">
          <SectionHeader
            eyebrow={t("servicesPage.dataSection.eyebrow")}
            title={t("servicesPage.dataSection.title")}
            subtitle={t("servicesPage.dataSection.subtitle")}
          />
        </div>
        <div id="data" className="mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <ServiceCard
            icon={LineChart}
            title={t("servicesPage.dataSection.items.analytics.title")}
            description={t("servicesPage.dataSection.items.analytics.desc")}
            bullets={[
              t("servicesPage.dataSection.items.analytics.b1"),
              t("servicesPage.dataSection.items.analytics.b2"),
              t("servicesPage.dataSection.items.analytics.b3"),
            ]}
          />
          <ServiceCard
            icon={Brain}
            title={t("servicesPage.dataSection.items.ml.title")}
            description={t("servicesPage.dataSection.items.ml.desc")}
            bullets={[
              t("servicesPage.dataSection.items.ml.b1"),
              t("servicesPage.dataSection.items.ml.b2"),
            ]}
          />
          <ServiceCard
            icon={ShieldCheck}
            title={t("servicesPage.dataSection.items.governance.title")}
            description={t("servicesPage.dataSection.items.governance.desc")}
            bullets={[
              t("servicesPage.dataSection.items.governance.b1"),
              t("servicesPage.dataSection.items.governance.b2"),
            ]}
          />
        </div>
        <SectionCTA
          href="/services/dataScience"
          Icon={BarChart3}
          label={t("servicesPage.dataSection.cta", "Explorar ciencia de datos")}
        />
      </Section>

      {/* CTA FINAL */}
      <section className="relative py-16 md:py-24">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.55 }}
            className="rounded-3xl p-8 md:p-12 border text-center"
            style={{
              borderColor: `${COLORS.gold}66`,
              background: `linear-gradient(180deg, ${COLORS.tealDeep}22, transparent)`,
            }}
          >
            <h3
              className="text-2xl md:text-3xl font-bold"
              style={{ color: COLORS.gold }}
            >
              {t("servicesPage.ctaBlock.title")}
            </h3>
            <p className="mt-3 text-slate-300 max-w-2xl mx-auto">
              {t("servicesPage.ctaBlock.subtitle")}
            </p>
            <div className="mt-6 flex justify-center">
              <a
                href="/contact"
                className="px-6 py-3 rounded-xl font-semibold text-sm"
                style={{
                  background: COLORS.gold,
                  color: "#0B121A",
                  border: `1px solid ${COLORS.gold}`,
                }}
              >
                {t("servicesPage.ctaBlock.button")}
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
