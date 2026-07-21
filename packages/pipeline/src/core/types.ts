import type { NodeKind, RelTarget } from "@plangs/schema";

/** A node YAML file loaded off disk. `data` excludes `rels` (which sources never touch). */
export interface NodeDoc {
  /** v3 node key, e.g. `pl/nim`. */
  key: string;
  kind: NodeKind;
  slug: string;
  /** Absolute path of the YAML file. */
  path: string;
  /** Flat node data (everything except `rels`). */
  data: Record<string, unknown>;
  /** The authored relation map — read-only for importers. Targets may be D8 annotated refs. */
  rels: Record<string, RelTarget[]>;
}

/** Fetches a remote resource as text. Injected so tests never hit the network. */
export type Fetcher = (url: string) => Promise<string>;

/** How a remote record was tied to a node. Recorded on every change. */
export type MatchMethod =
  /** Matched by an id already recorded under the node's `sources` map. Best. */
  | "source-id"
  /** Matched by an exact, deterministic identifier (name/alias lookup table). */
  | "exact"
  /** Matched heuristically. NEVER written — review report only. */
  | "fuzzy";

/** One field written by a source, with its before/after values. */
export interface FieldChange {
  key: string;
  field: string;
  from: unknown;
  to: unknown;
}

/** Something a human should look at. Never written to YAML. */
export interface ReviewItem {
  key: string;
  /** What the source wants to say, e.g. `paradigm-suggestion` or `fuzzy-match`. */
  kind: string;
  message: string;
  data?: Record<string, unknown>;
}

/** How a node was matched, for the provenance report. */
export interface MatchRecord {
  key: string;
  method: MatchMethod;
  /** The remote record's identifier (linguist name, wikidata QID, …). */
  remoteId: string;
}

/** The per-run provenance report (PLAN §4.5). Written to `reports/` + stdout. */
export interface SourceReport {
  source: string;
  runId: string;
  startedAt: string;
  finishedAt: string;
  dryRun: boolean;
  /** Where the facts came from — URLs, local clone paths, fixture dirs. */
  origins: string[];
  owns: string[];
  matches: MatchRecord[];
  changes: FieldChange[];
  /** Node files actually rewritten (empty on a dry run or an idempotent re-run). */
  written: string[];
  review: ReviewItem[];
  /**
   * Ids that could not be paired. Importers are node-driven (see `core/match`),
   * so in practice these are node keys the source found no remote record for —
   * the actionable direction, since the remote catalogs are far larger than our
   * curated node set.
   */
  unmatched: string[];
  errors: string[];
}

/** What a source is handed when it runs. */
export interface RunContext {
  /** Every node in the dataset, loaded once. */
  readonly nodes: readonly NodeDoc[];
  nodesOfKind(kind: NodeKind): readonly NodeDoc[];
  node(key: string): NodeDoc | undefined;

  /**
   * Stage a patch for `key`. Throws if any field falls outside the source's
   * `owns` list — field ownership is enforced here, not by convention.
   * Dotted paths (`rankings.languish`) address the namespaced maps.
   */
  patch(key: string, data: Record<string, unknown>): void;

  /** Record how a node was matched (drives the report; `fuzzy` never patches). */
  match(record: MatchRecord): void;

  /** Flag something for a human. Never reaches YAML. */
  review(item: ReviewItem): void;

  /** Note an id (usually a node key) that could not be paired with a record. */
  unmatched(id: string): void;

  /** Note where a fact came from (URL / path). Surfaces in the report. */
  origin(origin: string): void;

  /** Fetch text. Backed by fixtures in tests. */
  fetch: Fetcher;

  /** Source-specific options (`--opt.key=value` on the CLI, or env). */
  readonly options: Readonly<Record<string, string>>;

  readonly dryRun: boolean;
}

/** An importer. `run` reads remote data and stages patches via `ctx`. */
export interface Source {
  /** Stable id. Also the namespace this source owns in `sources`/`rankings`/`trends`. */
  id: string;
  /** One-line description for `pipeline list`. */
  description: string;
  /**
   * The node fields this source is allowed to write. Plain names for top-level
   * fields (`githubColor`); dotted for namespaced maps (`rankings.languish`).
   * The patcher rejects anything else, so enrichment can never clobber
   * pipeline-owned data (PLAN §5).
   */
  owns: string[];
  run(ctx: RunContext): Promise<void>;
}
