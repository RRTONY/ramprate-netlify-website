/*
 * Brands Section: "Four brands. One coalition. Pick the one that fits you."
 * 4 cards: RampRate, Syzygy, Stratum, ImpactSoul
 * Content from fusionramp.netlify.app, design from manus.space
 * Section-dark background (charcoal)
 */
import { motion } from "framer-motion";
import { Link } from "wouter";
import { TrendingUp, Zap, Grid3X3, Heart, ArrowRight } from "lucide-react";

const brands = [
  {
    name: "RampRate",
    since: "Since 2000",
    audience: "For Enterprise CTOs",
    description: "Accelerate & de-risk innovation. Cut costs and improve performance across your technology infrastructure.",
    keyValue: "80% faster launch · 99% lower risk · 25% OpEx savings",
    compensation: "% of impact achieved",
    commitment: "300%+ ROI on all our fees",
    href: "/sourcing",
    icon: TrendingUp,
    accentColor: "oklch(0.82 0.15 75)",
  },
  {
    name: "Syzygy",
    since: "Since 2018",
    audience: "For Founders & Impactpreneurs",
    description: "Anchor clients, advisors, capital, impact, strategy, and dispute resolution — all aligned to your vision.",
    keyValue: "Kick down barriers · Find allies · Focus on build",
    compensation: "Break-even cash; upside in equity / tokens",
    commitment: "Custom-designed milestones for you",
    href: "/growth",
    icon: Zap,
    accentColor: "oklch(0.65 0.2 150)",
  },
  {
    name: "Stratum",
    since: "Since 2015",
    audience: "Web3 — Enterprise & NGO Bridge",
    description: "Connect blockchain to enterprise for transformative technology and non-dilutive funding solutions.",
    keyValue: "Non-dilutive capital & zero-cost transformative tech",
    compensation: "% of value created",
    commitment: "Right person in the room from all sides",
    href: "/web3",
    icon: Grid3X3,
    accentColor: "oklch(0.6 0.2 280)",
  },
  {
    name: "ImpactSoul",
    since: "Since 2024",
    audience: "NGOs & Stewards of Art & Artifacts",
    description: "Tokenize assets to rally impact movements. Turn cultural treasures and purpose into powerful economic engines.",
    keyValue: "Millions for impact · 3× revenue · up to 10× value",
    compensation: "7.5% of asset equity to launch a movement",
    commitment: "A fan club at worst; a global brand at peak",
    href: "/impact",
    icon: Heart,
    accentColor: "oklch(0.7 0.18 30)",
  },
];

export default function BrandsSection() {
  return (
    <section id="brands" className="section-dark py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span
            className="text-xs tracking-[0.3em] uppercase text-white/40 mb-4 block"
            style={{ fontFamily: "var(--font-body)" }}
          >
            01 — Our Brands
          </span>
          <h2
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Four brands. One coalition.
            <br />
            Pick the one that fits you.
          </h2>
          <p
            className="mt-5 text-base sm:text-lg text-white/50 max-w-2xl mx-auto"
            style={{ fontFamily: "var(--font-body)" }}
          >
            Each brand is purpose-built for a distinct audience — but they share
            the same team of superstars behind the scenes.
          </p>
        </motion.div>

        {/* Brand cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {brands.map((brand, i) => (
            <motion.div
              key={brand.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group bg-white/[0.04] border border-white/[0.08] rounded-xl p-6 hover:bg-white/[0.07] hover:border-white/[0.15] transition-all duration-300"
            >
              {/* Icon */}
              <div
                className="w-12 h-12 rounded-lg flex items-center justify-center mb-5"
                style={{ backgroundColor: `color-mix(in oklch, ${brand.accentColor} 15%, transparent)` }}
              >
                <brand.icon
                  size={22}
                  style={{ color: brand.accentColor }}
                />
              </div>

              {/* Name + Since */}
              <h3
                className="text-xl font-bold text-white mb-1"
                style={{ fontFamily: "var(--font-display)" }}
              >
                {brand.name}
              </h3>
              <p className="text-xs text-white/40 mb-1" style={{ fontFamily: "var(--font-mono)" }}>
                {brand.since}
              </p>
              <p
                className="text-xs font-semibold uppercase tracking-wider mb-4"
                style={{ color: brand.accentColor, fontFamily: "var(--font-body)" }}
              >
                {brand.audience}
              </p>

              {/* Description */}
              <p className="text-sm text-white/60 leading-relaxed mb-5" style={{ fontFamily: "var(--font-body)" }}>
                {brand.description}
              </p>

              {/* Key Value */}
              <div className="mb-3">
                <span className="text-[10px] uppercase tracking-widest text-white/30" style={{ fontFamily: "var(--font-body)" }}>
                  Key Value
                </span>
                <p className="text-sm text-white/70 mt-0.5" style={{ fontFamily: "var(--font-body)" }}>
                  {brand.keyValue}
                </p>
              </div>

              {/* Compensation */}
              <div className="mb-3">
                <span className="text-[10px] uppercase tracking-widest text-white/30" style={{ fontFamily: "var(--font-body)" }}>
                  Compensation
                </span>
                <p className="text-sm text-white/70 mt-0.5" style={{ fontFamily: "var(--font-body)" }}>
                  {brand.compensation}
                </p>
              </div>

              {/* Commitment */}
              <div className="mb-6">
                <span className="text-[10px] uppercase tracking-widest text-white/30" style={{ fontFamily: "var(--font-body)" }}>
                  Our Commitment
                </span>
                <p className="text-sm text-white/70 mt-0.5" style={{ fontFamily: "var(--font-body)" }}>
                  {brand.commitment}
                </p>
              </div>

              {/* CTA */}
              <Link
                href={brand.href}
                className="inline-flex items-center gap-1.5 text-sm font-medium transition-colors group-hover:gap-2.5"
                style={{ color: brand.accentColor, fontFamily: "var(--font-body)" }}
              >
                Explore {brand.name}
                <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
