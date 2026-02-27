/*
 * Footer: Clean, minimal. Brand links, social, copyright.
 * Dark charcoal background, matches manus.space footer.
 */
import { Link } from "wouter";
import Logo from "@/components/Logo";
import { ExternalLink } from "lucide-react";

const STRATUM_URL = "https://stratumweb-2pprew4h.manus.space";

const brandLinks = [
  { label: "RampRate", href: "/sourcing" },
  { label: "Syzygy", href: "/growth" },
  { label: "Stratum", href: "/web3" },
  { label: "ImpactSoul", href: "/impact" },
];

const companyLinks = [
  { label: "Proof", href: "/proof" },
  { label: "About", href: "/about" },
  { label: "Blog", href: "/blog" },
  { label: "Flow Circuit", href: "/process#flow-circuit" },
  { label: "Find Your Me", href: "/process#find-me" },
  { label: "Engage", href: "/connect" },
];

export default function Footer() {
  return (
    <footer className="bg-[oklch(0.14_0.01_250)] text-white/60 py-16">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div>
            <Logo variant="light" size="sm" />
            <p
              className="mt-3 text-sm leading-relaxed text-white/40"
              style={{ fontFamily: "var(--font-body)" }}
            >
              Since 2000. A fractional team of superstars creating
              trajectory-changing connections.
            </p>
            <div className="mt-4 flex items-center gap-1">
              <span
                className="text-[10px] font-medium border border-white/20 rounded px-2 py-0.5 tracking-wider uppercase text-white/50"
                style={{ fontFamily: "var(--font-mono)" }}
              >
                B Corp Certified
              </span>
            </div>
          </div>

          {/* Brands */}
          <div>
            <h4
              className="text-xs font-semibold uppercase tracking-[0.2em] text-white/30 mb-4"
              style={{ fontFamily: "var(--font-body)" }}
            >
              Brands
            </h4>
            <ul className="space-y-2.5">
              {brandLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/50 hover:text-white transition-colors"
                    style={{ fontFamily: "var(--font-body)" }}
                  >
                    {link.label}
                  </Link>
                  {link.label === "Stratum" && (
                    <a
                      href={STRATUM_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 text-xs text-[oklch(0.6_0.2_280)]/60 hover:text-[oklch(0.6_0.2_280)] transition-colors mt-0.5"
                      style={{ fontFamily: "var(--font-body)" }}
                    >
                      Deep Dive <ExternalLink size={9} />
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4
              className="text-xs font-semibold uppercase tracking-[0.2em] text-white/30 mb-4"
              style={{ fontFamily: "var(--font-body)" }}
            >
              Company
            </h4>
            <ul className="space-y-2.5">
              {companyLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/50 hover:text-white transition-colors"
                    style={{ fontFamily: "var(--font-body)" }}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4
              className="text-xs font-semibold uppercase tracking-[0.2em] text-white/30 mb-4"
              style={{ fontFamily: "var(--font-body)" }}
            >
              Engage
            </h4>
            <a
              href="mailto:hello@ramprate.com"
              className="text-sm text-white/50 hover:text-white transition-colors block mb-3"
              style={{ fontFamily: "var(--font-body)" }}
            >
              hello@ramprate.com
            </a>
            <div className="flex gap-4 mt-4">
              <a
                href="https://www.linkedin.com/company/ramprate"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/30 hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <a
                href="https://twitter.com/ramprate"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/30 hover:text-white transition-colors"
                aria-label="X / Twitter"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p
            className="text-xs text-white/30"
            style={{ fontFamily: "var(--font-body)" }}
          >
            &copy; {new Date().getFullYear()} RampRate. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="/privacy" className="text-xs text-white/30 hover:text-white/50 transition-colors" style={{ fontFamily: "var(--font-body)" }}>
              Privacy
            </a>
            <a href="/terms" className="text-xs text-white/30 hover:text-white/50 transition-colors" style={{ fontFamily: "var(--font-body)" }}>
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
