"use client";
import { useEffect, useState } from "react";
import { GitFork, Link, Mail, ChevronDown } from "lucide-react";
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
        timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 80);
      } else {
        timeout = setTimeout(() => setTyping(false), 2000);
      }
    } else {
      if (displayed.length > 0) {
        timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 40);
      } else {
        setRoleIdx((i) => (i + 1) % roles.length);
        setTyping(true);
      }
    }
    return () => clearTimeout(timeout);
  }, [displayed, typing, roleIdx]);

  return (
    <section
      id="home"
      /* pt-16 pushes content below the fixed 64px navbar — no overlap */
      className="min-h-screen pt-16 flex flex-col items-center justify-center relative overflow-hidden px-4"
    >
      {/* Decorative rings */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full opacity-10"
          style={{ background: "conic-gradient(from 0deg,#8b5cf6,#06b6d4,#f472b6,transparent,#8b5cf6)", animation: "spin-slow 25s linear infinite" }}
        />
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full opacity-20"
          style={{ border: "1px solid var(--purple)", animation: "spin-reverse 18s linear infinite" }}
        />
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[62%] w-64 h-64 rounded-full opacity-25"
          style={{ background: "radial-gradient(circle,var(--purple) 0%,transparent 70%)", filter: "blur(40px)" }}
        />
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[62%] w-40 h-40 rounded-full opacity-15"
          style={{ background: "radial-gradient(circle,var(--cyan) 0%,transparent 70%)", filter: "blur(30px)" }}
        />
      </div>

      <div className="relative z-10 text-center max-w-3xl w-full">
        {/* Avatar */}
        <div className="mx-auto mb-8 w-36 h-36 rounded-full p-[3px] animate-pulse-glow"
          style={{ background: "linear-gradient(135deg,var(--purple),var(--cyan))" }}>
          <div className="w-full h-full rounded-full overflow-hidden relative">
            <Image src="/profile.jpg" alt="Michael Abayneh" fill className="object-cover object-top" priority />
          </div>
        </div>

        <p className="text-sm font-medium tracking-widest uppercase mb-3" style={{ color: "var(--purple)" }}>
          Welcome to my portfolio
        </p>

        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-4 leading-tight" style={{ color: "var(--t1)" }}>
          Hi, I&apos;m <span className="gradient-text">Michael Abayneh</span>
        </h1>

        {/* Typewriter */}
        <div className="h-10 mb-6 flex items-center justify-center">
          <span className="text-lg sm:text-xl font-medium" style={{ color: "var(--cyan)" }}>
            {displayed}<span className="animate-pulse">|</span>
          </span>
        </div>

        <p className="text-base sm:text-lg mb-10 max-w-xl mx-auto leading-relaxed" style={{ color: "var(--t2)" }}>
          5th Year Software Engineering Student &amp; Student Union General Service Affairs. Passionate about building
          digital experiences and leading communities.
        </p>

        {/* CTA buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 flex-wrap">
          <button
            onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
            className="px-8 py-3 rounded-full text-white font-semibold hover:opacity-90 transition-all duration-200 hover:scale-105 shadow-lg"
            style={{ background: "linear-gradient(135deg,var(--purple),var(--cyan))", boxShadow: "0 4px 24px rgba(139,92,246,0.4)" }}
          >
            View My Work
          </button>
          <a
            href="/cv.pdf"
            download
            className="px-8 py-3 rounded-full font-semibold transition-all duration-200 hover:scale-105 flex items-center justify-center gap-2"
            style={{ border: "1px solid var(--purple)", color: "var(--purple)", background: "var(--bg-card)" }}
          >
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
            Download CV
          </a>
          <button
            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            className="px-8 py-3 rounded-full font-semibold transition-all duration-200 hover:scale-105"
            style={{ border: "1px solid var(--border-hi)", color: "var(--t2)", background: "var(--bg-card)" }}
          >
            Contact Me
          </button>
        </div>

        {/* Social links */}
        <div className="flex gap-4 justify-center">
          {[
            { icon: <GitFork size={18} />, href: "https://github.com", label: "GitHub" },
            { icon: <Link size={18} />, href: "https://linkedin.com", label: "LinkedIn" },
            { icon: <Mail size={18} />, href: "mailto:abaynehbirhan29@gmail.com", label: "Email" },
          ].map((s) => (
            <a
              key={s.label}
              href={s.href}
              aria-label={s.label}
              className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110"
              style={{ background: "var(--bg-card)", border: "1px solid var(--border)", color: "var(--t3)" }}
              onMouseEnter={e => (e.currentTarget.style.borderColor = "var(--purple)", e.currentTarget.style.color = "var(--purple)")}
              onMouseLeave={e => (e.currentTarget.style.borderColor = "var(--border)", e.currentTarget.style.color = "var(--t3)")}
            >
              {s.icon}
            </a>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce" style={{ color: "var(--t3)" }}>
        <ChevronDown size={26} />
      </div>
    </section>
  );
}
