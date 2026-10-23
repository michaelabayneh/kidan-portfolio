"use client";
import { GraduationCap, Users, Award } from "lucide-react";

const highlights = [
  { icon: <GraduationCap size={26} color="#8b5cf6" />, title: "5th Year Student", desc: "Software Engineering at a leading university, mastering full-stack development, algorithms, and system design." },
  { icon: <Users size={26} color="#06b6d4" />, title: "Student Union Leader", desc: "General Service Affairs officer and next Student Union President — advocating for student welfare and community growth." },
  { icon: <Award size={26} color="#f472b6" />, title: "Creative Professional", desc: "Bringing ideas to life through graphic design, video editing, and digital marketing strategies." },
];

const tags = ["Next.js","React","TypeScript","Node.js","Python","Figma"];

export default function About() {
  return (
    <section id="about" style={{ padding:"6rem 1rem", maxWidth:1152, margin:"0 auto", position:"relative", scrollMarginTop:64 }}>
      <div style={{ position:"absolute", top:0, left:"50%", transform:"translateX(-50%)", width:1, height:96, background:"linear-gradient(to bottom, transparent, rgba(139,92,246,0.5), transparent)" }} />
      <div style={{ position:"absolute", top:-4, left:"50%", transform:"translateX(-50%)", width:8, height:8, borderRadius:"50%", background:"#8b5cf6", boxShadow:"0 0 12px #8b5cf6" }} />

      <div style={{ textAlign:"center", marginBottom:"4rem" }}>
        <p style={{ color:"var(--purple)", fontSize:"0.75rem", fontWeight:600, letterSpacing:"0.15em", textTransform:"uppercase", marginBottom:"0.5rem" }}>Who I Am</p>
        <h2 style={{ fontSize:"clamp(1.75rem,4vw,2.25rem)", fontWeight:800, color:"var(--t1)" }}>
          About <span className="gradient-text">Me</span>
        </h2>
      </div>

      <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit, minmax(280px,1fr))", gap:"3rem", alignItems:"start" }}>
        <div style={{ display:"flex", flexDirection:"column", gap:"1.25rem" }}>
          <p style={{ fontSize:"1.05rem", lineHeight:1.7, color:"var(--t2)" }}>
            I&apos;m <strong style={{ color:"var(--purple)" }}>Michael Abayneh</strong>, a 5th-year Software Engineering student with a deep passion for technology and community leadership.
          </p>
          <p style={{ lineHeight:1.7, color:"var(--t3)" }}>As General Service Affairs officer in the Student Union — and soon to be President — I bridge the gap between students and administration.</p>
          <p style={{ lineHeight:1.7, color:"var(--t3)" }}>Beyond code, I create through graphic design, video production, and digital marketing, helping brands grow in the digital space.</p>
          <div style={{ display:"flex", flexWrap:"wrap", gap:"0.5rem", paddingTop:"0.5rem" }}>
            {tags.map(t => (
              <span key={t} style={{ padding:"0.25rem 0.75rem", borderRadius:999, fontSize:"0.75rem", fontWeight:500, background:"var(--bg-card)", border:"1px solid var(--border-hi)", color:"var(--purple)" }}>{t}</span>
            ))}
          </div>
        </div>

        <div style={{ display:"flex", flexDirection:"column", gap:"1rem" }}>
          {highlights.map(h => (
            <div key={h.title} className="glass" style={{ borderRadius:16, padding:"1.25rem 1.5rem", display:"flex", gap:"1rem", alignItems:"flex-start", transition:"transform 0.3s" }}
              onMouseEnter={e => (e.currentTarget.style.transform="translateX(6px)")}
              onMouseLeave={e => (e.currentTarget.style.transform="translateX(0)")}
            >
              <div style={{ marginTop:2, flexShrink:0 }}>{h.icon}</div>
              <div>
                <h3 style={{ fontWeight:700, marginBottom:"0.25rem", color:"var(--t1)" }}>{h.title}</h3>
                <p style={{ fontSize:"0.875rem", lineHeight:1.6, color:"var(--t3)" }}>{h.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
