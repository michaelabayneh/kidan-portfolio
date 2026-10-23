"use client";
import { useEffect, useRef } from "react";

function ParticleCanvas() {
  const ref = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    let W = (canvas.width = window.innerWidth);
    let H = (canvas.height = window.innerHeight);
    window.addEventListener("resize", () => {
      W = canvas.width = window.innerWidth;
      H = canvas.height = window.innerHeight;
    });
    const COLORS = ["#8b5cf6","#06b6d4","#f472b6","#a78bfa","#c084fc"];
    const pts = Array.from({ length: 70 }, () => ({
      x: Math.random() * W, y: Math.random() * H,
      r: Math.random() * 1.5 + 0.3,
      dx: (Math.random() - 0.5) * 0.35, dy: (Math.random() - 0.5) * 0.35,
      color: COLORS[Math.floor(Math.random() * COLORS.length)],
      alpha: Math.random() * 0.6 + 0.15,
    }));
    let raf: number;
    const draw = () => {
      ctx.clearRect(0, 0, W, H);
      for (const p of pts) {
        ctx.beginPath(); ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = p.color; ctx.globalAlpha = p.alpha; ctx.fill();
        p.x += p.dx; p.y += p.dy;
        if (p.x < 0 || p.x > W) p.dx *= -1;
        if (p.y < 0 || p.y > H) p.dy *= -1;
      }
      for (let i = 0; i < pts.length; i++) {
        for (let j = i + 1; j < pts.length; j++) {
          const dx = pts[i].x - pts[j].x, dy = pts[i].y - pts[j].y;
          const d = Math.sqrt(dx * dx + dy * dy);
          if (d < 130) {
            ctx.beginPath(); ctx.moveTo(pts[i].x, pts[i].y); ctx.lineTo(pts[j].x, pts[j].y);
            ctx.strokeStyle = "#8b5cf6"; ctx.globalAlpha = (1 - d / 130) * 0.1;
            ctx.lineWidth = 0.5; ctx.stroke();
          }
        }
      }
      ctx.globalAlpha = 1;
      raf = requestAnimationFrame(draw);
    };
    draw();
    return () => cancelAnimationFrame(raf);
  }, []);
  return <canvas ref={ref} className="fixed inset-0 pointer-events-none z-0" style={{ opacity: "var(--p-op)" }} />;
}

export default function Background() {
  return (
    <>
      <ParticleCanvas />

      {/* Aurora blobs */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div style={{ position:"absolute", top:"-15%", left:"-10%", width:"55vw", height:"55vw", borderRadius:"50%", background:"radial-gradient(circle, rgba(109,40,217,0.3) 0%, transparent 65%)", filter:"blur(60px)", animation:"aurora 18s ease-in-out infinite" }} />
        <div style={{ position:"absolute", top:"-8%", right:"-18%", width:"50vw", height:"50vw", borderRadius:"50%", background:"radial-gradient(circle, rgba(6,182,212,0.2) 0%, transparent 65%)", filter:"blur(70px)", animation:"aurora 24s ease-in-out infinite reverse" }} />
        <div style={{ position:"absolute", top:"35%", left:"20%", width:"50vw", height:"38vw", borderRadius:"50%", background:"radial-gradient(ellipse, rgba(219,39,119,0.10) 0%, transparent 65%)", filter:"blur(80px)", animation:"aurora 30s ease-in-out infinite reverse 4s" }} />
        <div style={{ position:"absolute", bottom:"-18%", left:"5%", width:"50vw", height:"50vw", borderRadius:"50%", background:"radial-gradient(circle, rgba(124,58,237,0.25) 0%, transparent 65%)", filter:"blur(60px)", animation:"aurora 22s ease-in-out infinite 6s" }} />
        <div style={{ position:"absolute", bottom:"-12%", right:"-8%", width:"40vw", height:"40vw", borderRadius:"50%", background:"radial-gradient(circle, rgba(20,184,166,0.15) 0%, transparent 65%)", filter:"blur(70px)", animation:"aurora 26s ease-in-out infinite 9s" }} />
      </div>

      {/* Grid */}
      <div className="fixed inset-0 bg-grid pointer-events-none z-0" />

      {/* Geometric decorations */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        {[180,130,85,45].map((s,i) => (
          <div key={i} style={{ position:"absolute", top:"3rem", right:"2rem", width:s, height:s, marginTop:(180-s)/2, marginRight:(180-s)/2, borderRadius:"50%", border:`1px solid rgba(139,92,246,${0.06+i*0.05})`, animation:`${i%2===0?"spin-slow":"spin-reverse"} ${20+i*5}s linear infinite` }} />
        ))}
        {[56,36,18].map((s,i) => (
          <div key={i} style={{ position:"absolute", bottom:`${7+i*3}rem`, left:`${2.5+i*1.2}rem`, width:s, height:s, border:`1px solid rgba(244,114,182,${0.12+i*0.1})`, transform:"rotate(45deg)", animation:`float-slow ${9+i*2}s ease-in-out infinite`, animationDelay:`${i*1.5}s` }} />
        ))}
        <svg className="absolute" style={{ top:"9rem", left:"1.5rem", opacity:0.08, animation:"float-slow 12s ease-in-out infinite", animationDelay:"3s" }} width="70" height="70" viewBox="0 0 70 70">
          <polygon points="35,3 67,62 3,62" fill="none" stroke="#8b5cf6" strokeWidth="1.5"/>
        </svg>
        <svg className="absolute" style={{ top:"55%", right:"1.5rem", opacity:0.08, animation:"float 10s ease-in-out infinite", animationDelay:"2s" }} width="36" height="36" viewBox="0 0 36 36">
          <line x1="18" y1="0" x2="18" y2="36" stroke="#06b6d4" strokeWidth="1.5"/>
          <line x1="0" y1="18" x2="36" y2="18" stroke="#06b6d4" strokeWidth="1.5"/>
        </svg>
        <svg className="absolute" style={{ top:"65%", left:"1.5rem", opacity:0.08, animation:"float-slow 14s ease-in-out infinite", animationDelay:"5s" }} width="54" height="54" viewBox="0 0 54 54">
          <polygon points="27,2 50,14 50,40 27,52 4,40 4,14" fill="none" stroke="#f472b6" strokeWidth="1.5"/>
        </svg>
        {[
          { top:"10%",  left:"5%",   color:"#8b5cf6", d:"0s",   s:4 },
          { top:"25%",  right:"4%",  color:"#06b6d4", d:"1.5s", s:3 },
          { top:"45%",  left:"2%",   color:"#f472b6", d:"3s",   s:5 },
          { top:"70%",  right:"7%",  color:"#a78bfa", d:"2s",   s:3 },
          { top:"85%",  left:"8%",   color:"#06b6d4", d:"4s",   s:4 },
          { top:"18%",  right:"11%", color:"#c084fc", d:"0.8s", s:3 },
        ].map((d,i) => (
          <div key={i} style={{ position:"absolute", top:d.top, [d.left?"left":"right"]:d.left||d.right, width:d.s, height:d.s, borderRadius:"50%", background:d.color, boxShadow:`0 0 ${d.s*3}px ${d.color}`, animation:`twinkle ${3.5+i*0.6}s ease-in-out infinite`, animationDelay:d.d }} />
        ))}
      </div>

      {/* Wave bottom */}
      <div className="fixed bottom-0 left-0 w-full pointer-events-none z-0 overflow-hidden" style={{ height:100 }}>
        <svg viewBox="0 0 1440 100" preserveAspectRatio="none" style={{ width:"200%", height:"100%", animation:"wave-x 20s linear infinite" }}>
          <path d="M0,50 C180,90 360,10 540,50 C720,90 900,10 1080,50 C1260,90 1440,10 1440,50 L1440,100 L0,100 Z" fill="rgba(139,92,246,0.04)"/>
          <path d="M0,70 C200,30 400,100 600,70 C800,40 1000,100 1200,70 C1350,50 1440,80 1440,70 L1440,100 L0,100 Z" fill="rgba(6,182,212,0.03)"/>
        </svg>
      </div>
    </>
  );
}
