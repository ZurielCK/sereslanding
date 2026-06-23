import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

const faqs = [
  {
    q: "¿Cuánto dura cada sesión?",
    a: "Cada sesión tiene una duración de 50 a 60 minutos aproximadamente. Este tiempo está pensado para que puedas profundizar en lo que necesitas trabajar sin sentirte apresurado.",
  },
  {
    q: "¿Cuántas sesiones necesito?",
    a: "El número de sesiones varía según cada persona, su historia y sus objetivos terapéuticos. En la primera sesión realizamos una evaluación inicial que nos permite trazar un plan de trabajo y darte una idea más clara del proceso.",
  },
  {
    q: "¿Atiende de forma presencial y en línea?",
    a: "Sí, ofrezco ambas modalidades. Las sesiones presenciales se realizan en el consultorio en Cuernavaca, Morelos. Las sesiones en línea están disponibles para cualquier parte de México, con la misma calidad y confidencialidad.",
  },
  {
    q: "¿Cuánto cuesta la consulta?",
    a: "El costo varía según el tipo de consulta y la modalidad. Escríbeme por WhatsApp para darte información personalizada sobre tarifas y opciones de pago.",
  },
  {
    q: "¿Es confidencial lo que se habla en terapia?",
    a: "Sí. Todo lo que se habla en sesión está protegido por el secreto profesional. La confidencialidad es un principio ético fundamental de la psicología clínica. La información solo podría compartirse en situaciones de riesgo grave para ti o para terceros, y siempre te lo haría saber.",
  },
  {
    q: "¿Cómo es la primera sesión?",
    a: "La primera sesión es un espacio de bienvenida y evaluación. Me cuento contigo lo que te trajo aquí, exploramos tu situación actual y tus objetivos. No hay preguntas incorrectas ni temas prohibidos. Al final, si decidimos trabajar juntos, acordamos la frecuencia y el enfoque del proceso.",
  },
]

function FAQItem({ item, index }) {
  const [open, setOpen] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.06 }}
      viewport={{ once: true }}
      className="border-b"
      style={{ borderColor: "var(--color-warm)" }}
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between gap-4 py-5 text-left"
        aria-expanded={open}
      >
        <span
          className="text-base font-light"
          style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "1.2rem", color: "var(--color-deep)" }}
        >
          {item.q}
        </span>
        <span
          className="flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center transition-colors"
          style={{ backgroundColor: open ? "var(--color-deep)" : "var(--color-warm)" }}
        >
          <motion.svg
            width="12" height="12" viewBox="0 0 24 24"
            fill="none" stroke={open ? "white" : "var(--color-accent)"} strokeWidth="2.5"
            animate={{ rotate: open ? 180 : 0 }}
            transition={{ duration: 0.25 }}
          >
            <path d="M6 9l6 6 6-6" />
          </motion.svg>
        </span>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
            className="overflow-hidden"
          >
            <p
              className="pb-5 text-sm leading-relaxed font-light"
              style={{ color: "var(--color-muted)" }}
            >
              {item.a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

export default function FAQ() {
  return (
    <section id="faq" className="py-24" style={{ backgroundColor: "var(--color-cream)" }}>
      <div className="max-w-3xl mx-auto px-6">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <p className="text-xs tracking-[.22em] uppercase mb-3" style={{ color: "var(--color-accent)" }}>
            Resolvemos tus dudas
          </p>
          <h2
            className="text-5xl mb-4 leading-tight"
            style={{ fontFamily: "Cormorant Garamond, serif", fontWeight: 300, color: "var(--color-deep)" }}
          >
            Preguntas{" "}
            <em style={{ fontStyle: "italic", color: "var(--color-accent)" }}>frecuentes</em>
          </h2>
          <p className="text-sm font-light" style={{ color: "var(--color-muted)" }}>
            ¿Tienes otra pregunta? Escríbeme por WhatsApp.
          </p>
        </motion.div>

        <div className="border-t" style={{ borderColor: "var(--color-warm)" }}>
          {faqs.map((item, i) => (
            <FAQItem key={item.q} item={item} index={i} />
          ))}
        </div>

      </div>
    </section>
  )
}
