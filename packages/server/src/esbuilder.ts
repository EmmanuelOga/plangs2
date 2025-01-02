import { join } from "node:path";
import type * as esbuild from "esbuild";

const ROOT = join(import.meta.dir, "../../..");

/** ESBuild options for the production build _and_ watch mode. */
export function esbuildOptions(envName: "prod" | "dev", plangsDataPath: string, outfile: string): esbuild.BuildOptions {
  return {
    entryPoints: [join(ROOT, "packages/frontend/src/app/index.tsx")],
    target: ["chrome130", "firefox132", "safari18", "edge130", "es2022"],
    bundle: true,
    sourcemap: true,
    define: { PLANGS_ENV: `"${envName}"`, PLANGS_DATA_PATH: `"/${plangsDataPath}"` },
    minify: envName === "prod",
    treeShaking: envName === "prod",
    alias: envName === "prod" ? { "preact/debug": "preact" } : {},
    outfile: outfile,
    logLevel: "info",
  };
}
