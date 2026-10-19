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
          DEFAULT: "#191624",
          2: "#272336",
        },
        paper: {
          DEFAULT: "#FAF8F4",
          2: "#FFFFFF",
        },
        muted: "#726D7A",
        line: "rgba(25, 22, 36, 0.10)",
        violet: {
          DEFAULT: "#7452D6",
          dark: "#5A3AB7",
        },
        orange: "#F17854",
        teal: {
          DEFAULT: "#3575D5",
          dark: "#2459AC",
        },
        cta: "#D58AFF",
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        serif: ["var(--font-serif)", "Georgia", "serif"],
      },
      maxWidth: {
        page: "none",
      },
      boxShadow: {
        card: "0 8px 24px rgba(25, 22, 36, 0.06)",
        panel: "0 24px 64px rgba(25, 22, 36, 0.20)",
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
