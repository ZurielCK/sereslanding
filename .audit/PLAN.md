# PLAN.md — Roadmap ejecutable

> El **qué**. Cada tarea = una rama = un PR. Marca `[x]` al cerrar (y registra en `PROGRESS.md`).
> Orden recomendado: de arriba hacia abajo. No empieces una fase hasta cerrar lo indispensable de la anterior.

---

## 🚀 Fase MVP — lanzar de inmediato

- [x] **`fix/css-variables`** — Definir `--color-deep/cream/warm/muted` en `@theme` (Tailwind 4) o `:root`. Borrar `App.css` (boilerplate muerto, ni se importa).
  - *Aceptación:* la paleta se ve aplicada en todas las secciones; sin `var()` sin declarar.
- [x] **`feat/fonts`** — Cargar "Cormorant Garamond" (`@fontsource/cormorant-garamond` o `<link>` con `display=swap` + `preconnect`).
  - *Aceptación:* los títulos usan la fuente correcta; sin FOUT notable.
- [x] **`fix/logo-case`** — Unificar el nombre del logo (`Logo.png` ↔ import). Verificar en `npm run build`.
  - *Aceptación:* el build pasa en Linux; el logo se ve en Navbar y SplashScreen.
- [x] **`fix/navbar-colors`** — Corregir `color: "green"` → blanco en botón "Agendar" y toggle móvil.
  - *Aceptación:* contraste correcto sobre fondo oscuro.
- [x] **`perf/remove-splash`** — Quitar `setTimeout(2000)` del splash (o reducir a transición no bloqueante).
  - *Aceptación:* el contenido (Hero) es visible de inmediato; mejora de LCP/FCP.
- [x] **`feat/prerender`** — Añadir prerender estático (vite-react-ssg).
  - *Aceptación:* el HTML de producción contiene el contenido sin ejecutar JS.
- [x] **`feat/seo-head`** — `lang="es-MX"`, `<title>` real, meta description, Open Graph/Twitter, canonical, favicon propio, `robots.txt`, `sitemap.xml`, JSON-LD `Psychologist` + `AggregateRating`.
  - *Aceptación:* validación en Rich Results Test sin errores; OG se ve bien al compartir por WhatsApp.
- [x] **`feat/google-reviews`** — Pages Function `/api/reviews` (server-side, fieldMask mínimo) + Workers KV (TTL 24 h) + atribución a Google. Sustituir testimonios ficticios.
  - *Aceptación:* muestra reseñas reales con rating agregado; API key no expuesta; cumple ToS.
- [x] **`chore/images`** — Reemplazar imágenes de Unsplash por archivos locales en AVIF/WebP con `width/height`, `loading="lazy"` (salvo LCP) y `fetchpriority="high"` en el Hero.
  - *Aceptación:* sin dependencias externas; CLS < 0.1.
- [x] **`feat/map-facade`** — Mapa diferido (imagen/facade) que carga el iframe solo al clic + botón "Cómo llegar" (Maps nativo con coordenadas reales).
  - *Aceptación:* el iframe no se carga en el render inicial; coordenadas 18.9090, -99.2313.
- [x] **`chore/deploy`** — Conectar repo a Cloudflare Pages + dominio + analítica sin cookies (Cloudflare Web Analytics o Plausible).
  - *Aceptación:* producción en vivo; preview deploys por PR funcionando.
- [x] **`chore/pin-deps`** — Fijar versiones estables (salir de Vite 8 beta) antes del lanzamiento.

## 🔧 Fase 2 — tras el lanzamiento

- [x] **`feat/videos`** — Sección de videos (≤2 min) con YouTube + *facade* (póster, carga al clic).
- [ ] **`feat/contact-form`** — Formulario corto de respaldo (nombre + motivo + horario) → correo/Formspree o Pages Function.
- [ ] **`feat/booking`** — Reserva de citas (Cal.com / Calendly) además de WhatsApp.
- [x] **`feat/faq`** — Sección FAQ con `FAQPage` schema.
- [x] **`feat/credentials`** — Hacer visibles titulaciones clave + cédula profesional + logos de instituciones.
- [ ] **`feat/reviews-cron`** — Refresco programado de la caché de reseñas (Cron Trigger).

## 📈 Fase 3 — crecimiento / escalabilidad

- [ ] **`feat/blog`** — Blog de educación emocional (capta búsquedas de cola larga).
- [ ] **`refactor/astro`** — Evaluar migración a Astro (islas) para CWV y contenido.
- [ ] **`feat/videos-stream`** — Videos sin marca de YouTube: Bunny Stream (≈céntimos) o Cloudflare Stream (5 USD/mes fijos).
- [ ] **`feat/service-pages`** — Landing por servicio/intención (multipágina SEO).
- [ ] **`chore/ab-testing`** — A/B testing de CTAs.
