/*
 * /sourcing — RampRate IT Sourcing practice page.
 * Hero: "Stop Overpaying. Start Building."
 * SPY Index, 3 columns, service tabs, testimonials, guarantee.
 */
import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "wouter";
import PageLayout from "@/components/PageLayout";
import PageHero from "@/components/PageHero";
import { ArrowRight, Shield, Zap, TrendingUp, Database, Cloud, Server, Globe, Settings, MapPin } from "lucide-react";

const stats = [
  { value: "80%", label: "Faster Launch" },
  { value: "99%", label: "Lower Risk" },
  { value: "25%", label: "OpEx Savings" },
  { value: "$24B+", label: "Decisions Brokered" },
];

const spyStats = [
  { value: "150K+", label: "Quotes Analyzed" },
  { value: "350+", label: "Vendors Tracked" },
  { value: "80+", label: "Countries" },
  { value: "315", label: "Variables Measured" },
];

const pillars = [
  {
    icon: Zap,
    title: "Buy Smarter",
    desc: "Our SPY Index benchmarks your contracts against 150K+ quotes. We find the gaps, renegotiate the terms, and ensure you're never overpaying for infrastructure.",
  },
  {
    icon: TrendingUp,
    title: "Optimize",
    desc: "Average client savings of 23.8% across their infrastructure portfolio. We restructure contracts, consolidate vendors, and eliminate waste without disrupting operations.",
    highlight: "23.8% avg savings",
  },
  {
    icon: Shield,
    title: "Plan for Evolution",
    desc: "Technology moves fast. We build flexible architectures and vendor relationships that scale with your growth — so you're never locked in or left behind.",
  },
];

const serviceTabs = [
  { id: "cdn", label: "CDN", icon: Globe, desc: "Content delivery network optimization. We benchmark your CDN spend against market rates and negotiate better terms with providers like Akamai, Cloudflare, Fastly, and Limelight." },
  { id: "cloud", label: "Cloud", icon: Cloud, desc: "Multi-cloud strategy and cost optimization. AWS, Azure, GCP — we help you pick the right mix, negotiate enterprise agreements, and avoid cloud bill shock." },
  { id: "datacenter", label: "Data Center", icon: Server, desc: "Colocation, dedicated hosting, and hybrid infrastructure. We've negotiated data center contracts across 80+ countries and know every provider's sweet spot." },
  { id: "telecom", label: "Telecom", icon: Settings, desc: "Network connectivity, MPLS, SD-WAN, and internet transit. We cut through carrier complexity and get you better circuits at lower prices." },
  { id: "managed", label: "Managed Services", icon: Database, desc: "Managed hosting, security, monitoring, and support. We match your operational needs with the right managed service providers and SLA structures." },
  { id: "site", label: "Site Selection", icon: MapPin, desc: "Strategic site selection for data centers, offices, and edge deployments. We analyze power costs, connectivity, tax incentives, and talent availability." },
];

const testimonials = [
  {
    quote: "RampRate was a risk-free proposition money-wise. If they didn't save or create us at least twice their initial fee we'd get a full refund. They hit 27% savings and the relationships are stronger than ever.",
    name: "Paul Santana",
    title: "Manager of Data Center Operations",
    company: "eBay",
  },
  {
    quote: "We can count on RampRate to be precise, timely and create millions in value. They are no-nonsense data driven and responsive to a T.",
    name: "Dean Nelson",
    title: "VP Global Foundation Services",
    company: "eBay",
  },
  {
    quote: "For over 16 years, RampRate helped my companies understand the differences between suppliers. They saved us millions, created agility and new budget out of thin air with each engagement.",
    name: "Phil Wiser",
    title: "EVP & CTO",
    company: "ViacomCBS",
  },
  {
    quote: "RampRate simply got us better pricing and better SLA protections than we got for ourselves!",
    name: "Ryan Hughes",
    title: "NHL",
    company: "National Hockey League",
  },
  {
    quote: "They brought in two other providers, had all providers re-quote, and lowered overall prices between 17-36%.",
    name: "Charles Butler",
    title: "Director of Network Operations",
    company: "AOL",
  },
  {
    quote: "I engaged Ramprate to work as sourcing advisors to Sony Music. They helped me significantly reduce my cost structure through several major outsourcing deals worth deep 8 figures. They made me look like a hero.",
    name: "Peter Borner",
    title: "Former Head of IT",
    company: "Sony Music",
  },
];

export default function Sourcing() {
  const [activeTab, setActiveTab] = useState("cdn");
  const activeService = serviceTabs.find((t) => t.id === activeTab)!;

  return (
    <PageLayout>
      <PageHero
        sectionLabel="RampRate — IT Sourcing"
        headline={
          <>
            Stop Overpaying.{" "}
            <span className="text-[#6B21A8]">Start Building.</span>
          </>
        }
        subCopy="Accelerate & de-risk innovation. Cut costs and improve performance across your technology infrastructure. The audit is free."
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
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-md text-sm font-semibold bg-[#6B21A8] text-white hover:bg-[#581C87] transition-all shadow-lg shadow-[#6B21A8]/20"
            style={{ fontFamily: "var(--font-body)" }}
          >
            Get a Free Audit <ArrowRight size={16} />
          </Link>
        </motion.div>
      </PageHero>

      {/* SPY Index Section */}
      <section className="section-warm py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <div className="text-center mb-14">
            <span
              className="text-xs font-semibold tracking-[0.2em] uppercase text-[#6B21A8]"
              style={{ fontFamily: "var(--font-body)" }}
            >
              Service Provider Intelligence Index
            </span>
            <h2
              className="mt-4 text-3xl sm:text-4xl font-bold tracking-tight"
              style={{ fontFamily: "var(--font-display)" }}
            >
              The SPY Index
            </h2>
            <p
              className="mt-4 text-base text-[oklch(0.45_0.02_50)] max-w-2xl mx-auto leading-relaxed"
              style={{ fontFamily: "var(--font-body)" }}
            >
              Our proprietary database of infrastructure pricing, performance, and contract intelligence — built over 24 years of brokering enterprise decisions.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {spyStats.map((s) => (
              <div
                key={s.label}
                className="bg-white rounded-lg p-6 text-center shadow-sm border border-black/5"
              >
                <div
                  className="text-2xl sm:text-3xl font-bold text-[#6B21A8]"
                  style={{ fontFamily: "var(--font-mono)" }}
                >
                  {s.value}
                </div>
                <div
                  className="mt-2 text-xs text-[oklch(0.5_0.02_50)] uppercase tracking-wider"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3 Pillars */}
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
                <div className="w-12 h-12 rounded-lg bg-[#6B21A8]/10 flex items-center justify-center mb-5">
                  <p.icon size={22} className="text-[#6B21A8]" />
                </div>
                <h3
                  className="text-xl font-bold mb-3"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {p.title}
                </h3>
                <p
                  className="text-sm text-[oklch(0.45_0.02_50)] leading-relaxed"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  {p.desc}
                </p>
                {p.highlight && (
                  <div
                    className="mt-4 inline-block px-3 py-1 rounded-full bg-[#6B21A8]/10 text-[#6B21A8] text-xs font-semibold"
                    style={{ fontFamily: "var(--font-mono)" }}
                  >
                    {p.highlight}
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Tabs */}
      <section className="section-dark py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <h2
            className="text-3xl sm:text-4xl font-bold mb-10"
            style={{ fontFamily: "var(--font-display)" }}
          >
            What We <span className="text-[#6B21A8]">Source</span>
          </h2>
          <div className="flex flex-wrap gap-2 mb-8">
            {serviceTabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-5 py-2.5 rounded-md text-sm font-medium transition-all ${
                  activeTab === tab.id
                    ? "bg-[#6B21A8] text-white"
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
              <div className="w-12 h-12 rounded-lg bg-[#6B21A8]/20 flex items-center justify-center shrink-0">
                <activeService.icon size={22} className="text-[#6B21A8]" />
              </div>
              <div>
                <h3
                  className="text-xl font-bold text-white mb-3"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {activeService.label}
                </h3>
                <p
                  className="text-white/60 leading-relaxed"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  {activeService.desc}
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-warm py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <h2
            className="text-3xl sm:text-4xl font-bold mb-12"
            style={{ fontFamily: "var(--font-display)" }}
          >
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
                <p
                  className="text-sm text-[oklch(0.35_0.02_50)] leading-relaxed mb-5 italic"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  "{t.quote}"
                </p>
                <div className="border-t border-black/5 pt-4">
                  <div
                    className="text-sm font-semibold"
                    style={{ fontFamily: "var(--font-body)" }}
                  >
                    {t.name}
                  </div>
                  <div
                    className="text-xs text-[oklch(0.5_0.02_50)]"
                    style={{ fontFamily: "var(--font-body)" }}
                  >
                    {t.title}, {t.company}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link
              href="/proof"
              className="inline-flex items-center gap-2 text-sm font-medium text-[#6B21A8] hover:underline"
              style={{ fontFamily: "var(--font-body)" }}
            >
              See all testimonials <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* Guarantee */}
      <section className="bg-[#6B21A8] py-16 sm:py-20">
        <div className="max-w-4xl mx-auto px-5 sm:px-8 text-center">
          <h2
            className="text-3xl sm:text-4xl font-bold text-white mb-4"
            style={{ fontFamily: "var(--font-display)" }}
          >
            300%+ ROI or Don't Pay
          </h2>
          <p
            className="text-white/70 text-base sm:text-lg leading-relaxed mb-8 max-w-2xl mx-auto"
            style={{ fontFamily: "var(--font-body)" }}
          >
            We're paid as a percentage of the impact we achieve. If we don't deliver outsized returns, we don't get paid outsized fees. The audit is always free.
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
