/*
 * /web3 — Stratum: Web3 Advisory (Enterprise & NGO Bridge)
 * ALL CONTENT FROM: ramprate.com + content migration paste
 * 7 blockchain services, published insights, blog posts.
 * ZERO fabrication.
 */
import { motion } from "framer-motion";
import { Link } from "wouter";
import PageLayout from "@/components/PageLayout";
import PageHero from "@/components/PageHero";
import { ArrowRight, Blocks, Globe, Coins, Shield, FileText, Zap, Server, Building2, Landmark, BookOpen, ExternalLink } from "lucide-react";

const STRATUM_URL = "https://stratumweb-2pprew4h.manus.space";

/* ── EXISTING 6 SERVICE CARDS ── */
const services = [
  {
    icon: Blocks,
    title: "Enterprise Blockchain Bridge",
    desc: "Connecting Fortune 500 to Web3. Deep links to blockchain ecosystem: top ICO advisors, large mining pools, enterprise distributed app platforms.",
  },
  {
    icon: Coins,
    title: "Non-Dilutive Funding",
    desc: "Non-dilutive funding through tokenized models. We've facilitated grants in excess of €4 million through partnerships like DevxDAO and XPRIZE.",
  },
  {
    icon: Globe,
    title: "DAO Governance Design",
    desc: "DAO governance design for multi-stakeholder consortia. From token economics to voting mechanisms to community management.",
  },
  {
    icon: Shield,
    title: "Regulatory Navigation",
    desc: "Custom consulting for blockchain orientation and roadmapping. Navigate the evolving regulatory landscape for digital assets, tokens, and decentralized organizations.",
  },
  {
    icon: FileText,
    title: "Tokenization Strategy",
    desc: "Design token models that align incentives across all stakeholders. From utility tokens to governance tokens to asset-backed tokens.",
  },
  {
    icon: Zap,
    title: "Zero-Cost Transformative Tech",
    desc: "Leverage blockchain and Web3 technology to transform operations at minimal cost — turning technology into a strategic advantage rather than a line-item expense.",
  },
];

/* ── ALL 7 BLOCKCHAIN ADVISORY SERVICES — REAL from paste ── */
const blockchainServices = [
  { title: "Low-Cost Power for Mining", desc: "Megawatts of low-cost power for proof of work and mining pools." },
  { title: "Turnkey Mining Solutions", desc: "Turnkey mining solutions for investors looking to enter the space." },
  { title: "Enterprise Hosting for Trusted Nodes", desc: "Enterprise partners for hosting trusted nodes on major networks." },
  { title: "Blockchain Orientation & Roadmapping", desc: "Custom consulting for blockchain orientation and strategic roadmapping." },
  { title: "Enterprise Blockchain Bridge", desc: "Connecting Fortune 500 to Web3 — bridging the gap between enterprise and decentralized technology." },
  { title: "Non-Dilutive Funding", desc: "Non-dilutive funding through tokenized models and DAO grant programs." },
  { title: "DAO Governance Design", desc: "DAO governance design for multi-stakeholder consortia and community-driven organizations." },
];

/* ── PUBLISHED INSIGHTS — REAL from paste ── */
const publishedInsights = [
  { title: "From Supply Chain to the Blockchain", url: "https://ramprate.com/from-supply-chain-to-the-blockchain/" },
  { title: "Enterprise Blockchain: Can Big Business Co-opt an Existential Threat?", url: "https://ramprate.com/enterprise-blockchain-can-big-business-co-opt-an-existential-threat/" },
  { title: "Historical Perspective on Blockchain", url: "https://ramprate.com/historical-perspective-on-blockchain/" },
  { title: "What Solutions Are Best Built with Blockchain — Or NOT", url: "https://ramprate.com/what-solutions-are-best-built-with-blockchain-or-not/" },
  { title: "The Ball and Blockchain: Obstacles to a World-Changing Trajectory", url: "https://ramprate.com/the-ball-and-blockchain-obstacles-to-a-world-changing-trajectory/" },
];

const relatedPosts = [
  { title: "Republic's Mirror Tokens — SpaceX and Beyond", date: "July 22, 2025", url: "https://ramprate.com/republics-mirror-tokens-spacex-and-beyond/", tag: "Tokens" },
  { title: "UNI Token Price Surge: A Reflection of the Market's Hunger for Effective Governance?", date: "March 5, 2024", url: "https://ramprate.com/uni-token-price-surge-a-reflection-of-the-markets-hunger-for-effective-governance/", tag: "Governance" },
  { title: "The Need for Burning Man to Convert into a DAO", date: "August 17, 2023", url: "https://ramprate.com/convert-burning-man-dao-menagerie/", tag: "DAO" },
  { title: "RampRate Works with DevxDAO and XPRIZE to Announce a Grant in Excess of €4 Million", date: "January 23, 2023", url: "https://ramprate.com/ramprate-works-with-devxdao-and-xprize/", tag: "Grants" },
  { title: "World Economic Forum: DAVOS 2022", date: "May 19, 2022", url: "https://ramprate.com/davos-2022-world-economic-forum-here-we-come/", tag: "WEF" },
];

export default function Web3() {
  return (
    <PageLayout>
      {/* Deep Dive Banner */}
      <div className="bg-gradient-to-r from-[oklch(0.6_0.2_280)] to-[oklch(0.5_0.18_260)] py-3">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 flex items-center justify-center gap-3">
          <span className="text-sm text-white/90 font-medium" style={{ fontFamily: "var(--font-body)" }}>
            Explore the full Stratum experience
          </span>
          <a
            href={STRATUM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-bold bg-white/20 text-white hover:bg-white/30 backdrop-blur-sm transition-all"
            style={{ fontFamily: "var(--font-body)" }}
          >
            Deep Dive <ExternalLink size={11} />
          </a>
        </div>
      </div>

      <PageHero
        sectionLabel="Stratum — Since 2015"
        headline={
          <>
            Connect Blockchain to Enterprise for{" "}
            <span className="text-[oklch(0.55_0.15_30)]">Transformative Technology</span>
          </>
        }
        subCopy="Deep links to blockchain ecosystem: top ICO advisors, large mining pools, enterprise distributed app platforms. Non-dilutive funding and zero-cost transformative tech."
        stats={[
          { value: "Since", label: "2015" },
          { value: "For", label: "Enterprise & NGO Bridge" },
          { value: "Comp", label: "% of value created" },
        ]}
      />

      {/* What is Stratum */}
      <section className="relative section-warm overflow-hidden py-20 sm:py-28">
        <div className="glass-orb-rust w-[300px] h-[300px] -bottom-32 -right-32" />
        <div className="glass-orb-amber w-[180px] h-[180px] top-10 -left-20" />
        <div className="relative z-10 max-w-5xl mx-auto px-5 sm:px-8">
          <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[oklch(0.55_0.15_30)]" style={{ fontFamily: "var(--font-body)" }}>
            The Bridge
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl font-bold tracking-tight" style={{ fontFamily: "var(--font-display)" }}>
            Non-Dilutive Capital & Zero-Cost Transformative Tech
          </h2>
          <div className="mt-8 space-y-5 text-base text-[oklch(0.4_0.02_50)] leading-relaxed" style={{ fontFamily: "var(--font-body)" }}>
            <p>
              Stratum bridges the gap between blockchain innovation and enterprise adoption. We connect Web3 projects with Fortune 500 companies, NGOs, and government entities — creating real-world utility for decentralized technology.
            </p>
            <p>
              Our track record includes facilitating grants in excess of €4 million through DevxDAO and XPRIZE, advising on DAO governance structures, and representing Web3 projects at the World Economic Forum in Davos.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid — high-level */}
      <section className="relative section-light overflow-hidden py-20 sm:py-28">
        <div className="glass-orb-amber w-[280px] h-[280px] -bottom-32 -left-32" />
        <div className="glass-orb-rust w-[160px] h-[160px] top-20 -right-20" />
        <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight" style={{ fontFamily: "var(--font-display)" }}>
              What We <span className="text-[oklch(0.55_0.15_30)]">Build</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s, i) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-[oklch(0.97_0.01_80)] rounded-xl p-7 border border-black/5 hover:shadow-md transition-shadow"
              >
                <div className="w-11 h-11 rounded-lg bg-[oklch(0.55_0.15_30)]/10 flex items-center justify-center mb-5">
                  <s.icon size={20} className="text-[oklch(0.55_0.15_30)]" />
                </div>
                <h3 className="text-lg font-bold mb-3" style={{ fontFamily: "var(--font-display)" }}>{s.title}</h3>
                <p className="text-sm text-[oklch(0.45_0.02_50)] leading-relaxed" style={{ fontFamily: "var(--font-body)" }}>{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* All 7 Blockchain Advisory Services — from paste */}
      <section className="relative section-warm overflow-hidden py-20 sm:py-28">
        <div className="glass-orb-rust w-[300px] h-[300px] -bottom-32 -right-32" />
        <div className="glass-orb-amber w-[180px] h-[180px] top-10 -left-20" />
        <div className="relative z-10 max-w-5xl mx-auto px-5 sm:px-8">
          <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[oklch(0.55_0.15_30)]" style={{ fontFamily: "var(--font-body)" }}>
            Blockchain Advisory
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl font-bold tracking-tight mb-10" style={{ fontFamily: "var(--font-display)" }}>
            Full-Spectrum <span className="text-[oklch(0.55_0.15_30)]">Services</span>
          </h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {blockchainServices.map((s, i) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                className="bg-white rounded-lg p-5 border border-black/5 flex gap-4 items-start"
              >
                <div className="w-2 h-2 rounded-full bg-[oklch(0.55_0.15_30)] mt-1.5 shrink-0" />
                <div>
                  <h3 className="text-sm font-bold mb-1" style={{ fontFamily: "var(--font-display)" }}>{s.title}</h3>
                  <p className="text-xs text-[oklch(0.45_0.02_50)] leading-relaxed" style={{ fontFamily: "var(--font-body)" }}>{s.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Published Insights — REAL from paste */}
      <section className="relative section-dark overflow-hidden py-20 sm:py-28">
        <div className="glass-orb-blue w-[350px] h-[350px] -top-40 -right-40" />
        <div className="glass-orb-amber w-[200px] h-[200px] bottom-20 -left-20" />
        <div className="relative z-10 max-w-5xl mx-auto px-5 sm:px-8">
          <div className="flex items-center gap-3 mb-8">
            <BookOpen size={20} className="text-[oklch(0.55_0.15_30)]" />
            <h2 className="text-2xl sm:text-3xl font-bold text-white" style={{ fontFamily: "var(--font-display)" }}>
              Published <span className="text-[oklch(0.55_0.15_30)]">Insights</span>
            </h2>
          </div>
          <p className="text-white/50 text-sm mb-8 leading-relaxed" style={{ fontFamily: "var(--font-body)" }}>
            Our blockchain article series — deep dives into enterprise blockchain adoption, supply chain transformation, and the obstacles to a world-changing trajectory.
          </p>
          <div className="space-y-3">
            {publishedInsights.map((insight, i) => (
              <motion.a
                key={insight.title}
                href={insight.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, x: -12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="flex items-center justify-between gap-4 bg-white/5 rounded-lg px-6 py-4 border border-white/10 hover:bg-white/10 transition-colors group"
              >
                <span className="text-sm text-white/80 font-medium group-hover:text-white transition-colors" style={{ fontFamily: "var(--font-body)" }}>
                  {insight.title}
                </span>
                <ArrowRight size={14} className="text-[oklch(0.55_0.15_30)] shrink-0" />
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* Commitment */}
      <section className="relative section-light overflow-hidden py-20 sm:py-28">
        <div className="glass-orb-amber w-[280px] h-[280px] -bottom-32 -left-32" />
        <div className="glass-orb-rust w-[160px] h-[160px] top-20 -right-20" />
        <div className="relative z-10 max-w-5xl mx-auto px-5 sm:px-8 text-center">
          <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[oklch(0.55_0.15_30)]" style={{ fontFamily: "var(--font-body)" }}>
            Our Commitment
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl font-bold" style={{ fontFamily: "var(--font-display)" }}>
            Right Person in the Room from All Sides
          </h2>
          <p className="mt-6 text-lg text-[oklch(0.45_0.02_50)] leading-relaxed max-w-2xl mx-auto" style={{ fontFamily: "var(--font-body)" }}>
            Compensation tied to percentage of value created. We convene the right people and create real bridges between Web3 innovation and enterprise adoption.
          </p>
          <div className="mt-12 grid sm:grid-cols-3 gap-6">
            {[
              { label: "Compensation", value: "% of value created" },
              { label: "Commitment", value: "Right person in the room from all sides" },
              { label: "Key Value", value: "Non-dilutive capital & zero-cost transformative tech" },
            ].map((item) => (
              <div key={item.label} className="bg-[oklch(0.97_0.01_80)] rounded-xl p-6 border border-black/5">
                <div className="text-xs text-[oklch(0.5_0.02_50)] uppercase tracking-wider mb-2" style={{ fontFamily: "var(--font-body)" }}>{item.label}</div>
                <div className="text-sm text-[oklch(0.3_0.02_50)] leading-relaxed font-medium" style={{ fontFamily: "var(--font-body)" }}>{item.value}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related Blog Posts — REAL from ramprate.com */}
      <section className="relative section-warm overflow-hidden py-20 sm:py-28">
        <div className="glass-orb-rust w-[300px] h-[300px] -bottom-32 -right-32" />
        <div className="glass-orb-amber w-[180px] h-[180px] top-10 -left-20" />
        <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold mb-10" style={{ fontFamily: "var(--font-display)" }}>
            Web3 <span className="text-[oklch(0.55_0.15_30)]">Insights</span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {relatedPosts.map((post, i) => (
              <motion.a
                key={post.title}
                href={post.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="bg-white rounded-xl p-6 border border-black/5 hover:shadow-md transition-shadow group"
              >
                <span className="px-2 py-0.5 rounded-full bg-[oklch(0.55_0.15_30)]/10 text-[oklch(0.55_0.15_30)] text-[10px] font-medium">{post.tag}</span>
                <h3 className="mt-3 text-base font-bold tracking-tight group-hover:text-[oklch(0.55_0.15_30)] transition-colors line-clamp-2" style={{ fontFamily: "var(--font-display)" }}>
                  {post.title}
                </h3>
                <div className="mt-2 text-xs text-[oklch(0.5_0.02_50)]" style={{ fontFamily: "var(--font-body)" }}>{post.date}</div>
                <span className="inline-flex items-center gap-1 mt-3 text-xs font-semibold text-[oklch(0.55_0.15_30)]" style={{ fontFamily: "var(--font-body)" }}>
                  Read on ramprate.com <ArrowRight size={12} />
                </span>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[oklch(0.55_0.15_30)] py-16 sm:py-20">
        <div className="max-w-4xl mx-auto px-5 sm:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4" style={{ fontFamily: "var(--font-display)" }}>
            Trust Us With What You Hate to Do
          </h2>
          <p className="text-white/80 text-base sm:text-lg leading-relaxed mb-8 max-w-2xl mx-auto" style={{ fontFamily: "var(--font-body)" }}>
            And focus on the change you want to create in the world.
          </p>
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <Link href="/connect" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-md text-sm font-semibold bg-white text-[oklch(0.35_0.1_30)] hover:bg-white/90 transition-all shadow-lg" style={{ fontFamily: "var(--font-body)" }}>
              Start a Conversation <ArrowRight size={16} />
            </Link>
            <a
              href={STRATUM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-md text-sm font-semibold border-2 border-white/30 text-white hover:bg-white/10 transition-all"
              style={{ fontFamily: "var(--font-body)" }}
            >
              Explore Stratum Deep Dive <ExternalLink size={14} />
            </a>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
