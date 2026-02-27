import PageLayout from "@/components/PageLayout";
import PageHero from "@/components/PageHero";

export default function Privacy() {
  return (
    <PageLayout>
      <PageHero headline="Privacy Policy" subCopy="How we handle your data" />
      <section className="py-20 bg-[#0d1117]">
        <div className="max-w-3xl mx-auto px-5 sm:px-8 text-white/70 space-y-8" style={{ fontFamily: "var(--font-body)" }}>
          <p className="text-sm text-white/40 uppercase tracking-widest" style={{ fontFamily: "var(--font-mono)" }}>Last Updated: February 2026</p>

          <h2 className="text-2xl font-bold text-white" style={{ fontFamily: "var(--font-display)" }}>1. Information We Collect</h2>
          <p>When you use our website or contact us, we may collect: your name, email address, company name, job title, phone number, and any message content you provide through our contact forms. We also collect standard web analytics data (page views, referral sources, device type) through privacy-respecting analytics.</p>

          <h2 className="text-2xl font-bold text-white" style={{ fontFamily: "var(--font-display)" }}>2. How We Use Your Information</h2>
          <p>We use the information we collect to: respond to your inquiries, provide advisory services, send relevant updates about our practices (only with your consent), improve our website experience, and comply with legal obligations. We do not sell your personal information to third parties.</p>

          <h2 className="text-2xl font-bold text-white" style={{ fontFamily: "var(--font-display)" }}>3. Data Storage & Security</h2>
          <p>Your data is stored on secure, encrypted servers. We implement industry-standard security measures including SSL/TLS encryption, access controls, and regular security audits. Contact form submissions are stored in our secure database and accessible only to authorized RampRate principals.</p>

          <h2 className="text-2xl font-bold text-white" style={{ fontFamily: "var(--font-display)" }}>4. Cookies</h2>
          <p>We use essential cookies to ensure our website functions properly and analytics cookies to understand how visitors interact with our site. You can control cookie preferences through your browser settings. We do not use advertising or tracking cookies.</p>

          <h2 className="text-2xl font-bold text-white" style={{ fontFamily: "var(--font-display)" }}>5. Third-Party Services</h2>
          <p>We may use third-party services for analytics, form processing, and email communications. These services have their own privacy policies and we ensure they meet our data protection standards. We do not share your personal information with third parties for marketing purposes.</p>

          <h2 className="text-2xl font-bold text-white" style={{ fontFamily: "var(--font-display)" }}>6. Your Rights</h2>
          <p>You have the right to: access the personal data we hold about you, request correction of inaccurate data, request deletion of your data, opt out of communications, and lodge a complaint with a supervisory authority. To exercise these rights, contact us at privacy@ramprate.com.</p>

          <h2 className="text-2xl font-bold text-white" style={{ fontFamily: "var(--font-display)" }}>7. Data Retention</h2>
          <p>We retain your personal information only as long as necessary to fulfill the purposes for which it was collected, or as required by law. Contact form data is retained for up to 3 years unless you request earlier deletion.</p>

          <h2 className="text-2xl font-bold text-white" style={{ fontFamily: "var(--font-display)" }}>8. Changes to This Policy</h2>
          <p>We may update this privacy policy from time to time. We will notify you of any material changes by posting the updated policy on this page with a revised "Last Updated" date.</p>

          <h2 className="text-2xl font-bold text-white" style={{ fontFamily: "var(--font-display)" }}>9. Contact</h2>
          <p>For questions about this privacy policy or our data practices, contact us at: <a href="mailto:privacy@ramprate.com" className="text-[oklch(0.82_0.15_75)] hover:underline">privacy@ramprate.com</a></p>

          <p className="text-white/30 text-sm pt-8 border-t border-white/10">RampRate, Inc. · Los Angeles, CA · Certified B Corporation</p>
        </div>
      </section>
    </PageLayout>
  );
}
