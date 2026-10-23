"use client";

const categories = [
  { name:"Frontend",     color:"#8b5cf6", tools:[{n:"Next.js",e:"▲"},{n:"React",e:"⚛️"},{n:"TypeScript",e:"📘"},{n:"Tailwind",e:"🎨"},{n:"Framer",e:"🎭"}] },
  { name:"Backend",      color:"#06b6d4", tools:[{n:"Node.js",e:"🟢"},{n:"Python",e:"🐍"},{n:"Express",e:"🚂"},{n:"PostgreSQL",e:"🐘"},{n:"MongoDB",e:"🍃"}] },
  { name:"Creative",     color:"#f472b6", tools:[{n:"Figma",e:"🖌️"},{n:"Photoshop",e:"🖼️"},{n:"Illustrator",e:"✏️"},{n:"Premiere Pro",e:"🎬"},{n:"After Effects",e:"✨"}] },
  { name:"Tools & Cloud",color:"#a78bfa", tools:[{n:"Git",e:"🔀"},{n:"GitHub",e:"🐙"},{n:"Vercel",e:"▲"},{n:"Firebase",e:"🔥"},{n:"Linux",e:"🐧"}] },
];

const languages = [
  { lang:"Amharic", level:"Native",        flag:"🇪🇹" },
  { lang:"English", level:"Fluent",         flag:"🇬🇧" },
  { lang:"Oromo",   level:"Conversational", flag:"🌿" },
];

export default function TechStack() {
  return (
    <section style={{ padding:"6rem 1.5rem" }}>
      <div style={{ maxWidth:1152, margin:"0 auto" }}>
        <div style={{ textAlign:"center", marginBottom:"4rem" }}>
          <p style={{ color:"var(--purple)", fontSize:"0.75rem", fontWeight:600, letterSpacing:"0.15em", textTransform:"uppercase", marginBottom:"0.5rem" }}>Tools I Use</p>
          <h2 style={{ fontSize:"clamp(1.75rem,4vw,2.25rem)", fontWeight:800, color:"var(--t1)" }}>Tech <span className="gradient-text">Stack</span></h2>
        </div>

        <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(220px,1fr))", gap:"1.25rem", marginBottom:"2.5rem" }}>
          {categories.map(cat => (
            <div key={cat.name} className="glass" style={{ borderRadius:20, padding:"1.5rem", borderTop:`3px solid ${cat.color}` }}>
              <h3 style={{ fontSize:"0.75rem", fontWeight:700, letterSpacing:"0.12em", textTransform:"uppercase", color:cat.color, marginBottom:"1.25rem" }}>{cat.name}</h3>
              <div style={{ display:"flex", flexDirection:"column", gap:"0.6rem" }}>
                {cat.tools.map(t => (
                  <div key={t.n} className="glass" style={{ borderRadius:10, padding:"0.5rem 0.75rem", display:"flex", alignItems:"center", gap:"0.75rem", transition:"transform 0.15s" }}
                    onMouseEnter={e=>(e.currentTarget.style.transform="translateX(4px)")}
                    onMouseLeave={e=>(e.currentTarget.style.transform="translateX(0)")}
                  >
                    <span style={{ fontSize:"1.1rem", width:24, textAlign:"center" }}>{t.e}</span>
                    <span style={{ fontSize:"0.875rem", fontWeight:500, color:"var(--t1)" }}>{t.n}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Languages */}
        <div className="glass" style={{ borderRadius:20, padding:"2rem", border:"1px solid var(--border-hi)" }}>
          <h3 style={{ fontWeight:700, textAlign:"center", marginBottom:"1.5rem", fontSize:"0.75rem", letterSpacing:"0.12em", textTransform:"uppercase", color:"var(--purple)" }}>🌍 Languages Spoken</h3>
          <div style={{ display:"flex", flexWrap:"wrap", justifyContent:"center", gap:"1rem" }}>
            {languages.map(l => (
              <div key={l.lang} className="glass" style={{ display:"flex", alignItems:"center", gap:"0.75rem", padding:"0.75rem 1.5rem", borderRadius:999, border:"1px solid var(--border-hi)" }}>
                <span style={{ fontSize:"1.5rem" }}>{l.flag}</span>
                <div>
                  <p style={{ fontWeight:600, fontSize:"0.875rem", color:"var(--t1)" }}>{l.lang}</p>
                  <p style={{ fontSize:"0.7rem", color:"var(--t3)" }}>{l.level}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
