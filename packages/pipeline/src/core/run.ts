/**
 * The `pipeline run` orchestrator.
 *
 * Responsibilities (PLAN §5):
 *  - load the dataset once and hand sources a read-only view;
 *  - enforce field ownership + canonical ordering on every write, so no source
 *    (importer OR AI enrichment) can clobber another's fields;
 *  - only touch files whose canonical text actually changed, which is what
 *    makes a second run a guaranteed zero-diff no-op;
 *  - emit a provenance report per run.
 */

import type { NodeKind } from "@plangs/schema";
import { applyPatch, parseOwns } from "./patch.ts";
import { newRunId, REPORTS_DIR, summarize, writeReport } from "./report.ts";
import { loadNodes, writeNodeIfChanged } from "./store.ts";
import type { Fetcher, FieldChange, MatchRecord, NodeDoc, ReviewItem, RunContext, Source, SourceReport } from "./types.ts";

/** Default fetcher. Tests inject a fixture-backed one instead — never the network. */
export const httpFetcher: Fetcher = async url => {
  const res = await fetch(url, { headers: { "user-agent": "plangs-pipeline (+https://plangs.page)" } });
  if (!res.ok) throw new Error(`GET ${url} -> ${res.status} ${res.statusText}`);
  return res.text();
};

export interface RunOptions {
  nodesDir: string;
  dryRun?: boolean;
  fetch?: Fetcher;
  /** Source-specific options (from `--opt.key=value`). */
  options?: Record<string, string>;
  reportsDir?: string;
  /** Skip writing the report file (tests). */
  noReport?: boolean;
  now?: Date;
}

/**
 * Run one source end-to-end. Returns the report; the caller decides what to do
 * with it. Never throws for source-level failures — they land in `report.errors`.
 */
export async function runSource(source: Source, opts: RunOptions): Promise<SourceReport> {
  // Fail fast on a malformed ownership declaration rather than mid-run.
  parseOwns(source.owns);

  const startedAt = new Date().toISOString();
  const runId = newRunId(opts.now);
  const dryRun = opts.dryRun ?? false;

  const nodes = loadNodes(opts.nodesDir);
  const byKey = new Map(nodes.map(n => [n.key, n]));
  const byKind = new Map<NodeKind, NodeDoc[]>();
  for (const n of nodes) byKind.set(n.kind, [...(byKind.get(n.kind) ?? []), n]);

  const staged = new Map<string, Record<string, unknown>>();
  const matches: MatchRecord[] = [];
  const review: ReviewItem[] = [];
  const unmatched: string[] = [];
  const origins: string[] = [];
  const errors: string[] = [];

  const ctx: RunContext = {
    nodes,
    nodesOfKind: kind => byKind.get(kind) ?? [],
    node: key => byKey.get(key),
    patch(key, data) {
      if (!byKey.has(key)) throw new Error(`Source '${source.id}' patched unknown node '${key}'`);
      staged.set(key, { ...(staged.get(key) ?? {}), ...data });
    },
    match: record => void matches.push(record),
    review: item => void review.push(item),
    unmatched: remoteId => void unmatched.push(remoteId),
    origin: origin => void (origins.includes(origin) || origins.push(origin)),
    fetch: opts.fetch ?? httpFetcher,
    options: opts.options ?? {},
    dryRun,
  };

  try {
    await source.run(ctx);
  } catch (err) {
    errors.push(`${err instanceof Error ? err.message : String(err)}`);
  }

  // Apply staged patches. `applyPatch` re-checks ownership: a source cannot
  // sneak a field past the orchestrator even if it built the patch elsewhere.
  const changes: FieldChange[] = [];
  const written: string[] = [];
  for (const [key, patch] of staged) {
    const doc = byKey.get(key);
    if (!doc) continue;
    try {
      const applied = applyPatch(source.id, source.owns, doc, patch);
      if (!applied.length) continue; // idempotent no-op
      changes.push(...applied);
      // Even with changed data, only write when the canonical text differs.
      if (!dryRun && writeNodeIfChanged(doc)) written.push(doc.path);
    } catch (err) {
      errors.push(`${key}: ${err instanceof Error ? err.message : String(err)}`);
    }
  }

  return {
    source: source.id,
    runId,
    startedAt,
    finishedAt: new Date().toISOString(),
    dryRun,
    origins,
    owns: [...source.owns],
    matches,
    changes,
    written,
    review,
    unmatched,
    errors,
  };
}

/** Run a source and emit its report to disk + stdout. Used by the CLI. */
export async function runAndReport(source: Source, opts: RunOptions): Promise<SourceReport> {
  const report = await runSource(source, opts);
  const path = opts.noReport ? undefined : writeReport(report, opts.reportsDir ?? REPORTS_DIR);
  console.log(summarize(report, path));
  return report;
}
