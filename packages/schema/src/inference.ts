import type { NodeKind } from "./types.ts";
import type { NodeDataOf } from "./zod.ts";

/**
 * Declarative inference / materialization rules (PLAN §4.4).
 *
 * The materialization pass in `@plangs/graph` runs these after loading and
 * before export. Materialized edges are marked `inferred: true` and are NEVER
 * written back to YAML. Some inferences are explicitly FORBIDDEN and encoded as
 * negative tests (see `packages/graph`): e.g. Plang → App → License must NOT
 * propagate a license to the plang.
 */
/** The boolean-valued fields of a kind's schema — the only ones `derive` may set. */
type BooleanPropsOf<K extends NodeKind> = {
  [P in keyof NodeDataOf<K>]-?: boolean extends Exclude<NodeDataOf<K>[P], undefined> ? P : never;
}[keyof NodeDataOf<K>];

/**
 * A `derive` rule, with `prop` tied to `on`.
 *
 * Written as a mapped type over NodeKind rather than `{ on: NodeKind; prop:
 * string }` so the two fields CORRELATE: `on: "plang"` only accepts a boolean
 * field that plang actually has. Before this, `prop` was a bare `string` — a
 * typo (or a field that no schema declares) compiled fine and simply set a
 * property nothing ever read.
 */
export type DeriveRule = {
  [K in NodeKind]: {
    kind: "derive";
    /** Boolean node property to set on nodes of `on` kind. */
    prop: BooleanPropsOf<K>;
    on: K;
    /** Materialized edge whose presence (size > 0) sets the prop true. */
    whenEdge: string;
  };
}[NodeKind];

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
  | DeriveRule;

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
