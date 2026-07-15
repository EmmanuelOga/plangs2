import { describe, expect, it } from "vitest";
import { NODES_DIR } from "../core/paths.ts";
import { parseArgs } from "./pipeline.ts";

describe("parseArgs", () => {
  it("parses a plain run", () => {
    expect(parseArgs(["run", "--source=linguist"])).toMatchObject({ command: "run", source: "linguist", all: false, dryRun: false });
  });

  it("parses --all and --dry-run", () => {
    expect(parseArgs(["run", "--all", "--dry-run"])).toMatchObject({ command: "run", all: true, dryRun: true });
  });

  it("collects --opt.* into source options", () => {
    expect(parseArgs(["run", "--source=languish", "--opt.clone=~/dev/languish", "--opt.weights=stars:1"]).options).toEqual({
      clone: "~/dev/languish",
      weights: "stars:1",
    });
  });

  it("keeps '=' inside an option value", () => {
    expect(parseArgs(["run", "--opt.url=https://x.dev/?a=b"]).options.url).toBe("https://x.dev/?a=b");
  });

  it("defaults to the real dataset and allows an override", () => {
    expect(parseArgs(["run"]).nodesDir).toBe(NODES_DIR);
    expect(parseArgs(["run", "--nodes-dir=/tmp/x"]).nodesDir).toBe("/tmp/x");
  });

  it("rejects an unknown flag rather than ignoring it", () => {
    expect(() => parseArgs(["run", "--sorce=linguist"])).toThrow(/Unknown flag/);
  });
});
