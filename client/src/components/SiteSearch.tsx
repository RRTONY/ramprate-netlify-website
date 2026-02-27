import { useState, useEffect, useRef, useCallback } from "react";
import { useLocation } from "wouter";
import { Search, X, Send, Loader2, Sparkles, ArrowRight, Globe, BookOpen, FileText } from "lucide-react";
import { trpc } from "@/lib/trpc";

/* ── Quick-nav index for instant results before AI kicks in ── */
interface NavItem {
  title: string;
  path: string;
  type: "page" | "blog" | "practice";
  keywords: string;
}

const NAV_INDEX: NavItem[] = [
  { title: "Sourcing — Enterprise IT Advisory", path: "/sourcing", type: "practice", keywords: "data center colocation cloud hosting telecom network infrastructure procurement vendor negotiation CIO sourcing SPY Index" },
  { title: "Syzygy — Growth Strategy", path: "/growth", type: "practice", keywords: "startup founder growth GTM go to market revenue strategy scaling fundraising" },
  { title: "Stratum — Web3 & Blockchain", path: "/web3", type: "practice", keywords: "blockchain crypto token DAO web3 decentralized DeFi" },
  { title: "ImpactSoul — Impact Consulting", path: "/impact", type: "practice", keywords: "impact ESG sustainability B Corp grants NGO regenerative social" },
  { title: "Practices Overview", path: "/practices", type: "page", keywords: "services brands divisions all practices" },
  { title: "Process — How We Operate", path: "/process", type: "page", keywords: "methodology steps flow circuit" },
  { title: "Proof — Case Results", path: "/proof", type: "page", keywords: "testimonials clients results case studies" },
  { title: "About — Team & Advisors", path: "/about", type: "page", keywords: "team people leadership tony greenberg" },
  { title: "Blog", path: "/blog", type: "page", keywords: "articles writing posts thought leadership" },
  { title: "Connect", path: "/connect", type: "page", keywords: "contact form reach out engage" },
  { title: "Values", path: "/values", type: "page", keywords: "ESG regenerative b corp values mission consciousness" },
  { title: "Privacy Policy", path: "/privacy", type: "page", keywords: "privacy data" },
  { title: "Terms of Service", path: "/terms", type: "page", keywords: "terms legal" },
];

function quickMatch(query: string): NavItem[] {
  if (query.trim().length < 2) return [];
  const q = query.toLowerCase();
  const tokens = q.split(/\s+/);
  return NAV_INDEX.filter(item => {
    const hay = `${item.title} ${item.keywords}`.toLowerCase();
    return tokens.every(tok => hay.includes(tok));
  }).slice(0, 5);
}

const typeIcons = { page: Globe, blog: BookOpen, practice: FileText };

interface ChatMsg {
  role: "user" | "assistant";
  content: string;
}

export default function SiteSearch({ scrolled = false }: { scrolled?: boolean }) {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [chat, setChat] = useState<ChatMsg[]>([]);
  const [loading, setLoading] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const chatEndRef = useRef<HTMLDivElement>(null);
  const [, navigate] = useLocation();

  const askAI = trpc.ai.ask.useMutation();

  const quickResults = quickMatch(query);
  const showQuickNav = query.trim().length >= 2 && quickResults.length > 0 && chat.length === 0;

  const openSearch = useCallback(() => {
    setOpen(true);
    setQuery("");
    setChat([]);
    setLoading(false);
  }, []);

  const closeSearch = useCallback(() => {
    setOpen(false);
    setQuery("");
    setChat([]);
    setLoading(false);
  }, []);

  const handleSubmit = useCallback(async () => {
    const q = query.trim();
    if (!q || loading) return;

    const newChat: ChatMsg[] = [...chat, { role: "user", content: q }];
    setChat(newChat);
    setQuery("");
    setLoading(true);

    try {
      const result = await askAI.mutateAsync({
        question: q,
        history: chat.slice(-10),
      });
      setChat(prev => [...prev, { role: "assistant", content: result.answer }]);
    } catch {
      setChat(prev => [...prev, { role: "assistant", content: "Something went wrong. Try again or reach out at /connect." }]);
    } finally {
      setLoading(false);
    }
  }, [query, loading, chat, askAI]);

  // Cmd+K / Ctrl+K
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

  useEffect(() => {
    if (open) setTimeout(() => inputRef.current?.focus(), 50);
  }, [open]);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [chat, loading]);

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSubmit();
    }
  };

  return (
    <>
      {/* ── PROMINENT TRIGGER ── */}
      <button
        onClick={openSearch}
        className={`flex items-center gap-2.5 px-4 py-2 rounded-full border transition-all text-sm group ${
          scrolled
            ? "border-black/12 bg-black/[0.03] text-[oklch(0.4_0.03_50)] hover:bg-black/[0.06] hover:border-black/20"
            : "border-white/15 bg-white/[0.06] text-white/60 hover:bg-white/[0.1] hover:border-white/25"
        }`}
        style={{ fontFamily: "var(--font-body)" }}
        aria-label="Ask RampRate AI"
      >
        <Sparkles size={15} className={`${scrolled ? "text-[oklch(0.65_0.15_75)]" : "text-[oklch(0.82_0.15_75)]"}`} />
        <span className="hidden md:inline text-xs font-medium">Ask RampRate</span>
        <kbd className={`hidden lg:inline text-[10px] px-1.5 py-0.5 rounded-md font-mono ${
          scrolled ? "bg-black/5 text-black/25" : "bg-white/10 text-white/25"
        }`}>⌘K</kbd>
      </button>

      {/* ── OVERLAY ── */}
      {open && (
        <div
          className="fixed inset-0 z-[100] flex items-start justify-center pt-[8vh] sm:pt-[12vh]"
          onClick={closeSearch}
        >
          <div className="absolute inset-0 bg-black/75 backdrop-blur-md" />

          <div
            className="relative w-full max-w-2xl mx-3 rounded-2xl border border-white/10 bg-[#0a0f1a]/95 backdrop-blur-xl shadow-2xl overflow-hidden flex flex-col"
            style={{ maxHeight: "75vh" }}
            onClick={e => e.stopPropagation()}
            role="dialog"
            aria-label="RampRate AI Assistant"
          >
            {/* Header */}
            <div className="px-5 py-4 border-b border-white/8 flex items-center justify-between shrink-0">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[oklch(0.82_0.15_75)] to-[oklch(0.65_0.2_50)] flex items-center justify-center">
                  <Sparkles size={16} className="text-[#0a0f1a]" />
                </div>
                <div>
                  <p className="text-white text-sm font-semibold" style={{ fontFamily: "var(--font-display)" }}>RampRate AI</p>
                  <p className="text-white/30 text-[10px]" style={{ fontFamily: "var(--font-mono)" }}>25 years of enterprise intelligence</p>
                </div>
              </div>
              <button onClick={closeSearch} className="text-white/30 hover:text-white/60 transition-colors p-1">
                <X size={18} />
              </button>
            </div>

            {/* Chat area */}
            <div className="flex-1 overflow-y-auto px-5 py-4 space-y-4 min-h-[120px]">
              {chat.length === 0 && !showQuickNav && (
                <div className="text-center py-8">
                  <p className="text-white/50 text-sm mb-4" style={{ fontFamily: "var(--font-body)" }}>
                    Ask anything about RampRate, our practices, case results, or enterprise strategy.
                  </p>
                  <div className="flex flex-wrap justify-center gap-2">
                    {["How do you save companies money?", "What is the SPY Index?", "Tell me about Web3 advisory"].map(q => (
                      <button
                        key={q}
                        onClick={() => { setQuery(q); setTimeout(() => inputRef.current?.focus(), 50); }}
                        className="px-3 py-1.5 rounded-full border border-white/10 text-white/40 text-xs hover:bg-white/5 hover:text-white/60 transition-colors"
                        style={{ fontFamily: "var(--font-body)" }}
                      >
                        {q}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Quick nav results */}
              {showQuickNav && (
                <div>
                  <p className="text-[10px] uppercase tracking-[0.2em] text-[oklch(0.82_0.15_75)]/50 mb-2 font-semibold" style={{ fontFamily: "var(--font-mono)" }}>Quick Navigate</p>
                  {quickResults.map(item => {
                    const Icon = typeIcons[item.type];
                    return (
                      <button
                        key={item.path}
                        onClick={() => { navigate(item.path); closeSearch(); }}
                        className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-white/[0.05] transition-colors text-left"
                      >
                        <Icon size={14} className="text-white/25 shrink-0" />
                        <span className="text-white/80 text-sm flex-1" style={{ fontFamily: "var(--font-body)" }}>{item.title}</span>
                        <ArrowRight size={12} className="text-white/20" />
                      </button>
                    );
                  })}
                  <div className="border-t border-white/5 mt-3 pt-3">
                    <p className="text-white/25 text-[10px] text-center" style={{ fontFamily: "var(--font-mono)" }}>Press Enter to ask the AI instead</p>
                  </div>
                </div>
              )}

              {/* Chat messages */}
              {chat.map((msg, i) => (
                <div key={i} className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
                  <div className={`max-w-[85%] rounded-2xl px-4 py-3 text-sm leading-relaxed ${
                    msg.role === "user"
                      ? "bg-[oklch(0.82_0.15_75)]/15 text-white/90 rounded-br-md"
                      : "bg-white/[0.04] text-white/80 rounded-bl-md border border-white/5"
                  }`} style={{ fontFamily: "var(--font-body)" }}>
                    {msg.role === "assistant" ? (
                      <div className="whitespace-pre-wrap">{msg.content}</div>
                    ) : msg.content}
                  </div>
                </div>
              ))}

              {loading && (
                <div className="flex justify-start">
                  <div className="bg-white/[0.04] rounded-2xl rounded-bl-md border border-white/5 px-4 py-3 flex items-center gap-2">
                    <Loader2 size={14} className="animate-spin text-[oklch(0.82_0.15_75)]" />
                    <span className="text-white/40 text-sm" style={{ fontFamily: "var(--font-body)" }}>Thinking...</span>
                  </div>
                </div>
              )}
              <div ref={chatEndRef} />
            </div>

            {/* Input */}
            <div className="px-4 py-3 border-t border-white/8 shrink-0">
              <div className="flex items-center gap-2 bg-white/[0.04] rounded-xl border border-white/10 px-4 py-3 focus-within:border-[oklch(0.82_0.15_75)]/30 transition-colors">
                <Search size={16} className="text-white/25 shrink-0" />
                <input
                  ref={inputRef}
                  type="text"
                  value={query}
                  onChange={e => setQuery(e.target.value)}
                  onKeyDown={onKeyDown}
                  placeholder={chat.length > 0 ? "Follow up..." : "Ask about sourcing, Web3, case results, strategy..."}
                  className="flex-1 bg-transparent text-white text-sm outline-none placeholder:text-white/25"
                  style={{ fontFamily: "var(--font-body)" }}
                  disabled={loading}
                />
                <button
                  onClick={handleSubmit}
                  disabled={!query.trim() || loading}
                  className="p-1.5 rounded-lg bg-[oklch(0.82_0.15_75)] text-[#0a0f1a] disabled:opacity-30 hover:bg-[oklch(0.78_0.15_75)] transition-all"
                >
                  <Send size={14} />
                </button>
              </div>
              <div className="flex items-center justify-between mt-2 px-1">
                <span className="text-[10px] text-white/15" style={{ fontFamily: "var(--font-mono)" }}>
                  <kbd className="px-1 py-0.5 rounded bg-white/5">⌘K</kbd> open · <kbd className="px-1 py-0.5 rounded bg-white/5">esc</kbd> close · <kbd className="px-1 py-0.5 rounded bg-white/5">↵</kbd> send
                </span>
                <span className="text-[10px] text-white/15" style={{ fontFamily: "var(--font-mono)" }}>
                  Powered by 25 years of deal intelligence
                </span>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
