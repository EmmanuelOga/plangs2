import { expect, test } from "bun:test";

import { Filter } from "@plangs/auxiliar/filters";
import { type AnyValue, ValString } from "@plangs/auxiliar/value";
import { PlangsGraph } from "@plangs/plangs/graph";
import type { VPlangKey } from "@plangs/plangs/graph/generated";

import { type Predicates, matchVertex, matchVertices } from ".";
import { PLANG_FACET_PREDICATES, type PlangFacetKey } from "./plangs";

test("matchVertex", () => {
  const pg = new PlangsGraph();
  const preds = PLANG_FACET_PREDICATES as Predicates<PlangFacetKey>;

  const plang = pg.plang.set("pl+plang", { name: "MyPlang" }).relWrittenWith.add("pl+one", "pl+two");
  const other = pg.plang.set("pl+other", { name: "MyOtherPlang" }).relWrittenWith.add("pl+two");

  const writtenWith = new Filter<VPlangKey>("any").add("pl+one", "pl+two");

  const filters = new Map(Object.entries({ writtenWith }) as [PlangFacetKey, AnyValue][]);

  expect(matchVertex(plang, preds, filters)).toBeTrue();
  expect(matchVertex(other, preds, filters)).toBeTrue();

  writtenWith.mode = "all";

  expect(matchVertex(plang, preds, filters)).toBeTrue();
  expect(matchVertex(other, preds, filters)).toBeFalse();

  writtenWith.mode = "any";
  filters.set("plangName", new ValString("myplang"));

  expect(matchVertex(plang, preds, filters)).toBeTrue();
  expect(matchVertex(other, preds, filters)).toBeFalse();
});

test("matchVertices", () => {
  const pg = new PlangsGraph();
  const plang = pg.plang.set("pl+plang", { name: "MyPlang" }).relWrittenWith.add("pl+one", "pl+two");
  const other = pg.plang.set("pl+other", { name: "MyOtherPlang" }).relWrittenWith.add("pl+two");

  const writtenWith = new Filter<VPlangKey>("any").add("pl+one").add("pl+two");
  const filters = new Map(Object.entries({ writtenWith }) as [PlangFacetKey, AnyValue][]);

  expect(matchVertices(pg.plang, filters)).toEqual(new Set([plang.key, other.key]));
  expect(matchVertices(pg.plang, filters, 1)).toEqual(new Set([plang.key]));
  expect(matchVertices(pg.plang, filters, 1000)).toEqual(new Set([plang.key, other.key]));
});
