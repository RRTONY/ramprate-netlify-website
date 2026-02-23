/**
 * HeroSection — "Luminous Interference" design
 * H1: "5 principals. 10 senior advisors. 35+ specialists. One collective consciousness."
 * Sub: "Since 2000, $24B+ in enterprise decisions across 50+ countries."
 * CTAs: Find Your Path↓ | Start a Conversation→/connect
 * BG: concentric ripple animation (CSS + canvas)
 */
import { useEffect, useRef } from "react";
import { Link } from "wouter";

export default function HeroSection() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    let time = 0;

    const resize = () => {
      canvas.width = canvas.offsetWidth * window.devicePixelRatio;
      canvas.height = canvas.offsetHeight * window.devicePixelRatio;
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
    };
    resize();
    window.addEventListener("resize", resize);

    const draw = () => {
      const w = canvas.offsetWidth;
      const h = canvas.offsetHeight;
      ctx.clearRect(0, 0, w, h);

      const cx = w / 2;
      const cy = h / 2;
      const maxR = Math.max(w, h) * 0.7;

      // Draw concentric ripples
      for (let i = 0; i < 12; i++) {
        const baseR = (i / 12) * maxR;
        const r = baseR + Math.sin(time * 0.8 + i * 0.5) * 15;
        const alpha = 0.03 + Math.sin(time * 0.5 + i * 0.3) * 0.02;

        ctx.beginPath();
        ctx.arc(cx, cy, Math.max(0, r), 0, Math.PI * 2);
        ctx.strokeStyle = i % 3 === 0
          ? `rgba(255, 107, 53, ${alpha})`
          : i % 3 === 1
          ? `rgba(255, 179, 71, ${alpha * 0.7})`
          : `rgba(100, 160, 255, ${alpha * 0.5})`;
        ctx.lineWidth = 1;
        ctx.stroke();
      }

      // Draw subtle grid lines
      ctx.strokeStyle = "rgba(255, 255, 255, 0.008)";
      ctx.lineWidth = 0.5;
      for (let x = 0; x < w; x += 60) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, h);
        ctx.stroke();
      }
      for (let y = 0; y < h; y += 60) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(w, y);
        ctx.stroke();
      }

      time += 0.016;
      animId = requestAnimationFrame(draw);
    };

    // Intersection observer to pause off-screen
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          draw();
        } else {
          cancelAnimationFrame(animId);
        }
      },
      { threshold: 0.1 }
    );
    observer.observe(canvas);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
      observer.disconnect();
    };
  }, []);

  const scrollToContent = () => {
    const el = document.getElementById("trust-bar");
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Canvas animation */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
        style={{ zIndex: 0 }}
      />

      {/* Gradient mesh overlay */}
      <div className="absolute inset-0 mesh-gradient-1" style={{ zIndex: 1 }} />

      {/* Noise texture */}
      <div className="absolute inset-0 noise-overlay" style={{ zIndex: 2 }} />

      {/* Content */}
      <div className="relative z-10 container text-center px-4 pt-20">
        <div className="max-w-4xl mx-auto">
          {/* H1 */}
          <h1
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.15] tracking-tight text-white mb-6"
            style={{ fontFamily: "var(--font-display)" }}
          >
            <span className="chromatic-shift inline" data-text="5 principals.">5 principals.</span>{" "}
            <span className="text-foreground/70">10 senior advisors.</span>{" "}
            <span className="text-foreground/70">35+ specialists.</span>
            <br />
            <span className="text-coral">One collective consciousness.</span>
          </h1>

          {/* Sub */}
          <p
            className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed"
            style={{ fontFamily: "var(--font-body)" }}
          >
            Since 2000,{" "}
            <span className="font-mono text-amber">$24B+</span> in enterprise
            decisions across{" "}
            <span className="font-mono text-amber">50+</span> countries.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={scrollToContent}
              className="group px-6 py-3 rounded-lg border border-glass-border text-sm font-medium text-foreground/80 hover:text-white hover:border-coral/40 transition-all"
              style={{ fontFamily: "var(--font-body)" }}
            >
              Find Your Path{" "}
              <span className="inline-block transition-transform group-hover:translate-y-0.5">
                ↓
              </span>
            </button>
            <Link
              href="/connect"
              className="px-6 py-3 rounded-lg bg-coral text-white text-sm font-semibold hover:bg-coral/90 transition-all hover:shadow-lg hover:shadow-coral/20"
              style={{ fontFamily: "var(--font-body)" }}
            >
              Start a Conversation →
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
        <div className="w-5 h-8 rounded-full border border-glass-border flex items-start justify-center p-1">
          <div className="w-1 h-2 rounded-full bg-coral animate-bounce" />
        </div>
      </div>
    </section>
  );
}
