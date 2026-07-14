import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const HERE = dirname(fileURLToPath(import.meta.url));

/** Absolute path to the `@plangs/data` nodes directory. */
export const NODES_DIR = join(HERE, "../../data/nodes");
/** Absolute path to the `@plangs/data` assets directory. */
export const ASSETS_DIR = join(HERE, "../../data/assets");
