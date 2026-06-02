import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import formacionImg from "../assets/images/formacion.jpeg";

export default function Education() {
  const [showMore, setShowMore] = useState(false);

  return (
    <section
      id="formacion"
      className="py-24"
      style={{ backgroundColor: "var(--color-cream)" }}
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Imagen (igual) */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div
              className="absolute top-4 left-4 right-0 bottom-0"
              style={{
                backgroundColor: "var(--color-warm)",
                borderRadius: "0 60px 0 60px",
              }}
            />

            <img
              src={formacionImg}
              alt="Formación y especialización profesional en psicoterapia corporal humanista"
              width="600"
              height="480"
              loading="lazy"
              className="relative w-full object-cover"
              style={{
                borderRadius: "0 60px 0 60px",
                height: "480px",
              }}
            />
          </motion.div>

          {/* Texto */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <p
              className="text-xs tracking-[.22em] uppercase mb-3"
              style={{ color: "#8A9E7C" }}
            >
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
              Formación y <em style={{ color: "#8A9E7C" }}>especialización</em>
            </h2>

            <div
              className="w-9 h-px mb-6"
              style={{ backgroundColor: "#8A9E7C" }}
            />

            <div
              className="space-y-6 text-sm font-light"
              style={{ color: "var(--color-muted)" }}
            >
              {/* Académica */}
              <div>
                <h3
                  className="text-xs tracking-widest uppercase mb-2"
                  style={{ color: "#8A9E7C" }}
                >
                  Formación Académica
                </h3>

                <p>
                  <span className="font-medium">
                    Licenciatura en Psicología Clínica
                  </span>
                  <br />
                  Universidad Latinoamericana (ULA)
                </p>

                <p className="mt-2">
                  <span className="font-medium">
                    Maestría en Psicología Clínica y de la Salud
                  </span>
                  <br />
                  Universidad IEXPRO · 2020 – 2021
                </p>
              </div>

              {/* CONTENIDO OCULTO */}
              <AnimatePresence>
                {showMore && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.4 }}
                    className="space-y-6 overflow-hidden"
                  >
                   
                    <div>
                      <h3
                        className="text-xs tracking-widest uppercase mb-2"
                        style={{ color: "#8A9E7C" }}
                      >
                        Psicoterapia Corporal
                      </h3>

                      <p>
                        Formación en Psicoterapia Corporal
                        <br />
                        Instituto Corpore · 2013 – 2015
                      </p>
                    </div>
                    <div>
                      <p>
                        Certificación en Core Energetics
                        <br />
                        Core Energetics NY · 2015
                      </p>

                      <p className="mt-2">
                        Diplomado en Danza Terapéutica Humanista
                        <br />
                        Sensodanza Terapia A.C. · 2017 – 2018
                      </p>
                    </div>

                    {/* Orientación */}
                    <div>
                      <h3
                        className="text-xs tracking-widest uppercase mb-2"
                        style={{ color: "#8A9E7C" }}
                      >
                        Acompañamiento y Orientación
                      </h3>

                      <p>
                        Diplomado como Psico-Orientadora Social
                        <br />
                        PAAT · 2002 – 2004
                      </p>

                      <p className="mt-2">
                        Diplomado en Psicoterapia Gestalt
                        <br />
                        Centro Fritz Perls · 2011 – 2012
                      </p>
                    </div>

                    {/* Voluntariado */}
                    <div>
                      <h3
                        className="text-xs tracking-widest uppercase mb-2"
                        style={{ color: "#8A9E7C" }}
                      >
                        Voluntariado
                      </h3>

                      <p>
                        Ezer A.B.P – Monterrey
                        <br />
                        Psicología · Servicios sociales · 2019 – Actualidad
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* BOTÓN VER MÁS */}
            <button
              onClick={() => setShowMore(!showMore)}
              className="mt-6 text-xs tracking-widest uppercase"
              style={{ color: "#8A9E7C" }}
            >
              {showMore ? "Ver menos −" : "Ver más +"}
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
