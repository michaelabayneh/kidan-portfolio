import { GitFork, Link, Mail, Heart } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-gray-800/50 py-10 px-4">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="text-center sm:text-left">
          <span className="text-lg font-bold gradient-text">Michael Abayneh</span>
          <p className="text-gray-500 text-xs mt-1">Software Engineer · Designer · Leader</p>
        </div>

        <div className="flex gap-4">
          {[
            { icon: <GitFork size={18} />, href: "https://github.com", label: "GitHub" },
            { icon: <Link size={18} />, href: "https://linkedin.com", label: "LinkedIn" },
            { icon: <Mail size={18} />, href: "mailto:abaynehbirhan29@gmail.com", label: "Email" },
          ].map((s) => (
            <a
              key={s.label}
              href={s.href}
              aria-label={s.label}
              className="text-gray-500 hover:text-purple-400 transition-colors"
            >
              {s.icon}
            </a>
          ))}
        </div>

        <p className="text-gray-600 text-xs flex items-center gap-1">
          Made with <Heart size={12} className="text-pink-500" /> by Michael Abayneh
        </p>
      </div>
    </footer>
  );
}
