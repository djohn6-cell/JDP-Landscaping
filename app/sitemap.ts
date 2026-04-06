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
    { url: `${siteUrl}/`, lastModified: new Date(), changeFrequency: "weekly", priority: 1 },
    { url: `${siteUrl}/our-work`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.9 },
    { url: `${siteUrl}/quote`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${siteUrl}/privacy`, lastModified: new Date(), changeFrequency: "yearly", priority: 0.3 },
    { url: `${siteUrl}/terms`, lastModified: new Date(), changeFrequency: "yearly", priority: 0.3 },
  ];
}
