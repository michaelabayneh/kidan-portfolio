"use client";
import { useState, useEffect } from "react";
import { Menu, X, Sun, Moon } from "lucide-react";
import { useTheme } from "./ThemeProvider";

const links = ["Home", "About", "Skills", "Projects", "Contact"];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("Home");
  const { theme, toggle } = useTheme();

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);
      for (const l of [...links].reverse()) {
        const el = document.getElementById(l.toLowerCase());
        if (el && window.scrollY >= el.offsetTop - 120) { setActive(l); break; }
      }
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNav = (link: string) => {
    setOpen(false);
    setActive(link);
    document.getElementById(link.toLowerCase())?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav style={{
      position: "fixed", top: 0, left: 0, right: 0, zIndex: 50,
      transition: "all 0.3s ease",
      background: scrolled ? "var(--nav-bg)" : "transparent",
      backdropFilter: scrolled ? "blur(18px)" : "none",
      WebkitBackdropFilter: scrolled ? "blur(18px)" : "none",
      borderBottom: scrolled ? "1px solid var(--border)" : "none",
      boxShadow: scrolled ? "0 2px 32px rgba(0,0,0,0.18)" : "none",
    }}>
      {/* Main bar */}
      <div style={{
        maxWidth: 1152, margin: "0 auto",
        padding: "0 1.25rem", height: 64,
        display: "flex", alignItems: "center", justifyContent: "space-between",
      }}>

        {/* Logo */}
        <button onClick={() => handleNav("Home")} style={{
          display: "flex", alignItems: "center", gap: "0.5rem",
          background: "none", border: "none", cursor: "pointer", padding: 0,
        }}>
          <div style={{
            width: 34, height: 34, borderRadius: 10,
            background: "linear-gradient(135deg, var(--purple), var(--cyan))",
            display: "flex", alignItems: "center", justifyContent: "center",
            color: "#fff", fontWeight: 900, fontSize: "0.9rem",
            boxShadow: "0 2px 12px rgba(139,92,246,0.4)",
          }}>M</div>
          <span style={{ fontSize: "1.1rem", fontWeight: 800, color: "var(--t1)" }}>
            ichael<span style={{ color: "var(--purple)" }}>.</span>
          </span>
        </button>

        {/* Desktop pill nav */}
        <div style={{
          display: "flex", alignItems: "center", gap: 4,
          background: "var(--bg-card)", border: "1px solid var(--border)",
          borderRadius: 999, padding: "6px 8px",
        }}
          className="hide-mobile"
        >
          {links.map(l => {
            const isActive = active === l;
            return (
              <button key={l} onClick={() => handleNav(l)} style={{
                padding: "6px 16px", borderRadius: 999, fontSize: "0.875rem", fontWeight: 600,
                border: "none", cursor: "pointer", transition: "all 0.2s",
                color: isActive ? "#fff" : "var(--t2)",
                background: isActive ? "linear-gradient(135deg, var(--purple), var(--cyan))" : "transparent",
                boxShadow: isActive ? "0 2px 14px rgba(139,92,246,0.45)" : "none",
              }}
                onMouseEnter={e => { if (!isActive) e.currentTarget.style.color = "var(--purple)"; }}
                onMouseLeave={e => { if (!isActive) e.currentTarget.style.color = "var(--t2)"; }}
              >{l}</button>
            );
          })}
        </div>

        {/* Right: theme toggle + hamburger */}
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          {/* Theme toggle */}
          <button onClick={toggle} aria-label="Toggle theme" style={{
            width: 40, height: 40, borderRadius: "50%", border: "1px solid var(--border-hi)",
            background: "var(--bg-card)", cursor: "pointer",
            display: "flex", alignItems: "center", justifyContent: "center",
            transition: "transform 0.2s",
          }}
            onMouseEnter={e => (e.currentTarget.style.transform = "scale(1.12)")}
            onMouseLeave={e => (e.currentTarget.style.transform = "scale(1)")}
          >
            {theme === "dark"
              ? <Sun size={15} color="#fbbf24" />
              : <Moon size={15} color="var(--purple)" />
            }
          </button>

          {/* Mobile hamburger */}
          <button onClick={() => setOpen(!open)} aria-label="Toggle menu" style={{
            width: 40, height: 40, borderRadius: "50%",
            background: "var(--bg-card)", border: "1px solid var(--border)",
            cursor: "pointer", display: "none", alignItems: "center", justifyContent: "center",
            color: "var(--t2)",
          }}
            className="show-mobile"
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      {open && (
        <div style={{
          margin: "0 12px 12px", borderRadius: 20, overflow: "hidden",
          background: "var(--nav-bg)", border: "1px solid var(--border)",
          backdropFilter: "blur(18px)", WebkitBackdropFilter: "blur(18px)",
        }}>
          {links.map((l, i) => {
            const isActive = active === l;
            return (
              <button key={l} onClick={() => handleNav(l)} style={{
                width: "100%", textAlign: "left", padding: "14px 20px",
                fontSize: "0.9rem", fontWeight: 600, border: "none", cursor: "pointer",
                display: "flex", alignItems: "center", gap: 12,
                color: isActive ? "var(--purple)" : "var(--t2)",
                background: isActive ? "rgba(139,92,246,0.08)" : "transparent",
                borderBottom: i < links.length - 1 ? "1px solid var(--border)" : "none",
                transition: "background 0.15s",
              }}>
                <span style={{
                  width: 8, height: 8, borderRadius: "50%", flexShrink: 0,
                  background: isActive ? "var(--purple)" : "transparent",
                  border: isActive ? "none" : "1.5px solid var(--t3)",
                  boxShadow: isActive ? "0 0 6px var(--purple)" : "none",
                }} />
                {l}
                {isActive && <span style={{ marginLeft: "auto", fontSize: "0.65rem", color: "var(--purple)", fontWeight: 700, letterSpacing: "0.05em" }}>●</span>}
              </button>
            );
          })}
        </div>
      )}

      <style>{`
        @media (min-width: 768px) {
          .hide-mobile { display: flex !important; }
          .show-mobile { display: none !important; }
        }
        @media (max-width: 767px) {
          .hide-mobile { display: none !important; }
          .show-mobile { display: flex !important; }
        }
      `}</style>
    </nav>
  );
}
