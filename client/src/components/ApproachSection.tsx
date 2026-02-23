/*
 * Approach Section: "Where entrepreneurship meets enterprise-grade execution"
 * 4 pillars: Speed, Connections, Clean Up, Align Profit
 * Light/warm background section
 */
import { motion } from "framer-motion";
import { Zap, Link2, Wrench, Scale } from "lucide-react";

const pillars = [
  {
    num: "01",
    icon: Zap,
    title: "Speed & De-Risk Innovation",
    desc: "Compress timelines from months to weeks. Our network and methodology eliminate the trial-and-error that kills momentum — getting you to market 80% faster with 99% less risk exposure.",
  },
  {
    num: "02",
    icon: Link2,
    title: "Trajectory-Changing Connections",
    desc: "The right introduction at the right moment changes everything. We broker relationships between enterprises, founders, capital, and impact leaders that create compounding value.",
  },
  {
    num: "03",
    icon: Wrench,
    title: "Clean Up Intractable Messes",
    desc: "Stuck vendors, misaligned partnerships, regulatory tangles, broken go-to-market strategies — we've seen it all and we untangle it with surgical precision.",
  },
  {
    num: "04",
    icon: Scale,
    title: "Align Profit with Purpose",
    desc: "Impact and revenue aren't trade-offs — they're multipliers. From tokenized assets to enterprise cost savings, we build models where doing good drives the bottom line.",
  },
];

export default function ApproachSection() {
  return (
    <section className="section-light py-24 sm:py-32">
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
            02 — Our Approach
          </span>
          <h2
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-[oklch(0.18_0.03_50)] leading-tight"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Where entrepreneurship meets
            <br />
            <em className="text-[oklch(0.82_0.15_75)] not-italic">enterprise-grade</em> execution
          </h2>
          <p
            className="mt-5 text-base sm:text-lg text-[oklch(0.45_0.02_50)] max-w-2xl mx-auto"
            style={{ fontFamily: "var(--font-body)" }}
          >
            We sit at the intersection of five forces reshaping the world — and
            we bring them together for you.
          </p>
        </motion.div>

        {/* Pillars grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {pillars.map((p, i) => (
            <motion.div
              key={p.num}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="flex gap-5"
            >
              <div className="flex-shrink-0">
                <div className="w-14 h-14 rounded-xl bg-[oklch(0.94_0.03_80)] flex items-center justify-center">
                  <p.icon size={24} className="text-[oklch(0.82_0.15_75)]" />
                </div>
              </div>
              <div>
                <span
                  className="text-xs font-medium text-[oklch(0.82_0.15_75)] tracking-wider"
                  style={{ fontFamily: "var(--font-mono)" }}
                >
                  {p.num}
                </span>
                <h3
                  className="text-xl font-bold text-[oklch(0.18_0.03_50)] mt-1 mb-3"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {p.title}
                </h3>
                <p
                  className="text-sm sm:text-base text-[oklch(0.45_0.02_50)] leading-relaxed"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  {p.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
