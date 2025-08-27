import React from "react";

const TESTIMONIALS = [
  {
    name: "Ana Ramírez",
    role: "CTO, Global Retail",
    avatar: "https://randomuser.me/api/portraits/women/68.jpg", // avatar genérico
    quote: "El mejor partner tecnológico que hemos tenido. Cumplieron cada objetivo y nos sorprendieron con soluciones innovadoras.",
  },
  {
    name: "Luis Fernández",
    role: "Product Owner, FinTech LATAM",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    quote: "El equipo de Xotrik siempre estuvo disponible, resolvió rápido y nos ayudó a transformar nuestro producto digital.",
  },
  {
    name: "Visión Xotrik",
    role: "Nuestro compromiso",
    avatar: "https://avatars.githubusercontent.com/u/9919?s=200&v=4", // avatar ilustrativo tipo logo o AI
    quote: "En Xotrik creemos en la excelencia, la innovación constante y el acompañamiento cercano a cada cliente.",
  },
];

export default function TestimonialsSection() {
  return (
    <section className="py-24 bg-[#181c24]">
      <h2 className="text-4xl font-black text-center mb-14 text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] via-yellow-200 to-[#D4AF37]">
        Testimonios
      </h2>
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row gap-8 justify-center px-4">
        {TESTIMONIALS.map(({ name, role, avatar, quote }, i) => (
          <div key={i} className="flex flex-col items-center bg-[#23293c]/80 p-8 rounded-2xl shadow-lg w-full md:w-1/3 hover:-translate-y-2 transition-all">
            <img src={avatar} alt={name} className="w-16 h-16 rounded-full object-cover mb-3 bg-[#161b29]" />
            <p className="text-lg italic text-slate-100 text-center mb-4">"{quote}"</p>
            <div className="flex flex-col items-center">
              <span className="font-bold text-[#D4AF37]">{name}</span>
              <span className="text-sm text-slate-400">{role}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
