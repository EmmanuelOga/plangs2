// One-time (idempotent) migration: 495 legacy TS definition files → YAML dataset.
//
// Strategy (PLAN §4.6): run each legacy `define(g)` against a lightweight mock
// graph (no Bun, no deps), capturing authored vertex data + rels. From that we:
//   1. Build an INDEPENDENT legacy reference SerializedGraph (using the OLD
//      spec's edge mapping) — the oracle for the round-trip gate.
//   2. Emit one YAML file per node under packages/data/nodes/{kind}/{slug}.yaml
//      with v3 keys (pl+nim → pl/nim).
//
// The reference is derived purely from legacy sources, so the round-trip test in
// packages/graph (YAML → graphology → export, compared to this reference) is a
// genuine end-to-end check of the migration.

import { mkdirSync, readdirSync, rmSync, statSync, writeFileSync } from "node:fs";
import { dirname, join, relative } from "node:path";
import { fileURLToPath } from "node:url";
import YAML from "yaml";

const HERE = dirname(fileURLToPath(import.meta.url));
const REPO = join(HERE, "..");
const DEFS_DIR = join(REPO, "packages/definitions/src/definitions");
const SPEC_PATH = join(REPO, "packages/plangs/src/graph/spec.ts");
const NODES_OUT = join(REPO, "packages/data/nodes");
// The reference is a COMMITTED fixture — the permanent historical oracle for the
// round-trip gate, kept even after the legacy packages are deleted (PLAN §4.6.5).
const FIXTURES = join(REPO, "packages/graph/test/fixtures");

const cap = s => s[0].toUpperCase() + s.slice(1);
const lc = s => s[0].toLowerCase() + s.slice(1);
const legacyToNew = k => {
  const i = k.indexOf("+");
  return i < 0 ? k : `${k.slice(0, i)}/${k.slice(i + 1)}`;
};

// ── Build edge mapping from the OLD spec ────────────────────────────────────
const { PLANGS_GRAPH_SPEC } = await import(SPEC_PATH);
const ALL_KINDS = Object.keys(PLANGS_GRAPH_SPEC.vertices).sort();

/** `${kind}.${relProp}` → { edgeName, role, from, to } */
const REL_INDEX = new Map();
const EDGE_NAMES = [];
for (const e of PLANGS_GRAPH_SPEC.edges) {
  const [sKind, sRel] = e.src;
  const [dKind, dRel] = e.dst;
  const name = `${sKind}${cap(sRel)}`;
  EDGE_NAMES.push(name);
  REL_INDEX.set(`${sKind}.${sRel}`, { edgeName: name, role: "from", from: sKind, to: dKind });
  REL_INDEX.set(`${dKind}.${dRel}`, { edgeName: name, role: "to", from: sKind, to: dKind });
}
EDGE_NAMES.sort();

// ── Mock graph that records set() data and rel*.add() calls ─────────────────
function makeMock() {
  const vertices = {}; // kind -> { legacyKey -> data }
  const nodes = new Map(); // legacyKey -> { kind, rels: { relProp -> string[] } }
  const builder = (kind, key) =>
    new Proxy(
      {},
      {
        get(_t, prop) {
          if (typeof prop !== "string" || !prop.startsWith("rel")) return undefined;
          return {
            add(...keys) {
              const node = nodes.get(key);
              node.rels[prop] ??= [];
              node.rels[prop].push(...keys);
              return builder(kind, key);
            },
          };
        },
      },
    );
  const g = new Proxy(
    {},
    {
      get(_t, kind) {
        if (typeof kind !== "string") return undefined;
        return {
          set(key, data) {
            vertices[kind] ??= {};
            vertices[kind][key] = data ?? {};
            if (!nodes.has(key)) nodes.set(key, { kind, rels: {} });
            else nodes.get(key).kind = kind;
            return builder(kind, key);
          },
        };
      },
    },
  );
  return { g, vertices, nodes };
}

// ── Discover + run all definitions (sorted, matching legacy loader) ─────────
function walk(dir) {
  const out = [];
  for (const entry of readdirSync(dir)) {
    const p = join(dir, entry);
    if (statSync(p).isDirectory()) out.push(...walk(p));
    else if (entry.endsWith(".ts")) out.push(p);
  }
  return out;
}

const files = walk(DEFS_DIR).sort((a, b) => relative(DEFS_DIR, a).localeCompare(relative(DEFS_DIR, b)));
const { g, vertices, nodes } = makeMock();
let ran = 0;
for (const file of files) {
  const mod = await import(file);
  if (typeof mod.define === "function") {
    mod.define(g);
    ran++;
  }
}
console.log(`ran ${ran} define() files; captured ${nodes.size} nodes`);

// ── Dedup rel targets preserving first-occurrence order (legacy Set semantics)
const uniq = arr => [...new Set(arr)];

// ── Build INDEPENDENT legacy reference SerializedGraph ───────────────────────
function buildReference() {
  const refVertices = {};
  for (const k of ALL_KINDS) refVertices[k] = vertices[k] ?? {};

  // edgeName -> Map<src, Set<dst>>
  const fwd = new Map(EDGE_NAMES.map(n => [n, new Map()]));
  for (const [key, node] of nodes) {
    for (const [relProp, targets] of Object.entries(node.rels)) {
      const res = REL_INDEX.get(`${node.kind}.${relProp}`);
      if (!res) throw new Error(`Unresolvable rel ${node.kind}.${relProp} on ${key}`);
      for (const target of uniq(targets)) {
        const [src, dst] = res.role === "from" ? [key, target] : [target, key];
        const m = fwd.get(res.edgeName);
        let set = m.get(src);
        if (!set) {
          set = new Set();
          m.set(src, set);
        }
        set.add(dst);
      }
    }
  }
  const refEdges = {};
  for (const name of EDGE_NAMES) {
    const obj = {};
    for (const [src, dsts] of fwd.get(name)) obj[src] = [...dsts].sort();
    refEdges[name] = obj;
  }
  return { vertices: refVertices, edges: refEdges };
}

const reference = buildReference();
mkdirSync(FIXTURES, { recursive: true });
writeFileSync(join(FIXTURES, "plangs.legacy.json"), `${JSON.stringify(reference, null, 2)}\n`);

// ── Emit YAML files ─────────────────────────────────────────────────────────
// Preferred data field order for stable, readable diffs; rest alphabetical.
const FIELD_ORDER = ["name", "shortDesc", "description", "created", "keywords"];
function orderData(data) {
  const keys = Object.keys(data);
  const head = FIELD_ORDER.filter(k => keys.includes(k));
  const tail = keys.filter(k => !FIELD_ORDER.includes(k)).sort();
  const out = {};
  for (const k of [...head, ...tail]) out[k] = data[k];
  return out;
}

rmSync(NODES_OUT, { recursive: true, force: true });
let written = 0;
for (const [key, node] of nodes) {
  const data = vertices[node.kind]?.[key];
  if (!data) continue; // referenced-only (dangling) — no file, lives only in edges
  const slug = legacyToNew(key).split("/").slice(1).join("/");
  const doc = orderData(data);
  const rels = {};
  for (const relProp of Object.keys(node.rels).sort()) {
    const yamlRel = lc(relProp.slice(3));
    rels[yamlRel] = uniq(node.rels[relProp]).map(legacyToNew).sort();
  }
  if (Object.keys(rels).length) doc.rels = rels;

  const dir = join(NODES_OUT, node.kind);
  mkdirSync(dir, { recursive: true });
  writeFileSync(join(dir, `${slug}.yaml`), YAML.stringify(doc, { lineWidth: 0 }));
  written++;
}
console.log(`wrote ${written} YAML node files to packages/data/nodes/`);
console.log(`wrote reference to ${join(FIXTURES, "plangs.legacy.json")}`);
