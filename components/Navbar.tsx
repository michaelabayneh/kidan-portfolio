"use client";
import { useState, useEffect } from "react";
import { Menu, X, Sun, Moon } from "lucide-react";
import { useTheme } from "./ThemeProvider";

const links = ["Home", "About", "Skills", "Projects", "Contact"];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("Home");
  const [popping, setPopping] = useState(false);
  const { theme, toggle } = useTheme();

  /* track scroll position to highlight active section */
  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);
      for (const l of [...links].reverse()) {
        const el = document.getElementById(l.toLowerCase());
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActive(l);
          break;
        }
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

  const handleToggle = () => {
    setPopping(true);
    toggle();
    setTimeout(() => setPopping(false), 400);
  };

  return (
    <nav
      className="fixed top-0 w-full z-50 transition-all duration-300"
      style={{
        background: scrolled ? "var(--nav-bg)" : "transparent",
        backdropFilter: scrolled ? "blur(16px)" : "none",
        WebkitBackdropFilter: scrolled ? "blur(16px)" : "none",
        borderBottom: scrolled ? "1px solid var(--border)" : "none",
        boxShadow: scrolled ? "0 2px 32px rgba(0,0,0,0.15)" : "none",
      }}
    >
      <div className="max-w-6xl mx-auto px-5 h-16 flex items-center justify-between">

        {/* Logo */}
        <button
          onClick={() => handleNav("Home")}
          className="flex items-center gap-2 group"
        >
          {/* Icon mark */}
          <div
            className="w-8 h-8 rounded-lg flex items-center justify-center text-xs font-black text-white"
            style={{ background: "linear-gradient(135deg, var(--purple), var(--cyan))" }}
          >
            M
          </div>
          <span className="text-lg font-bold" style={{ color: "var(--t1)" }}>
            ichael<span style={{ color: "var(--purple)" }}>.</span>
          </span>
        </button>

        {/* Desktop pill nav */}
        <div
          className="hidden md:flex items-center gap-1 rounded-full px-2 py-1.5"
          style={{ background: "var(--bg-card)", border: "1px solid var(--border)" }}
        >
          {links.map((l) => {
            const isActive = active === l;
            return (
              <button
                key={l}
                onClick={() => handleNav(l)}
                className="relative px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-200"
                style={{
                  color: isActive ? "#fff" : "var(--t2)",
                  background: isActive
                    ? "linear-gradient(135deg, var(--purple), var(--cyan))"
                    : "transparent",
                  boxShadow: isActive ? "0 2px 12px rgba(139,92,246,0.4)" : "none",
                }}
              >
                {l}
                {/* underline dot for non-active hover */}
                {!isActive && (
                  <span
                    className="absolute bottom-0.5 left-1/2 -translate-x-1/2 w-0 h-0.5 rounded-full transition-all duration-200 group-hover:w-4"
                    style={{ background: "var(--purple)" }}
                  />
                )}
              </button>
            );
          })}
        </div>

        {/* Right side: theme toggle + hamburger */}
        <div className="flex items-center gap-2">
          {/* Theme toggle */}
          <button
            onClick={handleToggle}
            aria-label="Toggle theme"
            title={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
            className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110 ${popping ? "animate-theme-pop" : ""}`}
            style={{
              background: "var(--bg-card)",
              border: "1px solid var(--border-hi)",
            }}
          >
            {theme === "dark"
              ? <Sun size={15} style={{ color: "#fbbf24" }} />
              : <Moon size={15} style={{ color: "var(--purple)" }} />
            }
          </button>

          {/* Mobile hamburger */}
          <button
            className="md:hidden w-10 h-10 rounded-full flex items-center justify-center transition-all duration-200"
            style={{ background: "var(--bg-card)", border: "1px solid var(--border)", color: "var(--t2)" }}
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      {open && (
        <div
          className="md:hidden mx-3 mb-3 rounded-2xl overflow-hidden"
          style={{ background: "var(--nav-bg)", border: "1px solid var(--border)", backdropFilter: "blur(16px)" }}
        >
          {links.map((l) => {
            const isActive = active === l;
            return (
              <button
                key={l}
                onClick={() => handleNav(l)}
                className="w-full text-left px-5 py-3.5 text-sm font-medium flex items-center gap-3 transition-colors duration-150"
                style={{
                  color: isActive ? "var(--purple)" : "var(--t2)",
                  background: isActive ? "var(--bg-card)" : "transparent",
                  borderBottom: "1px solid var(--border)",
                }}
              >
                {/* Active dot */}
                <span
                  className="w-1.5 h-1.5 rounded-full shrink-0"
                  style={{ background: isActive ? "var(--purple)" : "transparent", border: isActive ? "none" : "1px solid var(--t3)" }}
                />
                {l}
              </button>
            );
          })}
        </div>
      )}
    </nav>
  );
}
