/*
 * Homepage v2: Direct. Proven. Urgent.
 * Voice: No filler. Every sentence proves or drives action.
 * Sections: Hero → What We Do → Proof → Who → How → Why → Compensation → Evolution → CTA
 * Previous version backed up as Home.v1.tsx
 */
import { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Link } from "wouter";
import {
  ArrowRight, ArrowDown, Target, Zap, Users, TrendingUp,
  Shield, Clock, Database, Globe, Briefcase, DollarSign,
  Sparkles, ChevronRight, CheckCircle2, Quote
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Logo from "@/components/Logo";
import BrandsSection from "@/components/BrandsSection";

const HERO_IMG =
  "https://private-us-east-1.manuscdn.com/sessionFile/m6kc1Tn353i2D6rxZBg8XB/sandbox/J7HEXUnaovvTBQvdWYHk6M-img-2_1771884573000_na1fn_aGVyby1jb252ZXJnZW5jZS12Mg.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvbTZrYzFUbjM1M2kyRDZyeFpCZzhYQi9zYW5kYm94L0o3SEVYVW5hb3Z2VEJRdmRXWUhrNk0taW1nLTJfMTc3MTg4NDU3MzAwMF9uYTFmbl9hR1Z5YnkxamIyNTJaWEpuWlc1alpTMTJNZy5wbmc~eC1vc3MtcHJvY2Vzcz1pbWFnZS9yZXNpemUsd18xOTIwLGhfMTkyMC9mb3JtYXQsd2VicC9xdWFsaXR5LHFfODAiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3OTg3NjE2MDB9fX1dfQ__&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=dR8T9HY3gTId1kbm5~sRaczbVNRMTI0pb4eePWr5NSovZ4J2cqRm2TXlwcNnQDGNke5A-sRevt51xkxV9ncZqnHZeHChDGPkuKzFDDSEQSJiYSlhQDINZfrQhUcDhfH69AryM~jkJvoGu2FEN8PlICaOdV1c8tLovvk3JA0MUcwBcn1t-jripUvbE9WpjJdwBXRzrC6eGMcsinhFBvUfihrr8v1~Hz8cfo5Qxvlg1WzJFe8QspW~Ah-Tb2f5bv5nryfqizSi-CjDgLge6PZap4xIipojP-88nrUZlzQEOzfz5Yvne6Bg7AehzgweeKWG-24HipP0CnPjpb2DFvjElA__";

/* ── Animated counter hook ── */
function useCounter(end: number, duration = 2000) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const step = end / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [inView, end, duration]);

  return { count, ref };
}

/* ── PROOF SNAPSHOTS ── */
const proofSnapshots = [
  {
    label: "Fortune 50 Shared Services",
    result: "-26% cost, +64% SLAs",
    detail: "Bleeding $13M/yr to shared services vendor. Renegotiated in days.",
    color: "oklch(0.55 0.15 30)",
  },
  {
    label: "Blockchain Startup → US Market",
    result: "4 pilots in 90 days",
    detail: "18 months zero US traction. Repositioned, intro'd 12 Fortune 500 CIOs. Series A oversubscribed.",
    color: "oklch(0.55 0.22 260)",
  },
  {
    label: "Wellness Founder → Series A",
    result: "$4.5M in 4 months",
    detail: "Stalled fundraise. Real barrier: integration complexity. 9 intros. Conversion 10%→40%+.",
    color: "oklch(0.45 0.18 150)",
  },
  {
    label: "Carbon Consortium → DAO",
    result: "Ratified in 45 days",
    detail: "5-org consortium deadlocked 18 months. Mapped real conflict, designed governance. Projected $8M/yr.",
    color: "oklch(0.82 0.15 75)",
  },
];

/* ── WHO THIS IS FOR ── */
const personas = [
  {
    icon: Briefcase,
    persona: "Fortune 1000 exec with a strategy deck gathering dust",
    proof: "We've closed 75+ engagements for Microsoft alone.",
  },
  {
    icon: Zap,
    persona: "Founder who's burned 18 months chasing one enterprise meeting",
    proof: "We set them up in a week.",
  },
  {
    icon: DollarSign,
    persona: "Company bleeding across thousands of vendor contracts",
    proof: "We've found $14.4M in errors in a single audit.",
  },
  {
    icon: TrendingUp,
    persona: "Growth-stage team needing BD that closes",
    proof: "Not advisors who hand you a plan and disappear.",
  },
];

/* ── HOW WE OPERATE ── */
const operateSteps = [
  {
    num: "01",
    title: "Deep Research",
    desc: "$24B+ transaction intelligence. Million+ data points. 350+ vendors. 80 countries. Forecasts within 5–10% of outcome.",
    icon: Database,
  },
  {
    num: "02",
    title: "Strategic Blueprint",
    desc: "Pressure-test positioning, vendor structures, GTM, revenue pathways against real market data. Not theory.",
    icon: Target,
  },
  {
    num: "03",
    title: "Relationship Activation",
    desc: "25 years of enterprise trust. When we call, doors open. Not pitch. History. 99% of intros convert to contracts.",
    icon: Users,
  },
];

/* ── TESTIMONIALS ── */
const quotes = [
  {
    text: "Took a two-week negotiation and made it two-and-a-half days, creating millions in value.",
  },
  {
    text: "Tony's network allows almost instantaneous connectivity at the highest level with significant yield across industries.",
  },
  {
    text: "Saved us millions, created agility and new budget out of thin air. Secret weapon.",
  },
];

/* ── EVOLUTION EXAMPLES ── */
const evolutionExamples = [
  {
    label: "Art Exhibition Tokenized",
    result: "$2M+ sales, $800K+ to ocean conservation Year 1",
  },
  {
    label: "T-Rex Fossil Tokenized",
    result: "Stays on display permanently, funds paleontology",
  },
  {
    label: "Education NGO",
    result: "$3.2M non-dilutive funding in 12 months",
  },
];

export default function Home() {
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
                We don't sell decks. We execute outcomes.
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
                  Tell Us What's Broken <ArrowRight size={16} />
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

        {/* Scroll indicator */}
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
          FOUR PRACTICES — Self-select your lane
      ═══════════════════════════════════════════════════ */}
      <BrandsSection />

      {/* ═══════════════════════════════════════════════════
          WHAT WE ACTUALLY DO
      ═══════════════════════════════════════════════════ */}
      <section className="section-warm py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <span
                className="text-xs font-semibold tracking-[0.2em] uppercase text-[oklch(0.55_0.15_30)]"
                style={{ fontFamily: "var(--font-body)" }}
              >
                What We Actually Do
              </span>
              <h2
                className="mt-4 text-3xl sm:text-4xl md:text-5xl font-bold leading-tight tracking-tight"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Most advisory firms diagnose.{" "}
                <span className="text-[oklch(0.55_0.15_30)]">We deploy.</span>
              </h2>
              <p
                className="mt-6 text-base sm:text-lg text-[oklch(0.35_0.02_50)] leading-relaxed"
                style={{ fontFamily: "var(--font-body)" }}
              >
                Most firms write strategy. We close the loop. RampRate enters through economic clarity, builds strategic precision, and activates relationships that convert into revenue, partnerships, and enterprise leverage.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="space-y-6"
            >
              {/* Process flow */}
              <div className="flex items-center gap-3 flex-wrap">
                {["Research", "Business Plan", "Execution", "Revenue"].map((step, i) => (
                  <div key={step} className="flex items-center gap-3">
                    <span
                      className="px-4 py-2 rounded-full bg-white border border-black/5 text-sm font-semibold shadow-sm"
                      style={{ fontFamily: "var(--font-body)" }}
                    >
                      {step}
                    </span>
                    {i < 3 && <ChevronRight size={16} className="text-[oklch(0.55_0.15_30)] shrink-0" />}
                  </div>
                ))}
              </div>

              {/* Big 4 anecdote */}
              <div className="bg-white rounded-xl p-7 border border-black/5 shadow-sm">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-[oklch(0.55_0.15_30)]/10 flex items-center justify-center shrink-0 mt-0.5">
                    <Shield size={20} className="text-[oklch(0.55_0.15_30)]" />
                  </div>
                  <div>
                    <p
                      className="text-sm text-[oklch(0.35_0.02_50)] leading-relaxed"
                      style={{ fontFamily: "var(--font-body)" }}
                    >
                      A Big 4 firm charged a Fortune 500 <strong className="text-[oklch(0.2_0.02_50)]">$1.2M</strong> for supply chain blockchain. Delivered zero. We deployed a 50-supplier pilot in 90 days — <strong className="text-[oklch(0.55_0.15_30)]">$18M projected annual savings</strong>.
                    </p>
                    <p
                      className="mt-3 text-xs text-[oklch(0.5_0.02_50)] italic"
                      style={{ fontFamily: "var(--font-body)" }}
                    >
                      The difference: 25 years of trust already in the room.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          PROOF — Case Snapshots
      ═══════════════════════════════════════════════════ */}
      <section className="section-dark py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
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
              Proof
            </span>
            <h2
              className="mt-4 text-3xl sm:text-4xl font-bold text-white leading-tight"
              style={{ fontFamily: "var(--font-display)" }}
            >
              We don't guess. We benchmark.{" "}
              <span className="text-[oklch(0.82_0.15_75)]">We structure. We execute.</span>
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-5">
            {proofSnapshots.map((p, i) => (
              <motion.div
                key={p.label}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white/[0.04] rounded-xl p-7 border border-white/[0.08] hover:bg-white/[0.07] transition-all duration-300 group"
              >
                <div
                  className="text-xs font-semibold tracking-wider uppercase mb-3"
                  style={{ fontFamily: "var(--font-mono)", color: p.color }}
                >
                  {p.label}
                </div>
                <div
                  className="text-2xl sm:text-3xl font-bold text-white mb-3"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {p.result}
                </div>
                <p
                  className="text-sm text-white/50 leading-relaxed"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  {p.detail}
                </p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mt-10 text-center"
          >
            <Link
              href="/proof"
              className="inline-flex items-center gap-2 text-sm font-semibold text-[oklch(0.82_0.15_75)] hover:underline"
              style={{ fontFamily: "var(--font-body)" }}
            >
              See All Case Results <ArrowRight size={14} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          WHO THIS IS FOR
      ═══════════════════════════════════════════════════ */}
      <section className="section-light py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
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
              Who This Is For
            </span>
            <h2
              className="mt-4 text-3xl sm:text-4xl font-bold tracking-tight"
              style={{ fontFamily: "var(--font-display)" }}
            >
              You're in the{" "}
              <span className="text-[oklch(0.55_0.15_30)]">right room.</span>
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-5">
            {personas.map((p, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white rounded-xl p-7 border border-black/5 hover:shadow-lg hover:shadow-black/5 transition-all duration-300 group"
              >
                <div className="w-11 h-11 rounded-lg bg-[oklch(0.55_0.15_30)]/10 flex items-center justify-center mb-5 group-hover:bg-[oklch(0.55_0.15_30)]/15 transition-colors">
                  <p.icon size={22} className="text-[oklch(0.55_0.15_30)]" />
                </div>
                <p
                  className="text-base font-bold text-[oklch(0.2_0.02_50)] leading-snug mb-3"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {p.persona}
                </p>
                <p
                  className="text-sm text-[oklch(0.55_0.15_30)] font-semibold"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  {p.proof}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          HOW WE OPERATE
      ═══════════════════════════════════════════════════ */}
      <section className="section-warm py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span
              className="text-xs font-semibold tracking-[0.2em] uppercase text-[oklch(0.55_0.15_30)]"
              style={{ fontFamily: "var(--font-body)" }}
            >
              How We Operate
            </span>
            <h2
              className="mt-4 text-3xl sm:text-4xl font-bold tracking-tight"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Research → Blueprint →{" "}
              <span className="text-[oklch(0.55_0.15_30)]">Activation</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {operateSteps.map((step, i) => (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="relative"
              >
                <div className="bg-white rounded-xl p-8 border border-black/5 h-full shadow-sm">
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
                </div>
                {i < operateSteps.length - 1 && (
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
          WHY THIS WORKS — Only Time Buys Trust
      ═══════════════════════════════════════════════════ */}
      <section className="section-dark py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <span
                className="text-xs font-semibold tracking-[0.2em] uppercase text-[oklch(0.82_0.15_75)]"
                style={{ fontFamily: "var(--font-body)" }}
              >
                Why This Works
              </span>
              <h2
                className="mt-4 text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Only Time Buys{" "}
                <span className="text-[oklch(0.82_0.15_75)]">Trust.</span>
              </h2>
              <p
                className="mt-6 text-base text-white/60 leading-relaxed"
                style={{ fontFamily: "var(--font-body)" }}
              >
                25 years across 250+ global brands. You build credibility that compounds. That credibility closes BD. Accelerates pilots from 18 months to 90 days. Shortens deals from weeks to days.
              </p>
            </motion.div>

            <div className="space-y-5">
              {quotes.map((q, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15 }}
                  className="bg-white/[0.05] rounded-xl p-6 border border-white/[0.08]"
                >
                  <div className="flex items-start gap-4">
                    <Quote size={18} className="text-[oklch(0.82_0.15_75)] shrink-0 mt-1" />
                    <p
                      className="text-sm text-white/70 leading-relaxed italic"
                      style={{ fontFamily: "var(--font-body)" }}
                    >
                      "{q.text}"
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          COMPENSATION — Outcome-Aligned
      ═══════════════════════════════════════════════════ */}
      <section className="section-light py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
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
                We don't bill for time.{" "}
                <span className="text-[oklch(0.55_0.15_30)]">We align with outcomes.</span>
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-white rounded-xl p-8 border border-black/5 shadow-sm"
            >
              <div className="space-y-5">
                <div className="flex items-start gap-4">
                  <DollarSign size={20} className="text-[oklch(0.55_0.15_30)] shrink-0 mt-0.5" />
                  <div>
                    <div className="text-base font-bold mb-1" style={{ fontFamily: "var(--font-display)" }}>
                      $15K–$50K/month
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
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          THE EVOLUTION — Tokenized Structures
      ═══════════════════════════════════════════════════ */}
      <section className="section-warm py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
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
              The Evolution
            </span>
            <h2
              className="mt-4 text-3xl sm:text-4xl font-bold tracking-tight"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Same engine. <span className="text-[oklch(0.55_0.15_30)]">New asset classes.</span>
            </h2>
            <p
              className="mt-4 text-base text-[oklch(0.45_0.02_50)] max-w-3xl leading-relaxed"
              style={{ fontFamily: "var(--font-body)" }}
            >
              Same research-to-relationship engine now powers tokenized structures and impact-aligned capital. Different asset class. Same bull's-eye discipline.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-3 gap-6">
            {evolutionExamples.map((ex, i) => (
              <motion.div
                key={ex.label}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12 }}
                className="bg-white rounded-xl p-7 border border-black/5 shadow-sm hover:shadow-lg hover:shadow-black/5 transition-all duration-300"
              >
                <Sparkles size={20} className="text-[oklch(0.82_0.15_75)] mb-4" />
                <h3
                  className="text-base font-bold mb-2"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {ex.label}
                </h3>
                <p
                  className="text-sm text-[oklch(0.55_0.15_30)] font-semibold leading-relaxed"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  {ex.result}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          CTA — Tell Us What's Broken
      ═══════════════════════════════════════════════════ */}
      <section className="bg-[oklch(0.55_0.15_30)] py-20 sm:py-28">
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
              Tell Us What's Broken.
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
              Tell Us What's Broken <ArrowRight size={16} />
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
