/*
 * Homepage v3: Trust Architecture Rebuild
 * Institutional gravity. Proven asymmetry. Zero desperation.
 * Sections: Hero → Client Wall → Engagements → Brands → Why Different →
 *           Timeline → Testimonials → How We Operate → Compensation → CTA
 */
import { useState, useEffect, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { Link } from "wouter";
import {
  ArrowRight, ArrowDown, Target, Zap, Users, TrendingUp,
  Shield, Clock, Database, Globe, Briefcase, DollarSign,
  ChevronRight, ChevronLeft, Quote
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BrandsSection from "@/components/BrandsSection";

const HERO_IMG =
  "https://private-us-east-1.manuscdn.com/sessionFile/m6kc1Tn353i2D6rxZBg8XB/sandbox/J7HEXUnaovvTBQvdWYHk6M-img-2_1771884573000_na1fn_aGVyby1jb252ZXJnZW5jZS12Mg.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvbTZrYzFUbjM1M2kyRDZyeFpCZzhYQi9zYW5kYm94L0o3SEVYVW5hb3Z2VEJRdmRXWUhrNk0taW1nLTJfMTc3MTg4NDU3MzAwMF9uYTFmbl9hR1Z5YnkxamIyNTJaWEpuWlc1alpTMTJNZy5wbmc~eC1vc3MtcHJvY2Vzcz1pbWFnZS9yZXNpemUsd18xOTIwLGhfMTkyMC9mb3JtYXQsd2VicC9xdWFsaXR5LHFfODAiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3OTg3NjE2MDB9fX1dfQ__&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=dR8T9HY3gTId1kbm5~sRaczbVNRMTI0pb4eePWr5NSovZ4J2cqRm2TXlwcNnQDGNke5A-sRevt51xkxV9ncZqnHZeHChDGPkuKzFDDSEQSJiYSlhQDINZfrQhUcDhfH69AryM~jkJvoGu2FEN8PlICaOdV1c8tLovvk3JA0MUcwBcn1t-jripUvbE9WpjJdwBXRzrC6eGMcsinhFBvUfihrr8v1~Hz8cfo5Qxvlg1WzJFe8QspW~Ah-Tb2f5bv5nryfqizSi-CjDgLge6PZap4xIipojP-88nrUZlzQEOzfz5Yvne6Bg7AehzgweeKWG-24HipP0CnPjpb2DFvjElA__";

/* ── CLIENT LOGO WALL — Two-Tier ── */
const tier1Clients = [
  { name: "Microsoft", context: "50+ strategy & product studies" },
  { name: "eBay", context: "27% infrastructure savings" },
  { name: "Sony", context: "Deep 8-figure outsourcing deals" },
  { name: "ViacomCBS", context: "Budget optimization across all IT categories" },
  { name: "Intel", context: "Digital strategy & alliances research" },
  { name: "Nike", context: "Multi-year procurement, 7-figure reductions" },
  { name: "Hearst", context: "16+ years, saved millions globally" },
  { name: "Blizzard", context: "Complex negotiations, rapid scaling" },
];
const tier2Clients = [
  { name: "Disney", context: "Best IT services deal during executive tenure" },
  { name: "AOL", context: "17-36% price reductions; breakthrough SLAs" },
  { name: "NHL", context: "Breakthrough PPV streaming solution" },
  { name: "Miramax", context: "40%+ savings; diligence compressed" },
  { name: "Warner Bros.", context: "Win-win structures across two engagements" },
  { name: "Verizon", context: "Enterprise telecom partnerships" },
  { name: "AT&T", context: "Telecom infrastructure navigation" },
  { name: "Merrill Lynch", context: "Fortune 500 IT cost optimization" },
  { name: "Accenture", context: "20-40% savings; cut processes in half" },
  { name: "Thomson Reuters", context: "Saved millions; marketplace mapping" },
  { name: "Primedia", context: "Needs assessment in record time" },
  { name: "Beats Music", context: "Fully installed in 30 hours" },
  { name: "XPRIZE", context: "$3M+ grant funding managed" },
  { name: "Syntropy", context: "4+ year daily engagement; growth accelerated" },
  { name: "Riot Games", context: "Rapid scaling for multiplayer platforms" },
  { name: "NBC", context: "Content delivery optimization" },
  { name: "Fox", context: "Broadcast infrastructure advisory" },
  { name: "Ticketmaster", context: "eCommerce infrastructure" },
  { name: "McGraw Hill", context: "Publishing infrastructure optimization" },
  { name: "Vodafone", context: "Global telecom advisory" },
];

/* ── SELECTED ENGAGEMENTS ── */
const engagements = [
  {
    label: "Global Entertainment Conglomerate",
    stats: "75% infrastructure cost reduction",
    detail: "16+ year relationship across multiple CTO tenures. Created methodology adopted at exec level. Millions in reinvestable budget.",
    accent: "oklch(0.82 0.15 75)",
  },
  {
    label: "Fortune 500 E-Commerce Platform",
    stats: "27% savings while strengthening relationships",
    detail: "Risk-free model: 2x fee guarantee or full refund. Millions in ongoing value.",
    accent: "oklch(0.6 0.2 280)",
  },
  {
    label: "Growth-Stage Network Startup",
    stats: "US market penetration in months",
    detail: "4+ year daily advisory. Accelerated growth by years. Converted enterprise traction to next-stage momentum.",
    accent: "oklch(0.65 0.2 150)",
  },
];

/* ── WHY DIFFERENT TABLE ── */
const diffRows = [
  { trad: "Sells analysis", broker: "Sells intros", ramp: "Benchmarks real contracts against 150K+ data points" },
  { trad: "Bills time", broker: "Takes commissions", ramp: "Compensation aligned to value created" },
  { trad: "Client executes", broker: "Disappears after handshake", ramp: "Executes with principals end-to-end" },
  { trad: "Junior layers", broker: "Rolodex, no depth", ramp: "Same senior team, 25 years, no staffing pyramid" },
  { trad: "Forecasts ±30-40%", broker: "No forecasts", ramp: "Forecasts within 5-10%" },
];

/* ── TIMELINE ── */
const timeline = [
  { year: "2000", event: "Founded. Private, self-funded, profitable from birth." },
  { year: "2003", event: "First Fortune 100 engagement." },
  { year: "2004", event: "SPY Index — 150K+ data points." },
  { year: "2008", event: "$2B+ IT expenditure under management." },
  { year: "2010", event: "Global expansion, 50+ countries." },
  { year: "2015", event: "Blockchain/Web3 advisory launched." },
  { year: "2018", event: "Syzygy Impact division." },
  { year: "2020", event: "B Corp Certified." },
  { year: "2022", event: "$3M+ grant funding managed for XPRIZE." },
  { year: "2024", event: "$24B+ decisions brokered. ImpactSoul launched." },
];

/* ── TESTIMONIALS ── */
const testimonials = [
  {
    quote: "I engaged RampRate to work as sourcing advisors to Sony Music. Since engaging them they have helped me significantly reduce my cost structure through several major outsourcing deals worth deep 8 figures. They made me look like a hero to my executive management. They are a secret weapon.",
    name: "Peter Borner",
    title: "Former Head of IT, Sony",
  },
  {
    quote: "For over 16 years, RampRate helped my companies understand the differences between suppliers. They saved us millions, created agility and new budget out of thin air with each engagement.",
    name: "Phil Wiser",
    title: "EVP & CTO, ViacomCBS",
  },
  {
    quote: "RampRate was a risk-free proposition money-wise. They hit 27% savings and the relationships are stronger than ever.",
    name: "Paul Santana",
    title: "Manager of Data Center Operations, eBay",
  },
  {
    quote: "RampRate has been my most reliable global resource and is ready to perform for us at a moment's notice. Their inside knowledge and ability to handle high-level complex negotiations helped us move fast! They made scaling easier.",
    name: "Paul Sams",
    title: "COO, Blizzard Entertainment",
  },
  {
    quote: "Intel engaged RampRate as we launched our Digital Home content strategy & alliances group. RampRate defines professionalism and they run a world-class team devoted to the same ideals.",
    name: "Ron Vaisbort",
    title: "Executive at Intel, Blackberry, Ivalua",
  },
  {
    quote: "The deal that RampRate got for the Walt Disney Internet Group was one of the best deals in IT services I saw during my tenure at Disney. I would use RampRate again.",
    name: "Robert Gonsalves",
    title: "Former Director, Warner Bros. Online / Disney",
  },
  {
    quote: "Each time they have saved significant time in negotiating and closing contracts, which provided at least 20 if not 40% savings and certainly cut processes in half.",
    name: "Michael Montalto",
    title: "Accenture",
  },
  {
    quote: "RampRate took a two-week contract negotiation and made it into a two-and-a-half-day process, creating millions in value.",
    name: "Kevin Shively",
    title: "Executive Director, International Webcasting Association",
  },
  {
    quote: "Under-promised and over-delivered for more than 4 years. They paid for themselves by accelerating our growth by years.",
    name: "Kipras Kazlauskas",
    title: "Co-Founder, Syntropy",
  },
];

/* ── HOW WE OPERATE ── */
const operateSteps = [
  {
    num: "01",
    title: "Deep Research",
    desc: "$24B+ transaction intelligence. Million+ data points. 350+ vendors. 80 countries. Forecasts within 5-10% of outcome.",
    icon: Database,
    link: { label: "Flow Circuit Assessment →", href: "/process#flow-circuit" },
  },
  {
    num: "02",
    title: "Strategic Blueprint",
    desc: "Pressure-test positioning, vendor structures, GTM, revenue pathways against real market data. Not theory.",
    icon: Target,
    link: { label: "Find Your Me / Way / Our →", href: "/process#find-me" },
  },
  {
    num: "03",
    title: "Relationship Activation",
    desc: "25 years of enterprise trust. When we call, doors open. Not pitch. History. 99% of intros convert to contracts.",
    icon: Users,
    link: { label: "See Full Process →", href: "/process" },
  },
];

/* ── Testimonial Carousel Hook ── */
function useCarousel(length: number, interval = 5000) {
  const [active, setActive] = useState(0);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const reset = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => setActive((p) => (p + 1) % length), interval);
  };

  useEffect(() => {
    reset();
    return () => { if (timerRef.current) clearInterval(timerRef.current); };
  }, [length, interval]);

  const next = () => { setActive((p) => (p + 1) % length); reset(); };
  const prev = () => { setActive((p) => (p - 1 + length) % length); reset(); };
  const goTo = (i: number) => { setActive(i); reset(); };

  return { active, next, prev, goTo };
}

function ClientCard({ name, context }: { name: string; context: string }) {
  return (
    <div className="text-center px-2 py-4">
      <h3
        className="text-xs sm:text-sm font-bold tracking-[0.15em] uppercase text-white/60"
        style={{ fontFamily: "var(--font-display)" }}
      >
        {name}
      </h3>
      <p
        className="text-[11px] sm:text-xs text-white/30 mt-1 leading-snug"
        style={{ fontFamily: "var(--font-body)" }}
      >
        {context}
      </p>
    </div>
  );
}

export default function Home() {
  const { active, next, prev, goTo } = useCarousel(testimonials.length, 6000);
  const timelineRef = useRef<HTMLDivElement>(null);
  const [showAllClients, setShowAllClients] = useState(false);

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* ═══════════════════════════════════════════════════
          HERO — We Turn Strategy Into Revenue
      ═══════════════════════════════════════════════════ */}
      <section className="relative min-h-screen flex flex-col overflow-hidden bg-[#0a0f1a]">
        <div className="absolute inset-0">
          <img src={HERO_IMG} alt="" className="w-full h-full object-cover object-right" loading="eager" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0a0f1a] via-[#0a0f1a]/85 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0f1a]/90 via-transparent to-[#0a0f1a]/40" />
        </div>

        {/* Glassmorphic orbs */}
        <div className="glass-orb glass-orb-amber w-[500px] h-[500px] -top-40 -right-40 z-[1] animate-pulse" style={{ animationDuration: '8s' }} />
        <div className="glass-orb glass-orb-rust w-[300px] h-[300px] bottom-20 left-10 z-[1] animate-pulse" style={{ animationDuration: '12s' }} />
        <div className="glass-orb glass-orb-blue w-[200px] h-[200px] top-1/3 right-1/4 z-[1] animate-pulse" style={{ animationDuration: '10s' }} />

        <div className="relative z-10 flex-1 flex items-center">
          <div className="max-w-7xl mx-auto px-5 sm:px-8 w-full pt-28 pb-16">
            <div className="max-w-2xl">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h1
                  className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.05] tracking-tight"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  We Turn Strategy
                  <br />
                  Into{" "}
                  <span className="text-[oklch(0.82_0.15_75)]">Revenue.</span>
                </h1>
              </motion.div>

              <motion.p
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.7 }}
                className="mt-6 text-sm sm:text-base font-semibold tracking-[0.15em] uppercase text-white/50"
                style={{ fontFamily: "var(--font-mono)" }}
              >
                25 Years · $24B+ in Enterprise Decisions · 250+ Global Brands · Skin in the Game
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.7 }}
                className="mt-6 text-lg sm:text-xl text-white/70 leading-relaxed max-w-xl"
                style={{ fontFamily: "var(--font-body)" }}
              >
                The right person. The right room. The right time.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
                className="mt-10 flex flex-wrap gap-4"
              >
                <Link
                  href="/connect"
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-md text-sm font-bold bg-[oklch(0.82_0.15_75)] text-[oklch(0.15_0.02_75)] hover:bg-[oklch(0.78_0.15_75)] transition-all shadow-lg shadow-[oklch(0.82_0.15_75)]/20"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  Request Principal Review <ArrowRight size={16} />
                </Link>
                <Link
                  href="/proof"
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-md text-sm font-semibold border border-white/20 text-white/80 hover:bg-white/5 transition-all"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  See Case Results
                </Link>
              </motion.div>
            </div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="relative z-10 pb-8 flex justify-center"
        >
          <motion.div animate={{ y: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 2 }}>
            <span className="text-[10px] tracking-[0.3em] uppercase text-white/30 block text-center mb-2" style={{ fontFamily: "var(--font-mono)" }}>
              Scroll
            </span>
            <ArrowDown size={16} className="text-white/30 mx-auto" />
          </motion.div>
        </motion.div>
      </section>

      {/* ═══════════════════════════════════════════════════
          CLIENT LOGO WALL — Two-Tier Expandable
      ═══════════════════════════════════════════════════ */}
      <section className="bg-[#0d1117] py-16 sm:py-20">
        <div className="max-w-6xl mx-auto px-5 sm:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-10"
          >
            <h2
              className="text-2xl sm:text-3xl md:text-4xl font-bold text-white leading-tight"
              style={{ fontFamily: "var(--font-display)" }}
            >
              25 Years Inside the World's Most
              <br className="hidden sm:block" />
              <span className="text-[oklch(0.82_0.15_75)]"> Complex Enterprises</span>
            </h2>
            <p
              className="mt-3 text-sm text-white/40"
              style={{ fontFamily: "var(--font-body)" }}
            >
              100+ engagements. $24B+ in decisions brokered. Names you know.
            </p>
          </motion.div>

          {/* Tier 1: Power Row */}
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-px bg-white/[0.04] rounded-lg overflow-hidden border border-white/[0.06]">
            {tier1Clients.map((c) => (
              <div key={c.name} className="bg-[#0d1117] p-3 sm:p-4">
                <ClientCard name={c.name} context={c.context} />
              </div>
            ))}
          </div>

          {/* Tier 2: Expandable */}
          <AnimatePresence>
            {showAllClients && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.25, ease: "easeInOut" }}
                className="overflow-hidden"
              >
                <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-5 gap-px bg-white/[0.04] rounded-lg overflow-hidden border border-white/[0.06] mt-3">
                  {tier2Clients.map((c) => (
                    <div key={c.name} className="bg-[#0d1117] p-3 sm:p-4">
                      <ClientCard name={c.name} context={c.context} />
                    </div>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Toggle Button */}
          <div className="flex justify-center mt-6">
            <button
              onClick={() => setShowAllClients(!showAllClients)}
              className="text-xs font-semibold tracking-[0.15em] uppercase text-white/40 hover:text-white/70 transition-colors"
              style={{ fontFamily: "var(--font-body)" }}
            >
              {showAllClients ? "\u2014 Show Less" : "+ View All Clients"}
            </button>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          SELECTED ENGAGEMENTS
      ═══════════════════════════════════════════════════ */}
      <section className="relative bg-[#0a0f1a] py-28 sm:py-36 overflow-hidden">
        <div className="glass-orb glass-orb-blue w-[400px] h-[400px] -bottom-40 -left-40" />
        <div className="glass-orb glass-orb-amber w-[250px] h-[250px] top-20 right-10" />
        <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-14"
          >
            <span
              className="text-xs font-semibold tracking-[0.2em] uppercase text-[oklch(0.82_0.15_75)]"
              style={{ fontFamily: "var(--font-body)" }}
            >
              Selected Engagements
            </span>
            <h2
              className="mt-4 text-3xl sm:text-4xl font-bold text-white"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Results, Not Promises.
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {engagements.map((eng, i) => (
              <motion.div
                key={eng.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12 }}
                className="glass-card p-8 hover:border-white/[0.15] transition-all duration-300"
              >
                <div
                  className="w-1 h-10 rounded-full mb-6"
                  style={{ backgroundColor: eng.accent }}
                />
                <p
                  className="text-xs uppercase tracking-[0.15em] text-white/40 mb-3"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  {eng.label}
                </p>
                <h3
                  className="text-xl sm:text-2xl font-bold text-white mb-4"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {eng.stats}
                </h3>
                <p
                  className="text-sm text-white/50 leading-relaxed"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  {eng.detail}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          FOUR PRACTICES — Self-select your lane
      ═══════════════════════════════════════════════════ */}
      <BrandsSection />

      {/* ═══════════════════════════════════════════════════
          WHY WE'RE DIFFERENT — Contrast Table
      ═══════════════════════════════════════════════════ */}
      <section className="section-light py-24 sm:py-32">
        <div className="max-w-5xl mx-auto px-5 sm:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <span
              className="text-xs font-semibold tracking-[0.2em] uppercase text-[oklch(0.55_0.15_30)]"
              style={{ fontFamily: "var(--font-body)" }}
            >
              Why We're Different
            </span>
            <h2
              className="mt-4 text-3xl sm:text-4xl font-bold tracking-tight"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Not Consultants. Not Brokers.
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="overflow-x-auto"
          >
            <table className="w-full text-left border-collapse min-w-[600px]">
              <thead>
                <tr>
                  <th
                    className="pb-4 text-xs uppercase tracking-[0.15em] text-[oklch(0.5_0.02_50)] font-semibold border-b border-black/10"
                    style={{ fontFamily: "var(--font-body)" }}
                  >
                    Traditional Consulting
                  </th>
                  <th
                    className="pb-4 text-xs uppercase tracking-[0.15em] text-[oklch(0.5_0.02_50)] font-semibold border-b border-black/10"
                    style={{ fontFamily: "var(--font-body)" }}
                  >
                    Broker / Agent
                  </th>
                  <th
                    className="pb-4 text-xs uppercase tracking-[0.15em] text-[oklch(0.82_0.15_75)] font-bold border-b-2 border-[oklch(0.82_0.15_75)]"
                    style={{ fontFamily: "var(--font-body)" }}
                  >
                    RampRate
                  </th>
                </tr>
              </thead>
              <tbody>
                {diffRows.map((row, i) => (
                  <tr key={i} className="border-b border-black/5">
                    <td
                      className="py-4 pr-6 text-sm text-[oklch(0.45_0.02_50)]"
                      style={{ fontFamily: "var(--font-body)" }}
                    >
                      {row.trad}
                    </td>
                    <td
                      className="py-4 pr-6 text-sm text-[oklch(0.45_0.02_50)]"
                      style={{ fontFamily: "var(--font-body)" }}
                    >
                      {row.broker}
                    </td>
                    <td
                      className="py-4 text-sm font-semibold text-[oklch(0.25_0.03_50)]"
                      style={{ fontFamily: "var(--font-body)" }}
                    >
                      {row.ramp}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mt-10 text-base sm:text-lg font-bold text-center text-[oklch(0.25_0.03_50)] leading-relaxed"
            style={{ fontFamily: "var(--font-display)" }}
          >
            You work with principals. No junior layering. No staffing pyramid.
            <br className="hidden sm:block" />
            The people on the testimonials are the people who serve you.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-8 flex flex-wrap justify-center gap-4"
          >
            <Link
              href="/process#flow-circuit"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md text-xs font-bold border border-[oklch(0.55_0.15_30)]/30 text-[oklch(0.55_0.15_30)] hover:bg-[oklch(0.55_0.15_30)]/5 transition-all"
              style={{ fontFamily: "var(--font-body)" }}
            >
              <Zap size={13} /> Take the Flow Circuit Assessment
            </Link>
            <Link
              href="/process#find-me"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md text-xs font-bold border border-[oklch(0.6_0.2_280)]/30 text-[oklch(0.6_0.2_280)] hover:bg-[oklch(0.6_0.2_280)]/5 transition-all"
              style={{ fontFamily: "var(--font-body)" }}
            >
              <Target size={13} /> Find Your Me / Way / Our
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          TIMELINE — 25 Years. One Standard.
      ═══════════════════════════════════════════════════ */}
      <section className="bg-[#0d1117] py-24 sm:py-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2
              className="text-3xl sm:text-4xl md:text-5xl font-bold text-white"
              style={{ fontFamily: "var(--font-display)" }}
            >
              25 Years.{" "}
              <span className="text-[oklch(0.82_0.15_75)]">One Standard.</span>
            </h2>
          </motion.div>

          {/* Desktop: horizontal scroll */}
          <div
            ref={timelineRef}
            className="hidden md:flex gap-0 overflow-x-auto pb-4 scrollbar-thin scrollbar-thumb-white/10 scrollbar-track-transparent"
            style={{ scrollbarWidth: "thin" }}
          >
            {timeline.map((item, i) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="flex-shrink-0 w-[200px] relative"
              >
                <div className="flex flex-col items-center">
                  <div className="w-3 h-3 rounded-full bg-[oklch(0.82_0.15_75)] mb-3 relative z-10" />
                  <div className="absolute top-1.5 left-1/2 w-full h-px bg-white/10" />
                  <span
                    className="text-lg font-bold text-[oklch(0.82_0.15_75)] mb-2"
                    style={{ fontFamily: "var(--font-mono)" }}
                  >
                    {item.year}
                  </span>
                  <p
                    className="text-xs text-white/50 text-center leading-relaxed px-3"
                    style={{ fontFamily: "var(--font-body)" }}
                  >
                    {item.event}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Mobile: vertical */}
          <div className="md:hidden space-y-0">
            {timeline.map((item, i) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                className="flex gap-5 relative"
              >
                <div className="flex flex-col items-center">
                  <div className="w-3 h-3 rounded-full bg-[oklch(0.82_0.15_75)] shrink-0 relative z-10" />
                  {i < timeline.length - 1 && (
                    <div className="w-px flex-1 bg-white/10" />
                  )}
                </div>
                <div className="pb-8">
                  <span
                    className="text-sm font-bold text-[oklch(0.82_0.15_75)]"
                    style={{ fontFamily: "var(--font-mono)" }}
                  >
                    {item.year}
                  </span>
                  <p
                    className="text-sm text-white/50 mt-1 leading-relaxed"
                    style={{ fontFamily: "var(--font-body)" }}
                  >
                    {item.event}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          EXECUTIVE TESTIMONIAL CAROUSEL
      ═══════════════════════════════════════════════════ */}
      <section className="relative bg-[#0f1419] py-28 sm:py-36 overflow-hidden">
        <div className="glass-orb glass-orb-rust w-[350px] h-[350px] -top-20 left-1/3" />
        <div className="glass-orb glass-orb-amber w-[200px] h-[200px] bottom-10 right-20" />
        <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <span
              className="text-xs font-semibold tracking-[0.2em] uppercase text-[oklch(0.82_0.15_75)]"
              style={{ fontFamily: "var(--font-body)" }}
            >
              What Executives Say
            </span>
            <h2
              className="mt-4 text-3xl sm:text-4xl font-bold text-white"
              style={{ fontFamily: "var(--font-display)" }}
            >
              In Their Words.
            </h2>
          </motion.div>

          {/* Desktop: show 3 at a time */}
          <div className="hidden lg:block relative">
            <div className="grid grid-cols-3 gap-6">
              {[0, 1, 2].map((offset) => {
                const idx = (active + offset) % testimonials.length;
                const t = testimonials[idx];
                return (
                  <motion.div
                    key={`${idx}-${active}`}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: offset * 0.1 }}
                    className="bg-white/[0.04] border border-white/[0.08] rounded-xl p-8 flex flex-col"
                  >
                    <Quote size={20} className="text-[oklch(0.82_0.15_75)]/40 mb-4 shrink-0" />
                    <p
                      className="text-sm text-white/70 leading-relaxed italic flex-1"
                      style={{ fontFamily: "var(--font-body)" }}
                    >
                      "{t.quote}"
                    </p>
                    <div className="mt-6 pt-4 border-t border-white/[0.06]">
                      <p className="text-sm font-bold text-white" style={{ fontFamily: "var(--font-display)" }}>
                        {t.name}
                      </p>
                      <p className="text-xs text-white/40 mt-0.5" style={{ fontFamily: "var(--font-body)" }}>
                        {t.title}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Nav arrows */}
            <div className="flex justify-center gap-4 mt-8">
              <button
                onClick={prev}
                className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/40 hover:text-white hover:border-white/30 transition-all"
              >
                <ChevronLeft size={18} />
              </button>
              <div className="flex items-center gap-2">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => goTo(i)}
                    className={`w-2 h-2 rounded-full transition-all ${
                      i === active ? "bg-[oklch(0.82_0.15_75)] w-6" : "bg-white/20 hover:bg-white/40"
                    }`}
                  />
                ))}
              </div>
              <button
                onClick={next}
                className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/40 hover:text-white hover:border-white/30 transition-all"
              >
                <ChevronRight size={18} />
              </button>
            </div>
          </div>

          {/* Mobile: single card with swipe */}
          <div className="lg:hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -40 }}
                transition={{ duration: 0.3 }}
                className="bg-white/[0.04] border border-white/[0.08] rounded-xl p-7"
              >
                <Quote size={18} className="text-[oklch(0.82_0.15_75)]/40 mb-3" />
                <p
                  className="text-sm text-white/70 leading-relaxed italic"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  "{testimonials[active].quote}"
                </p>
                <div className="mt-5 pt-4 border-t border-white/[0.06]">
                  <p className="text-sm font-bold text-white" style={{ fontFamily: "var(--font-display)" }}>
                    {testimonials[active].name}
                  </p>
                  <p className="text-xs text-white/40 mt-0.5" style={{ fontFamily: "var(--font-body)" }}>
                    {testimonials[active].title}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>

            <div className="flex justify-center gap-3 mt-6">
              <button
                onClick={prev}
                className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/40 hover:text-white transition-all"
              >
                <ChevronLeft size={18} />
              </button>
              <div className="flex items-center gap-1.5">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => goTo(i)}
                    className={`w-2 h-2 rounded-full transition-all ${
                      i === active ? "bg-[oklch(0.82_0.15_75)] w-5" : "bg-white/20"
                    }`}
                  />
                ))}
              </div>
              <button
                onClick={next}
                className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/40 hover:text-white transition-all"
              >
                <ChevronRight size={18} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          HOW WE OPERATE
      ═══════════════════════════════════════════════════ */}
      <section className="relative section-warm py-24 sm:py-32 overflow-hidden">
        <div className="glass-orb glass-orb-rust w-[350px] h-[350px] -top-32 -right-32" />
        <div className="glass-orb glass-orb-amber w-[200px] h-[200px] bottom-10 left-10" />
        <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-14"
          >
            <span
              className="text-xs font-semibold tracking-[0.2em] uppercase text-[oklch(0.55_0.15_30)]"
              style={{ fontFamily: "var(--font-body)" }}
            >
              Our Approach
            </span>
            <h2
              className="mt-4 text-3xl sm:text-4xl font-bold tracking-tight"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Research. Blueprint. <span className="text-[oklch(0.55_0.15_30)]">Activate.</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {operateSteps.map((step, i) => (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12 }}
                className="glass-card-warm p-8"
              >
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-12 h-12 rounded-lg bg-[oklch(0.55_0.15_30)]/10 flex items-center justify-center">
                    <step.icon size={22} className="text-[oklch(0.55_0.15_30)]" />
                  </div>
                  <span
                    className="text-3xl font-bold text-[oklch(0.55_0.15_30)]/20"
                    style={{ fontFamily: "var(--font-mono)" }}
                  >
                    {step.num}
                  </span>
                </div>
                <h3
                  className="text-xl font-bold mb-3"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {step.title}
                </h3>
                <p
                  className="text-sm text-[oklch(0.45_0.02_50)] leading-relaxed"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  {step.desc}
                </p>
                {step.link && (
                  <Link
                    href={step.link.href}
                    className="inline-block mt-4 text-xs font-semibold text-[oklch(0.55_0.15_30)] hover:text-[oklch(0.65_0.15_30)] transition-colors"
                    style={{ fontFamily: "var(--font-body)" }}
                  >
                    {step.link.label}
                  </Link>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          COMPENSATION — Aligned With Value Created
      ═══════════════════════════════════════════════════ */}
      <section className="relative section-light py-24 sm:py-32 overflow-hidden">
        <div className="glass-orb glass-orb-amber w-[300px] h-[300px] -bottom-32 -left-32" />
        <div className="glass-orb glass-orb-rust w-[180px] h-[180px] top-20 right-20" />
        <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <span
                className="text-xs font-semibold tracking-[0.2em] uppercase text-[oklch(0.55_0.15_30)]"
                style={{ fontFamily: "var(--font-body)" }}
              >
                Compensation
              </span>
              <h2
                className="mt-4 text-3xl sm:text-4xl font-bold tracking-tight"
                style={{ fontFamily: "var(--font-display)" }}
              >
                We Align Compensation{" "}
                <span className="text-[oklch(0.55_0.15_30)]">With Value Created.</span>
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="glass-card-warm p-8"
            >
              <div className="space-y-5">
                <div className="flex items-start gap-4">
                  <DollarSign size={20} className="text-[oklch(0.55_0.15_30)] shrink-0 mt-0.5" />
                  <div>
                    <div className="text-base font-bold mb-1" style={{ fontFamily: "var(--font-display)" }}>
                      $15K-$50K/month
                    </div>
                    <p className="text-sm text-[oklch(0.45_0.02_50)]" style={{ fontFamily: "var(--font-body)" }}>
                      Depending on scope. Equity-forward available.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Shield size={20} className="text-[oklch(0.55_0.15_30)] shrink-0 mt-0.5" />
                  <div>
                    <div className="text-base font-bold mb-1" style={{ fontFamily: "var(--font-display)" }}>
                      Performance Accountability
                    </div>
                    <p className="text-sm text-[oklch(0.45_0.02_50)]" style={{ fontFamily: "var(--font-body)" }}>
                      Clawbacks where appropriate. Historical multiplier: 20X.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Target size={20} className="text-[oklch(0.55_0.15_30)] shrink-0 mt-0.5" />
                  <div>
                    <div className="text-base font-bold mb-1" style={{ fontFamily: "var(--font-display)" }}>
                      Every Engagement Is Custom
                    </div>
                    <p className="text-sm text-[oklch(0.45_0.02_50)]" style={{ fontFamily: "var(--font-body)" }}>
                      The only way to know the number is to tell us what's broken.
                    </p>
                  </div>
                </div>
              </div>
              <p
                className="mt-8 pt-6 border-t border-black/5 text-sm font-semibold text-[oklch(0.35_0.03_50)] italic"
                style={{ fontFamily: "var(--font-body)" }}
              >
                We have never invoiced and disappeared. In 25 years.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          CTA — Request Principal Review
      ═══════════════════════════════════════════════════ */}
      <section className="bg-[oklch(0.55_0.15_30)] py-24 sm:py-32">
        <div className="max-w-4xl mx-auto px-5 sm:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2
              className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Request Principal Review.
            </h2>
            <p
              className="text-white/70 text-base sm:text-lg leading-relaxed mb-4 max-w-2xl mx-auto"
              style={{ fontFamily: "var(--font-body)" }}
            >
              Principal responds within 24 hours. No associates. No filters. No intake maze.
            </p>
            <p
              className="text-white/50 text-sm leading-relaxed mb-10 max-w-xl mx-auto"
              style={{ fontFamily: "var(--font-body)" }}
            >
              If we can create leverage, we'll show you how. If we can't, we'll tell you fast.
            </p>
            <Link
              href="/connect"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-md text-sm font-bold bg-white text-[oklch(0.35_0.1_30)] hover:bg-white/90 transition-all shadow-lg"
              style={{ fontFamily: "var(--font-body)" }}
            >
              Request Principal Review <ArrowRight size={16} />
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
