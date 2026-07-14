// Copy the dataset logos into the site's public dir so they are served at
// /images/vertex/{kind}/{slug}.webp. Run before dev/build.
import { cpSync, existsSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const HERE = dirname(fileURLToPath(import.meta.url));
const SRC = join(HERE, "../../../packages/data/assets");
const DST = join(HERE, "../public/images/vertex");

if (!existsSync(SRC)) {
  console.warn(`sync-assets: no assets at ${SRC}`);
  process.exit(0);
}
mkdirSync(dirname(DST), { recursive: true });
cpSync(SRC, DST, { recursive: true });
console.log(`sync-assets: copied ${SRC} → ${DST}`);
