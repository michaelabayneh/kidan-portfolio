"use client";
import { FileText, Download, Award, ExternalLink } from "lucide-react";
import Link from "next/link";

const docs = [
  { title:"Curriculum Vitae",  desc:"Full professional CV with education, experience & skills", icon:<FileText size={22}/>, color:"#8b5cf6", href:"/cv.pdf",             download:true  },
  { title:"Certificate",       desc:"Academic & professional achievement certificates",          icon:<Award size={22}/>,    color:"#06b6d4", href:"/certificate.pdf",    download:false },
  { title:"Recommendation",    desc:"Official recommendation letter from university",            icon:<Award size={22}/>,    color:"#f472b6", href:"/recommendation.pdf",  download:false },
];

export default function Documents() {
  return (
    <section style={{ padding:"5rem 1.5rem" }}>
      <div style={{ maxWidth:900, margin:"0 auto" }}>
        <div style={{ textAlign:"center", marginBottom:"3rem" }}>
          <p style={{ color:"var(--purple)", fontSize:"0.75rem", fontWeight:600, letterSpacing:"0.15em", textTransform:"uppercase", marginBottom:"0.5rem" }}>Official Documents</p>
          <h2 style={{ fontSize:"clamp(1.75rem,4vw,2.25rem)", fontWeight:800, color:"var(--t1)" }}>CV &amp; <span className="gradient-text">Credentials</span></h2>
        </div>

        <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(220px,1fr))", gap:"1.25rem", marginBottom:"2rem" }}>
          {docs.map(d => (
            <a key={d.title} href={d.href} download={d.download||undefined} target={!d.download?"_blank":undefined} rel="noopener noreferrer"
              className="glass"
              style={{ borderRadius:20, padding:"1.75rem", display:"flex", flexDirection:"column", alignItems:"center", gap:"1rem", textAlign:"center", textDecoration:"none", borderTop:`3px solid ${d.color}`, transition:"transform 0.2s, box-shadow 0.2s" }}
              onMouseEnter={e=>{e.currentTarget.style.transform="translateY(-4px)"; e.currentTarget.style.boxShadow=`0 12px 32px ${d.color}22`;}}
              onMouseLeave={e=>{e.currentTarget.style.transform="translateY(0)"; e.currentTarget.style.boxShadow="none";}}
            >
              <div style={{ width:56, height:56, borderRadius:16, background:`linear-gradient(135deg,${d.color},rgba(139,92,246,0.6))`, display:"flex", alignItems:"center", justifyContent:"center", color:"#fff" }}>{d.icon}</div>
              <div>
                <p style={{ fontWeight:700, color:"var(--t1)", marginBottom:"0.25rem" }}>{d.title}</p>
                <p style={{ fontSize:"0.78rem", color:"var(--t3)", lineHeight:1.5 }}>{d.desc}</p>
              </div>
              <span style={{ display:"flex", alignItems:"center", gap:"0.4rem", padding:"0.4rem 1rem", borderRadius:999, background:d.color, color:"#fff", fontSize:"0.78rem", fontWeight:700, marginTop:"auto" }}>
                {d.download ? <Download size={12}/> : <ExternalLink size={12}/>} {d.download?"Download":"View"}
              </span>
            </a>
          ))}
        </div>

        <div style={{ textAlign:"center" }}>
          <Link href="/cv" style={{ display:"inline-flex", alignItems:"center", gap:"0.5rem", padding:"0.75rem 1.75rem", borderRadius:999, background:"linear-gradient(135deg,#8b5cf6,#06b6d4)", color:"#fff", fontWeight:700, fontSize:"0.9rem", textDecoration:"none", boxShadow:"0 4px 20px rgba(139,92,246,0.35)" }}>
            <FileText size={15}/> View Full CV Page
          </Link>
        </div>
      </div>
    </section>
  );
}
