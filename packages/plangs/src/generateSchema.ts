import { join } from "node:path";

import * as TJS from "typescript-json-schema";

async function generateJsonSchemas() {
  const program = TJS.getProgramFromFiles(
    [join(import.meta.dir, "index.ts")],
    JSON.parse(await Bun.file(join(import.meta.dir, "../tsconfig.json")).text()),
    join(import.meta.dir, ".."),
  );

  const generator = TJS.buildGenerator(program, { ignoreErrors: true, required: true, strictNullChecks: true });
  if (!generator) throw new Error("Failed to build generator.");

  const symbols = generator.getUserSymbols();

  const types = ["N", "E", "CommonNodeData", "CommonEdgeData"].concat(
    symbols.filter(s => (s.startsWith("N") || s.startsWith("E")) && s.endsWith("Data")),
  );

  for (const type of types) {
    const result = generator.getSchemaForSymbol(type);
    result.additionalProperties = false;
    const path = join(import.meta.dir, `schemas/${type}.json`);
    console.info("Generating schema for", type, "at", path);
    Bun.write(path, JSON.stringify(result, null, 2));
  }
}

await generateJsonSchemas();
