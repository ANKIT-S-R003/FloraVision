import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "#0D1A12",
        card: "rgba(255,255,255,0.06)",
        cardBorder: "rgba(255,255,255,0.15)",
        secondary: "#D8D8D8",
        accent: "#89C64A",
      },
      fontFamily: {
        sans: ["var(--font-sans)", "ui-sans-serif", "system-ui"],
      },
      borderRadius: {
        xl2: "1.5rem",
        xl3: "2rem",
      },
      backdropBlur: {
        xs: "2px",
      },
      boxShadow: {
        glass: "0 8px 32px rgba(0,0,0,0.35)",
        glow: "0 0 24px rgba(137,198,74,0.35)",
      },
    },
  },
  plugins: [],
};
export default config;
