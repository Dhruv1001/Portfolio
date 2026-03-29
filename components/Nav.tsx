"use client";

import Link from "next/link";

const links = ["About", "Skills", "Projects", "Contact"];

export default function Nav() {
  return (
    <nav
      className="fixed top-0 w-full z-[100] flex justify-between items-center px-16 py-5"
      style={{
        borderBottom: "1px solid var(--border)",
        background: "rgba(2,11,24,0.8)",
        backdropFilter: "blur(20px)",
      }}
    >
      <div
        className="text-xl font-bold tracking-[3px]"
        style={{
          fontFamily: "var(--font-orbitron)",
          color: "var(--cyan)",
          textShadow: "0 0 20px rgba(0,245,255,0.5)",
        }}
      >
        DHRUV.EXE
      </div>

      <ul className="hidden md:flex gap-10 list-none">
        {links.map((l) => (
          <li key={l}>
            <Link
              href={`#${l.toLowerCase()}`}
              className="text-xs tracking-[1.5px] uppercase transition-colors duration-300 relative group"
              style={{ fontFamily: "var(--font-jetbrains)", color: "var(--muted)" }}
            >
              {l}
              <span
                className="absolute -bottom-1 left-0 w-0 h-px transition-all duration-300 group-hover:w-full"
                style={{ background: "var(--cyan)" }}
              />
            </Link>
          </li>
        ))}
      </ul>

      <Link
        href="#contact"
        className="px-5 py-2 text-xs tracking-wider uppercase transition-all duration-300"
        style={{
          border: "1px solid var(--cyan)",
          color: "var(--cyan)",
          fontFamily: "var(--font-jetbrains)",
          borderRadius: 2,
        }}
      >
        Hire Me
      </Link>
    </nav>
  );
}
