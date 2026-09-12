import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        orbitron: ["var(--font-orbitron)", "monospace"],
        mono: ["var(--font-jetbrains)", "monospace"],
        sans: ["var(--font-space)", "sans-serif"],
      },
      colors: {
        cyan: "#3fb950",
        "dark-1": "#0d1117",
        "dark-2": "#161b22",
        "dark-3": "#21262d",
        "text-primary": "#c9d1d9",
        muted: "#8b949e",
      },
      animation: {
        float: "float 4s ease-in-out infinite",
        blink: "blink 1s infinite",
        scan: "scan 8s linear infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-20px)" },
        },
        blink: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0" },
        },
        scan: {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(100vh)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
