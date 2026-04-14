import type { Metadata } from "next";
import { Montserrat, Inter } from "next/font/google";
import "./globals.css";
import StickyNav from "@/components/StickyNav";
import StickyCTAs from "@/components/StickyCTAs";
import Footer from "@/components/Footer";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["400", "600", "700", "800", "900"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const siteUrl = (() => {
  const raw = process.env.NEXT_PUBLIC_SITE_URL;
  try { return new URL(raw ?? "").href; } catch { return "http://localhost:3000"; }
})();

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "JDP Landscaping | Charlotte, Marvin & Waxhaw NC",
  description:
    "Honest, high-quality landscaping in Charlotte, Marvin, Waxhaw, and surrounding areas. Trimming, mulching, removal, planting, and more. Free quote — no pressure.",
  openGraph: {
    title: "JDP Landscaping | Charlotte, Marvin & Waxhaw NC",
    description:
      "Honest, high-quality landscaping built to last. Call us for anything you need around your property.",
    siteName: "JDP Landscaping",
    locale: "en_US",
    type: "website",
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

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "HomeAndConstructionBusiness",
  "@id": siteUrl,
  name: "JDP Landscaping",
  description:
    "Honest, high-quality landscaping in Charlotte, Marvin, Waxhaw, and surrounding areas. Trimming, mulching, removal, planting, and more.",
  telephone: "+17049896027",
  email: "jdpone@gmail.com",
  url: siteUrl,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Waxhaw",
    addressRegion: "NC",
    addressCountry: "US",
  },
  areaServed: [
    { "@type": "City", name: "Charlotte", addressRegion: "NC", addressCountry: "US" },
    { "@type": "City", name: "Marvin", addressRegion: "NC", addressCountry: "US" },
    { "@type": "City", name: "Waxhaw", addressRegion: "NC", addressCountry: "US" },
    { "@type": "City", name: "Ballantyne", addressRegion: "NC", addressCountry: "US" },
    { "@type": "City", name: "Pineville", addressRegion: "NC", addressCountry: "US" },
    { "@type": "City", name: "Matthews", addressRegion: "NC", addressCountry: "US" },
    { "@type": "City", name: "Indian Trail", addressRegion: "NC", addressCountry: "US" },
    { "@type": "City", name: "Stallings", addressRegion: "NC", addressCountry: "US" },
    { "@type": "City", name: "Mint Hill", addressRegion: "NC", addressCountry: "US" },
    { "@type": "City", name: "Huntersville", addressRegion: "NC", addressCountry: "US" },
    { "@type": "City", name: "Concord", addressRegion: "NC", addressCountry: "US" },
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Landscaping Services",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Lawn Trimming" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Mulching" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Tree and Shrub Removal" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Planting" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Yard Cleanup" } },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${montserrat.variable} ${inter.variable} scroll-smooth`}
    >
      <body className="antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:z-[200] focus:top-4 focus:left-4 focus:bg-white focus:text-brand-green focus:font-bold focus:text-sm focus:px-4 focus:py-2 focus:rounded-lg focus:shadow-lg focus:outline-none focus:ring-2 focus:ring-brand-green"
        >
          Skip to main content
        </a>
        <StickyNav />
        <StickyCTAs />
        <div id="main-content" tabIndex={-1}>
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
