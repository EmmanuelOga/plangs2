/**
 * AI enrichment against a mocked Anthropic client and a mocked crawler.
 * Nothing here touches the network or needs an API key.
 */

import { describe, expect, it, vi } from "vitest";
import { makeNodesDir, offlineFetcher, removeDir, snapshotDir } from "../../test/helpers.ts";
import { runSource } from "../core/run.ts";
import type { CrawledPage, Crawler } from "./crawl.ts";
import type { AnthropicLike } from "./enrich.ts";
import { AI_OWNED_FIELDS, aiPlangSchema, createEnrichSource, MODEL, pagesFor } from "./enrich.ts";

const NODES = {
  "pl/nim": {
    name: "Nim",
    description: "Old description.",
    githubColor: "#ffc200",
    languishRanking: 119,
    extHomeURL: "https://nim-lang.org/",
    extGithubPath: "nim-lang/Nim",
    rels: { licenses: ["lic/mit"] },
  },
};

const page: CrawledPage = { url: "https://nim-lang.org/", title: "Nim", markdown: "Nim is a statically typed language.", truncated: false };
const crawler: Crawler = async () => [page];

function mockClient(output: unknown, stopReason: string | null = "end_turn"): AnthropicLike & { calls: Record<string, unknown>[] } {
  const calls: Record<string, unknown>[] = [];
  return {
    calls,
    messages: {
      parse: async params => {
        calls.push(params);
        return { parsed_output: output, stop_reason: stopReason };
      },
    },
  };
}

const GOOD_OUTPUT = {
  description: "Nim is a statically typed, compiled systems language.",
  shortDesc: "A statically typed compiled systems language.",
  keywords: ["nim", "systems"],
  stackovTags: ["nim-lang"],
};

const opts = { fetch: offlineFetcher, noReport: true, options: { keys: "pl/nim" } };

describe("aiPlangSchema", () => {
  it("is derived from @plangs/schema, not hand-written", () => {
    // Every owned field is present, and nothing else leaked in.
    expect(Object.keys(aiPlangSchema.shape).sort()).toEqual([...AI_OWNED_FIELDS].sort());
  });

  it("rejects output that violates the canonical schema's types", () => {
    expect(aiPlangSchema.safeParse({ keywords: "not-an-array" }).success).toBe(false);
    expect(aiPlangSchema.safeParse({ description: "ok", keywords: ["a"] }).success).toBe(true);
  });
});

describe("pagesFor", () => {
  it("builds crawl URLs from the node's link fields", () => {
    expect(
      pagesFor({
        key: "pl/x",
        kind: "plang",
        slug: "x",
        path: "",
        rels: {},
        data: { extHomeURL: "https://x.dev", extGithubPath: "o/r", extWikipediaPath: "X_(lang)" },
      }),
    ).toEqual(["https://x.dev", "https://github.com/o/r", "https://en.wikipedia.org/wiki/X_(lang)"]);
  });
});

describe("enrich source", () => {
  it("calls the Anthropic SDK with claude-sonnet-5 and a schema-derived output format", async () => {
    const client = mockClient(GOOD_OUTPUT);
    const dir = makeNodesDir(NODES);
    try {
      const report = await runSource(createEnrichSource({ client, crawler }), { nodesDir: dir, ...opts });
      expect(report.errors).toEqual([]);
      expect(client.calls).toHaveLength(1);
      const call = client.calls[0] as Record<string, unknown>;
      expect(call.model).toBe(MODEL);
      expect(MODEL).toBe("claude-sonnet-5");
      expect(call.output_config).toBeDefined();
      expect(String(call.system)).toContain("plangs.page");
      // The crawled page must actually reach the prompt.
      expect(JSON.stringify(call.messages)).toContain("statically typed language");
    } finally {
      removeDir(dir);
    }
  });

  it("writes the fields it owns", async () => {
    const dir = makeNodesDir(NODES);
    try {
      await runSource(createEnrichSource({ client: mockClient(GOOD_OUTPUT), crawler }), { nodesDir: dir, ...opts });
      const nim = snapshotDir(dir)["plang/nim.yaml"] ?? "";
      expect(nim).toContain("Nim is a statically typed, compiled systems language.");
      expect(nim).toContain("- nim-lang");
    } finally {
      removeDir(dir);
    }
  });

  it("CANNOT clobber pipeline-owned fields — the legacy ai/index.ts bug", async () => {
    // A model that tries to rewrite linguist's and languish's fields.
    const naughty = mockClient({ ...GOOD_OUTPUT, githubColor: "#000000", languishRanking: 1 });
    const dir = makeNodesDir(NODES);
    try {
      const report = await runSource(createEnrichSource({ client: naughty, crawler }), { nodesDir: dir, ...opts });
      // The schema strips them before the patcher ever sees them...
      expect(report.changes.some(c => c.field === "githubColor" || c.field === "languishRanking")).toBe(false);
      // ...and the pipeline-owned values on disk are untouched.
      const nim = snapshotDir(dir)["plang/nim.yaml"] ?? "";
      expect(nim).toContain('githubColor: "#ffc200"');
      expect(nim).toContain("languishRanking: 119");
    } finally {
      removeDir(dir);
    }
  });

  it("is idempotent", async () => {
    const dir = makeNodesDir(NODES);
    const source = createEnrichSource({ client: mockClient(GOOD_OUTPUT), crawler });
    try {
      await runSource(source, { nodesDir: dir, ...opts });
      const after = snapshotDir(dir);
      const second = await runSource(source, { nodesDir: dir, ...opts });
      expect(second.changes).toEqual([]);
      expect(second.written).toEqual([]);
      expect(snapshotDir(dir)).toEqual(after);
    } finally {
      removeDir(dir);
    }
  });

  it("never erases curated data when the model omits a field", async () => {
    const dir = makeNodesDir(NODES);
    try {
      // Model returns only shortDesc; `description` must survive.
      await runSource(createEnrichSource({ client: mockClient({ shortDesc: "Just this." }), crawler }), { nodesDir: dir, ...opts });
      const nim = snapshotDir(dir)["plang/nim.yaml"] ?? "";
      expect(nim).toContain("Old description.");
      expect(nim).toContain("shortDesc: Just this.");
    } finally {
      removeDir(dir);
    }
  });

  it("discards a refusal", async () => {
    const dir = makeNodesDir(NODES);
    try {
      const report = await runSource(createEnrichSource({ client: mockClient(GOOD_OUTPUT, "refusal"), crawler }), { nodesDir: dir, ...opts });
      expect(report.changes).toEqual([]);
      expect(report.review[0]).toMatchObject({ kind: "refusal" });
    } finally {
      removeDir(dir);
    }
  });

  it("reviews (does not write) output that fails schema validation", async () => {
    const dir = makeNodesDir(NODES);
    try {
      const report = await runSource(createEnrichSource({ client: mockClient({ keywords: 42 }), crawler }), { nodesDir: dir, ...opts });
      expect(report.changes).toEqual([]);
      expect(report.review[0]).toMatchObject({ kind: "invalid-output" });
    } finally {
      removeDir(dir);
    }
  });

  it("refuses to fan out over the whole dataset unattended", async () => {
    const dir = makeNodesDir(NODES);
    try {
      const report = await runSource(createEnrichSource({ client: mockClient(GOOD_OUTPUT), crawler }), {
        nodesDir: dir,
        fetch: offlineFetcher,
        noReport: true,
        options: {},
      });
      expect(report.errors.join(" ")).toContain("--opt.keys");
    } finally {
      removeDir(dir);
    }
  });

  it("does not call the model when there is nothing to crawl", async () => {
    const client = mockClient(GOOD_OUTPUT);
    const emptyCrawler = vi.fn<Crawler>(async () => []);
    const dir = makeNodesDir({ "pl/bare": { name: "Bare", rels: {} } });
    try {
      const report = await runSource(createEnrichSource({ client, crawler: emptyCrawler }), {
        nodesDir: dir,
        fetch: offlineFetcher,
        noReport: true,
        options: { keys: "pl/bare" },
      });
      expect(client.calls).toEqual([]);
      expect(emptyCrawler).not.toHaveBeenCalled();
      expect(report.review[0]).toMatchObject({ kind: "no-sources" });
    } finally {
      removeDir(dir);
    }
  });
});
