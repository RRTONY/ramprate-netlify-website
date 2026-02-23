/*
 * Network Section: "The Rolodex on Steroids"
 * Dark background with network node visualization
 * Shows key network affiliations: Davos, YPO, Summit, Hatch, XPRIZE, Aspen
 */
import { motion } from "framer-motion";

const NETWORK_BG = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663242884547/LqEPidzYckLklkZD.png";

const networkNodes = [
  "Davos / WEF",
  "YPO",
  "Summit Series",
  "Hatch",
  "XPRIZE",
  "Aspen Institute",
  "Fortune 500",
  "Web3 Protocols",
];

const networkStats = [
  { value: "50+", label: "Countries" },
  { value: "350+", label: "Vendors" },
  { value: "150K+", label: "Data Points" },
  { value: "24", label: "Years Deep" },
];

export default function NetworkSection() {
  return (
    <section className="relative py-24 sm:py-32 overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${NETWORK_BG})` }}
      />
      <div className="absolute inset-0 bg-[oklch(0.12_0.01_250)]/85" />

      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h2
              className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight mb-6"
              style={{ fontFamily: "var(--font-display)" }}
            >
              The Rolodex
              <br />
              on <em className="text-[oklch(0.82_0.15_75)] not-italic">Steroids</em>
            </h2>
            <p
              className="text-base sm:text-lg text-white/60 leading-relaxed mb-8"
              style={{ fontFamily: "var(--font-body)" }}
            >
              We deploy time-dependent configurations. Principals stay. Advisors
              guide. Specialists rotate. The right person in the right room at
              the right time — every time.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
              {networkStats.map((stat) => (
                <div key={stat.label}>
                  <div
                    className="text-2xl sm:text-3xl font-bold text-white"
                    style={{ fontFamily: "var(--font-mono)" }}
                  >
                    {stat.value}
                  </div>
                  <div
                    className="text-xs text-white/40 uppercase tracking-wider mt-1"
                    style={{ fontFamily: "var(--font-body)" }}
                  >
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right: Network nodes */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-wrap gap-3 justify-center lg:justify-end"
          >
            {networkNodes.map((node, i) => (
              <motion.div
                key={node}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.3 + i * 0.08 }}
                className="px-5 py-3 rounded-full border border-white/10 bg-white/[0.03] backdrop-blur-sm text-sm text-white/70 hover:border-[oklch(0.82_0.15_75)]/30 hover:text-white transition-all"
                style={{ fontFamily: "var(--font-body)" }}
              >
                {node}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
