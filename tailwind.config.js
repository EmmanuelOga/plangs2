/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["packages/**/*.{ts,tsx}"],
  theme: {
    extend: {
      screens: {
        short: { raw: "(max-height: 640px)" }, // Hide the logo if the screen is not tall enough.
        "portrait-narrow": { raw: "(orientation: portrait) and (max-width: 639px)" },
        "portrait-wide": { raw: "(orientation: portrait) and (min-width: 640px)" },
        "landscape-narrow": { raw: "(orientation: landscape) and (max-width: 1719px)" },
        "landscape-wide": { raw: "(orientation: landscape) and (min-width: 1720px)" },
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
