/*
 * /growth — Syzygy: Growth Advisory for Founders & Impactpreneurs
 * ALL CONTENT FROM: ramprate.com + content migration paste
 * 10 startup advisory services, fee structure, process.
 * ZERO fabrication.
 */
import { motion } from "framer-motion";
import { Link } from "wouter";
import PageLayout from "@/components/PageLayout";
import PageHero from "@/components/PageHero";
import { ArrowRight, Rocket, Users, Target, Compass, LineChart, Handshake, Search, FileText, Coins, Award, Shield, Megaphone, FlaskConical, Zap } from "lucide-react";

/* ── ALL 10 STARTUP ADVISORY SERVICES — REAL from paste ── */
const advisoryServices = [
  { num: "01", icon: Search, title: "The Audit", desc: "Validate you can deliver on core promises. Build a roadmap for growth." },
  { num: "02", icon: Target, title: "Positioning", desc: "Core value proposition clarity for all your audiences — investors, customers, partners." },
  { num: "03", icon: FileText, title: "Marketing Cleanup", desc: "Investor decks, white papers, website made clear and compelling." },
  { num: "04", icon: Handshake, title: "Critical Partnerships", desc: "Complementary tech, channels, accelerators connected through our network." },
  { num: "05", icon: Users, title: "Recruiting", desc: "Employees, contractors, advisors, service providers — the right people at the right time." },
  { num: "06", icon: Shield, title: "Social Impact Strategies", desc: "Find the lever to do good. Measure and report your impact." },
  { num: "07", icon: FlaskConical, title: "Strategic Research", desc: "Customers, competitors, partners identified. Markets quantified with data." },
  { num: "08", icon: LineChart, title: "Strategy Validation", desc: "Staffing, product roadmap, partners pressure-tested with data." },
  { num: "09", icon: Coins, title: "Token / IPO Amplification", desc: "Liquidity management, exchange listings, price/volume optimization." },
  { num: "10", icon: Award, title: "Advisory Board Membership", desc: "Tony Greenberg and network lend name and reputation publicly to your company." },
];

/* ── EXISTING SERVICES (higher-level categories) ── */
const highlightServices = [
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
          { value: "Comp", label: "Equity/tokens + commission + retainers" },
        ]}
      />

      {/* What is Syzygy */}
      <section className="relative section-warm overflow-hidden py-20 sm:py-28">
        <div className="glass-orb-rust w-[300px] h-[300px] -bottom-32 -right-32" />
        <div className="glass-orb-amber w-[180px] h-[180px] top-10 -left-20" />
        <div className="relative z-10 max-w-5xl mx-auto px-5 sm:px-8">
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

      {/* Highlight Services Grid */}
      <section className="relative section-light overflow-hidden py-20 sm:py-28">
        <div className="glass-orb-amber w-[280px] h-[280px] -bottom-32 -left-32" />
        <div className="glass-orb-rust w-[160px] h-[160px] top-20 -right-20" />
        <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight" style={{ fontFamily: "var(--font-display)" }}>
              How We Help Founders <span className="text-[oklch(0.55_0.15_30)]">Win</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {highlightServices.map((s, i) => (
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

      {/* ALL 10 Advisory Services — numbered list from paste */}
      <section className="relative section-warm overflow-hidden py-20 sm:py-28">
        <div className="glass-orb-rust w-[300px] h-[300px] -bottom-32 -right-32" />
        <div className="glass-orb-amber w-[180px] h-[180px] top-10 -left-20" />
        <div className="relative z-10 max-w-5xl mx-auto px-5 sm:px-8">
          <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[oklch(0.55_0.15_30)]" style={{ fontFamily: "var(--font-body)" }}>
            Startup Advisory Services
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl font-bold tracking-tight mb-10" style={{ fontFamily: "var(--font-display)" }}>
            The Full <span className="text-[oklch(0.55_0.15_30)]">Playbook</span>
          </h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {advisoryServices.map((s, i) => (
              <motion.div
                key={s.num}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                className="flex gap-4 bg-white rounded-lg p-5 border border-black/5"
              >
                <div className="text-2xl font-bold text-[oklch(0.55_0.15_30)]/20 shrink-0 w-10" style={{ fontFamily: "var(--font-mono)" }}>
                  {s.num}
                </div>
                <div>
                  <h3 className="text-sm font-bold mb-1" style={{ fontFamily: "var(--font-display)" }}>{s.title}</h3>
                  <p className="text-xs text-[oklch(0.45_0.02_50)] leading-relaxed" style={{ fontFamily: "var(--font-body)" }}>{s.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Fee Structure & Process — REAL from paste */}
      <section className="relative section-dark overflow-hidden py-20 sm:py-28">
        <div className="glass-orb-blue w-[350px] h-[350px] -top-40 -right-40" />
        <div className="glass-orb-amber w-[200px] h-[200px] bottom-20 -left-20" />
        <div className="relative z-10 max-w-5xl mx-auto px-5 sm:px-8">
          <div className="grid md:grid-cols-2 gap-10">
            <div>
              <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[oklch(0.55_0.15_30)]" style={{ fontFamily: "var(--font-body)" }}>
                Fee Structure
              </span>
              <h2 className="mt-4 text-3xl font-bold text-white mb-6" style={{ fontFamily: "var(--font-display)" }}>
                Aligned Incentives
              </h2>
              <div className="space-y-4">
                {[
                  { label: "Equity / Tokens", desc: "We take a stake in your success, aligning our incentives with your growth trajectory." },
                  { label: "Commission on Revenue", desc: "We earn when you earn — tied to the revenue we help generate through our network." },
                  { label: "Project Fees / Retainers", desc: "Structured engagements for specific deliverables with clear milestones." },
                ].map((f) => (
                  <div key={f.label} className="bg-white/5 rounded-lg p-5 border border-white/10">
                    <div className="text-sm font-bold text-white mb-1" style={{ fontFamily: "var(--font-body)" }}>{f.label}</div>
                    <p className="text-xs text-white/50 leading-relaxed" style={{ fontFamily: "var(--font-body)" }}>{f.desc}</p>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[oklch(0.55_0.15_30)]" style={{ fontFamily: "var(--font-body)" }}>
                Our Process
              </span>
              <h2 className="mt-4 text-3xl font-bold text-white mb-6" style={{ fontFamily: "var(--font-display)" }}>
                How We Engage
              </h2>
              <div className="space-y-4">
                {[
                  { step: "1", title: "Review", desc: "We review your presentations, investor materials, and product documentation." },
                  { step: "2", title: "Down-Select", desc: "We determine fit based on impact potential, market opportunity, and team capability." },
                  { step: "3", title: "Deep Dive", desc: "Interviews with your customers, investors, and partners to validate the opportunity." },
                  { step: "4", title: "Activate", desc: "We deploy our network, advisory board, and enterprise connections on your behalf." },
                ].map((s) => (
                  <div key={s.step} className="flex gap-4 items-start">
                    <div className="w-8 h-8 rounded-full bg-[oklch(0.55_0.15_30)] flex items-center justify-center shrink-0">
                      <span className="text-xs font-bold text-white" style={{ fontFamily: "var(--font-mono)" }}>{s.step}</span>
                    </div>
                    <div>
                      <div className="text-sm font-bold text-white" style={{ fontFamily: "var(--font-body)" }}>{s.title}</div>
                      <p className="text-xs text-white/50 leading-relaxed" style={{ fontFamily: "var(--font-body)" }}>{s.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
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
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/connect" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-md text-sm font-semibold bg-white text-[oklch(0.35_0.1_30)] hover:bg-white/90 transition-all shadow-lg" style={{ fontFamily: "var(--font-body)" }}>
              Start a Conversation <ArrowRight size={16} />
            </Link>
            <Link href="/process#flow-circuit" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-md text-sm font-semibold border-2 border-white/30 text-white hover:bg-white/10 transition-all" style={{ fontFamily: "var(--font-body)" }}>
              <Zap size={14} /> Flow Circuit
            </Link>
            <Link href="/process#find-me" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-md text-sm font-semibold border-2 border-white/30 text-white hover:bg-white/10 transition-all" style={{ fontFamily: "var(--font-body)" }}>
              <Target size={14} /> Find Your Me
            </Link>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
