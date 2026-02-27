import PageLayout from "@/components/PageLayout";
import PageHero from "@/components/PageHero";

export default function Terms() {
  return (
    <PageLayout>
      <PageHero headline="Terms of Service" subCopy="Terms governing use of this website" />
      <section className="py-20 bg-[#0d1117]">
        <div className="max-w-3xl mx-auto px-5 sm:px-8 text-white/70 space-y-8" style={{ fontFamily: "var(--font-body)" }}>
          <p className="text-sm text-white/40 uppercase tracking-widest" style={{ fontFamily: "var(--font-mono)" }}>Last Updated: February 2026</p>

          <h2 className="text-2xl font-bold text-white" style={{ fontFamily: "var(--font-display)" }}>1. Acceptance of Terms</h2>
          <p>By accessing and using this website (ramprate.com), you accept and agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use this website.</p>

          <h2 className="text-2xl font-bold text-white" style={{ fontFamily: "var(--font-display)" }}>2. Description of Services</h2>
          <p>RampRate, Inc. provides enterprise advisory services including IT sourcing intelligence, growth strategy, Web3 advisory, and impact consulting. This website provides information about our services, thought leadership content, and contact mechanisms. The content on this site is for informational purposes and does not constitute professional advice.</p>

          <h2 className="text-2xl font-bold text-white" style={{ fontFamily: "var(--font-display)" }}>3. Intellectual Property</h2>
          <p>All content on this website — including text, graphics, logos, images, data compilations, and software — is the property of RampRate, Inc. or its content suppliers and is protected by intellectual property laws. The RampRate name, logo, SPY Index, Flow Circuit, and related marks are trademarks of RampRate, Inc.</p>

          <h2 className="text-2xl font-bold text-white" style={{ fontFamily: "var(--font-display)" }}>4. Use of Content</h2>
          <p>You may view, download, and print content from this website for personal, non-commercial use only. You may not reproduce, distribute, modify, or create derivative works from any content without prior written consent from RampRate, Inc. Blog articles may be shared with proper attribution and a link to the original post.</p>

          <h2 className="text-2xl font-bold text-white" style={{ fontFamily: "var(--font-display)" }}>5. User Submissions</h2>
          <p>When you submit information through our contact forms, you grant RampRate the right to use that information to respond to your inquiry and provide relevant services. We will handle your information in accordance with our Privacy Policy.</p>

          <h2 className="text-2xl font-bold text-white" style={{ fontFamily: "var(--font-display)" }}>6. Disclaimer of Warranties</h2>
          <p>This website and its content are provided "as is" without warranties of any kind, either express or implied. RampRate does not warrant that the website will be uninterrupted, error-free, or free of viruses or other harmful components. Past performance data and case studies referenced on this site do not guarantee future results.</p>

          <h2 className="text-2xl font-bold text-white" style={{ fontFamily: "var(--font-display)" }}>7. Limitation of Liability</h2>
          <p>RampRate, Inc. shall not be liable for any direct, indirect, incidental, consequential, or punitive damages arising from your use of this website or reliance on any information provided herein.</p>

          <h2 className="text-2xl font-bold text-white" style={{ fontFamily: "var(--font-display)" }}>8. External Links</h2>
          <p>This website may contain links to third-party websites. RampRate is not responsible for the content or privacy practices of those sites. Links are provided for convenience and do not imply endorsement.</p>

          <h2 className="text-2xl font-bold text-white" style={{ fontFamily: "var(--font-display)" }}>9. Governing Law</h2>
          <p>These terms shall be governed by and construed in accordance with the laws of the State of California, without regard to its conflict of law provisions.</p>

          <h2 className="text-2xl font-bold text-white" style={{ fontFamily: "var(--font-display)" }}>10. Contact</h2>
          <p>For questions about these terms, contact us at: <a href="mailto:legal@ramprate.com" className="text-[oklch(0.82_0.15_75)] hover:underline">legal@ramprate.com</a></p>

          <p className="text-white/30 text-sm pt-8 border-t border-white/10">RampRate, Inc. · Los Angeles, CA · Certified B Corporation</p>
        </div>
      </section>
    </PageLayout>
  );
}
