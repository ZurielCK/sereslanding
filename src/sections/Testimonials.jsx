import { useState, useEffect, useRef, useCallback } from "react"
import { motion, AnimatePresence } from "framer-motion"

const testimonials = [
  {
    name: "Laura",
    tag: "Ansiedad · Paciente presencial",
    avatarColor: "bg-emerald-50 text-emerald-700",
    text: "La terapia me ayudó a comprender mis emociones y mejorar mi bienestar de una forma que nunca creí posible. Es el espacio más honesto que he tenido conmigo misma.",
  },
  {
    name: "Carlos",
    tag: "Estrés · Paciente online",
    avatarColor: "bg-orange-50 text-orange-700",
    text: "Un espacio seguro para hablar y encontrar herramientas concretas para la ansiedad. Aprendí a reconocer mis patrones y ahora tengo recursos reales para manejarlos.",
  },
  {
    name: "María",
    tag: "Autoestima · Paciente presencial",
    avatarColor: "bg-violet-50 text-violet-700",
    text: "Me ayudó muchísimo en mi crecimiento personal y en mi relación conmigo misma. Llegué sintiéndome perdida y hoy me siento más entera y más libre.",
  },
]

function StarRating() {
  return (
    <div className="flex gap-1 mb-4">
      {[...Array(5)].map((_, i) => (
        <svg key={i} width="13" height="13" viewBox="0 0 12 12" fill="#8A9E7C">
          <path d="M6 1l1.5 3.5L11 5 8.5 7.5 9.2 11 6 9.2 2.8 11 3.5 7.5 1 5l3.5-.5z" />
        </svg>
      ))}
    </div>
  )
}

export default function Testimonials() {
  const [current, setCurrent] = useState(0)
  const [direction, setDirection] = useState(1)
  const timerRef = useRef(null)
  const touchStartX = useRef(0)

  const go = useCallback((index) => {
    const n = (index + testimonials.length) % testimonials.length
    setDirection(n > current ? 1 : -1)
    setCurrent(n)
  }, [current])

  useEffect(() => {
    timerRef.current = setInterval(() => go(current + 1), 5000)
    return () => clearInterval(timerRef.current)
  }, [current, go])

  const variants = {
    enter: (d) => ({ opacity: 0, x: d > 0 ? 60 : -60 }),
    center: { opacity: 1, x: 0 },
    exit: (d) => ({ opacity: 0, x: d > 0 ? -60 : 60 }),
  }

  return (
    <section className="py-24" style={{ backgroundColor: "var(--color-cream)" }}>
      <div className="max-w-2xl mx-auto px-6">

        {/* Encabezado */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <p className="text-xs tracking-[.22em] uppercase mb-3" style={{ color: "#8A9E7C" }}>
            Testimonios
          </p>
          <h2
            className="text-5xl mb-4 leading-tight"
            style={{ fontFamily: "Cormorant Garamond, serif", fontWeight: 300, color: "var(--color-deep)" }}
          >
            Historias de <em style={{ fontStyle: "italic", color: "#8A9E7C" }}>transformación</em>
          </h2>
          <p className="text-sm font-light" style={{ color: "var(--color-muted)" }}>
            Experiencias de personas que han vivido el proceso terapéutico
          </p>
        </motion.div>

        {/* Slider */}
        <div
          className="overflow-hidden"
          onTouchStart={(e) => (touchStartX.current = e.touches[0].clientX)}
          onTouchEnd={(e) => {
            const dx = e.changedTouches[0].clientX - touchStartX.current
            if (Math.abs(dx) > 40) go(dx < 0 ? current + 1 : current - 1)
          }}
        >
          <AnimatePresence custom={direction} mode="wait">
            <motion.div
              key={current}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
              className="relative border-l-2 p-8"
              style={{
                backgroundColor: "white",
                borderLeftColor: "#8A9E7C",
                borderRadius: "0 12px 12px 0",
              }}
            >
              <StarRating />

              <p
                className="text-6xl leading-none mb-3 select-none"
                style={{ fontFamily: "Cormorant Garamond, serif", color: "#B8C9AC" }}
              >
                "
              </p>

              <p className="text-sm leading-relaxed italic mb-6 font-light" style={{ color: "var(--color-muted)" }}>
                {testimonials[current].text}
              </p>

              <div className="flex items-center gap-3 pt-5 border-t" style={{ borderColor: "#E8DDD0" }}>
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-medium flex-shrink-0 ${testimonials[current].avatarColor}`}
                >
                  {testimonials[current].name[0]}
                </div>
                <div>
                  <p
                    className="text-lg leading-none mb-1"
                    style={{ fontFamily: "Cormorant Garamond, serif", fontWeight: 500, color: "var(--color-deep)" }}
                  >
                    {testimonials[current].name}
                  </p>
                  <p className="text-xs tracking-wider uppercase" style={{ color: "#8A9E7C" }}>
                    {testimonials[current].tag}
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Controles */}
        <div className="flex items-center justify-center gap-4 mt-8">
          <button
            onClick={() => go(current - 1)}
            className="w-9 h-9 rounded-full border flex items-center justify-center transition-colors hover:bg-gray-50"
            style={{ borderColor: "#D0D0D0" }}
            aria-label="Anterior"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>

          <div className="flex gap-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => go(i)}
                className="h-2 rounded-full transition-all duration-300"
                style={{
                  width: i === current ? "24px" : "8px",
                  backgroundColor: i === current ? "#8A9E7C" : "#D0D0D0",
                }}
                aria-label={`Ir al testimonio ${i + 1}`}
              />
            ))}
          </div>

          <button
            onClick={() => go(current + 1)}
            className="w-9 h-9 rounded-full border flex items-center justify-center transition-colors hover:bg-gray-50"
            style={{ borderColor: "#D0D0D0" }}
            aria-label="Siguiente"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
              <path d="M9 18l6-6-6-6" />
            </svg>
          </button>
        </div>

      </div>
    </section>
  )
}