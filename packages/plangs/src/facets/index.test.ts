import { expect, test } from "bun:test";

import { Filter } from "@plangs/auxiliar/filters";
import { type AnyValue, ValBool, ValString } from "@plangs/auxiliar/value";
import { PlangsGraph } from "@plangs/plangs/graph";
import type { VPlangKey } from "@plangs/plangs/graph/generated";

import { type Predicates, matchVertex, matchVertices } from ".";
import { PLANG_FACET_PREDICATES, type PlangFacetKey } from "./plangs";

test("matchVertex", () => {
  const pg = new PlangsGraph();
  const preds = PLANG_FACET_PREDICATES as Predicates<PlangFacetKey>;

  const plang = pg.plang.set("pl+plang", { name: "MyPlang", isTranspiler: true });
  const other = pg.plang.set("pl+other", { name: "MyOtherPlang" });

  // We start with empty filters.
  const filters = new Map<PlangFacetKey, AnyValue>();

  // No filters, so we should always match.
  expect(matchVertex(plang, preds, filters, "all")).toBeTrue();
  expect(matchVertex(plang, preds, filters, "any")).toBeTrue();
  expect(matchVertex(other, preds, filters, "all")).toBeTrue();
  expect(matchVertex(other, preds, filters, "any")).toBeTrue();

  // Add a filter matching one of the plangs.
  filters.set("name", new ValString("other")); // only lowecase matches.
  expect(matchVertex(plang, preds, filters, "all")).toBeFalse();
  expect(matchVertex(plang, preds, filters, "any")).toBeFalse();
  expect(matchVertex(other, preds, filters, "all")).toBeTrue();
  expect(matchVertex(other, preds, filters, "any")).toBeTrue();

  // Change the filter, matching both of the plangs.
  filters.set("name", new ValString("my")); // only lowecase matches.
  expect(matchVertex(plang, preds, filters, "all")).toBeTrue();
  expect(matchVertex(plang, preds, filters, "any")).toBeTrue();
  expect(matchVertex(other, preds, filters, "all")).toBeTrue();
  expect(matchVertex(other, preds, filters, "any")).toBeTrue();

  // Both match, but we add an *additional* filter that only matches one.
  filters.set("isTranspiler", new ValBool(true));
  expect(matchVertex(plang, preds, filters, "all")).toBeTrue();
  expect(matchVertex(plang, preds, filters, "any")).toBeTrue();
  expect(matchVertex(other, preds, filters, "all")).toBeFalse();
  expect(matchVertex(other, preds, filters, "any")).toBeTrue();
});

test("matchVertices", () => {
  const pg = new PlangsGraph();
  const plang = pg.plang.set("pl+plang", { name: "MyPlang" }).relWrittenWith.add("pl+one", "pl+two");
  const other = pg.plang.set("pl+other", { name: "MyOtherPlang" }).relWrittenWith.add("pl+two");

  const writtenWith = new Filter<VPlangKey>("any").add("pl+one").add("pl+two");
  const filters = new Map(Object.entries({ writtenWith }) as [PlangFacetKey, AnyValue][]);

  expect(matchVertices(pg.plang, filters)).toEqual(new Set([plang.key, other.key]));
});
