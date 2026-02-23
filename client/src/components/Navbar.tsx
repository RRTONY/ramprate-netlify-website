/**
 * Navbar — "Luminous Interference" design
 * Sticky glassmorphic nav with RampRate + B Corp badge
 * Nav: Practices · Proof · About · Blog · Connect | [Start a Conversation→]
 */
import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Practices", items: [
    { label: "Sourcing", href: "/sourcing" },
    { label: "Syzygy", href: "/growth" },
    { label: "Stratum", href: "/web3" },
    { label: "ImpactSoul", href: "/impact" },
  ]},
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
    const onScroll = () => setScrolled(window.scrollY > 40);
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
          ? "glass-card shadow-lg shadow-black/20"
          : "bg-transparent"
      }`}
    >
      <div className="container flex items-center justify-between h-16 lg:h-18">
        {/* Logo + B Corp */}
        <Link href="/" className="flex items-center gap-2.5 group">
          <span
            className="text-xl lg:text-2xl font-bold tracking-tight text-white"
            style={{ fontFamily: "var(--font-body)" }}
          >
            Ramp<span className="text-coral">Rate</span>
          </span>
          <span className="text-[10px] font-mono text-muted-foreground border border-glass-border rounded px-1.5 py-0.5 leading-none tracking-wider uppercase opacity-70 group-hover:opacity-100 transition-opacity">
            B Corp
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) =>
            link.items ? (
              <div
                key={link.label}
                className="relative"
                onMouseEnter={() => setPracticesOpen(true)}
                onMouseLeave={() => setPracticesOpen(false)}
              >
                <button
                  className="px-3 py-2 text-sm font-medium text-foreground/80 hover:text-white transition-colors"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  {link.label}
                </button>
                {practicesOpen && (
                  <div className="absolute top-full left-0 pt-1">
                    <div className="glass-card rounded-lg py-2 min-w-[180px] shadow-xl shadow-black/30">
                      {link.items.map((item) => (
                        <Link
                          key={item.href}
                          href={item.href}
                          className="block px-4 py-2 text-sm text-foreground/70 hover:text-coral hover:bg-white/5 transition-all"
                          style={{ fontFamily: "var(--font-body)" }}
                        >
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={link.href}
                href={link.href!}
                className="px-3 py-2 text-sm font-medium text-foreground/80 hover:text-white transition-colors"
                style={{ fontFamily: "var(--font-body)" }}
              >
                {link.label}
              </Link>
            )
          )}
          <Link
            href="/connect"
            className="ml-3 px-5 py-2 text-sm font-semibold rounded-lg bg-coral text-white hover:bg-coral/90 transition-all hover:shadow-lg hover:shadow-coral/20"
            style={{ fontFamily: "var(--font-body)" }}
          >
            Start a Conversation →
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          className="lg:hidden p-2 text-foreground/80 hover:text-white"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden glass-card border-t border-glass-border">
          <div className="container py-4 space-y-1">
            {navLinks.map((link) =>
              link.items ? (
                <div key={link.label}>
                  <div className="px-3 py-2 text-xs font-mono uppercase tracking-widest text-muted-foreground">
                    {link.label}
                  </div>
                  {link.items.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="block px-6 py-2 text-sm text-foreground/80 hover:text-coral transition-colors"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              ) : (
                <Link
                  key={link.href}
                  href={link.href!}
                  className="block px-3 py-2 text-sm text-foreground/80 hover:text-coral transition-colors"
                >
                  {link.label}
                </Link>
              )
            )}
            <Link
              href="/connect"
              className="block mx-3 mt-3 px-5 py-2.5 text-sm font-semibold text-center rounded-lg bg-coral text-white"
            >
              Start a Conversation →
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
