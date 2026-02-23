/*
 * Hero: Full-bleed cinematic image — professionals converging at illuminated building at dusk.
 * Image composition: dark left half (text zone), warm-lit right half (visual).
 * Value-led headline: "The right person. The right room. The right time."
 * White text on dark left side — no bleed, no overlap.
 */
import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight, ArrowDown } from "lucide-react";

const HERO_IMG =
  "https://private-us-east-1.manuscdn.com/sessionFile/m6kc1Tn353i2D6rxZBg8XB/sandbox/J7HEXUnaovvTBQvdWYHk6M-img-2_1771884573000_na1fn_aGVyby1jb252ZXJnZW5jZS12Mg.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvbTZrYzFUbjM1M2kyRDZyeFpCZzhYQi9zYW5kYm94L0o3SEVYVW5hb3Z2VEJRdmRXWUhrNk0taW1nLTJfMTc3MTg4NDU3MzAwMF9uYTFmbl9hR1Z5YnkxamIyNTJaWEpuWlc1alpTMTJNZy5wbmc~eC1vc3MtcHJvY2Vzcz1pbWFnZS9yZXNpemUsd18xOTIwLGhfMTkyMC9mb3JtYXQsd2VicC9xdWFsaXR5LHFfODAiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3OTg3NjE2MDB9fX1dfQ__&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=dR8T9HY3gTId1kbm5~sRaczbVNRMTI0pb4eePWr5NSovZ4J2cqRm2TXlwcNnQDGNke5A-sRevt51xkxV9ncZqnHZeHChDGPkuKzFDDSEQSJiYSlhQDINZfrQhUcDhfH69AryM~jkJvoGu2FEN8PlICaOdV1c8tLovvk3JA0MUcwBcn1t-jripUvbE9WpjJdwBXRzrC6eGMcsinhFBvUfihrr8v1~Hz8cfo5Qxvlg1WzJFe8QspW~Ah-Tb2f5bv5nryfqizSi-CjDgLge6PZap4xIipojP-88nrUZlzQEOzfz5Yvne6Bg7AehzgweeKWG-24HipP0CnPjpb2DFvjElA__";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col overflow-hidden bg-[#0a0f1a]">
      {/* Background image — positioned to keep dark area on left */}
      <div className="absolute inset-0">
        <img
          src={HERO_IMG}
          alt=""
          className="w-full h-full object-cover object-right"
          loading="eager"
        />
        {/* Gradient overlays to deepen the left side for text */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a0f1a] via-[#0a0f1a]/80 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0f1a]/90 via-transparent to-[#0a0f1a]/40" />
      </div>

      {/* Content — pinned to the left half */}
      <div className="relative z-10 flex flex-col justify-center min-h-screen max-w-7xl mx-auto px-5 sm:px-8 w-full">
        <div className="max-w-xl lg:max-w-2xl pt-28 pb-32">
          {/* Tagline pill */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mb-8"
          >
            <span className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-[oklch(0.82_0.15_75)]" />
              <span
                className="text-[11px] sm:text-xs font-medium tracking-[0.2em] uppercase text-white/60"
                style={{ fontFamily: "var(--font-body)" }}
              >
                Enterprise Decisions Collective
              </span>
            </span>
          </motion.div>

          {/* Headline — value-led */}
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="text-[2.5rem] sm:text-5xl md:text-6xl lg:text-[4.25rem] font-bold leading-[1.08] tracking-[-0.02em] text-white"
            style={{ fontFamily: "var(--font-display)" }}
          >
            The right person.
            <br />
            The right room.
            <br />
            <span className="text-[oklch(0.82_0.15_75)]">The right time.</span>
          </motion.h1>

          {/* Sub-copy */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="mt-7 text-base sm:text-lg text-white/55 leading-relaxed max-w-lg"
            style={{ fontFamily: "var(--font-body)" }}
          >
            Since 2000, we've brokered $24B+ in trajectory-changing connections
            across 50+ countries. We clean up intractable messes, speed up &amp;
            de-risk innovation, and align profit with purpose.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.9 }}
            className="mt-10 flex flex-wrap gap-4"
          >
            <a
              href="#brands"
              className="group inline-flex items-center gap-2.5 px-7 py-3.5 rounded-md text-sm font-semibold bg-[oklch(0.82_0.15_75)] text-[oklch(0.15_0.03_50)] hover:bg-[oklch(0.78_0.16_75)] transition-all duration-300 shadow-lg shadow-[oklch(0.82_0.15_75)]/15"
              style={{ fontFamily: "var(--font-body)" }}
            >
              Explore Our Brands
              <ArrowRight
                size={16}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </a>
            <Link
              href="/connect"
              className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-md text-sm font-semibold border border-white/20 text-white/80 hover:text-white hover:border-white/40 hover:bg-white/5 transition-all duration-300"
              style={{ fontFamily: "var(--font-body)" }}
            >
              Start a Conversation
            </Link>
          </motion.div>

          {/* Micro-stats row */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.2 }}
            className="mt-16 flex gap-8 sm:gap-12"
          >
            {[
              { value: "$24B+", label: "Decisions Brokered" },
              { value: "50+", label: "Countries" },
              { value: "24", label: "Years Deep" },
            ].map((stat) => (
              <div key={stat.label}>
                <div
                  className="text-xl sm:text-2xl font-bold text-white/90 tracking-tight"
                  style={{ fontFamily: "var(--font-mono)" }}
                >
                  {stat.value}
                </div>
                <div
                  className="mt-0.5 text-[10px] sm:text-xs text-white/35 tracking-wide uppercase"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-white/30"
      >
        <span
          className="text-[10px] tracking-[0.3em] uppercase"
          style={{ fontFamily: "var(--font-body)" }}
        >
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown size={14} />
        </motion.div>
      </motion.div>
    </section>
  );
}
