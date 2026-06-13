"use client";
import { useState } from "react";

const testimonials = [
  { name:"Dr. Abebe Tadesse", role:"Professor, Software Engineering Dept.", text:"Michael is one of the most dedicated students I've taught. His ability to merge technical precision with creative problem-solving is rare. He will excel in any international software engineering environment.", avatar:"AT", color:"#8b5cf6" },
  { name:"Sara Bekele",       role:"Co-Student, Computer Science",          text:"Working with Michael on our capstone project was outstanding. He leads with clarity, writes clean code, and his design sense elevated our entire product. A true full-stack talent.", avatar:"SB", color:"#06b6d4" },
  { name:"Yonas Girma",       role:"Client — Digital Marketing Campaign",   text:"Michael handled our entire social media rebrand and campaign. In just 3 months, our engagement tripled. He understands both the technical and creative sides deeply.", avatar:"YG", color:"#f472b6" },
  { name:"Tigist Haile",      role:"Student Union Member",                  text:"As our General Service Affairs officer, Michael has transformed how the union operates. He listens, acts fast, and genuinely cares about every student.", avatar:"TH", color:"#a78bfa" },
];

export default function Testimonials() {
  const [active, setActive] = useState(0);
  const t = testimonials[active];

  return (
    <section style={{ padding:"6rem 1.5rem" }}>
      <div style={{ maxWidth:800, margin:"0 auto" }}>
        <div style={{ textAlign:"center", marginBottom:"4rem" }}>
          <p style={{ color:"var(--purple)", fontSize:"0.75rem", fontWeight:600, letterSpacing:"0.15em", textTransform:"uppercase", marginBottom:"0.5rem" }}>What People Say</p>
          <h2 style={{ fontSize:"clamp(1.75rem,4vw,2.25rem)", fontWeight:800, color:"var(--t1)" }}><span className="gradient-text">Testimonials</span></h2>
        </div>

        {/* Card */}
        <div className="glass" style={{ borderRadius:24, padding:"2.5rem", marginBottom:"1.5rem", position:"relative", overflow:"hidden", border:"1px solid var(--border-hi)" }}>
          <div style={{ position:"absolute", top:8, right:24, fontSize:"6rem", fontWeight:900, color:"var(--border-hi)", lineHeight:1, userSelect:"none", pointerEvents:"none", opacity:0.4 }}>&ldquo;</div>
          <p style={{ fontSize:"clamp(1rem,2.5vw,1.15rem)", lineHeight:1.75, color:"var(--t1)", fontStyle:"italic", marginBottom:"2rem", position:"relative" }}>&ldquo;{t.text}&rdquo;</p>
          <div style={{ display:"flex", alignItems:"center", gap:"1rem", flexWrap:"wrap" }}>
            <div style={{ width:48, height:48, borderRadius:"50%", background:`linear-gradient(135deg,${t.color},#06b6d4)`, display:"flex", alignItems:"center", justifyContent:"center", color:"#fff", fontWeight:700, fontSize:"0.85rem", flexShrink:0 }}>{t.avatar}</div>
            <div>
              <p style={{ fontWeight:700, color:"var(--t1)" }}>{t.name}</p>
              <p style={{ fontSize:"0.8rem", color:"var(--t3)" }}>{t.role}</p>
            </div>
            <div style={{ marginLeft:"auto", display:"flex", gap:"2px" }}>
              {[...Array(5)].map((_,i) => <span key={i} style={{ color:"#fbbf24", fontSize:"1rem" }}>★</span>)}
            </div>
          </div>
        </div>

        {/* Selector */}
        <div style={{ display:"flex", flexWrap:"wrap", justifyContent:"center", gap:"0.75rem" }}>
          {testimonials.map((tm, i) => (
            <button key={i} onClick={() => setActive(i)} style={{
              display:"flex", alignItems:"center", gap:"0.5rem",
              padding:"0.5rem 1rem", borderRadius:999, fontSize:"0.8rem", fontWeight:600, cursor:"pointer",
              background: active===i ? t.color : "var(--bg-card)",
              color: active===i ? "#fff" : "var(--t3)",
              border: `1px solid ${active===i ? t.color : "var(--border)"}`,
              transform: active===i ? "scale(1.05)" : "scale(1)",
              transition:"all 0.2s",
            }}>
              <span style={{ width:20, height:20, borderRadius:"50%", background: active===i ? "rgba(255,255,255,0.25)" : "var(--border-hi)", display:"flex", alignItems:"center", justifyContent:"center", fontSize:"0.6rem", fontWeight:700, color:"#fff" }}>{tm.avatar}</span>
              {tm.name.split(" ")[0]}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
