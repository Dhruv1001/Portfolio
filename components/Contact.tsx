"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";

const socials = [
  { icon: "✉", label: "Email", value: "buddhabhattidhruv@gmail.com", href: "mailto:buddhabhattidhruv@gmail.com", bg: "rgba(0,245,255,0.1)", color: "var(--cyan)", border: "rgba(0,245,255,0.2)" },
  // { icon: "𝕏", label: "Twitter / X", value: "@devexe_web3", href: "#", bg: "rgba(123,47,255,0.1)", color: "#aa77ff", border: "rgba(123,47,255,0.2)" },
  { icon: "in", label: "LinkedIn", value: "Dhruv Buddhabhatti", href: "https://www.linkedin.com/in/dhruv-buddhabhatti-68407534b/", bg: "rgba(0,102,255,0.1)", color: "#5599ff", border: "rgba(0,102,255,0.2)" },
  { icon: "gh", label: "GitHub", value: "Dhruv1001", href: "https://github.com/Dhruv1001", bg: "rgba(255,255,255,0.05)", color: "var(--text)", border: "rgba(255,255,255,0.15)" },
];

export default function Contact() {
  const sectionRef = useRef<HTMLElement>(null);
  const [status, setStatus] = useState<"idle" | "sent">("idle");

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add("visible"); }),
      { threshold: 0.1 }
    );
    sectionRef.current?.querySelectorAll(".reveal").forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sent");
    setTimeout(() => setStatus("idle"), 3000);
  };

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="relative z-[2] px-16 py-24"
      style={{ borderTop: "1px solid var(--border)", background: "linear-gradient(180deg, var(--dark) 0%, var(--dark2) 100%)" }}
    >
      <div className="text-xs tracking-[3px] uppercase mb-3 section-tag-line" style={{ fontFamily: "var(--font-jetbrains)", color: "var(--cyan)" }}>04</div>
      <h2 className="text-5xl font-bold text-white mb-3" style={{ fontFamily: "var(--font-orbitron)" }}>
        Get In <span style={{ color: "var(--cyan)" }}>Touch</span>
      </h2>
      <div className="w-16 h-0.5 mb-12" style={{ background: "linear-gradient(90deg, var(--cyan), transparent)", boxShadow: "0 0 10px var(--cyan)" }} />

      <div className="grid md:grid-cols-2 gap-20 reveal">
        {/* Left */}
        <div>
          <p className="leading-relaxed mb-5" style={{ color: "var(--muted)" }}>
            Have a Web3 project in mind? Looking to build a dApp, launch an NFT collection, or audit your smart contracts? I&apos;m available for freelance projects and full-time roles.
          </p>
          <p className="leading-relaxed mb-8" style={{ color: "var(--muted)" }}>
            Let&apos;s build something extraordinary together.
          </p>

          <div className="flex flex-col gap-4">
            {socials.map((s) => (
              <Link
                key={s.label}
                href={s.href}
                className="flex items-center gap-4 p-4 transition-all duration-300 group"
                style={{ border: "1px solid var(--border)", borderRadius: 4, background: "rgba(4,20,40,0.4)", textDecoration: "none" }}
              >
                <div className="w-9 h-9 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0"
                  style={{ background: s.bg, color: s.color, border: `1px solid ${s.border}` }}>
                  {s.icon}
                </div>
                <div>
                  <div className="text-xs tracking-wider" style={{ fontFamily: "var(--font-jetbrains)", color: "var(--muted)" }}>{s.label}</div>
                  <div className="text-sm mt-0.5" style={{ color: "var(--text)" }}>{s.value}</div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Form */}
        <div
          className="relative overflow-hidden top-line p-10"
          style={{ border: "1px solid var(--border)", background: "rgba(4,20,40,0.6)", borderRadius: 4 }}
        >
          <form onSubmit={handleSubmit}>
            {[
              { label: "Your Name", type: "text", placeholder: "Satoshi Nakamoto" },
              { label: "Email Address", type: "email", placeholder: "gm@blockchain.xyz" },
              { label: "Project Type", type: "text", placeholder: "DeFi Protocol / NFT / DAO / dApp..." },
            ].map((f) => (
              <div key={f.label} className="mb-5">
                <label className="block text-xs tracking-[2px] uppercase mb-2" style={{ fontFamily: "var(--font-jetbrains)", color: "var(--cyan)" }}>
                  {f.label}
                </label>
                <input
                  type={f.type}
                  placeholder={f.placeholder}
                  required
                  className="w-full px-4 py-3 text-sm outline-none transition-colors duration-300"
                  style={{
                    background: "rgba(0,0,0,0.3)",
                    border: "1px solid var(--border)",
                    color: "var(--text)",
                    fontFamily: "var(--font-space)",
                    borderRadius: 2,
                  }}
                  onFocus={(e) => (e.target.style.borderColor = "rgba(0,245,255,0.4)")}
                  onBlur={(e) => (e.target.style.borderColor = "var(--border)")}
                />
              </div>
            ))}
            <div className="mb-6">
              <label className="block text-xs tracking-[2px] uppercase mb-2" style={{ fontFamily: "var(--font-jetbrains)", color: "var(--cyan)" }}>
                Message
              </label>
              <textarea
                placeholder="Tell me about your project..."
                required
                rows={5}
                className="w-full px-4 py-3 text-sm outline-none transition-colors duration-300 resize-y"
                style={{
                  background: "rgba(0,0,0,0.3)",
                  border: "1px solid var(--border)",
                  color: "var(--text)",
                  fontFamily: "var(--font-space)",
                  borderRadius: 2,
                }}
                onFocus={(e) => (e.target.style.borderColor = "rgba(0,245,255,0.4)")}
                onBlur={(e) => (e.target.style.borderColor = "var(--border)")}
              />
            </div>
            <button
              type="submit"
              className="w-full py-4 text-sm tracking-[2px] uppercase transition-all duration-300"
              style={{
                border: "1px solid var(--cyan)",
                color: status === "sent" ? "#00ff88" : "var(--cyan)",
                background: status === "sent" ? "rgba(0,255,136,0.08)" : "transparent",
                fontFamily: "var(--font-jetbrains)",
                borderColor: status === "sent" ? "rgba(0,255,136,0.5)" : "var(--cyan)",
                borderRadius: 2,
              }}
            >
              {status === "sent" ? "✓ Message Sent!" : "Send Message →"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
