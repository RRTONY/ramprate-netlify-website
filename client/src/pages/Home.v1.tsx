/*
 * Homepage: RampRate.com
 * Sections: Hero → Brands → Approach → Network → Commitment → CTA → Footer
 * Design: fusionramp.manus.space aesthetic — warm cinematic hero,
 * alternating dark/light/warm/blue sections, bold serif typography.
 */
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import BrandsSection from "@/components/BrandsSection";
import ApproachSection from "@/components/ApproachSection";
import NetworkSection from "@/components/NetworkSection";
import CommitmentSection from "@/components/CommitmentSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <BrandsSection />
      <ApproachSection />
      <NetworkSection />
      <CommitmentSection />
      <CTASection />
      <Footer />
    </div>
  );
}
