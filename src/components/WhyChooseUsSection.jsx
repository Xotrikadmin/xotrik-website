import React from "react";
import { motion } from "framer-motion";
import {
  GraduationCap,
  Rocket,
  AlarmClock,
  Handshake,
} from "lucide-react";

const ADVANTAGES = [
  {
    title: "Equipo Senior Certificado",
    desc: "Ingenieros senior, certificados y con experiencia real en proyectos globales.",
    icon: GraduationCap,
  },
  {
    title: "Innovación Continua",
    desc: "Adoptamos tecnologías emergentes para garantizar soluciones futuras y sostenibles.",
    icon: Rocket,
  },
  {
    title: "Ejecución Precisa y Puntual",
    desc: "95% de nuestros proyectos son entregados antes del plazo y bajo presupuesto.",
    icon: AlarmClock,
  },
  {
    title: "Soporte Dedicado",
    desc: "Acompañamos a nuestros clientes desde el inicio hasta el éxito post-lanzamiento.",
    icon: Handshake,
  },
];

export default function WhyChooseUsSection() {
  return (
    <section className="py-28 px-6 bg-gradient-to-b from-[#0A1828] via-[#0f2236] to-[#178582]/20">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-4xl md:text-5xl font-extrabold text-center mb-16 text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] via-yellow-200 to-[#D4AF37] drop-shadow-[0_2px_30px_rgba(212,175,55,0.3)]"
      >
        ¿Por qué elegir Xotrik?
      </motion.h2>

      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-10">
        {ADVANTAGES.map(({ title, desc, icon: Icon }, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40, scale: 0.97 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.15, duration: 0.6 }}
            whileHover={{
              scale: 1.03,
              boxShadow: "0 0 28px #D4AF3760, 0 0 60px #17858240",
            }}
            className="bg-[#161c2e]/80 border border-[#D4AF37]/20 backdrop-blur-sm rounded-2xl p-7 shadow-[0_0_24px_#0a182820] transition-all"
          >
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-xl bg-gradient-to-br from-[#D4AF37]/10 to-[#ffffff05] border border-[#D4AF37]/20 shadow-inner">
                <Icon size={36} className="text-[#D4AF37]" />
              </div>
              <div>
                <h4 className="text-xl font-extrabold text-[#D4AF37] mb-1 tracking-wide">
                  {title}
                </h4>
                <p className="text-slate-200 leading-relaxed font-light">
                  {desc}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
