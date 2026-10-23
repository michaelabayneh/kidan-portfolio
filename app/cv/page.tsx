import { FileText, Download, Award, Briefcase, GraduationCap, Mail, Phone, MapPin } from "lucide-react";
import Link from "next/link";

export default function CVPage() {
  return (
    <main className="min-h-screen py-12 px-4" style={{ background: "var(--bg)" }}>
      <div className="max-w-4xl mx-auto">

        {/* Top bar */}
        <div className="flex items-center justify-between mb-8 flex-wrap gap-4">
          <Link
            href="/"
            className="flex items-center gap-2 text-sm font-medium transition-opacity hover:opacity-70"
            style={{ color: "var(--purple)" }}
          >
            ← Back to Portfolio
          </Link>

          <a
            href="/cv.pdf"
            download
            className="flex items-center gap-2 px-5 py-2.5 rounded-full text-white text-sm font-semibold transition-all hover:scale-105 hover:opacity-90"
            style={{ background: "linear-gradient(135deg, var(--purple), var(--cyan))", boxShadow: "0 4px 20px rgba(139,92,246,0.4)" }}
          >
            <Download size={15} /> Download CV (PDF)
          </a>
        </div>

        {/* CV Card */}
        <div className="glass rounded-3xl overflow-hidden" style={{ borderColor: "var(--border-hi)" }}>

          {/* Header banner */}
          <div
            className="p-8 sm:p-12 relative overflow-hidden"
            style={{ background: "linear-gradient(135deg, rgba(139,92,246,0.25), rgba(6,182,212,0.15))" }}
          >
            <div
              className="absolute top-0 right-0 w-64 h-64 rounded-full opacity-10 pointer-events-none"
              style={{ background: "conic-gradient(from 0deg, #8b5cf6, #06b6d4, transparent)", animation: "spin-slow 20s linear infinite" }}
            />
            <div className="relative z-10">
              <h1 className="text-3xl sm:text-4xl font-black mb-1" style={{ color: "var(--t1)" }}>
                Michael Abayneh
              </h1>
              <p className="text-lg font-medium mb-4" style={{ color: "var(--purple)" }}>
                Software Engineer · Designer · Student Union Leader
              </p>
              <div className="flex flex-wrap gap-4 text-sm" style={{ color: "var(--t2)" }}>
                <a href="mailto:abaynehbirhan29@gmail.com" className="flex items-center gap-1.5 hover:opacity-70 transition-opacity">
                  <Mail size={13} /> abaynehbirhan29@gmail.com
                </a>
                <a href="tel:+251924580928" className="flex items-center gap-1.5 hover:opacity-70 transition-opacity">
                  <Phone size={13} /> 0924580928
                </a>
                <a href="https://t.me/Nove24" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 hover:opacity-70 transition-opacity">
                  <MapPin size={13} /> @Nove24 (Telegram)
                </a>
              </div>
            </div>
          </div>

          <div className="p-8 sm:p-12 space-y-10">

            {/* Summary */}
            <div>
              <h2 className="text-sm font-bold tracking-widest uppercase mb-3 flex items-center gap-2" style={{ color: "var(--purple)" }}>
                <FileText size={14} /> Profile Summary
              </h2>
              <p className="leading-relaxed" style={{ color: "var(--t2)" }}>
                5th-year Software Engineering student with strong expertise in full-stack web development, graphic design, video editing, and digital marketing. Proven leader as Student Union General Service Affairs officer and incoming President. Passionate about building impactful digital products and empowering communities through technology.
              </p>
            </div>

            {/* Education */}
            <div>
              <h2 className="text-sm font-bold tracking-widest uppercase mb-4 flex items-center gap-2" style={{ color: "var(--cyan)" }}>
                <GraduationCap size={14} /> Education
              </h2>
              <div className="glass rounded-2xl p-5" style={{ borderLeft: "3px solid var(--cyan)" }}>
                <div className="flex justify-between flex-wrap gap-1 mb-1">
                  <h3 className="font-bold" style={{ color: "var(--t1)" }}>BSc in Software Engineering</h3>
                  <span className="text-xs px-2 py-0.5 rounded-full" style={{ background: "rgba(6,182,212,0.15)", color: "var(--cyan)" }}>2020 – Present</span>
                </div>
                <p className="text-sm font-medium mb-1" style={{ color: "var(--cyan)" }}>University of Technology · Ethiopia</p>
                <p className="text-sm" style={{ color: "var(--t2)" }}>
                  Focused on full-stack development, algorithms, software architecture, databases, and cloud computing.
                </p>
              </div>
            </div>

            {/* Experience */}
            <div>
              <h2 className="text-sm font-bold tracking-widest uppercase mb-4 flex items-center gap-2" style={{ color: "var(--pink)" }}>
                <Briefcase size={14} /> Experience
              </h2>
              <div className="space-y-4">
                {[
                  {
                    title: "Next Student Union President",
                    org: "Student Union",
                    period: "2024 – Present",
                    desc: "Elected to lead the student union. Overseeing student affairs, events, and welfare programs.",
                    color: "var(--pink)",
                  },
                  {
                    title: "General Service Affairs Officer",
                    org: "Student Union",
                    period: "2023 – Present",
                    desc: "Managing general service operations and coordinating between students and administration.",
                    color: "var(--purple)",
                  },
                  {
                    title: "Freelance Creative Designer",
                    org: "Self-Employed",
                    period: "2022 – Present",
                    desc: "Delivering graphic design, video editing, and digital marketing services to businesses across Ethiopia.",
                    color: "var(--cyan)",
                  },
                ].map((e) => (
                  <div key={e.title} className="glass rounded-2xl p-5" style={{ borderLeft: `3px solid ${e.color}` }}>
                    <div className="flex justify-between flex-wrap gap-1 mb-1">
                      <h3 className="font-bold" style={{ color: "var(--t1)" }}>{e.title}</h3>
                      <span className="text-xs px-2 py-0.5 rounded-full" style={{ background: `${e.color}22`, color: e.color }}>{e.period}</span>
                    </div>
                    <p className="text-sm font-medium mb-1" style={{ color: e.color }}>{e.org}</p>
                    <p className="text-sm" style={{ color: "var(--t2)" }}>{e.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Skills */}
            <div>
              <h2 className="text-sm font-bold tracking-widest uppercase mb-4 flex items-center gap-2" style={{ color: "var(--purple)" }}>
                <Award size={14} /> Skills
              </h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  { label: "Frontend", items: "Next.js, React, TypeScript, Tailwind CSS" },
                  { label: "Backend", items: "Node.js, Python, PostgreSQL, MongoDB" },
                  { label: "Creative", items: "Photoshop, Figma, Premiere Pro, After Effects" },
                  { label: "Marketing", items: "Meta Ads, SEO, Content Strategy, Analytics" },
                ].map((s) => (
                  <div key={s.label} className="glass rounded-xl p-4">
                    <p className="text-xs font-bold uppercase tracking-wider mb-1" style={{ color: "var(--purple)" }}>{s.label}</p>
                    <p className="text-sm" style={{ color: "var(--t2)" }}>{s.items}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Documents */}
            <div>
              <h2 className="text-sm font-bold tracking-widest uppercase mb-4 flex items-center gap-2" style={{ color: "var(--pink)" }}>
                <Award size={14} /> Documents
              </h2>
              <div className="grid sm:grid-cols-3 gap-4">
                <a
                  href="/cv.pdf"
                  download
                  className="glass rounded-2xl p-5 flex flex-col items-center gap-3 text-center hover:scale-105 transition-all duration-200 group"
                  style={{ borderColor: "var(--purple)", borderWidth: 1 }}
                >
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: "rgba(139,92,246,0.2)" }}>
                    <FileText size={20} style={{ color: "var(--purple)" }} />
                  </div>
                  <div>
                    <p className="font-bold text-sm" style={{ color: "var(--t1)" }}>My CV</p>
                    <p className="text-xs" style={{ color: "var(--t3)" }}>Download PDF</p>
                  </div>
                  <Download size={14} style={{ color: "var(--purple)" }} />
                </a>

                <a
                  href="/certificate.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass rounded-2xl p-5 flex flex-col items-center gap-3 text-center hover:scale-105 transition-all duration-200"
                  style={{ borderColor: "var(--cyan)", borderWidth: 1 }}
                >
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: "rgba(6,182,212,0.2)" }}>
                    <Award size={20} style={{ color: "var(--cyan)" }} />
                  </div>
                  <div>
                    <p className="font-bold text-sm" style={{ color: "var(--t1)" }}>Certificate</p>
                    <p className="text-xs" style={{ color: "var(--t3)" }}>View Document</p>
                  </div>
                  <FileText size={14} style={{ color: "var(--cyan)" }} />
                </a>

                <a
                  href="/recommendation.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass rounded-2xl p-5 flex flex-col items-center gap-3 text-center hover:scale-105 transition-all duration-200"
                  style={{ borderColor: "var(--pink)", borderWidth: 1 }}
                >
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: "rgba(244,114,182,0.2)" }}>
                    <Award size={20} style={{ color: "var(--pink)" }} />
                  </div>
                  <div>
                    <p className="font-bold text-sm" style={{ color: "var(--t1)" }}>Recommendation</p>
                    <p className="text-xs" style={{ color: "var(--t3)" }}>View Letter</p>
                  </div>
                  <FileText size={14} style={{ color: "var(--pink)" }} />
                </a>
              </div>
              <p className="text-xs mt-3 text-center" style={{ color: "var(--t3)" }}>
                📁 Drop your PDF files into <code className="px-1 py-0.5 rounded" style={{ background: "var(--bg-card)" }}>portfolio/public/</code> named: <code>cv.pdf</code>, <code>certificate.pdf</code>, <code>recommendation.pdf</code>
              </p>
            </div>

          </div>
        </div>
      </div>
    </main>
  );
}
