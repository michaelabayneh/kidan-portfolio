import { FileText, Download, Award, ExternalLink } from "lucide-react";
import Link from "next/link";

const docs = [
  {
    title: "Curriculum Vitae",
    desc: "Full professional CV with education, experience & skills",
    icon: <FileText size={22} />,
    color: "var(--purple)",
    href: "/cv.pdf",
    action: "Download",
    download: true,
  },
  {
    title: "Certificate",
    desc: "Academic & professional achievement certificates",
    icon: <Award size={22} />,
    color: "var(--cyan)",
    href: "/certificate.pdf",
    action: "View",
    download: false,
  },
  {
    title: "Recommendation",
    desc: "Official recommendation letter from university",
    icon: <Award size={22} />,
    color: "var(--pink)",
    href: "/recommendation.pdf",
    action: "View",
    download: false,
  },
];

export default function Documents() {
  return (
    <section className="py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-10">
          <p className="text-sm font-medium tracking-widest uppercase mb-2" style={{ color: "var(--purple)" }}>
            Official Documents
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold" style={{ color: "var(--t1)" }}>
            CV &amp; <span className="gradient-text">Credentials</span>
          </h2>
        </div>

        <div className="grid sm:grid-cols-3 gap-5 mb-6">
          {docs.map((d) => (
            <a
              key={d.title}
              href={d.href}
              download={d.download || undefined}
              target={!d.download ? "_blank" : undefined}
              rel="noopener noreferrer"
              className="glass rounded-2xl p-6 flex flex-col items-center gap-4 text-center hover:scale-105 transition-all duration-300 group"
              style={{ borderTop: `3px solid ${d.color}` }}
            >
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center text-white transition-transform group-hover:scale-110 duration-300"
                style={{ background: `linear-gradient(135deg, ${d.color}, rgba(139,92,246,0.6))` }}
              >
                {d.icon}
              </div>
              <div>
                <p className="font-bold mb-1" style={{ color: "var(--t1)" }}>{d.title}</p>
                <p className="text-xs leading-relaxed" style={{ color: "var(--t3)" }}>{d.desc}</p>
              </div>
              <span
                className="flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-semibold text-white mt-auto"
                style={{ background: d.color }}
              >
                {d.download ? <Download size={12} /> : <ExternalLink size={12} />}
                {d.action}
              </span>
            </a>
          ))}
        </div>

        {/* View full CV page */}
        <div className="text-center">
          <Link
            href="/cv"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold text-white transition-all hover:scale-105 hover:opacity-90"
            style={{ background: "linear-gradient(135deg, var(--purple), var(--cyan))", boxShadow: "0 4px 20px rgba(139,92,246,0.35)" }}
          >
            <FileText size={15} /> View Full CV Page
          </Link>
          <p className="text-xs mt-3" style={{ color: "var(--t3)" }}>
            Add your files to <code className="px-1 py-0.5 rounded" style={{ background: "var(--bg-card)" }}>portfolio/public/</code> as <code>cv.pdf</code> · <code>certificate.pdf</code> · <code>recommendation.pdf</code>
          </p>
        </div>
      </div>
    </section>
  );
}
