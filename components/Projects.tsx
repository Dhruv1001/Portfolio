"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";

interface Tag { label: string; variant: "cyan" | "blue" | "purple" | "green" }
interface Project {
  title: string; chain: string; desc: string; 
  bannerClass: string; glowColor: string; tags: Tag[]; liveUrl: string; githubUrl: string;
  bannerLabel: string;
}

const projects: Project[] = [
  {
    title: "Voting DApp", chain: "Ethereum · Polygon", bannerLabel: "DApp",
    desc: "Developed a blockchain-based Voting DApp that enables users to participate in secure and transparent elections without relying on a centralized authority. The system leverages smart contracts to record votes immutably on the blockchain, preventing vote manipulation and ensuring data integrity. The application includes wallet-based authentication, real-time vote counting, and a user-friendly React interface for seamless interaction.",
    bannerClass: "bg-[#020b18]", glowColor: "rgba(0,245,255,0.15)",
    tags: [{ label: "Solidity", variant: "cyan" }, { label: "React", variant: "blue" }, { label: "Ethers.js", variant: "purple" }],
    liveUrl: "#", githubUrl: "https://github.com/Dhruv1001/Voting-DApp",
  },
  {
    title: "TokenMarketPlace - Smart Contract", chain: "Ethereum · Base", bannerLabel: "Samrt contract",
    desc: "Built a decentralized Token Marketplace where users can mint, list, and trade blockchain-based tokens using smart contracts. The platform ensures trustless transactions, transparent pricing, and secure ownership transfers without intermediaries. Integrated wallet connectivity for user authentication and implemented smart contract logic for token management and transaction validation.",
    bannerClass: "bg-[#0d0520]", glowColor: "rgba(123,47,255,0.2)",
    tags: [{ label: "Solidity", variant: "cyan" }],
    liveUrl: "#", githubUrl: "https://github.com/Dhruv1001/TokenMarketPlace",
  },
  {
    title: "Github-Profile-search", chain: "", bannerLabel: "Github",
    desc: "A React-based web application that allows users to search GitHub profiles and view detailed user information using the GitHub REST API.",
    bannerClass: "bg-[#051428]", glowColor: "rgba(0,102,255,0.2)",
    tags: [{ label: "React", variant: "purple" }, { label: "JavaScript", variant: "blue" }, { label: "REST API", variant: "cyan" }],
    liveUrl: "#", githubUrl: "https://github.com/Dhruv1001/Github-Profile-Search",
  },
  {
    title: "AI-Resume-Analyzer", chain: "", bannerLabel: "Resume analyzer",
    desc: "An AI-powered web application that analyzes resumes against job descriptions to calculate ATS-style match percentage, identify missing skills, and provide actionable improvement suggestions.",
    bannerClass: "bg-[#180524]", glowColor: "rgba(123,47,255,0.2)",
    tags: [{ label: "React/Node/Express", variant: "cyan" }, { label: "PDF.js", variant: "blue" }, { label: "Google Gemini API", variant: "purple" }],
    liveUrl: "#", githubUrl: "https://github.com/Dhruv1001/AI-Resume-analyzer",
  },
];

const tagStyles: Record<string, React.CSSProperties> = {
  cyan:   { background: "rgba(0,245,255,0.08)",  color: "var(--cyan)",   border: "1px solid rgba(0,245,255,0.2)" },
  blue:   { background: "rgba(0,102,255,0.1)",   color: "#5599ff",       border: "1px solid rgba(0,102,255,0.2)" },
  purple: { background: "rgba(123,47,255,0.1)",  color: "#aa77ff",       border: "1px solid rgba(123,47,255,0.2)" },
  green:  { background: "rgba(0,255,136,0.08)",  color: "#00ff88",       border: "1px solid rgba(0,255,136,0.2)" },
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
              <span className="relative z-10 font-black" style={{ fontFamily: "var(--font-orbitron)", fontSize: "2.5rem", color: "rgba(255,255,255,0.1)", textShadow: "0 0 40px rgba(0,245,255,0.3)" }}>
                {p.bannerLabel}
              </span>
            </div>

            {/* Body */}
            <div className="p-7" style={{ background: "rgba(4,20,40,0.6)" }}>
              <div className="text-xs tracking-[2px] uppercase mb-2" style={{ fontFamily: "var(--font-jetbrains)", color: "var(--cyan)" }}>{p.chain}</div>
              <div className="text-lg font-bold text-white mb-2" style={{ fontFamily: "var(--font-orbitron)" }}>{p.title}</div>
              <div className="text-sm leading-relaxed mb-5" style={{ color: "var(--muted)" }}>{p.desc}</div>
              <div className="flex flex-wrap gap-2 pb-5" style={{ borderBottom: "1px solid var(--border)" }}>
                {p.tags.map((t) => (
                  <span key={t.label} className="px-3 py-1 text-xs" style={{ ...tagStyles[t.variant], fontFamily: "var(--font-jetbrains)", borderRadius: 2 }}>{t.label}</span>
                ))}
              </div>
              <div className="flex gap-3 mt-4">
                <Link
                  href={p.githubUrl}
                  className="px-4 py-2 text-xs tracking-wider transition-all duration-300"
                  style={{ border: "1px solid var(--border)", color: "var(--muted)", fontFamily: "var(--font-jetbrains)", borderRadius: 2 }}
                >
                  GitHub
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
