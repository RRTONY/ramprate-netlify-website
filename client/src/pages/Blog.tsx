/*
 * /blog — Blog listing page
 * ALL CONTENT FROM: ramprate.com blog
 * Includes all posts from paste: UNI token, TonyG here, Redivider, DevxDAO/XPRIZE,
 * B Corp certification, 5 blockchain articles, plus existing posts.
 * ZERO fabrication.
 */
import { motion } from "framer-motion";
import { Link } from "wouter";
import PageLayout from "@/components/PageLayout";
import PageHero from "@/components/PageHero";
import { ArrowRight, Calendar, Tag } from "lucide-react";

const blogPosts = [
  /* ── EXISTING + NEW from paste ── */
  {
    title: "Patience in the AI Infrastructure Gold Rush: The Second Mouse Gets the Cheese",
    date: "October 31, 2025",
    url: "https://ramprate.com/patience-in-the-ai-infrastructure-gold-rush-the-second-mouse-gets-the-cheese/",
    excerpt: "The AI infrastructure market is experiencing a gold rush, with billions being poured into data centers, GPU clusters, and networking equipment. But as history has shown us repeatedly, the first movers don't always win.",
    tags: ["AI", "Infrastructure", "Strategy"],
    featured: true,
  },
  {
    title: "Republic's Mirror Tokens — SpaceX and Beyond",
    date: "July 22, 2025",
    url: "https://ramprate.com/republics-mirror-tokens-spacex-and-beyond/",
    excerpt: "Republic has pioneered a novel approach to democratizing access to private market investments through mirror tokens, starting with SpaceX. A fundamental shift in how retail investors can participate in previously inaccessible opportunities.",
    tags: ["Web3", "Tokens", "Investment"],
  },
  {
    title: "UNI Token Price Surge: A Reflection of the Market's Hunger for Effective Governance?",
    date: "March 5, 2024",
    url: "https://ramprate.com/uni-token-price-surge-a-reflection-of-the-markets-hunger-for-effective-governance/",
    excerpt: "The governance vote is currently live on snapshot. The outcome of this proposal and its subsequent effect will certainly be viewed by other ecosystems looking to change their governance and realign their incentives.",
    tags: ["Web3", "Governance", "DeFi"],
  },
  {
    title: "TonyG Here — Data Center World Return",
    date: "October 2023",
    url: "https://ramprate.com/tonyg-here-data-center-world/",
    excerpt: "Tony Greenberg returns to Data Center World to share insights on the evolving landscape of enterprise infrastructure, sourcing intelligence, and the intersection of technology and impact.",
    tags: ["Infrastructure", "Events", "Sourcing"],
  },
  {
    title: "The Need for Burning Man to Convert into a DAO",
    date: "August 17, 2023",
    url: "https://ramprate.com/convert-burning-man-dao-menagerie/",
    excerpt: "The recent challenges surrounding Burning Man ticket distribution highlight broader issues within the event's organizational and logistical structures. Converting Burning Man into a DAO could be the solution.",
    tags: ["Web3", "DAO", "Culture"],
  },
  {
    title: "Energy as Impact",
    date: "August 15, 2023",
    url: "https://ramprate.com/energy-as-impact/",
    excerpt: "Redivider is transforming the edge data center industry by leveraging sustainable technology to benefit the planet and humanity. This is what happens when infrastructure meets purpose.",
    tags: ["Impact", "Energy", "ESG"],
  },
  {
    title: "Edge Data Center Provider Redivider Expands Advisory Board",
    date: "July 5, 2023",
    url: "https://ramprate.com/edge-data-center-provider-redivider-expands-advisory/",
    excerpt: "Redivider is transforming edge data center industry by leveraging sustainable technology, appointing an advisory board including Mark Tercek (former CEO of The Nature Conservancy, ex-Goldman Sachs partner).",
    tags: ["Infrastructure", "Impact", "Advisory"],
  },
  {
    title: "RampRate Works with DevxDAO and XPRIZE to Announce a Grant in Excess of €4 Million",
    date: "January 23, 2023",
    url: "https://ramprate.com/ramprate-works-with-devxdao-and-xprize/",
    excerpt: "A new collaboration in advanced communities. DevxDAO and XPRIZE announce a grant in excess of €4 million, facilitated by RampRate's network and advisory capabilities.",
    tags: ["Web3", "Grants", "XPRIZE"],
  },
  {
    title: "RampRate Achieves B Corp Certification",
    date: "December 2022",
    url: "https://ramprate.com/ramprate-b-corp-certification/",
    excerpt: "RampRate is now a Certified B Corporation — meeting the highest standards of verified social and environmental performance, public transparency, and legal accountability. We don't just advise on impact — we live it.",
    tags: ["Impact", "B Corp", "ESG"],
  },
  {
    title: "World Economic Forum: DAVOS 2022",
    date: "May 19, 2022",
    url: "https://ramprate.com/davos-2022-world-economic-forum-here-we-come/",
    excerpt: "Tony Greenberg and Wulf Kaal are hitting the road and heading to Davos for the World Economic Forum May 22-26, primarily to support DevXDao, Casper, and talk about Menagerie.",
    tags: ["Web3", "Davos", "WEF"],
  },
  /* ── 5 BLOCKCHAIN ARTICLE SERIES — from paste ── */
  {
    title: "From Supply Chain to the Blockchain",
    date: "2022",
    url: "https://ramprate.com/from-supply-chain-to-the-blockchain/",
    excerpt: "How blockchain technology is transforming supply chain management — from provenance tracking to smart contracts that automate compliance and payment across global networks.",
    tags: ["Blockchain", "Supply Chain"],
  },
  {
    title: "Enterprise Blockchain: Can Big Business Co-opt an Existential Threat?",
    date: "2022",
    url: "https://ramprate.com/enterprise-blockchain-can-big-business-co-opt-an-existential-threat/",
    excerpt: "Blockchain was born as a challenge to centralized institutions. Now those same institutions are adopting it. Can enterprise blockchain co-exist with decentralization's original ethos?",
    tags: ["Blockchain", "Enterprise"],
  },
  {
    title: "Historical Perspective on Blockchain",
    date: "2022",
    url: "https://ramprate.com/historical-perspective-on-blockchain/",
    excerpt: "A deep dive into the historical context of blockchain technology — from cryptographic predecessors to Bitcoin's genesis block to the current enterprise adoption wave.",
    tags: ["Blockchain", "History"],
  },
  {
    title: "What Solutions Are Best Built with Blockchain — Or NOT",
    date: "2022",
    url: "https://ramprate.com/what-solutions-are-best-built-with-blockchain-or-not/",
    excerpt: "Not every problem needs a blockchain solution. A rigorous framework for evaluating when distributed ledger technology adds genuine value — and when it's just hype.",
    tags: ["Blockchain", "Strategy"],
  },
  {
    title: "The Ball and Blockchain: Obstacles to a World-Changing Trajectory",
    date: "2022",
    url: "https://ramprate.com/the-ball-and-blockchain-obstacles-to-a-world-changing-trajectory/",
    excerpt: "Blockchain has world-changing potential, but significant obstacles remain — from scalability and energy consumption to regulatory uncertainty and user experience challenges.",
    tags: ["Blockchain", "Analysis"],
  },
];

const allTags = Array.from(new Set(blogPosts.flatMap(p => p.tags)));

export default function Blog() {
  const featured = blogPosts.find(p => p.featured);
  const rest = blogPosts.filter(p => !p.featured);

  return (
    <PageLayout>
      <PageHero
        sectionLabel="Blog"
        headline={
          <>
            Insights from the{" "}
            <span className="text-[oklch(0.55_0.15_30)]">Collective</span>
          </>
        }
        subCopy="Perspectives on AI infrastructure, Web3 governance, impact investing, enterprise sourcing, and the future of technology-driven change."
      />

      {/* Featured Post */}
      {featured && (
        <section className="section-warm py-16 sm:py-20">
          <div className="max-w-5xl mx-auto px-5 sm:px-8">
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[oklch(0.55_0.15_30)]" style={{ fontFamily: "var(--font-body)" }}>
              Featured
            </span>
            <motion.a
              href={featured.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="block mt-4 bg-white rounded-xl p-8 sm:p-10 border border-black/5 shadow-sm hover:shadow-md transition-shadow group"
            >
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight group-hover:text-[oklch(0.55_0.15_30)] transition-colors" style={{ fontFamily: "var(--font-display)" }}>
                {featured.title}
              </h2>
              <div className="flex items-center gap-4 mt-4 text-xs text-[oklch(0.5_0.02_50)]" style={{ fontFamily: "var(--font-body)" }}>
                <span className="flex items-center gap-1"><Calendar size={12} /> {featured.date}</span>
                <div className="flex gap-2">
                  {featured.tags.map(t => (
                    <span key={t} className="px-2 py-0.5 rounded-full bg-[oklch(0.55_0.15_30)]/10 text-[oklch(0.55_0.15_30)] text-xs font-medium">{t}</span>
                  ))}
                </div>
              </div>
              <p className="mt-5 text-base text-[oklch(0.4_0.02_50)] leading-relaxed" style={{ fontFamily: "var(--font-body)" }}>
                {featured.excerpt}
              </p>
              <span className="inline-flex items-center gap-1 mt-5 text-sm font-semibold text-[oklch(0.55_0.15_30)]" style={{ fontFamily: "var(--font-body)" }}>
                Read on ramprate.com <ArrowRight size={14} />
              </span>
            </motion.a>
          </div>
        </section>
      )}

      {/* Tags */}
      <section className="section-light py-8">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <div className="flex flex-wrap gap-2 justify-center">
            {allTags.map(tag => (
              <span key={tag} className="px-3 py-1.5 rounded-full bg-[oklch(0.55_0.15_30)]/8 text-[oklch(0.55_0.15_30)] text-xs font-medium" style={{ fontFamily: "var(--font-body)" }}>
                <Tag size={10} className="inline mr-1" />{tag}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="section-light py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {rest.map((post, i) => (
              <motion.a
                key={post.title}
                href={post.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: (i % 3) * 0.08 }}
                className="bg-[oklch(0.97_0.01_80)] rounded-xl p-7 border border-black/5 hover:shadow-md transition-shadow group"
              >
                <div className="flex flex-wrap gap-2 mb-3">
                  {post.tags.map(t => (
                    <span key={t} className="px-2 py-0.5 rounded-full bg-[oklch(0.55_0.15_30)]/10 text-[oklch(0.55_0.15_30)] text-[10px] font-medium">{t}</span>
                  ))}
                </div>
                <h3 className="text-lg font-bold tracking-tight group-hover:text-[oklch(0.55_0.15_30)] transition-colors line-clamp-2" style={{ fontFamily: "var(--font-display)" }}>
                  {post.title}
                </h3>
                <div className="flex items-center gap-1 mt-2 text-xs text-[oklch(0.5_0.02_50)]" style={{ fontFamily: "var(--font-body)" }}>
                  <Calendar size={11} /> {post.date}
                </div>
                <p className="mt-3 text-sm text-[oklch(0.45_0.02_50)] leading-relaxed line-clamp-3" style={{ fontFamily: "var(--font-body)" }}>
                  {post.excerpt}
                </p>
                <span className="inline-flex items-center gap-1 mt-4 text-xs font-semibold text-[oklch(0.55_0.15_30)]" style={{ fontFamily: "var(--font-body)" }}>
                  Read article <ArrowRight size={12} />
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
            Want to Collaborate?
          </h2>
          <p className="text-white/80 text-base sm:text-lg leading-relaxed mb-8 max-w-2xl mx-auto" style={{ fontFamily: "var(--font-body)" }}>
            We're always looking for thought partners. If you have a story to tell or a perspective to share, let's talk.
          </p>
          <Link href="/connect" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-md text-sm font-semibold bg-white text-[oklch(0.35_0.1_30)] hover:bg-white/90 transition-all shadow-lg" style={{ fontFamily: "var(--font-body)" }}>
            Start a Conversation <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </PageLayout>
  );
}
