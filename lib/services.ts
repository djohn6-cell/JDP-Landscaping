/**
 * Canonical service list for JDP Landscaping.
 *
 * SINGLE SOURCE OF TRUTH for service names and short copy. New pages
 * (services index, detail pages, location pages, JSON-LD) all read from here.
 *
 * NOTE: `components/Services.tsx` and `components/ServiceTeaser.tsx` still hold
 * their own arrays because they carry per-service imagery and icons. If you add
 * or rename a service, update those two as well — see CLAUDE.md.
 */

export type Service = {
  /** Present only for services that have a dedicated detail page. */
  slug?: string;
  name: string;
  /** One line, used on cards and in the services index. */
  short: string;
  /**
   * Schema.org Service names. An array because a single card can cover more
   * than one distinct offering — "Cleanups & Removal" presents as one service
   * but is still two separate offers as far as search engines are concerned.
   */
  schemaNames: string[];
};

/**
 * Six services, deliberately. Cleanups and Removal were merged in Oct 2026 —
 * they are the same visit in practice, and six divides evenly into every grid
 * on the site (3x2 on cards, a single row of 6 on the homepage teaser), which
 * seven did not.
 */
export const SERVICES: Service[] = [
  {
    name: "Mulching",
    short:
      "Fresh dark mulch that protects your plants, holds moisture, and makes every bed look sharp.",
    schemaNames: ["Mulching"],
  },
  {
    name: "Trimming",
    short:
      "Precise cuts that keep your hedges, shrubs, and trees looking sharp and well-maintained.",
    schemaNames: ["Hedge and Shrub Trimming"],
  },
  {
    name: "Cleanups & Removal",
    short:
      "Seasonal and post-storm cleanups, plus trees, shrubs, and overgrowth cleared and hauled away.",
    schemaNames: ["Yard Cleanup", "Tree and Shrub Removal", "Debris Haul Away"],
  },
  {
    name: "Planting",
    short: "The right plants in the right places, chosen for your soil, space, and style.",
    schemaNames: ["Planting"],
  },
  {
    slug: "drainage",
    name: "Drainage Solutions",
    short:
      "Standing water, soggy spots, and water running toward the house — solved at the source.",
    schemaNames: ["Drainage Service", "French Drain Installation"],
  },
  {
    slug: "rock-features",
    name: "Rock & Stone Features",
    short:
      "Dry creek beds, boulder placement, stone borders, and retaining walls that hold the grade.",
    schemaNames: ["Stone and Rock Landscaping", "Retaining Wall Construction"],
  },
];

/** Services that have their own page under /services/<slug>. */
export const DETAIL_SERVICES = SERVICES.filter(
  (s): s is Service & { slug: string } => Boolean(s.slug)
);

export const PHONE_E164 = "+17049896027";
export const PHONE_DISPLAY = "(704) 989-6027";
