import { useState, useEffect, useRef, useCallback, useMemo } from "react";
import { useLocation } from "wouter";
import { Search, X, ArrowRight, FileText, Globe, BookOpen, TrendingUp } from "lucide-react";

interface SearchItem {
  title: string;
  path: string;
  type: "page" | "blog" | "practice";
  description?: string;
  keywords?: string;
}

const SITE_INDEX: SearchItem[] = [
  // Pages
  { title: "Home", path: "/", type: "page", description: "Where Relationships Become Revenue" },
  { title: "Process — Flow Circuit", path: "/process", type: "page", description: "How we operate: research, blueprint, activation", keywords: "methodology steps how it works" },
  { title: "Proof — Case Results", path: "/proof", type: "page", description: "Testimonials, case studies, NDA references", keywords: "testimonials clients results" },
  { title: "About — Team & Advisors", path: "/about", type: "page", description: "25 years of principals, not pyramids", keywords: "team people leadership tony greenberg" },
  { title: "Blog — Thought Leadership", path: "/blog", type: "page", description: "48 articles with credibility grading", keywords: "articles writing posts" },
  { title: "Thinking — Long-Form Analysis", path: "/thinking", type: "page", description: "Deep dives and strategic frameworks" },
  { title: "Connect — Tell Us What's Broken", path: "/connect", type: "page", description: "Contact form for enterprise inquiries", keywords: "contact form reach out" },
  { title: "Privacy Policy", path: "/privacy", type: "page", description: "How we handle your data" },
  { title: "Terms of Service", path: "/terms", type: "page", description: "Terms governing use of this website" },
  { title: "Values — Consciousness-Aligned Capital", path: "/values", type: "page", description: "Regenerative business philosophy and B Corp", keywords: "ESG regenerative b corp values mission" },
  { title: "Practices — Four Brands, One Mission", path: "/practices", type: "page", description: "RampRate, Syzygy, Stratum, ImpactSoul — all practices overview", keywords: "services brands divisions" },
  // Practices
  { title: "Sourcing — Enterprise IT Advisory", path: "/sourcing", type: "practice", description: "IT sourcing intelligence, vendor negotiation, SPY Index", keywords: "data center colocation cloud hosting telecom network infrastructure procurement vendor negotiation CIO enterprise IT sourcing" },
  { title: "Syzygy — Growth Strategy", path: "/growth", type: "practice", description: "Founder advisory, GTM, revenue acceleration", keywords: "startup founder growth GTM go to market revenue strategy scaling" },
  { title: "Stratum — Web3 & Blockchain", path: "/web3", type: "practice", description: "Token design, DAO governance, decentralized infrastructure", keywords: "blockchain crypto token DAO web3 decentralized DeFi" },
  { title: "ImpactSoul — Impact Consulting", path: "/impact", type: "practice", description: "ESG, B Corp, regenerative projects, grant management", keywords: "impact ESG sustainability B Corp grants NGO regenerative social" },
  // Blog posts
  { title: "Patience in the AI Infrastructure Gold Rush", path: "/blog", type: "blog", description: "The second mouse gets the cheese — AI infrastructure oversupply", keywords: "AI data center infrastructure oversupply" },
  { title: "Republic's Mirror Tokens — SpaceX and Beyond", path: "/blog", type: "blog", description: "Tokenized private equity and democratized access", keywords: "tokenization SpaceX private equity" },
  { title: "UNI Token Price Surge — Governance", path: "/blog", type: "blog", description: "DeFi governance and the UNI fee switch proposal", keywords: "DeFi Uniswap governance token" },
  { title: "TonyG Here — Data Center World Return", path: "/blog", type: "blog", description: "Enterprise infrastructure and sourcing intelligence", keywords: "data center sourcing conference" },
  { title: "The Need for Burning Man to Convert into a DAO", path: "/blog", type: "blog", description: "Festival governance and DAO-based event management", keywords: "DAO Burning Man governance" },
  { title: "Energy as Impact — Redivider", path: "/blog", type: "blog", description: "Sustainable edge data centers and ESG infrastructure", keywords: "edge data center sustainability energy" },
  { title: "Edge Data Center Provider Redivider Expands Advisory", path: "/blog", type: "blog", description: "Advisory board expansion for edge infrastructure", keywords: "edge data center advisory" },
  { title: "RampRate Works with DevxDAO and XPRIZE", path: "/blog", type: "blog", description: "€4M+ grant for decentralized development", keywords: "DAO XPRIZE grant blockchain" },
  { title: "RampRate Achieves B Corp Certification", path: "/blog", type: "blog", description: "Certified B Corporation — profit meets purpose", keywords: "B Corp certification impact" },
  { title: "World Economic Forum: DAVOS 2022", path: "/blog", type: "blog", description: "Insights from Davos on global technology trends", keywords: "Davos WEF global trends" },
  { title: "Enterprise Blockchain: Can Big Business Co-opt a Threat?", path: "/blog", type: "blog", description: "Blockchain adoption in enterprise environments", keywords: "enterprise blockchain adoption" },
  { title: "From Supply Chain to the Blockchain", path: "/blog", type: "blog", description: "Heal the body, mind, and earth through blockchain", keywords: "supply chain blockchain" },
  { title: "The Ball and Blockchain — Obstacles", path: "/blog", type: "blog", description: "Obstacles to blockchain's world-changing trajectory", keywords: "blockchain obstacles challenges" },
  { title: "What Solutions Are Best Built with Blockchain — Or NOT", path: "/blog", type: "blog", description: "Framework for blockchain use case evaluation", keywords: "blockchain use cases framework" },
  { title: "Historical Perspective on Blockchain", path: "/blog", type: "blog", description: "Blockchain's evolution and future trajectory", keywords: "blockchain history evolution" },
  { title: "Is There Such a Thing as Price Gouging in IT?", path: "/blog", type: "blog", description: "IT pricing transparency and market dynamics", keywords: "IT pricing gouging transparency" },
  { title: "The Myth of the RFP for Everything at Half Price", path: "/blog", type: "blog", description: "Why RFPs often fail to deliver real value", keywords: "RFP procurement sourcing" },
  { title: "Smoking Gun Questions for Your IT Sourcing Broker", path: "/blog", type: "blog", description: "Due diligence questions for sourcing advisors", keywords: "sourcing broker due diligence" },
  { title: "The Right Tools to Make the Right Decisions", path: "/blog", type: "blog", description: "Decision frameworks for enterprise technology", keywords: "decision framework enterprise" },
  { title: "IT Buyers Say 'We Are OK.' Are You Sure?", path: "/blog", type: "blog", description: "Hidden risks in IT procurement complacency", keywords: "IT procurement risk" },
  { title: "How Fast-Growth Companies Are Most Likely to Fall", path: "/blog", type: "blog", description: "Growth traps and scaling failures", keywords: "growth scaling failure startup" },
  { title: "The CIO's Guide to Smarter Vendor Negotiation", path: "/blog", type: "blog", description: "Negotiation strategies for enterprise IT leaders", keywords: "CIO vendor negotiation enterprise" },
  { title: "Would You Hire Someone Who Led a Rebellion?", path: "/blog", type: "blog", description: "Leadership, disruption, and unconventional talent", keywords: "leadership hiring talent" },
  { title: "Marc Andreessen Rebuttal 2020", path: "/blog", type: "blog", description: "Response to 'It's Time to Build' — ethics in tech", keywords: "Andreessen build ethics" },
  { title: "Save the Entrepreneur — Big Business Kills Startups", path: "/blog", type: "blog", description: "Acquisition graveyard and killer acquisitions", keywords: "startup acquisition entrepreneur" },
  { title: "Mastering Human and Business Development", path: "/blog", type: "blog", description: "Relationship-first business development", keywords: "business development relationships" },
  { title: "The SPY Index — 150K+ Data Points", path: "/blog", type: "blog", description: "Supplier Performance Yield across 350+ vendors", keywords: "SPY Index data supplier performance" },
  { title: "It's Time to Uber and Airbnb Telecommunications", path: "/blog", type: "blog", description: "Telecom disruption through platform models", keywords: "telecom disruption platform" },
  { title: "Hiding Fees in the Transparent Age", path: "/blog", type: "blog", description: "Opacity as liability in enterprise pricing", keywords: "fees transparency pricing" },
  { title: "PERI Finance Announces IEO on Gate.io", path: "/blog", type: "blog", description: "Decentralized derivatives and synthetic assets", keywords: "DeFi derivatives IEO" },
  { title: "Your Words Are Hammers", path: "/blog", type: "blog", description: "Communication as an instrument of force", keywords: "communication leadership" },
  { title: "Executives from Tech Giants Join Syntropy", path: "/blog", type: "blog", description: "Enterprise talent scaling Web3 infrastructure", keywords: "Syntropy Web3 enterprise talent" },
  { title: "New Internet — The Real-World Pied Piper", path: "/blog", type: "blog", description: "Syntropy and decentralized networking", keywords: "Syntropy decentralized internet" },
  { title: "So Now That We Admit We Have a Problem — Part 2", path: "/blog", type: "blog", description: "IT procurement dysfunction and solutions", keywords: "IT procurement problems" },
  { title: "Optimize & Re-Negotiate Contracts", path: "/blog", type: "blog", description: "Contract optimization as highest-ROI CIO activity", keywords: "contract negotiation optimization CIO" },
  { title: "Scale & Buy Global IT Infrastructure", path: "/blog", type: "blog", description: "Global infrastructure procurement framework", keywords: "global infrastructure procurement scaling" },
  { title: "Mini Episode: Tony Greenberg, CEO of RampRate", path: "/blog", type: "blog", description: "Decision frameworks for $100M+ engagements", keywords: "Tony Greenberg podcast decisions" },
  { title: "'Boiling the Human' — H+ Summit / Harvard-Kurzweil", path: "/blog", type: "blog", description: "Human-compute convergence presented at Harvard", keywords: "transhumanism Harvard Kurzweil" },
  { title: "Hot Sauce — Sourcing Is What I Got", path: "/blog", type: "blog", description: "Sourcing as craft built on relationships and data", keywords: "sourcing relationships craft" },
  { title: "The Right Numbers — Supplier Fit & Blockchain", path: "/blog", type: "blog", description: "Statistical revolution in supplier scoring", keywords: "supplier scoring blockchain statistics" },
  { title: "Build Your Shared Services", path: "/blog", type: "blog", description: "CIO strategy for shared services architecture", keywords: "shared services CIO architecture" },
  { title: "Microsoft's Underwater Data Centers — Really?", path: "/blog", type: "blog", description: "Underwater data center viability analysis", keywords: "Microsoft underwater data center" },
  { title: "Human Operating System", path: "/blog", type: "blog", description: "Compute and the human operating system circa 2020", keywords: "human compute operating system" },
  { title: "The Buyers & Sellers Honesty Dance", path: "/blog", type: "blog", description: "Win-win negotiation through understanding motivation", keywords: "negotiation buyers sellers honesty" },
  { title: "A Cynic Predicts IT and Media in 2011", path: "/blog", type: "blog", description: "Prescient predictions about IT and media convergence", keywords: "IT media predictions 2011" },
  { title: "When Valuations Don't Mean Valuable", path: "/blog", type: "blog", description: "Startup valuations vs actual value creation", keywords: "valuations startup value" },
  { title: "Trust Us? Are You Really My Friend?", path: "/blog", type: "blog", description: "Trust dynamics in enterprise relationships", keywords: "trust relationships enterprise" },
];

const POPULAR: SearchItem[] = [
  SITE_INDEX.find(i => i.path === "/sourcing")!,
  SITE_INDEX.find(i => i.path === "/growth")!,
  SITE_INDEX.find(i => i.path === "/web3")!,
  SITE_INDEX.find(i => i.path === "/impact")!,
  SITE_INDEX.find(i => i.path === "/proof")!,
  SITE_INDEX.find(i => i.path === "/connect")!,
];

function fuzzyMatch(query: string, text: string): boolean {
  const q = query.toLowerCase();
  const t = text.toLowerCase();
  if (t.includes(q)) return true;
  const tokens = q.split(/\s+/);
  return tokens.every(tok => t.includes(tok));
}

function highlightMatch(text: string, query: string): React.ReactNode {
  if (!query.trim()) return text;
  const tokens = query.trim().split(/\s+/).filter(Boolean);
  const pattern = tokens.map(t => t.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")).join("|");
  const regex = new RegExp(`(${pattern})`, "gi");
  const parts = text.split(regex);
  return parts.map((part, i) =>
    regex.test(part) ? <mark key={i} className="bg-[oklch(0.82_0.15_75)]/25 text-white rounded-sm px-0.5">{part}</mark> : part
  );
}

const typeIcons = { page: Globe, blog: BookOpen, practice: FileText };
const groupOrder: Array<{ key: SearchItem["type"]; label: string }> = [
  { key: "practice", label: "Practice Areas" },
  { key: "page", label: "Pages" },
  { key: "blog", label: "Articles" },
];

export default function SiteSearch({ scrolled = false }: { scrolled?: boolean }) {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [selectedIdx, setSelectedIdx] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const [, navigate] = useLocation();

  // Filter and group results
  const filtered = useMemo(() => {
    if (query.trim().length === 0) return [];
    return SITE_INDEX.filter(item =>
      fuzzyMatch(query, item.title) ||
      fuzzyMatch(query, item.description || "") ||
      fuzzyMatch(query, item.keywords || "")
    );
  }, [query]);

  // Build grouped flat list for keyboard nav
  const groupedFlat = useMemo(() => {
    const flat: Array<{ item: SearchItem; groupLabel?: string }> = [];
    for (const g of groupOrder) {
      const items = filtered.filter(i => i.type === g.key);
      if (items.length === 0) continue;
      items.forEach((item, idx) => {
        flat.push({ item, groupLabel: idx === 0 ? g.label : undefined });
      });
    }
    return flat;
  }, [filtered]);

  const openSearch = useCallback(() => {
    setOpen(true);
    setQuery("");
    setSelectedIdx(0);
  }, []);

  const closeSearch = useCallback(() => {
    setOpen(false);
    setQuery("");
  }, []);

  const goTo = useCallback((path: string) => {
    navigate(path);
    closeSearch();
  }, [navigate, closeSearch]);

  // Cmd+K / Ctrl+K shortcut
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        openSearch();
      }
      if (e.key === "Escape") closeSearch();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [openSearch, closeSearch]);

  // Focus input when opened
  useEffect(() => {
    if (open) setTimeout(() => inputRef.current?.focus(), 50);
  }, [open]);

  // Keyboard navigation
  const totalItems = query.trim().length > 0 ? groupedFlat.length : POPULAR.length;
  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setSelectedIdx(i => Math.min(i + 1, totalItems - 1));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setSelectedIdx(i => Math.max(i - 1, 0));
    } else if (e.key === "Enter") {
      if (query.trim().length > 0 && groupedFlat[selectedIdx]) {
        goTo(groupedFlat[selectedIdx].item.path);
      } else if (query.trim().length === 0 && POPULAR[selectedIdx]) {
        goTo(POPULAR[selectedIdx].path);
      }
    } else if (e.key === "Tab") {
      // Tab cycles through results instead of leaving
      e.preventDefault();
      if (e.shiftKey) {
        setSelectedIdx(i => (i - 1 + totalItems) % totalItems);
      } else {
        setSelectedIdx(i => (i + 1) % totalItems);
      }
    }
  };

  useEffect(() => { setSelectedIdx(0); }, [query]);

  const renderItem = (item: SearchItem, idx: number, showHighlight: boolean) => {
    const Icon = typeIcons[item.type];
    return (
      <button
        key={`${item.path}-${item.title}`}
        onClick={() => goTo(item.path)}
        onMouseEnter={() => setSelectedIdx(idx)}
        tabIndex={0}
        role="option"
        aria-selected={idx === selectedIdx}
        className={`w-full flex items-center gap-4 px-6 py-3 text-left transition-colors ${
          idx === selectedIdx ? "bg-white/[0.06]" : "hover:bg-white/[0.03]"
        }`}
      >
        <Icon size={16} className="text-white/30 shrink-0" />
        <div className="flex-1 min-w-0">
          <p className="text-white text-sm font-medium truncate" style={{ fontFamily: "var(--font-body)" }}>
            {showHighlight ? highlightMatch(item.title, query) : item.title}
          </p>
          {item.description && (
            <p className="text-white/40 text-xs truncate mt-0.5" style={{ fontFamily: "var(--font-body)" }}>
              {showHighlight ? highlightMatch(item.description, query) : item.description}
            </p>
          )}
        </div>
        {idx === selectedIdx && <ArrowRight size={14} className="text-[oklch(0.82_0.15_75)] shrink-0" />}
      </button>
    );
  };

  return (
    <>
      {/* Trigger button */}
      <button
        onClick={openSearch}
        className={`flex items-center gap-2 px-3 py-1.5 rounded-lg border transition-all text-sm ${
          scrolled
            ? "border-black/15 text-[oklch(0.35_0.03_50)] hover:text-[oklch(0.18_0.03_50)] hover:border-black/30"
            : "border-white/15 text-white/50 hover:text-white/80 hover:border-white/30"
        }`}
        style={{ fontFamily: "var(--font-mono)" }}
        aria-label="Search site"
      >
        <Search size={14} />
        <span className="hidden sm:inline text-xs">Search</span>
        <kbd className={`hidden sm:inline text-[10px] px-1.5 py-0.5 rounded ml-1 ${scrolled ? "bg-black/5 text-black/30" : "bg-white/10 text-white/30"}`}>⌘K</kbd>
      </button>

      {/* Overlay */}
      {open && (
        <div
          className="fixed inset-0 z-[100] flex items-start justify-center pt-[12vh]"
          onClick={closeSearch}
        >
          <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />

          <div
            className="relative w-full max-w-2xl mx-4 rounded-2xl border border-white/15 bg-[#0d1117]/95 backdrop-blur-xl shadow-2xl overflow-hidden"
            onClick={e => e.stopPropagation()}
            role="dialog"
            aria-label="Site search"
          >
            {/* Input */}
            <div className="flex items-center gap-3 px-6 py-5 border-b border-white/10">
              <Search size={22} className="text-[oklch(0.82_0.15_75)] shrink-0" />
              <input
                ref={inputRef}
                type="text"
                value={query}
                onChange={e => setQuery(e.target.value)}
                onKeyDown={onKeyDown}
                placeholder="Search pages, articles, practices..."
                className="flex-1 bg-transparent text-white text-lg outline-none placeholder:text-white/30"
                style={{ fontFamily: "var(--font-body)" }}
                role="combobox"
                aria-expanded={true}
                aria-controls="search-results"
                aria-activedescendant={`search-item-${selectedIdx}`}
              />
              <button onClick={closeSearch} className="text-white/30 hover:text-white/60 transition-colors" tabIndex={0}>
                <X size={20} />
              </button>
            </div>

            <div id="search-results" role="listbox" className="max-h-[55vh] overflow-y-auto">
              {/* Grouped search results */}
              {query.trim().length > 0 && groupedFlat.length > 0 && (
                <>
                  {groupedFlat.map((entry, i) => (
                    <div key={`${entry.item.path}-${entry.item.title}-${i}`}>
                      {entry.groupLabel && (
                        <div className="px-6 pt-4 pb-1">
                          <span className="text-[10px] uppercase tracking-[0.2em] text-[oklch(0.82_0.15_75)]/60 font-semibold" style={{ fontFamily: "var(--font-mono)" }}>
                            {entry.groupLabel}
                          </span>
                        </div>
                      )}
                      {renderItem(entry.item, i, true)}
                    </div>
                  ))}
                </>
              )}

              {/* No results */}
              {query.trim().length > 0 && groupedFlat.length === 0 && (
                <div className="px-6 py-10 text-center text-white/30" style={{ fontFamily: "var(--font-body)" }}>
                  No results for "{query}"
                </div>
              )}

              {/* Popular pages when empty */}
              {query.trim().length === 0 && (
                <>
                  <div className="px-6 pt-4 pb-1 flex items-center gap-2">
                    <TrendingUp size={12} className="text-white/20" />
                    <span className="text-[10px] uppercase tracking-[0.2em] text-white/30 font-semibold" style={{ fontFamily: "var(--font-mono)" }}>
                      Popular
                    </span>
                  </div>
                  {POPULAR.map((item, i) => renderItem(item, i, false))}
                </>
              )}
            </div>

            {/* Footer hint */}
            <div className="px-6 py-3 border-t border-white/5 flex items-center gap-4 text-[10px] text-white/20" style={{ fontFamily: "var(--font-mono)" }}>
              <span><kbd className="px-1 py-0.5 rounded bg-white/10">↑↓</kbd> navigate</span>
              <span><kbd className="px-1 py-0.5 rounded bg-white/10">tab</kbd> cycle</span>
              <span><kbd className="px-1 py-0.5 rounded bg-white/10">↵</kbd> select</span>
              <span><kbd className="px-1 py-0.5 rounded bg-white/10">esc</kbd> close</span>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
