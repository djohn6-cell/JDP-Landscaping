import type { MetadataRoute } from "next";

const siteUrl = (() => {
  const raw = process.env.NEXT_PUBLIC_SITE_URL;
  try {
    return new URL(raw ?? "").href.replace(/\/$/, "");
  } catch {
    return "http://localhost:3000";
  }
})();

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: `${siteUrl}/sitemap.xml`,
  };
}
