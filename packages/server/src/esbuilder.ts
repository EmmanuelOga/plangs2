import { join } from "node:path";
import type * as esbuild from "esbuild";

const ROOT = join(import.meta.dir, "../../..");

const TARGET = ["chrome130", "firefox132", "safari18", "edge130", "es2022"];

/** ESBuild options for the production build _and_ watch mode. */
export function appESBuildOptions(envName: "prod" | "dev", plangsDataPath: string, outfile: string): esbuild.BuildOptions {
  return {
    entryPoints: [join(ROOT, "packages/frontend/src/app/index.tsx")],
    target: TARGET,
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

/** ESBuild options for Clouflare functions. */
export function cffESBuildOptions(outfile: string): esbuild.BuildOptions {
  return {
    entryPoints: [join(ROOT, "packages/functions/src/githubapi.ts")],
    target: TARGET,
    bundle: true,
    sourcemap: true,
    minify: false,
    treeShaking: true,
    outfile: outfile,
    logLevel: "info",
  };
}
