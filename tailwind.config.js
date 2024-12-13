/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["packages/**/*.{ts,tsx}"],
  theme: {
    extend: {
      screens: {
        short: { raw: "(max-height: 640px)" }, // Hide the logo if the screen is not tall enough.
        "portrait-narrow": { raw: "(orientation: portrait) and (max-aspect-ratio: 2/3)" },
        "portrait-wide": { raw: "(orientation: portrait) and (min-aspect-ratio: 2/3)" },
        "landscape-short": { raw: "(orientation: landscape) and (max-height: 400px)" },
      },
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
