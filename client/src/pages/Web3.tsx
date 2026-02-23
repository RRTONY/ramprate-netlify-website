/*
 * /web3 — Stratum: Web3 & Blockchain Advisory.
 * Hero: "Navigate the New Stack."
 * Sections: What is Stratum, services, use cases, CTA.
 */
import { motion } from "framer-motion";
import { Link } from "wouter";
import PageLayout from "@/components/PageLayout";
import PageHero from "@/components/PageHero";
import { ArrowRight, Layers, Lock, Coins, Globe, Cpu, ShieldCheck } from "lucide-react";

const services = [
  {
    icon: Layers,
    title: "Protocol Strategy",
    desc: "We help enterprises evaluate Layer 1/2 protocols, consensus mechanisms, and chain architectures. From Ethereum to Solana to private chains — we match the technology to the use case.",
  },
  {
    icon: Lock,
    title: "Security & Compliance",
    desc: "Smart contract audits, regulatory navigation, and compliance frameworks for tokenized assets, DeFi integrations, and cross-border blockchain deployments.",
  },
  {
    icon: Coins,
    title: "Tokenomics Design",
    desc: "Economic model design for utility tokens, governance tokens, and tokenized real-world assets. We stress-test incentive structures before they hit mainnet.",
  },
  {
    icon: Globe,
    title: "Infrastructure Sourcing",
    desc: "Node hosting, RPC providers, indexing services, and validator infrastructure. We apply the same SPY Index rigor to Web3 infrastructure that we bring to traditional IT.",
  },
  {
    icon: Cpu,
    title: "Technical Due Diligence",
    desc: "For investors and acquirers evaluating Web3 companies. We assess codebases, architectures, team capabilities, and technical moats.",
  },
  {
    icon: ShieldCheck,
    title: "Enterprise Integration",
    desc: "Bridging Web2 and Web3. We help enterprises integrate blockchain capabilities — supply chain provenance, digital identity, programmable payments — into existing systems.",
  },
];

const useCases = [
  { title: "Supply Chain Provenance", desc: "Track goods from origin to consumer with immutable on-chain records." },
  { title: "Tokenized Real Estate", desc: "Fractional ownership and programmable compliance for real-world assets." },
  { title: "Digital Identity", desc: "Self-sovereign identity solutions for enterprise authentication and KYC." },
  { title: "Programmable Payments", desc: "Smart contract-based payment flows that execute automatically on conditions." },
  { title: "Carbon Credit Markets", desc: "Transparent, verifiable carbon offset trading on blockchain rails." },
  { title: "Gaming & Digital Assets", desc: "NFT infrastructure, in-game economies, and cross-platform asset portability." },
];

export default function Web3() {
  return (
    <PageLayout>
      <PageHero
        sectionLabel="Stratum — Web3 Advisory"
        headline={
          <>
            Navigate the{" "}
            <span className="text-[#6B21A8]">New Stack.</span>
          </>
        }
        subCopy="Enterprise-grade Web3 advisory from a team that understands both the technology and the business. We bridge the gap between blockchain potential and enterprise reality."
        stats={[
          { value: "100+", label: "Web3 Projects" },
          { value: "L1/L2", label: "Protocol Expertise" },
          { value: "50+", label: "Chain Evaluations" },
        ]}
      />

      {/* Services */}
      <section className="section-warm py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <div className="text-center mb-14">
            <h2
              className="text-3xl sm:text-4xl font-bold tracking-tight"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Web3 Services
            </h2>
            <p
              className="mt-4 text-base text-[oklch(0.45_0.02_50)] max-w-2xl mx-auto"
              style={{ fontFamily: "var(--font-body)" }}
            >
              From protocol selection to production deployment — we guide enterprises through every layer of the Web3 stack.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s, i) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white rounded-xl p-7 border border-black/5 hover:shadow-md transition-shadow"
              >
                <div className="w-11 h-11 rounded-lg bg-[#6B21A8]/10 flex items-center justify-center mb-5">
                  <s.icon size={20} className="text-[#6B21A8]" />
                </div>
                <h3
                  className="text-lg font-bold mb-3"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {s.title}
                </h3>
                <p
                  className="text-sm text-[oklch(0.45_0.02_50)] leading-relaxed"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  {s.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="section-dark py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <h2
            className="text-3xl sm:text-4xl font-bold text-white mb-12"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Enterprise <span className="text-[#6B21A8]">Use Cases</span>
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {useCases.map((uc, i) => (
              <motion.div
                key={uc.title}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="bg-white/5 rounded-lg p-6 border border-white/10 hover:border-[#6B21A8]/30 transition-colors"
              >
                <h3
                  className="text-base font-bold text-white mb-2"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {uc.title}
                </h3>
                <p
                  className="text-sm text-white/50 leading-relaxed"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  {uc.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#6B21A8] py-16 sm:py-20">
        <div className="max-w-4xl mx-auto px-5 sm:px-8 text-center">
          <h2
            className="text-3xl sm:text-4xl font-bold text-white mb-4"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Ready to Build on the New Stack?
          </h2>
          <p
            className="text-white/70 text-base sm:text-lg leading-relaxed mb-8 max-w-2xl mx-auto"
            style={{ fontFamily: "var(--font-body)" }}
          >
            Whether you're exploring blockchain for the first time or scaling an existing Web3 initiative, we'll help you navigate the complexity.
          </p>
          <Link
            href="/connect"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-md text-sm font-semibold bg-white text-[#6B21A8] hover:bg-white/90 transition-all shadow-lg"
            style={{ fontFamily: "var(--font-body)" }}
          >
            Start a Conversation <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </PageLayout>
  );
}
