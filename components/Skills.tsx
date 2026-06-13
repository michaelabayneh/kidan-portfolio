"use client";
import { useEffect, useRef, useState } from "react";

const techSkills = [
  { name:"React / Next.js", level:88 },{ name:"TypeScript / JavaScript", level:85 },
  { name:"Python", level:80 },{ name:"Node.js / Express", level:75 },
  { name:"Databases (SQL/NoSQL)", level:72 },{ name:"Git & DevOps", level:70 },
];
const creativeSkills = [
  { name:"Graphic Design", level:92 },{ name:"Video Editing", level:88 },
  { name:"Digital Marketing", level:85 },{ name:"UI/UX Design", level:78 },
  { name:"Content Creation", level:90 },{ name:"Brand Strategy", level:75 },
];
const softSkills = ["Leadership","Communication","Problem Solving","Team Collaboration","Public Speaking","Event Management","Critical Thinking","Adaptability"];

function SkillBar({ name, level, grad }: { name:string; level:number; grad:string }) {
  const [w, setW] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setW(level); }, { threshold:0.3 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [level]);
  return (
    <div ref={ref} style={{ marginBottom:"1rem" }}>
      <div style={{ display:"flex", justifyContent:"space-between", marginBottom:"0.3rem" }}>
        <span style={{ fontSize:"0.875rem", color:"var(--t2)" }}>{name}</span>
        <span style={{ fontSize:"0.875rem", color:"var(--t3)" }}>{level}%</span>
      </div>
      <div style={{ height:6, borderRadius:999, background:"var(--border)", overflow:"hidden" }}>
        <div style={{ height:"100%", width:`${w}%`, borderRadius:999, background:grad, transition:"width 1.2s cubic-bezier(0.4,0,0.2,1)" }} />
      </div>
    </div>
  );
}

export default function Skills() {
  return (
    <section id="skills" style={{ padding:"6rem 1rem", position:"relative", overflow:"hidden", scrollMarginTop:64 }}>
      <div style={{ maxWidth:1152, margin:"0 auto" }}>
        <div style={{ textAlign:"center", marginBottom:"4rem" }}>
          <p style={{ color:"var(--purple)", fontSize:"0.75rem", fontWeight:600, letterSpacing:"0.15em", textTransform:"uppercase", marginBottom:"0.5rem" }}>What I Do</p>
          <h2 style={{ fontSize:"clamp(1.75rem,4vw,2.25rem)", fontWeight:800, color:"var(--t1)" }}>My <span className="gradient-text">Skills</span></h2>
        </div>

        <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit, minmax(280px,1fr))", gap:"2rem", marginBottom:"3rem" }}>
          <div className="glass" style={{ borderRadius:20, padding:"2rem" }}>
            <h3 style={{ fontSize:"1rem", fontWeight:700, marginBottom:"1.5rem", color:"var(--cyan)" }}>⚡ Technical Skills</h3>
            {techSkills.map(s => <SkillBar key={s.name} {...s} grad="linear-gradient(90deg,#8b5cf6,#06b6d4)" />)}
          </div>
          <div className="glass" style={{ borderRadius:20, padding:"2rem" }}>
            <h3 style={{ fontSize:"1rem", fontWeight:700, marginBottom:"1.5rem", color:"#f472b6" }}>🎨 Creative Skills</h3>
            {creativeSkills.map(s => <SkillBar key={s.name} {...s} grad="linear-gradient(90deg,#f472b6,#8b5cf6)" />)}
          </div>
        </div>

        <div style={{ textAlign:"center" }}>
          <h3 style={{ fontSize:"1rem", fontWeight:600, marginBottom:"1.25rem", color:"var(--t2)" }}>Soft Skills</h3>
          <div style={{ display:"flex", flexWrap:"wrap", justifyContent:"center", gap:"0.75rem" }}>
            {softSkills.map(s => (
              <span key={s} className="glass" style={{ padding:"0.5rem 1rem", borderRadius:999, fontSize:"0.875rem", color:"var(--t2)", cursor:"default", transition:"transform 0.2s" }}
                onMouseEnter={e => (e.currentTarget.style.transform="scale(1.08)", e.currentTarget.style.color="var(--purple)")}
                onMouseLeave={e => (e.currentTarget.style.transform="scale(1)", e.currentTarget.style.color="var(--t2)")}
              >{s}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
