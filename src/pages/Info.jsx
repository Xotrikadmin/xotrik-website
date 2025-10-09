import { FaMapMarkerAlt, FaPhone } from "react-icons/fa";
import { motion } from "framer-motion";

export default function Info() {
  return (
    <section id="info" className="py-24 bg-primary text-white text-center">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold text-gold mb-8"
      >
        Contáctanos
      </motion.h2>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-lg mx-auto bg-secondary rounded-xl shadow-xl p-8 space-y-4"
      >
        <div className="flex items-center justify-center space-x-4">
          <FaMapMarkerAlt className="text-gold text-xl" />
          <p>San Jose</p>
        </div>
        <div className="flex items-center justify-center space-x-4">
          <FaPhone className="text-gold text-xl" />
          <p>+506 8919 0811</p>
        </div>
      </motion.div>
    </section>
  );
}
