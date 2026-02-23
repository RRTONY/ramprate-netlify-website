/**
 * ProofPreview — 3 testimonial quotes → link to /proof
 */
import { Link } from "wouter";
import { Quote } from "lucide-react";

const quotes = [
  {
    text: "They hit that 27% savings number and the relationships are stronger than ever.",
    author: "Paul Santana",
    role: "Manager of Data Center Operations",
    company: "eBay",
  },
  {
    text: "They paid for themselves by accelerating our growth by years and remain a vital resource for the team.",
    author: "Kipras Kazlauskas",
    role: "Co-Founder",
    company: "Syntropy",
  },
  {
    text: "RampRate has been my most reliable global resource and is ready to perform for us at a moment's notice.",
    author: "Paul Sams",
    role: "COO",
    company: "Blizzard Entertainment",
  },
];

export default function ProofPreview() {
  return (
    <section className="relative py-20 lg:py-28">
      <div className="container relative z-10">
        {/* Header */}
        <div className="flex items-end justify-between mb-12">
          <div>
            <p className="text-xs font-mono uppercase tracking-[0.2em] text-coral mb-3">
              Proof
            </p>
            <h2
              className="text-3xl md:text-4xl font-bold text-white"
              style={{ fontFamily: "var(--font-display)" }}
            >
              In Their Words
            </h2>
          </div>
          <Link
            href="/proof"
            className="hidden sm:inline-flex text-sm font-mono text-coral hover:text-amber transition-colors"
          >
            See all testimonials →
          </Link>
        </div>

        {/* Quotes grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {quotes.map((q, i) => (
            <div
              key={i}
              className="glass-card rounded-xl p-6 relative group hover:translate-y-[-2px] transition-all duration-300"
            >
              <Quote
                className="w-8 h-8 text-coral/20 mb-4 group-hover:text-coral/40 transition-colors"
                strokeWidth={1}
              />
              <blockquote className="text-sm text-foreground/80 leading-relaxed mb-6 italic" style={{ fontFamily: "var(--font-display)" }}>
                "{q.text}"
              </blockquote>
              <div>
                <p className="text-sm font-semibold text-white" style={{ fontFamily: "var(--font-body)" }}>
                  {q.author}
                </p>
                <p className="text-xs text-muted-foreground font-mono">
                  {q.role}, {q.company}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile link */}
        <div className="mt-8 text-center sm:hidden">
          <Link
            href="/proof"
            className="text-sm font-mono text-coral hover:text-amber transition-colors"
          >
            See all testimonials →
          </Link>
        </div>
      </div>
    </section>
  );
}
