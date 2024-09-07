import { expect, test } from "bun:test";
import { PlangsGraph } from ".";

test("matching", () => {
  const g = new PlangsGraph();

  g.n_tsystem.set("tsys+weak", { keywords: ["weak"] });
  g.n_tsystem.set("tsys+dynamic", { keywords: ["dynamic"] });
  g.n_tsystem.set("tsys+strong", { keywords: ["strongly-typed"] });
  g.n_tsystem.set("tsys+adt", { keywords: ["sum types"] });

  const matches = [];

  for (const [id, node] of g.n_tsystem) {
    if (node.matchesKeyword(" a .. strongly typed .. dynamic .. language with .. sum-types ")) matches.push(id);
  }

  expect(matches.sort()).toEqual(["tsys+adt", "tsys+dynamic", "tsys+strong"]);
});
