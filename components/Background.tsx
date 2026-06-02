"use client";
import { useEffect, useRef } from "react";

/* Animated canvas particles */
function ParticleCanvas() {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let W = (canvas.width = window.innerWidth);
    let H = (canvas.height = window.innerHeight);

    const onResize = () => {
      W = canvas.width = window.innerWidth;
      H = canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", onResize);

    const COLORS = ["#8b5cf6", "#06b6d4", "#f472b6", "#a78bfa"];
    const particles = Array.from({ length: 60 }, () => ({
      x: Math.random() * W,
      y: Math.random() * H,
      r: Math.random() * 1.8 + 0.4,
      dx: (Math.random() - 0.5) * 0.4,
      dy: (Math.random() - 0.5) * 0.4,
      color: COLORS[Math.floor(Math.random() * COLORS.length)],
      alpha: Math.random() * 0.5 + 0.1,
    }));

    let raf: number;
    const draw = () => {
      ctx.clearRect(0, 0, W, H);
      for (const p of particles) {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.globalAlpha = p.alpha;
        ctx.fill();
        p.x += p.dx;
        p.y += p.dy;
        if (p.x < 0 || p.x > W) p.dx *= -1;
        if (p.y < 0 || p.y > H) p.dy *= -1;
      }
      // Draw connecting lines
      ctx.globalAlpha = 1;
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 120) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = "#8b5cf6";
            ctx.globalAlpha = (1 - dist / 120) * 0.12;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }
      ctx.globalAlpha = 1;
      raf = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return <canvas ref={ref} className="fixed inset-0 pointer-events-none z-0" style={{ opacity: "var(--particle-opacity)" }} />;
}

export default function Background() {
  return (
    <>
      {/* Particle network canvas */}
      <ParticleCanvas />

      {/* Fixed mesh gradient blobs */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        {/* Top-left purple blob */}
        <div
          className="absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full transition-all duration-700"
          style={{ background: "radial-gradient(circle, var(--blob1) 0%, transparent 70%)", animation: "float 12s ease-in-out infinite" }}
        />
        {/* Top-right cyan blob */}
        <div
          className="absolute -top-20 -right-40 w-[500px] h-[500px] rounded-full transition-all duration-700"
          style={{ background: "radial-gradient(circle, var(--blob2) 0%, transparent 70%)", animation: "float 15s ease-in-out infinite reverse" }}
        />
        {/* Center pink blob */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] rounded-full transition-all duration-700"
          style={{ background: "radial-gradient(ellipse, var(--blob3) 0%, transparent 70%)", animation: "float-slow 18s ease-in-out infinite" }}
        />
        {/* Bottom-left teal blob */}
        <div
          className="absolute -bottom-40 -left-20 w-[500px] h-[500px] rounded-full transition-all duration-700"
          style={{ background: "radial-gradient(circle, var(--blob2) 0%, transparent 70%)", animation: "float 10s ease-in-out infinite 3s" }}
        />
        {/* Bottom-right violet blob */}
        <div
          className="absolute -bottom-20 -right-20 w-[400px] h-[400px] rounded-full transition-all duration-700"
          style={{ background: "radial-gradient(circle, var(--blob1) 0%, transparent 70%)", animation: "float 14s ease-in-out infinite reverse 5s" }}
        />
      </div>

      {/* Grid overlay */}
      <div className="fixed inset-0 bg-grid pointer-events-none z-0 opacity-100" />

      {/* Floating geometric shapes */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        {/* Spinning outer ring - top right */}
        <div
          className="absolute top-20 right-16 w-40 h-40 rounded-full border border-purple-500/20 animate-spin-slow"
        />
        <div
          className="absolute top-20 right-16 w-28 h-28 m-6 rounded-full border border-cyan-500/15 animate-spin-rev"
        />

        {/* Diamond shape - bottom left */}
        <div
          className="absolute bottom-32 left-16 w-16 h-16 border border-pink-500/25 rotate-45 animate-float-slow"
          style={{ animationDelay: "2s" }}
        />
        <div
          className="absolute bottom-36 left-20 w-8 h-8 border border-purple-400/30 rotate-45 animate-float-slow"
          style={{ animationDelay: "1s" }}
        />

        {/* Triangle-like shape - top left */}
        <svg
          className="absolute top-40 left-10 opacity-10 animate-float-slow"
          style={{ animationDelay: "4s" }}
          width="80" height="80" viewBox="0 0 80 80"
        >
          <polygon points="40,5 75,70 5,70" fill="none" stroke="#8b5cf6" strokeWidth="1.5" />
        </svg>

        {/* Cross / plus - mid right */}
        <svg
          className="absolute top-1/2 right-8 opacity-10 animate-float"
          style={{ animationDelay: "3s" }}
          width="40" height="40" viewBox="0 0 40 40"
        >
          <line x1="20" y1="0" x2="20" y2="40" stroke="#06b6d4" strokeWidth="1.5" />
          <line x1="0" y1="20" x2="40" y2="20" stroke="#06b6d4" strokeWidth="1.5" />
        </svg>

        {/* Hexagon - mid left */}
        <svg
          className="absolute top-2/3 left-8 opacity-10 animate-float-slow"
          style={{ animationDelay: "6s" }}
          width="60" height="60" viewBox="0 0 60 60"
        >
          <polygon points="30,2 55,16 55,44 30,58 5,44 5,16" fill="none" stroke="#f472b6" strokeWidth="1.5" />
        </svg>

        {/* Scattered dots */}
        {[
          { top: "15%", left: "8%", color: "#8b5cf6", delay: "0s" },
          { top: "35%", right: "5%", color: "#06b6d4", delay: "1.5s" },
          { top: "65%", left: "12%", color: "#f472b6", delay: "3s" },
          { top: "80%", right: "10%", color: "#a78bfa", delay: "4.5s" },
          { top: "50%", left: "3%", color: "#06b6d4", delay: "2s" },
        ].map((d, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 rounded-full"
            style={{
              ...d,
              background: d.color,
              boxShadow: `0 0 8px ${d.color}`,
              animation: `twinkle ${3 + i}s ease-in-out infinite`,
              animationDelay: d.delay,
            }}
          />
        ))}
      </div>
    </>
  );
}
