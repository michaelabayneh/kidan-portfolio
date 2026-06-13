"use client";
import { useEffect, useRef, useState } from "react";

const stats = [
  { value:15, suffix:"+", label:"Projects Completed", icon:"🚀" },
  { value:3,  suffix:"+", label:"Years Experience",   icon:"💼" },
  { value:5,  suffix:"",  label:"Technologies",       icon:"⚡" },
  { value:98, suffix:"%", label:"Client Satisfaction",icon:"🌟" },
];

function CountUp({ target, suffix }: { target:number; suffix:string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting && !started.current) {
        started.current = true;
        const step = (ts: number, t0: number) => {
          const p = Math.min((ts - t0) / 1800, 1);
          setCount(Math.floor((1 - Math.pow(1 - p, 3)) * target));
          if (p < 1) requestAnimationFrame(t => step(t, t0));
        };
        requestAnimationFrame(t => step(t, t));
      }
    }, { threshold: 0.5 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [target]);
  return <span ref={ref}>{count}{suffix}</span>;
}

export default function Stats() {
  return (
    <section style={{ padding:"4rem 1.5rem" }}>
      <div style={{ maxWidth:1000, margin:"0 auto", display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(180px,1fr))", gap:"1rem" }}>
        {stats.map(s => (
          <div key={s.label} className="glass" style={{ borderRadius:20, padding:"1.75rem 1rem", textAlign:"center", border:"1px solid var(--border-hi)", transition:"transform 0.3s" }}
            onMouseEnter={e=>(e.currentTarget.style.transform="scale(1.05)")}
            onMouseLeave={e=>(e.currentTarget.style.transform="scale(1)")}
          >
            <div style={{ fontSize:"2rem", marginBottom:"0.5rem" }}>{s.icon}</div>
            <div style={{ fontSize:"2.25rem", fontWeight:900, color:"var(--purple)", lineHeight:1 }}>
              <CountUp target={s.value} suffix={s.suffix} />
            </div>
            <p style={{ fontSize:"0.7rem", fontWeight:600, color:"var(--t3)", textTransform:"uppercase", letterSpacing:"0.1em", marginTop:"0.4rem" }}>{s.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
