"use client";
import { useEffect, useRef, useState } from "react";

const stats = [
  { value: 15, suffix: "+", label: "Projects Completed", icon: "🚀" },
  { value: 3,  suffix: "+", label: "Years of Experience", icon: "💼" },
  { value: 5,  suffix: "",  label: "Technologies Mastered", icon: "⚡" },
  { value: 98, suffix: "%", label: "Client Satisfaction", icon: "🌟" },
];

function CountUp({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting && !started.current) {
        started.current = true;
        let start = 0;
        const duration = 1800;
        const step = (timestamp: number, startTime: number) => {
          const progress = Math.min((timestamp - startTime) / duration, 1);
          const ease = 1 - Math.pow(1 - progress, 3);
          setCount(Math.floor(ease * target));
          if (progress < 1) requestAnimationFrame((t) => step(t, startTime));
        };
        requestAnimationFrame((t) => step(t, t));
      }
    }, { threshold: 0.5 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [target]);

  return <span ref={ref}>{count}{suffix}</span>;
}

export default function Stats() {
  return (
    <section className="py-16 px-4">
      <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4">
        {stats.map((s) => (
          <div
            key={s.label}
            className="glass rounded-2xl p-6 text-center hover:scale-105 transition-all duration-300 group"
            style={{ borderColor: "var(--border-hi)" }}
          >
            <div className="text-3xl mb-2">{s.icon}</div>
            <div
              className="text-3xl sm:text-4xl font-black mb-1"
              style={{ color: "var(--purple)" }}
            >
              <CountUp target={s.value} suffix={s.suffix} />
            </div>
            <p className="text-xs font-medium tracking-wide uppercase" style={{ color: "var(--t3)" }}>
              {s.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
