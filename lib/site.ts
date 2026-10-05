/**
 * Canonical site URL + schema identity.
 *
 * Previously each of layout.tsx, sitemap.ts, robots.ts and three Service schemas
 * derived or hardcoded this separately, which produced a mismatch: the root node
 * used `new URL(raw).href` (always trailing-slash) while page-level schemas
 * hardcoded the bare domain. The two strings never reconciled, so crawlers saw
 * two unconnected business entities per page.
 *
 * Everything now resolves through here, and schema nodes reference the business
 * by @id rather than redeclaring it.
 */

/** No trailing slash. Use for canonical URLs, sitemap entries, and schema. */
export const SITE_URL = (() => {
  const raw = process.env.NEXT_PUBLIC_SITE_URL;
  try {
    return new URL(raw ?? "").href.replace(/\/$/, "");
  } catch {
    return "http://localhost:3000";
  }
})();

/**
 * Stable @id for the one LocalBusiness node, declared in app/layout.tsx.
 * Page-level Service schemas point at this instead of describing the business
 * again — one entity, described once.
 */
export const BUSINESS_ID = `${SITE_URL}#business`;
