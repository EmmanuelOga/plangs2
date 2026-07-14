import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    include: ["packages/**/src/**/*.test.ts", "scripts/**/*.test.ts"],
    exclude: ["**/node_modules/**", "**/dist/**", "packages/{ai,auxiliar,definitions,frontend,functions,graphgen,languist,plangs,server}/**"],
  },
});
