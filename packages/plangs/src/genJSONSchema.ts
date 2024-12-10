/**
 * This generates JSON schemas for some types in the schema.ts file.
 *
 * Would be nice to place this file in the ai package,
 * but for some reason it is not able to pickup the types if I do.
 */

import { join } from "node:path";

import * as TJS from "typescript-json-schema";

/*** TJS will parse the TS file and extract these symbols, in this case the name of the Types we want to extract. */
// const MAIN_TYPE = "VertexBaseData";
const MAIN_TYPE = "AIVPlang";

async function generateJsonSchemas() {
  const program = TJS.getProgramFromFiles(
    [join(import.meta.dir, "graph/vertex_data_schemas.ts")],
    JSON.parse(await Bun.file(join(import.meta.dir, "../tsconfig.json")).text()),
    join(import.meta.dir, ".."),
  );

  // ignoreErrors: if we don't TJS will fail for any error, even in the std Bun types.
  const generator = TJS.buildGenerator(program, { ignoreErrors: true, required: true, strictNullChecks: false });
  if (!generator) throw new Error("Failed to build generator.");

  const schema: TJS.Definition = generator.getSchemaForSymbol(MAIN_TYPE);
  const path = join(import.meta.dir, `schema/${MAIN_TYPE}.json`);
  console.info("Generating schema for", MAIN_TYPE, "at", path, "\n");

  Bun.write(path, JSON.stringify({ name: MAIN_TYPE, ...massageDefinition(schema) }, null, 2));
}

// A def name we want to change to a more readable format.
const PLANG_DATA_REF = "Partial<VPlangBaseData&VertexBaseData&GithubRepo>";

/** Recursively adjust definitions for OpenAI constraints. */
function massageDefinition(schema: TJS.Definition): TJS.Definition {
  if (schema.properties) {
    if (schema.properties.images) delete schema.properties.images;

    for (const prop of Object.values(schema.properties)) {
      if (typeof prop === "boolean") continue;

      if (!("$ref" in prop)) continue;

      // OpenAI doesn't like descriptions on ref properties.
      delete prop.description;

      if (prop.$ref === "#/definitions/StrDate") {
        prop.type = "string";
        delete prop.$ref;
      } else if (prop.$ref?.endsWith(PLANG_DATA_REF)) {
        prop.$ref = "#/definitions/PlangData";
      }
    }

    schema.additionalProperties = false;
    schema.required = Object.keys(schema.properties);
  }

  if (!schema.definitions) return schema;

  delete schema.definitions.StrDate;
  delete schema.definitions.Image;

  if (PLANG_DATA_REF in schema.definitions) {
    schema.definitions.PlangData = schema.definitions[PLANG_DATA_REF];
    delete schema.definitions[PLANG_DATA_REF];
  }

  for (const def of Object.values(schema.definitions)) {
    if (typeof def === "boolean") continue;
    massageDefinition(def);

    if (!def.allOf) continue;
    for (const nested of def.allOf) {
      if (typeof nested !== "boolean") massageDefinition(nested);
    }
  }

  return schema;
}

await generateJsonSchemas();

/**
 * Since the schemas are used mainly for OpenAI structured ouptut,
 * we need to "massage" the schemas to fit OpenAI's requirements.
 */
// https://platform.openai.com/docs/guides/structured-outputs#additionalproperties-false-must-always-be-set-in-objects
console.log("Make sure to manually review the generated schemas, it may require further tunning.\n");
console.log("* https://platform.openai.com/docs/guides/structured-outputs/how-to-use");
console.log("* https://platform.openai.com/docs/guides/structured-outputs#supported-schemas");
