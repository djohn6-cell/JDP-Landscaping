import type { Metadata } from "next";
import LocationPageTemplate, { locationSchema } from "@/components/LocationPageTemplate";
import { getLocation } from "@/lib/locations";

const location = getLocation("ballantyne")!;

export const metadata: Metadata = {
  title: "Ballantyne Landscaping & Drainage | JDP Landscaping",
  description:
    "Landscaping, yard drainage and stone work for Ballantyne, NC homeowners. Mulching, trimming, cleanups, French drains. Free quotes — (704) 989-6027.",
  alternates: { canonical: "/locations/ballantyne" },
  openGraph: {
    siteName: "JDP Landscaping",
    locale: "en_US",
    type: "website",
    title: "Ballantyne Landscaping & Drainage | JDP Landscaping",
    description:
      "Landscaping, drainage, and stone work for Ballantyne homeowners. Free quotes — no contracts.",
    url: "/locations/ballantyne",
    images: [
      {
        url: "/images/og-card.jpg",
        width: 1200,
        height: 630,
        alt: "JDP Landscaping — Ballantyne, NC landscaping and drainage",
      },
    ],
  },
};

export default function BallantynePage() {
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
