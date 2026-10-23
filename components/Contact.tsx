"use client";
import { useState } from "react";
import { Mail, Phone, MapPin, Send, CheckCircle } from "lucide-react";

const inputStyle: React.CSSProperties = {
  width:"100%", background:"var(--bg-card)", border:"1px solid var(--border)",
  borderRadius:12, padding:"0.75rem 1rem", color:"var(--t1)",
  fontSize:"0.875rem", outline:"none", transition:"border-color 0.2s", boxSizing:"border-box",
};

export default function Contact() {
  const [form, setForm] = useState({ name:"", email:"", message:"" });
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault(); setLoading(true);
    await new Promise(r => setTimeout(r, 1500));
    setSent(true); setLoading(false);
  };

  const info = [
    { icon:<Mail size={18} color="#8b5cf6"/>, label:"Email",    value:"abaynehbirhan29@gmail.com", href:"mailto:abaynehbirhan29@gmail.com" },
    { icon:<Phone size={18} color="#06b6d4"/>, label:"Phone",   value:"0924580928",                href:"tel:+251924580928" },
    { icon:<MapPin size={18} color="#f472b6"/>, label:"Telegram",value:"@Nove24",                  href:"https://t.me/Nove24" },
  ];

  return (
    <section id="contact" style={{ padding:"6rem 1rem", position:"relative", overflow:"hidden", scrollMarginTop:64 }}>
      <div style={{ position:"absolute", bottom:"-10rem", right:"-10rem", width:384, height:384, borderRadius:"50%", background:"conic-gradient(from 90deg,rgba(139,92,246,0.15),rgba(6,182,212,0.1),transparent)", animation:"spin-slow 30s linear infinite", pointerEvents:"none" }} />
      <div style={{ maxWidth:960, margin:"0 auto" }}>
        <div style={{ textAlign:"center", marginBottom:"4rem" }}>
          <p style={{ color:"var(--purple)", fontSize:"0.75rem", fontWeight:600, letterSpacing:"0.15em", textTransform:"uppercase", marginBottom:"0.5rem" }}>Get In Touch</p>
          <h2 style={{ fontSize:"clamp(1.75rem,4vw,2.25rem)", fontWeight:800, color:"var(--t1)" }}>Contact <span className="gradient-text">Me</span></h2>
          <p style={{ color:"var(--t3)", marginTop:"1rem", maxWidth:400, margin:"1rem auto 0" }}>Have a project or opportunity? Let&apos;s build something great together.</p>
        </div>

        <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(280px,1fr))", gap:"2.5rem" }}>
          <div style={{ display:"flex", flexDirection:"column", gap:"1rem" }}>
            {info.map(i => (
              <a key={i.label} href={i.href} target={i.href.startsWith("http")?"_blank":undefined} rel="noopener noreferrer"
                className="glass" style={{ borderRadius:16, padding:"1.25rem", display:"flex", alignItems:"center", gap:"1rem", textDecoration:"none", transition:"transform 0.2s" }}
                onMouseEnter={e=>(e.currentTarget.style.transform="translateX(4px)", e.currentTarget.style.borderColor="var(--border-hi)")}
                onMouseLeave={e=>(e.currentTarget.style.transform="translateX(0)", e.currentTarget.style.borderColor="var(--border)")}
              >
                <div style={{ width:40, height:40, borderRadius:"50%", background:"var(--bg-card)", border:"1px solid var(--border)", display:"flex", alignItems:"center", justifyContent:"center", flexShrink:0 }}>{i.icon}</div>
                <div>
                  <p style={{ fontSize:"0.7rem", color:"var(--t3)", textTransform:"uppercase", letterSpacing:"0.1em", marginBottom:2 }}>{i.label}</p>
                  <p style={{ fontSize:"0.875rem", color:"var(--t1)" }}>{i.value}</p>
                </div>
              </a>
            ))}
            <div className="glass" style={{ borderRadius:16, padding:"1.25rem" }}>
              <p style={{ fontSize:"0.875rem", lineHeight:1.6, color:"var(--t3)" }}>🚀 Currently open to internships, freelance projects, and collaboration opportunities.</p>
            </div>
          </div>

          <div className="glass" style={{ borderRadius:20, padding:"2rem" }}>
            {sent ? (
              <div style={{ display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center", gap:"1rem", padding:"3rem 0", textAlign:"center" }}>
                <CheckCircle size={48} color="#22c55e" />
                <p style={{ color:"#22c55e", fontWeight:700, fontSize:"1.125rem" }}>Message Sent!</p>
                <p style={{ color:"var(--t3)", fontSize:"0.875rem" }}>Thanks for reaching out. I&apos;ll get back to you shortly.</p>
                <button onClick={()=>{setSent(false);setForm({name:"",email:"",message:""});}} style={{ fontSize:"0.75rem", color:"var(--purple)", background:"none", border:"none", cursor:"pointer", textDecoration:"underline" }}>Send another</button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display:"flex", flexDirection:"column", gap:"1.25rem" }}>
                {[{k:"name",l:"Name",t:"text",p:"Your full name"},{k:"email",l:"Email",t:"email",p:"your@email.com"}].map(f=>(
                  <div key={f.k}>
                    <label style={{ fontSize:"0.7rem", color:"var(--t3)", textTransform:"uppercase", letterSpacing:"0.1em", display:"block", marginBottom:"0.4rem" }}>{f.l}</label>
                    <input type={f.t} required placeholder={f.p} value={form[f.k as "name"|"email"]}
                      onChange={e=>setForm({...form,[f.k]:e.target.value})}
                      style={inputStyle}
                      onFocus={e=>(e.target.style.borderColor="var(--border-hi)")}
                      onBlur={e=>(e.target.style.borderColor="var(--border)")}
                    />
                  </div>
                ))}
                <div>
                  <label style={{ fontSize:"0.7rem", color:"var(--t3)", textTransform:"uppercase", letterSpacing:"0.1em", display:"block", marginBottom:"0.4rem" }}>Message</label>
                  <textarea required rows={5} placeholder="Tell me about your project..." value={form.message}
                    onChange={e=>setForm({...form,message:e.target.value})}
                    style={{...inputStyle, resize:"none"}}
                    onFocus={e=>(e.target.style.borderColor="var(--border-hi)")}
                    onBlur={e=>(e.target.style.borderColor="var(--border)")}
                  />
                </div>
                <button type="submit" disabled={loading} style={{ width:"100%", padding:"0.875rem", borderRadius:12, background:"linear-gradient(135deg,var(--purple),var(--cyan))", color:"#fff", fontWeight:700, border:"none", cursor:loading?"not-allowed":"pointer", opacity:loading?0.7:1, display:"flex", alignItems:"center", justifyContent:"center", gap:"0.5rem", fontSize:"0.9rem", transition:"opacity 0.2s, transform 0.2s" }}
                  onMouseEnter={e=>!loading&&(e.currentTarget.style.transform="scale(1.02)")}
                  onMouseLeave={e=>(e.currentTarget.style.transform="scale(1)")}
                >
                  {loading ? <span style={{ width:20, height:20, border:"2px solid rgba(255,255,255,0.3)", borderTopColor:"#fff", borderRadius:"50%", animation:"spin-slow 0.8s linear infinite" }} /> : <><Send size={16}/> Send Message</>}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
