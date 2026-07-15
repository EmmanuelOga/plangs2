import { EDGES } from "./edges.ts";
import type { EdgeDef, NodeKind, RelResolution } from "./types.ts";

/** Edge lookup by canonical name. */
export const EDGE_BY_NAME: ReadonlyMap<string, EdgeDef> = new Map(EDGES.map(e => [e.name, e]));

/**
 * Resolve a YAML `rels.<key>` authored on a node of `kind` to its edge + role.
 * Keyed by `${kind}.${relKey}`. Every (kind, relKey) pair is unique.
 */
const REL_INDEX: ReadonlyMap<string, RelResolution> = (() => {
  const m = new Map<string, RelResolution>();
  for (const edge of EDGES) {
    m.set(`${edge.from}.${edge.fromRel}`, { edge, role: "from" });
    m.set(`${edge.to}.${edge.toRel}`, { edge, role: "to" });
  }
  return m;
})();

export function resolveRel(kind: NodeKind, relKey: string): RelResolution | undefined {
  return REL_INDEX.get(`${kind}.${relKey}`);
}

/** All valid YAML `rels` keys for a given node kind. */
export function relKeysForKind(kind: NodeKind): string[] {
  const keys: string[] = [];
  for (const edge of EDGES) {
    if (edge.from === kind) keys.push(edge.fromRel);
    if (edge.to === kind) keys.push(edge.toRel);
  }
  return [...new Set(keys)].sort();
}

/**
 * Given an authored rel on `fromKey` (a node of `kind`), return the stored
 * directed edge as `{ name, src, dst }` where src → dst is the canonical
 * direction. `authorKey` is the node the rel is authored on; `targetKey` is a
 * value from the rel's list.
 */
export function directedEdge(
  kind: NodeKind,
  relKey: string,
  authorKey: string,
  targetKey: string,
): { name: string; src: string; dst: string } | undefined {
  const res = resolveRel(kind, relKey);
  if (!res) return undefined;
  const { edge, role } = res;
  return role === "from" ? { name: edge.name, src: authorKey, dst: targetKey } : { name: edge.name, src: targetKey, dst: authorKey };
}
