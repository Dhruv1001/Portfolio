"use client";

import { useEffect, useRef } from "react";

export default function Cursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const pos = useRef({ mx: 0, my: 0, rx: 0, ry: 0 });

  useEffect(() => {
    const cursor = cursorRef.current;
    const ring = ringRef.current;
    if (!cursor || !ring) return;

    const onMove = (e: MouseEvent) => {
      pos.current.mx = e.clientX;
      pos.current.my = e.clientY;
      cursor.style.left = e.clientX + "px";
      cursor.style.top = e.clientY + "px";
    };

    const animRing = () => {
      const p = pos.current;
      p.rx += (p.mx - p.rx) * 0.12;
      p.ry += (p.my - p.ry) * 0.12;
      ring.style.left = Math.round(p.rx) + "px";
      ring.style.top = Math.round(p.ry) + "px";
      requestAnimationFrame(animRing);
    };

    const onEnter = () => {
      ring.style.transform = "translate(-50%,-50%) scale(1.5)";
      ring.style.borderColor = "rgba(0,245,255,0.8)";
    };
    const onLeave = () => {
      ring.style.transform = "translate(-50%,-50%) scale(1)";
      ring.style.borderColor = "rgba(0,245,255,0.5)";
    };

    document.addEventListener("mousemove", onMove);
    document.querySelectorAll("a,button").forEach((el) => {
      el.addEventListener("mouseenter", onEnter);
      el.addEventListener("mouseleave", onLeave);
    });

    animRing();
    return () => document.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <>
      <div
        ref={cursorRef}
        className="fixed z-[9999] pointer-events-none rounded-full"
        style={{
          width: 12,
          height: 12,
          background: "var(--cyan)",
          transform: "translate(-50%,-50%)",
          boxShadow: "0 0 20px var(--cyan), 0 0 40px rgba(0,245,255,0.4)",
          transition: "transform 0.1s",
        }}
      />
      <div
        ref={ringRef}
        className="fixed z-[9998] pointer-events-none rounded-full"
        style={{
          width: 36,
          height: 36,
          border: "1px solid rgba(0,245,255,0.5)",
          transform: "translate(-50%,-50%)",
          transition: "all 0.15s ease",
        }}
      />
    </>
  );
}
