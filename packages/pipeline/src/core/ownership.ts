/**
 * The global ownership invariant.
 *
 * PLAN §5 describes the fix for the legacy clobbering bug as "enrichment writes
 * only fields it owns; pipeline-owned fields are reapplied after enrichment —
 * ordering enforced by a single `pipeline run` orchestrator".
 *
 * Re-applying after the fact is a patch over the symptom: it needs every source
 * to run in the right order, forever. We go one step further and make the
 * ownership sets DISJOINT, checked here and asserted by a test. If no two
 * sources can write the same field, ordering cannot cause a clobber and there
 * is nothing to re-apply.
 */

import type { Source } from "./types.ts";

export interface OwnershipConflict {
  field: string;
  sources: string[];
}

/** Every field claimed by more than one source. Empty means the invariant holds. */
export function findOwnershipConflicts(sources: readonly Source[]): OwnershipConflict[] {
  const claims = new Map<string, string[]>();
  for (const source of sources) {
    for (const field of source.owns) {
      claims.set(field, [...(claims.get(field) ?? []), source.id]);
    }
  }
  return [...claims]
    .filter(([, owners]) => owners.length > 1)
    .map(([field, owners]) => ({ field, sources: owners }))
    .sort((a, b) => a.field.localeCompare(b.field));
}

/**
 * A source may only namespace `sources`/`rankings`/`trends` under its OWN id.
 * Without this, `linguist` could declare `owns: ["rankings.languish"]` and the
 * disjointness check above would happily allow it.
 */
export function findNamespaceViolations(sources: readonly Source[]): { source: string; field: string }[] {
  const out: { source: string; field: string }[] = [];
  for (const source of sources) {
    for (const field of source.owns) {
      const dot = field.indexOf(".");
      if (dot < 0) continue;
      if (field.slice(dot + 1) !== source.id) out.push({ source: source.id, field });
    }
  }
  return out;
}

/** Throw if the ownership invariant is violated. Called before any run. */
export function assertNoOwnershipConflicts(sources: readonly Source[]): void {
  const conflicts = findOwnershipConflicts(sources);
  const violations = findNamespaceViolations(sources);
  const problems = [
    ...conflicts.map(c => `'${c.field}' is claimed by: ${c.sources.join(", ")}`),
    ...violations.map(v => `source '${v.source}' claims '${v.field}', which is another source's namespace`),
  ];
  if (problems.length) throw new Error(`Field ownership conflict:\n  ${problems.join("\n  ")}`);
}
