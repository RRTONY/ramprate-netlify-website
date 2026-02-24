/*
 * /sourcing — RampRate IT Sourcing: The New Product
 * Flagship: Edge, Compute & AI Data Center Intelligence
 * AI studies the process. RampRate gets the deal done.
 * Transaction Architects — find the leverage, get the deal you deserve.
 * 10 pressing questions + validated by people who closed in the last 90 days.
 */
import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "wouter";
import PageLayout from "@/components/PageLayout";
import PageHero from "@/components/PageHero";
import {
  ArrowRight, Shield, Zap, TrendingUp, Database, Cloud, Server,
  Globe, Settings, MapPin, BarChart3, Layers, Brain, Search,
  FileCheck, Scale, Target, Users, Clock, CheckCircle2, HelpCircle,
  Building2, Cpu, Network, CircuitBoard, Gauge, FileText, Handshake,
  Lightbulb, MessageSquare
} from "lucide-react";

/* ── THE 10 MOST PRESSING QUESTIONS ── */
const pressingQuestions = [
  {
    num: "01",
    question: "Am I overpaying for GPU compute — or just paying for hype?",
    context: "AI cluster pricing is a black box. Spot vs. reserved vs. committed — every provider structures it differently. Without benchmark data, you're negotiating blind.",
    icon: Cpu,
  },
  {
    num: "02",
    question: "Build, colo, or lease? What's the real math on my next data center?",
    context: "The build-vs-buy calculus has shifted. Power costs, land, permitting, and construction timelines have all changed. The right answer depends on your 5-year workload trajectory.",
    icon: Building2,
  },
  {
    num: "03",
    question: "Are my SLAs actually protecting me — or just protecting the vendor?",
    context: "Most enterprise SLAs are written by the provider's legal team. Credit structures, force majeure clauses, and uptime definitions are designed to minimize their exposure, not maximize yours.",
    icon: Shield,
  },
  {
    num: "04",
    question: "How do I evaluate edge locations without visiting 40 sites?",
    context: "Edge is about latency, not logos. The right site depends on your user geography, interconnection needs, and local power economics — not the provider's marketing deck.",
    icon: MapPin,
  },
  {
    num: "05",
    question: "Is my MSA locking me into terms I'll regret in 18 months?",
    context: "Master Service Agreements are where the real leverage lives. Auto-renewal traps, price escalation clauses, and exit penalties can cost millions if you don't catch them upfront.",
    icon: FileText,
  },
  {
    num: "06",
    question: "What should I actually be paying per kW in this market?",
    context: "Power pricing varies 3–5× across metros. Knowing the real rate — not the rack rate — requires transaction data from deals closed this quarter, not last year's analyst report.",
    icon: Gauge,
  },
  {
    num: "07",
    question: "How do I consolidate 12 vendor relationships without breaking production?",
    context: "Vendor sprawl is the silent budget killer. Consolidation saves 20–35%, but the migration risk is real. You need a sequenced plan, not a spreadsheet.",
    icon: Network,
  },
  {
    num: "08",
    question: "Can I renegotiate mid-contract — or am I stuck until renewal?",
    context: "You're almost never stuck. Mid-contract renegotiation is an art — and providers will move if you know where their margin lives. Most enterprises leave this money on the table.",
    icon: Handshake,
  },
  {
    num: "09",
    question: "What's the real cost of AI infrastructure beyond the GPU?",
    context: "Networking, cooling, power delivery, storage, and interconnection can double the sticker price. The total cost of ownership for AI workloads is fundamentally different from traditional compute.",
    icon: CircuitBoard,
  },
  {
    num: "10",
    question: "Who else just closed this exact deal — and what did they learn?",
    context: "The most valuable intelligence isn't in a database. It's in the head of the CTO who signed the same contract 60 days ago. We connect you with them.",
    icon: Users,
  },
];

/* ── PRODUCT CAPABILITIES ── */
const capabilities = [
  {
    icon: Scale,
    title: "Deal Structure Grading",
    desc: "We grade every deal structure — colo, cloud, managed, hybrid, edge — against 315 variables. Pricing, terms, SLAs, exit clauses, escalation triggers. You see exactly where you have leverage and where you're exposed.",
    tag: "Every deal. Every structure. Graded.",
  },
  {
    icon: BarChart3,
    title: "Benchmark Pricing Intelligence",
    desc: "The SPY Index holds 24 years of transaction data — 150K+ quotes across 350+ vendors in 80 countries. We don't estimate. We show you what the last 50 buyers actually paid for the same configuration in the same metro.",
    tag: "150K+ quotes · 350+ vendors · 80 countries",
  },
  {
    icon: FileCheck,
    title: "SLA & MSA Auditing",
    desc: "We tear apart your SLAs and MSAs clause by clause. Uptime definitions, credit structures, force majeure, auto-renewal traps, price escalation — we find the landmines before they detonate.",
    tag: "Clause-by-clause. No surprises.",
  },
  {
    icon: MapPin,
    title: "Data Center Location Intelligence",
    desc: "Find and evaluate data centers globally — edge, core, AI-ready. We map power costs, latency profiles, interconnection density, permitting timelines, and sustainability metrics across 300+ metros.",
    tag: "300 metros · 50+ countries · Real-time",
  },
  {
    icon: TrendingUp,
    title: "Growth Strategy & Roadmapping",
    desc: "Where should your infrastructure be in 3 years? We build technology roadmaps that account for AI workload growth, edge expansion, cloud repatriation, and sustainability mandates — so you're never locked in.",
    tag: "Architecture that scales with you",
  },
  {
    icon: Brain,
    title: "AI Infrastructure Advisory",
    desc: "GPU clusters, liquid cooling, high-density power, AI networking — this market moves weekly. We track every provider, every configuration, every pricing model so you don't have to.",
    tag: "The AI infrastructure market. Decoded.",
  },
];

/* ── HOW IT WORKS ── */
const processSteps = [
  {
    step: "01",
    title: "AI Studies the Process",
    desc: "Our intelligence engine analyzes your current contracts, benchmarks them against live market data, and identifies every gap, overpayment, and missed clause. The machine does the homework.",
    icon: Brain,
  },
  {
    step: "02",
    title: "Humans Validate the Strategy",
    desc: "We connect you with enterprise buyers who closed the same deal in the last 90 days. Real people. Real outcomes. No theoretical frameworks — just battle-tested intelligence.",
    icon: Users,
  },
  {
    step: "03",
    title: "Transaction Architects Close the Deal",
    desc: "Our team finds the leverage, structures the negotiation, and gets you the deal you deserve. We've brokered $24B+ in IT decisions. We know where every provider's margin lives.",
    icon: Handshake,
  },
];

const stats = [
  { value: "$24B+", label: "Decisions Brokered" },
  { value: "23.8%", label: "Avg Savings" },
  { value: "90", label: "Day Validation Window" },
  { value: "300%+", label: "ROI Guarantee" },
];

const spyStats = [
  { value: "150K+", label: "Quotes Analyzed" },
  { value: "350+", label: "Vendors Tracked" },
  { value: "80", label: "Countries" },
  { value: "300", label: "Metro Regions" },
  { value: "20", label: "IT Service Types" },
  { value: "315", label: "Variables Measured" },
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
  const [expandedQ, setExpandedQ] = useState<string | null>(null);

  return (
    <PageLayout>
      {/* ═══════════════════════════════════════════════════
          HERO — The new flagship positioning
      ═══════════════════════════════════════════════════ */}
      <PageHero
        sectionLabel="RampRate — Transaction Architects"
        headline={
          <>
            AI Studies the Process.{" "}
            <span className="text-[oklch(0.82_0.15_75)]">We Get the Deal Done.</span>
          </>
        }
        subCopy="Edge, compute, and AI data center intelligence — powered by 24 years of transaction data and validated by people who closed the same deal in the last 90 days. Find the leverage. Get the deal you deserve."
        stats={stats}
      >
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
          className="mt-8 flex flex-wrap gap-4"
        >
          <Link
            href="/connect"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-md text-sm font-semibold bg-[oklch(0.82_0.15_75)] text-[oklch(0.15_0.02_75)] hover:bg-[oklch(0.78_0.15_75)] transition-all shadow-lg shadow-[oklch(0.82_0.15_75)]/20"
            style={{ fontFamily: "var(--font-body)" }}
          >
            Get a Free Audit <ArrowRight size={16} />
          </Link>
          <a
            href="#questions"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-md text-sm font-semibold border border-white/20 text-white/80 hover:bg-white/5 transition-all"
            style={{ fontFamily: "var(--font-body)" }}
          >
            See the 10 Questions <HelpCircle size={16} />
          </a>
        </motion.div>
      </PageHero>

      {/* ═══════════════════════════════════════════════════
          THE 10 MOST PRESSING QUESTIONS
      ═══════════════════════════════════════════════════ */}
      <section id="questions" className="section-dark py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-14"
          >
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[oklch(0.82_0.15_75)]" style={{ fontFamily: "var(--font-body)" }}>
              The Questions That Keep CTOs Up at Night
            </span>
            <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight" style={{ fontFamily: "var(--font-display)" }}>
              10 Questions Every Organization{" "}
              <span className="text-[oklch(0.82_0.15_75)]">Is Asking Right Now</span>
            </h2>
            <p className="mt-4 text-base text-white/50 max-w-3xl leading-relaxed" style={{ fontFamily: "var(--font-body)" }}>
              These aren't hypothetical. They're the questions we hear every week from Fortune 500 CTOs, infrastructure VPs, and procurement leads. Each one is validated by people who've gone through that exact transaction in the last 90 days.
            </p>
          </motion.div>

          <div className="grid gap-3">
            {pressingQuestions.map((q, i) => (
              <motion.div
                key={q.num}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
              >
                <button
                  onClick={() => setExpandedQ(expandedQ === q.num ? null : q.num)}
                  className={`w-full text-left rounded-xl border transition-all duration-300 ${
                    expandedQ === q.num
                      ? "bg-white/[0.08] border-[oklch(0.82_0.15_75)]/30"
                      : "bg-white/[0.03] border-white/[0.08] hover:bg-white/[0.06] hover:border-white/[0.15]"
                  }`}
                >
                  <div className="flex items-start gap-4 p-5 sm:p-6">
                    <div className="shrink-0 w-10 h-10 rounded-lg bg-[oklch(0.82_0.15_75)]/10 flex items-center justify-center">
                      <q.icon size={18} className="text-[oklch(0.82_0.15_75)]" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-3">
                        <span className="text-xs font-bold text-[oklch(0.82_0.15_75)]" style={{ fontFamily: "var(--font-mono)" }}>{q.num}</span>
                        <h3 className="text-base sm:text-lg font-bold text-white" style={{ fontFamily: "var(--font-display)" }}>
                          {q.question}
                        </h3>
                      </div>
                      {expandedQ === q.num && (
                        <motion.p
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          className="mt-3 text-sm text-white/50 leading-relaxed max-w-3xl"
                          style={{ fontFamily: "var(--font-body)" }}
                        >
                          {q.context}
                        </motion.p>
                      )}
                    </div>
                    <div className={`shrink-0 w-6 h-6 rounded-full border border-white/20 flex items-center justify-center transition-transform ${expandedQ === q.num ? "rotate-45" : ""}`}>
                      <span className="text-white/40 text-sm">+</span>
                    </div>
                  </div>
                </button>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mt-10 p-6 rounded-xl bg-[oklch(0.82_0.15_75)]/10 border border-[oklch(0.82_0.15_75)]/20"
          >
            <div className="flex items-start gap-4">
              <MessageSquare size={20} className="text-[oklch(0.82_0.15_75)] shrink-0 mt-0.5" />
              <div>
                <p className="text-sm text-white/70 leading-relaxed" style={{ fontFamily: "var(--font-body)" }}>
                  <strong className="text-white">Recognize your question?</strong> Every answer we give is backed by someone who closed that exact deal in the last 90 days. Not a model. Not a forecast. A person who sat across the table and signed.
                </p>
                <Link href="/connect" className="inline-flex items-center gap-2 mt-3 text-sm font-semibold text-[oklch(0.82_0.15_75)] hover:underline" style={{ fontFamily: "var(--font-body)" }}>
                  Talk to a Transaction Architect <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          HOW IT WORKS — AI + Humans + Transaction Architects
      ═══════════════════════════════════════════════════ */}
      <section className="section-warm py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <div className="text-center mb-16">
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[oklch(0.55_0.15_30)]" style={{ fontFamily: "var(--font-body)" }}>
              How It Works
            </span>
            <h2 className="mt-4 text-3xl sm:text-4xl font-bold tracking-tight" style={{ fontFamily: "var(--font-display)" }}>
              Machines Do the Homework.{" "}
              <span className="text-[oklch(0.55_0.15_30)]">Humans Close the Deal.</span>
            </h2>
            <p className="mt-4 text-base text-[oklch(0.45_0.02_50)] max-w-2xl mx-auto leading-relaxed" style={{ fontFamily: "var(--font-body)" }}>
              AI is brilliant at pattern recognition, benchmarking, and anomaly detection. But deals are closed by people who understand leverage, relationships, and timing. We bring both.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {processSteps.map((step, i) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="relative"
              >
                <div className="bg-white rounded-xl p-8 border border-black/5 h-full">
                  <div className="flex items-center gap-3 mb-5">
                    <div className="w-12 h-12 rounded-lg bg-[oklch(0.55_0.15_30)]/10 flex items-center justify-center">
                      <step.icon size={22} className="text-[oklch(0.55_0.15_30)]" />
                    </div>
                    <span className="text-3xl font-bold text-[oklch(0.55_0.15_30)]/20" style={{ fontFamily: "var(--font-mono)" }}>{step.step}</span>
                  </div>
                  <h3 className="text-xl font-bold mb-3" style={{ fontFamily: "var(--font-display)" }}>{step.title}</h3>
                  <p className="text-sm text-[oklch(0.45_0.02_50)] leading-relaxed" style={{ fontFamily: "var(--font-body)" }}>{step.desc}</p>
                </div>
                {i < processSteps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 w-8 text-center text-[oklch(0.55_0.15_30)]/30">
                    <ArrowRight size={20} />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          PRODUCT CAPABILITIES — The 6 pillars
      ═══════════════════════════════════════════════════ */}
      <section className="section-light py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <div className="mb-14">
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[oklch(0.55_0.15_30)]" style={{ fontFamily: "var(--font-body)" }}>
              What We Do
            </span>
            <h2 className="mt-4 text-3xl sm:text-4xl font-bold tracking-tight" style={{ fontFamily: "var(--font-display)" }}>
              Transaction Architecture for{" "}
              <span className="text-[oklch(0.55_0.15_30)]">Every Deal Type</span>
            </h2>
            <p className="mt-4 text-base text-[oklch(0.45_0.02_50)] max-w-3xl leading-relaxed" style={{ fontFamily: "var(--font-body)" }}>
              We grade, benchmark, audit, locate, and strategize across every kind of infrastructure deal — from a single edge cabinet to a 100MW AI campus.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {capabilities.map((cap, i) => (
              <motion.div
                key={cap.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="bg-white rounded-xl p-7 border border-black/5 hover:shadow-lg hover:shadow-black/5 transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-lg bg-[oklch(0.55_0.15_30)]/10 flex items-center justify-center mb-5 group-hover:bg-[oklch(0.55_0.15_30)]/15 transition-colors">
                  <cap.icon size={22} className="text-[oklch(0.55_0.15_30)]" />
                </div>
                <h3 className="text-lg font-bold mb-3" style={{ fontFamily: "var(--font-display)" }}>{cap.title}</h3>
                <p className="text-sm text-[oklch(0.45_0.02_50)] leading-relaxed mb-4" style={{ fontFamily: "var(--font-body)" }}>{cap.desc}</p>
                <div className="inline-block px-3 py-1.5 rounded-full bg-[oklch(0.55_0.15_30)]/8 text-[oklch(0.55_0.15_30)] text-xs font-semibold" style={{ fontFamily: "var(--font-mono)" }}>
                  {cap.tag}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          SPY INDEX — The Engine
      ═══════════════════════════════════════════════════ */}
      <section className="section-dark py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[oklch(0.82_0.15_75)]" style={{ fontFamily: "var(--font-body)" }}>
                The Intelligence Engine
              </span>
              <h2 className="mt-4 text-3xl sm:text-4xl font-bold text-white leading-tight" style={{ fontFamily: "var(--font-display)" }}>
                The SPY Index
              </h2>
              <p className="mt-4 text-base text-white/50 leading-relaxed" style={{ fontFamily: "var(--font-body)" }}>
                The first platform for IT sourcing decisions and planning. 24 years of proprietary transaction data. Forecasts within 5–10% of final outcome. 99%+ of our deals make it to contract.
              </p>
              <p className="mt-4 text-base text-white/50 leading-relaxed" style={{ fontFamily: "var(--font-body)" }}>
                This isn't an analyst report. It's a living database of what buyers actually paid — updated with every deal we close. When we tell you the market rate, we're not guessing.
              </p>
              <div className="mt-8 grid grid-cols-3 gap-4">
                {spyStats.slice(0, 3).map((s) => (
                  <div key={s.label} className="text-center">
                    <div className="text-2xl font-bold text-[oklch(0.82_0.15_75)]" style={{ fontFamily: "var(--font-mono)" }}>{s.value}</div>
                    <div className="mt-1 text-[10px] text-white/40 uppercase tracking-wider" style={{ fontFamily: "var(--font-body)" }}>{s.label}</div>
                  </div>
                ))}
              </div>
              <div className="mt-4 grid grid-cols-3 gap-4">
                {spyStats.slice(3).map((s) => (
                  <div key={s.label} className="text-center">
                    <div className="text-2xl font-bold text-[oklch(0.82_0.15_75)]" style={{ fontFamily: "var(--font-mono)" }}>{s.value}</div>
                    <div className="mt-1 text-[10px] text-white/40 uppercase tracking-wider" style={{ fontFamily: "var(--font-body)" }}>{s.label}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-3">
              <h3 className="text-lg font-bold text-white mb-4" style={{ fontFamily: "var(--font-display)" }}>5 Data Pillars</h3>
              {[
                { title: "Historical Transaction Data", desc: "24 years of actual deal data across every major IT service category." },
                { title: "Analyst Research", desc: "Integrated intelligence from Gartner, IDC, Telegeography, 451 Research." },
                { title: "Supplier Capabilities", desc: "1,000+ pre-loaded vendors with detailed capability profiles." },
                { title: "Customer Experience", desc: "Ongoing interviews with enterprise buyers for real-world performance data." },
                { title: "Cultural Compatibility", desc: "CSR alignment, energy efficiency matching, and values-based vendor scoring." },
              ].map((p, i) => (
                <motion.div
                  key={p.title}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="bg-white/[0.05] rounded-lg p-4 border border-white/[0.08]"
                >
                  <div className="text-sm font-bold text-white mb-1" style={{ fontFamily: "var(--font-display)" }}>{p.title}</div>
                  <p className="text-xs text-white/40 leading-relaxed" style={{ fontFamily: "var(--font-body)" }}>{p.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          WHAT WE SOURCE — Service Categories
      ═══════════════════════════════════════════════════ */}
      <section className="section-warm py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <div className="text-center mb-14">
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[oklch(0.55_0.15_30)]" style={{ fontFamily: "var(--font-body)" }}>
              Service Categories
            </span>
            <h2 className="mt-4 text-3xl sm:text-4xl font-bold tracking-tight" style={{ fontFamily: "var(--font-display)" }}>
              What We <span className="text-[oklch(0.55_0.15_30)]">Source</span>
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { icon: Server, label: "Data Center & Colo", desc: "Site selection, procurement, benchmarking across 80+ countries" },
              { icon: Cpu, label: "AI & GPU Compute", desc: "Cluster pricing, reserved vs. spot, liquid cooling, high-density power" },
              { icon: Cloud, label: "Cloud & Hybrid", desc: "AWS/Azure/GCP optimization, repatriation analysis, hybrid architecture" },
              { icon: MapPin, label: "Edge Infrastructure", desc: "Edge location intelligence, latency mapping, micro-DC procurement" },
              { icon: Globe, label: "CDN & Content Delivery", desc: "Multi-CDN architecture, published market research, pricing intelligence" },
              { icon: Network, label: "Telecom & Connectivity", desc: "Billing audits, carrier negotiations, Master Contractor model" },
              { icon: Database, label: "Managed Services", desc: "Cloud utility pricing, SLA benchmarking, outsource decisions" },
              { icon: Settings, label: "IT Strategy & Planning", desc: "5-year roadmaps, cloud vs. colo evaluation, technology planning" },
            ].map((svc, i) => (
              <motion.div
                key={svc.label}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                className="bg-white rounded-lg p-5 border border-black/5 hover:shadow-md transition-all"
              >
                <svc.icon size={20} className="text-[oklch(0.55_0.15_30)] mb-3" />
                <h3 className="text-sm font-bold mb-1.5" style={{ fontFamily: "var(--font-display)" }}>{svc.label}</h3>
                <p className="text-xs text-[oklch(0.45_0.02_50)] leading-relaxed" style={{ fontFamily: "var(--font-body)" }}>{svc.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          TESTIMONIALS
      ═══════════════════════════════════════════════════ */}
      <section className="section-light py-20 sm:py-28">
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
              See all case studies <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          GUARANTEE CTA
      ═══════════════════════════════════════════════════ */}
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
