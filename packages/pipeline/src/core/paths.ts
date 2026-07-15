import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const HERE = dirname(fileURLToPath(import.meta.url));

/**
 * Absolute path to the `@plangs/data` nodes directory.
 *
 * Deliberately duplicated from `@plangs/graph`'s `NODES_DIR` rather than
 * imported: the pipeline only ever reads and writes YAML files, so depending on
 * `@plangs/graph` would drag graphology into every importer for one constant.
 * (`@plangs/graph`'s barrel also uses extension-less relative imports, which
 * bundlers and Vitest resolve but plain `node` does not — and the CLI runs
 * under plain `node`.)
 *
 * `packages/pipeline/src/core` -> `packages/data/nodes`.
 */
export const NODES_DIR = join(HERE, "../../../data/nodes");

/** Absolute path to the `@plangs/data` assets directory. */
export const ASSETS_DIR = join(HERE, "../../../data/assets");
