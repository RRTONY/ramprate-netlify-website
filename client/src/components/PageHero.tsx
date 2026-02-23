/*
 * Shared hero component for inner pages.
 * Dark bg with gradient, section number, headline, sub-copy.
 */
import { motion } from "framer-motion";

interface PageHeroProps {
  sectionLabel?: string;
  headline: React.ReactNode;
  subCopy?: string;
  stats?: { value: string; label: string }[];
  bgImage?: string;
  children?: React.ReactNode;
}

export default function PageHero({ sectionLabel, headline, subCopy, stats, bgImage, children }: PageHeroProps) {
  return (
    <section className="relative pt-28 pb-20 sm:pt-36 sm:pb-28 overflow-hidden bg-[oklch(0.14_0.01_250)]">
      {bgImage && (
        <div className="absolute inset-0">
          <img src={bgImage} alt="" className="w-full h-full object-cover opacity-30" />
          <div className="absolute inset-0 bg-gradient-to-r from-[oklch(0.14_0.01_250)] via-[oklch(0.14_0.01_250)]/80 to-[oklch(0.14_0.01_250)]/60" />
        </div>
      )}
      {!bgImage && (
        <div className="absolute inset-0 bg-gradient-to-br from-[oklch(0.14_0.01_250)] via-[oklch(0.18_0.02_260)] to-[oklch(0.14_0.01_250)]" />
      )}

      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8">
        {sectionLabel && (
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="mb-6"
          >
            <span
              className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full border border-white/10 bg-white/5"
              style={{ fontFamily: "var(--font-body)" }}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#6B21A8]" />
              <span className="text-[11px] font-medium tracking-[0.2em] uppercase text-white/50">
                {sectionLabel}
              </span>
            </span>
          </motion.div>
        )}

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] tracking-tight text-white max-w-4xl"
          style={{ fontFamily: "var(--font-display)" }}
        >
          {headline}
        </motion.h1>

        {subCopy && (
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="mt-6 text-base sm:text-lg text-white/50 leading-relaxed max-w-2xl"
            style={{ fontFamily: "var(--font-body)" }}
          >
            {subCopy}
          </motion.p>
        )}

        {stats && stats.length > 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            className="mt-10 flex flex-wrap gap-8 sm:gap-12"
          >
            {stats.map((s) => (
              <div key={s.label}>
                <div
                  className="text-2xl sm:text-3xl font-bold text-white/90"
                  style={{ fontFamily: "var(--font-mono)" }}
                >
                  {s.value}
                </div>
                <div
                  className="mt-1 text-xs text-white/35 tracking-wide uppercase"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  {s.label}
                </div>
              </div>
            ))}
          </motion.div>
        )}

        {children}
      </div>
    </section>
  );
}
