import { motion } from "framer-motion";
// TODO: reemplazar por foto real de la psicóloga en consulta cuando esté disponible
import consultaImg from "../assets/images/consulta-placeholder.svg";

const credentials = [
  {
    category: "Formación académica",
    items: [
      { title: "Licenciatura en Psicología Clínica", institution: "Universidad Latinoamericana (ULA)" },
      { title: "Maestría en Psicología Clínica y de la Salud", institution: "Universidad IEXPRO", period: "2020 – 2021" },
    ],
  },
  {
    category: "Psicoterapia corporal",
    items: [
      { title: "Formación en Psicoterapia Corporal", institution: "Instituto Corpore", period: "2013 – 2015" },
      { title: "Certificación en Core Energetics", institution: "Core Energetics NY", period: "2015" },
      { title: "Diplomado en Danza Terapéutica Humanista", institution: "Sensodanza Terapia A.C.", period: "2017 – 2018" },
    ],
  },
  {
    category: "Acompañamiento y orientación",
    items: [
      { title: "Diplomado como Psico-Orientadora Social", institution: "PAAT", period: "2002 – 2004" },
      { title: "Diplomado en Psicoterapia Gestalt", institution: "Centro Fritz Perls", period: "2011 – 2012" },
    ],
  },
  {
    category: "Voluntariado",
    items: [
      { title: "Psicología · Servicios sociales", institution: "Ezer A.B.P – Monterrey", period: "2019 – Actualidad" },
    ],
  },
]

export default function Education() {
  return (
    <section id="formacion" className="py-24" style={{ backgroundColor: "var(--color-cream)" }}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-start">

          {/* Imagen */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="relative md:sticky md:top-28"
          >
            <div
              className="absolute top-4 left-4 right-0 bottom-0"
              style={{ backgroundColor: "var(--color-warm)", borderRadius: "0 60px 0 60px" }}
            />
            <img
              src={consultaImg}
              alt="Psicóloga en sesión de consulta, Cuernavaca"
              width="600"
              height="480"
              loading="lazy"
              className="relative w-full object-cover"
              style={{ borderRadius: "0 60px 0 60px", height: "480px" }}
            />
          </motion.div>

          {/* Credenciales */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <p className="text-xs tracking-[.22em] uppercase mb-3" style={{ color: "#8A9E7C" }}>
              Trayectoria profesional
            </p>

            <h2
              className="mb-5 leading-tight"
              style={{
                fontFamily: "Cormorant Garamond, serif",
                fontWeight: 300,
                fontSize: "clamp(2.2rem, 4vw, 3rem)",
                color: "var(--color-deep)",
              }}
            >
              Formación y{" "}
              <em style={{ color: "#8A9E7C" }}>especialización</em>
            </h2>

            <div className="w-9 h-px mb-8" style={{ backgroundColor: "#8A9E7C" }} />

            {/* Tarjetas por categoría */}
            <div className="space-y-6">
              {credentials.map((group, gi) => (
                <motion.div
                  key={group.category}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: gi * 0.08 }}
                  viewport={{ once: true }}
                  className="border-l-2 pl-5"
                  style={{ borderColor: "var(--color-warm)" }}
                >
                  <p className="text-xs tracking-widest uppercase mb-3" style={{ color: "#8A9E7C" }}>
                    {group.category}
                  </p>
                  <div className="space-y-3">
                    {group.items.map((item) => (
                      <div key={item.title}>
                        <p className="text-sm font-medium" style={{ color: "var(--color-deep)" }}>
                          {item.title}
                        </p>
                        <p className="text-xs font-light mt-0.5" style={{ color: "var(--color-muted)" }}>
                          {item.institution}
                          {item.period && <span> · {item.period}</span>}
                        </p>
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Cédula profesional — pendiente */}
            {/* TODO: añadir número de cédula profesional SEP cuando esté disponible
            <div className="mt-8 flex items-center gap-3 px-4 py-3 border"
              style={{ borderColor: "var(--color-warm)" }}>
              <span className="text-xs tracking-widest uppercase" style={{ color: "#8A9E7C" }}>
                Cédula profesional SEP
              </span>
              <span className="text-sm font-medium" style={{ color: "var(--color-deep)" }}>
                00000000
              </span>
            </div> */}

          </motion.div>
        </div>
      </div>
    </section>
  );
}
