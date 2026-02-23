/*
 * /blog — Blog listing page.
 * Grid of blog post cards linking to individual posts.
 * Content scraped from existing ramprate.com blog.
 */
import { motion } from "framer-motion";
import { Link } from "wouter";
import PageLayout from "@/components/PageLayout";
import PageHero from "@/components/PageHero";
import { ArrowRight, Clock, Tag } from "lucide-react";
import { toast } from "sonner";

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  readTime: string;
  featured?: boolean;
}

export const blogPosts: BlogPost[] = [
  {
    slug: "data-center-strategy-2025",
    title: "Data Center Strategy in 2025: What Enterprise Leaders Need to Know",
    excerpt: "The data center landscape is evolving faster than ever. AI workloads, sustainability mandates, and geopolitical shifts are reshaping how enterprises think about infrastructure. Here's what you need to know.",
    date: "2025-01-15",
    category: "Infrastructure",
    readTime: "8 min",
    featured: true,
  },
  {
    slug: "cloud-cost-optimization",
    title: "The Hidden Cost of Cloud: Why Your AWS Bill Is Lying to You",
    excerpt: "Most enterprises are overpaying for cloud by 30-40%. The problem isn't the technology — it's the procurement. Here's how to fix it.",
    date: "2024-11-20",
    category: "Cloud",
    readTime: "6 min",
  },
  {
    slug: "spy-index-q4-2024",
    title: "SPY Index Q4 2024: Infrastructure Pricing Trends",
    excerpt: "Our quarterly analysis of infrastructure pricing across CDN, cloud, colocation, and telecom. Key finding: colocation prices are rising for the first time in 5 years.",
    date: "2024-10-01",
    category: "SPY Index",
    readTime: "12 min",
  },
  {
    slug: "web3-enterprise-adoption",
    title: "Web3 Enterprise Adoption: Beyond the Hype Cycle",
    excerpt: "Blockchain is quietly transforming supply chains, digital identity, and financial infrastructure. Here's where the real enterprise value is being created.",
    date: "2024-09-15",
    category: "Web3",
    readTime: "10 min",
  },
  {
    slug: "b-corp-technology",
    title: "Why We Became a B Corp — And Why More Tech Companies Should",
    excerpt: "RampRate's journey to B Corp certification and what it means for how we do business. Spoiler: it made us better at our jobs.",
    date: "2024-08-01",
    category: "Impact",
    readTime: "7 min",
  },
  {
    slug: "vendor-negotiation-playbook",
    title: "The Vendor Negotiation Playbook: 10 Tactics That Actually Work",
    excerpt: "After 24 years and $24B+ in negotiations, here are the tactics that consistently deliver results. Number 7 will surprise your procurement team.",
    date: "2024-07-10",
    category: "Sourcing",
    readTime: "9 min",
  },
  {
    slug: "ai-infrastructure-guide",
    title: "Building AI Infrastructure: A Practical Guide for Enterprise",
    excerpt: "GPU clusters, inference endpoints, training pipelines — the AI infrastructure stack is complex and expensive. Here's how to build it right without breaking the bank.",
    date: "2024-06-20",
    category: "Infrastructure",
    readTime: "11 min",
  },
  {
    slug: "founder-growth-playbook",
    title: "The Founder's Growth Playbook: From $1M to $10M ARR",
    excerpt: "The playbook that's helped 200+ founders navigate the most dangerous growth stage. It's not about more leads — it's about the right connections.",
    date: "2024-05-15",
    category: "Growth",
    readTime: "8 min",
  },
  {
    slug: "telecom-pricing-trends",
    title: "Telecom Pricing in 2024: Winners, Losers, and Opportunities",
    excerpt: "SD-WAN is eating MPLS. Fiber is getting cheaper. 5G is overhyped. Our annual analysis of telecom pricing trends and what they mean for enterprise buyers.",
    date: "2024-04-01",
    category: "Telecom",
    readTime: "10 min",
  },
  {
    slug: "digital-transformation-mistakes",
    title: "The 5 Most Expensive Digital Transformation Mistakes",
    excerpt: "We've seen enterprises waste millions on digital transformation. Here are the five mistakes that cost the most — and how to avoid them.",
    date: "2024-03-10",
    category: "Strategy",
    readTime: "7 min",
  },
];

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default function Blog() {
  const featured = blogPosts.find((p) => p.featured);
  const rest = blogPosts.filter((p) => !p.featured);

  return (
    <PageLayout>
      <PageHero
        sectionLabel="Blog"
        headline={
          <>
            Insights & <span className="text-[#6B21A8]">Intelligence</span>
          </>
        }
        subCopy="Market intelligence, negotiation tactics, infrastructure trends, and lessons from 24 years of brokering enterprise decisions."
      />

      {/* Featured Post */}
      {featured && (
        <section className="section-warm py-16">
          <div className="max-w-7xl mx-auto px-5 sm:px-8">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white rounded-xl p-8 sm:p-10 border border-black/5 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span
                  className="px-3 py-1 rounded-full bg-[#6B21A8]/10 text-[#6B21A8] text-xs font-semibold"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  Featured
                </span>
                <span
                  className="text-xs text-[oklch(0.5_0.02_50)]"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  {formatDate(featured.date)}
                </span>
              </div>
              <h2
                className="text-2xl sm:text-3xl font-bold tracking-tight mb-4"
                style={{ fontFamily: "var(--font-display)" }}
              >
                {featured.title}
              </h2>
              <p
                className="text-base text-[oklch(0.4_0.02_50)] leading-relaxed mb-6 max-w-3xl"
                style={{ fontFamily: "var(--font-body)" }}
              >
                {featured.excerpt}
              </p>
              <div className="flex items-center gap-4">
                <Link
                  href={`/blog/${featured.slug}`}
                  className="inline-flex items-center gap-2 text-sm font-semibold text-[#6B21A8] hover:underline"
                  style={{ fontFamily: "var(--font-body)" }}
                  onClick={(e) => {
                    e.preventDefault();
                    toast("Blog post detail pages coming soon.");
                  }}
                >
                  Read More <ArrowRight size={14} />
                </Link>
                <span className="flex items-center gap-1.5 text-xs text-[oklch(0.5_0.02_50)]" style={{ fontFamily: "var(--font-body)" }}>
                  <Clock size={12} /> {featured.readTime}
                </span>
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* Post Grid */}
      <section className="section-light py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {rest.map((post, i) => (
              <motion.article
                key={post.slug}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: (i % 3) * 0.1 }}
                className="bg-[oklch(0.97_0.01_80)] rounded-xl p-7 border border-black/5 hover:shadow-md transition-shadow group"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="flex items-center gap-1.5 text-xs text-[#6B21A8] font-medium" style={{ fontFamily: "var(--font-body)" }}>
                    <Tag size={11} /> {post.category}
                  </span>
                  <span className="text-xs text-[oklch(0.55_0.02_50)]" style={{ fontFamily: "var(--font-body)" }}>
                    {formatDate(post.date)}
                  </span>
                </div>
                <h3
                  className="text-lg font-bold mb-3 group-hover:text-[#6B21A8] transition-colors leading-snug"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {post.title}
                </h3>
                <p
                  className="text-sm text-[oklch(0.45_0.02_50)] leading-relaxed mb-4"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  {post.excerpt}
                </p>
                <div className="flex items-center justify-between">
                  <span
                    className="text-sm font-medium text-[#6B21A8] group-hover:underline"
                    style={{ fontFamily: "var(--font-body)" }}
                  >
                    Read →
                  </span>
                  <span className="flex items-center gap-1.5 text-xs text-[oklch(0.55_0.02_50)]" style={{ fontFamily: "var(--font-body)" }}>
                    <Clock size={11} /> {post.readTime}
                  </span>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  );
}

