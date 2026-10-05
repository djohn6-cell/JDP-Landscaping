import type { Metadata } from "next";
import LocationPageTemplate, { locationSchema } from "@/components/LocationPageTemplate";
import { getLocation } from "@/lib/locations";

const location = getLocation("indian-trail")!;

export const metadata: Metadata = {
  title: "Indian Trail Landscaping & Drainage | JDP Landscaping",
  description:
    "Landscaping, yard drainage and stone work for Indian Trail, NC homeowners. Mulching, trimming, cleanups, French drains. Free quotes — (704) 989-6027.",
  alternates: { canonical: "/locations/indian-trail" },
  openGraph: {
    siteName: "JDP Landscaping",
    locale: "en_US",
    type: "website",
    title: "Indian Trail Landscaping & Drainage | JDP Landscaping",
    description:
      "Landscaping, drainage, and stone work for Indian Trail homeowners. Free quotes — no contracts.",
    url: "/locations/indian-trail",
    images: [
      {
        url: "/images/og-card.jpg",
        width: 1200,
        height: 630,
        alt: "JDP Landscaping — Indian Trail, NC landscaping and drainage",
      },
    ],
  },
};

export default function IndianTrailPage() {
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
