import { useState } from "react"
import { motion } from "framer-motion"
import { FaInstagram, FaFacebook, FaExternalLinkAlt } from "react-icons/fa"

// ── Configuración — edita estos valores para actualizar los perfiles ────────
const INSTAGRAM_HANDLE = "seres_consenti2"
const FACEBOOK_HANDLE  = "seres.psicoterapia"

// Posts / Reels destacados.
// Cuando tengas una URL, ponla en `url` para activar el embed.
// Instagram Reel: "https://www.instagram.com/reel/ID_DEL_REEL/"
// Instagram Post: "https://www.instagram.com/p/ID_DEL_POST/"
const FEATURED = [
  { platform: "instagram", url: null, label: "Reel 1" },
  { platform: "instagram", url: null, label: "Reel 2" },
  { platform: "instagram", url: null, label: "Reel 3" },
  { platform: "instagram", url: null, label: "Reel 4" },
]
// ────────────────────────────────────────────────────────────────────────────

const PROFILE_URLS = {
  instagram: `https://www.instagram.com/${INSTAGRAM_HANDLE}`,
  facebook:  `https://www.facebook.com/${FACEBOOK_HANDLE}`,
}

function PostCard({ post, index }) {
  const [loaded, setLoaded] = useState(false)
  const [error, setError]   = useState(false)

  const isInstagram = post.platform === "instagram"
  const embedSrc    = post.url ? `${post.url}embed/captioned/` : null

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      viewport={{ once: true }}
      className="relative overflow-hidden rounded-lg"
      style={{ aspectRatio: "1/1", backgroundColor: "var(--color-warm)" }}
    >
      {embedSrc && isInstagram && !error ? (
        <>
          {!loaded && (
            <div className="absolute inset-0 flex items-center justify-center">
              <FaInstagram size={28} style={{ color: "var(--color-accent)", opacity: 0.4 }} />
            </div>
          )}
          <iframe
            src={embedSrc}
            className="absolute inset-0 w-full h-full border-0"
            style={{ opacity: loaded ? 1 : 0 }}
            loading="lazy"
            title={post.label}
            onLoad={() => setLoaded(true)}
            onError={() => setError(true)}
            sandbox="allow-scripts allow-same-origin allow-popups"
          />
        </>
      ) : (
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 p-4">
          <div
            className="w-12 h-12 rounded-full flex items-center justify-center opacity-30"
            style={{
              background: isInstagram
                ? "linear-gradient(135deg,#f09433,#e6683c,#dc2743,#cc2366,#bc1888)"
                : "none",
              backgroundColor: isInstagram ? undefined : "var(--color-muted)",
            }}
          >
            {isInstagram
              ? <FaInstagram className="text-white" size={20} />
              : <FaFacebook className="text-white" size={20} />
            }
          </div>
          <p
            className="text-xs tracking-widest uppercase text-center opacity-40"
            style={{ color: "var(--color-deep)" }}
          >
            Próximamente
          </p>
        </div>
      )}
    </motion.div>
  )
}

export default function Social() {
  return (
    <section id="redes" className="py-24" style={{ backgroundColor: "var(--color-cream)" }}>
      <div className="max-w-5xl mx-auto px-6">

        {/* Encabezado */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <p className="text-xs tracking-[.22em] uppercase mb-3" style={{ color: "var(--color-accent)" }}>
            Síguenos en redes
          </p>
          <h2
            className="text-5xl mb-4 leading-tight"
            style={{ fontFamily: "Cormorant Garamond, serif", fontWeight: 300, color: "var(--color-deep)" }}
          >
            Contenido para tu{" "}
            <em style={{ fontStyle: "italic", color: "var(--color-accent)" }}>bienestar</em>
          </h2>
          <p className="text-sm font-light" style={{ color: "var(--color-muted)" }}>
            Consejos, reflexiones y recursos para tu vida emocional
          </p>
        </motion.div>

        {/* Tarjetas de perfil */}
        <div className="grid md:grid-cols-2 gap-5 mb-12">
          <motion.a
            href={PROFILE_URLS.instagram}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            whileHover={{ y: -3 }}
            className="flex items-center gap-5 p-6 border group transition-shadow hover:shadow-md"
            style={{ backgroundColor: "white", borderColor: "var(--color-warm)" }}
          >
            <div
              className="w-14 h-14 rounded-full flex items-center justify-center flex-shrink-0"
              style={{ background: "linear-gradient(135deg,#f09433,#e6683c,#dc2743,#cc2366,#bc1888)" }}
            >
              <FaInstagram className="text-white" size={22} />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-xs tracking-widest uppercase mb-1" style={{ color: "var(--color-accent)" }}>
                Instagram
              </p>
              <p
                className="text-lg truncate"
                style={{ fontFamily: "Cormorant Garamond, serif", fontWeight: 500, color: "var(--color-deep)" }}
              >
                @{INSTAGRAM_HANDLE}
              </p>
            </div>
            <FaExternalLinkAlt
              size={11}
              style={{ color: "var(--color-muted)", flexShrink: 0 }}
              className="opacity-0 group-hover:opacity-60 transition-opacity"
            />
          </motion.a>

          <motion.a
            href={PROFILE_URLS.facebook}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            whileHover={{ y: -3 }}
            className="flex items-center gap-5 p-6 border group transition-shadow hover:shadow-md"
            style={{ backgroundColor: "white", borderColor: "var(--color-warm)" }}
          >
            <div
              className="w-14 h-14 rounded-full flex items-center justify-center flex-shrink-0"
              style={{ backgroundColor: "#1877F2" }}
            >
              <FaFacebook className="text-white" size={22} />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-xs tracking-widest uppercase mb-1" style={{ color: "var(--color-accent)" }}>
                Facebook
              </p>
              <p
                className="text-lg truncate"
                style={{ fontFamily: "Cormorant Garamond, serif", fontWeight: 500, color: "var(--color-deep)" }}
              >
                {FACEBOOK_HANDLE}
              </p>
            </div>
            <FaExternalLinkAlt
              size={11}
              style={{ color: "var(--color-muted)", flexShrink: 0 }}
              className="opacity-0 group-hover:opacity-60 transition-opacity"
            />
          </motion.a>
        </div>

        {/* Grid de posts / placeholders */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {FEATURED.map((post, i) => (
            <PostCard key={i} post={post} index={i} />
          ))}
        </div>

      </div>
    </section>
  )
}
