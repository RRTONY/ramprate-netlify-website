/**
 * NetworkViz — Particle network visualization
 * Canvas-based animated particle system representing the RampRate network
 */
import { useEffect, useRef } from "react";

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  r: number;
  color: string;
  alpha: number;
}

export default function NetworkViz() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    const particles: Particle[] = [];
    const colors = [
      "255, 107, 53",  // coral
      "255, 179, 71",  // amber
      "59, 130, 246",  // blue
      "139, 92, 246",  // purple
      "20, 184, 166",  // teal
    ];

    const resize = () => {
      canvas.width = canvas.offsetWidth * window.devicePixelRatio;
      canvas.height = canvas.offsetHeight * window.devicePixelRatio;
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
    };
    resize();

    // Create particles
    const w = canvas.offsetWidth;
    const h = canvas.offsetHeight;
    const count = Math.min(80, Math.floor((w * h) / 8000));

    for (let i = 0; i < count; i++) {
      particles.push({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        r: Math.random() * 2 + 1,
        color: colors[Math.floor(Math.random() * colors.length)],
        alpha: Math.random() * 0.5 + 0.2,
      });
    }

    const draw = () => {
      ctx.clearRect(0, 0, w, h);

      // Update and draw particles
      for (const p of particles) {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > w) p.vx *= -1;
        if (p.y < 0 || p.y > h) p.vy *= -1;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${p.color}, ${p.alpha})`;
        ctx.fill();
      }

      // Draw connections
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 120) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(255, 255, 255, ${0.03 * (1 - dist / 120)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }

      animId = requestAnimationFrame(draw);
    };

    // Pause off-screen
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) draw();
        else cancelAnimationFrame(animId);
      },
      { threshold: 0.1 }
    );
    observer.observe(canvas);

    window.addEventListener("resize", resize);
    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
      observer.disconnect();
    };
  }, []);

  return (
    <section className="relative py-20 lg:py-28 overflow-hidden">
      <div className="absolute inset-0">
        <canvas ref={canvasRef} className="w-full h-full" />
      </div>
      <div className="container relative z-10 text-center">
        <p className="text-xs font-mono uppercase tracking-[0.2em] text-coral mb-3">
          The Network
        </p>
        <h2
          className="text-3xl md:text-4xl font-bold text-white mb-4"
          style={{ fontFamily: "var(--font-display)" }}
        >
          Connections That Compound
        </h2>
        <p className="text-muted-foreground max-w-lg mx-auto leading-relaxed mb-8" style={{ fontFamily: "var(--font-body)" }}>
          Our network spans Fortune 500 boardrooms, Davos corridors, and the frontier of Web3.
          Every engagement strengthens the mesh.
        </p>
        <div className="flex items-center justify-center gap-8 font-mono text-sm">
          <div>
            <span className="text-2xl font-bold text-coral">50+</span>
            <p className="text-xs text-muted-foreground mt-1">Countries</p>
          </div>
          <div className="w-px h-8 bg-glass-border" />
          <div>
            <span className="text-2xl font-bold text-amber">350+</span>
            <p className="text-xs text-muted-foreground mt-1">Vendors</p>
          </div>
          <div className="w-px h-8 bg-glass-border" />
          <div>
            <span className="text-2xl font-bold text-blue-400">150K+</span>
            <p className="text-xs text-muted-foreground mt-1">Data Points</p>
          </div>
        </div>
      </div>
    </section>
  );
}
