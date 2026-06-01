# CLAUDE.md — SerEs Psicoterapia (landing)

> Memoria de proyecto. Claude Code la carga automáticamente al abrir el repo.
> Mantenla corta y actual. Edítala con `/memory`.

## Qué es este proyecto

Landing page de página única para **SerEs Psicoterapia Corporal Humanista**
(psicóloga en Cuernavaca, Morelos). Objetivo #1: **captar pacientes locales**
vía buscadores y convertirlos a contacto por WhatsApp / reserva de cita.
Prioridad: **lanzar pronto (MVP first)** sin hipotecar la escalabilidad.

## Stack

- React 19 + **Vite (versión estable, NO beta)** + Tailwind CSS 4 (`@tailwindcss/vite`)
- framer-motion, react-icons. (Swiper: revisar si sigue en uso o es dependencia muerta.)
- Render objetivo: **HTML prerenderizado** (vite-react-ssg), no SPA pura.
- Deploy: **Cloudflare Pages** (estático) + **Pages Function** `/api/reviews` + **Workers KV** (caché).

## Reglas duras (NO romper)

1. **Los colores viven en `@theme`/`:root`.** Las variables `--color-deep`,
   `--color-cream`, `--color-warm`, `--color-muted` DEBEN estar definidas.
   Nunca dejar `var(--color-*)` sin declarar.
2. **Prohibido reintroducir el *splash* bloqueante** (`setTimeout` que retrasa el
   contenido). Cualquier transición debe ser no bloqueante (<300 ms).
3. **Nombres de archivo sensibles a mayúsculas:** los imports deben coincidir
   EXACTO con el archivo (`Logo.png` ≠ `logo.png`). El build de Cloudflare es Linux.
4. **Mapas y videos siempre con *facade* / lazy-load.** Nunca cargar iframes de
   terceros en el render inicial (Core Web Vitals).
5. **La API key de Google NUNCA va al cliente.** Las reseñas se piden desde la
   Pages Function (server-side), con caché en KV (~24 h) y atribución obligatoria.
6. **No inventar testimonios.** La prueba social son reseñas reales de Google
   (vía API) o testimonios propios con consentimiento.
7. **Marca unificada:** usar el nombre coherente con el Google Business Profile
   ("SerEs Psicoterapia Corporal Humanista"). NAP idéntico en web/GBP/redes.

## Datos del negocio

- WhatsApp: `52 1 777 789 1025` (lada 777 = Cuernavaca).
- Coordenadas del consultorio: **18.9090, -99.2313**.
- Perfil Google (reseñas): `https://g.page/r/CXYnQ4kSgsS1EAE/review`.
- Redes: Instagram `seres_consenti2`, Facebook `seres.psicoterapia`.

## Comandos

```bash
npm run dev      # desarrollo
npm run build    # build de producción (debe pasar antes de cada PR)
npm run lint     # eslint
npm run preview  # previsualizar el build
```

## Convenciones de trabajo

- **Una rama por tarea** (ver `.audit/PLAN.md`): `fix/…`, `feat/…`, `perf/…`, `chore/…`.
- **Conventional Commits**: `feat:`, `fix:`, `perf:`, `chore:`, `docs:`.
- **Un PR por rama**; revisar el preview de Cloudflare antes de unir a `main`.
- Al cerrar una tarea: actualizar `docs/PROGRESS.md`, marcarla en `docs/PLAN.md`,
  y si hubo una decisión no trivial, añadir entrada a `docs/DECISIONS.md`.
- Antes de abrir PR: `npm run lint && npm run build` deben pasar.

## Documentos de control

- `.audit/PLAN.md` — QUÉ hacer (roadmap / checklist).
- `.audit/PROGRESS.md` — QUÉ pasó (bitácora / auditoría).
- `.audit/DECISIONS.md` — POR QUÉ (decisiones de arquitectura).
