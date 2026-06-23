import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";

export default function CTA() {
  return (
    <section
      className="py-24 text-center"
      style={{ backgroundColor: "var(--color-deep)" }}
    >
      <div className="max-w-3xl mx-auto px-6">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-xs tracking-[.22em] uppercase mb-4"
          style={{ color: "var(--color-accent)" }}
        >
          Da el primer paso
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="leading-tight mb-6"
          style={{
            fontFamily: "Cormorant Garamond, serif",
            fontWeight: 300,
            fontSize: "clamp(2.2rem, 4vw, 3rem)",
            color: "white",
          }}
        >
          Agenda tu{" "}
          <em style={{ fontStyle: "italic", color: "var(--color-accent)" }}>
            primera sesión
          </em>
        </motion.h2>

        {/* Línea decorativa */}
        <div
          className="w-10 h-px mx-auto mb-6"
          style={{ backgroundColor: "var(--color-accent)" }}
        />

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-sm md:text-base font-light mb-10"
          style={{ color: "rgba(255,255,255,0.75)" }}
        >
          Da el primer paso hacia tu bienestar emocional. Estoy aquí para
          acompañarte en tu proceso.
        </motion.p>

        <motion.a
          href="https://wa.me/5217777891025"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.06, y: -3 }}
          whileTap={{ scale: 0.96 }}
          transition={{ duration: 0.2 }}
          className="inline-flex items-center gap-3 px-10 py-5 text-sm uppercase shadow-xl"
          style={{
            backgroundColor: "var(--color-whatsapp)", // color real de WhatsApp (reconocible)
            color: "white",
            borderRadius: "999px",
            letterSpacing: "0.12em",
            boxShadow: "0 10px 25px rgba(0,0,0,0.2)",
          }}
        >
          <FaWhatsapp style={{ fontSize: "1.3rem" }} />
          Agendar por WhatsApp
        </motion.a>
      </div>
    </section>
  );
}
