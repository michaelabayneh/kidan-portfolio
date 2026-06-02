"use client";
import { GraduationCap, Users, Award } from "lucide-react";

const highlights = [
  {
    icon: <GraduationCap className="text-purple-400" size={28} />,
    title: "5th Year Student",
    desc: "Software Engineering at a leading university, mastering full-stack development, algorithms, and system design.",
  },
  {
    icon: <Users className="text-cyan-400" size={28} />,
    title: "Student Union Leader",
    desc: "General Service Affairs officer and next Student Union President — advocating for student welfare and community growth.",
  },
  {
    icon: <Award className="text-pink-400" size={28} />,
    title: "Creative Professional",
    desc: "Bringing ideas to life through graphic design, video editing, and digital marketing strategies.",
  },
];

export default function About() {
  return (
    <section id="about" className="py-24 px-4 max-w-6xl mx-auto relative scroll-mt-16">
      {/* Section accent */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-24 bg-gradient-to-b from-transparent via-purple-500/50 to-transparent" />
      <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-purple-500 shadow-lg shadow-purple-500/50" />

      <div className="text-center mb-16">
        <p className="text-sm font-medium tracking-widest uppercase mb-2" style={{ color: "var(--purple)" }}>Who I Am</p>
        <h2 className="text-3xl sm:text-4xl font-bold" style={{ color: "var(--text-primary)" }}>
          About <span className="gradient-text">Me</span>
        </h2>
      </div>

      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <p className="text-lg leading-relaxed" style={{ color: "var(--text-secondary)" }}>
            I&apos;m <span className="font-semibold" style={{ color: "var(--purple)" }}>Michael Abayneh</span>, a 5th-year Software
            Engineering student with a deep passion for technology and community leadership. I blend technical
            skills with creative abilities to deliver impactful solutions.
          </p>
          <p className="leading-relaxed" style={{ color: "var(--text-muted)" }}>
            As the General Service Affairs officer in the Student Union — and soon to be President — I work to
            bridge the gap between students and administration, ensuring every voice is heard.
          </p>
          <p className="leading-relaxed" style={{ color: "var(--text-muted)" }}>
            Beyond code, I express myself through graphic design, video production, and digital marketing,
            helping brands and communities grow in the digital space.
          </p>

          <div className="flex flex-wrap gap-3 pt-2">
            {["Next.js", "React", "TypeScript", "Node.js", "Python", "Figma"].map((t) => (
              <span
                key={t}
                className="px-3 py-1 rounded-full text-xs font-medium glass"
                style={{ color: "var(--purple)", borderColor: "var(--border-accent)" }}
              >
                {t}
              </span>
            ))}
          </div>
        </div>

        <div className="space-y-4">
          {highlights.map((h) => (
            <div
              key={h.title}
              className="glass rounded-2xl p-6 flex gap-4 items-start transition-all duration-300 hover:translate-x-2"
              style={{ borderColor: "var(--border)" }}
            >
              <div className="mt-1 shrink-0">{h.icon}</div>
              <div>
                <h3 className="font-semibold mb-1" style={{ color: "var(--text-primary)" }}>{h.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>{h.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
