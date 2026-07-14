/** All node kinds in the graph. */
export type NodeKind =
  | "app"
  | "author"
  | "bundle"
  | "community"
  | "learning"
  | "library"
  | "license"
  | "paradigm"
  | "plang"
  | "platform"
  | "post"
  | "subsystem"
  | "tag"
  | "tool"
  | "typeSystem";

/**
 * Which side of an edge "owns" it for authoring/serialization purposes.
 * Ported verbatim from the legacy spec; retained for provenance but the graph
 * stores every edge exactly once (forward = from → to) regardless of `pref`.
 */
export type EdgePref = "src" | "dst" | "none";

/** A canonical directed edge kind. `from → to` is the stored direction. */
export interface EdgeDef {
  /** Stable edge id, e.g. `plangRelParadigms` (kept for dataset back-compat). */
  name: string;
  /** Source node kind (stored edge direction is from → to). */
  from: NodeKind;
  /** Target node kind. */
  to: NodeKind;
  /** YAML `rels` key used when authoring this edge on the `from` node. */
  fromRel: string;
  /** YAML `rels` key used when authoring this edge on the `to` node (inverse). */
  toRel: string;
  /** Human label for the direct (from → to) relationship. */
  fromLabel: string;
  /** Human label for the inverse (to → from) relationship. */
  toLabel: string;
  /** Legacy authoring preference. */
  pref: EdgePref;
}

/** Resolution of a YAML `rels` key on a node of a given kind. */
export interface RelResolution {
  edge: EdgeDef;
  /** "from" → author node is the edge source; "to" → author node is target. */
  role: "from" | "to";
}
