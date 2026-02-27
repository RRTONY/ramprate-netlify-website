import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight, Leaf, Shield, Users, Zap } from "lucide-react";
import PageLayout from "@/components/PageLayout";
import PageHero from "@/components/PageHero";

const values = [
  {
    icon: Shield,
    title: "Transparency Over Opacity",
    desc: "We benchmark every contract against 150K+ real data points. No hidden fees, no conflicts of interest, no vendor kickbacks. Our clients see what we see.",
  },
  {
    icon: Leaf,
    title: "Regenerative, Not Extractive",
    desc: "As a Certified B Corporation, we measure success by impact — not just revenue. Every engagement leaves systems healthier than we found them.",
  },
  {
    icon: Users,
    title: "Principals, Not Pyramids",
    desc: "The same senior team that wins the engagement executes it. No bait-and-switch staffing. 25 years of the same people doing the work.",
  },
  {
    icon: Zap,
    title: "Skin in the Game",
    desc: "We tie our compensation to outcomes. If we don't create value, we don't get paid. That's not a tagline — it's our business model.",
  },
];

const brands = [
  { name: "RampRate", color: "oklch(0.6 0.15 250)", desc: "Enterprise IT sourcing built on transparency and conscious resource allocation." },
  { name: "Syzygy", color: "oklch(0.65 0.2 150)", desc: "Growth strategy for founders who believe in conscious business." },
  { name: "Stratum", color: "oklch(0.6 0.2 280)", desc: "Web3 infrastructure that prioritizes decentralization over extraction." },
  { name: "ImpactSoul", color: "oklch(0.82 0.15 75)", desc: "Asset tokenization for regenerative and cultural projects." },
];

export default function Values() {
  return (
    <PageLayout>
      <PageHero
        sectionLabel="Our Values"
        headline={<>Consciousness-Aligned<br /><span className="text-[oklch(0.82_0.15_75)]">Capital</span></>}
        subCopy="We believe business can be a force for regeneration, not extraction. Everything we do — from sourcing decisions to tokenization design — flows from a commitment to conscious, impact-driven investment."
      />

      {/* Values Grid */}
      <section className="py-24 bg-[#0d1117]">
        <div className="max-w-6xl mx-auto px-5 sm:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="relative p-8 rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-sm"
              >
                <v.icon size={28} className="text-[oklch(0.82_0.15_75)] mb-4" />
                <h3 className="text-xl font-bold text-white mb-3" style={{ fontFamily: "var(--font-display)" }}>{v.title}</h3>
                <p className="text-white/60 leading-relaxed" style={{ fontFamily: "var(--font-body)" }}>{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Regenerative vs Extractive */}
      <section className="py-24 bg-[#0a0f1a]">
        <div className="max-w-4xl mx-auto px-5 sm:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl font-bold text-white text-center mb-16"
            style={{ fontFamily: "var(--font-display)" }}
          >
            The Difference
          </motion.h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-8 rounded-2xl border border-red-500/20 bg-red-500/[0.03]">
              <h3 className="text-lg font-bold text-red-400 mb-4 uppercase tracking-wider" style={{ fontFamily: "var(--font-mono)" }}>Extractive</h3>
              <ul className="space-y-3 text-white/50" style={{ fontFamily: "var(--font-body)" }}>
                <li>Take value, externalize costs, move on</li>
                <li>Bill hours regardless of outcome</li>
                <li>Junior staff execute, seniors sell</li>
                <li>Vendor relationships are transactional</li>
                <li>Success = revenue captured</li>
              </ul>
            </div>
            <div className="p-8 rounded-2xl border border-[oklch(0.65_0.2_150)]/20 bg-[oklch(0.65_0.2_150)]/[0.03]">
              <h3 className="text-lg font-bold text-[oklch(0.65_0.2_150)] mb-4 uppercase tracking-wider" style={{ fontFamily: "var(--font-mono)" }}>Regenerative</h3>
              <ul className="space-y-3 text-white/70" style={{ fontFamily: "var(--font-body)" }}>
                <li>Create value, distribute benefit, leave systems healthier</li>
                <li>Compensation tied to value created</li>
                <li>Same principals from pitch to execution</li>
                <li>Vendor relationships are partnerships</li>
                <li>Success = ecosystem strengthened</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Four Brands */}
      <section className="py-24 bg-[#0d1117]">
        <div className="max-w-6xl mx-auto px-5 sm:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl font-bold text-white text-center mb-4"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Four Brands, One Philosophy
          </motion.h2>
          <p className="text-white/50 text-center mb-16 max-w-2xl mx-auto" style={{ fontFamily: "var(--font-body)" }}>
            Across our four brands, we serve different markets with the same values.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {brands.map((b, i) => (
              <motion.div
                key={b.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-6 rounded-xl border border-white/10 bg-white/[0.03] backdrop-blur-sm text-center"
              >
                <h3 className="text-lg font-bold mb-3" style={{ color: b.color, fontFamily: "var(--font-display)" }}>{b.name}</h3>
                <p className="text-white/50 text-sm leading-relaxed" style={{ fontFamily: "var(--font-body)" }}>{b.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* B Corp */}
      <section className="py-24 bg-[#0a0f1a]">
        <div className="max-w-3xl mx-auto px-5 sm:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <p className="text-sm text-white/40 uppercase tracking-widest mb-4" style={{ fontFamily: "var(--font-mono)" }}>Certified Since 2022</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6" style={{ fontFamily: "var(--font-display)" }}>
              Certified B Corporation
            </h2>
            <p className="text-white/60 leading-relaxed mb-8 max-w-xl mx-auto" style={{ fontFamily: "var(--font-body)" }}>
              RampRate meets the highest standards of verified social and environmental performance, public transparency, and legal accountability to balance profit and purpose.
            </p>
            <a
              href="https://www.bcorporation.net/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-[oklch(0.82_0.15_75)] hover:underline font-semibold"
              style={{ fontFamily: "var(--font-body)" }}
            >
              View our B Corp profile <ArrowRight size={16} />
            </a>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-[#0d1117]">
        <div className="max-w-3xl mx-auto px-5 sm:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6" style={{ fontFamily: "var(--font-display)" }}>
            Let's Build Something Different
          </h2>
          <p className="text-white/60 mb-10 max-w-xl mx-auto" style={{ fontFamily: "var(--font-body)" }}>
            Ready to align capital with consciousness? Tell us what's broken.
          </p>
          <Link
            href="/connect"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-md text-sm font-bold bg-[oklch(0.82_0.15_75)] text-[oklch(0.15_0.02_75)] hover:bg-[oklch(0.78_0.15_75)] transition-all shadow-lg shadow-[oklch(0.82_0.15_75)]/20"
            style={{ fontFamily: "var(--font-body)" }}
          >
            Tell Us What's Broken <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </PageLayout>
  );
}
