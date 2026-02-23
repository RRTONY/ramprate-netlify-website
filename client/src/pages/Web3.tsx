/*
 * /web3 — Stratum: Web3 Advisory (Enterprise & NGO Bridge)
 * ALL CONTENT FROM: fusionramp.netlify.app (Stratum brand section)
 * + real blog posts about Web3 from ramprate.com
 * ZERO fabrication.
 */
import { motion } from "framer-motion";
import { Link } from "wouter";
import PageLayout from "@/components/PageLayout";
import PageHero from "@/components/PageHero";
import { ArrowRight, Blocks, Globe, Coins, Shield, FileText, Zap } from "lucide-react";

const services = [
  {
    icon: Blocks,
    title: "Enterprise Blockchain Integration",
    desc: "Connect blockchain technology to enterprise infrastructure for transformative solutions. We bridge the gap between Web3 innovation and enterprise-grade requirements.",
  },
  {
    icon: Coins,
    title: "Non-Dilutive Funding",
    desc: "Access non-dilutive capital through grants, DAOs, and tokenized funding mechanisms. We've facilitated grants in excess of €4 million through partnerships like DevxDAO and XPRIZE.",
  },
  {
    icon: Globe,
    title: "DAO Governance & Structure",
    desc: "Design and implement decentralized governance structures that actually work. From token economics to voting mechanisms to community management.",
  },
  {
    icon: Shield,
    title: "Regulatory Navigation",
    desc: "Navigate the evolving regulatory landscape for digital assets, tokens, and decentralized organizations with guidance from our network of legal and compliance experts.",
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

const relatedPosts = [
  {
    title: "Republic's Mirror Tokens — SpaceX and Beyond",
    date: "July 22, 2025",
    url: "https://ramprate.com/republics-mirror-tokens-spacex-and-beyond/",
    tag: "Tokens",
  },
  {
    title: "UNI Token Price Surge: A Reflection of the Market's Hunger for Effective Governance?",
    date: "March 5, 2024",
    url: "https://ramprate.com/uni-token-price-surge-a-reflection-of-the-markets-hunger-for-effective-governance/",
    tag: "Governance",
  },
  {
    title: "The Need for Burning Man to Convert into a DAO",
    date: "August 17, 2023",
    url: "https://ramprate.com/convert-burning-man-dao-menagerie/",
    tag: "DAO",
  },
  {
    title: "RampRate Works with DevxDAO and XPRIZE to Announce a Grant in Excess of €4 Million",
    date: "January 23, 2023",
    url: "https://ramprate.com/ramprate-works-with-devxdao-and-xprize/",
    tag: "Grants",
  },
  {
    title: "World Economic Forum: DAVOS 2022",
    date: "May 19, 2022",
    url: "https://ramprate.com/davos-2022-world-economic-forum-here-we-come/",
    tag: "WEF",
  },
];

export default function Web3() {
  return (
    <PageLayout>
      <PageHero
        sectionLabel="Stratum — Since 2015"
        headline={
          <>
            Connect Blockchain to Enterprise for{" "}
            <span className="text-[oklch(0.55_0.15_30)]">Transformative Technology</span>
          </>
        }
        subCopy="Connect blockchain to enterprise for transformative technology and non-dilutive funding solutions. Web3 — Enterprise & NGO Bridge."
        stats={[
          { value: "Since", label: "2015" },
          { value: "For", label: "Enterprise & NGO Bridge" },
          { value: "Comp", label: "% of value created" },
        ]}
      />

      {/* What is Stratum */}
      <section className="section-warm py-20 sm:py-28">
        <div className="max-w-5xl mx-auto px-5 sm:px-8">
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

      {/* Services Grid */}
      <section className="section-light py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
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

      {/* Commitment — REAL from netlify */}
      <section className="section-dark py-20 sm:py-28">
        <div className="max-w-5xl mx-auto px-5 sm:px-8 text-center">
          <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[oklch(0.55_0.15_30)]" style={{ fontFamily: "var(--font-body)" }}>
            Our Commitment
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl font-bold text-white" style={{ fontFamily: "var(--font-display)" }}>
            Right Person in the Room from All Sides
          </h2>
          <p className="mt-6 text-lg text-white/60 leading-relaxed max-w-2xl mx-auto" style={{ fontFamily: "var(--font-body)" }}>
            Compensation tied to percentage of value created. We convene the right people and create real bridges between Web3 innovation and enterprise adoption.
          </p>
          <div className="mt-12 grid sm:grid-cols-3 gap-6">
            {[
              { label: "Compensation", value: "% of value created" },
              { label: "Commitment", value: "Right person in the room from all sides" },
              { label: "Key Value", value: "Non-dilutive capital & zero-cost transformative tech" },
            ].map((item) => (
              <div key={item.label} className="bg-white/5 rounded-xl p-6 border border-white/10">
                <div className="text-xs text-white/40 uppercase tracking-wider mb-2" style={{ fontFamily: "var(--font-body)" }}>{item.label}</div>
                <div className="text-sm text-white/80 leading-relaxed" style={{ fontFamily: "var(--font-body)" }}>{item.value}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related Blog Posts — REAL from ramprate.com */}
      <section className="section-warm py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
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
          <Link href="/connect" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-md text-sm font-semibold bg-white text-[oklch(0.35_0.1_30)] hover:bg-white/90 transition-all shadow-lg" style={{ fontFamily: "var(--font-body)" }}>
            Start a Conversation <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </PageLayout>
  );
}
