import type { Metadata } from "next";
import LocationPageTemplate, { locationSchema } from "@/components/LocationPageTemplate";
import { getLocation } from "@/lib/locations";

const location = getLocation("marvin")!;

export const metadata: Metadata = {
  title: "Marvin Landscaping & Drainage | JDP Landscaping",
  description:
    "Landscaping, yard drainage and stone work for Marvin, NC homeowners. Mulching, trimming, cleanups, French drains. Free quotes — (704) 989-6027.",
  alternates: { canonical: "/locations/marvin" },
  openGraph: {
    siteName: "JDP Landscaping",
    locale: "en_US",
    type: "website",
    title: "Marvin Landscaping & Drainage | JDP Landscaping",
    description:
      "Landscaping, drainage, and stone work for Marvin homeowners. Free quotes — no contracts.",
    url: "/locations/marvin",
    images: [
      {
        url: "/images/og-card.jpg",
        width: 1200,
        height: 630,
        alt: "JDP Landscaping — Marvin, NC landscaping and drainage",
      },
    ],
  },
};

export default function MarvinPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(locationSchema(location)) }}
      />
      <LocationPageTemplate location={location} />
    </>
  );
}
