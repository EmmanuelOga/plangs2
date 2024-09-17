import type { Config } from "tailwindcss";

export default {
  content: {
    relative: true,
    files: ["packages/{frontend,server}/src/**/*.{tsx,ts}"],
  },
  theme: {
    extend: {
      fontFamily: {
        sans: [
          "ui-rounded",
          "Hiragino Maru Gothic ProN",
          "Quicksand",
          "Comfortaa",
          "Manjari",
          "Arial Rounded MT",
          "Arial Rounded MT Bold",
          "Calibri",
          "source-sans-pro",
          "sans-serif",
        ],
      },
    },
  },
} satisfies Config;
