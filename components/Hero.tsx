"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";

const stats = [
  { count: 5, label: "Projects Shipped" },
  { count: 5, label: "Smart Contracts" },
  { count: 2, label: "Years Building" },
];

export default function Hero() {
  const statsRef = useRef<(HTMLSpanElement | null)[]>([]);

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const el = entry.target as HTMLElement;
          const target = Number(el.dataset.count);
          let cur = 0;
          const step = target / 40;
          const timer = setInterval(() => {
            cur = Math.min(cur + step, target);
            el.textContent = Math.floor(cur) + (target > 4 ? "+" : "");
            if (cur >= target) clearInterval(timer);
          }, 40);
          obs.unobserve(el);
        });
      },
      { threshold: 0.5 }
    );
    statsRef.current.forEach((el) => el && obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen z-[2] flex items-center pt-32 pb-16 px-6 md:px-16"
    >
      <div className="max-w-3xl">
        {/* Tag */}
        <div
          className="flex items-center gap-4 mb-6 text-xs tracking-[3px] uppercase"
          style={{ fontFamily: "var(--font-jetbrains)", color: "var(--cyan)" }}
        >
          <span className="w-10 h-px" style={{ background: "var(--cyan)", boxShadow: "0 0 10px var(--cyan)" }} />
          Web3 &amp; Frontend Developer
        </div>

        {/* Headline */}
        <h1
          className="font-black leading-[1.1] text-white"
          style={{ fontFamily: "var(--font-orbitron)", fontSize: "clamp(2.5rem, 6vw, 5rem)" }}
        >
          Building the<br />
          <span className="glow-text" style={{ color: "var(--cyan)" }}>Decentralized</span><br />
          Future.
        </h1>

        {/* Sub */}
        <p className="mt-6 mb-10 text-lg font-light leading-relaxed max-w-xl" style={{ color: "var(--muted)" }}>
          I craft <span style={{ color: "var(--cyan)" }}>immersive interfaces</span> and deploy{" "}
          <span style={{ color: "var(--cyan)" }}>smart contracts</span> that bridge users to the blockchain.
          From dApps to DeFi — pixel-perfect and gas-optimized.
        </p>

        {/* Buttons */}
        <div className="flex gap-5 flex-wrap">
          <Link
            href="#projects"
            className="px-9 py-4 text-sm tracking-widest uppercase transition-all duration-300 relative overflow-hidden group"
            style={{ border: "1px solid var(--cyan)", color: "var(--cyan)", fontFamily: "var(--font-jetbrains)", borderRadius: 2 }}
          >
            <span className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              style={{ background: "linear-gradient(135deg,rgba(0,245,255,0.1),transparent)" }} />
            View My Work
          </Link>
          <Link
            href="#contact"
            className="px-9 py-4 text-sm tracking-widest uppercase transition-all duration-300"
            style={{
              border: "1px solid rgba(0,245,255,0.2)",
              color: "var(--text)",
              background: "rgba(0,245,255,0.08)",
              fontFamily: "var(--font-jetbrains)",
              borderRadius: 2,
            }}
          >
            Let&apos;s Talk
          </Link>
        </div>

        {/* Stats */}
        <div
          className="flex flex-wrap gap-8 md:gap-12 mt-12 md:mt-16 pt-8"
          style={{ borderTop: "1px solid var(--border)" }}
        >
          {stats.map((s, i) => (
            <div key={i}>
              <div
                className="text-4xl font-bold glow-text"
                style={{ fontFamily: "var(--font-orbitron)", color: "var(--cyan)" }}
              >
                <span ref={(el) => { statsRef.current[i] = el; }} data-count={s.count}>0</span>
              </div>
              <div className="text-xs mt-1 tracking-[2px] uppercase" style={{ color: "var(--muted)" }}>
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Floating badge — desktop only */}
      <div className="absolute right-16 top-1/2 -translate-y-1/2 w-72 hidden xl:block animate-float">
        <div
          className="relative overflow-hidden top-line p-8"
          style={{
            border: "1px solid var(--border)",
            background: "rgba(4,20,40,0.7)",
            backdropFilter: "blur(20px)",
            borderRadius: 4,
          }}
        >
          <div className="text-xs tracking-widest mb-4" style={{ fontFamily: "var(--font-jetbrains)", color: "var(--muted)" }}>
            // Live Network Status
          </div>
          {[
            { dot: "#00ff88", label: "Ethereum Mainnet" },
            { dot: "#9945ff", label: "Polygon PoS" },
            { dot: "#0052ff", label: "Base L2" },
          ].map((n) => (
            <div key={n.label} className="flex items-center gap-3 my-3" style={{ fontFamily: "var(--font-jetbrains)", fontSize: 13 }}>
              <span className="w-2 h-2 rounded-full flex-shrink-0" style={{ background: n.dot, boxShadow: `0 0 10px ${n.dot}` }} />
              <span style={{ color: "var(--text)" }}>{n.label}</span>
              <span className="ml-auto text-xs" style={{ color: "#00ff88" }}>Active</span>
            </div>
          ))}
          <div className="mt-4 pt-4" style={{ borderTop: "1px solid rgba(0,245,255,0.1)" }}>
            <div className="text-xs tracking-widest mb-2" style={{ fontFamily: "var(--font-jetbrains)", color: "var(--muted)" }}>
              // Latest Commit
            </div>
            <div className="text-xs" style={{ fontFamily: "var(--font-jetbrains)", color: "#00ff88" }}>
              feat: deploy NFT marketplace v2<span className="animate-blink">_</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
