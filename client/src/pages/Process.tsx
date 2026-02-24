/*
 * HOW WE WORK — The FusionRamp Engagement Process
 * 7-step journey: The Call → Flow Circuit → Me/Way/Our → Assemble Team → 10 Genie Wishes → Top 25 Targets → Sign & Execute → 90-Day Checkpoint
 * From the fusionrampprocessv2.pptx deck.
 * Design: section-dark base with cyan/amber/green accents matching the deck's color language.
 */
import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "wouter";
import {
  Phone, Zap, User, Compass, Users, Sparkles, Target,
  Handshake, Rocket, Shield, ArrowRight, ChevronDown,
  ChevronUp, CheckCircle2
} from "lucide-react";
import PageLayout from "@/components/PageLayout";
import PageHero from "@/components/PageHero";

/* ── CIRCUIT ROLES ── */
const circuitRoles = [
  { name: "Spark", sub: "Ideation", color: "oklch(0.7 0.18 30)" },
  { name: "Amplifier", sub: "Promotion", color: "oklch(0.82 0.15 75)" },
  { name: "Filter", sub: "Refinement", color: "oklch(0.6 0.2 180)" },
  { name: "Ground", sub: "Execution", color: "oklch(0.55 0.2 150)" },
  { name: "Conductor", sub: "Orchestration", color: "oklch(0.6 0.2 280)" },
];

/* ── FRICTION POINTS ── */
const frictionPoints = [
  "Missing role on the team",
  "Wrong vertical market",
  "No execution after strategy",
  "Peripheral market > primary",
  "Broken handoffs between teams",
  "Stalled fundraise or BD pipeline",
];

/* ── ME / WAY / OUR ── */
const meWayOur = [
  {
    label: "ME",
    title: "Find Your Me",
    color: "oklch(0.6 0.2 280)",
    icon: User,
    points: [
      "What's your core frequency?",
      "What role do you play in the circuit?",
      "Are you the Spark running operations?",
      "Are you the Ground trying to ideate?",
      "Alignment starts with self-knowledge.",
    ],
  },
  {
    label: "WAY",
    title: "Find Your Way",
    color: "oklch(0.82 0.15 75)",
    icon: Compass,
    points: [
      "What's the right market? Right model?",
      "Stop chasing the big idea.",
      "Innovation management > big bets.",
      "Peripheral market may beat primary.",
      "The path reveals itself through data.",
    ],
  },
  {
    label: "OUR",
    title: "Find Your Our",
    color: "oklch(0.55 0.2 160)",
    icon: Users,
    points: [
      "'Our' lives inside the word 'Your.'",
      "The team. The relationships. The circuit.",
      "Who's missing? Who's miscast?",
      "Who needs to be added?",
      "The imperfect team gets fixed here.",
    ],
  },
];

/* ── 7-STEP TIMELINE ── */
const steps = [
  { num: "01", label: "The Call", icon: Phone },
  { num: "02", label: "Flow Circuit", icon: Zap },
  { num: "03", label: "Build Team", icon: Users },
  { num: "04", label: "10 Genie Wishes", icon: Sparkles },
  { num: "05", label: "Top 25 Targets", icon: Target },
  { num: "06", label: "Sign & Execute", icon: Handshake },
  { num: "07", label: "90-Day Proof", icon: Rocket },
];

/* ── SUMMARY TABLE ── */
const summaryRows = [
  {
    label: "What You Bring",
    text: "The problem. The urgency. Your 10 genie wishes — everything you need besides capital.",
  },
  {
    label: "What We Find",
    text: "Flow Circuit friction. Missing roles. Wrong market. Broken handoffs. The imperfect team. The real problem under the symptom.",
  },
  {
    label: "What We Bring",
    text: "25 years of relationships. $24B in transaction intelligence. A vertical mastermind. The Top 25 target list. Innovation process — not big ideas.",
  },
  {
    label: "Me → Way → Our",
    text: "Find your core frequency. Find the right path. Build the team around it. 'Our' lives inside 'Your.' Self-knowledge first.",
  },
  {
    label: "The Economics",
    text: "$15K–$50K/month. Equity-forward. Mastermind at ~20%. Performance accountability. Clawbacks. Historical: 20X value.",
  },
  {
    label: "The Guarantee",
    text: "90 days. Measurable results or you walk. No penalty. No lock-in. Never exercised in 25 years.",
  },
];

/* ── EXPANDABLE STEP CARD ── */
function StepCard({
  num,
  title,
  icon: Icon,
  children,
  accentColor = "oklch(0.55 0.2 190)",
}: {
  num: string;
  title: string;
  icon: React.ElementType;
  children: React.ReactNode;
  accentColor?: string;
}) {
  const [open, setOpen] = useState(false);
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      className="border border-white/[0.08] rounded-xl overflow-hidden bg-white/[0.03] hover:bg-white/[0.05] transition-colors"
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center gap-4 p-6 text-left"
      >
        <div
          className="w-12 h-12 rounded-lg flex items-center justify-center shrink-0"
          style={{ backgroundColor: `color-mix(in oklch, ${accentColor} 20%, transparent)` }}
        >
          <Icon size={22} style={{ color: accentColor }} />
        </div>
        <div className="flex-1 min-w-0">
          <span
            className="text-xs font-bold tracking-wider"
            style={{ color: accentColor, fontFamily: "var(--font-mono)" }}
          >
            {num}
          </span>
          <h3
            className="text-lg sm:text-xl font-bold text-white mt-0.5"
            style={{ fontFamily: "var(--font-display)" }}
          >
            {title}
          </h3>
        </div>
        <div className="text-white/30">
          {open ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
        </div>
      </button>
      {open && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="px-6 pb-6 text-white/60 text-sm leading-relaxed"
          style={{ fontFamily: "var(--font-body)" }}
        >
          {children}
        </motion.div>
      )}
    </motion.div>
  );
}

export default function Process() {
  return (
    <PageLayout>
      {/* ═══ HERO ═══ */}
      <PageHero
        sectionLabel="How We Work"
        headline={
          <>
            From First Call to{" "}
            <span className="text-[oklch(0.55_0.2_190)]">Closed Deals</span>{" "}
            in 90 Days.
          </>
        }
        subCopy="First you find your Me. Then your Way. Then your Our. 25 years. 250+ enterprises. It's never not worked."
        stats={[
          { value: "7", label: "Steps" },
          { value: "90", label: "Days to proof" },
          { value: "25", label: "Years refined" },
        ]}
      >
        {/* 3 hero buttons from the deck: FIND YOUR ME → FIND YOUR WAY → FIND YOUR OUR */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.9 }}
          className="mt-10 flex flex-wrap gap-4"
        >
          <a
            href="#me-way-our"
            className="group inline-flex items-center gap-3 px-6 py-3.5 rounded-lg border-2 border-[oklch(0.6_0.2_280)] bg-[oklch(0.6_0.2_280)]/10 hover:bg-[oklch(0.6_0.2_280)]/25 transition-all"
          >
            <User size={18} className="text-[oklch(0.6_0.2_280)]" />
            <span className="text-sm font-bold tracking-wider uppercase text-white" style={{ fontFamily: "var(--font-body)" }}>
              Find Your <span className="text-[oklch(0.6_0.2_280)]">Me</span>
            </span>
            <ArrowRight size={16} className="text-white/40 group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="#find-way"
            className="group inline-flex items-center gap-3 px-6 py-3.5 rounded-lg border-2 border-[oklch(0.82_0.15_75)] bg-[oklch(0.82_0.15_75)]/10 hover:bg-[oklch(0.82_0.15_75)]/25 transition-all"
          >
            <Compass size={18} className="text-[oklch(0.82_0.15_75)]" />
            <span className="text-sm font-bold tracking-wider uppercase text-white" style={{ fontFamily: "var(--font-body)" }}>
              Find Your <span className="text-[oklch(0.82_0.15_75)]">Way</span>
            </span>
            <ArrowRight size={16} className="text-white/40 group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="#find-our"
            className="group inline-flex items-center gap-3 px-6 py-3.5 rounded-lg border-2 border-[oklch(0.55_0.2_160)] bg-[oklch(0.55_0.2_160)]/10 hover:bg-[oklch(0.55_0.2_160)]/25 transition-all"
          >
            <Users size={18} className="text-[oklch(0.55_0.2_160)]" />
            <span className="text-sm font-bold tracking-wider uppercase text-white" style={{ fontFamily: "var(--font-body)" }}>
              Find Your <span className="text-[oklch(0.55_0.2_160)]">Our</span>
            </span>
            <ArrowRight size={16} className="text-white/40 group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>
      </PageHero>

      {/* ═══ 3-PHASE OVERVIEW: Me → Way → Our ═══ */}
      <section id="me-way-our" className="relative section-dark py-20 sm:py-28 scroll-mt-20 overflow-hidden">
        <div className="glass-orb glass-orb-blue w-[350px] h-[350px] -top-40 -right-40" />
        <div className="glass-orb glass-orb-amber w-[200px] h-[200px] bottom-20 -left-20" />
        <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span
              className="text-xs tracking-[0.3em] uppercase text-white/40 mb-4 block"
              style={{ fontFamily: "var(--font-body)" }}
            >
              The Journey
            </span>
            <h2
              className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Before We Fix the Business,{" "}
              <span className="text-[oklch(0.55_0.2_190)]">We Fix the Signal.</span>
            </h2>
            <p
              className="mt-5 text-base sm:text-lg text-white/50 max-w-2xl mx-auto"
              style={{ fontFamily: "var(--font-body)" }}
            >
              Sometimes you have to look inside yourself first.
            </p>
          </motion.div>

          {/* Me / Way / Our cards */}
          <div className="grid md:grid-cols-3 gap-6">
            {meWayOur.map((item, i) => (
              <motion.div
                key={item.label}
                id={item.label === "ME" ? "find-me" : item.label === "WAY" ? "find-way" : "find-our"}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="glass-card p-7 overflow-hidden scroll-mt-24"
              >
                {/* Top accent bar */}
                <div
                  className="absolute top-0 left-0 right-0 h-1"
                  style={{ backgroundColor: item.color }}
                />

                <div className="flex items-center justify-between mb-6">
                  <h3
                    className="text-4xl font-bold"
                    style={{ color: item.color, fontFamily: "var(--font-display)" }}
                  >
                    {item.label}
                  </h3>
                  <item.icon size={28} className="text-white/20" />
                </div>

                <h4
                  className="text-sm font-bold uppercase tracking-wider text-white mb-5"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  {item.title}
                </h4>

                <ul className="space-y-3">
                  {item.points.map((p, j) => (
                    <li
                      key={j}
                      className="flex items-start gap-2.5 text-sm text-white/60"
                      style={{ fontFamily: "var(--font-body)" }}
                    >
                      <span className="text-white/20 mt-0.5">—</span>
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          {/* Bottom quote */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="mt-10 p-5 rounded-lg border-l-4 border-[oklch(0.82_0.15_75)] bg-white/[0.03]"
          >
            <p
              className="text-sm sm:text-base text-white/70 italic"
              style={{ fontFamily: "var(--font-body)" }}
            >
              Our role: find the friction, connect the dots, fix the team, build the process. Not the big idea — the right idea.
            </p>
          </motion.div>

          {/* Footer line */}
          <p
            className="mt-6 text-center text-xs text-white/30 tracking-widest"
            style={{ fontFamily: "var(--font-mono)" }}
          >
            ME → WAY → OUR &nbsp;|&nbsp; The word YOUR contains OUR.
          </p>
        </div>
      </section>

      {/* ═══ DIAGNOSE ═══ */}
      <section id="flow-circuit" className="relative section-warm py-20 sm:py-28 scroll-mt-20 overflow-hidden">
        <div className="glass-orb glass-orb-rust w-[300px] h-[300px] -bottom-32 -right-32" />
        <div className="glass-orb glass-orb-amber w-[180px] h-[180px] top-10 -left-20" />
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
              Phase 1 — Diagnose
            </span>
            <h2
              className="mt-4 text-3xl sm:text-4xl md:text-5xl font-bold leading-tight tracking-tight"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Find the real problem —{" "}
              <span className="text-[oklch(0.55_0.15_30)]">not the symptom.</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Step 01: The Call */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass-card-warm p-7"
            >
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-lg bg-[oklch(0.55_0.2_190)]/10 flex items-center justify-center">
                  <Phone size={20} className="text-[oklch(0.55_0.2_190)]" />
                </div>
                <div>
                  <span className="text-xs font-bold tracking-wider text-[oklch(0.55_0.2_190)]" style={{ fontFamily: "var(--font-mono)" }}>01</span>
                  <h3 className="text-lg font-bold" style={{ fontFamily: "var(--font-display)" }}>The Call</h3>
                </div>
              </div>
              <p className="text-sm text-[oklch(0.35_0.02_50)] leading-relaxed mb-4" style={{ fontFamily: "var(--font-body)" }}>
                You tell us what's broken. We listen. We diagnose in 48 hours.
              </p>
              <p className="text-sm text-[oklch(0.45_0.02_50)] leading-relaxed" style={{ fontFamily: "var(--font-body)" }}>
                Could be a missing role. A wrong market. A broken handoff. A stalled fundraise. Whatever the problem, there's always a solution.
              </p>
            </motion.div>

            {/* Step 02: Flow Circuit Assessment */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="glass-card-warm p-7"
            >
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-lg bg-[oklch(0.82_0.15_75)]/10 flex items-center justify-center">
                  <Zap size={20} className="text-[oklch(0.82_0.15_75)]" />
                </div>
                <div>
                  <span className="text-xs font-bold tracking-wider text-[oklch(0.82_0.15_75)]" style={{ fontFamily: "var(--font-mono)" }}>02</span>
                  <h3 className="text-lg font-bold" style={{ fontFamily: "var(--font-display)" }}>Flow Circuit Assessment</h3>
                </div>
              </div>
              <p className="text-sm text-[oklch(0.35_0.02_50)] leading-relaxed mb-4" style={{ fontFamily: "var(--font-body)" }}>
                Map your team's invisible architecture. Who's the Spark? Amplifier? Filter? Ground?
              </p>
              <p className="text-sm text-[oklch(0.45_0.02_50)] leading-relaxed" style={{ fontFamily: "var(--font-body)" }}>
                Identify where energy is blocked. Calculate friction cost. See the team you have vs. the team you need.
              </p>
            </motion.div>
          </div>

          {/* Circuit Roles */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-10"
          >
            <h4
              className="text-xs font-bold tracking-[0.2em] uppercase text-[oklch(0.45_0.02_50)] mb-5"
              style={{ fontFamily: "var(--font-body)" }}
            >
              The Circuit Roles
            </h4>
            <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
              {circuitRoles.map((role) => (
                <div
                  key={role.name}
                  className="rounded-lg p-4 text-center"
                  style={{ backgroundColor: `color-mix(in oklch, ${role.color} 12%, oklch(0.97 0.01 80))` }}
                >
                  <div className="text-sm font-bold" style={{ color: role.color, fontFamily: "var(--font-display)" }}>
                    {role.name}
                  </div>
                  <div className="text-xs text-[oklch(0.45_0.02_50)] mt-0.5" style={{ fontFamily: "var(--font-body)" }}>
                    {role.sub}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Common Friction Points */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-10"
          >
            <h4
              className="text-xs font-bold tracking-[0.2em] uppercase text-[oklch(0.45_0.02_50)] mb-4"
              style={{ fontFamily: "var(--font-body)" }}
            >
              Common Friction Points We Find
            </h4>
            <div className="grid sm:grid-cols-2 gap-3">
              {frictionPoints.map((fp) => (
                <div key={fp} className="flex items-center gap-2.5 text-sm text-[oklch(0.35_0.02_50)]" style={{ fontFamily: "var(--font-body)" }}>
                  <CheckCircle2 size={14} className="text-[oklch(0.55_0.15_30)] shrink-0" />
                  <span>{fp}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ═══ ACTIVATE ═══ */}
      <section className="relative section-dark py-20 sm:py-28 overflow-hidden">
        <div className="glass-orb glass-orb-blue w-[280px] h-[280px] top-10 -right-32" />
        <div className="glass-orb glass-orb-rust w-[200px] h-[200px] -bottom-20 left-10" />
        <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-14"
          >
            <span
              className="text-xs tracking-[0.3em] uppercase text-white/40 mb-4 block"
              style={{ fontFamily: "var(--font-body)" }}
            >
              Phase 2 — Activate
            </span>
            <h2
              className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Build the team. Name the wishes.{" "}
              <span className="text-[oklch(0.55_0.2_190)]">Set the targets.</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {/* 03 Assemble the Team */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass-card p-7"
            >
              <div className="flex items-center justify-between mb-5">
                <span className="text-xs font-bold tracking-wider text-[oklch(0.55_0.2_190)]" style={{ fontFamily: "var(--font-mono)" }}>03</span>
                <Users size={22} className="text-white/20" />
              </div>
              <h3 className="text-lg font-bold text-white mb-4" style={{ fontFamily: "var(--font-display)" }}>
                Assemble the Team
              </h3>
              <p className="text-sm text-white/60 leading-relaxed mb-4" style={{ fontFamily: "var(--font-body)" }}>
                One vertical-specific mastermind contracted at ~20% of our fee. Principals + specialist.
              </p>
              <p className="text-sm text-white/50 leading-relaxed" style={{ fontFamily: "var(--font-body)" }}>
                If the Flow Circuit found a missing role, we fill it. Missing Spark? We bring one. No Ground? We fix it.
              </p>
            </motion.div>

            {/* 04 10 Genie Wishes */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="glass-card p-7"
            >
              <div className="flex items-center justify-between mb-5">
                <span className="text-xs font-bold tracking-wider text-[oklch(0.55_0.2_190)]" style={{ fontFamily: "var(--font-mono)" }}>04</span>
                <Sparkles size={22} className="text-white/20" />
              </div>
              <h3 className="text-lg font-bold text-white mb-4" style={{ fontFamily: "var(--font-display)" }}>
                10 Genie Wishes
              </h3>
              <p className="text-sm text-white/60 leading-relaxed mb-4" style={{ fontFamily: "var(--font-body)" }}>
                What do you need besides money? Every company needs capital — that's not the answer. The answer is making you attractive TO capital.
              </p>
              <p className="text-sm text-white/50 leading-relaxed" style={{ fontFamily: "var(--font-body)" }}>
                We ask for everything. Then we build the hit list.
              </p>
            </motion.div>

            {/* 05 Top 25 Targets */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="glass-card p-7"
            >
              <div className="flex items-center justify-between mb-5">
                <span className="text-xs font-bold tracking-wider text-[oklch(0.55_0.2_190)]" style={{ fontFamily: "var(--font-mono)" }}>05</span>
                <Target size={22} className="text-white/20" />
              </div>
              <h3 className="text-lg font-bold text-white mb-4" style={{ fontFamily: "var(--font-display)" }}>
                Top 25 Targets
              </h3>
              <p className="text-sm text-white/60 leading-relaxed mb-4" style={{ fontFamily: "var(--font-body)" }}>
                We identify the 25 highest-probability BD targets from our network. Bull's-eye introductions only. No spray and pray.
              </p>
              <p className="text-sm text-white/50 leading-relaxed" style={{ fontFamily: "var(--font-body)" }}>
                25 years of trust opens doors that cold outreach never will.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══ EXECUTE & DELIVER ═══ */}
      <section className="relative section-warm py-20 sm:py-28 overflow-hidden">
        <div className="glass-orb glass-orb-amber w-[300px] h-[300px] -top-32 -left-32" />
        <div className="glass-orb glass-orb-rust w-[180px] h-[180px] bottom-20 right-10" />
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
              Phase 3 — Execute & Deliver
            </span>
            <h2
              className="mt-4 text-3xl sm:text-4xl md:text-5xl font-bold leading-tight tracking-tight"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Process over inspiration.{" "}
              <span className="text-[oklch(0.55_0.15_30)]">Execution over strategy.</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {/* 06 Sign & Execute */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass-card-warm p-7"
            >
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-lg bg-[oklch(0.55_0.2_190)]/10 flex items-center justify-center">
                  <Handshake size={20} className="text-[oklch(0.55_0.2_190)]" />
                </div>
                <div>
                  <span className="text-xs font-bold tracking-wider text-[oklch(0.55_0.2_190)]" style={{ fontFamily: "var(--font-mono)" }}>06</span>
                  <h3 className="text-lg font-bold" style={{ fontFamily: "var(--font-display)" }}>Sign & Execute</h3>
                </div>
              </div>
              <p className="text-sm text-[oklch(0.35_0.02_50)] leading-relaxed mb-4" style={{ fontFamily: "var(--font-body)" }}>
                We go live. Introductions. Negotiations. Deals closed. Principals on every call. Weekly progress reports.
              </p>
              <p className="text-sm text-[oklch(0.45_0.02_50)] leading-relaxed" style={{ fontFamily: "var(--font-body)" }}>
                Innovation management — not big bets. We test, iterate, close. Process over inspiration. Execution over strategy.
              </p>
            </motion.div>

            {/* 07 90-Day Checkpoint */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="glass-card-warm p-7"
            >
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-lg bg-[oklch(0.55_0.2_160)]/10 flex items-center justify-center">
                  <Rocket size={20} className="text-[oklch(0.55_0.2_160)]" />
                </div>
                <div>
                  <span className="text-xs font-bold tracking-wider text-[oklch(0.55_0.2_160)]" style={{ fontFamily: "var(--font-mono)" }}>07</span>
                  <h3 className="text-lg font-bold" style={{ fontFamily: "var(--font-display)" }}>90-Day Checkpoint</h3>
                </div>
              </div>
              <p className="text-sm text-[oklch(0.35_0.02_50)] leading-relaxed mb-4" style={{ fontFamily: "var(--font-body)" }}>
                If we haven't delivered measurable results in 90 days, you can walk. No penalty. No hard feelings. No lock-in.
              </p>
              <p className="text-sm text-[oklch(0.45_0.02_50)] leading-relaxed font-medium" style={{ fontFamily: "var(--font-body)" }}>
                In 25 years, no one has ever exercised this option.
              </p>
            </motion.div>
          </div>

          {/* The Guarantee callout */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-10 flex items-center gap-4 p-5 rounded-xl bg-[oklch(0.82_0.15_75)]/10 border border-[oklch(0.82_0.15_75)]/20"
          >
            <Shield size={28} className="text-[oklch(0.82_0.15_75)] shrink-0" />
            <p className="text-sm sm:text-base font-semibold text-[oklch(0.25_0.03_50)]" style={{ fontFamily: "var(--font-body)" }}>
              <span className="text-[oklch(0.82_0.15_75)] uppercase tracking-wider text-xs mr-2" style={{ fontFamily: "var(--font-mono)" }}>The Guarantee:</span>
              90 days. If we don't deliver, you walk. It's never happened in 25 years.
            </p>
          </motion.div>

          {/* The Economics */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mt-6"
          >
            <p className="text-xs font-bold tracking-[0.2em] uppercase text-[oklch(0.55_0.15_30)] mb-3" style={{ fontFamily: "var(--font-body)" }}>
              The Economics
            </p>
            <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-[oklch(0.35_0.02_50)]" style={{ fontFamily: "var(--font-body)" }}>
              <span>$15K–$50K/month</span>
              <span className="text-[oklch(0.7_0.02_50)]">·</span>
              <span>Equity-forward available</span>
              <span className="text-[oklch(0.7_0.02_50)]">·</span>
              <span>Vertical mastermind ~20% of fee</span>
              <span className="text-[oklch(0.7_0.02_50)]">·</span>
              <span>Clawbacks</span>
              <span className="text-[oklch(0.7_0.02_50)]">·</span>
              <span>Historical: 20X multiplier</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ═══ THE COMPLETE MAP ═══ */}
      <section className="relative section-dark py-20 sm:py-28 overflow-hidden">
        <div className="glass-orb glass-orb-amber w-[350px] h-[350px] -bottom-40 -right-40" />
        <div className="glass-orb glass-orb-blue w-[200px] h-[200px] top-20 -left-20" />
        <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <h2
              className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight"
              style={{ fontFamily: "var(--font-display)" }}
            >
              The Complete Map
            </h2>
          </motion.div>

          {/* 7-step timeline */}
          <div className="flex flex-wrap justify-center gap-3 sm:gap-1 mb-14">
            {steps.map((step, i) => (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="flex items-center"
              >
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[oklch(0.55_0.2_190)] flex items-center justify-center text-white font-bold text-sm" style={{ fontFamily: "var(--font-mono)" }}>
                    {step.num}
                  </div>
                  <span className="mt-2 text-[10px] sm:text-xs text-white/50 text-center uppercase tracking-wider max-w-[80px]" style={{ fontFamily: "var(--font-body)" }}>
                    {step.label}
                  </span>
                </div>
                {i < steps.length - 1 && (
                  <div className="hidden sm:block w-8 md:w-12 h-px bg-[oklch(0.55_0.2_190)]/40 mt-[-16px]" />
                )}
              </motion.div>
            ))}
          </div>

          {/* Summary table */}
          <div className="space-y-3">
            {summaryRows.map((row, i) => (
              <motion.div
                key={row.label}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="glass-card flex flex-col sm:flex-row gap-4 sm:gap-8 p-5"
              >
                <div className="sm:w-44 shrink-0">
                  <span
                    className="text-xs font-bold uppercase tracking-wider text-[oklch(0.55_0.2_190)]"
                    style={{ fontFamily: "var(--font-body)" }}
                  >
                    {row.label}
                  </span>
                </div>
                <p
                  className="text-sm text-white/60 leading-relaxed"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  {row.text}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ CTA ═══ */}
      <section className="relative py-24 sm:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[oklch(0.45_0.22_260)] to-[oklch(0.35_0.18_280)]" />
        <div className="relative z-10 max-w-3xl mx-auto px-5 sm:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2
              className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Tell Us What's Broken.
            </h2>
            <p
              className="mt-6 text-base sm:text-lg text-white/70 max-w-xl mx-auto"
              style={{ fontFamily: "var(--font-body)" }}
            >
              Principal responds within 24 hours. No associates. No filters. No intake maze.
            </p>
            <div className="mt-10">
              <Link
                href="/connect"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-md text-sm sm:text-base font-semibold bg-white text-[oklch(0.25_0.15_260)] hover:bg-white/90 transition-all shadow-lg"
                style={{ fontFamily: "var(--font-body)" }}
              >
                Tell Us What's Broken
                <ArrowRight size={18} />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </PageLayout>
  );
}
