"use client";
import { useState } from "react";
import { Mail, Phone, MapPin, Send, CheckCircle } from "lucide-react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate send
    await new Promise((r) => setTimeout(r, 1500));
    setSent(true);
    setLoading(false);
  };

  const info = [
    { icon: <Mail className="text-purple-400" size={20} />, label: "Email", value: "abaynehbirhan29@gmail.com", href: "mailto:abaynehbirhan29@gmail.com" },
    { icon: <Phone className="text-cyan-400" size={20} />, label: "Phone", value: "0924580928", href: "tel:+251924580928" },
    { icon: <MapPin className="text-pink-400" size={20} />, label: "Telegram", value: "@Nove24", href: "https://t.me/Nove24" },
  ];

  return (
    <section id="contact" className="py-24 px-4 relative overflow-hidden scroll-mt-16">
      {/* decorative bg ring */}
      <div
        className="absolute -bottom-40 -right-40 w-96 h-96 rounded-full opacity-10 pointer-events-none"
        style={{ background: "conic-gradient(from 90deg, #8b5cf6, #06b6d4, transparent)", animation: "spin-slow 30s linear infinite" }}
      />
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-purple-400 text-sm font-medium tracking-widest uppercase mb-2">Get In Touch</p>
          <h2 className="text-3xl sm:text-4xl font-bold">
            Contact <span className="gradient-text">Me</span>
          </h2>
          <p className="text-gray-400 mt-4 max-w-md mx-auto">
            Have a project or opportunity in mind? Let&apos;s connect and build something great together.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          {/* Info */}
          <div className="space-y-6">
            {info.map((i) => (
              <a
                key={i.label}
                href={i.href}
                target={i.href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                className="glass rounded-2xl p-5 flex items-center gap-4 hover:border-purple-500/40 hover:translate-x-1 transition-all duration-200"
              >
                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center shrink-0">
                  {i.icon}
                </div>
                <div>
                  <p className="text-xs text-gray-500 uppercase tracking-wider">{i.label}</p>
                  <p className="text-gray-200 text-sm mt-0.5">{i.value}</p>
                </div>
              </a>
            ))}

            <div className="glass rounded-2xl p-6 mt-4">
              <p className="text-gray-400 text-sm leading-relaxed">
                🚀 Currently open to internships, freelance projects, and collaboration opportunities. Reach out and let&apos;s create something impactful!
              </p>
            </div>
          </div>

          {/* Form */}
          <div className="glass rounded-2xl p-8">
            {sent ? (
              <div className="flex flex-col items-center justify-center h-full gap-4 py-12">
                <CheckCircle className="text-green-400" size={48} />
                <p className="text-green-400 font-semibold text-lg">Message Sent!</p>
                <p className="text-gray-400 text-sm text-center">Thanks for reaching out. I&apos;ll get back to you shortly.</p>
                <button
                  onClick={() => { setSent(false); setForm({ name: "", email: "", message: "" }); }}
                  className="mt-2 text-xs text-purple-400 hover:underline"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="text-xs text-gray-500 uppercase tracking-wider block mb-1.5">Name</label>
                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder="Your full name"
                    className="w-full bg-white/5 border border-gray-700/50 rounded-xl px-4 py-3 text-gray-200 placeholder-gray-600 text-sm focus:outline-none focus:border-purple-500/60 transition-colors"
                  />
                </div>
                <div>
                  <label className="text-xs text-gray-500 uppercase tracking-wider block mb-1.5">Email</label>
                  <input
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    placeholder="your@email.com"
                    className="w-full bg-white/5 border border-gray-700/50 rounded-xl px-4 py-3 text-gray-200 placeholder-gray-600 text-sm focus:outline-none focus:border-purple-500/60 transition-colors"
                  />
                </div>
                <div>
                  <label className="text-xs text-gray-500 uppercase tracking-wider block mb-1.5">Message</label>
                  <textarea
                    required
                    rows={5}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    placeholder="Tell me about your project or idea..."
                    className="w-full bg-white/5 border border-gray-700/50 rounded-xl px-4 py-3 text-gray-200 placeholder-gray-600 text-sm focus:outline-none focus:border-purple-500/60 transition-colors resize-none"
                  />
                </div>
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-3 rounded-xl bg-gradient-to-r from-purple-600 to-cyan-500 text-white font-semibold flex items-center justify-center gap-2 hover:opacity-90 transition-all disabled:opacity-60 hover:scale-[1.02]"
                >
                  {loading ? (
                    <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  ) : (
                    <>
                      <Send size={16} /> Send Message
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
