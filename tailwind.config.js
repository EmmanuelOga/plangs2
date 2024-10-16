/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["packages/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "var(--color-primary)",
        secondary: "var(--color-secondary)",
        background: "var(--color-background)",
        foreground: "var(--color-foreground)",
        thumbnails: "var(--color-thumbnails)",
        stripes: "var(--color-stripes)",

        hiliteb: "var(--color-hiliteb)",
        hilitef: "var(--color-hilitef)",
      },
    },
  },
  plugins: [require("@tailwindcss/typography"), require("@tailwindcss/forms")],
};
