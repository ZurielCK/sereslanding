# SeresLanding — Especificación de tareas por fases

> Documento de control de implementación. Actualizar estado y fecha al cerrar cada fase.
> Convenciones: rama por fase (`feat/fase-N-...`), commits atómicos, no romper funcionalidad existente.

---

## Estado general

| # | Fase | Estado | Fecha | Bloqueador |
|---|------|--------|-------|-----------|
| 0 | Dominio | ⏳ Manual | — | Acción del desarrollador |
| 1 | Imágenes en servicios | 🔲 Pendiente | — | Requiere archivos de imagen del desarrollador |
| 2 | Paleta de colores | ✅ Completada | 2026-06-23 | — |
| 3 | Bloque de redes sociales | ✅ Completada | 2026-06-23 | — |
| 4 | Videos cortos (comentado) | ✅ Completada | 2026-06-23 | — |

---

## Fase 0 — Dominio ⏳ Pendiente (manual)

**Objetivo:** Adquirir el dominio y apuntarlo al deploy actual.

**Pasos**
1. Comprar dominio en el registrador elegido.
2. En Cloudflare Pages: Settings → Custom domains → añadir dominio.
3. En el registrador: crear registro `CNAME` apuntando a `sereslanding.pages.dev`.
4. Forzar HTTPS (Cloudflare lo hace automáticamente).
5. Redirigir `www` → apex o viceversa desde Cloudflare.
6. Reemplazar `DOMINIO` en `index.html`, `public/robots.txt` y `public/sitemap.xml`.

**Criterios de aceptación**
- [ ] El dominio resuelve al sitio en producción.
- [ ] HTTPS activo con certificado válido.
- [ ] Redirección consistente `www` ↔ apex.
- [ ] `DOMINIO` eliminado de todos los archivos del proyecto.

---

## Fase 1 — Imágenes en categorías de servicios 🔲 Pendiente

**Objetivo:** Las 4 tarjetas de servicio muestran una imagen representativa real (no placeholder SVG).

**Estado actual:** Las tarjetas de servicios usan SVGs placeholder en `src/assets/images/services/`.

**Bloqueador:** El desarrollador debe entregar 4 imágenes (una por servicio):
- `ansiedad.webp` — Ansiedad y estrés
- `individual.webp` — Terapia individual
- `pareja.webp` — Terapia de pareja
- `crecimiento.webp` — Crecimiento personal

**Requerimientos técnicos**
- Formato WebP (preferido) o JPEG/PNG.
- Resolución mínima: 700 × 480 px.
- `loading="lazy"` (ya implementado en `Services.jsx`).
- `alt` descriptivo (ya implementado).
- `width` / `height` declarados para evitar CLS (ya implementado).

**Al recibir los assets:**
1. Colocar en `src/assets/images/services/`.
2. Actualizar los imports en `Services.jsx` (líneas 3–6).
3. Eliminar los SVGs placeholder.

**Criterios de aceptación**
- [ ] Cada tarjeta renderiza su imagen real.
- [ ] Todas las imágenes tienen `alt` descriptivo.
- [ ] Las imágenes usan `loading="lazy"`.
- [ ] Sin CLS perceptible al cargar.
- [ ] Sin warnings en consola relacionados con las imágenes.

---

## Fase 2 — Paleta de colores ✅ Completada — 2026-06-23

**Objetivo:** Paleta centralizada; ningún color hardcodeado en componentes.

**Resultado:**
- Todos los colores viven en `src/index.css` dentro del bloque `@theme`.
- Variables disponibles: `--color-deep`, `--color-cream`, `--color-warm`, `--color-muted`,
  `--color-accent`, `--color-fresh`, `--color-neutral`, `--color-whatsapp`, `--color-overlay`.
- Cero hex hardcodeados en archivos JSX (verificado con grep).

**Para cambiar la paleta:** editar únicamente `src/index.css`.
> Si cambias `--color-deep`, actualiza también el valor RGB en `--color-overlay`.

**Criterios de aceptación**
- [x] Todos los colores provienen de variables CSS; sin hex en componentes.
- [x] La paleta se aplica de forma consistente en header, secciones, botones y footer.
- [x] Sin regresiones visuales en componentes no relacionados.
- [ ] Contraste WCAG AA en textos principales (pendiente auditoría formal).

---

## Fase 3 — Bloque de redes sociales ✅ Completada — 2026-06-23

**Objetivo:** Sustituir el bloque de videos por un bloque de redes sociales con perfiles y posts destacados.

**Resultado:**
- Componente `src/sections/Social.jsx` implementado.
- Reemplaza `<Videos />` en `App.jsx`.
- Configuración centralizada en el bloque superior del archivo:
  - `INSTAGRAM_HANDLE` / `FACEBOOK_HANDLE` para los perfiles.
  - Array `FEATURED` con slots de posts/reels (activar poniendo la URL del post).
- Degradación elegante: muestra placeholder si el post aún no tiene URL.
- Sin carga de SDKs externos en el render inicial.

**Para activar un post embebido:**
```js
// En src/sections/Social.jsx — array FEATURED:
{ platform: "instagram", url: "https://www.instagram.com/reel/ABCDEF123/", label: "Reel 1" }
```

**Criterios de aceptación**
- [x] El bloque de redes sociales se renderiza en la landing.
- [x] Handles e URLs son placeholders configurables en un solo punto.
- [x] Si un embed no carga, la página sigue funcionando.
- [x] Sin errores de consola en flujo normal.
- [ ] Handles reales configurados (pendiente — usar constantes en `Social.jsx`).

---

## Fase 4 — Videos cortos (comentado) ✅ Completada — 2026-06-23

**Objetivo:** El componente de videos cortos existe y funciona, pero no se renderiza en producción.

**Resultado:**
- `src/sections/Videos.jsx` intacto y funcional.
- En `App.jsx`, el import y el uso están comentados con instrucción de reactivación.

**Para reactivar los videos:**
En `src/App.jsx`, descomentar:
```jsx
// import Videos from "./sections/Videos";
// ...
// {/* <Videos /> */}
```

**Criterios de aceptación**
- [x] `Videos.jsx` funciona correctamente cuando está activo.
- [x] En producción el bloque NO se renderiza.
- [x] Existe un comentario claro indicando cómo reactivarlo.
- [x] Reactivarlo requiere únicamente descomentar.
- [x] El resto de la landing no se ve afectada.

---

## Notas de arquitectura

- **Deploy:** Cloudflare Pages — `sereslanding.pages.dev` (preview) → dominio propio (pendiente Fase 0).
- **Build:** `npm run build` (vite-react-ssg) — debe pasar antes de cada merge a `main`.
- **API de reseñas:** `functions/api/reviews.js` — Pages Function, clave en variable de entorno `GOOGLE_PLACES_API_KEY`.
- **Colores:** `src/index.css` es el único punto de verdad para la paleta.
