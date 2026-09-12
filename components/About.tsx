"use client";

import { useEffect, useRef } from "react";

const platforms = [
  { abbr: "SPK", name: "SPARK Social", sub: "Fintech · Wallet + Admin Panel", color: "#3fb950", bg: "rgba(63,185,80,0.2)", border: "rgba(63,185,80,0.3)" },
  { abbr: "KW", name: "KindWallet", sub: "Web3 · Chrome Extension Wallet", color: "#58a6ff", bg: "rgba(88,166,255,0.2)", border: "rgba(88,166,255,0.3)" },
  { abbr: "AI", name: "AI Resume Analyzer", sub: "Full-Stack · Gemini AI", color: "#a371f7", bg: "rgba(163,113,247,0.2)", border: "rgba(163,113,247,0.3)" },
];

const pills = ["React / Next.js", "TypeScript", "Redux Toolkit", "Tailwind CSS"];

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add("visible"); }),
      { threshold: 0.1 }
    );
    sectionRef.current?.querySelectorAll(".reveal").forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <section id="about" ref={sectionRef} className="relative z-[2] px-6 md:px-16 py-16 md:py-24">
      <div className="text-xs tracking-[3px] uppercase mb-3 section-tag-line" style={{ fontFamily: "var(--font-jetbrains)", color: "var(--cyan)" }}>01</div>
      <h2 className="text-5xl font-bold text-white mb-3" style={{ fontFamily: "var(--font-orbitron)" }}>
        About <span style={{ color: "var(--cyan)" }}>Me</span>
      </h2>
      <div className="w-16 h-0.5 mb-12" style={{ background: "linear-gradient(90deg, var(--cyan), transparent)", boxShadow: "0 0 10px var(--cyan)" }} />

      <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center reveal">
        {/* Text */}
        <div>
          <p className="leading-relaxed mb-5" style={{ color: "var(--muted)" }}>
            I&apos;m a <strong className="text-white">Frontend Software Engineer</strong> at SoluLab, building production-grade frontends for fintech and Web3 platforms — customer, vendor, and admin panels alike.
          </p>
          <p className="leading-relaxed mb-5" style={{ color: "var(--muted)" }}>
            With <strong className="text-white">React, Next.js, and TypeScript</strong>, I translate complex requirements into scalable, maintainable UI architectures — collaborating closely with backend and design teams to ship reliable products.
          </p>
          <p className="leading-relaxed" style={{ color: "var(--muted)" }}>
            My frontend work is backed by full-stack literacy — Node.js, Express, and FastAPI on the backend, PostgreSQL and MongoDB for data, and Docker/AWS for shipping it all. I care about end-to-end feature ownership, not just pixels.
          </p>
          <div className="flex flex-wrap gap-3 mt-8">
            {pills.map((p) => (
              <span
                key={p}
                className="px-4 py-2 text-xs tracking-wider"
                style={{
                  border: "1px solid var(--border)",
                  color: "var(--cyan)",
                  background: "rgba(63,185,80,0.05)",
                  fontFamily: "var(--font-jetbrains)",
                  borderRadius: 2,
                }}
              >
                {p}
              </span>
            ))}
          </div>
        </div>

        {/* Card */}
        <div
          className="relative overflow-hidden p-10"
          style={{ border: "1px solid var(--border)", background: "rgba(22,27,34,0.5)", borderRadius: 4 }}
        >
          <div className="absolute inset-0" style={{ background: "radial-gradient(circle at top right, rgba(63,185,80,0.05), transparent 60%)" }} />
          <div className="relative z-10">
            <div className="text-xs tracking-widest mb-5" style={{ fontFamily: "var(--font-jetbrains)", color: "var(--muted)" }}>
              // Platforms Delivered
            </div>
            {platforms.map((c) => (
              <div key={c.name} className="flex items-center gap-4 my-4" style={{ fontFamily: "var(--font-jetbrains)", fontSize: 13 }}>
                <div
                  className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0"
                  style={{ background: c.bg, color: c.color, border: `1px solid ${c.border}` }}
                >
                  {c.abbr}
                </div>
                <div>
                  <div style={{ color: "var(--text)" }}>{c.name}</div>
                  <div className="text-xs" style={{ color: "var(--muted)" }}>{c.sub}</div>
                </div>
              </div>
            ))}

            <div className="mt-6 pt-6" style={{ borderTop: "1px solid rgba(63,185,80,0.1)" }}>
              <div className="text-xs tracking-widest mb-3" style={{ fontFamily: "var(--font-jetbrains)", color: "var(--muted)" }}>// Achievement</div>
              <div className="flex items-center gap-3">
                <span style={{ fontSize: 18 }}>🏆</span>
                <div>
                  <div style={{ color: "var(--text)" }}>2nd Runner-Up</div>
                  <div className="text-xs" style={{ color: "var(--muted)" }}>HackNUthon 2025 — State Level Hackathon</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
