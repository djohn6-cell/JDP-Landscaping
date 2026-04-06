import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import SocialProof from "@/components/SocialProof";
import ServiceTeaser from "@/components/ServiceTeaser";
import OurWorkCTA from "@/components/OurWorkCTA";
import HomepageCTA from "@/components/HomepageCTA";

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
