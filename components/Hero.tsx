"use client";
import { useEffect, useState } from "react";
import { Mail, ChevronDown, Download, ArrowRight } from "lucide-react";
import Image from "next/image";

const roles = [
  "Software Engineering Student",
  "Graphic Designer",
  "Video Editor",
  "Digital Marketer",
  "Student Union Leader",
];

export default function Hero() {
  const [roleIdx, setRoleIdx] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [typing, setTyping] = useState(true);

  useEffect(() => {
    const current = roles[roleIdx];
    let timeout: ReturnType<typeof setTimeout>;
    if (typing) {
      if (displayed.length < current.length) {
        timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 75);
      } else {
        timeout = setTimeout(() => setTyping(false), 2200);
      }
    } else {
      if (displayed.length > 0) {
        timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 35);
      } else {
        setRoleIdx(i => (i + 1) % roles.length);
        setTyping(true);
      }
    }
    return () => clearTimeout(timeout);
  }, [displayed, typing, roleIdx]);

  return (
    <section id="home" style={{
      minHeight: "100vh",
      paddingTop: 80,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      position: "relative",
      overflow: "hidden",
      padding: "80px 1.5rem 2rem",
    }}>
      {/* Soft glow behind avatar only */}
      <div style={{
        position: "absolute", top: "15%", left: "50%",
        transform: "translateX(-50%)",
        width: 320, height: 320, borderRadius: "50%",
        background: "radial-gradient(circle, rgba(139,92,246,0.25) 0%, transparent 70%)",
        filter: "blur(48px)", pointerEvents: "none",
      }} />

      <div style={{ position: "relative", zIndex: 10, textAlign: "center", maxWidth: 720, width: "100%" }}>

        {/* Avatar */}
        <div style={{
          margin: "0 auto 1.75rem",
          width: 148, height: 148,
          borderRadius: "50%",
          padding: 3,
          background: "linear-gradient(135deg, #8b5cf6, #06b6d4)",
          boxShadow: "0 0 32px rgba(139,92,246,0.5), 0 0 60px rgba(6,182,212,0.2)",
          animation: "pulse-glow 3s ease-in-out infinite",
        }}>
          <div style={{ width: "100%", height: "100%", borderRadius: "50%", overflow: "hidden", position: "relative" }}>
            <Image src="/profile.jpg" alt="Michael Abayneh" fill style={{ objectFit: "cover", objectPosition: "top" }} priority />
          </div>
        </div>

        {/* Badge */}
        <div style={{
          display: "inline-flex", alignItems: "center", gap: "0.5rem",
          background: "rgba(139,92,246,0.12)", border: "1px solid rgba(139,92,246,0.35)",
          borderRadius: 999, padding: "0.35rem 1rem", marginBottom: "1.25rem",
        }}>
          <span style={{ width: 8, height: 8, borderRadius: "50%", background: "#22c55e", boxShadow: "0 0 6px #22c55e", display: "inline-block", animation: "pulse-glow 2s ease-in-out infinite" }} />
          <span style={{ fontSize: "0.78rem", color: "var(--purple)", fontWeight: 600, letterSpacing: "0.05em" }}>Available for opportunities</span>
        </div>

        {/* Name */}
        <h1 style={{ fontSize: "clamp(2.2rem, 6vw, 4rem)", fontWeight: 900, lineHeight: 1.1, color: "var(--t1)", marginBottom: "0.75rem" }}>
          Hi, I&apos;m{" "}
          <span className="gradient-text">Michael Abayneh</span>
        </h1>

        {/* Typewriter */}
        <div style={{ height: 40, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "1.25rem" }}>
          <span style={{ fontSize: "clamp(1rem, 2.5vw, 1.25rem)", color: "var(--cyan)", fontWeight: 600 }}>
            {displayed}
            <span style={{ animation: "pulse-glow 1s step-end infinite", opacity: 0.8 }}>|</span>
          </span>
        </div>

        {/* Description */}
        <p style={{ fontSize: "clamp(0.9rem, 2vw, 1.05rem)", color: "var(--t2)", lineHeight: 1.75, maxWidth: 560, margin: "0 auto 2.5rem" }}>
          5th Year Software Engineering Student &amp; Student Union General Service Affairs.
          Passionate about building digital experiences and leading communities.
        </p>

        {/* CTA Buttons */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: "0.875rem", justifyContent: "center", marginBottom: "2.5rem" }}>
          <button
            onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
            style={{
              display: "flex", alignItems: "center", gap: "0.5rem",
              padding: "0.8rem 1.75rem", borderRadius: 999,
              background: "linear-gradient(135deg, #8b5cf6, #06b6d4)",
              color: "#fff", fontWeight: 700, border: "none", cursor: "pointer",
              fontSize: "0.9rem", boxShadow: "0 4px 24px rgba(139,92,246,0.45)",
              transition: "transform 0.2s, opacity 0.2s",
            }}
            onMouseEnter={e => (e.currentTarget.style.transform = "translateY(-2px)")}
            onMouseLeave={e => (e.currentTarget.style.transform = "translateY(0)")}
          >
            View My Work <ArrowRight size={16} />
          </button>

          <a
            href="/cv.pdf" download
            style={{
              display: "flex", alignItems: "center", gap: "0.5rem",
              padding: "0.8rem 1.75rem", borderRadius: 999,
              background: "var(--bg-card)", border: "1px solid var(--border-hi)",
              color: "var(--purple)", fontWeight: 700, cursor: "pointer",
              fontSize: "0.9rem", textDecoration: "none",
              transition: "transform 0.2s, background 0.2s",
            }}
            onMouseEnter={e => (e.currentTarget.style.transform = "translateY(-2px)", e.currentTarget.style.background = "rgba(139,92,246,0.12)")}
            onMouseLeave={e => (e.currentTarget.style.transform = "translateY(0)", e.currentTarget.style.background = "var(--bg-card)")}
          >
            <Download size={15} /> Download CV
          </a>

          <button
            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            style={{
              display: "flex", alignItems: "center", gap: "0.5rem",
              padding: "0.8rem 1.75rem", borderRadius: 999,
              background: "transparent", border: "1px solid var(--border)",
              color: "var(--t2)", fontWeight: 600, cursor: "pointer",
              fontSize: "0.9rem", transition: "transform 0.2s, border-color 0.2s",
            }}
            onMouseEnter={e => (e.currentTarget.style.transform = "translateY(-2px)", e.currentTarget.style.borderColor = "var(--border-hi)")}
            onMouseLeave={e => (e.currentTarget.style.transform = "translateY(0)", e.currentTarget.style.borderColor = "var(--border)")}
          >
            Contact Me
          </button>
        </div>

        {/* Social row */}
        <div style={{ display: "flex", gap: "0.75rem", justifyContent: "center" }}>
          {[
            { label: "GitHub",   href: "https://github.com/michaelabayneh", icon: "GH" },
            { label: "LinkedIn", href: "https://linkedin.com",               icon: "in" },
            { label: "Email",    href: "mailto:abaynehbirhan29@gmail.com",   icon: <Mail size={16}/> },
            { label: "Telegram", href: "https://t.me/Nove24",                icon: "TG" },
          ].map(s => (
            <a key={s.label} href={s.href} aria-label={s.label}
              target={s.href.startsWith("http") ? "_blank" : undefined}
              rel="noopener noreferrer"
              style={{
                width: 42, height: 42, borderRadius: "50%",
                background: "var(--bg-card)", border: "1px solid var(--border)",
                display: "flex", alignItems: "center", justifyContent: "center",
                color: "var(--t3)", fontSize: "0.65rem", fontWeight: 700,
                textDecoration: "none", transition: "all 0.2s",
              }}
              onMouseEnter={e => (e.currentTarget.style.borderColor = "var(--purple)", e.currentTarget.style.color = "var(--purple)", e.currentTarget.style.transform = "translateY(-3px)")}
              onMouseLeave={e => (e.currentTarget.style.borderColor = "var(--border)", e.currentTarget.style.color = "var(--t3)", e.currentTarget.style.transform = "translateY(0)")}
            >{s.icon}</a>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div style={{
        position: "absolute", bottom: 28, left: "50%", transform: "translateX(-50%)",
        color: "var(--t3)", animation: "float 2s ease-in-out infinite",
      }}>
        <ChevronDown size={24} />
      </div>
    </section>
  );
}
