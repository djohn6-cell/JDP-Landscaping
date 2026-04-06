import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import AboutPreview from "@/components/AboutPreview";
import ServiceTeaser from "@/components/ServiceTeaser";
import FeaturedWork from "@/components/FeaturedWork";
import WhyChooseUs from "@/components/WhyChooseUs";
import HomepageCTA from "@/components/HomepageCTA";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <TrustBar />
      <AboutPreview />
      <ServiceTeaser />
      <FeaturedWork />
      <WhyChooseUs />
      <HomepageCTA />
    </main>
  );
}
