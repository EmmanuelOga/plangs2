/** Per-run provenance reports (PLAN §4.5): what changed, and where from. */

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import type { SourceReport } from "./types.ts";

const HERE = dirname(fileURLToPath(import.meta.url));

/** Absolute path to the (gitignored) reports directory. */
export const REPORTS_DIR = join(HERE, "../../reports");

/** A sortable, collision-free run id: `20260714T163302-a1b2c3`. */
export function newRunId(now: Date = new Date()): string {
  const stamp = now
    .toISOString()
    .replace(/[-:]/g, "")
    .replace(/\.\d+Z$/, "");
  const rand = Math.random().toString(36).slice(2, 8);
  return `${stamp}-${rand}`;
}

/** Write the report JSON. Returns its path. */
export function writeReport(report: SourceReport, dir: string = REPORTS_DIR): string {
  mkdirSync(dir, { recursive: true });
  const path = join(dir, `${report.source}-${report.runId}.json`);
  writeFileSync(path, `${JSON.stringify(report, null, 2)}\n`);
  return path;
}

const MAX_LISTED = 20;

function truncate(value: unknown): string {
  const s = typeof value === "string" ? value : JSON.stringify(value);
  if (s === undefined) return "undefined";
  return s.length > 60 ? `${s.slice(0, 57)}...` : s;
}

/** Render a human summary for stdout. */
export function summarize(report: SourceReport, reportPath?: string): string {
  const lines: string[] = [];
  const byMethod = new Map<string, number>();
  for (const m of report.matches) byMethod.set(m.method, (byMethod.get(m.method) ?? 0) + 1);

  lines.push(`\n${report.dryRun ? "[dry-run] " : ""}source: ${report.source}  run: ${report.runId}`);
  for (const origin of report.origins) lines.push(`  from: ${origin}`);
  lines.push(`  owns: ${report.owns.join(", ") || "(nothing)"}`);
  lines.push(`  matched: ${report.matches.length} (${[...byMethod].map(([k, n]) => `${k}=${n}`).join(" ") || "none"})`);
  lines.push(`  changes: ${report.changes.length} across ${new Set(report.changes.map(c => c.key)).size} node(s)`);
  lines.push(`  written: ${report.written.length} file(s)${report.dryRun ? " (suppressed)" : ""}`);

  for (const c of report.changes.slice(0, MAX_LISTED)) {
    lines.push(`    ${c.key} ${c.field}: ${truncate(c.from)} -> ${truncate(c.to)}`);
  }
  if (report.changes.length > MAX_LISTED) lines.push(`    ... ${report.changes.length - MAX_LISTED} more`);

  if (report.review.length) lines.push(`  review: ${report.review.length} item(s) — NOT written, see report`);
  if (report.unmatched.length) lines.push(`  unmatched remote records: ${report.unmatched.length}`);
  for (const e of report.errors) lines.push(`  ERROR: ${e}`);
  if (reportPath) lines.push(`  report: ${reportPath}`);

  return lines.join("\n");
}
