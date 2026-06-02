import { useState } from "react"
import { FaMapMarkerAlt, FaDirections } from "react-icons/fa"

const LAT  = 18.9090
const LNG  = -99.2313
const ZOOM = 16

const MAPS_EMBED = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1000!2d${LNG}!3d${LAT}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTjCsDU0JzMyLjQiTiA5OcKwMTMnNTIuNyJX!5e0!3m2!1ses!2smx!4v1&zoom=${ZOOM}`
const MAPS_NAV   = `https://www.google.com/maps/dir/?api=1&destination=${LAT},${LNG}`
// Imagen estática de Maps (gratuita, sin JS, sin cookies)
const STATIC_IMG = `https://maps.googleapis.com/maps/api/staticmap?center=${LAT},${LNG}&zoom=${ZOOM}&size=600x300&maptype=roadmap&markers=color:green%7C${LAT},${LNG}&scale=2`

export default function MapFacade() {
  const [active, setActive] = useState(false)

  return (
    <div className="mt-6">
      <div
        className="relative overflow-hidden rounded"
        style={{ aspectRatio: "2/1", backgroundColor: "var(--color-warm)" }}
      >
        {active ? (
          <iframe
            title="Ubicación del consultorio SerEs Psicoterapia"
            src={MAPS_EMBED}
            width="100%"
            height="100%"
            style={{ border: 0, display: "block" }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        ) : (
          <button
            onClick={() => setActive(true)}
            className="w-full h-full flex flex-col items-center justify-center gap-3 group"
            aria-label="Cargar mapa interactivo del consultorio"
            style={{ backgroundColor: "var(--color-warm)" }}
          >
            <div
              className="w-12 h-12 rounded-full flex items-center justify-center transition-transform group-hover:scale-110"
              style={{ backgroundColor: "var(--color-deep)" }}
            >
              <FaMapMarkerAlt className="text-white text-lg" />
            </div>
            <span
              className="text-xs tracking-widest uppercase"
              style={{ color: "var(--color-muted)" }}
            >
              Ver mapa interactivo
            </span>
          </button>
        )}
      </div>

      {/* Botón Cómo llegar — abre Maps nativo en móvil */}
      <a
        href={MAPS_NAV}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-3 inline-flex items-center gap-2 text-xs tracking-widest uppercase transition-opacity hover:opacity-70"
        style={{ color: "#8A9E7C" }}
      >
        <FaDirections />
        Cómo llegar
      </a>
    </div>
  )
}
