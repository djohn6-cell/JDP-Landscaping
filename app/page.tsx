import type { Metadata } from "next";
import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import SocialProof from "@/components/SocialProof";
import ServiceTeaser from "@/components/ServiceTeaser";
import OurWorkCTA from "@/components/OurWorkCTA";
import HomepageCTA from "@/components/HomepageCTA";

export const metadata: Metadata = {
  title: "JDP Landscaping | Charlotte, Marvin & Waxhaw NC",
  description:
    "Honest, high-quality landscaping in Charlotte, Marvin, Waxhaw, and surrounding areas. Trimming, mulching, removal, planting, and more. Free quote — no pressure.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "JDP Landscaping | Charlotte, Marvin & Waxhaw NC",
    description:
      "Honest, high-quality landscaping built to last. Call us for anything you need around your property.",
    url: "/",
    images: [
      {
        url: "/images/projects/project-2-after.jpg",
        width: 1200,
        height: 630,
        alt: "JDP Landscaping — Charlotte, NC landscaping project",
      },
    ],
  },
};

export default function HomePage() {
  return (
    <main>
      <Hero />
      <TrustBar />
      <SocialProof />
      <ServiceTeaser />
      <OurWorkCTA />
      <HomepageCTA />
    </main>
  );
}
