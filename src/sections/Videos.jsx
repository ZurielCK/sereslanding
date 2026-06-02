import { useState } from "react"
import { motion } from "framer-motion"
import { FaPlay, FaInstagram, FaFacebook } from "react-icons/fa"

/**
 * Para activar un video: reemplaza null en `youtubeId` por el ID de YouTube.
 * Ejemplo: "https://www.youtube.com/watch?v=dQw4w9WgXcQ" → id = "dQw4w9WgXcQ"
 *
 * Para subir tus Reels a YouTube:
 *   1. YouTube Studio → Crear → Subir video
 *   2. Selecciona el archivo del Reel
 *   3. Visibilidad: Público
 *   4. Copia el ID de la URL y pégalo aquí
 */
const videos = [
  {
    youtubeId: null, // TODO: reemplazar con ID de YouTube cuando esté disponible
    title: "Reel 1",
    description: "",
  },
  {
    youtubeId: null,
    title: "Reel 2",
    description: "",
  },
  {
    youtubeId: null,
    title: "Reel 3",
    description: "",
  },
  {
    youtubeId: null,
    title: "Reel 4",
    description: "",
  },
]

function VideoCard({ video, index }) {
  const [active, setActive] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="flex flex-col"
    >
      {/* Contenedor 9:16 */}
      <div className="relative w-full overflow-hidden rounded-lg" style={{ aspectRatio: "9/16", backgroundColor: "var(--color-warm)" }}>
        {video.youtubeId && active ? (
          <iframe
            title={video.title}
            src={`https://www.youtube.com/embed/${video.youtubeId}?autoplay=1&rel=0`}
            className="absolute inset-0 w-full h-full"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            loading="lazy"
          />
        ) : video.youtubeId ? (
          /* Facade con miniatura de YouTube */
          <button
            onClick={() => setActive(true)}
            className="absolute inset-0 w-full h-full group"
            aria-label={`Reproducir: ${video.title}`}
          >
            <img
              src={`https://i.ytimg.com/vi/${video.youtubeId}/maxresdefault.jpg`}
              alt={video.title}
              className="absolute inset-0 w-full h-full object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 flex items-center justify-center"
              style={{ backgroundColor: "rgba(44,62,45,0.35)" }}>
              <div
                className="w-16 h-16 rounded-full flex items-center justify-center transition-transform group-hover:scale-110"
                style={{ backgroundColor: "var(--color-deep)" }}
              >
                <FaPlay className="text-white ml-1" size={20} />
              </div>
            </div>
          </button>
        ) : (
          /* Placeholder — video pendiente */
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 p-6">
            <div
              className="w-14 h-14 rounded-full flex items-center justify-center opacity-40"
              style={{ backgroundColor: "var(--color-deep)" }}
            >
              <FaPlay className="text-white ml-1" size={16} />
            </div>
            <p className="text-xs tracking-widest uppercase text-center opacity-50" style={{ color: "var(--color-deep)" }}>
              Próximamente
            </p>
          </div>
        )}
      </div>

      {video.title && video.youtubeId && (
        <p className="mt-3 text-sm font-light text-center" style={{ color: "var(--color-muted)" }}>
          {video.title}
        </p>
      )}
    </motion.div>
  )
}

const hasAnyVideo = videos.some((v) => v.youtubeId)

export default function Videos() {
  return (
    <section id="videos" className="py-24" style={{ backgroundColor: "var(--color-cream)" }}>
      <div className="max-w-6xl mx-auto px-6">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <p className="text-xs tracking-[.22em] uppercase mb-3" style={{ color: "#8A9E7C" }}>
            Contenido
          </p>
          <h2
            className="text-5xl mb-4 leading-tight"
            style={{ fontFamily: "Cormorant Garamond, serif", fontWeight: 300, color: "var(--color-deep)" }}
          >
            Videos y{" "}
            <em style={{ fontStyle: "italic", color: "#8A9E7C" }}>consejos</em>
          </h2>
          <p className="text-sm font-light" style={{ color: "var(--color-muted)" }}>
            Recursos para tu bienestar emocional
          </p>
        </motion.div>

        {hasAnyVideo ? (
          /* Grid de videos activos */
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {videos.filter((v) => v.youtubeId).map((video, i) => (
              <VideoCard key={i} video={video} index={i} />
            ))}
          </div>
        ) : (
          /* Estado placeholder — redes sociales */
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex flex-col items-center gap-6"
          >
            {/* Preview grid de placeholders */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full">
              {videos.map((video, i) => (
                <VideoCard key={i} video={video} index={i} />
              ))}
            </div>

            <div className="text-center mt-4">
              <p className="text-sm font-light mb-5" style={{ color: "var(--color-muted)" }}>
                Mientras tanto, síguenos en redes para ver nuestro contenido.
              </p>
              <div className="flex items-center justify-center gap-4">
                <a
                  href="https://www.instagram.com/seres_consenti2"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 text-xs tracking-widest uppercase transition-opacity hover:opacity-70"
                  style={{ backgroundColor: "var(--color-deep)", color: "white" }}
                >
                  <FaInstagram />
                  Instagram
                </a>
                <a
                  href="https://www.facebook.com/seres.psicoterapia"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 text-xs tracking-widest uppercase border transition-opacity hover:opacity-70"
                  style={{ borderColor: "#8A9E7C", color: "#8A9E7C" }}
                >
                  <FaFacebook />
                  Facebook
                </a>
              </div>
            </div>
          </motion.div>
        )}

      </div>
    </section>
  )
}
