/*
 * CTA Section: Bold blue full-width background
 * "Trust us with what you hate to do"
 * Matches fusionramp.manus.space blue CTA section
 */
import { motion } from "framer-motion";
import { Link } from "wouter";

const CTA_BG = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663242884547/IqjXtGbLsLNWjbKF.png";

export default function CTASection() {
  return (
    <section className="relative py-24 sm:py-32 overflow-hidden">
      {/* Blue texture background */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${CTA_BG})` }}
      />
      <div className="absolute inset-0 bg-[oklch(0.4_0.22_260)]/80" />

      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <span
            className="text-xs tracking-[0.3em] uppercase text-white/50 mb-6 block"
            style={{ fontFamily: "var(--font-body)" }}
          >
            04 — Let's Go
          </span>
          <h2
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight max-w-3xl mx-auto"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Trust us with what you{" "}
            <em className="not-italic line-through opacity-50">hate</em>{" "}
            have to do
          </h2>
          <p
            className="mt-6 text-base sm:text-lg text-white/70 max-w-xl mx-auto"
            style={{ fontFamily: "var(--font-body)" }}
          >
            And focus on the change you want to create in the world.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link
              href="/connect"
              className="px-8 py-4 rounded-md text-sm sm:text-base font-semibold bg-white text-[oklch(0.25_0.15_260)] hover:bg-white/90 transition-all shadow-lg"
              style={{ fontFamily: "var(--font-body)" }}
            >
              Book a Strategy Call
            </Link>
            <Link
              href="/connect"
              className="px-8 py-4 rounded-md text-sm sm:text-base font-semibold border border-white/30 text-white hover:bg-white/10 transition-all"
              style={{ fontFamily: "var(--font-body)" }}
            >
              Message Us
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
