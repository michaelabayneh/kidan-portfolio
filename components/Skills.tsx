"use client";
import { useEffect, useRef, useState } from "react";

const techSkills = [
  { name: "React / Next.js", level: 88 },
  { name: "TypeScript / JavaScript", level: 85 },
  { name: "Python", level: 80 },
  { name: "Node.js / Express", level: 75 },
  { name: "Databases (SQL/NoSQL)", level: 72 },
  { name: "Git & DevOps", level: 70 },
];

const creativeSkills = [
  { name: "Graphic Design", level: 92 },
  { name: "Video Editing", level: 88 },
  { name: "Digital Marketing", level: 85 },
  { name: "UI/UX Design", level: 78 },
  { name: "Content Creation", level: 90 },
  { name: "Brand Strategy", level: 75 },
];

function SkillBar({ name, level, color }: { name: string; level: number; color: string }) {
  const [width, setWidth] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setWidth(level); },
      { threshold: 0.3 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [level]);

  return (
    <div ref={ref} className="mb-4">
      <div className="flex justify-between mb-1">
        <span className="text-sm" style={{ color: "var(--text-secondary)" }}>{name}</span>
        <span className="text-sm" style={{ color: "var(--text-muted)" }}>{level}%</span>
      </div>
      <div className="h-2 rounded-full overflow-hidden" style={{ background: "var(--border)" }}>
        <div
          className={`h-full rounded-full transition-all duration-1000 ease-out ${color}`}
          style={{ width: `${width}%` }}
        />
      </div>
    </div>
  );
}

const softSkills = [
  "Leadership", "Communication", "Problem Solving",
  "Team Collaboration", "Public Speaking", "Event Management",
  "Critical Thinking", "Adaptability",
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-4 relative overflow-hidden scroll-mt-16">
      {/* decorative corner shapes */}
      <div className="absolute top-0 right-0 w-64 h-64 opacity-5 pointer-events-none">
        <svg viewBox="0 0 200 200" fill="none">
          <circle cx="200" cy="0" r="160" stroke="#8b5cf6" strokeWidth="1"/>
          <circle cx="200" cy="0" r="120" stroke="#06b6d4" strokeWidth="1"/>
          <circle cx="200" cy="0" r="80" stroke="#f472b6" strokeWidth="1"/>
        </svg>
      </div>
      <div className="absolute bottom-0 left-0 w-64 h-64 opacity-5 pointer-events-none rotate-180">
        <svg viewBox="0 0 200 200" fill="none">
          <circle cx="200" cy="0" r="160" stroke="#8b5cf6" strokeWidth="1"/>
          <circle cx="200" cy="0" r="120" stroke="#06b6d4" strokeWidth="1"/>
        </svg>
      </div>

      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-sm font-medium tracking-widest uppercase mb-2" style={{ color: "var(--purple)" }}>What I Do</p>
          <h2 className="text-3xl sm:text-4xl font-bold" style={{ color: "var(--text-primary)" }}>
            My <span className="gradient-text">Skills</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div className="glass rounded-2xl p-8">
            <h3 className="text-lg font-semibold mb-6 text-cyan-400">⚡ Technical Skills</h3>
            {techSkills.map((s) => (
              <SkillBar key={s.name} {...s} color="bg-gradient-to-r from-purple-600 to-cyan-500" />
            ))}
          </div>
          <div className="glass rounded-2xl p-8">
            <h3 className="text-lg font-semibold mb-6 text-pink-400">🎨 Creative Skills</h3>
            {creativeSkills.map((s) => (
              <SkillBar key={s.name} {...s} color="bg-gradient-to-r from-pink-500 to-purple-500" />
            ))}
          </div>
        </div>

        <div className="text-center">
          <h3 className="text-lg font-semibold mb-6" style={{ color: "var(--text-secondary)" }}>Soft Skills</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {softSkills.map((s) => (
              <span
                key={s}
                className="px-4 py-2 rounded-full glass text-sm transition-all duration-200 cursor-default hover:scale-105"
                style={{ color: "var(--text-secondary)", borderColor: "var(--border-accent)" }}
              >
                {s}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
