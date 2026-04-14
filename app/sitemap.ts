import type { MetadataRoute } from "next";

const siteUrl = (() => {
  const raw = process.env.NEXT_PUBLIC_SITE_URL;
  try {
    return new URL(raw ?? "").href.replace(/\/$/, "");
  } catch {
    return "http://localhost:3000";
  }
})();

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: `${siteUrl}/`, lastModified: new Date("2026-04-13"), changeFrequency: "weekly", priority: 1 },
    { url: `${siteUrl}/about`, lastModified: new Date("2026-04-13"), changeFrequency: "monthly", priority: 0.8 },
    { url: `${siteUrl}/our-work`, lastModified: new Date("2026-04-13"), changeFrequency: "weekly", priority: 0.9 },
    { url: `${siteUrl}/quote`, lastModified: new Date("2026-04-13"), changeFrequency: "monthly", priority: 0.8 },
    { url: `${siteUrl}/faq`, lastModified: new Date("2026-04-13"), changeFrequency: "monthly", priority: 0.7 },
    { url: `${siteUrl}/locations`, lastModified: new Date("2026-04-13"), changeFrequency: "monthly", priority: 0.7 },
    { url: `${siteUrl}/locations/charlotte`, lastModified: new Date("2026-04-13"), changeFrequency: "monthly", priority: 0.8 },
    { url: `${siteUrl}/locations/matthews`, lastModified: new Date("2026-04-13"), changeFrequency: "monthly", priority: 0.8 },
    { url: `${siteUrl}/locations/huntersville`, lastModified: new Date("2026-04-13"), changeFrequency: "monthly", priority: 0.8 },
    { url: `${siteUrl}/locations/concord`, lastModified: new Date("2026-04-13"), changeFrequency: "monthly", priority: 0.8 },
    { url: `${siteUrl}/locations/university-city`, lastModified: new Date("2026-04-13"), changeFrequency: "monthly", priority: 0.8 },
    { url: `${siteUrl}/privacy-policy`, lastModified: new Date("2026-04-13"), changeFrequency: "yearly", priority: 0.3 },
    { url: `${siteUrl}/terms-and-conditions`, lastModified: new Date("2026-04-13"), changeFrequency: "yearly", priority: 0.3 },
  ];
}
