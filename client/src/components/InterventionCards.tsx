/**
 * InterventionCards — "Intervention." section
 * 6 glassmorphism cards: Infrastructure Optimization · Vendor Negotiation · Strategic Sourcing · Network Activation · Risk & Compliance · Due Diligence
 * Sub: "We don't deliver reports. We deliver outcomes."
 * 3-step: Ingest→Roadmap→Implement
 */
import { Shield, Handshake, Search, Network, AlertTriangle, FileCheck } from "lucide-react";

const interventions = [
  {
    icon: Search,
    title: "Infrastructure Optimization",
    desc: "Audit, benchmark, and restructure your technology stack for maximum efficiency.",
  },
  {
    icon: Handshake,
    title: "Vendor Negotiation",
    desc: "Leverage $24B+ in market intelligence to secure terms no single buyer can achieve.",
  },
  {
    icon: Shield,
    title: "Strategic Sourcing",
    desc: "315-variable analysis across 350+ vendors to find the precise fit for your needs.",
  },
  {
    icon: Network,
    title: "Network Activation",
    desc: "Unlock connections across Fortune 500, Davos, YPO, and our global advisory network.",
  },
  {
    icon: AlertTriangle,
    title: "Risk & Compliance",
    desc: "Navigate regulatory landscapes, ESG requirements, and operational risk with precision.",
  },
  {
    icon: FileCheck,
    title: "Due Diligence",
    desc: "Deep-dive analysis for M&A, partnerships, and strategic investments.",
  },
];

const steps = [
  { num: "01", label: "Ingest", desc: "We absorb your landscape" },
  { num: "02", label: "Roadmap", desc: "We map the intervention" },
  { num: "03", label: "Implement", desc: "We deliver the outcome" },
];

export default function InterventionCards() {
  return (
    <section className="relative py-20 lg:py-28">
      <div className="absolute inset-0 mesh-gradient-2 opacity-40" />

      <div className="container relative z-10">
        {/* Header */}
        <div className="mb-14">
          <p className="text-xs font-mono uppercase tracking-[0.2em] text-coral mb-3">
            Intervention
          </p>
          <h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 max-w-2xl"
            style={{ fontFamily: "var(--font-display)" }}
          >
            We don't deliver{" "}
            <span className="text-muted-foreground">reports.</span>
            <br />
            We deliver{" "}
            <span className="text-coral">outcomes.</span>
          </h2>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-16">
          {interventions.map((item, i) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="glass-card rounded-xl p-6 group hover:translate-y-[-2px] transition-all duration-300"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <Icon
                  className="w-8 h-8 text-coral/70 mb-4 group-hover:text-coral transition-colors"
                  strokeWidth={1.5}
                />
                <h3
                  className="text-base font-semibold text-white mb-2"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* 3-step process */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {steps.map((step, i) => (
            <div key={step.num} className="flex items-start gap-4">
              <span className="text-3xl font-mono font-bold text-coral/30">
                {step.num}
              </span>
              <div>
                <h4 className="text-sm font-semibold text-white mb-1" style={{ fontFamily: "var(--font-body)" }}>
                  {step.label}
                </h4>
                <p className="text-sm text-muted-foreground">{step.desc}</p>
              </div>
              {i < steps.length - 1 && (
                <span className="hidden md:block text-coral/30 text-xl ml-auto self-center">→</span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
