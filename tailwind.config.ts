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
        // Core Empirical Palette - Theme Responsive
        truth: "var(--truth)",           // Black in light, White in dark
        void: "var(--void)",             // White in light, Black in dark
        
        // Analytical Grey Spectrum
        grey: {
          100: "var(--grey-100)",        // Lightest operational field
          200: "var(--grey-200)",        // Interface backgrounds  
          300: "var(--grey-300)",        // Borders, measurement lines
          400: "var(--grey-400)",        // Inactive states
          500: "var(--grey-500)",        // Active interfaces
          600: "var(--grey-600)",        // Secondary text
          700: "var(--grey-700)",        // High contrast analysis
          800: "var(--grey-800)",        // Near-void depth
          900: "var(--grey-900)",        // Measurement void
        },
        
        // System Mappings for Components
        background: "var(--background)",
        foreground: "var(--foreground)",
        card: "var(--card)",
        border: "var(--border)",
        muted: "var(--muted)",
        "muted-foreground": "var(--muted-foreground)",
        
        // Data States
        verified: "var(--verified)",
        unverified: "var(--unverified)",
        error: "var(--error)",
        
        // Legacy compatibility (will phase out)
        black: "#000000",
        white: "#FFFFFF",
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