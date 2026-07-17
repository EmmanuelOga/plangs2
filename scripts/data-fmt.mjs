// The canonical YAML formatter for the dataset (`pnpm data:fmt`).
//
// Rewrites every node file under packages/data/nodes/ in canonical field order
// with stable formatting, so agent- and human-authored edits always produce
// minimal diffs and CI can assert the dataset is formatted (PLAN §4.1).
//
// It is IDEMPOTENT: running it twice is a guaranteed zero diff. The ordering
// and serialization rules live in @plangs/pipeline (imported directly below —
// Node strips the types), so the formatter and the pipeline patcher can never
// disagree about what canonical means.
//
// Usage:
//   node scripts/data-fmt.mjs           # rewrite in place
//   node scripts/data-fmt.mjs --check   # exit 1 if anything is unformatted

import { readdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

import { formatText } from "@plangs/pipeline/fields";

const HERE = dirname(fileURLToPath(import.meta.url));
const NODES_DIR = join(HERE, "../packages/data/nodes");

const check = process.argv.includes("--check");

const files = (readdirSync(NODES_DIR, { recursive: true }) ?? []).filter(rel => rel.endsWith(".yaml")).sort();

const unformatted = [];
let changed = 0;

for (const rel of files) {
  const path = join(NODES_DIR, rel);
  const before = readFileSync(path, "utf8");
  const after = formatText(before);
  if (before === after) continue;
  if (check) {
    unformatted.push(rel);
    continue;
  }
  writeFileSync(path, after);
  changed++;
}

if (check) {
  if (unformatted.length) {
    console.error(`${unformatted.length} of ${files.length} node file(s) are not canonically formatted:`);
    for (const rel of unformatted.slice(0, 25)) console.error(`  ${rel}`);
    if (unformatted.length > 25) console.error(`  ... ${unformatted.length - 25} more`);
    console.error("\nRun: pnpm data:fmt");
    process.exit(1);
  }
  console.log(`${files.length} node file(s) are canonically formatted.`);
} else {
  console.log(`formatted ${changed} of ${files.length} node file(s).`);
}
