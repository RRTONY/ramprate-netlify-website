/**
 * Footer — "Luminous Interference" design
 * RampRate + B Corp | 4 practice links | Social | © 2026
 */
import { Link } from "wouter";

const practiceLinks = [
  { label: "Sourcing", href: "/sourcing" },
  { label: "Syzygy", href: "/growth" },
  { label: "Stratum", href: "/web3" },
  { label: "ImpactSoul", href: "/impact" },
];

const companyLinks = [
  { label: "Proof", href: "/proof" },
  { label: "About", href: "/about" },
  { label: "Blog", href: "/blog" },
  { label: "Connect", href: "/connect" },
];

const socialLinks = [
  { label: "LinkedIn", href: "https://www.linkedin.com/company/ramprate/" },
  { label: "Twitter", href: "https://twitter.com/ramprate" },
  { label: "Facebook", href: "https://www.facebook.com/ramprate" },
  { label: "Instagram", href: "https://www.instagram.com/ramprate/" },
];

export default function Footer() {
  return (
    <footer className="relative border-t border-glass-border bg-navy/80">
      <div className="container py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Brand */}
          <div>
            <Link href="/" className="inline-flex items-center gap-2.5 mb-4">
              <span
                className="text-xl font-bold tracking-tight text-white"
                style={{ fontFamily: "var(--font-body)" }}
              >
                Ramp<span className="text-coral">Rate</span>
              </span>
              <span className="text-[9px] font-mono text-muted-foreground border border-glass-border rounded px-1.5 py-0.5 leading-none tracking-wider uppercase">
                B Corp
              </span>
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-xs">
              Since 2000, elevating the way business does business. $24B+ in enterprise decisions across 50+ countries.
            </p>
          </div>

          {/* Practices */}
          <div>
            <h4
              className="text-xs font-mono uppercase tracking-widest text-muted-foreground mb-4"
            >
              Practices
            </h4>
            <ul className="space-y-2.5">
              {practiceLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-foreground/70 hover:text-coral transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-widest text-muted-foreground mb-4">
              Company
            </h4>
            <ul className="space-y-2.5">
              {companyLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-foreground/70 hover:text-coral transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-widest text-muted-foreground mb-4">
              Connect
            </h4>
            <ul className="space-y-2.5">
              {socialLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-foreground/70 hover:text-coral transition-colors"
                  >
                    {link.label} ↗
                  </a>
                </li>
              ))}
            </ul>
            <div className="mt-6">
              <a
                href="mailto:hello@ramprate.com"
                className="text-sm font-mono text-coral hover:text-amber transition-colors"
              >
                hello@ramprate.com
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-6 border-t border-glass-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground font-mono">
            © 2026 RampRate. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground/50 font-mono">
            Certified B Corporation
          </p>
        </div>
      </div>
    </footer>
  );
}
