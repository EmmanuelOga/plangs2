#!/usr/bin/env node
/**
 * `pnpm pipeline run --source=linguist [--all] [--dry-run]`
 *
 * Thin wrapper over `runAndReport`. Exits non-zero when a source errored so a
 * refresh workflow fails loudly instead of opening an empty PR.
 */

import { NODES_DIR } from "../core/paths.ts";
import { runAndReport } from "../core/run.ts";
import type { SourceReport } from "../core/types.ts";
import { SOURCES, sourceById } from "../sources/index.ts";

interface Args {
  command: string;
  source?: string;
  all: boolean;
  dryRun: boolean;
  nodesDir: string;
  options: Record<string, string>;
}

export function parseArgs(argv: readonly string[]): Args {
  const args: Args = { command: "", all: false, dryRun: false, nodesDir: NODES_DIR, options: {} };
  for (const arg of argv) {
    if (!arg.startsWith("-")) {
      args.command ||= arg;
      continue;
    }
    const [rawKey, ...rest] = arg.replace(/^--?/, "").split("=");
    const key = rawKey ?? "";
    const value = rest.join("=");
    if (key === "all") args.all = true;
    else if (key === "dry-run" || key === "dryRun") args.dryRun = true;
    else if (key === "source") args.source = value;
    else if (key === "nodes-dir") args.nodesDir = value;
    else if (key.startsWith("opt.")) args.options[key.slice(4)] = value;
    else throw new Error(`Unknown flag '--${key}'`);
  }
  return args;
}

const USAGE = `plangs pipeline

  pipeline list
  pipeline run --source=<id> [--dry-run] [--opt.<key>=<value>]
  pipeline run --all [--dry-run]

Flags:
  --source=<id>     Run one importer. See 'pipeline list'.
  --all             Run every importer, in adoption order.
  --dry-run         Report what would change; write nothing.
  --nodes-dir=<p>   Override the dataset location (default: packages/data/nodes).
  --opt.<k>=<v>     Source-specific option, e.g. --opt.clone=~/dev/languish

Every run writes a provenance report to packages/pipeline/reports/ (gitignored).`;

export async function main(argv: readonly string[]): Promise<number> {
  let args: Args;
  try {
    args = parseArgs(argv);
  } catch (err) {
    console.error(`${err instanceof Error ? err.message : String(err)}\n\n${USAGE}`);
    return 2;
  }

  if (!args.command || args.command === "help") {
    console.log(USAGE);
    return 0;
  }

  if (args.command === "list") {
    for (const s of SOURCES) console.log(`  ${s.id.padEnd(12)} ${s.description}\n  ${" ".repeat(12)} owns: ${s.owns.join(", ")}`);
    return 0;
  }

  if (args.command !== "run") {
    console.error(`Unknown command '${args.command}'.\n\n${USAGE}`);
    return 2;
  }

  const selected = args.all ? SOURCES : args.source ? [sourceById(args.source)] : [];
  if (!selected.length) {
    console.error(`Pass --source=<id> or --all.\n\n${USAGE}`);
    return 2;
  }
  if (selected.some(s => !s)) {
    console.error(`Unknown source '${args.source}'. Known: ${SOURCES.map(s => s.id).join(", ")}`);
    return 2;
  }

  const reports: SourceReport[] = [];
  for (const source of selected as (typeof SOURCES)[number][]) {
    reports.push(await runAndReport(source, { nodesDir: args.nodesDir, dryRun: args.dryRun, options: args.options }));
  }

  const errors = reports.flatMap(r => r.errors);
  const changed = reports.reduce((n, r) => n + r.changes.length, 0);
  const written = reports.reduce((n, r) => n + r.written.length, 0);
  console.log(`\n${args.dryRun ? "[dry-run] " : ""}done: ${changed} change(s), ${written} file(s) written, ${errors.length} error(s).`);
  return errors.length ? 1 : 0;
}

// Only auto-run as a script, so tests can import `main`/`parseArgs`.
if (process.argv[1] && import.meta.url === `file://${process.argv[1]}`) {
  process.exitCode = await main(process.argv.slice(2));
}
