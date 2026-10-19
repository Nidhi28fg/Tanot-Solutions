import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: "#0B1220",
          2: "#151C2C",
        },
        paper: {
          DEFAULT: "#F6F4EF",
          2: "#FFFFFF",
        },
        muted: "#5C6578",
        line: "rgba(11, 18, 32, 0.08)",
        teal: {
          DEFAULT: "#0F766E",
          dark: "#0B5C56",
        },
        cta: "#D8F34A",
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        serif: ["var(--font-serif)", "Georgia", "serif"],
      },
      maxWidth: {
        page: "70rem",
      },
      boxShadow: {
        card: "0 8px 24px rgba(11, 18, 32, 0.06)",
        panel: "0 24px 64px rgba(11, 18, 32, 0.28)",
      },
      spacing: {
        18: "4.5rem",
        22: "5.5rem",
      },
    },
  },
  plugins: [],
};

export default config;
