/**
 * PracticeCards — 4 practice cards with distinct glow
 * Sourcing (blue) | Syzygy (green) | Stratum (purple) | ImpactSoul (coral)
 */
import { Link } from "wouter";

const PRACTICE_BG = "https://private-us-east-1.manuscdn.com/sessionFile/m6kc1Tn353i2D6rxZBg8XB/sandbox/RDMiLgwSO48CurgyUQZAR1-img-3_1771880950000_na1fn_cHJhY3RpY2UtY2FyZHMtYmc.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvbTZrYzFUbjM1M2kyRDZyeFpCZzhYQi9zYW5kYm94L1JETWlMZ3dTTzQ4Q3VyZ3lVUVpBUjEtaW1nLTNfMTc3MTg4MDk1MDAwMF9uYTFmbl9jSEpoWTNScFkyVXRZMkZ5WkhNdFltYy5wbmc~eC1vc3MtcHJvY2Vzcz1pbWFnZS9yZXNpemUsd18xOTIwLGhfMTkyMC9mb3JtYXQsd2VicC9xdWFsaXR5LHFfODAiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3OTg3NjE2MDB9fX1dfQ__&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=ktwhGvnOfCEON2QbT3XBn2YLpEsM4vwhMJl9Z2uUysFn6HzkmRcsSoosZsi8eFdsZ4tvHDipXxanB1UtcG5OgztHV~OKohOTMf8AC1IyQMH-iLqLAA9t5uHVvkASpNSK6elUMbt8bFPr882XDsCOpEiAq2q5cJ0EGQpXbBTUe5ObgFaGfoG3dJbdPkO4qBd1h5h9Mihvy9uZuYMUzS0vJctwAiVPmQ2fjjr3IL~vZ3-jAM2A9E-u9t2FBNGqggKK92KNC4YJUzuVwDT8UJSOQ0xcqW9cfKmiVeXzN8C94Fc9fn7kA7HhI0IKbL6ybO~pod0jYv21SIO06Oph8FjnYQ__";

const practices = [
  {
    name: "Sourcing",
    since: "2000",
    audience: "CTOs",
    tagline: "Stop overpaying.",
    comp: "% impact",
    href: "/sourcing",
    glowColor: "rgba(59, 130, 246, 0.15)",
    borderColor: "rgba(59, 130, 246, 0.3)",
    accentColor: "#3b82f6",
  },
  {
    name: "Syzygy",
    since: "2018",
    audience: "Founders",
    tagline: "We intervene.",
    comp: "Cash + equity",
    href: "/growth",
    glowColor: "rgba(16, 185, 129, 0.15)",
    borderColor: "rgba(16, 185, 129, 0.3)",
    accentColor: "#10b981",
  },
  {
    name: "Stratum",
    since: "2015",
    audience: "Web3 ↔ Enterprise",
    tagline: "Institutions align.",
    comp: "% value",
    href: "/web3",
    glowColor: "rgba(139, 92, 246, 0.15)",
    borderColor: "rgba(139, 92, 246, 0.3)",
    accentColor: "#8b5cf6",
  },
  {
    name: "ImpactSoul",
    since: "2024",
    audience: "NGOs",
    tagline: "Treasures → engines.",
    comp: "7.5% equity",
    href: "/impact",
    glowColor: "rgba(255, 107, 53, 0.15)",
    borderColor: "rgba(255, 107, 53, 0.3)",
    accentColor: "#FF6B35",
  },
];

export default function PracticeCards() {
  return (
    <section className="relative py-20 lg:py-28 overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-20"
        style={{ backgroundImage: `url(${PRACTICE_BG})` }}
      />
      <div className="absolute inset-0 bg-background/80" />

      <div className="container relative z-10">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="text-xs font-mono uppercase tracking-[0.2em] text-coral mb-3">
            Four Practices
          </p>
          <h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-white"
            style={{ fontFamily: "var(--font-display)" }}
          >
            One Ecosystem
          </h2>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {practices.map((p) => (
            <Link
              key={p.name}
              href={p.href}
              className="group block"
            >
              <div
                className="glass-card rounded-xl p-6 h-full transition-all duration-500 hover:translate-y-[-4px]"
                style={{
                  boxShadow: `0 0 0 rgba(0,0,0,0), inset 0 0 0 rgba(0,0,0,0)`,
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.boxShadow = `0 8px 40px ${p.glowColor}`;
                  (e.currentTarget as HTMLElement).style.borderColor = p.borderColor;
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.boxShadow = "none";
                  (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.1)";
                }}
              >
                {/* Name */}
                <h3
                  className="text-xl font-bold mb-1 transition-colors"
                  style={{ fontFamily: "var(--font-display)", color: p.accentColor }}
                >
                  {p.name}
                </h3>

                {/* Tagline */}
                <p className="text-sm text-white/90 mb-4 italic" style={{ fontFamily: "var(--font-display)" }}>
                  {p.tagline}
                </p>

                {/* Meta */}
                <div className="space-y-2 text-xs font-mono text-muted-foreground">
                  <div className="flex justify-between">
                    <span>Since</span>
                    <span className="text-foreground/80">{p.since}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>For</span>
                    <span className="text-foreground/80">{p.audience}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Comp</span>
                    <span className="text-foreground/80">{p.comp}</span>
                  </div>
                </div>

                {/* Arrow */}
                <div className="mt-4 pt-3 border-t border-glass-border">
                  <span
                    className="text-xs font-mono tracking-wider group-hover:tracking-widest transition-all"
                    style={{ color: p.accentColor }}
                  >
                    Explore →
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
