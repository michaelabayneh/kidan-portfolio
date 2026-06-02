"use client";

const categories = [
  {
    name: "Frontend",
    color: "var(--purple)",
    tools: [
      { name: "Next.js",     emoji: "▲" },
      { name: "React",       emoji: "⚛️" },
      { name: "TypeScript",  emoji: "📘" },
      { name: "Tailwind",    emoji: "🎨" },
      { name: "Framer",      emoji: "🎭" },
    ],
  },
  {
    name: "Backend",
    color: "var(--cyan)",
    tools: [
      { name: "Node.js",     emoji: "🟢" },
      { name: "Python",      emoji: "🐍" },
      { name: "Express",     emoji: "🚂" },
      { name: "PostgreSQL",  emoji: "🐘" },
      { name: "MongoDB",     emoji: "🍃" },
    ],
  },
  {
    name: "Creative",
    color: "var(--pink)",
    tools: [
      { name: "Figma",         emoji: "🖌️" },
      { name: "Photoshop",     emoji: "🖼️" },
      { name: "Illustrator",   emoji: "✏️" },
      { name: "Premiere Pro",  emoji: "🎬" },
      { name: "After Effects", emoji: "✨" },
    ],
  },
  {
    name: "Tools & Cloud",
    color: "var(--purple)",
    tools: [
      { name: "Git",       emoji: "🔀" },
      { name: "GitHub",    emoji: "🐙" },
      { name: "Vercel",    emoji: "▲" },
      { name: "Firebase",  emoji: "🔥" },
      { name: "Linux",     emoji: "🐧" },
    ],
  },
];

export default function TechStack() {
  return (
    <section className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-sm font-medium tracking-widest uppercase mb-2" style={{ color: "var(--purple)" }}>
            Tools I Use
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold" style={{ color: "var(--t1)" }}>
            Tech <span className="gradient-text">Stack</span>
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((cat) => (
            <div
              key={cat.name}
              className="glass rounded-2xl p-6 hover:scale-[1.02] transition-all duration-300"
              style={{ borderTop: `3px solid ${cat.color}` }}
            >
              <h3 className="font-bold text-sm tracking-widest uppercase mb-5" style={{ color: cat.color }}>
                {cat.name}
              </h3>
              <div className="space-y-3">
                {cat.tools.map((tool) => (
                  <div
                    key={tool.name}
                    className="flex items-center gap-3 rounded-xl px-3 py-2 transition-all duration-200 hover:translate-x-1 cursor-default"
                    style={{ background: "var(--bg-card)", border: "1px solid var(--border)" }}
                  >
                    <span className="text-lg w-6 text-center">{tool.emoji}</span>
                    <span className="text-sm font-medium" style={{ color: "var(--t1)" }}>{tool.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Language spoken section */}
        <div className="mt-12 glass rounded-2xl p-8" style={{ borderColor: "var(--border-hi)" }}>
          <h3 className="font-bold text-center mb-6 text-sm tracking-widest uppercase" style={{ color: "var(--purple)" }}>
            🌍 Languages Spoken
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              { lang: "Amharic",  level: "Native",       flag: "🇪🇹" },
              { lang: "English",  level: "Fluent",        flag: "🇬🇧" },
              { lang: "Oromo",    level: "Conversational",flag: "🌿" },
            ].map((l) => (
              <div
                key={l.lang}
                className="flex items-center gap-3 px-5 py-3 rounded-full"
                style={{ background: "var(--bg-card)", border: "1px solid var(--border-hi)" }}
              >
                <span className="text-xl">{l.flag}</span>
                <div>
                  <p className="font-semibold text-sm" style={{ color: "var(--t1)" }}>{l.lang}</p>
                  <p className="text-xs" style={{ color: "var(--t3)" }}>{l.level}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
