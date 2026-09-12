export default function Footer() {
  return (
    <footer
      className="relative z-[2] text-center py-8 px-6 md:px-16"
      style={{
        borderTop: "1px solid var(--border)",
        fontFamily: "var(--font-jetbrains)",
        fontSize: "0.75rem",
        color: "var(--muted)",
      }}
    >
      <span style={{ color: "var(--cyan)" }}>DHRUV.EXE</span>
      &nbsp;·&nbsp; Frontend Software Engineer
      &nbsp;·&nbsp; Building production frontends, one commit at a time
      &nbsp;·&nbsp; <span style={{ color: "var(--cyan)" }}>2026</span>
    </footer>
  );
}
