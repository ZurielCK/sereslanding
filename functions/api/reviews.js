/**
 * GET /api/reviews
 * Cloudflare Pages Function — server-side proxy para Google Places API.
 * La API key NUNCA viaja al cliente; vive en variables de entorno de Cloudflare.
 *
 * Variables de entorno requeridas (Cloudflare Pages > Settings > Variables):
 *   GOOGLE_PLACES_API_KEY  — tu API key de Google Places (New)
 *
 * Binding KV opcional (Cloudflare Pages > Settings > Functions > KV namespaces):
 *   REVIEWS_KV  — namespace para caché de 24h (evita llamadas repetidas a Google)
 */

const PLACE_ID   = "ChIJ1Su43dXfzYURdidDiRKCxLU";
const REVIEW_URL = "https://g.page/r/CXYnQ4kSgsS1EAE/review";
const CACHE_KEY  = "gbp_reviews";
const CACHE_TTL  = 60 * 60 * 6; // 6 horas en segundos

const CORS = {
  "Content-Type": "application/json",
  "Access-Control-Allow-Origin": "*",
  "Cache-Control": "public, max-age=3600",
};

export async function onRequestGet({ env }) {
  const API_KEY = env.GOOGLE_PLACES_API_KEY;

  if (!API_KEY) {
    return new Response(
      JSON.stringify({
        error: "API key no configurada",
        debug: `env keys disponibles: ${Object.keys(env).join(", ") || "ninguna"}`,
      }),
      { status: 500, headers: CORS }
    );
  }

  // ─── 1. Intentar caché en Workers KV ────────────────────────────────────
  const KV = env.REVIEWS_KV;
  if (KV) {
    const cached = await KV.get(CACHE_KEY);
    if (cached) {
      return new Response(cached, { headers: CORS });
    }
  }

  // ─── 2. Llamar a Places API (New) ───────────────────────────────────────
  const url = `https://places.googleapis.com/v1/places/${PLACE_ID}`;
  const res = await fetch(url, {
    headers: {
      "X-Goog-Api-Key": API_KEY,
      "X-Goog-FieldMask": "id,rating,userRatingCount,reviews",
      "Accept-Language": "es-MX",
    },
  });

  if (!res.ok) {
    return new Response(
      JSON.stringify({ error: "Error al llamar a Google Places API" }),
      { status: 502, headers: CORS }
    );
  }

  const data = await res.json();

  const payload = {
    rating:          data.rating          ?? null,
    userRatingCount: data.userRatingCount ?? 0,
    reviewLink:      REVIEW_URL,
    reviews: (data.reviews ?? []).map((r) => ({
      authorName:  r.authorAttribution?.displayName ?? "Anónimo",
      authorPhoto: r.authorAttribution?.photoUri    ?? null,
      rating:      r.rating,
      text:        r.text?.text ?? "",
      publishTime: r.publishTime ?? null,
    })),
  };

  const json = JSON.stringify(payload);

  // ─── 3. Guardar en caché 24h si KV está disponible ──────────────────────
  if (KV) {
    await KV.put(CACHE_KEY, json, { expirationTtl: CACHE_TTL });
  }

  return new Response(json, { headers: CORS });
}
