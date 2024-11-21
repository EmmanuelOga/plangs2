import { expect, test } from "bun:test";

import { Filter } from "@plangs/auxiliar/filters";
import { type AnyValue, ValBool, ValNumber, ValRegExp, ValString } from "@plangs/auxiliar/value";
import { type NLicense, type NParadigm, type NPlang, type NPlatform, type NTag, type NTsys, PlangsGraph } from "@plangs/plangs";

import { PLANG_FACET_PREDICATES, type PlangFacetKey, plangMatches } from "./plangs";

test("compilesTo", () => {
  const pg = new PlangsGraph();
  const pl = pg.nodes.pl.set("pl+myplang").addCompilesTo(["pl+one", "pl+two"]);
  const { compilesTo: check } = PLANG_FACET_PREDICATES;

  expect(check(pl, new Filter<NPlang["key"]>("all").add("pl+one"))).toBeTrue();
  expect(check(pl, new Filter<NPlang["key"]>("all").add("pl+one").add("pl+two"))).toBeTrue();
  expect(check(pl, new Filter<NPlang["key"]>("all").add("pl+three"))).toBeFalse();
  expect(check(pl, new Filter<NPlang["key"]>("all").add("pl+two"))).toBeTrue();
  expect(check(pl, new Filter<NPlang["key"]>("all").add("pl+two").add("pl+three"))).toBeFalse();

  expect(check(pl, new Filter<NPlang["key"]>("any").add("pl+one"))).toBeTrue();
  expect(check(pl, new Filter<NPlang["key"]>("any").add("pl+one").add("pl+two"))).toBeTrue();
  expect(check(pl, new Filter<NPlang["key"]>("any").add("pl+three"))).toBeFalse();
  expect(check(pl, new Filter<NPlang["key"]>("any").add("pl+two"))).toBeTrue();
  expect(check(pl, new Filter<NPlang["key"]>("any").add("pl+two").add("pl+three"))).toBeTrue();
});

test("createdRecently", () => {
  const pg = new PlangsGraph();
  const pl = pg.nodes.pl.set("pl+myplang", { created: "2020" });
  const { createdRecently: check } = PLANG_FACET_PREDICATES;

  expect(check(pl, new ValString("2019"))).toBeTrue();
  expect(check(pl, new ValString("2020"))).toBeTrue();
  expect(check(pl, new ValString("2021"))).toBeFalse();
  expect(check(pl, new ValString("2022"))).toBeFalse();
});

test("creationYear", () => {
  const pg = new PlangsGraph();
  const pl = pg.nodes.pl.set("pl+myplang", { created: "2020" });
  const { creationYear: check } = PLANG_FACET_PREDICATES;

  expect(check(pl, new Filter<string>("all").add("2019"))).toBeFalse();
  expect(check(pl, new Filter<string>("all").add("2020"))).toBeTrue();
  expect(check(pl, new Filter<string>("all").add("2021"))).toBeFalse();
  expect(check(pl, new Filter<string>("all").add("2022"))).toBeFalse();
  expect(check(pl, new Filter<string>("any").add("2019"))).toBeFalse();
  expect(check(pl, new Filter<string>("any").add("2020"))).toBeTrue();
  expect(check(pl, new Filter<string>("any").add("2021"))).toBeFalse();
  expect(check(pl, new Filter<string>("any").add("2022"))).toBeFalse();

  expect(check(pl, new Filter<string>("all").add("2019").add("2020"))).toBeFalse();
  expect(check(pl, new Filter<string>("all").add("2020").add("2021"))).toBeFalse();
  expect(check(pl, new Filter<string>("all").add("2021").add("2022"))).toBeFalse();
  expect(check(pl, new Filter<string>("all").add("2022").add("2023"))).toBeFalse();
  expect(check(pl, new Filter<string>("any").add("2019").add("2020"))).toBeTrue();
  expect(check(pl, new Filter<string>("any").add("2020").add("2021"))).toBeTrue();
  expect(check(pl, new Filter<string>("any").add("2021").add("2022"))).toBeFalse();
  expect(check(pl, new Filter<string>("any").add("2022").add("2023"))).toBeFalse();
});

test("dialectOf", () => {
  const pg = new PlangsGraph();
  const pl = pg.nodes.pl.set("pl+myplang").addDialectOf(["pl+one", "pl+two"]);
  const { dialectOf: check } = PLANG_FACET_PREDICATES;

  expect(check(pl, new Filter<NPlang["key"]>("all").add("pl+one"))).toBeTrue();
  expect(check(pl, new Filter<NPlang["key"]>("all").add("pl+one").add("pl+two"))).toBeTrue();
  expect(check(pl, new Filter<NPlang["key"]>("all").add("pl+three"))).toBeFalse();
  expect(check(pl, new Filter<NPlang["key"]>("all").add("pl+two"))).toBeTrue();
  expect(check(pl, new Filter<NPlang["key"]>("all").add("pl+two").add("pl+three"))).toBeFalse();

  expect(check(pl, new Filter<NPlang["key"]>("any").add("pl+one"))).toBeTrue();
  expect(check(pl, new Filter<NPlang["key"]>("any").add("pl+one").add("pl+two"))).toBeTrue();
  expect(check(pl, new Filter<NPlang["key"]>("any").add("pl+three"))).toBeFalse();
  expect(check(pl, new Filter<NPlang["key"]>("any").add("pl+two"))).toBeTrue();
  expect(check(pl, new Filter<NPlang["key"]>("any").add("pl+two").add("pl+three"))).toBeTrue();
});

test("extensions", () => {
  const pg = new PlangsGraph();
  const pl = pg.nodes.pl.set("pl+pascal", { extensions: [".pas", ".tpu"] });
  const { extensions: check } = PLANG_FACET_PREDICATES;

  expect(check(pl, new Filter<string>("all").add(".js").add(".jsx"))).toBeFalse();
  expect(check(pl, new Filter<string>("all").add(".pas"))).toBeTrue();
  expect(check(pl, new Filter<string>("all").add(".pas").add(".js"))).toBeFalse();
  expect(check(pl, new Filter<string>("all").add(".pas").add(".tpu"))).toBeTrue();

  expect(check(pl, new Filter<string>("any").add(".js").add(".jsx"))).toBeFalse();
  expect(check(pl, new Filter<string>("any").add(".pas"))).toBeTrue();
  expect(check(pl, new Filter<string>("any").add(".pas").add(".js"))).toBeTrue();
  expect(check(pl, new Filter<string>("any").add(".pas").add(".tpu"))).toBeTrue();
});

test("hasLogo", () => {
  const pg = new PlangsGraph();
  const java = pg.nodes.pl.set("pl+java");
  const pascal = pg.nodes.pl.set("pl+pascal").addImages([{ kind: "logo", title: "Logo", url: "https://plangs.page/logo.png" }]);
  const { hasLogo: check } = PLANG_FACET_PREDICATES;

  expect(check(java, new ValBool(false))).toBeTrue();
  expect(check(java, new ValBool(true))).toBeFalse();
  expect(check(pascal, new ValBool(false))).toBeFalse();
  expect(check(pascal, new ValBool(true))).toBeTrue();
});

test("hasWikipedia", () => {
  const pg = new PlangsGraph();
  const java = pg.nodes.pl.set("pl+java");
  const pascal = pg.nodes.pl.set("pl+pascal", { extWikipediaPath: "Pascal_(programming_language)" });
  const { hasWikipedia: check } = PLANG_FACET_PREDICATES;

  expect(check(java, new ValBool(false))).toBeTrue();
  expect(check(java, new ValBool(true))).toBeFalse();
  expect(check(pascal, new ValBool(false))).toBeFalse();
  expect(check(pascal, new ValBool(true))).toBeTrue();
});

test("implements", () => {
  const pg = new PlangsGraph();
  const pl = pg.nodes.pl.set("pl+myplang").addImplements(["pl+one", "pl+two"]);
  const { implements: check } = PLANG_FACET_PREDICATES;

  expect(check(pl, new Filter<NPlang["key"]>("all").add("pl+one"))).toBeTrue();
  expect(check(pl, new Filter<NPlang["key"]>("all").add("pl+one").add("pl+two"))).toBeTrue();
  expect(check(pl, new Filter<NPlang["key"]>("all").add("pl+three"))).toBeFalse();
  expect(check(pl, new Filter<NPlang["key"]>("all").add("pl+two"))).toBeTrue();
  expect(check(pl, new Filter<NPlang["key"]>("all").add("pl+two").add("pl+three"))).toBeFalse();

  expect(check(pl, new Filter<NPlang["key"]>("any").add("pl+one"))).toBeTrue();
  expect(check(pl, new Filter<NPlang["key"]>("any").add("pl+one").add("pl+two"))).toBeTrue();
  expect(check(pl, new Filter<NPlang["key"]>("any").add("pl+three"))).toBeFalse();
  expect(check(pl, new Filter<NPlang["key"]>("any").add("pl+two"))).toBeTrue();
  expect(check(pl, new Filter<NPlang["key"]>("any").add("pl+two").add("pl+three"))).toBeTrue();
});

test("influenced", () => {
  const pg = new PlangsGraph();
  const pl = pg.nodes.pl.set("pl+myplang").addInfluencedBy(["pl+one", "pl+two"]);
  const other = pg.nodes.pl.set("pl+other").addInfluencedBy(["pl+one", "pl+two"]);
  const one = pg.nodes.pl.set("pl+one");
  const { influenced: check } = PLANG_FACET_PREDICATES;

  expect(check(one, new Filter<NPlang["key"]>("all"))).toBeTrue();
  expect(check(one, new Filter<NPlang["key"]>("all").add("pl+myplang").add("pl+other"))).toBeTrue();
  expect(check(one, new Filter<NPlang["key"]>("any"))).toBeFalse();
  expect(check(one, new Filter<NPlang["key"]>("any").add("pl+myplang").add("pl+other"))).toBeTrue();
  expect(check(one, new Filter<NPlang["key"]>("any").add("pl+two").add("pl+three"))).toBeFalse();

  expect(check(other, new Filter<NPlang["key"]>("all"))).toBeTrue();
  expect(check(other, new Filter<NPlang["key"]>("all").add("pl+one").add("pl+two"))).toBeFalse();
  expect(check(other, new Filter<NPlang["key"]>("any"))).toBeFalse();
  expect(check(other, new Filter<NPlang["key"]>("any").add("pl+one").add("pl+two"))).toBeFalse();

  expect(check(pl, new Filter<NPlang["key"]>("all"))).toBeTrue();
  expect(check(pl, new Filter<NPlang["key"]>("all").add("pl+two").add("pl+three"))).toBeFalse();
  expect(check(pl, new Filter<NPlang["key"]>("any"))).toBeFalse();
  expect(check(pl, new Filter<NPlang["key"]>("any").add("pl+two").add("pl+three"))).toBeFalse();
});

test("influencedBy", () => {
  const pg = new PlangsGraph();
  const pl = pg.nodes.pl.set("pl+myplang").addInfluencedBy(["pl+one", "pl+two"]);
  const { influencedBy: check } = PLANG_FACET_PREDICATES;

  expect(check(pl, new Filter<NPlang["key"]>("all").add("pl+one"))).toBeTrue();
  expect(check(pl, new Filter<NPlang["key"]>("all").add("pl+one").add("pl+two"))).toBeTrue();
  expect(check(pl, new Filter<NPlang["key"]>("all").add("pl+three"))).toBeFalse();
  expect(check(pl, new Filter<NPlang["key"]>("all").add("pl+two"))).toBeTrue();
  expect(check(pl, new Filter<NPlang["key"]>("all").add("pl+two").add("pl+three"))).toBeFalse();

  expect(check(pl, new Filter<NPlang["key"]>("any").add("pl+one"))).toBeTrue();
  expect(check(pl, new Filter<NPlang["key"]>("any").add("pl+one").add("pl+two"))).toBeTrue();
  expect(check(pl, new Filter<NPlang["key"]>("any").add("pl+three"))).toBeFalse();
  expect(check(pl, new Filter<NPlang["key"]>("any").add("pl+two"))).toBeTrue();
  expect(check(pl, new Filter<NPlang["key"]>("any").add("pl+two").add("pl+three"))).toBeTrue();
});

test("isTranspiler", () => {
  const pg = new PlangsGraph();
  const typescript = pg.nodes.pl.set("pl+typescript", { isTranspiler: true });
  const rascal = pg.nodes.pl.set("pl+rascal");
  const { isTranspiler: check } = PLANG_FACET_PREDICATES;

  expect(check(typescript, new ValBool(false))).toBeFalse();
  expect(check(typescript, new ValBool(true))).toBeTrue();
  expect(check(rascal, new ValBool(false))).toBeTrue();
  expect(check(rascal, new ValBool(true))).toBeFalse();
});

test("licenses", () => {
  const pg = new PlangsGraph();
  const pl = pg.nodes.pl.set("pl+myplang").addLicenses(["license+one", "license+two"]);
  const { licenses: check } = PLANG_FACET_PREDICATES;

  expect(check(pl, new Filter<NLicense["key"]>("all").add("license+one"))).toBeTrue();
  expect(check(pl, new Filter<NLicense["key"]>("all").add("license+one").add("license+two"))).toBeTrue();
  expect(check(pl, new Filter<NLicense["key"]>("all").add("license+three"))).toBeFalse();
  expect(check(pl, new Filter<NLicense["key"]>("all").add("license+two"))).toBeTrue();
  expect(check(pl, new Filter<NLicense["key"]>("all").add("license+two").add("license+three"))).toBeFalse();

  expect(check(pl, new Filter<NLicense["key"]>("any").add("license+one"))).toBeTrue();
  expect(check(pl, new Filter<NLicense["key"]>("any").add("license+one").add("license+two"))).toBeTrue();
  expect(check(pl, new Filter<NLicense["key"]>("any").add("license+three"))).toBeFalse();
  expect(check(pl, new Filter<NLicense["key"]>("any").add("license+two"))).toBeTrue();
  expect(check(pl, new Filter<NLicense["key"]>("any").add("license+two").add("license+three"))).toBeTrue();
});

test("paradigms", () => {
  const pg = new PlangsGraph();
  const pl = pg.nodes.pl.set("pl+myplang").addParadigms(["paradigm+one", "paradigm+two"]);
  const { paradigms: check } = PLANG_FACET_PREDICATES;

  expect(check(pl, new Filter<NParadigm["key"]>("all").add("paradigm+one"))).toBeTrue();
  expect(check(pl, new Filter<NParadigm["key"]>("all").add("paradigm+one").add("paradigm+two"))).toBeTrue();
  expect(check(pl, new Filter<NParadigm["key"]>("all").add("paradigm+three"))).toBeFalse();
  expect(check(pl, new Filter<NParadigm["key"]>("all").add("paradigm+two"))).toBeTrue();
  expect(check(pl, new Filter<NParadigm["key"]>("all").add("paradigm+two").add("paradigm+three"))).toBeFalse();

  expect(check(pl, new Filter<NParadigm["key"]>("any").add("paradigm+one"))).toBeTrue();
  expect(check(pl, new Filter<NParadigm["key"]>("any").add("paradigm+one").add("paradigm+two"))).toBeTrue();
  expect(check(pl, new Filter<NParadigm["key"]>("any").add("paradigm+three"))).toBeFalse();
  expect(check(pl, new Filter<NParadigm["key"]>("any").add("paradigm+two"))).toBeTrue();
  expect(check(pl, new Filter<NParadigm["key"]>("any").add("paradigm+two").add("paradigm+three"))).toBeTrue();
});

test("plangName", () => {
  const pg = new PlangsGraph();
  const typescript = pg.nodes.pl.set("pl+typescript", { name: "TypeScript" });
  const rascal = pg.nodes.pl.set("pl+rascal", { name: "Rascal" });
  const { plangName: check } = PLANG_FACET_PREDICATES;

  expect(check(rascal, new ValRegExp(/Rascal/))).toBeTrue();
  expect(check(rascal, new ValRegExp(/TypeScript/))).toBeFalse();
  expect(check(rascal, new ValRegExp(/rascal/i))).toBeTrue();
  expect(check(rascal, new ValRegExp(/typescript/i))).toBeFalse();
  expect(check(rascal, new ValRegExp(/xyz/i))).toBeFalse();

  expect(check(typescript, new ValRegExp(/Rascal/))).toBeFalse();
  expect(check(typescript, new ValRegExp(/TypeScript/))).toBeTrue();
  expect(check(typescript, new ValRegExp(/rascal/i))).toBeFalse();
  expect(check(typescript, new ValRegExp(/typescript/i))).toBeTrue();
  expect(check(typescript, new ValRegExp(/xyz/i))).toBeFalse();
});

test("platforms", () => {
  const pg = new PlangsGraph();
  const pl = pg.nodes.pl.set("pl+myplang").addPlatforms(["plat+one", "plat+two"]);
  const { platforms: check } = PLANG_FACET_PREDICATES;

  expect(check(pl, new Filter<NPlatform["key"]>("all").add("plat+one"))).toBeTrue();
  expect(check(pl, new Filter<NPlatform["key"]>("all").add("plat+one").add("plat+two"))).toBeTrue();
  expect(check(pl, new Filter<NPlatform["key"]>("all").add("plat+three"))).toBeFalse();
  expect(check(pl, new Filter<NPlatform["key"]>("all").add("plat+two"))).toBeTrue();
  expect(check(pl, new Filter<NPlatform["key"]>("all").add("plat+two").add("plat+three"))).toBeFalse();

  expect(check(pl, new Filter<NPlatform["key"]>("any").add("plat+one"))).toBeTrue();
  expect(check(pl, new Filter<NPlatform["key"]>("any").add("plat+one").add("plat+two"))).toBeTrue();
  expect(check(pl, new Filter<NPlatform["key"]>("any").add("plat+three"))).toBeFalse();
  expect(check(pl, new Filter<NPlatform["key"]>("any").add("plat+two"))).toBeTrue();
  expect(check(pl, new Filter<NPlatform["key"]>("any").add("plat+two").add("plat+three"))).toBeTrue();
});

test("releasedRecently", () => {
  const pg = new PlangsGraph();
  const pl = pg.nodes.pl.set("pl+myplang").addReleases([{ date: "2020-01-01", version: "1.0" }]);
  const { releasedRecently: check } = PLANG_FACET_PREDICATES;

  expect(check(pl, new ValString("2019"))).toBeTrue();
  expect(check(pl, new ValString("2020"))).toBeTrue();
  expect(check(pl, new ValString("2021"))).toBeFalse();
  expect(check(pl, new ValString("2022"))).toBeFalse();
});

test("tags", () => {
  const pg = new PlangsGraph();
  const pl = pg.nodes.pl.set("pl+myplang").addTags(["tag+one", "tag+two"]);
  const { tags: check } = PLANG_FACET_PREDICATES;

  expect(check(pl, new Filter<NTag["key"]>("all").add("tag+one"))).toBeTrue();
  expect(check(pl, new Filter<NTag["key"]>("all").add("tag+one").add("tag+two"))).toBeTrue();
  expect(check(pl, new Filter<NTag["key"]>("all").add("tag+three"))).toBeFalse();
  expect(check(pl, new Filter<NTag["key"]>("all").add("tag+two"))).toBeTrue();
  expect(check(pl, new Filter<NTag["key"]>("all").add("tag+two").add("tag+three"))).toBeFalse();

  expect(check(pl, new Filter<NTag["key"]>("any").add("tag+one"))).toBeTrue();
  expect(check(pl, new Filter<NTag["key"]>("any").add("tag+one").add("tag+two"))).toBeTrue();
  expect(check(pl, new Filter<NTag["key"]>("any").add("tag+three"))).toBeFalse();
  expect(check(pl, new Filter<NTag["key"]>("any").add("tag+two"))).toBeTrue();
  expect(check(pl, new Filter<NTag["key"]>("any").add("tag+two").add("tag+three"))).toBeTrue();
});

test("typeSystems", () => {
  const pg = new PlangsGraph();
  const pl = pg.nodes.pl.set("pl+myplang").addTypeSystems(["tsys+one", "tsys+two"]);
  const { typeSystems: check } = PLANG_FACET_PREDICATES;

  expect(check(pl, new Filter<NTsys["key"]>("all").add("tsys+one"))).toBeTrue();
  expect(check(pl, new Filter<NTsys["key"]>("all").add("tsys+one").add("tsys+two"))).toBeTrue();
  expect(check(pl, new Filter<NTsys["key"]>("all").add("tsys+three"))).toBeFalse();
  expect(check(pl, new Filter<NTsys["key"]>("all").add("tsys+two"))).toBeTrue();
  expect(check(pl, new Filter<NTsys["key"]>("all").add("tsys+two").add("tsys+three"))).toBeFalse();

  expect(check(pl, new Filter<NTsys["key"]>("any").add("tsys+one"))).toBeTrue();
  expect(check(pl, new Filter<NTsys["key"]>("any").add("tsys+one").add("tsys+two"))).toBeTrue();
  expect(check(pl, new Filter<NTsys["key"]>("any").add("tsys+three"))).toBeFalse();
  expect(check(pl, new Filter<NTsys["key"]>("any").add("tsys+two"))).toBeTrue();
  expect(check(pl, new Filter<NTsys["key"]>("any").add("tsys+two").add("tsys+three"))).toBeTrue();
});

test("writtenIn", () => {
  const pg = new PlangsGraph();
  const pl = pg.nodes.pl.set("pl+myplang").addWrittenIn(["pl+one", "pl+two"]);
  const { writtenIn: check } = PLANG_FACET_PREDICATES;

  expect(check(pl, new Filter<NPlang["key"]>("all").add("pl+one"))).toBeTrue();
  expect(check(pl, new Filter<NPlang["key"]>("all").add("pl+one").add("pl+two"))).toBeTrue();
  expect(check(pl, new Filter<NPlang["key"]>("all").add("pl+three"))).toBeFalse();
  expect(check(pl, new Filter<NPlang["key"]>("all").add("pl+two"))).toBeTrue();
  expect(check(pl, new Filter<NPlang["key"]>("all").add("pl+two").add("pl+three"))).toBeFalse();

  expect(check(pl, new Filter<NPlang["key"]>("any").add("pl+one"))).toBeTrue();
  expect(check(pl, new Filter<NPlang["key"]>("any").add("pl+one").add("pl+two"))).toBeTrue();
  expect(check(pl, new Filter<NPlang["key"]>("any").add("pl+three"))).toBeFalse();
  expect(check(pl, new Filter<NPlang["key"]>("any").add("pl+two"))).toBeTrue();
  expect(check(pl, new Filter<NPlang["key"]>("any").add("pl+two").add("pl+three"))).toBeTrue();
});

test("plangMatches", () => {
  const pg = new PlangsGraph();
  const plang = pg.nodes.pl.set("pl+plang", { name: "MyPlang" }).addWrittenIn(["pl+one", "pl+two"]);
  const other = pg.nodes.pl.set("pl+other", { name: "MyOtherPlang" }).addWrittenIn(["pl+two"]);

  const writtenIn = new Filter<NPlang["key"]>("any").add("pl+one").add("pl+two");

  const filters = new Map(Object.entries({ writtenIn }) as [PlangFacetKey, AnyValue][]);

  expect(plangMatches(plang, filters)).toBeTrue();
  expect(plangMatches(other, filters)).toBeTrue();

  writtenIn.mode = "all";

  expect(plangMatches(plang, filters)).toBeTrue();
  expect(plangMatches(other, filters)).toBeFalse();

  const plangName = new ValRegExp(/myplang/i);

  writtenIn.mode = "any";
  filters.set("plangName", plangName);

  expect(plangMatches(plang, filters)).toBeTrue();
  expect(plangMatches(other, filters)).toBeFalse();
});

test("Plangs.plangs", () => {
  const pg = new PlangsGraph();
  const plang = pg.nodes.pl.set("pl+plang", { name: "MyPlang" }).addWrittenIn(["pl+one", "pl+two"]);
  const other = pg.nodes.pl.set("pl+other", { name: "MyOtherPlang" }).addWrittenIn(["pl+two"]);

  const writtenIn = new Filter<NPlang["key"]>("any").add("pl+one").add("pl+two");
  const filters = new Map(Object.entries({ writtenIn }) as [PlangFacetKey, AnyValue][]);

  expect(pg.plangs(filters)).toEqual(new Set([plang.key, other.key]));
  expect(pg.plangs(filters, 1)).toEqual(new Set([plang.key]));
  expect(pg.plangs(filters, 1000)).toEqual(new Set([plang.key, other.key]));
});
