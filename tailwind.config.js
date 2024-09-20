/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["packages/**/*.{ts,tsx}"],
  plugins: [require("@tailwindcss/typography"), require("@tailwindcss/forms")],
};
