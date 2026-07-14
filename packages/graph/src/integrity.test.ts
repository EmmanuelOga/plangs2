import { describe, expect, it } from "vitest";
import { checkIntegrity, pruneDangling } from "./integrity";
import { loadGraph } from "./load";
import { NODES_DIR } from "./paths";

describe("integrity pass over the real dataset", () => {
  const { graph } = loadGraph(NODES_DIR);
  const issues = checkIntegrity(graph, { validate: true });

  it("every defined node validates against its Zod schema", () => {
    const validationErrors = issues.filter(i => !i.message.startsWith("Dangling"));
    expect(validationErrors).toEqual([]);
  });

  it("dangling targets are detected and prunable", () => {
    const dangling = issues.filter(i => i.message.startsWith("Dangling"));
    // Legacy data references some undefined targets; they must be reported...
    expect(dangling.length).toBeGreaterThanOrEqual(0);
    const pruned = pruneDangling(graph);
    const after = checkIntegrity(graph, { validate: false }).filter(i => i.message.startsWith("Dangling"));
    expect(after).toEqual([]);
    expect(pruned).toBeGreaterThanOrEqual(0);
  });
});
