import React from "react";
import { Helmet } from "react-helmet";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { FaCookieBite, FaShieldAlt, FaEnvelopeOpenText } from "react-icons/fa";

export default function CookiesPolicy() {
  const navigate = useNavigate();

  const handleAccept = () => {
    localStorage.setItem("cookiesAccepted", "true");
    navigate("/");
  };

  return (
    <section className="min-h-screen px-6 py-20 bg-gradient-to-br from-[#0A1828] to-[#112233] text-white max-w-5xl mx-auto">
      <Helmet>
        <title>Política de Cookies | Xotrik</title>
        <meta name="description" content="Consulta la política de cookies de Xotrik y cómo protegemos tu privacidad mientras navegas." />
      </Helmet>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <header className="text-center mb-12">
          <FaCookieBite className="mx-auto text-6xl text-[#D4AF37] mb-4 animate-pulse" />
          <h1 className="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] via-yellow-200 to-[#D4AF37]">
            Política de Cookies
          </h1>
          <p className="mt-4 text-white/70 max-w-3xl mx-auto">
            En Xotrik, la privacidad de nuestros usuarios es una prioridad. Descubre cómo utilizamos cookies para mejorar tu experiencia.
          </p>
        </header>

        <div className="space-y-10">
          <Section title="¿Qué son las cookies?">
            Una cookie es un archivo pequeño que un sitio web almacena en tu dispositivo. Permite recordar tus preferencias, mejorar tu navegación y ofrecer contenido relevante.
          </Section>

          <Section title="¿Qué tipo de cookies usamos?">
            <ul className="list-disc list-inside text-white/80 space-y-4">
              <li><strong>Necesarias:</strong> Esenciales para el funcionamiento seguro del sitio.</li>
              <li><strong>Rendimiento:</strong> Analizan el uso del sitio para mejorar su funcionalidad.</li>
              <li><strong>Personalización:</strong> Guardan tus preferencias para una experiencia personalizada.</li>
              <li><strong>Marketing (opcional):</strong> Muestran contenido relevante basado en tus intereses.</li>
            </ul>
          </Section>

          <Section title="¿Cómo puedes gestionarlas?">
            Puedes configurar tu navegador para aceptar, bloquear o eliminar cookies. Al desactivarlas, algunas funcionalidades podrían verse afectadas.
          </Section>

          <Section title="Cookies de terceros">
            Utilizamos servicios como Google Analytics y Meta Pixel, sujetos a sus propias políticas. Puedes revisar sus términos en sus sitios oficiales.
          </Section>

          <Section title="Actualizaciones">
            Esta política puede cambiar para reflejar mejoras o requerimientos legales. Última actualización: {new Date().toLocaleDateString("es-CR")}.
          </Section>

          <Section title="Contacto">
            <p className="flex items-center gap-2">
              <FaEnvelopeOpenText className="text-[#D4AF37]" />
              Para consultas, escríbenos a:
              <a
                href="mailto:contact@xotrik.com"
                className="text-[#D4AF37] underline hover:text-yellow-300"
              >
                contact@xotrik.com
              </a>
            </p>
          </Section>
        </div>

        <div className="mt-16 flex justify-center">
          <button
            onClick={handleAccept}
            className="px-8 py-4 bg-[#D4AF37] text-[#0A1828] font-bold rounded-xl shadow-lg hover:scale-105 hover:shadow-[0_0_20px_rgba(212,175,55,0.4)] transition-all duration-200"
          >
            Aceptar y continuar
          </button>
        </div>
      </motion.div>
    </section>
  );
}

function Section({ title, children }) {
  return (
    <section className="border-l-4 border-[#D4AF37] pl-5">
      <h2 className="text-2xl font-bold text-[#D4AF37] mb-3">{title}</h2>
      <div className="text-white/80 leading-relaxed">{children}</div>
    </section>
  );
}
