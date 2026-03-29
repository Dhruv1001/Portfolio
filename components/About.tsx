"use client";

import { useEffect, useRef } from "react";

const chains = [
  { abbr: "ETH", name: "Ethereum", sub: "EVM Smart Contracts", level: "Expert", bg: "rgba(98,126,234,0.2)", color: "#627eea", border: "rgba(98,126,234,0.3)" },
  { abbr: "SOL", name: "Solana", sub: "Rust / Anchor Programs", level: "Proficient", bg: "rgba(153,69,255,0.2)", color: "#9945ff", border: "rgba(153,69,255,0.3)" },
  { abbr: "POLY", name: "Polygon", sub: "L2 Scaling Solutions", level: "Expert", bg: "rgba(130,71,229,0.2)", color: "#8247e5", border: "rgba(130,71,229,0.3)" },
  { abbr: "BASE", name: "Base", sub: "OP Stack Deployment", level: "Proficient", bg: "rgba(0,82,255,0.2)", color: "#0052ff", border: "rgba(0,82,255,0.3)" },
];

const pills = ["Solidity", "React / Next.js", "ethers.js", "IPFS"];

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
            I&apos;m a passionate <strong className="text-white">Web3 &amp; Frontend Developer</strong> who lives at the intersection of cutting-edge blockchain technology and beautiful user experience design.
          </p>
          <p className="leading-relaxed mb-5" style={{ color: "var(--muted)" }}>
            With expertise in <strong className="text-white">Solidity smart contract development</strong> and modern frontend frameworks, I build decentralized applications that are not only functional and secure — but genuinely delightful to use.
          </p>
          <p className="leading-relaxed" style={{ color: "var(--muted)" }}>
            From DeFi protocols and NFT platforms to DAO governance tools, I bring ideas from whitepaper to mainnet. I believe Web3 shouldn&apos;t feel complicated — great UX is what drives real adoption.
          </p>
          <div className="flex flex-wrap gap-3 mt-8">
            {pills.map((p) => (
              <span
                key={p}
                className="px-4 py-2 text-xs tracking-wider"
                style={{
                  border: "1px solid var(--border)",
                  color: "var(--cyan)",
                  background: "rgba(0,245,255,0.05)",
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
          style={{ border: "1px solid var(--border)", background: "rgba(4,20,40,0.5)", borderRadius: 4 }}
        >
          <div className="absolute inset-0" style={{ background: "radial-gradient(circle at top right, rgba(0,245,255,0.05), transparent 60%)" }} />
          <div className="relative z-10">
            <div className="text-xs tracking-widest mb-5" style={{ fontFamily: "var(--font-jetbrains)", color: "var(--muted)" }}>
              // Blockchain Expertise
            </div>
            {chains.map((c) => (
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
                <div className="ml-auto text-xs" style={{ color: "#00ff88" }}>{c.level}</div>
              </div>
            ))}

            <div className="mt-6 pt-6" style={{ borderTop: "1px solid rgba(0,245,255,0.1)" }}>
              <div className="text-xs tracking-widest mb-3" style={{ fontFamily: "var(--font-jetbrains)", color: "var(--muted)" }}>// Audit Score</div>
              <div className="flex items-center gap-3">
                <div className="flex-1 h-1 rounded overflow-hidden" style={{ background: "rgba(0,245,255,0.1)" }}>
                  <div className="h-full" style={{ width: "94%", background: "linear-gradient(90deg, var(--cyan), var(--blue))", borderRadius: 2 }} />
                </div>
                <span className="text-xs" style={{ fontFamily: "var(--font-jetbrains)", color: "var(--cyan)" }}>94%</span>
              </div>
              <div className="text-xs mt-2" style={{ color: "var(--muted)" }}>Zero critical vulnerabilities across all audited contracts</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
