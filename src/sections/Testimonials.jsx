import { useState, useEffect, useRef, useCallback } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { FaStar, FaGoogle } from "react-icons/fa"

const REVIEW_LINK = "https://g.page/r/CXYnQ4kSgsS1EAE/review"

function StarRating({ rating = 5, size = 13 }) {
  return (
    <div className="flex gap-1 mb-4" aria-label={`${rating} de 5 estrellas`}>
      {[...Array(5)].map((_, i) => (
        <FaStar
          key={i}
          size={size}
          style={{ color: i < Math.round(rating) ? "#8A9E7C" : "#D0D0D0" }}
        />
      ))}
    </div>
  )
}

function ReviewCard({ review, direction, variants }) {
  return (
    <motion.div
      key={review.authorName + review.publishTime}
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
      <StarRating rating={review.rating} />
      <p
        className="text-6xl leading-none mb-3 select-none"
        style={{ fontFamily: "Cormorant Garamond, serif", color: "#B8C9AC" }}
      >
        "
      </p>
      <p className="text-sm leading-relaxed italic mb-6 font-light" style={{ color: "var(--color-muted)" }}>
        {review.text}
      </p>
      <div className="flex items-center gap-3 pt-5 border-t" style={{ borderColor: "#E8DDD0" }}>
        {review.authorPhoto ? (
          <img
            src={review.authorPhoto}
            alt={review.authorName}
            width="40"
            height="40"
            loading="lazy"
            className="w-10 h-10 rounded-full object-cover flex-shrink-0"
          />
        ) : (
          <div
            className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-medium flex-shrink-0"
            style={{ backgroundColor: "#E8DDD0", color: "var(--color-deep)" }}
          >
            {review.authorName[0]}
          </div>
        )}
        <div>
          <p
            className="text-lg leading-none mb-1"
            style={{ fontFamily: "Cormorant Garamond, serif", fontWeight: 500, color: "var(--color-deep)" }}
          >
            {review.authorName}
          </p>
          <p className="text-xs tracking-wider uppercase" style={{ color: "#8A9E7C" }}>
            Reseña verificada · Google
          </p>
        </div>
      </div>
    </motion.div>
  )
}

function RatingBadge({ rating, count }) {
  return (
    <div
      className="inline-flex flex-col items-center gap-2 px-8 py-6 mb-8"
      style={{ backgroundColor: "white", borderLeft: "3px solid #8A9E7C" }}
    >
      <div className="flex items-end gap-2">
        <span
          style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "3.5rem", fontWeight: 300, color: "var(--color-deep)", lineHeight: 1 }}
        >
          {rating?.toFixed(1) ?? "5.0"}
        </span>
        <div className="flex flex-col pb-1">
          <StarRating rating={rating ?? 5} size={14} />
          <span className="text-xs" style={{ color: "var(--color-muted)" }}>
            {count ?? 0} reseña{count !== 1 ? "s" : ""} en Google
          </span>
        </div>
      </div>
      <a
        href={REVIEW_LINK}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 text-xs tracking-widest uppercase mt-1 transition-opacity hover:opacity-70"
        style={{ color: "#8A9E7C" }}
      >
        <FaGoogle size={11} />
        Dejar una reseña
      </a>
    </div>
  )
}

const variants = {
  enter: (d) => ({ opacity: 0, x: d > 0 ? 60 : -60 }),
  center: { opacity: 1, x: 0 },
  exit:  (d) => ({ opacity: 0, x: d > 0 ? -60 : 60 }),
}

export default function Testimonials() {
  const [data, setData]         = useState(null)
  const [current, setCurrent]   = useState(0)
  const [direction, setDirection] = useState(1)
  const timerRef    = useRef(null)
  const touchStartX = useRef(0)

  useEffect(() => {
    fetch("/api/reviews")
      .then((r) => r.json())
      .then(setData)
      .catch(() => setData({ rating: 5, userRatingCount: 2, reviews: [] }))
  }, [])

  const reviews = data?.reviews ?? []
  const total   = reviews.length

  const go = useCallback((index) => {
    if (total === 0) return
    const n = ((index % total) + total) % total
    setDirection(n > current ? 1 : -1)
    setCurrent(n)
  }, [current, total])

  useEffect(() => {
    if (total < 2) return
    timerRef.current = setInterval(() => go(current + 1), 5000)
    return () => clearInterval(timerRef.current)
  }, [current, go, total])

  return (
    <section className="py-24" style={{ backgroundColor: "var(--color-cream)" }}>
      <div className="max-w-2xl mx-auto px-6">

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
            Lo que dicen{" "}
            <em style={{ fontStyle: "italic", color: "#8A9E7C" }}>nuestros pacientes</em>
          </h2>
          <p className="text-sm font-light" style={{ color: "var(--color-muted)" }}>
            Reseñas verificadas de Google
          </p>
        </motion.div>

        {/* Rating agregado siempre visible */}
        {data && (
          <div className="flex justify-center">
            <RatingBadge rating={data.rating} count={data.userRatingCount} />
          </div>
        )}

        {/* Slider de reseñas — solo si la API devuelve texto */}
        {total > 0 && (
          <>
            <div
              className="overflow-hidden"
              onTouchStart={(e) => (touchStartX.current = e.touches[0].clientX)}
              onTouchEnd={(e) => {
                const dx = e.changedTouches[0].clientX - touchStartX.current
                if (Math.abs(dx) > 40) go(dx < 0 ? current + 1 : current - 1)
              }}
            >
              <AnimatePresence custom={direction} mode="wait">
                <ReviewCard
                  key={current}
                  review={reviews[current]}
                  direction={direction}
                  variants={variants}
                />
              </AnimatePresence>
            </div>

            {total > 1 && (
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
                  {reviews.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => go(i)}
                      className="h-2 rounded-full transition-all duration-300"
                      style={{
                        width: i === current ? "24px" : "8px",
                        backgroundColor: i === current ? "#8A9E7C" : "#D0D0D0",
                      }}
                      aria-label={`Reseña ${i + 1}`}
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
            )}
          </>
        )}

        {/* Estado sin reseñas visibles — invitar a dejar la primera */}
        {data && total === 0 && (
          <div className="text-center mt-4">
            <p className="text-sm font-light mb-4" style={{ color: "var(--color-muted)" }}>
              Sé de los primeros en compartir tu experiencia.
            </p>
            <a
              href={REVIEW_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 text-xs tracking-widest uppercase transition-opacity hover:opacity-80"
              style={{ backgroundColor: "var(--color-deep)", color: "white" }}
            >
              <FaGoogle />
              Dejar reseña en Google
            </a>
          </div>
        )}

      </div>
    </section>
  )
}
