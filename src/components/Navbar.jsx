import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { FaBars, FaTimes } from "react-icons/fa"
import logo from "../assets/images/Logo.png"

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav
      className="fixed w-full z-50"
      style={{
        backgroundColor: "rgba(255,255,255,0.75)",
        backdropFilter: "blur(10px)",
        borderBottom: "1px solid rgba(0,0,0,0.05)",
      }}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* Logo */}
        <a href="#inicio" className="flex items-center gap-3">
          <img
            src={logo}
            alt="SerEs Psicoterapia"
            className="h-12 w-auto"
          />
          <span
            style={{
              fontFamily: "Cormorant Garamond, serif",
              fontSize: "1.3rem",
              color: "var(--color-deep)",
            }}
          >
            SerEs Psicoterapia
          </span>
        </a>

        {/* Menu Desktop */}
        <ul
          className="hidden md:flex items-center gap-10 text-s tracking-widest uppercase"
          style={{ color: "var(--color-muted)" }}
        >
          {[
            { name: "Inicio", href: "#inicio" },
            { name: "Sobre mí", href: "#about" },
            { name: "Servicios", href: "#servicios" },
            { name: "FAQ", href: "#faq" },
            { name: "Contacto", href: "#contacto" },
          ].map((item) => (
            <li key={item.name}>
              <a
                href={item.href}
                className="relative hover:opacity-80 transition"
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA Desktop */}
        <motion.a
          href="https://wa.me/5217777891025?text=Hola,%20quiero%20agendar%20una%20consulta"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ x: 4 }}
          transition={{ duration: 0.2 }}
          className="hidden md:inline-flex items-center gap-3 px-6 py-3 text-s tracking-widest uppercase"
          style={{
            backgroundColor: "var(--color-deep)",
            color: "white",
            letterSpacing: "0.14em",
          }}
        >
          Agendar
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </motion.a>

        {/* Botón móvil */}
        <button
          className="md:hidden text-xl"
          style={{ color: "var(--color-deep)" }}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Menu móvil */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
            className="md:hidden"
            style={{
              backgroundColor: "white",
              borderTop: "1px solid rgba(0,0,0,0.05)",
            }}
          >
            <ul className="flex flex-col px-6 py-6 gap-5 text-xs tracking-widest uppercase"
                style={{ color: "var(--color-muted)" }}
            >
              {[
                { name: "Inicio", href: "#inicio" },
                { name: "Sobre mí", href: "#about" },
                { name: "Servicios", href: "#servicios" },
                { name: "Contacto", href: "#contacto" },
              ].map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    onClick={() => setMenuOpen(false)}
                    className="block"
                  >
                    {item.name}
                  </a>
                </li>
              ))}

              {/* CTA móvil */}
              <a
                href="https://wa.me/5217777891025?text=Hola,%20quiero%20agendar%20una%20consulta"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMenuOpen(false)}
                className="mt-4 inline-flex items-center justify-center gap-3 px-6 py-3 text-xs tracking-widest uppercase"
                style={{
                  backgroundColor: "var(--color-deep)",
                  color: "white",
                  letterSpacing: "0.14em",
                }}
              >
                Agendar consulta
              </a>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}