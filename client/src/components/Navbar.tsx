/*
 * Design: Transparent overlay nav on hero, transitions to solid on scroll.
 * Warm earth tones, Playfair Display logo, DM Sans nav items.
 * Matches fusionramp.manus.space aesthetic.
 */
import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X } from "lucide-react";
import Logo from "@/components/Logo";

const practices = [
  { label: "Sourcing", href: "/sourcing", desc: "Enterprise IT" },
  { label: "Syzygy", href: "/growth", desc: "Founders" },
  { label: "Stratum", href: "/web3", desc: "Web3" },
  { label: "ImpactSoul", href: "/impact", desc: "NGOs" },
];

const navItems = [
  { label: "Practices", href: "#practices", hasDropdown: true },
  { label: "Proof", href: "/proof" },
  { label: "About", href: "/about" },
  { label: "Blog", href: "/blog" },
  { label: "Connect", href: "/connect" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [practicesOpen, setPracticesOpen] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setPracticesOpen(false);
  }, [location]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-black/5"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 flex items-center justify-between h-16 sm:h-20">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <Logo variant={scrolled ? "dark" : "light"} size="md" />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-8">
          {navItems.map((item) =>
            item.hasDropdown ? (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => setPracticesOpen(true)}
                onMouseLeave={() => setPracticesOpen(false)}
              >
                <button
                  className={`text-sm font-medium tracking-wide uppercase transition-colors duration-300 ${
                    scrolled
                      ? "text-[oklch(0.35_0.03_50)] hover:text-[oklch(0.18_0.03_50)]"
                      : "text-white/80 hover:text-white"
                  }`}
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  {item.label}
                </button>
                {practicesOpen && (
                  <div className="absolute top-full left-1/2 -translate-x-1/2 pt-3">
                    <div className="bg-white rounded-lg shadow-xl border border-black/5 p-4 min-w-[220px]">
                      {practices.map((p) => (
                        <Link
                          key={p.href}
                          href={p.href}
                          className="flex items-center justify-between px-3 py-2.5 rounded-md hover:bg-[oklch(0.94_0.03_80)] transition-colors group"
                        >
                          <span className="text-sm font-medium text-[oklch(0.18_0.03_50)] group-hover:text-[oklch(0.82_0.15_75)]">
                            {p.label}
                          </span>
                          <span className="text-xs text-[oklch(0.5_0.02_50)]">
                            {p.desc}
                          </span>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={item.label}
                href={item.href}
                className={`text-sm font-medium tracking-wide uppercase transition-colors duration-300 ${
                  scrolled
                    ? "text-[oklch(0.35_0.03_50)] hover:text-[oklch(0.18_0.03_50)]"
                    : "text-white/80 hover:text-white"
                }`}
                style={{ fontFamily: "var(--font-body)" }}
              >
                {item.label}
              </Link>
            )
          )}
          <Link
            href="/connect"
            className="ml-2 px-5 py-2.5 rounded-md text-sm font-semibold transition-all duration-300 bg-[oklch(0.82_0.15_75)] text-[oklch(0.18_0.03_50)] hover:bg-[oklch(0.78_0.16_75)] shadow-sm"
            style={{ fontFamily: "var(--font-body)" }}
          >
            Start a Conversation
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className={`lg:hidden p-2 transition-colors ${
            scrolled ? "text-[oklch(0.18_0.03_50)]" : "text-white"
          }`}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-white border-t border-black/5 shadow-lg">
          <div className="px-5 py-6 space-y-1">
            {practices.map((p) => (
              <Link
                key={p.href}
                href={p.href}
                className="block px-3 py-3 text-sm font-medium text-[oklch(0.18_0.03_50)] hover:bg-[oklch(0.94_0.03_80)] rounded-md"
              >
                {p.label}
                <span className="text-xs text-[oklch(0.5_0.02_50)] ml-2">
                  {p.desc}
                </span>
              </Link>
            ))}
            <div className="border-t border-black/5 my-3" />
            {navItems
              .filter((i) => !i.hasDropdown)
              .map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="block px-3 py-3 text-sm font-medium text-[oklch(0.18_0.03_50)] hover:bg-[oklch(0.94_0.03_80)] rounded-md"
                >
                  {item.label}
                </Link>
              ))}
            <div className="pt-3">
              <Link
                href="/connect"
                className="block text-center px-5 py-3 rounded-md text-sm font-semibold bg-[oklch(0.82_0.15_75)] text-[oklch(0.18_0.03_50)]"
              >
                Start a Conversation
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
