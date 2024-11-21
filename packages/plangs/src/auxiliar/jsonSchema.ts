/**
 * This generates JSON schemas for the types in the schema.ts file that match {@link SYMBOLS}.
 *
 * Would be nice to place this file in the ai package,
 * but for some reason it is not able to pickup the types if I do.
 */

import { join } from "node:path";

import * as TJS from "typescript-json-schema";

/*** TJS will parse the TS file and extract these symbols, in this case the name of the Types we want to extract. */
const MAIN_TYPE = "NPlangAI";

async function generateJsonSchemas() {
  const program = TJS.getProgramFromFiles(
    [join(import.meta.dir, "schema.ts")],
    JSON.parse(await Bun.file(join(import.meta.dir, "../../tsconfig.json")).text()),
    join(import.meta.dir, "../.."),
  );

  // ignoreErrors: if we don't TJS will fail for any error, even in the std Bun types.
  const generator = TJS.buildGenerator(program, { ignoreErrors: true, required: true, strictNullChecks: false });
  if (!generator) throw new Error("Failed to build generator.");

  const schema = generator.getSchemaForSymbol(MAIN_TYPE);
  const path = join(import.meta.dir, `schemas/${MAIN_TYPE}.json`);
  console.info("Generating schema for", MAIN_TYPE, "at", path, "\n");

  Bun.write(path, JSON.stringify({ name: MAIN_TYPE, ...schema }, null, 2));
}

await generateJsonSchemas();

/**
 * Since the schemas are used mainly for OpenAI structured ouptut,
 * we need to "massage" the schemas to fit OpenAI's requirements.
 */
// https://platform.openai.com/docs/guides/structured-outputs#additionalproperties-false-must-always-be-set-in-objects
// TODO: we need to add additionalProperties everywhere there's a "required" field.
// TODO: required should require EVERY property.
// TODO: remove "description" from $refs.
// For now I'm just manually touching the generated schema.
console.log("Make sure to manually review the generated schemas, it may require further tunning.\n");
console.log("* https://platform.openai.com/docs/guides/structured-outputs/how-to-use");
console.log("* https://platform.openai.com/docs/guides/structured-outputs#supported-schemas");
