"use client";

import { useEffect, useRef } from "react";

interface Tag { label: string; variant: "cyan" | "blue" | "purple" | "green" }
interface Skill { icon: string; name: string; desc: string; tags: Tag[] }

const skills: Skill[] = [
  {
    icon: "⛓️", name: "Smart Contracts",
    desc: "Writing secure, gas-optimized Solidity contracts. ERC-20, ERC-721, ERC-1155 standards. DeFi primitives and custom protocol logic.",
    tags: [{ label: "Solidity", variant: "cyan" }, { label: "Hardhat", variant: "cyan" }, { label: "Foundry", variant: "cyan" }, { label: "OpenZeppelin", variant: "blue" }],
  },
  {
    icon: "🌐", name: "Frontend Dev",
    desc: "Building pixel-perfect, performant UIs with modern frameworks. SSR, SSG, and Web3 wallet integrations that feel native.",
    tags: [{ label: "React", variant: "blue" }, { label: "Next.js", variant: "blue" }, { label: "TypeScript", variant: "purple" }, { label: "Tailwind", variant: "cyan" }],
  },
  {
    icon: "🔗", name: "Web3 Integration",
    desc: "Seamless dApp connectivity. Multi-wallet support, contract reads/writes, transaction lifecycle management, and real-time event listeners.",
    tags: [{ label: "ethers.js", variant: "cyan" }, { label: "wagmi", variant: "cyan" }, { label: "viem", variant: "blue" }, { label: "WalletConnect", variant: "purple" }],
  },
  {
    icon: "🗄️", name: "Decentralized Storage",
    desc: "Storing metadata, assets, and app data on decentralized networks. Ensuring censorship-resistant and permanent data availability.",
    tags: [{ label: "IPFS", variant: "green" }, { label: "Filecoin", variant: "green" }, { label: "Arweave", variant: "cyan" }, { label: "Pinata", variant: "blue" }],
  },
];

const tagStyles: Record<string, React.CSSProperties> = {
  cyan:   { background: "rgba(0,245,255,0.08)",  color: "var(--cyan)",   border: "1px solid rgba(0,245,255,0.2)" },
  blue:   { background: "rgba(0,102,255,0.1)",   color: "#5599ff",       border: "1px solid rgba(0,102,255,0.2)" },
  purple: { background: "rgba(123,47,255,0.1)",  color: "#aa77ff",       border: "1px solid rgba(123,47,255,0.2)" },
  green:  { background: "rgba(0,255,136,0.08)",  color: "#00ff88",       border: "1px solid rgba(0,255,136,0.2)" },
};

export default function Skills() {
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
    <section
      id="skills"
      ref={sectionRef}
      className="relative z-[2] px-16 py-24"
      style={{ background: "linear-gradient(180deg, var(--dark) 0%, var(--dark2) 50%, var(--dark) 100%)" }}
    >
      <div className="text-xs tracking-[3px] uppercase mb-3 section-tag-line" style={{ fontFamily: "var(--font-jetbrains)", color: "var(--cyan)" }}>02</div>
      <h2 className="text-5xl font-bold text-white mb-3" style={{ fontFamily: "var(--font-orbitron)" }}>
        Technical <span style={{ color: "var(--cyan)" }}>Skills</span>
      </h2>
      <div className="w-16 h-0.5 mb-12" style={{ background: "linear-gradient(90deg, var(--cyan), transparent)", boxShadow: "0 0 10px var(--cyan)" }} />

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skills.map((s, i) => (
          <div
            key={i}
            className="reveal relative overflow-hidden p-7 transition-all duration-300 group"
            style={{ border: "1px solid var(--border)", background: "rgba(4,20,40,0.6)", borderRadius: 4, transitionDelay: `${i * 80}ms` }}
          >
            <div
              className="absolute top-0 left-0 right-0 h-0.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              style={{ background: "linear-gradient(90deg, transparent, var(--cyan), transparent)" }}
            />
            <div className="text-3xl mb-4">{s.icon}</div>
            <div className="text-sm font-bold tracking-wider mb-2 text-white" style={{ fontFamily: "var(--font-orbitron)" }}>{s.name}</div>
            <div className="text-sm leading-relaxed mb-5" style={{ color: "var(--muted)" }}>{s.desc}</div>
            <div className="flex flex-wrap gap-2">
              {s.tags.map((t) => (
                <span
                  key={t.label}
                  className="px-3 py-1 text-xs tracking-wider"
                  style={{ ...tagStyles[t.variant], fontFamily: "var(--font-jetbrains)", borderRadius: 2 }}
                >
                  {t.label}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
