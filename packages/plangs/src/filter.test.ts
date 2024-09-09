import { expect, beforeEach, test } from "bun:test";
import { PlangsGraph } from ".";
import { PlangFilters } from "./filter";

function createGraph() {
  const g = new PlangsGraph();

  g.n_plangs.set("pl+javascript", { name: "JavaScript" });
  g.n_plangs.set("pl+typescript", { name: "TypeScript" });
  g.n_plangs.set("pl+pascal", { name: "Pascal" });

  g.n_tsystems.set("tsys+weak", { keywords: ["weak"] });
  g.n_tsystems.set("tsys+dynamic", { keywords: ["dynamic"] });
  g.n_tsystems.set("tsys+strong", { keywords: ["strongly-typed"] });
  g.n_tsystems.set("tsys+adt", { keywords: ["sum types"] });

  return g;
}

test("empty filters match all languages", () => {
  const [g, f] = [createGraph(), new PlangFilters()];
  expect(g.plangs(f)).toEqual(["pl+javascript", "pl+typescript", "pl+pascal"]);
});

test("filters languages by name", () => {
  const [g, f] = [createGraph(), new PlangFilters()];

  f.values.plangName = /script/i;
  expect(g.plangs(f)).toEqual(["pl+javascript", "pl+typescript"]);

  f.values.plangName = /pascal/i;
  expect(g.plangs(f)).toEqual(["pl+pascal"]);

  f.values.plangName = undefined;
  expect(g.plangs(f)).toEqual(["pl+javascript", "pl+typescript", "pl+pascal"]);
});

test("filters languages by first appeareance date", () => {
  const [g, f] = [createGraph(), new PlangFilters()];

  f.values.plangName = /script/i;
  expect(g.plangs(f)).toEqual(["pl+javascript", "pl+typescript"]);

  f.values.plangName = /pascal/i;
  expect(g.plangs(f)).toEqual(["pl+pascal"]);

  f.values.plangName = undefined;
  expect(g.plangs(f)).toEqual(["pl+javascript", "pl+typescript", "pl+pascal"]);
});
