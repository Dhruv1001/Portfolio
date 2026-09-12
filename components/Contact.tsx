"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";

const socials = [
  { icon: "✉", label: "Email", value: "buddhabhattidhruv@gmail.com", href: "mailto:buddhabhattidhruv@gmail.com", bg: "rgba(63,185,80,0.1)", color: "var(--cyan)", border: "rgba(63,185,80,0.2)" },
  { icon: "in", label: "LinkedIn", value: "Dhruv Buddhabhatti", href: "https://www.linkedin.com/in/dhruv-buddhabhatti-68407534b/", bg: "rgba(88,166,255,0.1)", color: "#58a6ff", border: "rgba(88,166,255,0.2)" },
  { icon: "gh", label: "GitHub", value: "Dhruv1001", href: "https://github.com/Dhruv1001", bg: "rgba(255,255,255,0.05)", color: "var(--text)", border: "rgba(255,255,255,0.15)" },
];

const getFieldError = (name: string, rawValue: string): string => {
  const v = rawValue.trim();
  switch (name) {
    case "name":
      if (!v) return "Please enter your name";
      if (v.length < 2) return "Name must be at least 2 characters";
      return "";
    case "email":
      if (!v) return "Please enter your email";
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v)) return "Please enter a valid email address";
      return "";
    case "subject":
      if (!v) return "Please share the project type";
      if (v.length < 3) return "That's a bit short — a few more words?";
      return "";
    case "message":
      if (!v) return "Please write a message";
      if (v.length < 10) return "Message should be at least 10 characters";
      return "";
    default:
      return "";
  }
};

export default function Contact() {
  const sectionRef = useRef<HTMLElement>(null);
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add("visible"); }),
      { threshold: 0.1 }
    );
    sectionRef.current?.querySelectorAll(".reveal").forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  const handleFieldBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    const err = getFieldError(name, value);
    setErrors((prev) => ({ ...prev, [name]: err }));
    e.target.style.borderColor = err ? "#f85149" : "var(--border)";
  };

  const handleFieldChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: getFieldError(name, value) }));
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    if (data.botcheck) return; // honeypot tripped — silently drop

    const fieldNames = ["name", "email", "subject", "message"];
    const newErrors: Record<string, string> = {};
    fieldNames.forEach((n) => {
      newErrors[n] = getFieldError(n, String(data[n] ?? ""));
    });
    setErrors(newErrors);
    if (Object.values(newErrors).some(Boolean)) return;

    setStatus("sending");
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY,
          ...data,
        }),
      });
      const result = await res.json();
      if (result.success) {
        setStatus("sent");
        setErrors({});
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
    setTimeout(() => setStatus("idle"), 4000);
  };

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="relative z-[2] px-6 md:px-16 py-16 md:py-24"
      style={{ borderTop: "1px solid var(--border)", background: "linear-gradient(180deg, var(--dark) 0%, var(--dark2) 100%)" }}
    >
      <div className="text-xs tracking-[3px] uppercase mb-3 section-tag-line" style={{ fontFamily: "var(--font-jetbrains)", color: "var(--cyan)" }}>04</div>
      <h2 className="text-5xl font-bold text-white mb-3" style={{ fontFamily: "var(--font-orbitron)" }}>
        Get In <span style={{ color: "var(--cyan)" }}>Touch</span>
      </h2>
      <div className="w-16 h-0.5 mb-12" style={{ background: "linear-gradient(90deg, var(--cyan), transparent)", boxShadow: "0 0 10px var(--cyan)" }} />

      <div className="grid md:grid-cols-2 gap-12 md:gap-20 reveal">
        {/* Left */}
        <div>
          <p className="leading-relaxed mb-5" style={{ color: "var(--muted)" }}>
            Building frontend for fintech and Web3 products, or want to talk shop about React and Next.js? I&apos;m open to full-time roles and freelance work.
          </p>
          <p className="leading-relaxed mb-8" style={{ color: "var(--muted)" }}>
            Let&apos;s build something great together.
          </p>

          <div className="flex flex-col gap-4">
            {socials.map((s) => (
              <Link
                key={s.label}
                href={s.href}
                className="flex items-center gap-4 p-4 transition-all duration-300 group"
                style={{ border: "1px solid var(--border)", borderRadius: 4, background: "rgba(22,27,34,0.4)", textDecoration: "none" }}
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
          style={{ border: "1px solid var(--border)", background: "rgba(22,27,34,0.6)", borderRadius: 4 }}
        >
          <form onSubmit={handleSubmit} noValidate>
            <input type="checkbox" name="botcheck" className="hidden" style={{ display: "none" }} tabIndex={-1} autoComplete="off" />
            {[
              { label: "Your Name", name: "name", type: "text", placeholder: "Jane Doe" },
              { label: "Email Address", name: "email", type: "email", placeholder: "you@company.com" },
              { label: "Project Type", name: "subject", type: "text", placeholder: "Frontend Engineering / Fintech Platform / Web3 Collaboration..." },
            ].map((f) => (
              <div key={f.label} className="mb-5">
                <label className="block text-xs tracking-[2px] uppercase mb-2" style={{ fontFamily: "var(--font-jetbrains)", color: "var(--cyan)" }}>
                  {f.label}
                </label>
                <input
                  name={f.name}
                  type={f.type}
                  placeholder={f.placeholder}
                  required
                  aria-invalid={!!errors[f.name]}
                  className="w-full px-4 py-3 text-sm outline-none transition-colors duration-300"
                  style={{
                    background: "rgba(0,0,0,0.3)",
                    border: `1px solid ${errors[f.name] ? "#f85149" : "var(--border)"}`,
                    color: "var(--text)",
                    fontFamily: "var(--font-space)",
                    borderRadius: 2,
                  }}
                  onChange={handleFieldChange}
                  onFocus={(e) => (e.target.style.borderColor = "rgba(63,185,80,0.4)")}
                  onBlur={handleFieldBlur}
                />
                {errors[f.name] && (
                  <div className="text-xs mt-1.5" style={{ color: "#f85149", fontFamily: "var(--font-jetbrains)" }}>
                    {errors[f.name]}
                  </div>
                )}
              </div>
            ))}
            <div className="mb-6">
              <label className="block text-xs tracking-[2px] uppercase mb-2" style={{ fontFamily: "var(--font-jetbrains)", color: "var(--cyan)" }}>
                Message
              </label>
              <textarea
                name="message"
                placeholder="Tell me about your project..."
                required
                rows={5}
                aria-invalid={!!errors.message}
                className="w-full px-4 py-3 text-sm outline-none transition-colors duration-300 resize-y"
                style={{
                  background: "rgba(0,0,0,0.3)",
                  border: `1px solid ${errors.message ? "#f85149" : "var(--border)"}`,
                  color: "var(--text)",
                  fontFamily: "var(--font-space)",
                  borderRadius: 2,
                }}
                onChange={handleFieldChange}
                onFocus={(e) => (e.target.style.borderColor = "rgba(63,185,80,0.4)")}
                onBlur={handleFieldBlur}
              />
              {errors.message && (
                <div className="text-xs mt-1.5" style={{ color: "#f85149", fontFamily: "var(--font-jetbrains)" }}>
                  {errors.message}
                </div>
              )}
            </div>
            <button
              type="submit"
              disabled={status === "sending"}
              className="w-full py-4 text-sm tracking-[2px] uppercase transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed"
              style={{
                border: `1px solid ${status === "error" ? "#f85149" : "var(--cyan)"}`,
                color: status === "error" ? "#f85149" : "var(--cyan)",
                background: status === "sent" ? "rgba(63,185,80,0.08)" : "transparent",
                fontFamily: "var(--font-jetbrains)",
                borderRadius: 2,
              }}
            >
              {status === "sending" && "Sending…"}
              {status === "sent" && "✓ Message Sent!"}
              {status === "error" && "✗ Failed — try again"}
              {status === "idle" && "Send Message →"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
