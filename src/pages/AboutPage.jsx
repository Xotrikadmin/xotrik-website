
import React, { useMemo } from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const GOLD = "#D4AF37";

// util seguro por si una traducción viene como objeto/array/string
function ensureArray(v) {
  if (Array.isArray(v)) return v;
  if (!v) return [];
  if (typeof v === "object") return Object.values(v);
  return [String(v)];
}

// Animaciones
const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};
const fadeIn = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.8, ease: "easeOut" } },
};
const slideInLeft = {
  hidden: { opacity: 0, x: -40 },
  show: { opacity: 1, x: 0, transition: { duration: 0.7, ease: "easeOut" } },
};
const slideInRight = {
  hidden: { opacity: 0, x: 40 },
  show: { opacity: 1, x: 0, transition: { duration: 0.7, ease: "easeOut" } },
};
const stagger = { show: { transition: { staggerChildren: 0.12, delayChildren: 0.08 } } };

export default function AboutPage() {
  const { t, i18n } = useTranslation();

  // Valores (6 tarjetas)
  const values = useMemo(() => {
    const raw = t("aboutPage.values.items", {
      returnObjects: true,
      defaultValue: [
        { 
          title: "Continuous innovation", 
          desc: "We promote the constant search for new and cutting-edge technological solutions, maintaining leadership in digital transformation.",
          icon: "🚀"
        },
        { 
          title: "Excellence and continuous improvement", 
          desc: "We strive for quality from start to delivery, perfecting processes to always offer a high-impact experience.",
          icon: "⭐"
        },
        { 
          title: "Customer focus", 
          desc: "All our actions are focused on customer satisfaction and growth, offering meaningful and valuable experiences.",
          icon: "🎯"
        },
        { 
          title: "Talent and collaboration", 
          desc: "We foster a collaborative environment where commitment, empathy and personal development are key to team building.",
          icon: "🤝"
        },
        { 
          title: "Integrity and transparency", 
          desc: "We act with honesty and responsibility, generating bonds of trust with clients and collaborators.",
          icon: "💎"
        },
        { 
          title: "Adaptability and agility", 
          desc: "We accept change as an opportunity, responding quickly and effectively to new technological trends and market demands.",
          icon: "⚡"
        },
      ]
    });
    return ensureArray(raw).slice(0, 6);
  }, [t, i18n.language]);

  // Párrafos de historia
  const historyParas = useMemo(() => {
    const raw = t("aboutPage.history.paragraphs", {
      returnObjects: true,
      defaultValue: [
        "What started as a professional collaboration transformed into a common vision: to build a company that not only provides technology solutions, but creates tangible value for those who trust us. We believe that the best solutions are born when brilliant minds come together with a common purpose.",
        "We are four developers who, by working closely together, discovered that our combination of technical skills and focus on user experience is much more powerful when applied as a team, over several years, working together on complex projects.",
        "Through analysis, development and implementation of solutions, we discovered that Xotrik is not just a company—it is the materialization of years of joint learning and the conviction that technology should be a tool that facilitates people's lives and enhances the growth of enterprises.",
        "At Xotrik, we believe that true success lies in listening to our customers, understanding their needs and translating them into technological solutions that make a difference. Each project is a new challenge that we approach with enthusiasm and dedication."
      ]
    });
    return ensureArray(raw);
  }, [t, i18n.language]);

  return (
    <main className="bg-[#0A1828] text-white overflow-x-hidden">
      {/* HERO with parallax effect */}
      <section
        className="relative isolate overflow-hidden"
        style={{ minHeight: "60vh" }}
      >
        <div
          aria-hidden="true"
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(135deg, rgba(10,24,40,.45) 0%, rgba(19,96,106,.35) 50%, rgba(10,24,40,.85) 100%), url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2940') center/cover no-repeat",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0A1828]/20 to-[#0A1828]/80" />
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-8 py-32 md:py-40">
          <motion.h1
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="text-5xl sm:text-7xl font-extrabold tracking-tight"
            style={{ color: GOLD, textShadow: "0 4px 20px rgba(0,0,0,0.5)" }}
          >
            {t("aboutPage.hero.title", { defaultValue: "About Us" })}
          </motion.h1>
          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="mt-6 max-w-3xl text-lg sm:text-xl text-white/90 font-medium"
          >
            {t("aboutPage.hero.subtitle", {
              defaultValue:
                "We combine engineering, data and product thinking to turn vision into measurable impact.",
            })}
          </motion.p>
        </div>
      </section>

      {/* INTRO XOTRIK with improved layout */}
      <section className="relative py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              variants={slideInLeft}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              className="order-2 lg:order-1"
            >
              <div className="rounded-3xl bg-gradient-to-br from-[#13606a]/90 to-[#178582]/80 border border-white/10 p-8 sm:p-12 backdrop-blur-md shadow-[0_20px_60px_rgba(0,0,0,.4)]">
                <h2
                  className="text-4xl sm:text-5xl font-extrabold tracking-tight"
                  style={{ color: GOLD }}
                >
                  {t("aboutPage.intro.title", { defaultValue: "Xotrik" })}
                </h2>
                <div
                  className="mt-4 h-[3px] w-32 rounded-full"
                  style={{ background: `linear-gradient(90deg, ${GOLD}, transparent)` }}
                />
                <p className="mt-8 text-white/95 leading-relaxed text-base sm:text-lg">
                  {t("aboutPage.intro.body", {
                    defaultValue:
                      "At Xotrik, we believe that true success lies in listening to our customers, understanding their needs and translating them into technological solutions that make a difference. Therefore, each project is a new challenge that we approach with enthusiasm and dedication, because we know that behind each one there is an opportunity to generate real and lasting impact.",
                  })}
                </p>
              </div>
            </motion.div>

            <motion.div
              variants={slideInRight}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              className="order-1 lg:order-2"
            >
              <div className="relative rounded-3xl overflow-hidden shadow-[0_30px_80px_rgba(0,0,0,.5)] transform hover:scale-[1.02] transition-transform duration-500">
                <img
                  src="/aboutus.png"
                  alt={t("aboutPage.intro.imageAlt", { defaultValue: "Xotrik team collaboration" })}
                  className="w-full h-full object-cover min-h-[400px]"
                  loading="lazy"
                  draggable={false}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A1828]/60 via-transparent to-transparent" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* MISSION & VISION with background images */}
      <section className="relative py-24 md:py-32 bg-[#081624]">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: t("aboutPage.mission.title", { defaultValue: "Our Mission" }),
                body: t("aboutPage.mission.body", {
                  defaultValue:
                    "To create technological experiences combining state-of-the-art technology, human talent and a culture based on excellence and continuous improvement, focused on the satisfaction and growth of our customers.",
                }),
                image: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2940",
                gradient: "from-[#13606a]/95 to-[#178582]/90"
              },
              {
                title: t("aboutPage.vision.title", { defaultValue: "Our Vision" }),
                body: t("aboutPage.vision.body", {
                  defaultValue:
                    "To be a benchmark in digital evolution, innovating solutions that provide our clients with a high-impact digital experience, driving their growth and sustainable success.",
                }),
                image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2944",
                gradient: "from-[#178582]/95 to-[#13606a]/90"
              },
            ].map((card, i) => (
              <motion.article
                key={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.3 }}
                className="relative rounded-3xl overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,.4)] group"
                style={{ minHeight: "320px" }}
              >
                <div 
                  className="absolute inset-0 transition-transform duration-700 group-hover:scale-110"
                  style={{
                    backgroundImage: `url('${card.image}')`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                  }}
                />
                <div className={`absolute inset-0 bg-gradient-to-br ${card.gradient}`} />
                <div className="relative z-10 p-8 sm:p-10 h-full flex flex-col justify-center">
                  <h4 className="text-3xl sm:text-4xl font-extrabold mb-5" style={{ color: GOLD }}>
                    {card.title}
                  </h4>
                  <p className="text-white/95 leading-relaxed text-lg">{card.body}</p>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* CALLOUT with parallax background */}
      <section
        className="relative isolate py-20 md:py-28"
        style={{
          background:
            "linear-gradient(135deg, rgba(10,24,40,.65) 0%, rgba(19,96,106,.45) 50%, rgba(10,24,40,.85) 100%), url('https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?q=80&w=2940') center/cover no-repeat fixed",
        }}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-8 text-center">
          <motion.h3
            variants={fadeIn}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            className="text-5xl sm:text-6xl font-extrabold leading-tight"
            style={{ color: GOLD, textShadow: "0 4px 30px rgba(0,0,0,0.7)" }}
          >
            {t("aboutPage.grow.title", { defaultValue: "We're here to help you grow." })}
          </motion.h3>
          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            className="mt-6 text-xl text-white/90 max-w-3xl mx-auto"
          >
            Transform your business with cutting-edge technology and expert guidance
          </motion.p>
        </div>
      </section>

      {/* VALUES with icons and hover effects */}
      <section
        id="our-values"
        className="relative py-24 md:py-32 bg-gradient-to-b from-[#081624] to-[#0A1828]"
      >
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2944')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            filter: 'blur(2px)'
          }} />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-8">
          <motion.h3
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            className="text-4xl sm:text-5xl font-extrabold text-center"
            style={{ color: GOLD }}
          >
            {t("aboutPage.values.title", { defaultValue: "Our Values" })}
          </motion.h3>
          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            className="mt-4 text-center text-white/85 text-lg"
          >
            {t("aboutPage.values.subtitle", { defaultValue: "Building your digital experience" })}
          </motion.p>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7"
          >
            {values.map((v, idx) => (
              <motion.article
                key={idx}
                variants={fadeUp}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className="group relative rounded-2xl bg-gradient-to-br from-[#0f2b35]/90 to-[#13606a]/80 border border-white/10 p-7 shadow-[0_15px_50px_rgba(0,0,0,.4)] backdrop-blur-sm overflow-hidden"
              >
                <div className="absolute top-0 right-0 text-5xl opacity-10 group-hover:opacity-20 transition-opacity duration-300">
                  {v?.icon || "✨"}
                </div>
                <h5 className="relative z-10 text-xl font-extrabold" style={{ color: "#3cc3f2" }}>
                  {v?.title}
                </h5>
                <p className="relative z-10 mt-4 text-white/90 leading-relaxed">{v?.desc}</p>
                <div 
                  className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-transparent via-[#3cc3f2] to-transparent w-0 group-hover:w-full transition-all duration-500"
                />
              </motion.article>
            ))}
          </motion.div>
        </div>
      </section>

      {/* BANNER with video background effect */}
      <section
        className="relative isolate py-20 md:py-28"
        style={{
          background:
            "linear-gradient(90deg, rgba(10,24,40,.7) 0%, rgba(19,96,106,.5) 50%, rgba(10,24,40,.85) 100%), url('https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2869') center/cover no-repeat fixed",
        }}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-8">
          <motion.h3
            variants={slideInLeft}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.35 }}
            className="text-5xl sm:text-6xl font-extrabold leading-tight max-w-4xl"
            style={{ color: GOLD, textShadow: "0 6px 40px rgba(0,0,0,0.8)" }}
          >
            {t("aboutPage.banner.title", { defaultValue: "From Collaboration to Value Creation" })}
          </motion.h3>
        </div>
      </section>

      {/* HISTORY with timeline visual */}
      <section className="relative py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              variants={slideInLeft}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
            >
              <div className="rounded-3xl overflow-hidden shadow-[0_30px_80px_rgba(0,0,0,.5)]">
                <img
                  src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=2832"
                  alt="Our journey"
                  className="w-full h-full object-cover min-h-[500px]"
                  loading="lazy"
                />
              </div>
            </motion.div>

            <motion.article
              variants={slideInRight}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              className="rounded-3xl bg-gradient-to-br from-[#13606a]/90 to-[#178582]/80 border border-white/10 p-8 sm:p-10 backdrop-blur-md shadow-[0_20px_60px_rgba(0,0,0,.4)]"
            >
              <h3 className="text-3xl sm:text-4xl font-extrabold" style={{ color: GOLD }}>
                {t("aboutPage.history.title", { defaultValue: "Our Story" })}
              </h3>
              <div className="mt-8 space-y-5 text-white/95 leading-relaxed">
                {historyParas.map((p, i) => (
                  <motion.p 
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 }}
                    viewport={{ once: true }}
                  >
                    {p}
                  </motion.p>
                ))}
              </div>
            </motion.article>
          </div>
        </div>
      </section>

     {/* Team showcase section */}
<section
  id="our-team"
  className="relative py-20 md:py-28 bg-[#081624]"
>
  <div className="max-w-7xl mx-auto px-4 sm:px-8">
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.3 }}
      className="text-center mb-12"
    >
      <h3 className="text-4xl sm:text-5xl font-extrabold" style={{ color: GOLD }}>
        {t("aboutPage.team.title")}
      </h3>
      <p className="mt-4 text-white/80 text-lg max-w-3xl mx-auto">
        {t("aboutPage.team.subtitle")}
      </p>
    </motion.div>

    <div className="relative rounded-3xl overflow-hidden shadow-[0_30px_90px_rgba(0,0,0,.6)]">
      <img
        src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2940"
        alt={t("aboutPage.team.imageAlt")}
        className="w-full h-[500px] object-cover"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#0A1828] via-[#0A1828]/30 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 p-8 sm:p-12">
        <p className="text-white/95 text-lg sm:text-xl font-medium max-w-3xl">
          "Innovation happens when talented people come together with a shared purpose."
        </p>
      </div>
    </div>

    {/* CIO Section */}
    <motion.div
      id="cio-section"
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.3 }}
      className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 items-center bg-gradient-to-r from-[#0f2b35]/90 to-[#13606a]/80 p-8 rounded-3xl shadow-[0_20px_60px_rgba(0,0,0,.4)]"
    >
      <div className="md:col-span-1">
        <img
          src="/us_CIO.jpg"
          alt="CIO of Xotrik"
          className="rounded-2xl object-cover w-full h-full shadow-lg"
          loading="lazy"
        />
      </div>
      <div className="md:col-span-2">
        <h4 className="text-3xl font-extrabold" style={{ color: GOLD }}>
          {t("aboutPage.team.cio.title")}
        </h4>
        <p className="mt-4 text-white/90 text-lg">
          {t("aboutPage.team.cio.text")}
        </p>
      </div>
    </motion.div>
  </div>
</section>


      {/* CTA final with compelling visual */}
      <section 
        className="relative py-20 md:py-28"
        style={{
          background: "linear-gradient(135deg, #0A1828 0%, #13606a 50%, #178582 100%)"
        }}
      >
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0" style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=2940')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            filter: 'blur(1px)'
          }} />
        </div>
        
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-8 text-center">
          <motion.h4 
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="text-4xl sm:text-5xl font-extrabold" 
            style={{ color: GOLD }}
          >
            {t("aboutPage.cta.title", { defaultValue: "Ready to write the next chapter?" })}
          </motion.h4>
          <motion.p 
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="mt-4 text-white/90 text-lg sm:text-xl max-w-3xl mx-auto"
          >
            {t("aboutPage.cta.subtitle", { defaultValue: "Let's turn your vision into measurable impact with secure, scalable technology." })}
          </motion.p>
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <a
              href="/contact"
              className="mt-8 inline-flex items-center justify-center px-8 py-4 rounded-xl font-bold text-lg transform hover:scale-105 transition-all duration-300"
              style={{ 
                backgroundColor: GOLD, 
                color: "#0A1828", 
                boxShadow: "0 15px 40px rgba(212,175,55,.4)",
              }}
            >
              {t("aboutPage.cta.button", { defaultValue: "Start Your Journey" })}
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </motion.div>
        </div>
      </section>
    </main>
  );
}