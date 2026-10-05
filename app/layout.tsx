import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import { DM_Sans, Montserrat, Playfair_Display, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { SERVICES } from "@/lib/services";
import { BUSINESS_ID, SITE_URL } from "@/lib/site";
import StickyNav from "@/components/StickyNav";
import StickyCTAs from "@/components/StickyCTAs";
import Footer from "@/components/Footer";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["700", "800", "900"],
  style: ["normal", "italic"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["700", "800", "900"],
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const siteUrl = SITE_URL;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "JDP Landscaping | Waxhaw, Marvin & Weddington NC",
  description:
    "Honest, high-quality landscaping, yard drainage, and stone work in Waxhaw, Marvin, Weddington, and surrounding areas. Trimming, mulching, planting, French drains, and dry creek beds. Free quote — no pressure.",
  openGraph: {
    title: "Book a Free Quote Now",
    description:
      "Honest, high-quality landscaping built to last. Call us for anything you need around your property.",
    siteName: "JDP Landscaping",
    locale: "en_US",
    type: "website",
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

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "HomeAndConstructionBusiness",
  "@id": BUSINESS_ID,
  name: "JDP Landscaping",
  description:
    "Honest, high-quality landscaping, yard drainage, and stone work in Waxhaw, Marvin, Weddington, and the south Charlotte area. Trimming, mulching, removal, planting, cleanups, French drains, and dry creek beds.",
  telephone: "+17049896027",
  email: "Jdp@jdplandscaping.com",
  url: siteUrl,
  image: `${siteUrl}/images/logo.jpeg`,
  logo: `${siteUrl}/images/logo.jpeg`,
  sameAs: ["https://nextdoor.com/pages/jdp-landscaping-waxhaw-nc/"],
  address: {
    "@type": "PostalAddress",
    addressLocality: "Waxhaw",
    addressRegion: "NC",
    addressCountry: "US",
  },
  // Realigned Oct 2026 to the south-metro service area. Huntersville and
  // Concord removed — they are north of the city, outside where the crew works.
  areaServed: [
    "Waxhaw",
    "Marvin",
    "Weddington",
    "Charlotte",
    "Ballantyne",
    "Pineville",
    "Matthews",
    "Indian Trail",
    "Stallings",
    "Mint Hill",
    "Monroe",
    "Wesley Chapel",
  ].map((name) => ({
    "@type": "City",
    name,
    addressRegion: "NC",
    addressCountry: "US",
  })),
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Landscaping, Drainage & Stone Services",
    itemListElement: SERVICES.flatMap((service) =>
      service.schemaNames.map((name) => ({
        "@type": "Offer",
        itemOffered: { "@type": "Service", name },
      }))
    ),
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
      className={`${playfair.variable} ${montserrat.variable} ${dmSans.variable} ${spaceGrotesk.variable} scroll-smooth`}
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
        <Analytics />
      </body>
    </html>
  );
}
