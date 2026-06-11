import type { Metadata } from "next";
import Hero from "@/components/Hero";
import AmbientGlow from "@/components/AmbientGlow";
import SocialProof from "@/components/SocialProof";
import ServiceTeaser from "@/components/ServiceTeaser";
import OurWorkCTA from "@/components/OurWorkCTA";
import HomepageCTA from "@/components/HomepageCTA";

export const metadata: Metadata = {
  title: "JDP Landscaping | Waxhaw, Marvin & Weddington NC",
  description:
    "Honest, high-quality landscaping in Waxhaw, Marvin, Weddington, and surrounding areas. Trimming, mulching, removal, planting, and more. Free quote — no pressure.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "JDP Landscaping | Waxhaw, Marvin, Weddington & Surrounding Areas",
    description:
      "Honest, high-quality landscaping built to last. Call us for anything you need around your property.",
    url: "/",
    images: [
      {
        url: "/images/og-card.jpg",
        width: 1200,
        height: 630,
        alt: "JDP Landscaping — Landscaping Done Right",
      },
    ],
  },
};

export default function HomePage() {
  return (
    <main className="bg-cream">
      <AmbientGlow />
      <Hero />
      <SocialProof />
      <ServiceTeaser />
      <OurWorkCTA />
      <HomepageCTA />
    </main>
  );
}
