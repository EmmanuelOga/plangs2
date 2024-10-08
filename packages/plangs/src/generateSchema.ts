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
 * Strict generates schemas that comply with OpenAI strict mode:
 * removes all patterns from schemas and makes everything required.
 * If not using strict mode, the generated schemas are more permissive
 * and closer to real life use.
 */
const STRICT = false;

/**
 * Since the schemas are used mainly for OpenAI structured ouptut,
 * we need to "massage" the schemas to fit OpenAI's requirements.
 * https://platform.openai.com/docs/guides/structured-outputs/how-to-use
 */
function massageForOpenAI(schema: TJS.Definition): TJS.Definition {
  const properties = new Map(Object.entries(schema.properties ?? {}));
  const definitions = schema.definitions ?? {};

  // Clean up a property definition to comply with OpenAI.
  const massageProp = (def: TJS.DefinitionOrBoolean): TJS.DefinitionOrBoolean => {
    if (STRICT) {
      // "pattern" is not supported by OpenAI.
      if (typeof def === "object" && "pattern" in def) {
        // biome-ignore lint/performance/noDelete: it is ok here.
        delete def.pattern;
      }
    }
    return def;
  };

  const mergeProps = (def: TJS.Definition) => {
    if (typeof def === "object" && "properties" in def) {
      for (const [prop, val] of Object.entries(def.properties ?? {})) {
        properties.set(prop, massageProp(val));
      }
      return;
    }

    if (typeof def === "object" && "$ref" in def && def.$ref?.startsWith("#/definitions/")) {
      const referred = definitions[def.$ref.replace("#/definitions/", "")];
      if (typeof referred === "object") mergeProps(referred);
    }
  };

  // Remove allOf and merge them into the main schema.
  for (const def of schema.allOf ?? []) if (typeof def === "object") mergeProps(def);

  // biome-ignore lint/performance/noDelete: it is ok here.
  delete schema.allOf;
  // biome-ignore lint/performance/noDelete: it is ok here.
  delete schema.definitions?.CommonNodeData;
  // biome-ignore lint/performance/noDelete: it is ok here.
  delete schema.definitions?.CommonEdgeData;

  schema.type = "object";
  schema.properties = Object.fromEntries(properties);

  // Technically we should not make everything required unless STRICT is true,
  // but for now it is ok.
  schema.required = [...properties.keys()].sort();

  // Make all properties required, even inside definitions.
  if (STRICT) {
    schema.additionalProperties = false;
    for (const val of Object.values(definitions)) {
      if (typeof val === "object" && val.type === "object") {
        val.additionalProperties = false;
        val.required = Object.keys(val.properties ?? {}).sort();
        for (const def of Object.values(val.properties ?? {})) massageProp(def);
      }
    }
  }

  return schema;
}

await generateJsonSchemas();
