// This is a replacement for ESBuild command line mode, such that we can use approximately the same
// options in prod and env.

import { join } from "node:path";
import * as esbuild from "esbuild";
import { appESBuildOptions } from "./esbuilder";

const ROOT = join(import.meta.dir, "../../..");

// Create an ESBuild context with the options for the dev environment.
const options = appESBuildOptions("dev", "plangs.json", join(ROOT, "packages/server/static/app.js"));
const context = await esbuild.context(options);

const cleanup = async () => {
  await context.dispose();
  process.exit(0);
};
process.on("SIGINT", cleanup); // Ctrl+C
process.on("SIGTERM", cleanup); // Kill

console.log("Watch mode started - watching for changes...");
context.watch();
