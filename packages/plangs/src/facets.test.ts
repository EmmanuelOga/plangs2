import { expect, test } from "bun:test";

import { Filter } from "@plangs/graph/filters";

import { ValNumber } from "@plangs/graph/value";
import { type NPlang, PlangsGraph } from ".";
import { PLANG_FACET_PREDICATES } from "./facets";

test("compilesTo", () => {
  const pg = new PlangsGraph();
  const pl = pg.nodes.pl.set("pl+myplang").addCompilesTo(["pl+one", "pl+two"]);
  const { compilesTo } = PLANG_FACET_PREDICATES;

  expect(compilesTo(pl, new Filter<NPlang["key"]>("any").add("pl+one"))).toBe(true);
  expect(compilesTo(pl, new Filter<NPlang["key"]>("all").add("pl+one"))).toBe(true);

  expect(compilesTo(pl, new Filter<NPlang["key"]>("any").add("pl+two"))).toBe(true);
  expect(compilesTo(pl, new Filter<NPlang["key"]>("all").add("pl+two"))).toBe(true);

  expect(compilesTo(pl, new Filter<NPlang["key"]>("any").add("pl+three"))).toBe(false);
  expect(compilesTo(pl, new Filter<NPlang["key"]>("all").add("pl+three"))).toBe(false);

  expect(compilesTo(pl, new Filter<NPlang["key"]>("any").add("pl+one").add("pl+two"))).toBe(true);
  expect(compilesTo(pl, new Filter<NPlang["key"]>("all").add("pl+one").add("pl+two"))).toBe(true);

  expect(compilesTo(pl, new Filter<NPlang["key"]>("any").add("pl+two").add("pl+three"))).toBe(true);
  expect(compilesTo(pl, new Filter<NPlang["key"]>("all").add("pl+two").add("pl+three"))).toBe(false);
});

test("createdRecently", () => {
  const pg = new PlangsGraph();
  const pl = pg.nodes.pl.set("pl+myplang", { year: 2020 });
  const { createdRecently } = PLANG_FACET_PREDICATES;

  expect(createdRecently(pl, new ValNumber(2019))).toBe(true);
  expect(createdRecently(pl, new ValNumber(2020))).toBe(true);
  expect(createdRecently(pl, new ValNumber(2021))).toBe(false);
  expect(createdRecently(pl, new ValNumber(2022))).toBe(false);
});
