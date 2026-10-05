/**
 * Service-area locations for JDP Landscaping.
 *
 * REALIGNED Oct 2026 to the south-metro / Union County core the crew actually
 * drives to. Huntersville, Concord and University City (north metro) were
 * removed — see `next.config.ts` for their 301 redirects.
 *
 * Copy here is deliberately factual: county, general character of the housing
 * stock, and the regional clay-soil drainage angle. Do not add population
 * figures, landmarks, or claims about specific neighborhoods that have not been
 * confirmed — see the Data Integrity Rules in CLAUDE.md.
 */

export type Location = {
  slug: string;
  name: string;
  county: string;
  /** Short line for the locations index card. */
  blurb: string;
  /** Hero sub-headline. */
  heroSub: string;
  /** Body paragraphs for the "proud to serve" section. */
  intro: string[];
  /** The local water / drainage angle — the highest-intent service. */
  drainageNote: string;
};

export const LOCATIONS: Location[] = [
  {
    slug: "waxhaw",
    name: "Waxhaw",
    county: "Union County",
    blurb:
      "Our home base — full-service landscaping, drainage, and stone work for Waxhaw properties.",
    heroSub:
      "Trimming, mulching, cleanups, drainage, and rock work for Waxhaw homeowners. Free quotes, no contracts, honest work.",
    intro: [
      "Waxhaw is where we are based, and it is where we do most of our work. From the older homes near downtown to the newer subdivisions spreading out along the highways, we know how these properties are built and how they drain.",
      "We handle the regular upkeep — mulch, trimming, planting, and seasonal cleanups — and the bigger projects too: drainage systems, dry creek beds, boulder placement, and stone borders.",
      "JDP Landscaping is locally owned, fully insured, and built on referrals from neighbors. When we quote a job, that is the price. No surprises, no pressure.",
    ],
    drainageNote:
      "Much of Waxhaw sits on heavy piedmont clay, which holds water instead of letting it drain. After a hard rain that shows up as standing water in the low spots, soggy ground that never quite dries, and runoff heading toward the foundation. We fix that at the source.",
  },
  {
    slug: "marvin",
    name: "Marvin",
    county: "Union County",
    blurb:
      "Landscaping, drainage, and stone work for Marvin's larger lots and estate properties.",
    heroSub:
      "Full-property care for Marvin homeowners — mulch, trimming, planting, cleanups, drainage, and rock features.",
    intro: [
      "Marvin properties tend to be large, and large properties come with more to look after — longer bed lines, more mature trees, and more ground for water to move across.",
      "We take care of the routine work and the projects that need equipment: drainage runs, dry creek beds, boulder work, and stone retaining walls that hold a slope where it needs holding.",
      "Locally owned, fully insured, and based just down the road in Waxhaw. Free quotes, no contracts.",
    ],
    drainageNote:
      "On bigger lots water has further to travel, and it collects. Marvin properties with a slope toward the house, or a low corner that stays wet for days, usually need the water intercepted and routed somewhere it can go — not just the surface patched.",
  },
  {
    slug: "weddington",
    name: "Weddington",
    county: "Union County",
    blurb:
      "Landscaping and drainage for Weddington's wooded lots and established neighborhoods.",
    heroSub:
      "Mulching, trimming, removal, planting, cleanups, drainage, and stone work for Weddington homes.",
    intro: [
      "Weddington lots are often wooded and generously sized, which looks beautiful and makes for real maintenance — leaf volume in the fall, overgrowth creeping into beds, and shade that keeps wet ground wet.",
      "We clear it, cut it back, haul it off, and where water is the underlying problem, we deal with the water.",
      "Locally owned and fully insured. Free quotes with no contracts and no pressure.",
    ],
    drainageNote:
      "Tree cover and clay soil are a difficult combination for drainage — less sun to dry the ground, roots and leaf litter slowing runoff, and heavy soil underneath that will not absorb it. Weddington yards that stay soft long after the rain stops usually need a drain line, not more topsoil.",
  },
  {
    slug: "ballantyne",
    name: "Ballantyne",
    county: "south Charlotte, Mecklenburg County",
    blurb:
      "Polished landscaping and drainage work for Ballantyne's master-planned neighborhoods.",
    heroSub:
      "Mulch, trimming, planting, cleanups, drainage, and stone features for Ballantyne homeowners.",
    intro: [
      "Ballantyne neighborhoods are tightly kept, and standards are high — beds are expected to look sharp and edges are expected to be clean. That suits us.",
      "We handle the regular maintenance that keeps a property looking the way the neighborhood expects, plus drainage and stone work when something needs fixing rather than tidying.",
      "Locally owned, fully insured, straightforward pricing. Free quotes, no contracts.",
    ],
    drainageNote:
      "Closely spaced homes concentrate runoff. Water coming off a roof or a neighboring lot has fewer places to go, and it often ends up pooling in the same corner every storm. Downspout extensions, surface drains, and a properly built drain line usually solve it.",
  },
  {
    slug: "indian-trail",
    name: "Indian Trail",
    county: "Union County",
    blurb:
      "Landscaping, cleanups, and drainage for Indian Trail's growing residential neighborhoods.",
    heroSub:
      "Mulching, trimming, removal, planting, cleanups, drainage, and rock work for Indian Trail properties.",
    intro: [
      "Indian Trail has grown fast, and a lot of its homes are newer builds on lots that were graded recently. That is great for a fresh start and hard on drainage.",
      "We do the ongoing work — mulch, trimming, planting, cleanups — and the corrective work when a yard is not shedding water the way it should.",
      "Locally owned, fully insured, and up the road in Waxhaw. Free quotes, no contracts.",
    ],
    drainageNote:
      "New construction often means compacted subsoil and fill dirt that water will not move through. If a yard has held water since the day the sod went down, that is usually a grading and drainage problem rather than anything that will settle out on its own.",
  },
  {
    slug: "matthews",
    name: "Matthews",
    county: "Mecklenburg County",
    blurb:
      "Quality landscaping, drainage, and stone work for Matthews homeowners.",
    heroSub:
      "Mulching, trimming, removal, planting, cleanups, drainage, and rock features for Matthews properties.",
    intro: [
      "Matthews is an established town with mature trees and settled neighborhoods, and homeowners here take real pride in their properties. Neighbors notice.",
      "We handle everything from routine mulching and trimming to full cleanups, new planting, drainage systems, and stone work.",
      "JDP Landscaping is locally owned, fully insured, and built on referrals. When we quote a job, that is the price — no surprises, no pressure.",
    ],
    drainageNote:
      "Older Matthews properties often have drainage that worked when the house was built and stopped working as trees matured, grades shifted, and gutters were extended. Re-routing water away from the house is usually simpler than people expect.",
  },
  {
    slug: "charlotte",
    name: "Charlotte",
    county: "Mecklenburg County",
    blurb:
      "Serving south Charlotte homeowners and property managers with landscaping, drainage, and stone work.",
    heroSub:
      "Professional landscaping, drainage, and rock features for Charlotte properties — free quotes, no contracts.",
    intro: [
      "We work across south Charlotte, including Ballantyne and Pineville, for homeowners and property managers who want the job done properly the first time.",
      "That covers the regular care — mulch, trimming, removal, planting, seasonal cleanups — and the heavier projects: drainage, dry creek beds, boulders, and stone borders.",
      "Locally owned, fully insured, and straightforward about pricing. Free quotes, no contracts, no pressure.",
    ],
    drainageNote:
      "Charlotte sits on piedmont clay that drains slowly. Combine that with decades of development redirecting runoff and you get yards that flood in the same spot every storm. The fix is almost always giving the water a defined path off the property.",
  },
];

export function getLocation(slug: string): Location | undefined {
  return LOCATIONS.find((l) => l.slug === slug);
}

/** Towns served without a dedicated page — named in copy and schema only. */
export const ALSO_SERVED = [
  "Pineville",
  "Stallings",
  "Mint Hill",
  "Monroe",
  "Wesley Chapel",
];
