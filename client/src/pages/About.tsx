/*
 * /about — About RampRate.
 * Hero: "Since 2000. Five Principals. One Mission."
 * Sections: Story, Leadership, Values, Concentric Model, CTA.
 */
import { motion } from "framer-motion";
import { Link } from "wouter";
import PageLayout from "@/components/PageLayout";
import PageHero from "@/components/PageHero";
import { ArrowRight } from "lucide-react";

const leaders = [
  {
    name: "Tony Greenberg",
    role: "CEO & Co-Founder",
    bio: "25+ years building and advising technology companies. Former investment banker. Board member and advisor to dozens of startups and growth-stage companies. The connective tissue of the RampRate network.",
  },
  {
    name: "Peter Feldman",
    role: "Managing Director",
    bio: "Enterprise infrastructure expert with deep relationships across the data center, cloud, and telecom industries. Leads RampRate's sourcing practice and the SPY Index.",
  },
  {
    name: "Jeff Bray",
    role: "Managing Director",
    bio: "Former enterprise CIO turned advisor. Brings the buyer's perspective to every engagement. Specializes in complex multi-vendor negotiations and digital transformation strategy.",
  },
  {
    name: "Mike Manzo",
    role: "Managing Director",
    bio: "Technology operations leader with experience across media, entertainment, and financial services. Expert in hybrid infrastructure architecture and vendor management.",
  },
  {
    name: "Darin Stanchfield",
    role: "Managing Director",
    bio: "Serial entrepreneur and technology executive. Founder of KeepKey (acquired by ShapeShift). Leads RampRate's Web3 and blockchain advisory practice.",
  },
];

const values = [
  {
    title: "Skin in the Game",
    desc: "We tie our compensation to outcomes. If we don't deliver outsized value, we don't earn outsized fees. This alignment of incentives is non-negotiable.",
  },
  {
    title: "Radical Transparency",
    desc: "We show you the data, the methodology, and the alternatives. No black boxes, no hidden agendas. You always know exactly why we're recommending what we're recommending.",
  },
  {
    title: "Relationships Over Transactions",
    desc: "92% of our clients are repeat clients. We build relationships that compound over decades, not engagements that end at the invoice.",
  },
  {
    title: "Impact as a Feature",
    desc: "As a certified B Corp, we evaluate every engagement through the lens of stakeholder impact. Profit and purpose aren't in tension — they're in alignment.",
  },
];

const modelRings = [
  {
    ring: "Core",
    count: "5 Principals",
    desc: "The founding team. 24 years of shared history, complementary expertise, and a combined network that spans every major technology vendor and enterprise buyer on the planet.",
  },
  {
    ring: "Board",
    count: "10 Advisors",
    desc: "Former CIOs, CTOs, and industry leaders who bring domain expertise and executive relationships. They're not on a website — they're on speed dial.",
  },
  {
    ring: "Bench",
    count: "35+ Specialists",
    desc: "Deep technical experts in specific domains — from cloud architecture to telecom pricing to blockchain security. Activated on-demand for specific engagements.",
  },
];

export default function About() {
  return (
    <PageLayout>
      <PageHero
        sectionLabel="About"
        headline={
          <>
            Since 2000.{" "}
            <span className="text-[#6B21A8]">Five Principals.</span>{" "}
            One Mission.
          </>
        }
        subCopy="We're a fractional team of superstars who've spent 24 years building the relationships, data, and trust that turn enterprise decisions into trajectory-changing outcomes."
        stats={[
          { value: "2000", label: "Founded" },
          { value: "5", label: "Principals" },
          { value: "$24B+", label: "Decisions" },
          { value: "B Corp", label: "Certified" },
        ]}
      />

      {/* Story */}
      <section className="section-warm py-20 sm:py-28">
        <div className="max-w-4xl mx-auto px-5 sm:px-8">
          <h2
            className="text-3xl sm:text-4xl font-bold tracking-tight mb-8"
            style={{ fontFamily: "var(--font-display)" }}
          >
            The Story
          </h2>
          <div className="space-y-6" style={{ fontFamily: "var(--font-body)" }}>
            <p className="text-base text-[oklch(0.35_0.02_50)] leading-relaxed">
              RampRate was founded in 2000 with a simple observation: enterprise technology decisions were broken. Companies were overpaying for infrastructure, locked into bad contracts, and making critical decisions with incomplete information.
            </p>
            <p className="text-base text-[oklch(0.35_0.02_50)] leading-relaxed">
              We built the SPY Index — a proprietary database of infrastructure pricing, performance, and contract intelligence — and used it to give enterprises the leverage they needed. Over 24 years, we've brokered more than $24 billion in technology decisions across 50+ countries.
            </p>
            <p className="text-base text-[oklch(0.35_0.02_50)] leading-relaxed">
              But data alone doesn't change trajectories. Relationships do. Our five principals have spent decades building trust with the vendors, operators, and decision-makers who shape the technology landscape. That trust — earned through thousands of engagements — is what makes RampRate different.
            </p>
            <p className="text-base text-[oklch(0.35_0.02_50)] leading-relaxed">
              Today, RampRate operates as a coalition of four practices — Sourcing, Syzygy, Stratum, and ImpactSoul — each serving a different audience but sharing the same network, data, and commitment to creating outsized value.
            </p>
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="section-light py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <h2
            className="text-3xl sm:text-4xl font-bold tracking-tight mb-12"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Leadership
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {leaders.map((l, i) => (
              <motion.div
                key={l.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-[oklch(0.97_0.01_80)] rounded-xl p-7 border border-black/5"
              >
                <div className="w-14 h-14 rounded-full bg-[#6B21A8]/10 flex items-center justify-center mb-5">
                  <span
                    className="text-lg font-bold text-[#6B21A8]"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    {l.name.split(" ").map(n => n[0]).join("")}
                  </span>
                </div>
                <h3
                  className="text-lg font-bold mb-1"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {l.name}
                </h3>
                <div
                  className="text-xs text-[#6B21A8] font-semibold uppercase tracking-wider mb-4"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  {l.role}
                </div>
                <p
                  className="text-sm text-[oklch(0.45_0.02_50)] leading-relaxed"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  {l.bio}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Concentric Model */}
      <section className="section-dark py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <h2
            className="text-3xl sm:text-4xl font-bold text-white mb-12"
            style={{ fontFamily: "var(--font-display)" }}
          >
            The <span className="text-[#6B21A8]">Concentric</span> Model
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {modelRings.map((r, i) => (
              <motion.div
                key={r.ring}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="bg-white/5 rounded-xl p-7 border border-white/10 text-center"
              >
                <div
                  className="text-3xl font-bold text-[#6B21A8] mb-2"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {r.ring}
                </div>
                <div
                  className="text-sm text-white/50 mb-4"
                  style={{ fontFamily: "var(--font-mono)" }}
                >
                  {r.count}
                </div>
                <p
                  className="text-sm text-white/60 leading-relaxed"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  {r.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-warm py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <h2
            className="text-3xl sm:text-4xl font-bold tracking-tight mb-12"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Our Values
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white rounded-xl p-7 border border-black/5"
              >
                <h3
                  className="text-lg font-bold mb-3"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {v.title}
                </h3>
                <p
                  className="text-sm text-[oklch(0.45_0.02_50)] leading-relaxed"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  {v.desc}
                </p>
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
            Let's Build Something Together
          </h2>
          <p
            className="text-white/70 text-base sm:text-lg leading-relaxed mb-8 max-w-2xl mx-auto"
            style={{ fontFamily: "var(--font-body)" }}
          >
            Whether you're an enterprise looking to optimize, a founder seeking growth, or an organization pursuing impact — we'd love to hear from you.
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
