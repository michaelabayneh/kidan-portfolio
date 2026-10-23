"use client";
import { createContext, useContext, useEffect, useState } from "react";

type Theme = "dark" | "light";

const ThemeContext = createContext<{ theme: Theme; toggle: () => void }>({
  theme: "dark",
  toggle: () => {},
});

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  // Read from localStorage synchronously on first render to avoid flash
  const [theme, setTheme] = useState<Theme>(() => {
    if (typeof window === "undefined") return "dark";
    return (localStorage.getItem("theme") as Theme) ?? "dark";
  });

  // Apply data-theme attribute on mount and whenever theme changes
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    document.documentElement.style.background = theme === "dark" ? "#05050f" : "#eeebff";
    document.body.style.background = theme === "dark" ? "#05050f" : "#eeebff";
    document.body.style.color = theme === "dark" ? "#f0f0f5" : "#1e1b4b";
  }, [theme]);

  const toggle = () => {
    setTheme(prev => {
      const next = prev === "dark" ? "light" : "dark";
      localStorage.setItem("theme", next);
      return next;
    });
  };

  return (
    <ThemeContext.Provider value={{ theme, toggle }}>
      {children}
    </ThemeContext.Provider>
  );
}

export const useTheme = () => useContext(ThemeContext);
