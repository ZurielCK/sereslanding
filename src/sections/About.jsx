import { motion } from "framer-motion"
import sobre from "../assets/images/yadiapp7.jpeg"

const stats = [
  { num: "10+", label: "Años de experiencia" },
  { num: "500+", label: "Pacientes atendidos" },
  { num: "98%", label: "Satisfacción" },
]

const enfoques = ["Cognitivo-conductual", "Humanista", "Mindfulness"]

export default function About() {
  return (
    <section id="about" className="py-24" style={{ backgroundColor: "var(--color-cream)" }}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">

          {/* Imagen */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* Fondo decorativo desplazado */}
            <div
              className="absolute top-4 left-4 right-0 bottom-0"
              style={{
                backgroundColor: "var(--color-warm)",
                borderRadius: "0 60px 0 60px",
              }}
            />

            <img
              src={sobre}
              alt="Psicóloga clínica especialista en bienestar emocional, Cuernavaca"
              width="600"
              height="480"
              loading="lazy"
              className="relative w-full object-cover object-top"
              style={{
                borderRadius: "0 60px 0 60px",
                height: "480px",
              }}
            />

            {/* Badge flotante */}
            <div
              className="absolute bottom-8 -right-4 md:-right-6 py-3 px-4 shadow-md"
              style={{
                backgroundColor: "white",
                borderLeft: "3px solid var(--color-accent)",
              }}
            >
              <p className="text-xs tracking-widest uppercase mb-1" style={{ color: "var(--color-accent)" }}>
                Consulta online
              </p>
              <p className="text-sm" style={{ color: "var(--color-deep)" }}>
                Disponible para todo México
              </p>
            </div>
          </motion.div>

          {/* Texto */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <p className="text-xs tracking-[.22em] uppercase mb-3" style={{ color: "var(--color-accent)" }}>
              Sobre la psicóloga
            </p>

            <h2
              className="mb-5 leading-tight"
              style={{
                fontFamily: "Cormorant Garamond, serif",
                fontWeight: 300,
                fontSize: "clamp(2.2rem, 4vw, 3rem)",
                color: "var(--color-deep)",
                lineHeight: 1.05,
              }}
            >
              Un espacio de{" "}
              <em style={{ fontStyle: "italic", color: "var(--color-accent)" }}>confianza</em>
              {" "}y<br />transformación
            </h2>

            {/* Línea decorativa */}
            <div className="w-9 h-px mb-5" style={{ backgroundColor: "var(--color-accent)" }} />

            <p className="text-sm leading-relaxed font-light mb-3" style={{ color: "var(--color-muted)" }}>
              Soy psicóloga clínica especializada en bienestar emocional, ansiedad y desarrollo
              personal. Mi objetivo es ofrecer un espacio seguro donde puedas explorar tus
              pensamientos, comprender tus emociones y construir una vida más plena.
            </p>

            <p className="text-sm leading-relaxed font-light mb-5" style={{ color: "var(--color-muted)" }}>
              Trabajo con enfoques terapéuticos modernos que te ayudan a desarrollar
              herramientas para afrontar los desafíos emocionales del día a día.
            </p>

            {/* Enfoques */}
            <div className="flex flex-wrap gap-2 mb-7">
              {enfoques.map((e) => (
                <span
                  key={e}
                  className="text-xs tracking-widest uppercase px-3 py-1.5 border"
                  style={{ borderColor: "var(--color-accent)", color: "var(--color-accent)" }}
                >
                  {e}
                </span>
              ))}
            </div>

            {/* Stats */}
            <div
              className="grid grid-cols-3 gap-px mb-7"
              style={{ backgroundColor: "var(--color-warm)" }}
            >
              {stats.map((s) => (
                <div
                  key={s.label}
                  className="py-4 px-3"
                  style={{ backgroundColor: "var(--color-cream)" }}
                >
                  <p
                    className="leading-none mb-1"
                    style={{
                      fontFamily: "Cormorant Garamond, serif",
                      fontSize: "2rem",
                      fontWeight: 500,
                      color: "var(--color-deep)",
                    }}
                  >
                    {s.num}
                  </p>
                  <p
                    className="text-xs tracking-wider uppercase font-light"
                    style={{ color: "var(--color-muted)" }}
                  >
                    {s.label}
                  </p>
                </div>
              ))}
            </div>

            {/* CTA */}
            <motion.a
              href="#contacto"
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
          </motion.div>

        </div>
      </div>
    </section>
  )
}