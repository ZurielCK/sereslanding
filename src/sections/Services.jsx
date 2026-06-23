import { useState, useEffect, useRef, useCallback } from "react";
import { motion } from "framer-motion";
import imgAnsiedad    from "../assets/images/services/ansiedad.svg";
import imgIndividual  from "../assets/images/services/individual.svg";
import imgPareja      from "../assets/images/services/pareja.svg";
import imgCrecimiento from "../assets/images/services/crecimiento.svg";

const services = [
  {
    num: "01",
    title: "Ansiedad y estrés",
    text: "Aprende a gestionar pensamientos y emociones que generan estrés o preocupación constante.",
    img: imgAnsiedad,
  },
  {
    num: "02",
    title: "Terapia individual",
    text: "Un espacio seguro para comprender tus emociones y trabajar en tu crecimiento personal.",
    img: imgIndividual,
  },
  {
    num: "03",
    title: "Terapia de pareja",
    text: "Mejora la comunicación y fortalece la conexión en tu relación de pareja.",
    img: imgPareja,
  },
  {
    num: "04",
    title: "Crecimiento personal",
    text: "Desarrolla herramientas para mejorar tu bienestar emocional y tu vida diaria.",
    img: imgCrecimiento,
  },
];

function usePerView(ref) {
  const [perView, setPerView] = useState(1);
  useEffect(() => {
    const calc = () => {
      if (!ref.current) return;
      const w = ref.current.offsetWidth;
      setPerView(w >= 900 ? 3 : w >= 580 ? 2 : 1);
    };
    calc();
    window.addEventListener("resize", calc);
    return () => window.removeEventListener("resize", calc);
  }, [ref]);
  return perView;
}

export default function Services() {
  const [cur, setCur] = useState(0);
  const wrapRef = useRef(null);
  const touchX = useRef(0);
  const perView = usePerView(wrapRef);
  const pages = services.length - perView + 1;

  const go = useCallback(
    (n) => {
      setCur(Math.max(0, Math.min(n, pages - 1)));
    },
    [pages],
  );

  // Resetear posición al cambiar tamaño de ventana — setState en effect es intencional aquí
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setCur(0);
  }, [perView]);

  return (
    <section
      id="servicios"
      className="py-15"
      style={{ backgroundColor: "var(--color-cream)" }}
    >
      <div className="max-w-6xl mx-auto px-6">
        {/* Encabezado */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <p
            className="text-xs tracking-[.22em] uppercase mb-3"
            style={{ color: "var(--color-accent)" }}
          >
            Servicios terapéuticos
          </p>
          <h2
            className="text-5xl mb-4"
            style={{
              fontFamily: "Cormorant Garamond, serif",
              fontWeight: 300,
              color: "var(--color-deep)",
              lineHeight: 1.1,
            }}
          >
            ¿En qué puedo{" "}
            <em style={{ fontStyle: "italic", color: "var(--color-accent)" }}>ayudarte?</em>
          </h2>
          <p
            className="text-sm font-light"
            style={{ color: "var(--color-muted)" }}
          >
            Acompañamiento profesional para tu bienestar emocional
          </p>
        </motion.div>

        {/* Slider */}
        <div
          ref={wrapRef}
          className="overflow-hidden"
          onTouchStart={(e) => (touchX.current = e.touches[0].clientX)}
          onTouchEnd={(e) => {
            const dx = e.changedTouches[0].clientX - touchX.current;
            if (Math.abs(dx) > 40) go(dx < 0 ? cur + 1 : cur - 1);
          }}
        >
          <div
            className="flex transition-transform duration-500"
            style={{
              transform: `translateX(-${cur * (100 / perView)}%)`,
              transitionTimingFunction: "cubic-bezier(0.4,0,0.2,1)",
            }}
          >
            {services.map((s, i) => (
              <div
                key={i}
                className="flex-shrink-0 px-2"
                style={{ width: `${100 / perView}%` }}
              >
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  viewport={{ once: true }}
                  className="group relative border overflow-hidden h-full"
                  style={{
                    borderColor: "var(--color-warm)",
                    backgroundColor: "white",
                  }}
                >
                  {/* Imagen */}
                  <div className="relative h-52 overflow-hidden">
                    <img
                      src={s.img}
                      alt={s.title}
                      width="700"
                      height="480"
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div
                      className="absolute inset-0 transition-opacity duration-300 group-hover:opacity-0"
                      style={{ backgroundColor: "var(--color-overlay)" }}
                    />
                    <span
                      className="absolute top-3 left-4 text-sm"
                      style={{
                        fontFamily: "Cormorant Garamond, serif",
                        color: "rgba(255,255,255,0.75)",
                      }}
                    >
                      {s.num}
                    </span>
                  </div>

                  {/* Cuerpo */}
                  <div className="p-5">
                    <p
                      className="text-xs tracking-widest uppercase mb-2"
                      style={{ color: "var(--color-accent)" }}
                    >
                      Área de atención
                    </p>
                    <h3
                      className="text-xl mb-3"
                      style={{
                        fontFamily: "Cormorant Garamond, serif",
                        fontWeight: 500,
                        color: "var(--color-deep)",
                      }}
                    >
                      {s.title}
                    </h3>
                    <p
                      className="text-sm leading-relaxed font-light mb-4"
                      style={{ color: "var(--color-muted)" }}
                    >
                      {s.text}
                    </p>
                    <div
                      className="flex items-center gap-2 text-xs tracking-widest uppercase"
                      style={{ color: "var(--color-accent)" }}
                    >
                      <span>Saber más</span>
                      <svg
                        width="13"
                        height="13"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="var(--color-accent)"
                        strokeWidth="1.8"
                        className="transition-transform duration-200 group-hover:translate-x-1"
                      >
                        <path d="M5 12h14M12 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>

                  {/* Línea inferior animada */}
                  <div
                    className="absolute bottom-0 left-0 w-full h-0.5 origin-left scale-x-0 transition-transform duration-400 group-hover:scale-x-100"
                    style={{ backgroundColor: "var(--color-accent)" }}
                  />
                </motion.div>
              </div>
            ))}
          </div>
        </div>

        {/* Controles */}
        <div className="flex items-center justify-center gap-4 mt-8">
          <button
            onClick={() => go(cur - 1)}
            disabled={cur === 0}
            className="w-9 h-9 rounded-full border flex items-center justify-center transition-colors hover:bg-gray-50 disabled:opacity-30"
            style={{ borderColor: "var(--color-neutral)" }}
            aria-label="Anterior"
          >
            <svg
              width="13"
              height="13"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
            >
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>

          <div className="flex gap-2 items-center">
            {Array.from({ length: pages }).map((_, i) => (
              <button
                key={i}
                onClick={() => go(i)}
                className="h-1.5 rounded-full transition-all duration-300"
                style={{
                  width: i === cur ? "22px" : "7px",
                  backgroundColor: i === cur ? "var(--color-accent)" : "var(--color-neutral)",
                }}
                aria-label={`Página ${i + 1}`}
              />
            ))}
          </div>

          <button
            onClick={() => go(cur + 1)}
            disabled={cur >= pages - 1}
            className="w-9 h-9 rounded-full border flex items-center justify-center transition-colors hover:bg-gray-50 disabled:opacity-30"
            style={{ borderColor: "var(--color-neutral)" }}
            aria-label="Siguiente"
          >
            <svg
              width="13"
              height="13"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
            >
              <path d="M9 18l6-6-6-6" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
