"use client";
import { GitFork, Link, Mail, Heart } from "lucide-react";

export default function Footer() {
  return (
    <footer style={{ borderTop:"1px solid var(--border)", padding:"2.5rem 1rem" }}>
      <div style={{ maxWidth:1152, margin:"0 auto", display:"flex", flexWrap:"wrap", alignItems:"center", justifyContent:"space-between", gap:"1rem" }}>
        <div>
          <span className="gradient-text" style={{ fontSize:"1.125rem", fontWeight:800 }}>Michael Abayneh</span>
          <p style={{ color:"var(--t3)", fontSize:"0.75rem", marginTop:"0.25rem" }}>Software Engineer · Designer · Leader</p>
        </div>
        <div style={{ display:"flex", gap:"1rem" }}>
          {[
            { icon:<GitFork size={17}/>, href:"https://github.com",                     label:"GitHub" },
            { icon:<Link size={17}/>,    href:"https://linkedin.com",                   label:"LinkedIn" },
            { icon:<Mail size={17}/>,    href:"mailto:abaynehbirhan29@gmail.com",        label:"Email" },
          ].map(s => (
            <a key={s.label} href={s.href} aria-label={s.label}
              style={{ color:"var(--t3)", transition:"color 0.2s", textDecoration:"none" }}
              onMouseEnter={e=>(e.currentTarget.style.color="var(--purple)")}
              onMouseLeave={e=>(e.currentTarget.style.color="var(--t3)")}
            >{s.icon}</a>
          ))}
        </div>
        <p style={{ color:"var(--t3)", fontSize:"0.75rem", display:"flex", alignItems:"center", gap:"0.25rem" }}>
          Made with <Heart size={11} color="#f472b6" /> by Michael Abayneh
        </p>
      </div>
    </footer>
  );
}
