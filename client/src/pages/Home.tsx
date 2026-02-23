/**
 * Home Page — RampRate "Luminous Interference" design
 * Sections in order:
 * 1. Navbar (sticky)
 * 2. Hero (full-screen concentric ripple)
 * 3. Trust Bar (scrolling logos)
 * 4. Concentric Model (interactive rings)
 * 5. Intervention Cards (6 cards + 3-step)
 * 6. Practice Cards (4 practices)
 * 7. Proof Preview (3 testimonials)
 * 8. Network Viz (particle canvas)
 * 9. CTA Section
 * 10. Footer
 */
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import TrustBar from "@/components/TrustBar";
import ConcentricModel from "@/components/ConcentricModel";
import InterventionCards from "@/components/InterventionCards";
import PracticeCards from "@/components/PracticeCards";
import ProofPreview from "@/components/ProofPreview";
import NetworkViz from "@/components/NetworkViz";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Navbar />
      <main>
        <HeroSection />
        <div id="trust-bar">
          <TrustBar />
        </div>
        <ConcentricModel />
        <InterventionCards />
        <PracticeCards />
        <ProofPreview />
        <NetworkViz />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
