"use client";

const items = [
  {
    year: "2024 – Present",
    title: "Next Student Union President",
    org: "Student Union",
    desc: "Elected to lead the student union, overseeing all student affairs, events, and welfare programs for the university community.",
    type: "leadership",
    dot: "var(--pink)",
  },
  {
    year: "2023 – Present",
    title: "General Service Affairs Officer",
    org: "Student Union",
    desc: "Managing general service operations, coordinating between students and administration, and ensuring smooth delivery of campus services.",
    type: "leadership",
    dot: "var(--purple)",
  },
  {
    year: "2022 – Present",
    title: "Freelance Creative Designer",
    org: "Self-Employed",
    desc: "Delivering graphic design, video editing, and digital marketing services to local businesses and organizations across Ethiopia.",
    type: "work",
    dot: "var(--cyan)",
  },
  {
    year: "2020 – Present",
    title: "BSc Software Engineering",
    org: "University — 5th Year",
    desc: "Deep focus on full-stack development, algorithms, software architecture, databases, and cloud computing. Dean's list student.",
    type: "education",
    dot: "var(--purple)",
  },
];

const typeLabel: Record<string, string> = {
  leadership: "Leadership",
  work: "Work",
  education: "Education",
};

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-4 scroll-mt-16">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-sm font-medium tracking-widest uppercase mb-2" style={{ color: "var(--purple)" }}>
            My Journey
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold" style={{ color: "var(--t1)" }}>
            Experience &amp; <span className="gradient-text">Education</span>
          </h2>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* vertical line */}
          <div
            className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px md:-translate-x-1/2"
            style={{ background: "linear-gradient(to bottom, transparent, var(--purple), var(--cyan), transparent)" }}
          />

          <div className="space-y-10">
            {items.map((item, i) => {
              const isLeft = i % 2 === 0;
              return (
                <div
                  key={i}
                  className={`relative flex flex-col md:flex-row gap-6 md:gap-10 items-start ${isLeft ? "md:flex-row" : "md:flex-row-reverse"}`}
                >
                  {/* Dot */}
                  <div
                    className="absolute left-4 md:left-1/2 w-3 h-3 rounded-full -translate-x-1/2 mt-5 z-10"
                    style={{ background: item.dot, boxShadow: `0 0 10px ${item.dot}` }}
                  />

                  {/* Spacer for desktop alternating layout */}
                  <div className="hidden md:block flex-1" />

                  {/* Card */}
                  <div
                    className="glass rounded-2xl p-6 ml-10 md:ml-0 flex-1 hover:scale-[1.02] transition-all duration-300"
                    style={{ borderLeft: `3px solid ${item.dot}` }}
                  >
                    <div className="flex items-center gap-2 mb-2 flex-wrap">
                      <span
                        className="text-xs px-2 py-0.5 rounded-full font-medium"
                        style={{ background: `${item.dot}22`, color: item.dot }}
                      >
                        {typeLabel[item.type]}
                      </span>
                      <span className="text-xs" style={{ color: "var(--t3)" }}>{item.year}</span>
                    </div>
                    <h3 className="font-bold text-base mb-0.5" style={{ color: "var(--t1)" }}>{item.title}</h3>
                    <p className="text-sm font-medium mb-2" style={{ color: "var(--purple)" }}>{item.org}</p>
                    <p className="text-sm leading-relaxed" style={{ color: "var(--t2)" }}>{item.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
