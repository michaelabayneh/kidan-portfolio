"use client";
import { useState } from "react";

const testimonials = [
  {
    name: "Dr. Abebe Tadesse",
    role: "Professor, Software Engineering Dept.",
    text: "Michael is one of the most dedicated students I've taught. His ability to merge technical precision with creative problem-solving is rare. He will excel in any international software engineering environment.",
    avatar: "AT",
    color: "var(--purple)",
  },
  {
    name: "Sara Bekele",
    role: "Co-Student, Computer Science",
    text: "Working with Michael on our capstone project was outstanding. He leads with clarity, writes clean code, and his design sense elevated our entire product. A true full-stack talent.",
    avatar: "SB",
    color: "var(--cyan)",
  },
  {
    name: "Yonas Girma",
    role: "Client — Digital Marketing Campaign",
    text: "Michael handled our entire social media rebrand and campaign. In just 3 months, our engagement tripled. He understands both the technical and creative sides of digital marketing deeply.",
    avatar: "YG",
    color: "var(--pink)",
  },
  {
    name: "Tigist Haile",
    role: "Student Union Member",
    text: "As our General Service Affairs officer, Michael has transformed how the union operates. He listens, acts fast, and genuinely cares about every student. He's the leader we need as President.",
    avatar: "TH",
    color: "var(--purple)",
  },
];

export default function Testimonials() {
  const [active, setActive] = useState(0);
  const t = testimonials[active];

  return (
    <section className="py-24 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-sm font-medium tracking-widest uppercase mb-2" style={{ color: "var(--purple)" }}>
            What People Say
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold" style={{ color: "var(--t1)" }}>
            <span className="gradient-text">Testimonials</span>
          </h2>
        </div>

        {/* Main card */}
        <div
          className="glass rounded-3xl p-8 sm:p-12 mb-8 relative overflow-hidden"
          style={{ borderColor: "var(--border-hi)" }}
        >
          {/* Big quote mark */}
          <div
            className="absolute top-4 right-8 text-8xl font-black leading-none select-none pointer-events-none"
            style={{ color: "var(--border-hi)", opacity: 0.5 }}
          >
            &ldquo;
          </div>

          <p
            className="text-lg sm:text-xl leading-relaxed mb-8 relative z-10 italic"
            style={{ color: "var(--t1)" }}
          >
            &ldquo;{t.text}&rdquo;
          </p>

          <div className="flex items-center gap-4">
            <div
              className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-sm shrink-0"
              style={{ background: `linear-gradient(135deg, ${t.color}, var(--cyan))` }}
            >
              {t.avatar}
            </div>
            <div>
              <p className="font-bold" style={{ color: "var(--t1)" }}>{t.name}</p>
              <p className="text-sm" style={{ color: "var(--t3)" }}>{t.role}</p>
            </div>
            {/* Stars */}
            <div className="ml-auto flex gap-1">
              {[...Array(5)].map((_, i) => (
                <span key={i} className="text-yellow-400 text-sm">★</span>
              ))}
            </div>
          </div>
        </div>

        {/* Selector dots */}
        <div className="flex gap-3 justify-center flex-wrap">
          {testimonials.map((tm, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className="flex items-center gap-2 px-4 py-2 rounded-full text-xs font-medium transition-all duration-200"
              style={{
                background: active === i ? "var(--purple)" : "var(--bg-card)",
                color: active === i ? "#fff" : "var(--t3)",
                border: `1px solid ${active === i ? "var(--purple)" : "var(--border)"}`,
                transform: active === i ? "scale(1.05)" : "scale(1)",
              }}
            >
              <span
                className="w-5 h-5 rounded-full flex items-center justify-center text-white font-bold"
                style={{ background: active === i ? "rgba(255,255,255,0.3)" : "var(--border-hi)", fontSize: "9px" }}
              >
                {tm.avatar}
              </span>
              {tm.name.split(" ")[0]}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
