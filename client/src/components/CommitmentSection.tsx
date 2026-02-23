/*
 * Commitment Section: "Skin in the game. Always."
 * 4 brand commitment cards on warm sand background
 */
import { motion } from "framer-motion";

const commitments = [
  {
    brand: "RampRate",
    title: "300%+ ROI Guarantee",
    desc: "Paid as a percentage of the impact we achieve. If we don't deliver outsized returns, we don't get paid outsized fees.",
  },
  {
    brand: "Syzygy",
    title: "Aligned Milestones",
    desc: "Break-even cash with upside in equity or tokens. We hit your milestones or we share the pain.",
  },
  {
    brand: "Stratum",
    title: "Value-Linked Fees",
    desc: "Compensation tied to percentage of value created. We convene the right people and create real bridges.",
  },
  {
    brand: "ImpactSoul",
    title: "Movement Equity",
    desc: "7.5% of asset equity to launch a movement. At worst you get a fan club — at peak, a global brand.",
  },
];

export default function CommitmentSection() {
  return (
    <section className="section-warm py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span
            className="text-xs tracking-[0.3em] uppercase text-[oklch(0.5_0.02_50)] mb-4 block"
            style={{ fontFamily: "var(--font-body)" }}
          >
            03 — Our Commitment
          </span>
          <h2
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-[oklch(0.18_0.03_50)] leading-tight"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Skin in the game.
            <br />
            <em className="text-[oklch(0.82_0.15_75)] not-italic">Always.</em>
          </h2>
          <p
            className="mt-5 text-base sm:text-lg text-[oklch(0.45_0.02_50)] max-w-2xl mx-auto"
            style={{ fontFamily: "var(--font-body)" }}
          >
            We don't invoice and disappear. Every brand is structured so our
            compensation scales with the value we create for you.
          </p>
        </motion.div>

        {/* Commitment cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {commitments.map((c, i) => (
            <motion.div
              key={c.brand}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-white rounded-xl p-8 shadow-sm border border-[oklch(0.88_0.02_80)] hover:shadow-md transition-shadow"
            >
              <h3
                className="text-lg font-bold text-[oklch(0.18_0.03_50)] mb-1"
                style={{ fontFamily: "var(--font-display)" }}
              >
                {c.brand} — {c.title}
              </h3>
              <p
                className="text-sm text-[oklch(0.45_0.02_50)] leading-relaxed mt-3"
                style={{ fontFamily: "var(--font-body)" }}
              >
                {c.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
