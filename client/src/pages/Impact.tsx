/*
 * /impact — ImpactSoul: ESG & Impact Advisory
 * ALL CONTENT FROM: ramprate.com + content migration paste
 * Impact DNA™ 3-step process, outcomes, B Corp, services, blog posts.
 * ZERO fabrication.
 */
import { motion } from "framer-motion";
import { Link } from "wouter";
import PageLayout from "@/components/PageLayout";
import PageHero from "@/components/PageHero";
import { ArrowRight, Heart, Globe, Gem, Palette, Users, TrendingUp, Search, Stethoscope, RefreshCw, CheckCircle2 } from "lucide-react";

const services = [
  { icon: Gem, title: "Tokenize Assets", desc: "Turn cultural treasures, art, artifacts, and purpose-driven assets into powerful economic engines through tokenization — creating new revenue streams and global accessibility." },
  { icon: Heart, title: "Rally Impact Movements", desc: "Build communities around your cause. We design engagement models that turn passive supporters into active participants and economic stakeholders." },
  { icon: TrendingUp, title: "3× Revenue, Up to 10× Value", desc: "Our models are designed to multiply — not just sustain. We create economic structures where impact drives revenue and revenue amplifies impact." },
  { icon: Globe, title: "Global Brand Building", desc: "Transform your organization from a local operation into a globally recognized brand. At worst you get a fan club — at peak, a global movement." },
  { icon: Palette, title: "Art & Cultural Stewardship", desc: "Specialized advisory for NGOs and stewards of art and artifacts. We help you preserve, protect, and monetize cultural heritage through modern technology." },
  { icon: Users, title: "Community-Driven Economics", desc: "Design token economies and community structures where every participant has skin in the game — aligning incentives from donors to operators to beneficiaries." },
];

/* ── IMPACT DNA™ PROCESS — REAL from paste ── */
const dnaSteps = [
  {
    num: "01",
    icon: Search,
    title: "Discover",
    desc: "Engage team, clients, partners, investors, community. Map impact priorities. Identify conflicts between stated values and actual practices.",
    color: "oklch(0.55_0.15_30)",
  },
  {
    num: "02",
    icon: Stethoscope,
    title: "Diagnose",
    desc: "Find disconnects between vision and actions. Deep focus on supply chain and external perception. Are we aligned? Do we vote our values with our budget?",
    color: "oklch(0.50_0.12_40)",
  },
  {
    num: "03",
    icon: RefreshCw,
    title: "Realign",
    desc: "Build better teams. Buy from shared-values partners. Uplift unheard voices. Create structures where impact and revenue reinforce each other.",
    color: "oklch(0.45_0.10_50)",
  },
];

const dnaOutcomes = [
  "Better talent attracted",
  "Investor goals aligned",
  "Brand equity improved",
  "Morale & retention increased",
  "Closer partnerships",
  "Feel good about work every day",
];

const relatedPosts = [
  { title: "Energy as Impact", date: "August 15, 2023", url: "https://ramprate.com/energy-as-impact/", tag: "Energy" },
  { title: "Edge Data Center Provider Redivider Expands Advisory Board", date: "July 5, 2023", url: "https://ramprate.com/edge-data-center-provider-redivider-expands-advisory/", tag: "Advisory" },
];

export default function Impact() {
  return (
    <PageLayout>
      <PageHero
        sectionLabel="ImpactSoul — Since 2024"
        headline={
          <>
            Tokenize Assets to Rally{" "}
            <span className="text-[oklch(0.55_0.15_30)]">Impact Movements</span>
          </>
        }
        subCopy="Turn cultural treasures and purpose into powerful economic engines. For NGOs & Stewards of Art & Artifacts."
        stats={[
          { value: "Since", label: "2024" },
          { value: "For", label: "NGOs & Stewards of Art & Artifacts" },
          { value: "Comp", label: "7.5% of asset equity to launch" },
        ]}
      />

      {/* What is ImpactSoul */}
      <section className="relative section-warm overflow-hidden py-20 sm:py-28">
        <div className="glass-orb-rust w-[300px] h-[300px] -bottom-32 -right-32" />
        <div className="glass-orb-amber w-[180px] h-[180px] top-10 -left-20" />
        <div className="relative z-10 max-w-5xl mx-auto px-5 sm:px-8">
          <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[oklch(0.55_0.15_30)]" style={{ fontFamily: "var(--font-body)" }}>
            The Mission
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl font-bold tracking-tight" style={{ fontFamily: "var(--font-display)" }}>
            Millions for Impact. 3× Revenue. Up to 10× Value.
          </h2>
          <div className="mt-8 space-y-5 text-base text-[oklch(0.4_0.02_50)] leading-relaxed" style={{ fontFamily: "var(--font-body)" }}>
            <p>
              ImpactSoul exists at the intersection of purpose and economics. We help NGOs, cultural institutions, and impact-driven organizations transform their assets — art, artifacts, cultural heritage, environmental stewardship — into sustainable economic engines.
            </p>
            <p>
              Through tokenization, community building, and modern fundraising models, we create structures where doing good isn't just morally right — it's economically powerful. Impact and revenue aren't trade-offs — they're multipliers.
            </p>
          </div>
        </div>
      </section>

      {/* Impact DNA™ Process — REAL from paste */}
      <section className="relative section-light overflow-hidden py-20 sm:py-28">
        <div className="glass-orb-amber w-[280px] h-[280px] -bottom-32 -left-32" />
        <div className="glass-orb-rust w-[160px] h-[160px] top-20 -right-20" />
        <div className="relative z-10 max-w-5xl mx-auto px-5 sm:px-8">
          <div className="text-center mb-14">
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[oklch(0.55_0.15_30)]" style={{ fontFamily: "var(--font-body)" }}>
              Syzygy Methodology
            </span>
            <h2 className="mt-4 text-3xl sm:text-4xl font-bold tracking-tight" style={{ fontFamily: "var(--font-display)" }}>
              Impact DNA™
            </h2>
            <p className="mt-4 text-base text-[oklch(0.45_0.02_50)] max-w-2xl mx-auto leading-relaxed" style={{ fontFamily: "var(--font-body)" }}>
              A three-step process to align your organization's values with its actions — and turn that alignment into economic advantage.
            </p>
          </div>

          {/* 3 Steps */}
          <div className="grid md:grid-cols-3 gap-6 mb-14">
            {dnaSteps.map((step, i) => (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="bg-white rounded-xl p-7 border border-black/5 relative overflow-hidden"
              >
                <div className="absolute top-4 right-4 text-5xl font-black text-black/[0.04]" style={{ fontFamily: "var(--font-mono)" }}>
                  {step.num}
                </div>
                <div className="w-11 h-11 rounded-lg flex items-center justify-center mb-5" style={{ backgroundColor: `${step.color}` + "1a" }}>
                  <step.icon size={20} style={{ color: step.color }} />
                </div>
                <h3 className="text-xl font-bold mb-3" style={{ fontFamily: "var(--font-display)" }}>
                  {step.title}
                </h3>
                <p className="text-sm text-[oklch(0.45_0.02_50)] leading-relaxed" style={{ fontFamily: "var(--font-body)" }}>
                  {step.desc}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Outcomes */}
          <div className="bg-[oklch(0.97_0.01_80)] rounded-xl p-8 border border-black/5">
            <h3 className="text-lg font-bold mb-5" style={{ fontFamily: "var(--font-display)" }}>
              Outcomes
            </h3>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3">
              {dnaOutcomes.map((outcome) => (
                <div key={outcome} className="flex items-center gap-3">
                  <CheckCircle2 size={16} className="text-[oklch(0.55_0.15_30)] shrink-0" />
                  <span className="text-sm text-[oklch(0.4_0.02_50)]" style={{ fontFamily: "var(--font-body)" }}>{outcome}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* B Corp */}
      <section className="relative section-warm overflow-hidden py-16 sm:py-20">
        <div className="glass-orb-rust w-[300px] h-[300px] -bottom-32 -right-32" />
        <div className="glass-orb-amber w-[180px] h-[180px] top-10 -left-20" />
        <div className="relative z-10 max-w-5xl mx-auto px-5 sm:px-8">
          <div className="bg-white rounded-2xl p-8 sm:p-10 shadow-sm border border-black/5 flex flex-col sm:flex-row items-center gap-8">
            <div className="w-20 h-20 shrink-0 rounded-full border-4 border-[oklch(0.55_0.15_30)] flex items-center justify-center">
              <span className="text-3xl font-bold text-[oklch(0.55_0.15_30)]" style={{ fontFamily: "var(--font-display)" }}>B</span>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2" style={{ fontFamily: "var(--font-display)" }}>Certified B Corporation</h3>
              <p className="text-sm text-[oklch(0.45_0.02_50)] leading-relaxed" style={{ fontFamily: "var(--font-body)" }}>
                RampRate is a Certified B Corp — meeting the highest standards of verified social and environmental performance, public transparency, and legal accountability. We don't just advise on impact — we live it.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="relative section-light overflow-hidden py-20 sm:py-28">
        <div className="glass-orb-amber w-[280px] h-[280px] -bottom-32 -left-32" />
        <div className="glass-orb-rust w-[160px] h-[160px] top-20 -right-20" />
        <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight" style={{ fontFamily: "var(--font-display)" }}>
              How We Create <span className="text-[oklch(0.55_0.15_30)]">Impact</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s, i) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-[oklch(0.97_0.01_80)] rounded-xl p-7 border border-black/5 hover:shadow-md transition-shadow"
              >
                <div className="w-11 h-11 rounded-lg bg-[oklch(0.55_0.15_30)]/10 flex items-center justify-center mb-5">
                  <s.icon size={20} className="text-[oklch(0.55_0.15_30)]" />
                </div>
                <h3 className="text-lg font-bold mb-3" style={{ fontFamily: "var(--font-display)" }}>{s.title}</h3>
                <p className="text-sm text-[oklch(0.45_0.02_50)] leading-relaxed" style={{ fontFamily: "var(--font-body)" }}>{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Commitment */}
      <section className="relative section-dark overflow-hidden py-20 sm:py-28">
        <div className="glass-orb-blue w-[350px] h-[350px] -top-40 -right-40" />
        <div className="glass-orb-amber w-[200px] h-[200px] bottom-20 -left-20" />
        <div className="relative z-10 max-w-5xl mx-auto px-5 sm:px-8 text-center">
          <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[oklch(0.55_0.15_30)]" style={{ fontFamily: "var(--font-body)" }}>
            Our Commitment
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl font-bold text-white" style={{ fontFamily: "var(--font-display)" }}>
            A Fan Club at Worst. A Global Brand at Peak.
          </h2>
          <p className="mt-6 text-lg text-white/60 leading-relaxed max-w-2xl mx-auto" style={{ fontFamily: "var(--font-body)" }}>
            7.5% of asset equity to launch a movement. We don't charge upfront — we invest alongside you and earn when you succeed.
          </p>
          <div className="mt-12 grid sm:grid-cols-3 gap-6">
            {[
              { label: "Compensation", value: "7.5% of asset equity to launch a movement" },
              { label: "Commitment", value: "A fan club at worst; a global brand at peak" },
              { label: "Key Value", value: "Millions for impact · 3× revenue · up to 10× value" },
            ].map((item) => (
              <div key={item.label} className="bg-white/5 rounded-xl p-6 border border-white/10">
                <div className="text-xs text-white/40 uppercase tracking-wider mb-2" style={{ fontFamily: "var(--font-body)" }}>{item.label}</div>
                <div className="text-sm text-white/80 leading-relaxed" style={{ fontFamily: "var(--font-body)" }}>{item.value}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related Blog Posts */}
      <section className="relative section-warm overflow-hidden py-20 sm:py-28">
        <div className="glass-orb-rust w-[300px] h-[300px] -bottom-32 -right-32" />
        <div className="glass-orb-amber w-[180px] h-[180px] top-10 -left-20" />
        <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold mb-10" style={{ fontFamily: "var(--font-display)" }}>
            Impact <span className="text-[oklch(0.55_0.15_30)]">Insights</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {relatedPosts.map((post, i) => (
              <motion.a
                key={post.title}
                href={post.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="bg-white rounded-xl p-7 border border-black/5 hover:shadow-md transition-shadow group"
              >
                <span className="px-2 py-0.5 rounded-full bg-[oklch(0.55_0.15_30)]/10 text-[oklch(0.55_0.15_30)] text-[10px] font-medium">{post.tag}</span>
                <h3 className="mt-3 text-lg font-bold tracking-tight group-hover:text-[oklch(0.55_0.15_30)] transition-colors" style={{ fontFamily: "var(--font-display)" }}>
                  {post.title}
                </h3>
                <div className="mt-2 text-xs text-[oklch(0.5_0.02_50)]" style={{ fontFamily: "var(--font-body)" }}>{post.date}</div>
                <span className="inline-flex items-center gap-1 mt-4 text-xs font-semibold text-[oklch(0.55_0.15_30)]" style={{ fontFamily: "var(--font-body)" }}>
                  Read on ramprate.com <ArrowRight size={12} />
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
            Trust Us With What You Hate to Do
          </h2>
          <p className="text-white/80 text-base sm:text-lg leading-relaxed mb-8 max-w-2xl mx-auto" style={{ fontFamily: "var(--font-body)" }}>
            And focus on the change you want to create in the world.
          </p>
          <Link href="/connect" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-md text-sm font-semibold bg-white text-[oklch(0.35_0.1_30)] hover:bg-white/90 transition-all shadow-lg" style={{ fontFamily: "var(--font-body)" }}>
            Start a Conversation <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </PageLayout>
  );
}
