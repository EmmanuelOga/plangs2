import { expect, test } from "bun:test";
import { PlangsGraph } from ".";

test("matching keywords", () => {
  const g = new PlangsGraph();

  g.n_tsystems.set("tsys+weak", { keywords: ["weak"] });
  g.n_tsystems.set("tsys+dynamic", { keywords: ["dynamic"] });
  g.n_tsystems.set("tsys+strong", { keywords: ["strongly-typed"] });
  g.n_tsystems.set("tsys+adt", { keywords: ["sum types"] });

  const matches = [];

  for (const [id, node] of g.n_tsystems) {
    if (node.matchesKeyword(" a .. strongly typed .. dynamic .. language with .. sum-types ")) matches.push(id);
  }

  expect(matches.sort()).toEqual(["tsys+adt", "tsys+dynamic", "tsys+strong"]);
});
