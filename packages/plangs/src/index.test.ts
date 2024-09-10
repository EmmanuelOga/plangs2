import { expect, test } from "bun:test";
import { PlangsGraph } from ".";

test("matching keywords", () => {
  const g = new PlangsGraph();

  g.nodes.tsys.set("tsys+weak", { keywords: ["weak"] });
  g.nodes.tsys.set("tsys+dynamic", { keywords: ["dynamic"] });
  g.nodes.tsys.set("tsys+strong", { keywords: ["strongly-typed"] });
  g.nodes.tsys.set("tsys+adt", { keywords: ["sum types"] });

  const matches = [];

  for (const [id, node] of g.nodes.tsys) {
    if (node.matchesKeyword(" a .. strongly typed .. dynamic .. language with .. sum-types ")) matches.push(id);
  }

  expect(matches.sort()).toEqual(["tsys+adt", "tsys+dynamic", "tsys+strong"]);
});
