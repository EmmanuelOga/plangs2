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
    const result = massageForOpenAI(generator.getSchemaForSymbol(type));
    const path = join(import.meta.dir, `schemas/${type}.json`);
    console.info("Generating schema for", type, "at", path);
    Bun.write(path, JSON.stringify(result, null, 2));
  }
}

/**
 * Since the schemas are used mainly for OpenAI structured ouptut,
 * we need to "massage" the schemas to fit OpenAI's requirements.
 * https://platform.openai.com/docs/guides/structured-outputs/how-to-use
 */
function massageForOpenAI(schema: TJS.Definition): TJS.Definition {
  schema.additionalProperties = false;

  const properties = new Map(Object.entries(schema.properties ?? {}));
  const definitions = schema.definitions ?? {};

  const mergeProps = (def: boolean | TJS.Definition) => {
    if (typeof def === "object" && "properties" in def) {
      for (const [prop, val] of Object.entries(def.properties ?? {})) {
        properties.set(prop, val);
      }
      return;
    }

    if (typeof def === "object" && "$ref" in def && def.$ref?.startsWith("#/definitions/")) {
      mergeProps(definitions[def.$ref.replace("#/definitions/", "")]);
    }
  };

  // Remove allOf and merge them into the main schema.
  for (const def of schema.allOf ?? []) mergeProps(def);

  // biome-ignore lint/performance/noDelete: it is ok here.
  delete schema.allOf;
  // biome-ignore lint/performance/noDelete: it is ok here.
  delete schema.definitions?.CommonNodeData;
  // biome-ignore lint/performance/noDelete: it is ok here.
  delete schema.definitions?.CommonEdgeData;

  schema.type = "object";
  schema.properties = Object.fromEntries(properties);
  schema.required = [...properties.keys()].sort();

  return schema;
}

await generateJsonSchemas();
