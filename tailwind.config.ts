import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)", "Inter", "ui-sans-serif", "system-ui"],
        display: [
          "var(--font-display)",
          "Poppins",
          "Inter",
          "ui-sans-serif",
          "system-ui"
        ]
      },
      backgroundImage: {
        "grid-radial":
          "radial-gradient(circle at center, rgba(52, 211, 153, 0.25), rgba(12, 47, 66, 0.1) 60%, transparent 100%)"
      },
      colors: {
        charcoal: "#0C1B2A",
        "charcoal-light": "#10283F",
        emerald: "#34D399",
        "emerald-dark": "#059669",
        sky: "#38BDF8"
      }
    }
  },
  plugins: []
};

export default config;
