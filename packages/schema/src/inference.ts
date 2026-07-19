import type { NodeKind } from "./types.ts";
import type { NodeDataOf } from "./zod.ts";

/**
 * Declarative inference / materialization rules (PLAN §4.4).
 *
 * The materialization pass in `@plangs/graph` runs these after loading and
 * before export. Materialized edges are marked `inferred: true` and are NEVER
 * written back to YAML. Some inferences are explicitly FORBIDDEN: they are
 * declared in `FORBIDDEN_INFERENCES` below and enforced by negative tests in
 * `packages/graph/src/inference.test.ts`, which iterate that list.
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
 * Inferences that must NEVER be materialized.
 *
 * This used to be an array of prose strings — dead by grep, load-bearing only
 * as documentation, which is exactly the state where a rule quietly stops being
 * true. It is now DECLARATIVE: `from`/`to` name the two kinds an inferred edge
 * must never connect, and `packages/graph`'s negative test iterates this list,
 * against both a purpose-built graph and the real dataset. Adding an entry adds
 * a test; the prose survives as `why`, next to what enforces it.
 */
export interface ForbiddenInference {
  /** Human-readable path, e.g. `plang → app → license`. */
  path: string;
  /** Kind an inferred edge must not start from … */
  from: NodeKind;
  /** … when it would land on this kind. */
  to: NodeKind;
  /** Why the propagation would be wrong. */
  why: string;
}

export const FORBIDDEN_INFERENCES: ForbiddenInference[] = [
  {
    // Edge DIRECTION matters here, and it is the opposite of how the rule
    // reads in prose: "a plang has a license" is stored as `licenseRelPlangs`,
    // license → plang. Declaring this the prose way round (from plang, to
    // license) would name a pair no rule could ever produce — a negative test
    // that can never fail, which is worse than no test.
    path: "license → app → plang (an app's license must not reach the language it is written in)",
    from: "license",
    to: "plang",
    why: "An app's license is the app's, not the language's. Propagating it would relicense every language that happens to have a permissively-licensed app written in it.",
  },
];
