# PROGRESS.md — Bitácora de avance

> El **qué pasó**. Append-only (no borres entradas). Una entrada por sesión o por tarea cerrada.
> Formato de cada entrada:
>
> ```
> ## YYYY-MM-DD — <título corto>
> - Rama: <rama>   · PR: <#/url>   · Estado: en curso | en revisión | mergeado
> - Hecho: <qué se implementó>
> - Notas: <bloqueos, pendientes, hallazgos>
> - Siguiente: <próximo paso>
> ```

---

## 2026-06-01 — Auditoría inicial y plan

- Rama: `main` · PR: — · Estado: base
- Hecho: análisis completo del código (repomix). Detectados 3 bugs críticos
  (variables de color sin definir, fuente no cargada, desajuste de mayúsculas en
  el logo) y el *splash* bloqueante de 2 s. Creados `CLAUDE.md`, `docs/PLAN.md`,
  `docs/PROGRESS.md` y `docs/DECISIONS.md`. Definida la arquitectura objetivo
  (Cloudflare Pages + Function + KV) y el roadmap MVP→Fase 2→Fase 3.
- Notas: stack en betas (Vite 8 beta) → fijar versiones estables antes de lanzar.
- Siguiente: arrancar `fix/css-variables` (primera tarea del MVP).

## 2026-06-01 — fix/css-variables

- Rama: `fix/css-variables` · PR: pendiente · Estado: listo para merge
- Hecho: definidas `--color-deep:#2C3E2D`, `--color-cream:#FAF8F4`, `--color-warm:#E8DDD0`, `--color-muted:#6B7067` en bloque `@theme` de `index.css`. Borrado `App.css` (boilerplate sin importar). Actualizado `CLAUDE.md` para referenciar `.audit/` en vez de `docs/`. Corregidos todos los errores de lint preexistentes: instalado `eslint-plugin-react` para `react/jsx-uses-vars`, arreglado `setCur` en `Services.jsx` y `go` en `Testimonials.jsx`.
- Notas: colores derivados de valores hardcodeados en el código (`rgba(44,62,45)` → deep, `#E8DDD0` → warm). Lint y build pasan.
- Siguiente: `feat/fonts` — cargar Cormorant Garamond.

## 2026-06-01 — feat/fonts

- Rama: `feat/fonts` · PR: pendiente · Estado: listo para merge
- Hecho: instalado `@fontsource/cormorant-garamond`; importados pesos 300, 300-italic, 500, 500-italic en `main.jsx`. La fuente se sirve localmente (sin dependencia de Google Fonts en runtime). Los archivos `.woff` quedan bundleados en el build.
- Notas: sin FOUT ya que la fuente se carga como asset estático. Lint y build pasan.
- Siguiente: `fix/logo-case` — corregir import Logo.png.

## 2026-06-01 — fix/logo-case

- Rama: `fix/logo-case` · PR: pendiente · Estado: listo para merge
- Hecho: corregido import en `Navbar.jsx` y `SplashScreen.jsx` de `logo.png` a `Logo.png` (coincide con el archivo real). El build confirma el asset como `Logo-*.png` — ya no fallará en Linux/Cloudflare.
- Notas: en Windows el bug era silencioso (FS case-insensitive). Lint y build pasan.
- Siguiente: `fix/navbar-colors` — corregir color:green en CTA y hamburguesa.

## 2026-06-01 — fix/navbar-colors

- Rama: `fix/navbar-colors` · PR: pendiente · Estado: listo para merge
- Hecho: corregido `color: "green"` → `"white"` en CTA desktop del Navbar; corregido `color: "green"` → `"var(--color-deep)"` en botón hamburguesa móvil. Adicionalmente: añadido `rel="noopener noreferrer"` al enlace de Google Maps en Footer (fix de seguridad); limpiada URL de Instagram (quitados parámetros fbclid de tracking).
- Notas: typos de CSS que pasaban en dev porque el navegador acepta nombres de color ingleses; en producción generaban contraste pobre o incorrecto. Lint y build pasan.
- Siguiente: `perf/remove-splash` — quitar setTimeout(2000) bloqueante.

## 2026-06-01 — perf/remove-splash

- Rama: `perf/remove-splash` · PR: pendiente · Estado: listo para merge
- Hecho: eliminado `useState(loading)`, `useEffect(setTimeout)` y la condición `if (loading) return <SplashScreen/>` de `App.jsx`. Eliminado el import de `SplashScreen` y de `useState/useEffect`. El Hero es ahora visible de inmediato — mejora directa de LCP y FCP. El componente `SplashScreen.jsx` se conserva en el repo por si se quiere reutilizar con animación no bloqueante en el futuro.
- Notas: CLAUDE.md prohíbe explícitamente reintroducir cualquier splash bloqueante. Lint y build pasan.
- Siguiente: `feat/seo-head` — SEO técnico completo en index.html.

## 2026-06-01 — feat/seo-head

- Rama: `feat/seo-head` · PR: pendiente · Estado: listo para merge
- Hecho: `lang="es-MX"` en `<html>`; `<title>` real orientado a búsqueda local; `meta description` 150 chars; Open Graph completo (og:type, og:url, og:title, og:description, og:image, og:locale, og:site_name); Twitter Card summary_large_image; `<link rel="canonical">`; favicon propio (`public/favicon.png` desde Logo.png); JSON-LD `Psychologist + LocalBusiness` con nombre, teléfono, dirección, coordenadas, sameAs y hasOfferCatalog; `public/robots.txt`; `public/sitemap.xml`. AggregateRating se añadirá en `feat/google-reviews` con datos reales.
- Notas: canonical, og:url, sitemap y JSON-LD usan placeholder `DOMINIO` — reemplazar con el dominio real antes de lanzar. Lint y build pasan.
- Siguiente: `feat/prerender` (vite-react-ssg) o `feat/google-reviews` — según disponibilidad de la API key de Google Places.

## 2026-06-01 — feat/prerender

- Rama: `feat/prerender` · PR: pendiente · Estado: listo para merge
- Hecho: instalado `vite-react-ssg` + `react-router-dom` (peer dep requerida). Actualizado `main.jsx` para exportar `createRoot` vía `ViteReactSSG` con ruta `{ path: '/', element: <App /> }`. Script `build` en `package.json` actualizado a `vite-react-ssg build`. Añadido `.vite-react-ssg-temp` a `.gitignore`. El `dist/index.html` generado pesa 34 KB y contiene 8 elementos estructurales con contenido real (sin depender de JS para renderizar).
- Notas: `npm run dev` sigue usando Vite normal — vite-react-ssg sólo actúa en build. Lint y build pasan.
- Siguiente: `chore/images` — reemplazar imágenes de Unsplash por archivos locales.

## 2026-06-01 — chore/images

- Rama: `chore/images` · PR: pendiente · Estado: listo para merge
- Hecho: creados 4 SVG placeholder en `src/assets/images/services/` (ansiedad, individual, pareja, crecimiento) con paleta del sitio. Services.jsx actualizado para importar archivos locales en vez de URLs de Unsplash. Atributos de imagen: `width`/`height` en todas, `loading="lazy"` en servicios/about/education, `fetchPriority="high"` en Hero (LCP). Alt texts descriptivos con contexto local (Cuernavaca). Borrado `react.svg` boilerplate de Vite.
- Notas: los SVG son placeholders — reemplazar por fotos reales de la psicóloga antes del lanzamiento. Lint y build pasan sin warnings.
- Siguiente: `feat/map-facade` — mapa diferido con botón Cómo llegar.

## 2026-06-01 — feat/map-facade

- Rama: `feat/map-facade` · PR: pendiente · Estado: listo para merge
- Hecho: creado componente `MapFacade.jsx` — muestra botón facade hasta que el usuario hace clic, momento en que carga el iframe de Google Maps Embed (coordenadas reales 18.9090, -99.2313). Botón "Cómo llegar" abre Maps nativo (`/maps/dir/?api=1&destination=...`). Integrado en Footer columna Contacto, reemplazando el enlace estático anterior.
- Notas: el iframe NO se carga en el render inicial → 0 impacto en Core Web Vitals del primer pintado. El facade usa la paleta del sitio. Lint y build pasan.
- Siguiente: `chore/pin-deps` — verificar si Vite 8 ya tiene release estable.

<!-- nuevas entradas debajo de esta línea -->
