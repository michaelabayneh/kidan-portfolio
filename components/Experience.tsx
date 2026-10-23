"use client";

const items = [
  { year:"2024–Present", title:"Next Student Union President", org:"Student Union",       desc:"Elected to lead the student union, overseeing all student affairs, events, and welfare programs.", type:"Leadership", dot:"#f472b6" },
  { year:"2023–Present", title:"General Service Affairs Officer", org:"Student Union",    desc:"Managing general service operations, coordinating between students and administration.", type:"Leadership", dot:"#8b5cf6" },
  { year:"2022–Present", title:"Freelance Creative Designer",   org:"Self-Employed",      desc:"Delivering graphic design, video editing, and digital marketing services across Ethiopia.", type:"Work",       dot:"#06b6d4" },
  { year:"2020–Present", title:"BSc Software Engineering",      org:"University — 5th Year", desc:"Full-stack development, algorithms, software architecture, databases, and cloud computing.", type:"Education",  dot:"#8b5cf6" },
];

export default function Experience() {
  return (
    <section id="experience" style={{ padding:"6rem 1.5rem", scrollMarginTop:64 }}>
      <div style={{ maxWidth:800, margin:"0 auto" }}>
        <div style={{ textAlign:"center", marginBottom:"4rem" }}>
          <p style={{ color:"var(--purple)", fontSize:"0.75rem", fontWeight:600, letterSpacing:"0.15em", textTransform:"uppercase", marginBottom:"0.5rem" }}>My Journey</p>
          <h2 style={{ fontSize:"clamp(1.75rem,4vw,2.25rem)", fontWeight:800, color:"var(--t1)" }}>Experience &amp; <span className="gradient-text">Education</span></h2>
        </div>

        <div style={{ position:"relative" }}>
          {/* vertical line */}
          <div style={{ position:"absolute", left:20, top:0, bottom:0, width:2, background:"linear-gradient(to bottom, transparent, #8b5cf6, #06b6d4, transparent)" }} />

          <div style={{ display:"flex", flexDirection:"column", gap:"2rem" }}>
            {items.map((item, i) => (
              <div key={i} style={{ position:"relative", paddingLeft:52 }}>
                {/* dot */}
                <div style={{ position:"absolute", left:12, top:20, width:16, height:16, borderRadius:"50%", background:item.dot, boxShadow:`0 0 12px ${item.dot}`, border:"2px solid var(--bg)" }} />
                <div className="glass" style={{ borderRadius:16, padding:"1.25rem 1.5rem", borderLeft:`3px solid ${item.dot}`, transition:"transform 0.2s" }}
                  onMouseEnter={e=>(e.currentTarget.style.transform="translateX(4px)")}
                  onMouseLeave={e=>(e.currentTarget.style.transform="translateX(0)")}
                >
                  <div style={{ display:"flex", alignItems:"center", gap:"0.5rem", flexWrap:"wrap", marginBottom:"0.4rem" }}>
                    <span style={{ fontSize:"0.7rem", fontWeight:700, padding:"0.15rem 0.6rem", borderRadius:999, background:`${item.dot}22`, color:item.dot }}>{item.type}</span>
                    <span style={{ fontSize:"0.75rem", color:"var(--t3)" }}>{item.year}</span>
                  </div>
                  <h3 style={{ fontWeight:700, color:"var(--t1)", marginBottom:"0.2rem" }}>{item.title}</h3>
                  <p style={{ fontSize:"0.8rem", fontWeight:600, color:item.dot, marginBottom:"0.4rem" }}>{item.org}</p>
                  <p style={{ fontSize:"0.875rem", lineHeight:1.6, color:"var(--t2)" }}>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
