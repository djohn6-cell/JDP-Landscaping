import type { Metadata } from "next";
import LocationPageTemplate, { locationSchema } from "@/components/LocationPageTemplate";
import { getLocation } from "@/lib/locations";

const location = getLocation("waxhaw")!;

export const metadata: Metadata = {
  title: "Waxhaw Landscaping & Drainage | JDP Landscaping",
  description:
    "Landscaping, yard drainage and stone work for Waxhaw, NC homeowners. Mulching, trimming, cleanups, French drains. Free quotes — (704) 989-6027.",
  alternates: { canonical: "/locations/waxhaw" },
  openGraph: {
    siteName: "JDP Landscaping",
    locale: "en_US",
    type: "website",
    title: "Waxhaw Landscaping & Drainage | JDP Landscaping",
    description:
      "Landscaping, drainage, and stone work for Waxhaw homeowners. Free quotes — no contracts.",
    url: "/locations/waxhaw",
    images: [
      {
        url: "/images/og-card.jpg",
        width: 1200,
        height: 630,
        alt: "JDP Landscaping — Waxhaw, NC landscaping and drainage",
      },
    ],
  },
};

export default function WaxhawPage() {
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
