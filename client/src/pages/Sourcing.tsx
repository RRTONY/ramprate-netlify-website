/*
 * /sourcing — RampRate IT Sourcing practice page.
 * ALL CONTENT FROM: ramprate.com + content migration paste
 * SPY Index with 5 data pillars, 8 service categories, testimonials, guarantee.
 * ZERO fabrication.
 */
import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "wouter";
import PageLayout from "@/components/PageLayout";
import PageHero from "@/components/PageHero";
import { ArrowRight, Shield, Zap, TrendingUp, Database, Cloud, Server, Globe, Settings, MapPin, BarChart3, Layers } from "lucide-react";

const stats = [
  { value: "80%", label: "Faster Launch" },
  { value: "99%+", label: "Deals to Contract" },
  { value: "23.8%", label: "Avg Savings" },
  { value: "$24B+", label: "Decisions Brokered" },
];

const spyStats = [
  { value: "150K+", label: "Quotes Analyzed" },
  { value: "350+", label: "Vendors Tracked" },
  { value: "80", label: "Countries" },
  { value: "300", label: "Metro Regions" },
  { value: "20", label: "IT Service Types" },
  { value: "315", label: "Variables Measured" },
];

/* ── 5 DATA PILLARS — REAL from ramprate.com ── */
const dataPillars = [
  { title: "Historical Transaction Data", desc: "24 years of actual deal data across every major IT service category." },
  { title: "Analyst Research", desc: "Integrated intelligence from Gartner, IDC, Telegeography, 451 Research." },
  { title: "Supplier Capabilities", desc: "1,000+ pre-loaded vendors with detailed capability profiles." },
  { title: "Customer Experience", desc: "Ongoing interviews with enterprise buyers for real-world performance data." },
  { title: "Cultural Compatibility", desc: "CSR alignment, energy efficiency matching, and values-based vendor scoring." },
];

/* ── 3 PILLARS — enriched from paste ── */
const pillars = [
  {
    icon: Zap,
    title: "Buy Smarter Worldwide",
    desc: "New procurement sourcing. Vendor-neutral analysis. Global scale across 50+ countries. Our SPY Index benchmarks your contracts against 150K+ quotes to find the gaps and renegotiate terms.",
  },
  {
    icon: TrendingUp,
    title: "Optimize Existing Deals",
    desc: "Mid-contract renegotiation. Billing audits. Contract restructuring. Average 23.8% savings over baseline. We consolidate vendors and eliminate waste without disrupting operations.",
    highlight: "23.8% avg savings",
  },
  {
    icon: Shield,
    title: "Plan for Evolution",
    desc: "IT strategy and roadmapping. Cloud vs. colo vs. managed evaluation. 5-year technology planning. We build flexible architectures that scale with your growth — so you're never locked in.",
  },
];

/* ── ALL 8 SERVICE CATEGORIES — REAL from paste ── */
const serviceTabs = [
  { id: "buy", label: "Buy Smarter", icon: Globe, desc: "New procurement sourcing. Vendor-neutral analysis. Global scale across 50+ countries. We leverage the SPY Index to identify optimal vendors, negotiate enterprise agreements, and ensure you're getting market-leading terms from day one." },
  { id: "optimize", label: "Optimize Deals", icon: TrendingUp, desc: "Mid-contract renegotiation. Billing audits. Contract restructuring. Average 23.8% savings over baseline. We find hidden costs, renegotiate terms mid-cycle, and restructure agreements to align with actual usage patterns." },
  { id: "plan", label: "Plan for Evolution", icon: BarChart3, desc: "IT strategy and roadmapping. Cloud vs. colo vs. managed evaluation. 5-year technology planning. Where is cloud/managed/colo/CDN right for you? We build the roadmap and execute the transitions." },
  { id: "cdn", label: "CDN", icon: Layers, desc: "CDN-specific sourcing. Published CDN market research. Multi-CDN architecture design. Industry-leading pricing intelligence. We've published the definitive Executive Brief on 'Sourcing CDN Services' with pricing, market dynamics, and supplier capabilities." },
  { id: "cloud", label: "Cloud", icon: Cloud, desc: "AWS/Azure/GCP optimization. Hybrid cloud design. In-source vs. outsource decisions. Complex pricing model navigation. We cut through the complexity of reserved instances, savings plans, and enterprise discount programs." },
  { id: "datacenter", label: "Data Center & Colo", icon: Server, desc: "Site selection. Colocation procurement. Benchmarking. Location, scale, performance comparison across 10 dimensions. We've negotiated data center contracts across 80+ countries and know every provider's sweet spot." },
  { id: "telecom", label: "Telecom Expense", icon: Settings, desc: "Billing audits. Supplier channel integration. Direct negotiations. Master Contractor model. Best-of-breed TEM platforms. We cut through carrier complexity and get you better circuits at lower prices." },
  { id: "managed", label: "Managed Services", icon: Database, desc: "Cloud utility pricing. Complex outsource decisions. Dozens of pricing models navigated. SLA benchmarking. We match your operational needs with the right managed service providers and SLA structures." },
];

const testimonials = [
  { quote: "RampRate was a risk-free proposition money-wise. If they didn't save or create us at least twice their initial fee we'd get a full refund. They hit 27% savings and the relationships are stronger than ever.", name: "Paul Santana", title: "Manager of Data Center Operations", company: "eBay" },
  { quote: "We can count on RampRate to be precise, timely and create millions in value. They are no-nonsense data driven and responsive to a T.", name: "Dean Nelson", title: "VP Global Foundation Services", company: "eBay" },
  { quote: "For over 16 years, RampRate helped my companies understand the differences between suppliers. They saved us millions, created agility and new budget out of thin air with each engagement.", name: "Phil Wiser", title: "EVP & CTO", company: "ViacomCBS" },
  { quote: "RampRate simply got us better pricing and better SLA protections than we got for ourselves!", name: "Ryan Hughes", title: "Network Operations", company: "National Hockey League" },
  { quote: "They brought in two other providers, had all providers re-quote, and lowered overall prices between 17-36%. They helped us achieve breakthrough innovative best-of-breed SLA coverage.", name: "Charles Butler", title: "Director of Network Operations", company: "AOL" },
  { quote: "Since engaging them they have helped me significantly reduce my cost structure through several major outsourcing deals worth deep 8 figures. They made me look like a hero to my executive management.", name: "Peter Borner", title: "Former Head of IT", company: "Sony Music" },
];

export default function Sourcing() {
  const [activeTab, setActiveTab] = useState("buy");
  const activeService = serviceTabs.find((t) => t.id === activeTab)!;

  return (
    <PageLayout>
      <PageHero
        sectionLabel="RampRate — IT Sourcing"
        headline={
          <>
            Stop Overpaying.{" "}
            <span className="text-[oklch(0.55_0.15_30)]">Start Building.</span>
          </>
        }
        subCopy="The first platform for IT sourcing decisions and planning. Forecasts within 5–10% of final outcome. The audit is always free."
        stats={stats}
      >
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
          className="mt-8"
        >
          <Link
            href="/connect"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-md text-sm font-semibold bg-[oklch(0.55_0.15_30)] text-white hover:bg-[oklch(0.48_0.15_30)] transition-all shadow-lg shadow-[oklch(0.55_0.15_30)]/20"
            style={{ fontFamily: "var(--font-body)" }}
          >
            Get a Free Audit <ArrowRight size={16} />
          </Link>
        </motion.div>
      </PageHero>

      {/* SPY Index Section — enriched with 5 data pillars */}
      <section className="section-warm py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <div className="text-center mb-14">
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[oklch(0.55_0.15_30)]" style={{ fontFamily: "var(--font-body)" }}>
              Service Provider Intelligence Index
            </span>
            <h2 className="mt-4 text-3xl sm:text-4xl font-bold tracking-tight" style={{ fontFamily: "var(--font-display)" }}>
              The SPY Index — The Engine
            </h2>
            <p className="mt-4 text-base text-[oklch(0.45_0.02_50)] max-w-2xl mx-auto leading-relaxed" style={{ fontFamily: "var(--font-body)" }}>
              The first platform for IT sourcing decisions and planning. 24 years of proprietary data. Forecasts within 5–10% of final outcome. 99%+ deals make it to contract.
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4 mb-12">
            {spyStats.map((s) => (
              <div key={s.label} className="bg-white rounded-lg p-5 text-center shadow-sm border border-black/5">
                <div className="text-xl sm:text-2xl font-bold text-[oklch(0.55_0.15_30)]" style={{ fontFamily: "var(--font-mono)" }}>{s.value}</div>
                <div className="mt-1 text-[10px] text-[oklch(0.5_0.02_50)] uppercase tracking-wider" style={{ fontFamily: "var(--font-body)" }}>{s.label}</div>
              </div>
            ))}
          </div>

          {/* 5 Data Pillars */}
          <h3 className="text-xl font-bold mb-6" style={{ fontFamily: "var(--font-display)" }}>
            5 Data Pillars
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {dataPillars.map((p, i) => (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="bg-white rounded-lg p-5 border border-black/5"
              >
                <div className="text-sm font-bold mb-2" style={{ fontFamily: "var(--font-display)" }}>{p.title}</div>
                <p className="text-xs text-[oklch(0.45_0.02_50)] leading-relaxed" style={{ fontFamily: "var(--font-body)" }}>{p.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 3 Pillars — enriched from paste */}
      <section className="section-light py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {pillars.map((p, i) => (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="bg-[oklch(0.97_0.01_80)] rounded-xl p-8 border border-black/5"
              >
                <div className="w-12 h-12 rounded-lg bg-[oklch(0.55_0.15_30)]/10 flex items-center justify-center mb-5">
                  <p.icon size={22} className="text-[oklch(0.55_0.15_30)]" />
                </div>
                <h3 className="text-xl font-bold mb-3" style={{ fontFamily: "var(--font-display)" }}>{p.title}</h3>
                <p className="text-sm text-[oklch(0.45_0.02_50)] leading-relaxed" style={{ fontFamily: "var(--font-body)" }}>{p.desc}</p>
                {p.highlight && (
                  <div className="mt-4 inline-block px-3 py-1 rounded-full bg-[oklch(0.55_0.15_30)]/10 text-[oklch(0.55_0.15_30)] text-xs font-semibold" style={{ fontFamily: "var(--font-mono)" }}>
                    {p.highlight}
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* All 8 Service Categories — tabs */}
      <section className="section-dark py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold mb-10 text-white" style={{ fontFamily: "var(--font-display)" }}>
            What We <span className="text-[oklch(0.55_0.15_30)]">Source</span>
          </h2>
          <div className="flex flex-wrap gap-2 mb-8">
            {serviceTabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-5 py-2.5 rounded-md text-sm font-medium transition-all ${
                  activeTab === tab.id
                    ? "bg-[oklch(0.55_0.15_30)] text-white"
                    : "bg-white/5 text-white/50 hover:text-white hover:bg-white/10"
                }`}
                style={{ fontFamily: "var(--font-body)" }}
              >
                {tab.label}
              </button>
            ))}
          </div>
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white/5 rounded-xl p-8 border border-white/10"
          >
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-lg bg-[oklch(0.55_0.15_30)]/20 flex items-center justify-center shrink-0">
                <activeService.icon size={22} className="text-[oklch(0.55_0.15_30)]" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-3" style={{ fontFamily: "var(--font-display)" }}>{activeService.label}</h3>
                <p className="text-white/60 leading-relaxed" style={{ fontFamily: "var(--font-body)" }}>{activeService.desc}</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-warm py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold mb-12" style={{ fontFamily: "var(--font-display)" }}>
            What Our Clients Say
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white rounded-xl p-6 shadow-sm border border-black/5"
              >
                <p className="text-sm text-[oklch(0.35_0.02_50)] leading-relaxed mb-5 italic" style={{ fontFamily: "var(--font-body)" }}>
                  "{t.quote}"
                </p>
                <div className="border-t border-black/5 pt-4">
                  <div className="text-sm font-semibold" style={{ fontFamily: "var(--font-body)" }}>{t.name}</div>
                  <div className="text-xs text-[oklch(0.5_0.02_50)]" style={{ fontFamily: "var(--font-body)" }}>
                    {t.title}, {t.company}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link href="/proof" className="inline-flex items-center gap-2 text-sm font-medium text-[oklch(0.55_0.15_30)] hover:underline" style={{ fontFamily: "var(--font-body)" }}>
              See all testimonials <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* Guarantee */}
      <section className="bg-[oklch(0.55_0.15_30)] py-16 sm:py-20">
        <div className="max-w-4xl mx-auto px-5 sm:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4" style={{ fontFamily: "var(--font-display)" }}>
            300%+ ROI or Don't Pay
          </h2>
          <p className="text-white/70 text-base sm:text-lg leading-relaxed mb-8 max-w-2xl mx-auto" style={{ fontFamily: "var(--font-body)" }}>
            The audit is always free. If we don't deliver 300%+ ROI on our sourcing engagements, you don't pay. We put skin in the game because we believe in what we do.
          </p>
          <Link href="/connect" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-md text-sm font-semibold bg-white text-[oklch(0.35_0.1_30)] hover:bg-white/90 transition-all shadow-lg" style={{ fontFamily: "var(--font-body)" }}>
            Start a Conversation <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </PageLayout>
  );
}
