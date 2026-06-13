"use client";
import { useState } from "react";
import { ExternalLink, GitFork, Code2, Palette, TrendingUp } from "lucide-react";

const categories = ["All","Software","Design","Marketing"];

const projects = [
  { title:"Student Union Portal",   desc:"Full-stack web portal for student union activities, event management, and student-administration communication.", tags:["Next.js","TypeScript","PostgreSQL"], category:"Software",  icon:<Code2 size={18}/>,   grad:"linear-gradient(135deg,rgba(139,92,246,0.18),rgba(6,182,212,0.08))",   accent:"#8b5cf6" },
  { title:"Campus Event App",       desc:"Mobile-friendly app for discovering, RSVP-ing, and tracking campus events with real-time notifications.", tags:["React","Node.js","Firebase"],       category:"Software",  icon:<Code2 size={18}/>,   grad:"linear-gradient(135deg,rgba(6,182,212,0.18),rgba(59,130,246,0.08))",   accent:"#06b6d4" },
  { title:"Brand Identity Design",  desc:"Complete brand identity package — logo, color palette, typography, and style guide for a local startup.", tags:["Figma","Illustrator","Photoshop"],  category:"Design",    icon:<Palette size={18}/>, grad:"linear-gradient(135deg,rgba(244,114,182,0.18),rgba(139,92,246,0.08))", accent:"#f472b6" },
  { title:"Promo Video Series",     desc:"Produced and edited promotional videos for university events with motion graphics and sound design.", tags:["Premiere Pro","After Effects"],      category:"Design",    icon:<Palette size={18}/>, grad:"linear-gradient(135deg,rgba(251,146,60,0.18),rgba(239,68,68,0.08))",   accent:"#fb923c" },
  { title:"Digital Marketing",      desc:"Social media campaign that grew a student community page by 300% in 3 months through targeted content strategy.", tags:["Meta Ads","Analytics","Strategy"],  category:"Marketing", icon:<TrendingUp size={18}/>,grad:"linear-gradient(135deg,rgba(34,197,94,0.18),rgba(6,182,212,0.08))",   accent:"#22c55e" },
  { title:"E-commerce Platform",    desc:"Scalable e-commerce solution with payment integration, inventory management, and admin dashboard.", tags:["Next.js","Stripe","MongoDB"],        category:"Software",  icon:<Code2 size={18}/>,   grad:"linear-gradient(135deg,rgba(167,139,250,0.18),rgba(139,92,246,0.08))", accent:"#a78bfa" },
];

export default function Projects() {
  const [active, setActive] = useState("All");
  const filtered = active === "All" ? projects : projects.filter(p => p.category === active);

  return (
    <section id="projects" style={{ padding:"6rem 1.5rem", maxWidth:1152, margin:"0 auto", scrollMarginTop:64 }}>
      <div style={{ textAlign:"center", marginBottom:"3rem" }}>
        <p style={{ color:"var(--purple)", fontSize:"0.75rem", fontWeight:600, letterSpacing:"0.15em", textTransform:"uppercase", marginBottom:"0.5rem" }}>My Work</p>
        <h2 style={{ fontSize:"clamp(1.75rem,4vw,2.25rem)", fontWeight:800, color:"var(--t1)" }}>Featured <span className="gradient-text">Projects</span></h2>
      </div>

      {/* Filters */}
      <div style={{ display:"flex", flexWrap:"wrap", justifyContent:"center", gap:"0.75rem", marginBottom:"3rem" }}>
        {categories.map(c => (
          <button key={c} onClick={() => setActive(c)} style={{
            padding:"0.5rem 1.25rem", borderRadius:999, fontSize:"0.875rem", fontWeight:600, cursor:"pointer",
            background: active===c ? "linear-gradient(135deg,#8b5cf6,#06b6d4)" : "var(--bg-card)",
            color: active===c ? "#fff" : "var(--t2)",
            border: active===c ? "none" : "1px solid var(--border)",
            boxShadow: active===c ? "0 4px 16px rgba(139,92,246,0.35)" : "none",
            transition:"all 0.2s",
          }}>{c}</button>
        ))}
      </div>

      {/* Grid */}
      <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fill,minmax(280px,1fr))", gap:"1.25rem" }}>
        {filtered.map(p => (
          <div key={p.title} style={{ background:p.grad, border:`1px solid ${p.accent}33`, borderRadius:20, padding:"1.5rem", display:"flex", flexDirection:"column", transition:"transform 0.2s, box-shadow 0.2s", position:"relative", overflow:"hidden" }}
            onMouseEnter={e=>{e.currentTarget.style.transform="translateY(-4px)"; e.currentTarget.style.boxShadow=`0 12px 40px ${p.accent}25`;}}
            onMouseLeave={e=>{e.currentTarget.style.transform="translateY(0)"; e.currentTarget.style.boxShadow="none";}}
          >
            <div style={{ width:40, height:40, borderRadius:12, background:p.accent, display:"flex", alignItems:"center", justifyContent:"center", color:"#fff", marginBottom:"1rem", flexShrink:0 }}>{p.icon}</div>
            <h3 style={{ fontWeight:700, fontSize:"1rem", color:"var(--t1)", marginBottom:"0.5rem" }}>{p.title}</h3>
            <p style={{ fontSize:"0.85rem", lineHeight:1.6, color:"var(--t2)", flex:1, marginBottom:"1rem" }}>{p.desc}</p>
            <div style={{ display:"flex", flexWrap:"wrap", gap:"0.4rem", marginBottom:"1rem" }}>
              {p.tags.map(t => <span key={t} style={{ fontSize:"0.7rem", padding:"0.2rem 0.6rem", borderRadius:999, background:`${p.accent}18`, color:p.accent }}>{t}</span>)}
            </div>
            <div style={{ display:"flex", gap:"1rem" }}>
              <button style={{ display:"flex", alignItems:"center", gap:"0.3rem", fontSize:"0.75rem", fontWeight:600, color:"var(--t3)", background:"none", border:"none", cursor:"pointer" }}><GitFork size={12}/>Code</button>
              <button style={{ display:"flex", alignItems:"center", gap:"0.3rem", fontSize:"0.75rem", fontWeight:600, color:"var(--t3)", background:"none", border:"none", cursor:"pointer" }}><ExternalLink size={12}/>Live</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
