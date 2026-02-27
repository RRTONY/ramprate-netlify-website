import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight, ExternalLink } from "lucide-react";
import PageLayout from "@/components/PageLayout";
import PageHero from "@/components/PageHero";

const STRATUM_URL = "https://stratumweb-2pprew4h.manus.space";

const practices = [
  {
    name: "RampRate",
    tagline: "Enterprise IT Sourcing",
    desc: "150K+ data points. 350+ vendors. 80 countries. We benchmark every contract against real transaction intelligence — not theory. $24B+ in enterprise decisions brokered.",
    color: "oklch(0.82 0.15 75)",
    href: "/sourcing",
    stats: ["$24B+ Brokered", "150K+ Data Points", "350+ Vendors"],
  },
  {
    name: "Syzygy",
    tagline: "Growth Strategy for Founders",
    desc: "GTM acceleration, revenue architecture, and strategic introductions for growth-stage companies. We don't advise from the sidelines — we execute with you daily.",
    color: "oklch(0.65 0.2 150)",
    href: "/growth",
    stats: ["99% Intro-to-Contract", "4+ Year Engagements", "US Market Entry"],
  },
  {
    name: "Stratum",
    tagline: "Web3 & Blockchain Advisory",
    desc: "Token design, DAO governance, decentralized infrastructure. From protocol architecture to enterprise adoption — we bridge Web3 and the Fortune 500.",
    color: "oklch(0.6 0.2 280)",
    href: "/web3",
    stats: ["Token Design", "DAO Governance", "Enterprise Web3"],
    external: STRATUM_URL,
  },
  {
    name: "ImpactSoul",
    tagline: "Impact & Regenerative Consulting",
    desc: "ESG strategy, B Corp certification, grant management, and asset tokenization for regenerative projects. Technology as a delivery mechanism for social and environmental impact.",
    color: "oklch(0.7 0.15 30)",
    href: "/impact",
    stats: ["B Corp Certified", "$3M+ Grants", "Regenerative Focus"],
  },
];

export default function Practices() {
  return (
    <PageLayout>
      <PageHero
        sectionLabel="Our Practices"
        headline={<>Four Brands.<br /><span className="text-[oklch(0.82_0.15_75)]">One Mission.</span></>}
        subCopy="Each practice serves a different market with the same values: transparency, skin in the game, and principals who execute."
      />

      <section className="py-24 bg-[#0d1117]">
        <div className="max-w-6xl mx-auto px-5 sm:px-8 space-y-12">
          {practices.map((p, i) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="relative rounded-2xl border border-white/10 bg-white/[0.02] backdrop-blur-sm overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-1 h-full" style={{ backgroundColor: p.color }} />
              <div className="p-8 sm:p-10">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-6">
                  <div className="flex-1">
                    <p className="text-xs uppercase tracking-[0.2em] mb-2" style={{ color: p.color, fontFamily: "var(--font-mono)" }}>
                      {p.tagline}
                    </p>
                    <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4" style={{ fontFamily: "var(--font-display)" }}>
                      {p.name}
                    </h2>
                    <p className="text-white/60 leading-relaxed max-w-2xl mb-6" style={{ fontFamily: "var(--font-body)" }}>
                      {p.desc}
                    </p>
                    <div className="flex flex-wrap gap-3 mb-6">
                      {p.stats.map(s => (
                        <span
                          key={s}
                          className="px-3 py-1.5 rounded-full text-xs font-medium border"
                          style={{
                            borderColor: `color-mix(in oklch, ${p.color} 30%, transparent)`,
                            color: p.color,
                            backgroundColor: `color-mix(in oklch, ${p.color} 8%, transparent)`,
                            fontFamily: "var(--font-mono)",
                          }}
                        >
                          {s}
                        </span>
                      ))}
                    </div>
                    <div className="flex flex-wrap gap-3">
                      <Link
                        href={p.href}
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-md text-sm font-semibold transition-all hover:brightness-110"
                        style={{
                          backgroundColor: p.color,
                          color: "oklch(0.15 0.02 75)",
                          fontFamily: "var(--font-body)",
                        }}
                      >
                        Learn More <ArrowRight size={14} />
                      </Link>
                      {p.external && (
                        <a
                          href={p.external}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-6 py-3 rounded-md text-sm font-semibold border border-white/15 text-white/70 hover:bg-white/5 transition-all"
                          style={{ fontFamily: "var(--font-body)" }}
                        >
                          Deep Dive <ExternalLink size={14} />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-[#0a0f1a]">
        <div className="max-w-3xl mx-auto px-5 sm:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6" style={{ fontFamily: "var(--font-display)" }}>
            Not Sure Which Practice Fits?
          </h2>
          <p className="text-white/60 mb-10 max-w-xl mx-auto" style={{ fontFamily: "var(--font-body)" }}>
            Tell us what's broken. We'll figure out which team — or combination — gets it done.
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
