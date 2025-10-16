// import React, { useState } from "react";
// import { motion } from "framer-motion";
// import { Toaster, toast } from "sonner";
// import {
//   Send,
//   Mail,
//   MessageCircle,bg-gradient-to-b from-[#0A1828] via-[#114F55] to-[#178582]
//   User2,
//   Building2,
//   Phone,
//   Loader2,
// } from "lucide-react";
// import { DotLoader } from "react-spinners";

// const brand = {
//   gold: "#D4AF37",
// };

// const WHATSAPP_PREFIX = "+506"; // Cambia esto si estás en otro país

// export default function Contact() {
//   const [mode, setMode] = useState("whatsapp");
//   const [sending, setSending] = useState(false);
//   const [form, setForm] = useState({
//     name: "",
//     company: "",
//     email: "",
//     phone: "",
//     message: "",
//   });

//   const isValid =
//     form.name.trim() !== "" &&
//     form.company.trim() !== "" &&
//     form.message.trim() !== "" &&
//     (mode === "whatsapp"
//       ? form.phone.trim() !== ""
//       : form.email.trim() !== "");

//   const whatsappUrl = () => {
//     const msg = `Hola, mi nombre es ${form.name} de ${form.company}. %0A${form.message}%0AContacto: ${form.phone}`;
//     return `https://wa.me/${WHATSAPP_PREFIX.replace("+", "")}?text=${msg}`;
//   };

//   const sendEmail = async (e) => {
//     e.preventDefault();
//     setSending(true);
//     try {
//       await new Promise((res) => setTimeout(res, 2000)); // Simula envío
//       toast.success("Mensaje enviado correctamente. ¡Gracias!");
//       setForm({ name: "", company: "", email: "", phone: "", message: "" });
//     } catch (err) {
//       toast.error("Hubo un error al enviar el mensaje.");
//     } finally {
//       setSending(false);
//     }
//   };

//   return (
//     <section
//       className="min-h-screen py-16 px-4 flex flex-col items-center justify-center bg-gradient-to-b from-[#178582] via-[#114F55] to-[#0A1828]"
//       aria-label="Formulario de contacto"
//     >
//       <Toaster position="top-center" richColors closeButton expand />

//       <motion.div
//         className="w-full max-w-2xl bg-gradient-to-br from-[#ffffff0c] via-[#ffffff10] to-[#ffffff0a] rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.35)] p-8 sm:p-10 md:p-14 border border-white/10 backdrop-blur-2xl"
//         initial={{ opacity: 0, y: 50, scale: 0.98 }}
//         animate={{ opacity: 1, y: 0, scale: 1 }}
//         transition={{ duration: 0.6, type: "spring" }}
//       >
//         <motion.h2
//           className="flex items-center gap-3 text-3xl md:text-4xl font-black tracking-tight mb-4"
//           style={{ color: brand.gold }}
//           initial={{ opacity: 0, x: -30 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ delay: 0.1, duration: 0.6 }}
//         >
//           <Send className="text-gold" /> Contáctanos
//         </motion.h2>

//         <p className="mb-8 text-white/80 font-medium">
//           ¿Tienes una consulta, quieres cotizar o colaborar? Escríbenos directo a WhatsApp o por Email.
//         </p>

//         <div className="flex gap-3 mb-8 flex-col sm:flex-row">
//           <button
//             className={`flex-1 flex items-center justify-center gap-2 rounded-xl px-4 py-3 font-bold transition text-lg shadow-sm ${
//               mode === "whatsapp"
//                 ? "bg-[#25D366]/90 text-[#0A1828] border-2 border-[#25D366] ring-2 ring-[#25D366]/30 scale-105"
//                 : "bg-white/10 text-white border-2 border-transparent hover:border-[#25D366]/60"
//             }`}
//             onClick={() => setMode("whatsapp")}
//             type="button"
//           >
//             <MessageCircle className="text-2xl" /> WhatsApp
//           </button>
//           <button
//             className={`flex-1 flex items-center justify-center gap-2 rounded-xl px-4 py-3 font-bold transition text-lg shadow-sm ${
//               mode === "email"
//                 ? "bg-gold/90 text-[#0A1828] border-2 border-gold ring-2 ring-gold/20 scale-105"
//                 : "bg-white/10 text-white border-2 border-transparent hover:border-gold/40"
//             }`}
//             onClick={() => setMode("email")}
//             type="button"
//           >
//             <Mail className="text-2xl" /> Email
//           </button>
//         </div>

//         <form onSubmit={mode === "email" ? sendEmail : undefined} className="space-y-6">
//           <div>
//             <label className="block mb-1 text-white/80 font-bold" htmlFor="name">
//               <User2 className="inline mr-1 text-gold" size={19} /> Nombre
//             </label>
//             <input
//               id="name"
//               type="text"
//               required
//               placeholder="Tu nombre completo"
//               value={form.name}
//               onChange={(e) => setForm({ ...form, name: e.target.value })}
//               disabled={sending}
//               className="w-full px-4 py-3 rounded-xl bg-white/90 text-[#0A1828] font-semibold shadow-md placeholder:text-gray-600 focus:outline-none focus:ring-2 focus:ring-gold"
//             />
//           </div>

//           <div>
//             <label className="block mb-1 text-white/80 font-bold" htmlFor="company">
//               <Building2 className="inline mr-1 text-gold" size={19} /> Empresa / Organización
//             </label>
//             <input
//               id="company"
//               type="text"
//               required
//               placeholder="Nombre de tu empresa"
//               value={form.company}
//               onChange={(e) => setForm({ ...form, company: e.target.value })}
//               disabled={sending}
//               className="w-full px-4 py-3 rounded-xl bg-white/90 text-[#0A1828] font-semibold shadow-md placeholder:text-gray-600 focus:outline-none focus:ring-2 focus:ring-gold"
//             />
//           </div>

//           {mode === "email" && (
//             <div>
//               <label className="block mb-1 text-white/80 font-bold" htmlFor="email">
//                 <Mail className="inline mr-1 text-gold" size={18} /> Email
//               </label>
//               <input
//                 id="email"
//                 type="email"
//                 required
//                 placeholder="tucorreo@dominio.com"
//                 value={form.email}
//                 onChange={(e) => setForm({ ...form, email: e.target.value })}
//                 disabled={sending}
//                 className="w-full px-4 py-3 rounded-xl bg-white/90 text-[#0A1828] font-semibold shadow-md placeholder:text-gray-600 focus:outline-none focus:ring-2 focus:ring-gold"
//               />
//             </div>
//           )}

//           {mode === "whatsapp" && (
//             <div>
//               <label className="block mb-1 text-white/80 font-bold" htmlFor="phone">
//                 <Phone className="inline mr-1 text-gold" size={18} /> Teléfono
//               </label>
//               <input
//                 id="phone"
//                 type="tel"
//                 required
//                 placeholder="+506 8919 0811"
//                 value={form.phone}
//                 onChange={(e) => setForm({ ...form, phone: e.target.value })}
//                 disabled={sending}
//                 className="w-full px-4 py-3 rounded-xl bg-white/90 text-[#0A1828] font-semibold shadow-md placeholder:text-gray-600 focus:outline-none focus:ring-2 focus:ring-[#25D366]"
//               />
//             </div>
//           )}

//           <div>
//             <label className="block mb-1 text-white/80 font-bold" htmlFor="message">
//               <Loader2 className="inline mr-1 text-gold" size={18} /> Mensaje
//             </label>
//             <textarea
//               id="message"
//               required
//               placeholder="Escribe tu consulta, duda o mensaje aquí..."
//               value={form.message}
//               onChange={(e) => setForm({ ...form, message: e.target.value })}
//               disabled={sending}
//               className="w-full px-4 py-3 rounded-xl bg-white/90 text-[#0A1828] font-semibold shadow-md placeholder:text-gray-600 focus:outline-none focus:ring-2 focus:ring-gold resize-none min-h-[96px]"
//             />
//           </div>

//           {mode === "whatsapp" ? (
//             <motion.a
//               href={isValid ? whatsappUrl() : "#"}
//               target="_blank"
//               rel="noopener noreferrer"
//               className={`flex items-center justify-center gap-2 w-full py-3 rounded-xl text-xl font-bold shadow-lg transition-all duration-200 ${
//                 isValid && !sending
//                   ? "bg-[#25D366] text-[#0A1828] hover:bg-[#22bb57] cursor-pointer"
//                   : "bg-gray-400/60 text-gray-200 pointer-events-none"
//               }`}
//               style={{ boxShadow: isValid ? "0 4px 18px 2px #25D36644" : "none" }}
//               whileHover={isValid && !sending ? { scale: 1.04 } : {}}
//             >
//               <MessageCircle className="text-2xl" /> Enviar por WhatsApp
//             </motion.a>
//           ) : (
//             <button
//               type="submit"
//               disabled={!isValid || sending}
//               className={`flex items-center justify-center gap-2 w-full py-3 rounded-xl text-xl font-bold shadow-lg transition-all duration-200 ${
//                 isValid && !sending
//                   ? "bg-gold text-[#0A1828] hover:bg-[#fff7e0] cursor-pointer"
//                   : "bg-gray-400/60 text-gray-200 pointer-events-none"
//               }`}
//               style={{ boxShadow: isValid ? "0 4px 18px 2px #D4AF3744" : "none" }}
//             >
//               {sending ? (
//                 <>
//                   <DotLoader color={brand.gold} size={28} /> Enviando...
//                 </>
//               ) : (
//                 <>
//                   <Mail className="text-2xl" /> Enviar por Email
//                 </>
//               )}
//             </button>
//           )}
//         </form>
//       </motion.div>
//     </section>
//   );
// }
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Toaster, toast } from "sonner";
import {
  Send,
  Mail,
  MessageCircle,
  User2,
  Building2,
  Phone,
  Loader2,
} from "lucide-react";
import { DotLoader } from "react-spinners";

const brand = {
  gold: "#D4AF37",
};

const WHATSAPP_PREFIX = "+506"; // Cambia según tu país

export default function Contact() {
  const [mode, setMode] = useState("whatsapp");
  const [sending, setSending] = useState(false);
  const [form, setForm] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    message: "",
  });

  const isValid =
    form.name.trim() !== "" &&
    form.company.trim() !== "" &&
    form.message.trim() !== "" &&
    (mode === "whatsapp"
      ? form.phone.trim() !== ""
      : form.email.trim() !== "");

  const whatsappUrl = () => {
    const msg = `Hola, mi nombre es ${form.name} de ${form.company}. %0A${form.message}%0AContacto: ${form.phone}`;
    return `https://wa.me/${WHATSAPP_PREFIX.replace("+", "")}?text=${msg}`;
  };

  const sendEmail = async (e) => {
    e.preventDefault();
    setSending(true);
    try {
      await new Promise((res) => setTimeout(res, 2000)); // Simula envío
      toast.success("Mensaje enviado correctamente. ¡Gracias!");
      setForm({ name: "", company: "", email: "", phone: "", message: "" });
    } catch (err) {
      toast.error("Hubo un error al enviar el mensaje.");
    } finally {
      setSending(false);
    }
  };

  return (
    <section
      className="min-h-screen py-16 px-4 flex flex-col items-center justify-center bg-gradient-to-b from-[#0A1828] via-[#114F55] to-[#178582]"
      aria-label="Formulario de contacto"
    >
      <Toaster position="top-center" richColors closeButton expand />

      <motion.div
        className="w-full max-w-2xl bg-gradient-to-br from-[#ffffff0c] via-[#ffffff10] to-[#ffffff0a] rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.35)] p-8 sm:p-10 md:p-14 border border-white/10 backdrop-blur-2xl"
        initial={{ opacity: 0, y: 50, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.6, type: "spring" }}
      >
        <motion.h2
          className="flex items-center gap-3 text-3xl md:text-4xl font-black tracking-tight mb-4"
          style={{ color: brand.gold }}
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.1, duration: 0.6 }}
        >
          <Send className="text-gold" /> Contáctanos
        </motion.h2>

        <p className="mb-8 text-white/80 font-medium">
          ¿Tienes una consulta, quieres cotizar o colaborar? Escríbenos directo a WhatsApp o por Email.
        </p>

        {/* Toggle de método */}
        <div className="flex gap-3 mb-8 flex-col sm:flex-row">
          <button
            className={`flex-1 flex items-center justify-center gap-2 rounded-xl px-4 py-3 font-bold transition text-lg shadow-sm ${
              mode === "whatsapp"
                ? "bg-[#25D366]/90 text-[#0A1828] border-2 border-[#25D366] ring-2 ring-[#25D366]/30 scale-105"
                : "bg-white/10 text-white border-2 border-transparent hover:border-[#25D366]/60"
            }`}
            onClick={() => setMode("whatsapp")}
            type="button"
          >
            <MessageCircle className="text-2xl" /> WhatsApp
          </button>
          <button
            className={`flex-1 flex items-center justify-center gap-2 rounded-xl px-4 py-3 font-bold transition text-lg shadow-sm ${
              mode === "email"
                ? "bg-gold/90 text-[#0A1828] border-2 border-gold ring-2 ring-gold/20 scale-105"
                : "bg-white/10 text-white border-2 border-transparent hover:border-gold/40"
            }`}
            onClick={() => setMode("email")}
            type="button"
          >
            <Mail className="text-2xl" /> Email
          </button>
        </div>

        {/* Formulario */}
        <form onSubmit={mode === "email" ? sendEmail : undefined} className="space-y-6">
          <div>
            <label className="block mb-1 text-white/80 font-bold" htmlFor="name">
              <User2 className="inline mr-1 text-gold" size={19} /> Nombre
            </label>
            <input
              id="name"
              type="text"
              required
              placeholder="Tu nombre completo"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              disabled={sending}
              className="w-full px-4 py-3 rounded-xl bg-white/90 text-[#0A1828] font-semibold shadow-md placeholder:text-gray-600 focus:outline-none focus:ring-2 focus:ring-gold"
            />
          </div>

          <div>
            <label className="block mb-1 text-white/80 font-bold" htmlFor="company">
              <Building2 className="inline mr-1 text-gold" size={19} /> Empresa / Organización
            </label>
            <input
              id="company"
              type="text"
              required
              placeholder="Nombre de tu empresa"
              value={form.company}
              onChange={(e) => setForm({ ...form, company: e.target.value })}
              disabled={sending}
              className="w-full px-4 py-3 rounded-xl bg-white/90 text-[#0A1828] font-semibold shadow-md placeholder:text-gray-600 focus:outline-none focus:ring-2 focus:ring-gold"
            />
          </div>

          {mode === "email" && (
            <div>
              <label className="block mb-1 text-white/80 font-bold" htmlFor="email">
                <Mail className="inline mr-1 text-gold" size={18} /> Email
              </label>
              <input
                id="email"
                type="email"
                required
                placeholder="tucorreo@dominio.com"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                disabled={sending}
                className="w-full px-4 py-3 rounded-xl bg-white/90 text-[#0A1828] font-semibold shadow-md placeholder:text-gray-600 focus:outline-none focus:ring-2 focus:ring-gold"
              />
            </div>
          )}

          {mode === "whatsapp" && (
            <div>
              <label className="block mb-1 text-white/80 font-bold" htmlFor="phone">
                <Phone className="inline mr-1 text-gold" size={18} /> Teléfono
              </label>
              <input
                id="phone"
                type="tel"
                required
                placeholder="+506 8919 0811"
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
                disabled={sending}
                className="w-full px-4 py-3 rounded-xl bg-white/90 text-[#0A1828] font-semibold shadow-md placeholder:text-gray-600 focus:outline-none focus:ring-2 focus:ring-[#25D366]"
              />
            </div>
          )}

          <div>
            <label className="block mb-1 text-white/80 font-bold" htmlFor="message">
              <Loader2 className="inline mr-1 text-gold" size={18} /> Mensaje
            </label>
            <textarea
              id="message"
              required
              placeholder="Escribe tu consulta, duda o mensaje aquí..."
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              disabled={sending}
              className="w-full px-4 py-3 rounded-xl bg-white/90 text-[#0A1828] font-semibold shadow-md placeholder:text-gray-600 focus:outline-none focus:ring-2 focus:ring-gold resize-none min-h-[96px]"
            />
          </div>

          {/* Botón final */}
          {mode === "whatsapp" ? (
            <motion.a
              href={isValid ? whatsappUrl() : "#"}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center justify-center gap-2 w-full py-3 rounded-xl text-xl font-bold shadow-lg transition-all duration-200 ${
                isValid && !sending
                  ? "bg-[#25D366] text-[#0A1828] hover:bg-[#22bb57] cursor-pointer"
                  : "bg-gray-400/60 text-gray-200 pointer-events-none"
              }`}
              style={{ boxShadow: isValid ? "0 4px 18px 2px #25D36644" : "none" }}
              whileHover={isValid && !sending ? { scale: 1.04 } : {}}
            >
              <MessageCircle className="text-2xl" /> Enviar por WhatsApp
            </motion.a>
          ) : (
            <button
              type="submit"
              disabled={!isValid || sending}
              className={`flex items-center justify-center gap-2 w-full py-3 rounded-xl text-xl font-bold shadow-lg transition-all duration-200 ${
                isValid && !sending
                  ? "bg-gold text-[#0A1828] hover:bg-[#fff7e0] cursor-pointer"
                  : "bg-gray-400/60 text-gray-200 pointer-events-none"
              }`}
              style={{ boxShadow: isValid ? "0 4px 18px 2px #D4AF3744" : "none" }}
            >
              {sending ? (
                <>
                  <DotLoader color={brand.gold} size={28} /> Enviando...
                </>
              ) : (
                <>
                  <Mail className="text-2xl" /> Enviar por Email
                </>
              )}
            </button>
          )}
        </form>
      </motion.div>
    </section>
  );
}
