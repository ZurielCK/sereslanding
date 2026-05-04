import { motion } from "framer-motion"
import terap from "../assets/images/terapia.png"

export default function Hero() {
  return (
    <section
      id="inicio"
      className="pt-32 pb-20"
      style={{ backgroundColor: "var(--color-cream)" }}
    >
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">

        {/* Texto */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          <p
            className="text-xs tracking-[.22em] uppercase mb-4"
            style={{ color: "#8A9E7C" }}
          >
            Psicoterapia profesional
          </p>

          <h1
            className="leading-tight mb-6"
            style={{
              fontFamily: "Cormorant Garamond, serif",
              fontWeight: 300,
              fontSize: "clamp(2.5rem, 5vw, 3.8rem)",
              color: "var(--color-deep)",
              lineHeight: 1.05,
            }}
          >
            Encuentra{" "}
            <em style={{ fontStyle: "italic", color: "#8A9E7C" }}>
              equilibrio emocional
            </em>
          </h1>

          {/* Línea decorativa */}
          <div className="w-10 h-px mb-6" style={{ backgroundColor: "#8A9E7C" }} />

          <p
            className="text-sm md:text-base leading-relaxed font-light mb-8"
            style={{ color: "var(--color-muted)" }}
          >
            Terapia psicológica profesional para ayudarte a comprender tus
            emociones, reducir la ansiedad y construir una vida con mayor
            bienestar y claridad.
          </p>

          <div className="flex flex-wrap gap-4">
            <motion.a
              href="https://wa.me/5217777891025"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ x: 4 }}
              transition={{ duration: 0.2 }}
              className="inline-flex items-center gap-3 px-7 py-3.5 text-xs tracking-widest uppercase"
              style={{
                backgroundColor: "var(--color-deep)",
                color: "white",
                letterSpacing: "0.14em",
              }}
            >
              Agendar consulta
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </motion.a>

            <motion.a
              href="#about"
              whileHover={{ x: 4 }}
              transition={{ duration: 0.2 }}
              className="inline-flex items-center gap-3 px-7 py-3.5 text-xs tracking-widest uppercase border"
              style={{
                borderColor: "#8A9E7C",
                color: "#8A9E7C",
                letterSpacing: "0.14em",
              }}
            >
              Saber más
            </motion.a>
          </div>
        </motion.div>

        {/* Imagen */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="relative"
        >
          {/* Fondo decorativo */}
          <div
            className="absolute top-4 left-4 right-0 bottom-0"
            style={{
              backgroundColor: "var(--color-warm)",
              borderRadius: "0 60px 0 60px",
            }}
          />

          <img
            src={terap}
            alt="Psicóloga"
            className="relative w-full object-cover"
            style={{
              borderRadius: "0 60px 0 60px",
              height: "500px",
            }}
          />

          {/* Badge */}
          <div
            className="absolute bottom-8 -left-4 md:-left-6 py-3 px-4 shadow-md"
            style={{
              backgroundColor: "white",
              borderLeft: "3px solid #8A9E7C",
            }}
          >
            <p className="text-xs tracking-widest uppercase mb-1" style={{ color: "#8A9E7C" }}>
              Atención personalizada
            </p>
            <p className="text-sm" style={{ color: "var(--color-deep)" }}>
              Presencial y en línea
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  )
}