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

<!-- nuevas entradas debajo de esta línea -->
