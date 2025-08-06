import React from "react";
import { FaChartBar, FaCheckCircle } from "react-icons/fa";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function ServiceDataScience() {
  return (
    <section className="min-h-screen py-20 px-4 md:px-10 bg-gradient-to-br from-fuchsia-900 via-[#310624] to-rose-900 flex flex-col items-center">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="max-w-3xl mx-auto text-center"
      >
        <span className="inline-flex items-center gap-2 text-fuchsia-400 font-bold text-sm uppercase tracking-widest mb-2">
          <FaChartBar className="text-2xl" /> Data Science
        </span>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 to-rose-500 drop-shadow mb-4">
          Data Science, Analítica & BI
        </h1>
        <p className="text-lg text-slate-200 mb-8">
          Transformamos datos en valor de negocio real: dashboards, analítica predictiva, visualización avanzada y business intelligence. Soluciones de datos para empresas de cualquier tamaño, con foco en impacto y resultados.
        </p>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.15 }}
        className="w-full max-w-4xl bg-slate-900/80 rounded-2xl p-8 shadow-xl mb-10 grid md:grid-cols-2 gap-10"
      >
        <div>
          <h2 className="text-xl font-bold text-fuchsia-400 mb-4">¿Qué te ofrecemos?</h2>
          <ul className="list-disc pl-5 space-y-2 text-slate-100 text-base">
            <li>Dashboards, reporting y visualización avanzada.</li>
            <li>Modelos analíticos: predicción, clustering, segmentación.</li>
            <li>Data warehouses, ETL y procesamiento de big data.</li>
            <li>Integración de datos desde múltiples fuentes.</li>
          </ul>
        </div>
        <div>
          <h2 className="text-xl font-bold text-fuchsia-400 mb-4">Ventajas clave</h2>
          <ul className="space-y-2">
            <li className="flex items-center gap-2"><FaCheckCircle className="text-green-400" /> Insights accionables para todas las áreas.</li>
            <li className="flex items-center gap-2"><FaCheckCircle className="text-green-400" /> Rápida entrega de dashboards y modelos.</li>
            <li className="flex items-center gap-2"><FaCheckCircle className="text-green-400" /> Adaptación total a tu stack y negocio.</li>
            <li className="flex items-center gap-2"><FaCheckCircle className="text-green-400" /> Soporte y acompañamiento experto.</li>
          </ul>
        </div>
      </motion.div>
      <div className="flex flex-col sm:flex-row gap-5">
        <Link
          to="/contact"
          className="px-8 py-3 rounded-lg bg-fuchsia-600 hover:bg-fuchsia-500 text-white text-lg font-bold shadow-md transition"
        >
          Agenda una demo de Data
        </Link>
        <Link
          to="/services"
          className="px-8 py-3 rounded-lg border border-fuchsia-400 text-fuchsia-200 font-semibold hover:bg-fuchsia-700/30 transition"
        >
          Volver a Servicios
        </Link>
      </div>
    </section>
  );
}
