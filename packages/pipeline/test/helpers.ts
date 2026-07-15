/**
 * Test helpers. Tests live beside the code in `src/**` (so the root vitest
 * include glob picks them up); this module holds the shared scaffolding.
 *
 * Everything here is offline by construction: `fixtureFetcher` throws on any
 * URL it has not recorded, so a test that accidentally reaches for the network
 * fails loudly instead of silently depending on it.
 */

import { mkdirSync, mkdtempSync, readdirSync, readFileSync, rmSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { dirname, join, sep } from "node:path";
import { fileURLToPath } from "node:url";
import { kindOfPrefix } from "@plangs/schema";
import { formatNodeYaml } from "../src/core/fields.ts";
import type { Fetcher } from "../src/core/types.ts";

const HERE = dirname(fileURLToPath(import.meta.url));

export const FIXTURES = join(HERE, "fixtures");

export function fixture(...parts: string[]): string {
  return readFileSync(join(FIXTURES, ...parts), "utf8");
}

export function fixturePath(...parts: string[]): string {
  return join(FIXTURES, ...parts);
}

/**
 * A fetcher backed by recorded fixtures. Any un-recorded URL throws — tests
 * must never hit the network.
 */
export function fixtureFetcher(map: Record<string, string>): Fetcher {
  return async url => {
    const body = map[url];
    if (body === undefined) {
      throw new Error(`No fixture recorded for '${url}'. Known: ${Object.keys(map).join(", ") || "(none)"}`);
    }
    return body;
  };
}

/** A fetcher that fails on every call — proves a code path stays offline. */
export const offlineFetcher: Fetcher = async url => {
  throw new Error(`Network access attempted in a test: ${url}`);
};

/**
 * Build a throwaway nodes dir from `{ "pl/nim": {...} }` docs. Returns its path.
 * Prefixes resolve through `@plangs/schema`'s own `kindOfPrefix`, so every kind
 * works and a schema rename can't leave this helper quietly wrong.
 */
export function makeNodesDir(nodes: Record<string, Record<string, unknown>>): string {
  const dir = mkdtempSync(join(tmpdir(), "plangs-pipeline-"));
  for (const [key, doc] of Object.entries(nodes)) {
    const [prefix, ...rest] = key.split("/");
    const kind = kindOfPrefix(prefix ?? "");
    if (!kind) throw new Error(`Unknown key prefix in '${key}'`);
    const kindDir = join(dir, kind);
    mkdirSync(kindDir, { recursive: true });
    writeFileSync(join(kindDir, `${rest.join("/")}.yaml`), formatNodeYaml(doc));
  }
  return dir;
}

export function removeDir(dir: string): void {
  rmSync(dir, { recursive: true, force: true });
}

/** Snapshot every YAML file under a dir as `relPath -> contents`. */
export function snapshotDir(dir: string): Record<string, string> {
  const out: Record<string, string> = {};
  for (const rel of readdirSync(dir, { recursive: true }) as string[]) {
    if (!rel.endsWith(".yaml")) continue;
    out[rel.split(sep).join("/")] = readFileSync(join(dir, rel), "utf8");
  }
  return out;
}
