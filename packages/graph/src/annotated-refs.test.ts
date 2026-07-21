import { mkdirSync, mkdtempSync, rmSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { afterAll, describe, expect, it } from "vitest";
import { loadGraph } from "./load.ts";
import { toSerializedGraph } from "./serialize.ts";

/**
 * D8 annotated refs, end to end on a purpose-built dataset: a YAML
 * `{ref, since?, until?}` target must load into an edge carrying the
 * qualifiers as props, and serialize back out as an annotated ref — while
 * bare targets stay plain strings on both sides.
 */

function writeDataset(files: Record<string, string>): string {
  const dir = mkdtempSync(join(tmpdir(), "plangs-d8-"));
  for (const [rel, text] of Object.entries(files)) {
    mkdirSync(join(dir, rel.split("/")[0] ?? ""), { recursive: true });
    writeFileSync(join(dir, rel), text);
  }
  return dir;
}

const dirs: string[] = [];
afterAll(() => {
  for (const dir of dirs) rmSync(dir, { recursive: true, force: true });
});

describe("annotated refs (D8): YAML → edge props → serialized artifact", () => {
  const dir = writeDataset({
    "plang/x.yaml": 'name: X\nrels:\n  licenses:\n    - ref: lic/mit\n      since: "2015"\n    - lic/apache\n',
    "license/mit.yaml": "name: MIT\n",
    "license/apache.yaml": "name: Apache\n",
  });
  dirs.push(dir);
  const { graph, issues } = loadGraph(dir);

  it("loads with no errors", () => {
    expect(issues.filter(i => i.level === "error")).toEqual([]);
  });

  // The canonical stored direction for `licenses` is license → plang (the rel
  // is authored on the plang via `toRel`) — the E3 lesson: assert the direction
  // the edge table declares, not the one the YAML reads as.
  it("maps the qualifiers onto the edge, and only onto the qualified edge", () => {
    const qualified = graph.edges().find(e => graph.source(e) === "lic/mit" && graph.target(e) === "pl/x");
    const bare = graph.edges().find(e => graph.source(e) === "lic/apache" && graph.target(e) === "pl/x");
    expect(qualified).toBeDefined();
    expect(bare).toBeDefined();
    if (!qualified || !bare) return;
    expect(graph.getEdgeAttribute(qualified, "props")).toEqual({ since: "2015" });
    expect(graph.getEdgeAttribute(bare, "props")).toBeUndefined();
  });

  it("serializes the qualified target as {ref, since} and the bare one as a key", () => {
    const out = toSerializedGraph(graph);
    expect(out.edges.licenseRelPlangs).toEqual({
      "lic/mit": [{ ref: "pl/x", since: "2015" }],
      "lic/apache": ["pl/x"],
    });
  });
});

describe("annotated refs (D8): validation", () => {
  it("reports a typo'd qualifier key as a load error, naming the node and rel", () => {
    const dir = writeDataset({
      "plang/y.yaml": 'name: Y\nrels:\n  licenses:\n    - ref: lic/mit\n      sinse: "2010"\n',
      "license/mit.yaml": "name: MIT\n",
    });
    dirs.push(dir);
    const { issues } = loadGraph(dir);
    const bad = issues.filter(i => i.level === "error" && i.message.includes("Invalid annotated ref in pl/y.licenses"));
    expect(bad).toHaveLength(1);
  });

  it("warns, not errors, when a duplicate target would drop qualifiers", () => {
    const dir = writeDataset({
      "plang/z.yaml": 'name: Z\nrels:\n  licenses:\n    - lic/mit\n    - ref: lic/mit\n      since: "2015"\n',
      "license/mit.yaml": "name: MIT\n",
    });
    dirs.push(dir);
    const { issues } = loadGraph(dir);
    expect(issues.filter(i => i.level === "error")).toEqual([]);
    expect(issues.filter(i => i.level === "warn" && i.message.includes("qualifiers ignored"))).toHaveLength(1);
  });
});
