"use client";
import { useState } from "react";
import { ExternalLink, GitFork, Code2, Palette, TrendingUp } from "lucide-react";

const categories = ["All", "Software", "Design", "Marketing"];

const projects = [
  {
    title: "Student Union Portal",
    desc: "A full-stack web portal for student union activities, event management, and student-administration communication.",
    tags: ["Next.js", "TypeScript", "PostgreSQL"],
    category: "Software",
    icon: <Code2 size={20} />,
    gradient: "linear-gradient(135deg, rgba(139,92,246,0.2), rgba(6,182,212,0.1))",
    accentColor: "#8b5cf6",
  },
  {
    title: "Campus Event App",
    desc: "Mobile-friendly app for discovering, RSVP-ing, and tracking campus events with real-time notifications.",
    tags: ["React", "Node.js", "Firebase"],
    category: "Software",
    icon: <Code2 size={20} />,
    gradient: "linear-gradient(135deg, rgba(6,182,212,0.2), rgba(59,130,246,0.1))",
    accentColor: "#06b6d4",
  },
  {
    title: "Brand Identity Design",
    desc: "Complete brand identity package — logo, color palette, typography, and style guide for a local startup.",
    tags: ["Figma", "Illustrator", "Photoshop"],
    category: "Design",
    icon: <Palette size={20} />,
    gradient: "linear-gradient(135deg, rgba(244,114,182,0.2), rgba(139,92,246,0.1))",
    accentColor: "#f472b6",
  },
  {
    title: "Promo Video Series",
    desc: "Produced and edited promotional videos for university events with motion graphics and sound design.",
    tags: ["Premiere Pro", "After Effects"],
    category: "Design",
    icon: <Palette size={20} />,
    gradient: "linear-gradient(135deg, rgba(251,146,60,0.2), rgba(239,68,68,0.1))",
    accentColor: "#fb923c",
  },
  {
    title: "Digital Marketing Campaign",
    desc: "Led a social media campaign that grew a student community page by 300% in 3 months through targeted content strategy.",
    tags: ["Meta Ads", "Analytics", "Content Strategy"],
    category: "Marketing",
    icon: <TrendingUp size={20} />,
    gradient: "linear-gradient(135deg, rgba(34,197,94,0.2), rgba(6,182,212,0.1))",
    accentColor: "#22c55e",
  },
  {
    title: "E-commerce Platform",
    desc: "Scalable e-commerce solution with payment integration, inventory management, and admin dashboard.",
    tags: ["Next.js", "Stripe", "MongoDB"],
    category: "Software",
    icon: <Code2 size={20} />,
    gradient: "linear-gradient(135deg, rgba(167,139,250,0.2), rgba(139,92,246,0.1))",
    accentColor: "#a78bfa",
  },
];

export default function Projects() {
  const [active, setActive] = useState("All");

  const filtered = active === "All" ? projects : projects.filter((p) => p.category === active);

  return (
    <section id="projects" className="py-24 px-4 max-w-6xl mx-auto scroll-mt-16">
      <div className="text-center mb-12">
        <p className="text-sm font-medium tracking-widest uppercase mb-2" style={{ color: "var(--purple)" }}>My Work</p>
        <h2 className="text-3xl sm:text-4xl font-bold" style={{ color: "var(--t1)" }}>
          Featured <span className="gradient-text">Projects</span>
        </h2>
      </div>

      {/* Filter tabs */}
      <div className="flex flex-wrap justify-center gap-3 mb-12">
        {categories.map((c) => (
          <button
            key={c}
            onClick={() => setActive(c)}
            className="px-5 py-2 rounded-full text-sm font-medium transition-all duration-200"
            style={
              active === c
                ? { background: "linear-gradient(135deg, var(--purple), var(--cyan))", color: "#fff", boxShadow: "0 4px 16px rgba(139,92,246,0.35)" }
                : { background: "var(--bg-card)", color: "var(--t2)", border: "1px solid var(--border)" }
            }
          >
            {c}
          </button>
        ))}
      </div>

      {/* Cards */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map((p) => (
          <div
            key={p.title}
            className="shimmer-card rounded-2xl p-6 flex flex-col hover:scale-[1.03] transition-all duration-300"
            style={{ background: p.gradient, border: `1px solid ${p.accentColor}33` }}
            onMouseEnter={e => (e.currentTarget.style.boxShadow = `0 8px 32px ${p.accentColor}22`)}
            onMouseLeave={e => (e.currentTarget.style.boxShadow = "none")}
          >
            <div
              className="w-9 h-9 rounded-xl flex items-center justify-center mb-4 text-white"
              style={{ background: p.accentColor }}
            >
              {p.icon}
            </div>
            <h3 className="font-bold text-base mb-2" style={{ color: "var(--t1)" }}>{p.title}</h3>
            <p className="text-sm leading-relaxed flex-1 mb-4" style={{ color: "var(--t2)" }}>{p.desc}</p>

            <div className="flex flex-wrap gap-1.5 mb-5">
              {p.tags.map((t) => (
                <span
                  key={t}
                  className="text-xs px-2.5 py-0.5 rounded-full"
                  style={{ background: `${p.accentColor}15`, color: p.accentColor }}
                >
                  {t}
                </span>
              ))}
            </div>

            <div className="flex gap-4">
              <button className="flex items-center gap-1 text-xs font-medium hover:opacity-70 transition-opacity" style={{ color: "var(--t3)" }}>
                <GitFork size={13} /> Code
              </button>
              <button className="flex items-center gap-1 text-xs font-medium hover:opacity-70 transition-opacity" style={{ color: "var(--t3)" }}>
                <ExternalLink size={13} /> Live
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
