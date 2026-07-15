/** Loading and writing the node YAML dataset with canonical formatting. */

import { readdirSync, readFileSync, writeFileSync } from "node:fs";
import { join, sep } from "node:path";
import { type NodeKind, prefixOfKind } from "@plangs/schema";
import { formatNodeYaml, parseNodeYaml } from "./fields.ts";
import type { NodeDoc } from "./types.ts";

/** Recursively list `{kind}/{slug}.yaml` files under a nodes directory. */
function listNodeFiles(nodesDir: string): { kind: string; slug: string; path: string }[] {
  const out: { kind: string; slug: string; path: string }[] = [];
  for (const rel of readdirSync(nodesDir, { recursive: true }) as string[]) {
    if (!rel.endsWith(".yaml")) continue;
    const parts = rel.split(sep);
    const kind = parts[0];
    const base = parts[parts.length - 1];
    if (parts.length < 2 || !kind || !base) continue;
    out.push({ kind, slug: base.replace(/\.yaml$/, ""), path: join(nodesDir, rel) });
  }
  return out;
}

/** Load every node YAML file under `nodesDir`, splitting `rels` off the flat data. */
export function loadNodes(nodesDir: string): NodeDoc[] {
  const docs: NodeDoc[] = [];
  for (const { kind: kindDir, slug, path } of listNodeFiles(nodesDir)) {
    const kind = kindDir as NodeKind;
    const doc = parseNodeYaml(readFileSync(path, "utf8"));
    const { rels, ...data } = doc as { rels?: Record<string, string[]> } & Record<string, unknown>;
    docs.push({ key: `${prefixOfKind(kind)}/${slug}`, kind, slug, path, data, rels: rels ?? {} });
  }
  return docs.sort((a, b) => a.key.localeCompare(b.key));
}

/** Serialize a `NodeDoc` back to canonical YAML text (data + rels recombined). */
export function serializeNode(doc: NodeDoc): string {
  const out: Record<string, unknown> = { ...doc.data };
  if (Object.keys(doc.rels).length) out.rels = doc.rels;
  return formatNodeYaml(out);
}

/**
 * Write `doc` to its file only if the canonical text differs from what is
 * already on disk. Returns true when the file actually changed — this is what
 * makes a re-run a true zero-diff no-op.
 */
export function writeNodeIfChanged(doc: NodeDoc): boolean {
  const next = serializeNode(doc);
  let current: string | undefined;
  try {
    current = readFileSync(doc.path, "utf8");
  } catch {
    current = undefined;
  }
  if (current === next) return false;
  writeFileSync(doc.path, next);
  return true;
}
