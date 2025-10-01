import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "var(--ink)",
        bone: "var(--bone)",
        graphite: "var(--graphite)",
        slate: "var(--slate)",
        moss: {
          600: "var(--moss-600)",
        },
        amber: {
          500: "var(--amber-500)",
        },
        crimson: {
          600: "var(--crimson-600)",
        },
        cobalt: {
          600: "var(--cobalt-600)",
        },
        card: "var(--card)",
        muted: "var(--muted)",
        border: "var(--border)",
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui"],
        mono: ["IBM Plex Mono", "ui-monospace", "monospace"],
      },
      borderRadius: {
        xl: "0.75rem",
        "2xl": "1rem",
      },
      animation: {
        "fade-in": "fadeIn 240ms ease-out",
        "slide-in": "slideIn 240ms ease-out",
        "progress-fill": "progressFill 400ms ease-out",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0", transform: "translateY(4px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        slideIn: {
          "0%": { opacity: "0", transform: "translateX(-8px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        progressFill: {
          "0%": { width: "0%" },
          "100%": { width: "var(--progress-width)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;