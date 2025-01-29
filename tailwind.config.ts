import type { Config } from "tailwindcss";

export default {
  darkMode: "class",
  content: ["./app/**/{**,.client,.server}/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#00135F",
        secondary: `var(--secondary)`,
        // background: "#f0f0f1",
        background: `var(--background)`,
        danger: " #FF2138",
        dark: "#333333",
        info: "#0575E6",
        button: "#ffd700",
        lightGray: "#EEEEEE",
        "button-text": "#ffffff",
      },
      fontFamily: {
        sans: [
          '"Inter"',
          "ui-sans-serif",
          "system-ui",
          "sans-serif",
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"',
          '"Noto Color Emoji"',
        ],
      },
    },
  },
  plugins: [],
} satisfies Config;
