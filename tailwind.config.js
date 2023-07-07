/** @type {import('tailwindcss').Config} */
import defaultTheme from "tailwindcss/defaultTheme";

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      xs: "475px",
      ...defaultTheme.screens,
    },
    extend: {
      gridTemplateColumns: {
        "auto-fill-250": "repeat(auto-fill, minmax(250px, 1fr))",
      },
      colors: {
        "dark-dark": "#1F2D36",
        "dark-soft": "#2B3743",
      },
    },
  },
  darkMode: "class",
  plugins: [],
};
