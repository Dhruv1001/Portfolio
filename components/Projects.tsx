"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";

interface Tag { label: string; variant: "cyan" | "blue" | "purple" }
interface Project {
  title: string; chain: string; desc: string;
  bannerClass: string; glowColor: string; tags: Tag[]; liveUrl?: string; githubUrl?: string;
  bannerLabel: string;
}

const projects: Project[] = [
  {
    title: "SPARK Social", chain: "Fintech · Digital Wallet Platform", bannerLabel: "SPARK Social",
    desc: "Built the complete customer-facing frontend from scratch — wallet dashboard, QR-based scan-to-pay flow, groups management, transaction history, and profile/settings screens. Also developed the entire admin panel UI, covering role-based dashboards, vendor management, real-time transaction monitoring, reconciliation views, payout queue management, and audit log screens. Integrated REST APIs for wallet transactions, QR validation, and real-time vendor reconciliation data.",
    bannerClass: "bg-[var(--dark2)]", glowColor: "rgba(63,185,80,0.18)",
    tags: [{ label: "React", variant: "cyan" }, { label: "Next.js", variant: "cyan" }, { label: "TypeScript", variant: "blue" }, { label: "Tailwind", variant: "purple" }],
  },
  {
    title: "KindWallet", chain: "Web3 · Crypto Wallet Ecosystem", bannerLabel: "KindWallet",
    desc: "Built the frontend for a Chrome extension wallet — wallet setup (create/import), secure key handling UI, transaction signing screens, token management, and dApp connectivity flows using the Solana wallet standard. Developed the admin panel frontend, including user and activity management, swap/transaction monitoring, referral system management, feature toggle controls, and platform analytics. Also built the dApp Whitelist Management module, enabling review, approval, rejection, and flagging of user-submitted dApps.",
    bannerClass: "bg-[var(--dark3)]", glowColor: "rgba(88,166,255,0.18)",
    tags: [{ label: "React", variant: "blue" }, { label: "TypeScript", variant: "cyan" }, { label: "Tailwind", variant: "purple" }, { label: "Solana Wallet Standard", variant: "blue" }],
  },
  {
    title: "AI Resume Analyzer", chain: "AI Tooling", bannerLabel: "Resume Analyzer",
    desc: "A full-stack AI-powered application that analyzes resumes against job descriptions. Implemented PDF text extraction with PDF.js and data normalization for accurate content analysis, and integrated Google Gemini AI to generate ATS-style match percentages, missing skill analysis, and improvement suggestions.",
    bannerClass: "bg-[#161b22]", glowColor: "rgba(163,113,247,0.18)",
    tags: [{ label: "React", variant: "cyan" }, { label: "Node.js", variant: "blue" }, { label: "Express", variant: "blue" }, { label: "MongoDB", variant: "purple" }, { label: "Gemini AI", variant: "cyan" }, { label: "PDF.js", variant: "purple" }],
    githubUrl: "https://github.com/Dhruv1001/AI-Resume-analyzer",
  },
];

const tagStyles: Record<string, React.CSSProperties> = {
  cyan:   { background: "rgba(63,185,80,0.08)",   color: "var(--cyan)", border: "1px solid rgba(63,185,80,0.2)" },
  blue:   { background: "rgba(88,166,255,0.1)",   color: "#58a6ff",     border: "1px solid rgba(88,166,255,0.2)" },
  purple: { background: "rgba(163,113,247,0.1)",  color: "#a371f7",     border: "1px solid rgba(163,113,247,0.2)" },
};

export default function Projects() {
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
    <section id="projects" ref={sectionRef} className="relative z-[2] px-6 md:px-16 py-16 md:py-24">
      <div className="text-xs tracking-[3px] uppercase mb-3 section-tag-line" style={{ fontFamily: "var(--font-jetbrains)", color: "var(--cyan)" }}>03</div>
      <h2 className="text-5xl font-bold text-white mb-3" style={{ fontFamily: "var(--font-orbitron)" }}>
        Featured <span style={{ color: "var(--cyan)" }}>Projects</span>
      </h2>
      <div className="w-16 h-0.5 mb-12" style={{ background: "linear-gradient(90deg, var(--cyan), transparent)", boxShadow: "0 0 10px var(--cyan)" }} />

      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((p, i) => (
          <div
            key={i}
            className={`reveal group relative overflow-hidden transition-all duration-400 ${p.bannerClass}`}
            style={{ border: "1px solid var(--border)", borderRadius: 4, transitionDelay: `${i * 80}ms` }}
          >
            {/* Banner */}
            <div className="relative h-44 flex items-center justify-center overflow-hidden" style={{ background: "inherit" }}>
              <div className="banner-grid" />
              <div className="absolute rounded-full" style={{ width: 120, height: 120, background: p.glowColor, filter: "blur(40px)", top: "20%", left: "35%" }} />
              <span className="relative z-10 font-black" style={{ fontFamily: "var(--font-orbitron)", fontSize: "2.5rem", color: "rgba(255,255,255,0.1)", textShadow: "0 0 40px rgba(63,185,80,0.3)" }}>
                {p.bannerLabel}
              </span>
            </div>

            {/* Body */}
            <div className="p-7" style={{ background: "rgba(22,27,34,0.6)" }}>
              <div className="text-xs tracking-[2px] uppercase mb-2" style={{ fontFamily: "var(--font-jetbrains)", color: "var(--cyan)" }}>{p.chain}</div>
              <div className="text-lg font-bold text-white mb-2" style={{ fontFamily: "var(--font-orbitron)" }}>{p.title}</div>
              <div className="text-sm leading-relaxed mb-5" style={{ color: "var(--muted)" }}>{p.desc}</div>
              <div className="flex flex-wrap gap-2 pb-5" style={{ borderBottom: "1px solid var(--border)" }}>
                {p.tags.map((t) => (
                  <span key={t.label} className="px-3 py-1 text-xs" style={{ ...tagStyles[t.variant], fontFamily: "var(--font-jetbrains)", borderRadius: 2 }}>{t.label}</span>
                ))}
              </div>
              <div className="flex gap-3 mt-4">
                {p.githubUrl ? (
                  <Link
                    href={p.githubUrl}
                    className="px-4 py-2 text-xs tracking-wider transition-all duration-300"
                    style={{ border: "1px solid var(--border)", color: "var(--muted)", fontFamily: "var(--font-jetbrains)", borderRadius: 2 }}
                  >
                    GitHub
                  </Link>
                ) : (
                  <span
                    className="px-4 py-2 text-xs tracking-wider"
                    style={{ border: "1px solid var(--border)", color: "var(--muted)", fontFamily: "var(--font-jetbrains)", borderRadius: 2, opacity: 0.7 }}
                  >
                    Confidential Client Project
                  </span>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
