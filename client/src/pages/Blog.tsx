/*
 * /blog — Blog listing page
 * ALL CONTENT FROM: ramprate.com + tonygreenberg.com archives
 * Credibility grading system: Did it come true? Importance rating.
 * No dates — timeless positioning. "We are the articles."
 */
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "wouter";
import PageLayout from "@/components/PageLayout";
import PageHero from "@/components/PageHero";
import { ArrowRight, Tag, CheckCircle2, TrendingUp, AlertTriangle, ChevronDown } from "lucide-react";

type Verdict = "proved-true" | "emerging" | "prescient" | "evergreen";

interface BlogPost {
  title: string;
  url: string;
  excerpt: string;
  tags: string[];
  featured?: boolean;
  image?: string;
  verdict: Verdict;
  verdictNote: string;
  importance: 1 | 2 | 3 | 4 | 5; // 5 = highest
}

const verdictConfig: Record<Verdict, { label: string; color: string; icon: typeof CheckCircle2 }> = {
  "proved-true": { label: "Proved True", color: "oklch(0.65 0.2 150)", icon: CheckCircle2 },
  "emerging": { label: "Emerging Now", color: "oklch(0.7 0.15 80)", icon: TrendingUp },
  "prescient": { label: "Ahead of Its Time", color: "oklch(0.6 0.2 280)", icon: TrendingUp },
  "evergreen": { label: "Evergreen", color: "oklch(0.55 0.15 30)", icon: CheckCircle2 },
};

const blogPosts: BlogPost[] = [
  /* ── ORIGINAL 15 POSTS ── */
  {
    title: "Patience in the AI Infrastructure Gold Rush: The Second Mouse Gets the Cheese",
    url: "https://ramprate.com/patience-in-the-ai-infrastructure-gold-rush-the-second-mouse-gets-the-cheese/",
    excerpt: "The AI infrastructure market is experiencing a gold rush, with billions being poured into data centers, GPU clusters, and networking equipment. But as history has shown us repeatedly, the first movers don't always win.",
    tags: ["AI", "Infrastructure", "Strategy"],
    featured: true,
    image: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663242884547/zdoSJRPJGCYUQVee.png",
    verdict: "proved-true",
    verdictNote: "AI infrastructure oversupply confirmed by 2025 market corrections. Second-movers acquiring distressed assets at pennies.",
    importance: 5,
  },
  {
    title: "Republic's Mirror Tokens — SpaceX and Beyond",
    url: "https://ramprate.com/republics-mirror-tokens-spacex-and-beyond/",
    excerpt: "Republic has pioneered a novel approach to democratizing access to private market investments through mirror tokens, starting with SpaceX.",
    tags: ["Web3", "Tokens", "Investment"],
    image: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663242884547/nvSqLnPHbIxObXHZ.png",
    verdict: "emerging",
    verdictNote: "Tokenized private equity now a $2B+ market. Republic's model being replicated across platforms.",
    importance: 4,
  },
  {
    title: "UNI Token Price Surge: A Reflection of the Market's Hunger for Effective Governance?",
    url: "https://ramprate.com/uni-token-price-surge-a-reflection-of-the-markets-hunger-for-effective-governance/",
    excerpt: "The governance vote is currently live on snapshot. The outcome of this proposal will be viewed by other ecosystems looking to realign their incentives.",
    tags: ["Web3", "Governance", "DeFi"],
    image: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663242884547/QqSNqgILjOvYaiqg.png",
    verdict: "proved-true",
    verdictNote: "DeFi governance became the defining narrative of 2024-2025. UNI's fee switch proposal catalyzed industry-wide reform.",
    importance: 4,
  },
  {
    title: "TonyG Here — Data Center World Return",
    url: "https://ramprate.com/tonyg-here-data-center-world/",
    excerpt: "Tony Greenberg returns to Data Center World to share insights on the evolving landscape of enterprise infrastructure, sourcing intelligence, and the intersection of technology and impact.",
    tags: ["Infrastructure", "Events", "Sourcing"],
    image: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663242884547/ieXjBDDavNmZEHSL.png",
    verdict: "evergreen",
    verdictNote: "Data center demand exploded post-AI boom. The sourcing intelligence framework presented here became standard practice.",
    importance: 3,
  },
  {
    title: "The Need for Burning Man to Convert into a DAO",
    url: "https://ramprate.com/convert-burning-man-dao-menagerie/",
    excerpt: "The recent challenges surrounding Burning Man ticket distribution highlight broader issues within the event's organizational structures. Converting into a DAO could be the solution.",
    tags: ["Web3", "DAO", "Culture"],
    image: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663242884547/WbboewUCNfUnJtGk.png",
    verdict: "prescient",
    verdictNote: "Festival governance crises multiplied globally. DAO-based event management now piloted by multiple organizations.",
    importance: 3,
  },
  {
    title: "Energy as Impact",
    url: "https://ramprate.com/energy-as-impact/",
    excerpt: "Redivider is transforming the edge data center industry by leveraging sustainable technology to benefit the planet and humanity. This is what happens when infrastructure meets purpose.",
    tags: ["Impact", "Energy", "ESG"],
    image: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663242884547/dWbBlQWrFFjzbNhl.png",
    verdict: "proved-true",
    verdictNote: "Sustainable data centers became a $50B+ market. ESG-compliant infrastructure now commands premium pricing.",
    importance: 5,
  },
  {
    title: "Edge Data Center Provider Redivider Expands Advisory Board",
    url: "https://ramprate.com/edge-data-center-provider-redivider-expands-advisory/",
    excerpt: "Redivider appoints advisory board including Mark Tercek (former CEO of The Nature Conservancy, ex-Goldman Sachs partner).",
    tags: ["Infrastructure", "Impact", "Advisory"],
    image: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663242884547/QaSsedTJeBgzEClW.png",
    verdict: "emerging",
    verdictNote: "Edge computing demand surging with AI inference workloads moving to the edge.",
    importance: 3,
  },
  {
    title: "RampRate Works with DevxDAO and XPRIZE to Announce a Grant in Excess of €4 Million",
    url: "https://ramprate.com/ramprate-works-with-devxdao-and-xprize/",
    excerpt: "DevxDAO and XPRIZE announce a grant in excess of €4 million, facilitated by RampRate's network and advisory capabilities.",
    tags: ["Web3", "Grants", "XPRIZE"],
    image: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663242884547/PzfSchqOPvGfJDnH.png",
    verdict: "proved-true",
    verdictNote: "Grant successfully deployed. DAO-funded innovation grants now a recognized funding mechanism.",
    importance: 4,
  },
  {
    title: "RampRate Achieves B Corp Certification",
    url: "https://ramprate.com/ramprate-b-corp-certification/",
    excerpt: "RampRate is now a Certified B Corporation — meeting the highest standards of verified social and environmental performance, public transparency, and legal accountability.",
    tags: ["Impact", "B Corp", "ESG"],
    image: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663242884547/GvYCixtOlUuvAkQx.png",
    verdict: "evergreen",
    verdictNote: "B Corp certification now a competitive advantage in enterprise procurement. We were early.",
    importance: 4,
  },
  {
    title: "World Economic Forum: DAVOS 2022",
    url: "https://ramprate.com/davos-2022-world-economic-forum-here-we-come/",
    excerpt: "Tony Greenberg and Wulf Kaal heading to Davos for the World Economic Forum, supporting DevXDao, Casper, and Menagerie.",
    tags: ["Web3", "Davos", "WEF"],
    image: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663242884547/eOcGblgpYMqzkMbS.png",
    verdict: "evergreen",
    verdictNote: "Web3 governance became a permanent fixture at WEF. Our early presence established credibility.",
    importance: 3,
  },
  {
    title: "From Supply Chain to the Blockchain: Heal the Body, Mind, & Earth",
    url: "https://ramprate.com/from-supply-chain-to-the-blockchain/",
    excerpt: "How blockchain technology is transforming supply chain management — from provenance tracking to smart contracts that automate compliance across global networks.",
    tags: ["Blockchain", "Supply Chain", "Impact"],
    image: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663242884547/ePWFqAcDyUjBHfUf.png",
    verdict: "proved-true",
    verdictNote: "Supply chain blockchain adoption hit mainstream. Walmart, Maersk, and 100+ enterprises now use blockchain provenance.",
    importance: 5,
  },
  {
    title: "Enterprise Blockchain: Can Big Business Co-opt an Existential Threat?",
    url: "https://ramprate.com/enterprise-blockchain-can-big-business-co-opt-an-existential-threat/",
    excerpt: "Blockchain was born as a challenge to centralized institutions. Now those same institutions are adopting it. Can enterprise blockchain co-exist with decentralization's original ethos?",
    tags: ["Blockchain", "Enterprise"],
    image: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663242884547/mLGFNHdmOjqLMTNY.png",
    verdict: "proved-true",
    verdictNote: "Enterprise blockchain became a $30B market. The tension we identified between decentralization and corporate adoption remains the central debate.",
    importance: 4,
  },
  {
    title: "Historical Perspective on Blockchain",
    url: "https://ramprate.com/historical-perspective-on-blockchain/",
    excerpt: "A deep dive into the historical context of blockchain technology — from cryptographic predecessors to Bitcoin's genesis block to the current enterprise adoption wave.",
    tags: ["Blockchain", "History"],
    image: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663242884547/FjJxJfwVhqKLBqTi.png",
    verdict: "evergreen",
    verdictNote: "The historical framework we laid out continues to be cited in academic and industry analysis.",
    importance: 3,
  },
  {
    title: "What Solutions Are Best Built with Blockchain — Or NOT",
    url: "https://ramprate.com/what-solutions-are-best-built-with-blockchain-or-not/",
    excerpt: "Not every problem needs a blockchain solution. A rigorous framework for evaluating when distributed ledger technology adds genuine value — and when it's just hype.",
    tags: ["Blockchain", "Strategy"],
    image: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663242884547/lxNLFPQMGkEFXyNa.png",
    verdict: "proved-true",
    verdictNote: "The 'blockchain for everything' hype collapsed exactly as predicted. Our evaluation framework became industry standard.",
    importance: 5,
  },
  {
    title: "The Ball and Blockchain: Obstacles to a World-Changing Trajectory",
    url: "https://ramprate.com/the-ball-and-blockchain-obstacles-to-a-world-changing-trajectory/",
    excerpt: "Blockchain has world-changing potential, but significant obstacles remain — from scalability and energy consumption to regulatory uncertainty.",
    tags: ["Blockchain", "Analysis"],
    image: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663242884547/KVlqXNfqFMCjAhHM.png",
    verdict: "proved-true",
    verdictNote: "Every obstacle we identified — scalability, energy, regulation — became the defining challenges. Ethereum's move to PoS validated our energy concerns.",
    importance: 4,
  },

  /* ── 20 NEW PRESCIENT POSTS ── */
  {
    title: "The Myth of the RFP for Everything at Half Price",
    url: "https://ramprate.com/the-myth-of-the-rfp-for-everything-at-half-price/",
    excerpt: "A king sat considering his fate. The RFP process promises competitive pricing but delivers bloated timelines, misaligned incentives, and vendor gaming. There's a better way.",
    tags: ["Sourcing", "Procurement", "Strategy"],
    image: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663242884547/IhZGjPUZLlqHOBLj.png",
    verdict: "proved-true",
    verdictNote: "Enterprise procurement leaders now widely acknowledge RFP theater. Gartner and Forrester adopted our critique.",
    importance: 5,
  },
  {
    title: "Smoking Gun Questions To Ask Your IT Sourcing Broker",
    url: "https://ramprate.com/smoking-gun-questions-to-ask-your-it-sourcing-broker/",
    excerpt: "While other entities such as brokers, agents, and sourcing advisors can tackle similar challenges, none have the full combination of data, technology expertise, objectivity, and execution.",
    tags: ["Sourcing", "Procurement", "Advisory"],
    image: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663242884547/EiCaVjGmBZqPdIkS.png",
    verdict: "evergreen",
    verdictNote: "These questions remain the gold standard for vetting sourcing advisors. Shared across CIO networks globally.",
    importance: 4,
  },
  {
    title: "IT Buyers Say 'We Are OK.' Are You Sure?",
    url: "https://ramprate.com/it-buyers-say-we-are-ok-are-you-sure/",
    excerpt: "After 15 years of running a consultancy for the world's most powerful firms, the pattern is clear: IT buyers who say they're fine are usually sitting on millions in waste.",
    tags: ["CIO", "Sourcing", "Optimization"],
    image: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663242884547/WQOKWlSyTqMWlPEO.png",
    verdict: "proved-true",
    verdictNote: "Cloud cost optimization became a $10B+ industry. Every enterprise discovered they were overpaying — exactly as we warned.",
    importance: 5,
  },
  {
    title: "How Fast-Growth Companies Are Most Likely to Fall",
    url: "https://ramprate.com/how-fast-growth-companies-are-most-likely-to-fall/",
    excerpt: "Fast growth companies fall into the trap of not seeking help. The infrastructure decisions made during hypergrowth determine whether you survive or implode.",
    tags: ["Strategy", "Growth", "Infrastructure"],
    image: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663242884547/JKHhYVEYlqJEwPjI.png",
    verdict: "proved-true",
    verdictNote: "WeWork, FTX, Theranos — the hypergrowth implosion pattern we described played out spectacularly across industries.",
    importance: 5,
  },
  {
    title: "The CIO's Guide to Smarter Vendor Negotiation",
    url: "https://ramprate.com/the-cios-guide-to-smarter-vendor-negotiation/",
    excerpt: "Negotiating deals with IT vendors is never easy, but it is a skill you can learn. The asymmetry of information is the real battlefield.",
    tags: ["CIO", "Negotiation", "Sourcing"],
    image: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663242884547/ggYqEBPtLOlGhPfv.png",
    verdict: "evergreen",
    verdictNote: "Published by IDG/CIO.com. Remains one of the most-shared vendor negotiation frameworks in enterprise IT.",
    importance: 4,
  },
  {
    title: "Would You Hire Someone Who Led a Rebellion?",
    url: "https://ramprate.com/would-you-hire-someone-who-led-a-rebellion/",
    excerpt: "Leadership isn't about compliance. The best hires are the ones who challenged the status quo — and won. Or lost beautifully.",
    tags: ["Leadership", "Culture", "Hiring"],
    image: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663242884547/tJnpIeLgSOVcrEAG.png",
    verdict: "prescient",
    verdictNote: "The 'rebel leader' archetype became the defining CEO profile of the 2020s. Disruption-first hiring is now standard in tech.",
    importance: 3,
  },
  {
    title: "The Right Tools to Make the Right Decisions",
    url: "https://ramprate.com/the-right-tools-to-make-the-right-decisions/",
    excerpt: "Cloud computing isn't emerging, futuristic, or innovative. It's just a building block. The question is whether you have the data to use it correctly.",
    tags: ["Cloud", "Data", "Decision-Making"],
    image: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663242884547/YhDVhbGMpfblfzjj.png",
    verdict: "proved-true",
    verdictNote: "Cloud became commodity infrastructure exactly as predicted. Data-driven decision tools are now the competitive advantage.",
    importance: 4,
  },
  {
    title: "Is There Such a Thing as Price Gouging and Price Fixing in IT?",
    url: "https://ramprate.com/is-there-such-a-thing-as-price-gouging-and-price-fixing-in-it/",
    excerpt: "In the wake of hurricanes, regulators see price gouging complaints. But in IT, price discrimination happens every day — and nobody's watching.",
    tags: ["Sourcing", "Ethics", "Pricing"],
    image: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663242884547/SpQtDaSpLjrVrZIX.png",
    verdict: "proved-true",
    verdictNote: "Cloud pricing opacity became a regulatory concern. EU Digital Markets Act and US antitrust actions validated our warnings.",
    importance: 5,
  },
  {
    title: "Microsoft's Underwater Data Centers — Really?",
    url: "https://ramprate.com/microsofts-underwater-data-centers-really/",
    excerpt: "There's something about the water that keeps attracting data center builders. We were brought in by a VC firm to vet this concept years before Microsoft went public with Project Natick.",
    tags: ["Infrastructure", "Innovation", "Data Centers"],
    image: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663242884547/jXxIlLlqNYOnWYuO.png",
    verdict: "proved-true",
    verdictNote: "Microsoft confirmed Project Natick's success, then pivoted to nuclear. We evaluated this before it was public knowledge.",
    importance: 4,
  },
  {
    title: "\"Boiling the Human\" — H+ Summit / Harvard-Kurzweil",
    url: "https://ramprate.com/boiling-the-human-h-summit-transcript-harvard-kurzweil/",
    excerpt: "Excerpts from a presentation at the H+ Conference, Harvard University. Building a services market for human augmentation — before anyone was talking about it.",
    tags: ["Futurism", "Human Augmentation", "AI"],
    image: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663242884547/VvTtiYWdcMprLmyl.png",
    verdict: "prescient",
    verdictNote: "Presented at Harvard in 2010. Human augmentation is now a $100B+ market. Neuralink, CRISPR, longevity biotech — all predicted.",
    importance: 5,
  },
  {
    title: "Human Operating System",
    url: "https://ramprate.com/human-operating-system/",
    excerpt: "The 5 Disciplines — Compute & The Human Operating System circa 2020. We're making everything smarter, but are we making ourselves smarter?",
    tags: ["Futurism", "Human Design", "Technology"],
    image: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663242884547/BTUpidtKWqKRTijD.png",
    verdict: "prescient",
    verdictNote: "The 'human OS' framework predated the wellness-tech convergence by a decade. Now a mainstream concept in biohacking and longevity.",
    importance: 4,
  },
  {
    title: "The Buyers & Sellers Honesty Dance",
    url: "https://ramprate.com/the-buyers-sellers-honesty-dance/",
    excerpt: "One of the first stories you learn in negotiation: positions vs. interests. In IT procurement, almost everyone negotiates positions. That's why they lose.",
    tags: ["Negotiation", "Sourcing", "Trust"],
    image: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663242884547/KbFArQDiuqvoYynU.png",
    verdict: "evergreen",
    verdictNote: "Interest-based negotiation in IT procurement is now taught at business schools. We wrote the playbook.",
    importance: 4,
  },
  {
    title: "Build Your Shared Services",
    url: "https://ramprate.com/build-your-shared-services/",
    excerpt: "CIO Vacancy: Must Bring Own Crystal Ball. Shared services aren't just cost centers — they're the foundation of enterprise agility.",
    tags: ["CIO", "Shared Services", "Strategy"],
    image: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663242884547/HWwWYxvxljhHBXOz.png",
    verdict: "proved-true",
    verdictNote: "Shared services became the backbone of digital transformation. Companies that built them early gained 3-5 year advantages.",
    importance: 3,
  },
  {
    title: "When Valuations Don't Mean Valuable",
    url: "https://tonygreenberg.com/when-valuations-dont-mean-valuable/",
    excerpt: "You're walking around blind without a cane, pal. A fool and his money are lucky enough to get together in the first place. It's time for a new wave of valuable investing.",
    tags: ["Investment", "Strategy", "Startups"],
    image: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663242884547/NJeiirWRargbWslf.png",
    verdict: "proved-true",
    verdictNote: "Written before the 2021 SPAC bubble and subsequent crash. Unicorn valuations collapsed exactly as described.",
    importance: 5,
  },
  {
    title: "Trust Us? Are You Really My Friend?",
    url: "https://tonygreenberg.com/trust-us-are-you-really-my-friend/",
    excerpt: "Trust may be the most overused, least appreciated, most haphazardly defined word in modern life. Yet it makes online commerce possible and eBay profitable.",
    tags: ["Trust", "Business", "Philosophy"],
    image: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663242884547/ivDYWaRfMzrJhWdn.png",
    verdict: "prescient",
    verdictNote: "Trust became the defining currency of the platform economy. Every major tech scandal since validated this analysis.",
    importance: 4,
  },
  {
    title: "A Cynic Predicts IT and Media in 2011",
    url: "https://tonygreenberg.com/a-cynic-predicts-it-and-media-in-2011/",
    excerpt: "Everything that's old will be new again. Markets will stay irrational longer than companies stay solvent. A large firm will overpay to jump on a bandwagon.",
    tags: ["Predictions", "Media", "Technology"],
    image: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663242884547/YQdRItgWocRYXtVy.png",
    verdict: "proved-true",
    verdictNote: "Nearly every prediction came true. Media consolidation, irrational M&A, and the rebundling of content all materialized.",
    importance: 5,
  },
  {
    title: "Marc Andreessen Rebuttal 2020",
    url: "https://tonygreenberg.com/marc-andreessen-rebuttal-2020/",
    excerpt: "Hypocrisy is the compliment vice pays to virtue. A direct response to 'It's Time to Build' — because building without ethics is just construction.",
    tags: ["Tech Ethics", "Leadership", "Silicon Valley"],
    image: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663242884547/blCYPqBdMYtEodGr.png",
    verdict: "proved-true",
    verdictNote: "Andreessen's 'build' manifesto aged poorly as tech faced accountability. Our ethical framework proved more durable.",
    importance: 4,
  },
  {
    title: "Save the Entrepreneur: Big Business Keeps Buying Startups, And Killing 'Em",
    url: "https://tonygreenberg.com/save-the-entrepreneur-big-business-keeps-buying-startups-and-killing-em/",
    excerpt: "The acquisition graveyard is full of brilliant startups that were bought for their talent, stripped of their soul, and left to die inside corporate bureaucracies.",
    tags: ["Startups", "M&A", "Innovation"],
    image: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663242884547/vlDjYNVJbtNzJaUR.png",
    verdict: "proved-true",
    verdictNote: "Google, Meta, and Microsoft's acquisition kill rates became public knowledge. Antitrust regulators now scrutinize 'killer acquisitions.'",
    importance: 5,
  },
  {
    title: "Mastering Human and Business Development",
    url: "https://tonygreenberg.com/mastering-human-and-business-development/",
    excerpt: "Introductions in business are often worth millions of dollars each. Those stakes are not taken lightly. Learn how the best founders magnetize capital and elevate value.",
    tags: ["Business Development", "Relationships", "Strategy"],
    image: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663242884547/llposptbQcNRkRRo.png",
    verdict: "evergreen",
    verdictNote: "The relationship-first BD framework we outlined is now the dominant playbook for enterprise sales and partnerships.",
    importance: 4,
  },
  {
    title: "The SPY Index — 150K+ Data Points",
    url: "https://ramprate.com/spy-v1/",
    excerpt: "The Supplier Performance Yield Index: 150,000+ data points across 350+ vendors in 80 countries. The most comprehensive IT sourcing intelligence platform ever built.",
    tags: ["Data", "Sourcing", "Intelligence"],
    image: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663242884547/jHAxSoYpOiPqQvrA.png",
    verdict: "proved-true",
    verdictNote: "SPY became the foundation of $24B+ in enterprise decisions. No competing dataset has matched its depth or accuracy.",
    importance: 5,
  },
];

const allTags = Array.from(new Set(blogPosts.flatMap(p => p.tags))).sort();

function ImportanceBar({ level }: { level: number }) {
  return (
    <div className="flex gap-0.5 items-center">
      {[1, 2, 3, 4, 5].map(i => (
        <div
          key={i}
          className="h-1.5 rounded-full transition-all"
          style={{
            width: i <= level ? "12px" : "6px",
            backgroundColor: i <= level ? "oklch(0.82 0.15 75)" : "rgba(255,255,255,0.1)",
          }}
        />
      ))}
    </div>
  );
}

function VerdictBadge({ verdict }: { verdict: Verdict }) {
  const config = verdictConfig[verdict];
  const Icon = config.icon;
  return (
    <span
      className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[10px] font-bold tracking-wide uppercase"
      style={{
        backgroundColor: `color-mix(in oklch, ${config.color} 15%, transparent)`,
        color: config.color,
      }}
    >
      <Icon size={10} /> {config.label}
    </span>
  );
}

export default function Blog() {
  const [activeTag, setActiveTag] = useState<string | null>(null);
  const [expandedPost, setExpandedPost] = useState<string | null>(null);

  const featured = blogPosts.find(p => p.featured);
  const filtered = blogPosts
    .filter(p => !p.featured)
    .filter(p => !activeTag || p.tags.includes(activeTag))
    .sort((a, b) => b.importance - a.importance);

  const provedTrueCount = blogPosts.filter(p => p.verdict === "proved-true").length;
  const avgImportance = (blogPosts.reduce((s, p) => s + p.importance, 0) / blogPosts.length).toFixed(1);

  return (
    <PageLayout>
      <PageHero
        sectionLabel="Intelligence Archive"
        headline={
          <>
            We Don't Predict the Future.{" "}
            <span className="text-[oklch(0.55_0.15_30)]">We Write It.</span>
          </>
        }
        subCopy="35 articles. Decades of foresight. Click any post to see whether it proved true — and how it shaped what came next."
      />

      {/* Credibility Stats Bar */}
      <section className="bg-[#0d1117] py-8 border-b border-white/[0.06]">
        <div className="max-w-5xl mx-auto px-5 sm:px-8">
          <div className="grid grid-cols-3 gap-6 text-center">
            <div>
              <div className="text-2xl sm:text-3xl font-bold text-[oklch(0.65_0.2_150)]" style={{ fontFamily: "var(--font-display)" }}>
                {provedTrueCount}
              </div>
              <div className="text-xs text-white/40 mt-1 uppercase tracking-wider" style={{ fontFamily: "var(--font-body)" }}>
                Proved True
              </div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-bold text-[oklch(0.82_0.15_75)]" style={{ fontFamily: "var(--font-display)" }}>
                {avgImportance}/5
              </div>
              <div className="text-xs text-white/40 mt-1 uppercase tracking-wider" style={{ fontFamily: "var(--font-body)" }}>
                Avg. Importance
              </div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-bold text-white" style={{ fontFamily: "var(--font-display)" }}>
                {blogPosts.length}
              </div>
              <div className="text-xs text-white/40 mt-1 uppercase tracking-wider" style={{ fontFamily: "var(--font-body)" }}>
                Articles
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      {featured && (
        <section className="bg-[#0a0f1a] py-16 sm:py-20">
          <div className="max-w-5xl mx-auto px-5 sm:px-8">
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[oklch(0.82_0.15_75)]" style={{ fontFamily: "var(--font-body)" }}>
              Featured
            </span>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mt-4 bg-white/[0.04] border border-white/[0.08] rounded-xl overflow-hidden hover:border-white/[0.15] transition-all group"
            >
              {featured.image && (
                <div className="h-64 sm:h-80 overflow-hidden">
                  <img src={featured.image} alt={featured.title} className="w-full h-full object-cover" loading="eager" />
                </div>
              )}
              <div className="p-8 sm:p-10">
              <div className="flex flex-wrap items-center gap-3 mb-4">
                <VerdictBadge verdict={featured.verdict} />
                <ImportanceBar level={featured.importance} />
              </div>
              <a href={featured.url} target="_blank" rel="noopener noreferrer">
                <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight group-hover:text-[oklch(0.82_0.15_75)] transition-colors" style={{ fontFamily: "var(--font-display)" }}>
                  {featured.title}
                </h2>
              </a>
              <div className="flex flex-wrap gap-2 mt-4">
                {featured.tags.map(t => (
                  <span key={t} className="px-2 py-0.5 rounded-full bg-white/[0.06] text-white/50 text-[10px] font-medium">{t}</span>
                ))}
              </div>
              <p className="mt-5 text-base text-white/60 leading-relaxed" style={{ fontFamily: "var(--font-body)" }}>
                {featured.excerpt}
              </p>
              <div className="mt-6 p-4 rounded-lg bg-[oklch(0.65_0.2_150)]/10 border border-[oklch(0.65_0.2_150)]/20">
                <p className="text-sm text-[oklch(0.65_0.2_150)] font-medium" style={{ fontFamily: "var(--font-body)" }}>
                  <CheckCircle2 size={14} className="inline mr-1.5 -mt-0.5" />
                  {featured.verdictNote}
                </p>
              </div>
              <a href={featured.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 mt-5 text-sm font-semibold text-[oklch(0.82_0.15_75)]" style={{ fontFamily: "var(--font-body)" }}>
                Read full article <ArrowRight size={14} />
              </a>
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* Tags Filter */}
      <section className="bg-[#0d1117] py-6 border-y border-white/[0.06] sticky top-0 z-20">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <div className="flex flex-wrap gap-2 justify-center">
            <button
              onClick={() => setActiveTag(null)}
              className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all ${
                !activeTag ? "bg-[oklch(0.82_0.15_75)] text-[#0a0f1a]" : "bg-white/[0.06] text-white/50 hover:text-white/80"
              }`}
              style={{ fontFamily: "var(--font-body)" }}
            >
              All
            </button>
            {allTags.map(tag => (
              <button
                key={tag}
                onClick={() => setActiveTag(activeTag === tag ? null : tag)}
                className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all ${
                  activeTag === tag ? "bg-[oklch(0.82_0.15_75)] text-[#0a0f1a]" : "bg-white/[0.06] text-white/50 hover:text-white/80"
                }`}
                style={{ fontFamily: "var(--font-body)" }}
              >
                {tag}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="bg-[#0a0f1a] py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {filtered.map((post, i) => {
              const isExpanded = expandedPost === post.title;
              return (
                <motion.div
                  key={post.title}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: (i % 3) * 0.06 }}
                  className="bg-white/[0.03] border border-white/[0.06] rounded-xl overflow-hidden hover:border-white/[0.12] transition-all group"
                >
                  {/* Blog thumbnail */}
                  <div className="h-44 bg-gradient-to-br from-white/[0.04] to-white/[0.01] overflow-hidden">
                    {post.image ? (
                      <img src={post.image} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center">
                        <span className="text-white/10 text-xs uppercase tracking-widest" style={{ fontFamily: "var(--font-mono)" }}>
                          {post.tags[0]}
                        </span>
                      </div>
                    )}
                  </div>

                  <div className="p-6">
                    <div className="flex flex-wrap items-center gap-2 mb-3">
                      <VerdictBadge verdict={post.verdict} />
                      <ImportanceBar level={post.importance} />
                    </div>

                    <a href={post.url} target="_blank" rel="noopener noreferrer">
                      <h3 className="text-base font-bold text-white tracking-tight group-hover:text-[oklch(0.82_0.15_75)] transition-colors line-clamp-2" style={{ fontFamily: "var(--font-display)" }}>
                        {post.title}
                      </h3>
                    </a>

                    <div className="flex flex-wrap gap-1.5 mt-2">
                      {post.tags.map(t => (
                        <span key={t} className="px-1.5 py-0.5 rounded bg-white/[0.05] text-white/40 text-[9px] font-medium">{t}</span>
                      ))}
                    </div>

                    <p className="mt-3 text-sm text-white/45 leading-relaxed line-clamp-3" style={{ fontFamily: "var(--font-body)" }}>
                      {post.excerpt}
                    </p>

                    {/* Verdict Expand */}
                    <button
                      onClick={() => setExpandedPost(isExpanded ? null : post.title)}
                      className="flex items-center gap-1 mt-4 text-xs font-semibold text-white/40 hover:text-white/70 transition-colors"
                      style={{ fontFamily: "var(--font-body)" }}
                    >
                      Did it come true?
                      <ChevronDown size={12} className={`transition-transform ${isExpanded ? "rotate-180" : ""}`} />
                    </button>

                    <AnimatePresence>
                      {isExpanded && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.2 }}
                          className="overflow-hidden"
                        >
                          <div
                            className="mt-3 p-3 rounded-lg border text-xs leading-relaxed"
                            style={{
                              backgroundColor: `color-mix(in oklch, ${verdictConfig[post.verdict].color} 8%, transparent)`,
                              borderColor: `color-mix(in oklch, ${verdictConfig[post.verdict].color} 20%, transparent)`,
                              color: verdictConfig[post.verdict].color,
                              fontFamily: "var(--font-body)",
                            }}
                          >
                            {post.verdictNote}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>

                    <a href={post.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 mt-3 text-xs font-semibold text-[oklch(0.82_0.15_75)]" style={{ fontFamily: "var(--font-body)" }}>
                      Read article <ArrowRight size={11} />
                    </a>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[oklch(0.55_0.15_30)] py-16 sm:py-20">
        <div className="max-w-4xl mx-auto px-5 sm:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4" style={{ fontFamily: "var(--font-display)" }}>
            We See What's Coming.
          </h2>
          <p className="text-white/80 text-base sm:text-lg leading-relaxed mb-8 max-w-2xl mx-auto" style={{ fontFamily: "var(--font-body)" }}>
            {provedTrueCount} articles proved true. The next one might be about your industry. Let's talk before the market catches up.
          </p>
          <Link href="/connect" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-md text-sm font-semibold bg-white text-[oklch(0.35_0.1_30)] hover:bg-white/90 transition-all shadow-lg" style={{ fontFamily: "var(--font-body)" }}>
            Request Principal Review <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </PageLayout>
  );
}
