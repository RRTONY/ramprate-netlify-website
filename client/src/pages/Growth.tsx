/*
 * /growth — Syzygy: Growth Advisory for Founders.
 * Hero: "Align the Forces That Matter."
 * Sections: What is Syzygy, Services, Founder testimonials, CTA.
 */
import { motion } from "framer-motion";
import { Link } from "wouter";
import PageLayout from "@/components/PageLayout";
import PageHero from "@/components/PageHero";
import { ArrowRight, Rocket, Users, Target, Compass, LineChart, Handshake } from "lucide-react";

const stats = [
  { value: "200+", label: "Founders Advised" },
  { value: "$2B+", label: "Capital Raised" },
  { value: "50+", label: "Exits" },
  { value: "24yrs", label: "Track Record" },
];

const services = [
  {
    icon: Target,
    title: "Go-to-Market Strategy",
    desc: "We help founders identify their ideal customer profile, refine positioning, and build repeatable sales motions that scale. No generic playbooks — every strategy is built from your specific data and market dynamics.",
  },
  {
    icon: Users,
    title: "Customer Introductions",
    desc: "Access our network of enterprise decision-makers. We don't just make introductions — we prepare both sides, frame the value proposition, and stay involved through close.",
  },
  {
    icon: LineChart,
    title: "Fundraising Support",
    desc: "From pitch deck refinement to investor introductions to term sheet negotiation. We've helped founders raise from seed through Series D and beyond.",
  },
  {
    icon: Handshake,
    title: "Strategic Partnerships",
    desc: "We broker partnerships that create compounding value — channel deals, technology integrations, co-selling agreements, and strategic investments.",
  },
  {
    icon: Compass,
    title: "Board Advisory",
    desc: "Fractional board-level guidance from operators who've built and sold companies. We help with governance, compensation, M&A readiness, and strategic pivots.",
  },
  {
    icon: Rocket,
    title: "Exit Preparation",
    desc: "When it's time, we help position the company, identify acquirers, manage the process, and negotiate terms that reflect the full value of what you've built.",
  },
];

const testimonials = [
  {
    quote: "RampRate introduced us to our first enterprise customer, helped us close a $2M deal, and then introduced us to the VC who led our Series A. That's not advisory — that's alchemy.",
    name: "Founder",
    company: "Enterprise SaaS Startup",
  },
  {
    quote: "Most advisors give you a framework and wish you luck. RampRate gave us introductions to 12 CIOs in our first month. Three became customers.",
    name: "CEO",
    company: "Infrastructure Startup",
  },
  {
    quote: "They don't just know the market — they know the people. And the people trust them. That trust transferred to us and compressed our sales cycle by 6 months.",
    name: "Co-Founder",
    company: "Security Platform",
  },
];

export default function Growth() {
  return (
    <PageLayout>
      <PageHero
        sectionLabel="Syzygy — Growth Advisory"
        headline={
          <>
            Align the Forces{" "}
            <span className="text-[#6B21A8]">That Matter.</span>
          </>
        }
        subCopy="Syzygy: when celestial bodies align to create extraordinary gravitational force. We align founders with the customers, capital, and connections that create escape velocity."
        stats={stats}
      />

      {/* What is Syzygy */}
      <section className="section-warm py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span
                className="text-xs font-semibold tracking-[0.2em] uppercase text-[#6B21A8]"
                style={{ fontFamily: "var(--font-body)" }}
              >
                The Model
              </span>
              <h2
                className="mt-4 text-3xl sm:text-4xl font-bold tracking-tight"
                style={{ fontFamily: "var(--font-display)" }}
              >
                A Rolodex on Steroids
              </h2>
              <p
                className="mt-6 text-base text-[oklch(0.4_0.02_50)] leading-relaxed"
                style={{ fontFamily: "var(--font-body)" }}
              >
                Most growth advisors sell you a methodology. We sell you access. Access to the 350+ vendor relationships, 50+ country network, and 24 years of enterprise trust that our principals have built.
              </p>
              <p
                className="mt-4 text-base text-[oklch(0.4_0.02_50)] leading-relaxed"
                style={{ fontFamily: "var(--font-body)" }}
              >
                When a CIO at a Fortune 500 company takes our call, they're not taking a cold call from an advisor — they're taking a call from someone who saved them $40M on their last infrastructure deal. That trust transfers to you.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { val: "350+", label: "Vendor Relationships" },
                { val: "50+", label: "Countries" },
                { val: "24yrs", label: "Enterprise Trust" },
                { val: "5", label: "Principals" },
              ].map((s) => (
                <div
                  key={s.label}
                  className="bg-white rounded-xl p-6 text-center shadow-sm border border-black/5"
                >
                  <div
                    className="text-2xl font-bold text-[#6B21A8]"
                    style={{ fontFamily: "var(--font-mono)" }}
                  >
                    {s.val}
                  </div>
                  <div
                    className="mt-2 text-xs text-[oklch(0.5_0.02_50)] uppercase tracking-wider"
                    style={{ fontFamily: "var(--font-body)" }}
                  >
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-light py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <div className="text-center mb-14">
            <h2
              className="text-3xl sm:text-4xl font-bold tracking-tight"
              style={{ fontFamily: "var(--font-display)" }}
            >
              How We Help Founders <span className="text-[#6B21A8]">Win</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s, i) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-[oklch(0.97_0.01_80)] rounded-xl p-7 border border-black/5 hover:shadow-md transition-shadow"
              >
                <div className="w-11 h-11 rounded-lg bg-[#6B21A8]/10 flex items-center justify-center mb-5">
                  <s.icon size={20} className="text-[#6B21A8]" />
                </div>
                <h3
                  className="text-lg font-bold mb-3"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {s.title}
                </h3>
                <p
                  className="text-sm text-[oklch(0.45_0.02_50)] leading-relaxed"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  {s.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-dark py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <h2
            className="text-3xl sm:text-4xl font-bold text-white mb-12"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Founder <span className="text-[#6B21A8]">Voices</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="bg-white/5 rounded-xl p-7 border border-white/10"
              >
                <p
                  className="text-sm text-white/70 leading-relaxed mb-5 italic"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  "{t.quote}"
                </p>
                <div className="border-t border-white/10 pt-4">
                  <div className="text-sm font-semibold text-white" style={{ fontFamily: "var(--font-body)" }}>
                    {t.name}
                  </div>
                  <div className="text-xs text-white/40" style={{ fontFamily: "var(--font-body)" }}>
                    {t.company}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#6B21A8] py-16 sm:py-20">
        <div className="max-w-4xl mx-auto px-5 sm:px-8 text-center">
          <h2
            className="text-3xl sm:text-4xl font-bold text-white mb-4"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Ready for Escape Velocity?
          </h2>
          <p
            className="text-white/70 text-base sm:text-lg leading-relaxed mb-8 max-w-2xl mx-auto"
            style={{ fontFamily: "var(--font-body)" }}
          >
            Tell us about your company. If there's a fit, we'll introduce you to the right people within 48 hours.
          </p>
          <Link
            href="/connect"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-md text-sm font-semibold bg-white text-[#6B21A8] hover:bg-white/90 transition-all shadow-lg"
            style={{ fontFamily: "var(--font-body)" }}
          >
            Start a Conversation <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </PageLayout>
  );
}
