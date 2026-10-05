import type { MetadataRoute } from "next";
import { LOCATIONS } from "@/lib/locations";
import { DETAIL_SERVICES } from "@/lib/services";
import { SITE_URL } from "@/lib/site";

const siteUrl = SITE_URL;

const LAST_STRUCTURAL_UPDATE = new Date("2026-10-05");

export default function sitemap(): MetadataRoute.Sitemap {
  const core: MetadataRoute.Sitemap = [
    { url: `${siteUrl}/`, lastModified: LAST_STRUCTURAL_UPDATE, changeFrequency: "weekly", priority: 1 },
    { url: `${siteUrl}/services`, lastModified: LAST_STRUCTURAL_UPDATE, changeFrequency: "monthly", priority: 0.9 },
    { url: `${siteUrl}/our-work`, lastModified: LAST_STRUCTURAL_UPDATE, changeFrequency: "weekly", priority: 0.8 },
    { url: `${siteUrl}/about`, lastModified: new Date("2026-04-13"), changeFrequency: "monthly", priority: 0.8 },
    { url: `${siteUrl}/quote`, lastModified: new Date("2026-04-13"), changeFrequency: "monthly", priority: 0.8 },
    { url: `${siteUrl}/faq`, lastModified: LAST_STRUCTURAL_UPDATE, changeFrequency: "monthly", priority: 0.7 },
    { url: `${siteUrl}/locations`, lastModified: LAST_STRUCTURAL_UPDATE, changeFrequency: "monthly", priority: 0.9 },
  ];

  // Drainage and rock-features carry the highest commercial intent on the site.
  const services: MetadataRoute.Sitemap = DETAIL_SERVICES.map((service) => ({
    url: `${siteUrl}/services/${service.slug}`,
    lastModified: LAST_STRUCTURAL_UPDATE,
    changeFrequency: "monthly" as const,
    priority: 0.9,
  }));

  const locations: MetadataRoute.Sitemap = LOCATIONS.map((location) => ({
    url: `${siteUrl}/locations/${location.slug}`,
    lastModified: LAST_STRUCTURAL_UPDATE,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  const legal: MetadataRoute.Sitemap = [
    { url: `${siteUrl}/privacy-policy`, lastModified: new Date("2026-04-13"), changeFrequency: "yearly", priority: 0.3 },
    { url: `${siteUrl}/terms-and-conditions`, lastModified: new Date("2026-04-13"), changeFrequency: "yearly", priority: 0.3 },
  ];

  return [...core, ...services, ...locations, ...legal];
}
