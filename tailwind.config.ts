import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        small: { max: "334px" },
        medium: { max: "420px" },
        large: { max: "550px" },
      },
      padding: {
        "y-default": "95px",
      },
      colors: {
        primary: "#1f2233",
        secondary: "#23253a",
        tertiary: "#2b2e41",
        highlight: "rgb(56 189 248)",
        shadow: "rgba(0, 0, 0, 0.519)",
      },
    },
  },
  plugins: [],
};
export default config;
