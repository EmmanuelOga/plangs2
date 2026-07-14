/**
 * Declarative inference / materialization rules (PLAN §4.4).
 *
 * The materialization pass in `@plangs/graph` runs these after loading and
 * before export. Materialized edges are marked `inferred: true` and are NEVER
 * written back to YAML. Some inferences are explicitly FORBIDDEN and encoded as
 * negative tests (see `packages/graph`): e.g. Plang → App → License must NOT
 * propagate a license to the plang.
 */
export type InferenceRule =
  | {
      kind: "transitive";
      /** Edge name to close over (e.g. `plangRelInfluencedBy`). */
      edge: string;
      /** New materialized edge name. */
      as: string;
      /** Bound to avoid pathological cycles. */
      maxDepth: number;
    }
  | {
      kind: "hoist";
      /** Ordered edge names to traverse, e.g. [`bundleRelTools`, `plangRelTools`]. */
      path: string[];
      /** New materialized edge name. */
      as: string;
    }
  | {
      kind: "derive";
      /** Boolean node property to set on nodes of `on` kind. */
      prop: string;
      on: string;
      /** Materialized edge whose presence (size > 0) sets the prop true. */
      whenEdge: string;
    };

export const INFERENCE_RULES: InferenceRule[] = [
  // Transitive influence, materialized as a distinct edge (bounded depth).
  { kind: "transitive", edge: "plangRelInfluencedBy", as: "plangRelInfluencedByTransitive", maxDepth: 5 },
  // Bundle → Tool → Plang ⇒ Bundle supports Plang (legacy materialize() behavior).
  { kind: "hoist", path: ["bundleRelTools", "plangRelTools"], as: "bundleRelPlangs" },
  // A language that compiles to another is a transpiler.
  { kind: "derive", prop: "isTranspiler", on: "plang", whenEdge: "plangRelCompilesTo" },
];

/**
 * Forbidden inferences — documented so the negative tests stay honest.
 * Format: human-readable path that must NOT be materialized.
 */
export const FORBIDDEN_INFERENCES: string[] = ["plang → app → license (license does not propagate to the plang)"];
