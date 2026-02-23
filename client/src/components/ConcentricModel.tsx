/**
 * ConcentricModel — "The Model" section
 * Interactive concentric rings: Core(5) → Board(10) → Bench(35+)
 * "We deploy time-dependent configurations. Principals stay. Advisors guide. Specialists rotate."
 */
import { useState } from "react";

const HERO_IMG = "https://private-us-east-1.manuscdn.com/sessionFile/m6kc1Tn353i2D6rxZBg8XB/sandbox/RDMiLgwSO48CurgyUQZAR1-img-2_1771880947000_na1fn_bmV0d29yay1wYXJ0aWNsZS12aXo.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvbTZrYzFUbjM1M2kyRDZyeFpCZzhYQi9zYW5kYm94L1JETWlMZ3dTTzQ4Q3VyZ3lVUVpBUjEtaW1nLTJfMTc3MTg4MDk0NzAwMF9uYTFmbl9ibVYwZDI5eWF5MXdZWEowYVdOc1pTMTJhWG8ucG5nP3gtb3NzLXByb2Nlc3M9aW1hZ2UvcmVzaXplLHdfMTkyMCxoXzE5MjAvZm9ybWF0LHdlYnAvcXVhbGl0eSxxXzgwIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzk4NzYxNjAwfX19XX0_&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=fYtp~hbP9CdZ~6AxPha0N7JDyAUNPG-~PeWfMzNoE-cucyTNqfxqEftm5D~vzQfR9pyCAGlek6RTBcnaP8urjqwpopouUOAXvxXUSRhRpr2vIYqlK9gScEC~NX4BoJ0QlwJEv~p4BPFKd~FmuFDDU5jOCKOreT5hfCd4fy3m7qiXUh9~frHtEkcAwzeGsCtdGeFmqZThlleZRTPM~sSZywBaJxkXkvT8tBZtJ8FmlkcJXGLs0JB74fDXn~ViPqzzb3dixEmAFBqzjn83F2IrLew4a29xzN0~NQeb4~kRl83UpTtp5iT9~5zSjXzmdZmgMDXQlENaVvBfv-HYYCOzHQ__";

const coreTeam = [
  { name: "Tony Greenberg", role: "CEO" },
  { name: "Alex Veytsel", role: "CSO" },
  { name: "Josh Bykowski", role: "Legal" },
  { name: "Rob Holmes", role: "Web3" },
  { name: "Jeff Alinsangan", role: "Ops" },
];

const boardAdvisors = [
  { name: "Stuart Newton", tag: "ex-Deloitte Blockchain" },
  { name: "Gulliver Smithers", tag: "ex-CTO Sony" },
  { name: "Purvee Kondal", tag: "VP Sephora" },
  { name: "Curt Hessler", tag: "ex-Treasury/Rhodes" },
  { name: "Barry Patmore", tag: "34yr Accenture" },
  { name: "Peter Gross", tag: "VP Bloom Energy" },
  { name: "Peter Hirshberg", tag: "ex-Apple $1B" },
  { name: "Joe Weinman", tag: "Cloudonomics" },
  { name: "Sandy Climan", tag: "ex-CAA/Universal" },
  { name: "Tyler Kolodney", tag: "ex-Orioles" },
];

const benchCapabilities = [
  "M&A Advisory", "Tokenomics", "Data Center", "Cloud Architecture",
  "ESG & Impact", "Due Diligence", "Network Design", "CDN Optimization",
  "Blockchain", "Capital Markets", "IP Strategy", "Regulatory",
];

const affiliations = ["Fortune 500", "Davos", "YPO", "Summit", "Hatch", "XPRIZE", "Aspen"];

type Ring = "core" | "board" | "bench";

export default function ConcentricModel() {
  const [activeRing, setActiveRing] = useState<Ring>("core");

  return (
    <section className="relative py-20 lg:py-28 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 mesh-gradient-1 opacity-50" />

      <div className="container relative z-10">
        {/* Section header */}
        <div className="text-center mb-12">
          <p className="text-xs font-mono uppercase tracking-[0.2em] text-coral mb-3">
            The Model
          </p>
          <h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Collective Intelligence
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto leading-relaxed" style={{ fontFamily: "var(--font-body)" }}>
            We deploy time-dependent configurations. Principals stay. Advisors guide. Specialists rotate.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Visual — concentric rings visualization */}
          <div className="relative flex items-center justify-center">
            <div className="relative w-[320px] h-[320px] sm:w-[400px] sm:h-[400px]">
              {/* Background image */}
              <img
                src={HERO_IMG}
                alt="Network visualization"
                className="absolute inset-0 w-full h-full object-cover rounded-full opacity-30"
                loading="lazy"
              />

              {/* Outer ring — Bench */}
              <button
                onClick={() => setActiveRing("bench")}
                className={`absolute inset-0 rounded-full border-2 transition-all duration-500 ${
                  activeRing === "bench"
                    ? "border-blue-400/40 shadow-[0_0_40px_rgba(59,130,246,0.15)]"
                    : "border-glass-border hover:border-blue-400/20"
                }`}
              />

              {/* Middle ring — Board */}
              <button
                onClick={() => setActiveRing("board")}
                className={`absolute inset-[18%] rounded-full border-2 transition-all duration-500 ${
                  activeRing === "board"
                    ? "border-amber/40 shadow-[0_0_30px_rgba(255,179,71,0.15)]"
                    : "border-glass-border hover:border-amber/20"
                }`}
              />

              {/* Core ring */}
              <button
                onClick={() => setActiveRing("core")}
                className={`absolute inset-[36%] rounded-full border-2 transition-all duration-500 ${
                  activeRing === "core"
                    ? "border-coral/50 shadow-[0_0_25px_rgba(255,107,53,0.2)] bg-coral/5"
                    : "border-glass-border hover:border-coral/30"
                }`}
              />

              {/* Center label */}
              <div className="absolute inset-[40%] flex items-center justify-center">
                <span className="text-xs font-mono text-coral font-semibold">
                  {activeRing === "core" ? "5" : activeRing === "board" ? "10" : "35+"}
                </span>
              </div>

              {/* Ring labels */}
              <span className="absolute top-2 left-1/2 -translate-x-1/2 text-[10px] font-mono text-blue-400/60 uppercase tracking-wider">
                Bench
              </span>
              <span className="absolute top-[20%] left-1/2 -translate-x-1/2 text-[10px] font-mono text-amber/60 uppercase tracking-wider">
                Board
              </span>
              <span className="absolute top-[38%] left-1/2 -translate-x-1/2 text-[10px] font-mono text-coral/80 uppercase tracking-wider">
                Core
              </span>
            </div>
          </div>

          {/* Info panel */}
          <div>
            {activeRing === "core" && (
              <div className="animate-fade-in-up">
                <h3 className="text-lg font-mono text-coral mb-4 tracking-wide">
                  Core Principals — 5
                </h3>
                <div className="space-y-3">
                  {coreTeam.map((m) => (
                    <div
                      key={m.name}
                      className="glass-card rounded-lg px-4 py-3 flex items-center justify-between"
                    >
                      <span className="text-sm font-medium text-white" style={{ fontFamily: "var(--font-body)" }}>
                        {m.name}
                      </span>
                      <span className="text-xs font-mono text-muted-foreground">
                        {m.role}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeRing === "board" && (
              <div className="animate-fade-in-up">
                <h3 className="text-lg font-mono text-amber mb-4 tracking-wide">
                  Board of Advisors — 10
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {boardAdvisors.map((m) => (
                    <div
                      key={m.name}
                      className="glass-card rounded-lg px-3 py-2.5"
                    >
                      <span className="text-sm font-medium text-white block" style={{ fontFamily: "var(--font-body)" }}>
                        {m.name}
                      </span>
                      <span className="text-[11px] font-mono text-muted-foreground">
                        {m.tag}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeRing === "bench" && (
              <div className="animate-fade-in-up">
                <h3 className="text-lg font-mono text-blue-400 mb-4 tracking-wide">
                  Specialist Bench — 35+
                </h3>
                <div className="flex flex-wrap gap-2 mb-6">
                  {benchCapabilities.map((cap) => (
                    <span
                      key={cap}
                      className="glass-card rounded-md px-3 py-1.5 text-xs font-mono text-foreground/70"
                    >
                      {cap}
                    </span>
                  ))}
                </div>
                <div className="flex flex-wrap gap-2">
                  {affiliations.map((a) => (
                    <span
                      key={a}
                      className="rounded-full px-3 py-1 text-[10px] font-mono uppercase tracking-wider text-amber/70 border border-amber/20"
                    >
                      {a}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
