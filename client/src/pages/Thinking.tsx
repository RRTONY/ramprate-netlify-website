/*
 * /thinking — "25 Years of Thinking"
 * Article archive. Year on left, title as link, one-line description.
 * Links to tonygreenberg.com and ramprate.com/blog.
 * Design: dark institutional, gold/amber accent.
 */
import { motion } from "framer-motion";
import PageLayout from "@/components/PageLayout";
import PageHero from "@/components/PageHero";
import { ArrowUpRight, BookOpen } from "lucide-react";

interface Article {
  year: string;
  title: string;
  description: string;
  url: string;
  source: string;
}

const articles: Article[] = [
  {
    year: "2025",
    title: "Patience in the AI Infrastructure Gold Rush: The Second Mouse Gets the Cheese",
    description: "Why first movers in AI infrastructure don't always win — and what the smart money is doing instead.",
    url: "https://ramprate.com/patience-in-the-ai-infrastructure-gold-rush-the-second-mouse-gets-the-cheese/",
    source: "ramprate.com",
  },
  {
    year: "2025",
    title: "Republic's Mirror Tokens — SpaceX and Beyond",
    description: "How Republic is democratizing access to private market investments through mirror tokens.",
    url: "https://ramprate.com/republics-mirror-tokens-spacex-and-beyond/",
    source: "ramprate.com",
  },
  {
    year: "2024",
    title: "UNI Token Price Surge: Effective Governance?",
    description: "The governance vote that other ecosystems are watching to realign their incentives.",
    url: "https://ramprate.com/uni-token-price-surge-a-reflection-of-the-markets-hunger-for-effective-governance/",
    source: "ramprate.com",
  },
  {
    year: "2023",
    title: "The Need for Burning Man to Convert into a DAO",
    description: "When ticket distribution breaks, decentralized governance becomes the fix.",
    url: "https://ramprate.com/convert-burning-man-dao-menagerie/",
    source: "ramprate.com",
  },
  {
    year: "2023",
    title: "Energy as Impact",
    description: "Redivider is transforming edge data centers by leveraging sustainable technology for planet and humanity.",
    url: "https://ramprate.com/energy-as-impact/",
    source: "ramprate.com",
  },
  {
    year: "2023",
    title: "From Supply Chain to the Blockchain: Heal the Body, Mind, Earth",
    description: "The convergence of supply chain transparency, blockchain, and purpose-driven enterprise.",
    url: "https://ramprate.com/from-supply-chain-to-the-blockchain-heal-the-body-mind-earth",
    source: "ramprate.com",
  },
  {
    year: "2023",
    title: "DevxDAO, XPRIZE & the Future of Decentralized Grants",
    description: "How decentralized autonomous organizations are reshaping grant funding for global challenges.",
    url: "https://ramprate.com/devxdao-xprize-decentralized-grants/",
    source: "ramprate.com",
  },
  {
    year: "2022",
    title: "B Corp Certification: Walking the Walk",
    description: "RampRate becomes B Corp certified — why it matters and what it demands.",
    url: "https://ramprate.com/b-corp-certification/",
    source: "ramprate.com",
  },
  {
    year: "2021",
    title: "Why Good Service Is All About Trust",
    description: "The invisible architecture of 20-year client relationships. Trust isn't a value — it's a business model.",
    url: "https://tonygreenberg.com/why-good-service-is-all-about-trust/",
    source: "tonygreenberg.com",
  },
  {
    year: "2020",
    title: "The Art of the No",
    description: "Saying no to the wrong deal is the most valuable thing an advisor can do.",
    url: "https://tonygreenberg.com/the-art-of-the-no/",
    source: "tonygreenberg.com",
  },
  {
    year: "2019",
    title: "Mastering Human and Business Development",
    description: "The intersection of personal growth and enterprise strategy. Both require the same discipline.",
    url: "https://tonygreenberg.com/mastering-human-and-business-development/",
    source: "tonygreenberg.com",
  },
  {
    year: "2018",
    title: "Making IT Services Fit Like a Good Shoe — 10 Years Later",
    description: "A decade after the original essay, the principles still hold. Updated with 10 more years of proof.",
    url: "https://tonygreenberg.com/making-fit-like-good-shoe-10-years-later-ramprate-long/",
    source: "tonygreenberg.com",
  },
  {
    year: "2015",
    title: "10 Magic Questions to Make Your Project Go Right",
    description: "The questions that separate projects that ship from projects that stall.",
    url: "https://tonygreenberg.com/10-magic-questions-for-projects-success-kick-ass/",
    source: "tonygreenberg.com",
  },
  {
    year: "2008",
    title: "Making IT Services Fit Like a Good Shoe",
    description: "The original essay on procurement as craft. Why the right fit matters more than the lowest price.",
    url: "https://tonygreenberg.com/making-fit-like-good-shoe-10-years-later-ramprate-long/",
    source: "tonygreenberg.com",
  },
];

/* Group articles by year for display */
const years = Array.from(new Set(articles.map((a) => a.year)));

export default function Thinking() {
  return (
    <PageLayout>
      <PageHero
        sectionLabel="Archive"
        headline={
          <>
            25 Years of{" "}
            <span className="text-[oklch(0.82_0.15_75)]">Thinking.</span>
          </>
        }
        subCopy="Essays, insights, and positions from Tony Greenberg and the RampRate team. Written by practitioners, not analysts."
      />

      {/* Article Archive */}
      <section className="relative bg-[#0d1117] py-24 sm:py-32 overflow-hidden">
        <div className="glass-orb glass-orb-blue w-[300px] h-[300px] -top-32 -right-32" />
        <div className="glass-orb glass-orb-rust w-[200px] h-[200px] bottom-10 -left-20" />
        <div className="max-w-4xl mx-auto px-5 sm:px-8">
          {/* Author note */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16 flex items-start gap-4 bg-white/[0.03] border border-white/[0.06] rounded-xl p-6"
          >
            <BookOpen size={20} className="text-[oklch(0.82_0.15_75)] shrink-0 mt-0.5" />
            <div>
              <p
                className="text-sm text-white/60 leading-relaxed"
                style={{ fontFamily: "var(--font-body)" }}
              >
                Written by{" "}
                <span className="text-white font-semibold">Tony Greenberg</span>
                , author of <em>Boy in the Human</em> and speaker alongside
                Kurzweil at the 2010 Singularity Summit. 25 years of enterprise
                advisory distilled into thinking that matters.
              </p>
            </div>
          </motion.div>

          {/* Year groups */}
          <div className="space-y-0">
            {years.map((year) => {
              const yearArticles = articles.filter((a) => a.year === year);
              return (
                <div key={year}>
                  {yearArticles.map((article, i) => (
                    <motion.a
                      key={article.title}
                      href={article.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ opacity: 0, y: 12 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.05 }}
                      className="group flex items-start gap-6 sm:gap-10 py-7 border-b border-white/[0.06] hover:bg-white/[0.02] -mx-4 px-4 rounded-lg transition-all duration-300"
                    >
                      {/* Content */}
                      <div className="flex-1 min-w-0">
                        <h3
                          className="text-base sm:text-lg font-bold text-white group-hover:text-[oklch(0.82_0.15_75)] transition-colors duration-300 leading-snug"
                          style={{ fontFamily: "var(--font-display)" }}
                        >
                          {article.title}
                        </h3>
                        <p
                          className="mt-1.5 text-sm text-white/40 leading-relaxed"
                          style={{ fontFamily: "var(--font-body)" }}
                        >
                          {article.description}
                        </p>
                        <span
                          className="mt-2 inline-block text-[11px] text-white/25 tracking-wide uppercase"
                          style={{ fontFamily: "var(--font-mono)" }}
                        >
                          {article.source}
                        </span>
                      </div>

                      {/* Arrow */}
                      <ArrowUpRight
                        size={16}
                        className="text-white/20 group-hover:text-[oklch(0.82_0.15_75)] transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 shrink-0 mt-1"
                      />
                    </motion.a>
                  ))}
                </div>
              );
            })}
          </div>

          {/* More on blog */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16 text-center"
          >
            <a
              href="/blog"
              className="inline-flex items-center gap-2 text-sm font-semibold text-[oklch(0.82_0.15_75)] hover:text-[oklch(0.88_0.15_75)] transition-colors"
              style={{ fontFamily: "var(--font-body)" }}
            >
              See all posts on the blog <ArrowUpRight size={14} />
            </a>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[oklch(0.55_0.15_30)] py-24 sm:py-28">
        <div className="max-w-3xl mx-auto px-5 sm:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2
              className="text-3xl sm:text-4xl font-bold text-white mb-5"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Thinking Is Free. Execution Costs.
            </h2>
            <p
              className="text-white/70 text-base leading-relaxed mb-10 max-w-xl mx-auto"
              style={{ fontFamily: "var(--font-body)" }}
            >
              If something here resonated, the next step is a conversation with a principal — not a form, not a funnel.
            </p>
            <a
              href="/connect"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-md text-sm font-bold bg-white text-[oklch(0.35_0.1_30)] hover:bg-white/90 transition-all shadow-lg"
              style={{ fontFamily: "var(--font-body)" }}
            >
              Request Principal Review <ArrowUpRight size={16} />
            </a>
          </motion.div>
        </div>
      </section>
    </PageLayout>
  );
}
