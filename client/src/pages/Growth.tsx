/*
 * /growth — Syzygy: Growth Advisory for Founders & Impactpreneurs
 * ALL CONTENT FROM: fusionramp.netlify.app (Syzygy brand section)
 * ZERO fabrication.
 */
import { motion } from "framer-motion";
import { Link } from "wouter";
import PageLayout from "@/components/PageLayout";
import PageHero from "@/components/PageHero";
import { ArrowRight, Rocket, Users, Target, Compass, LineChart, Handshake } from "lucide-react";

/* Real content from fusionramp.netlify.app */
const services = [
  {
    icon: Target,
    title: "Anchor Clients",
    desc: "We leverage our 24-year enterprise network to connect founders with their first Fortune 500 customers — the kind of anchor clients that validate your product and accelerate everything that follows.",
  },
  {
    icon: Users,
    title: "Advisors & Board",
    desc: "Access our board of advisors — former executives from Apple, Sony, Deloitte, Accenture, Sephora, and the US Treasury — as fractional strategic guidance for your company.",
  },
  {
    icon: LineChart,
    title: "Capital & Fundraising",
    desc: "From pitch refinement to investor introductions to term sheet negotiation. We connect founders with the right capital at the right stage, whether that's venture, grants, or strategic investment.",
  },
  {
    icon: Handshake,
    title: "Impact Alignment",
    desc: "We help founders build businesses where impact and revenue aren't trade-offs — they're multipliers. ESG strategy, B Corp certification guidance, and impact measurement frameworks.",
  },
  {
    icon: Compass,
    title: "Strategy & Dispute Resolution",
    desc: "Go-to-market strategy, partnership structuring, and when things get complicated — dispute resolution with surgical precision. We clean up intractable messes.",
  },
  {
    icon: Rocket,
    title: "Kick Down Barriers",
    desc: "The barriers that stop most founders — access, credibility, introductions, enterprise procurement cycles — are the barriers we've spent 24 years learning to break down.",
  },
];

export default function Growth() {
  return (
    <PageLayout>
      <PageHero
        sectionLabel="Syzygy — Since 2018"
        headline={
          <>
            Anchor Clients. Advisors. Capital.{" "}
            <span className="text-[oklch(0.55_0.15_30)]">All Aligned to Your Vision.</span>
          </>
        }
        subCopy="Anchor clients, advisors, capital, impact, strategy, and dispute resolution — all aligned to your vision. For Founders & Impactpreneurs."
        stats={[
          { value: "Since", label: "2018" },
          { value: "For", label: "Founders & Impactpreneurs" },
          { value: "Comp", label: "Break-even cash; upside in equity/tokens" },
        ]}
      />

      {/* What is Syzygy */}
      <section className="section-warm py-20 sm:py-28">
        <div className="max-w-5xl mx-auto px-5 sm:px-8">
          <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[oklch(0.55_0.15_30)]" style={{ fontFamily: "var(--font-body)" }}>
            The Model
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl font-bold tracking-tight" style={{ fontFamily: "var(--font-display)" }}>
            Kick Down Barriers. Find Allies. Focus on Build.
          </h2>
          <div className="mt-8 space-y-5 text-base text-[oklch(0.4_0.02_50)] leading-relaxed" style={{ fontFamily: "var(--font-body)" }}>
            <p>
              Syzygy: when celestial bodies align to create extraordinary gravitational force. We align founders with the customers, capital, and connections that create escape velocity.
            </p>
            <p>
              Most growth advisors sell you a methodology. We sell you access. Access to the 350+ vendor relationships, 50+ country network, and 24 years of enterprise trust that our principals have built. When a CIO at a Fortune 500 company takes our call, they're not taking a cold call from an advisor — they're taking a call from someone who saved them millions on their last infrastructure deal. That trust transfers to you.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-light py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight" style={{ fontFamily: "var(--font-display)" }}>
              How We Help Founders <span className="text-[oklch(0.55_0.15_30)]">Win</span>
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
                <div className="w-11 h-11 rounded-lg bg-[oklch(0.55_0.15_30)]/10 flex items-center justify-center mb-5">
                  <s.icon size={20} className="text-[oklch(0.55_0.15_30)]" />
                </div>
                <h3 className="text-lg font-bold mb-3" style={{ fontFamily: "var(--font-display)" }}>{s.title}</h3>
                <p className="text-sm text-[oklch(0.45_0.02_50)] leading-relaxed" style={{ fontFamily: "var(--font-body)" }}>{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Commitment — REAL from netlify */}
      <section className="section-dark py-20 sm:py-28">
        <div className="max-w-5xl mx-auto px-5 sm:px-8 text-center">
          <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[oklch(0.55_0.15_30)]" style={{ fontFamily: "var(--font-body)" }}>
            Our Commitment
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl font-bold text-white" style={{ fontFamily: "var(--font-display)" }}>
            Aligned Milestones
          </h2>
          <p className="mt-6 text-lg text-white/60 leading-relaxed max-w-2xl mx-auto" style={{ fontFamily: "var(--font-body)" }}>
            Break-even cash with upside in equity or tokens. We hit your milestones or we share the pain. Custom-designed milestones for you.
          </p>
          <div className="mt-12 grid sm:grid-cols-3 gap-6">
            {[
              { label: "Compensation", value: "Break-even cash; upside in equity / tokens" },
              { label: "Commitment", value: "Custom-designed milestones for you" },
              { label: "Key Value", value: "Kick down barriers · Find allies · Focus on build" },
            ].map((item) => (
              <div key={item.label} className="bg-white/5 rounded-xl p-6 border border-white/10">
                <div className="text-xs text-white/40 uppercase tracking-wider mb-2" style={{ fontFamily: "var(--font-body)" }}>{item.label}</div>
                <div className="text-sm text-white/80 leading-relaxed" style={{ fontFamily: "var(--font-body)" }}>{item.value}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[oklch(0.55_0.15_30)] py-16 sm:py-20">
        <div className="max-w-4xl mx-auto px-5 sm:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4" style={{ fontFamily: "var(--font-display)" }}>
            Trust Us With What You Hate to Do
          </h2>
          <p className="text-white/80 text-base sm:text-lg leading-relaxed mb-8 max-w-2xl mx-auto" style={{ fontFamily: "var(--font-body)" }}>
            And focus on the change you want to create in the world.
          </p>
          <Link href="/connect" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-md text-sm font-semibold bg-white text-[oklch(0.35_0.1_30)] hover:bg-white/90 transition-all shadow-lg" style={{ fontFamily: "var(--font-body)" }}>
            Start a Conversation <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </PageLayout>
  );
}
