import { expect, test } from "bun:test";

import { Filter } from "packages/auxiliar/src/filters";

import { type AnyValue, ValBool, ValNumber, ValRegExp } from "packages/auxiliar/src/value";
import { type NLicense, type NParadigm, type NPlang, type NPlatform, type NTag, type NTsys, PlangsGraph } from ".";
import { PLANG_FACET_PREDICATES, type PlangFacetKey, plangMatches } from "./facets";

test("compilesTo", () => {
  const pg = new PlangsGraph();
  const pl = pg.nodes.pl.set("pl+myplang").addCompilesTo(["pl+one", "pl+two"]);
  const { compilesTo: check } = PLANG_FACET_PREDICATES;

  expect(check(pl, new Filter<NPlang["key"]>("all").add("pl+one"))).toBe(true);
  expect(check(pl, new Filter<NPlang["key"]>("all").add("pl+one").add("pl+two"))).toBe(true);
  expect(check(pl, new Filter<NPlang["key"]>("all").add("pl+three"))).toBe(false);
  expect(check(pl, new Filter<NPlang["key"]>("all").add("pl+two"))).toBe(true);
  expect(check(pl, new Filter<NPlang["key"]>("all").add("pl+two").add("pl+three"))).toBe(false);

  expect(check(pl, new Filter<NPlang["key"]>("any").add("pl+one"))).toBe(true);
  expect(check(pl, new Filter<NPlang["key"]>("any").add("pl+one").add("pl+two"))).toBe(true);
  expect(check(pl, new Filter<NPlang["key"]>("any").add("pl+three"))).toBe(false);
  expect(check(pl, new Filter<NPlang["key"]>("any").add("pl+two"))).toBe(true);
  expect(check(pl, new Filter<NPlang["key"]>("any").add("pl+two").add("pl+three"))).toBe(true);
});

test("createdRecently", () => {
  const pg = new PlangsGraph();
  const pl = pg.nodes.pl.set("pl+myplang", { year: 2020 });
  const { createdRecently: check } = PLANG_FACET_PREDICATES;

  expect(check(pl, new ValNumber(2019))).toBe(true);
  expect(check(pl, new ValNumber(2020))).toBe(true);
  expect(check(pl, new ValNumber(2021))).toBe(false);
  expect(check(pl, new ValNumber(2022))).toBe(false);
});

test("creationYear", () => {
  const pg = new PlangsGraph();
  const pl = pg.nodes.pl.set("pl+myplang", { year: 2020 });
  const { creationYear: check } = PLANG_FACET_PREDICATES;

  expect(check(pl, new Filter<number>("all").add(2019))).toBe(false);
  expect(check(pl, new Filter<number>("all").add(2020))).toBe(true);
  expect(check(pl, new Filter<number>("all").add(2021))).toBe(false);
  expect(check(pl, new Filter<number>("all").add(2022))).toBe(false);
  expect(check(pl, new Filter<number>("any").add(2019))).toBe(false);
  expect(check(pl, new Filter<number>("any").add(2020))).toBe(true);
  expect(check(pl, new Filter<number>("any").add(2021))).toBe(false);
  expect(check(pl, new Filter<number>("any").add(2022))).toBe(false);

  expect(check(pl, new Filter<number>("all").add(2019).add(2020))).toBe(false);
  expect(check(pl, new Filter<number>("all").add(2020).add(2021))).toBe(false);
  expect(check(pl, new Filter<number>("all").add(2021).add(2022))).toBe(false);
  expect(check(pl, new Filter<number>("all").add(2022).add(2023))).toBe(false);
  expect(check(pl, new Filter<number>("any").add(2019).add(2020))).toBe(true);
  expect(check(pl, new Filter<number>("any").add(2020).add(2021))).toBe(true);
  expect(check(pl, new Filter<number>("any").add(2021).add(2022))).toBe(false);
  expect(check(pl, new Filter<number>("any").add(2022).add(2023))).toBe(false);
});

test("dialectOf", () => {
  const pg = new PlangsGraph();
  const pl = pg.nodes.pl.set("pl+myplang").addDialectOf(["pl+one", "pl+two"]);
  const { dialectOf: check } = PLANG_FACET_PREDICATES;

  expect(check(pl, new Filter<NPlang["key"]>("all").add("pl+one"))).toBe(true);
  expect(check(pl, new Filter<NPlang["key"]>("all").add("pl+one").add("pl+two"))).toBe(true);
  expect(check(pl, new Filter<NPlang["key"]>("all").add("pl+three"))).toBe(false);
  expect(check(pl, new Filter<NPlang["key"]>("all").add("pl+two"))).toBe(true);
  expect(check(pl, new Filter<NPlang["key"]>("all").add("pl+two").add("pl+three"))).toBe(false);

  expect(check(pl, new Filter<NPlang["key"]>("any").add("pl+one"))).toBe(true);
  expect(check(pl, new Filter<NPlang["key"]>("any").add("pl+one").add("pl+two"))).toBe(true);
  expect(check(pl, new Filter<NPlang["key"]>("any").add("pl+three"))).toBe(false);
  expect(check(pl, new Filter<NPlang["key"]>("any").add("pl+two"))).toBe(true);
  expect(check(pl, new Filter<NPlang["key"]>("any").add("pl+two").add("pl+three"))).toBe(true);
});

test("extensions", () => {
  const pg = new PlangsGraph();
  const pl = pg.nodes.pl.set("pl+pascal", { extensions: [".pas", ".tpu"] });
  const { extensions: check } = PLANG_FACET_PREDICATES;

  expect(check(pl, new Filter<string>("all").add(".js").add(".jsx"))).toBe(false);
  expect(check(pl, new Filter<string>("all").add(".pas"))).toBe(true);
  expect(check(pl, new Filter<string>("all").add(".pas").add(".js"))).toBe(false);
  expect(check(pl, new Filter<string>("all").add(".pas").add(".tpu"))).toBe(true);

  expect(check(pl, new Filter<string>("any").add(".js").add(".jsx"))).toBe(false);
  expect(check(pl, new Filter<string>("any").add(".pas"))).toBe(true);
  expect(check(pl, new Filter<string>("any").add(".pas").add(".js"))).toBe(true);
  expect(check(pl, new Filter<string>("any").add(".pas").add(".tpu"))).toBe(true);
});

test("hasLogo", () => {
  const pg = new PlangsGraph();
  const java = pg.nodes.pl.set("pl+java");
  const pascal = pg.nodes.pl.set("pl+pascal").addImages([{ kind: "logo", title: "Logo", url: "https://plangs.page/logo.png" }]);
  const { hasLogo: check } = PLANG_FACET_PREDICATES;

  expect(check(java, new ValBool(false))).toBe(true);
  expect(check(java, new ValBool(true))).toBe(false);
  expect(check(pascal, new ValBool(false))).toBe(false);
  expect(check(pascal, new ValBool(true))).toBe(true);
});

test("hasWikipedia", () => {
  const pg = new PlangsGraph();
  const java = pg.nodes.pl.set("pl+java");
  const pascal = pg.nodes.pl
    .set("pl+pascal")
    .addWebsites([{ kind: "wikipedia", title: "Wikipedia", href: "https://en.wikipedia.org/wiki/Pascal_(programming_language)" }]);
  const { hasWikipedia: check } = PLANG_FACET_PREDICATES;

  expect(check(java, new ValBool(false))).toBe(true);
  expect(check(java, new ValBool(true))).toBe(false);
  expect(check(pascal, new ValBool(false))).toBe(false);
  expect(check(pascal, new ValBool(true))).toBe(true);
});

test("implements", () => {
  const pg = new PlangsGraph();
  const pl = pg.nodes.pl.set("pl+myplang").addImplements(["pl+one", "pl+two"]);
  const { implements: check } = PLANG_FACET_PREDICATES;

  expect(check(pl, new Filter<NPlang["key"]>("all").add("pl+one"))).toBe(true);
  expect(check(pl, new Filter<NPlang["key"]>("all").add("pl+one").add("pl+two"))).toBe(true);
  expect(check(pl, new Filter<NPlang["key"]>("all").add("pl+three"))).toBe(false);
  expect(check(pl, new Filter<NPlang["key"]>("all").add("pl+two"))).toBe(true);
  expect(check(pl, new Filter<NPlang["key"]>("all").add("pl+two").add("pl+three"))).toBe(false);

  expect(check(pl, new Filter<NPlang["key"]>("any").add("pl+one"))).toBe(true);
  expect(check(pl, new Filter<NPlang["key"]>("any").add("pl+one").add("pl+two"))).toBe(true);
  expect(check(pl, new Filter<NPlang["key"]>("any").add("pl+three"))).toBe(false);
  expect(check(pl, new Filter<NPlang["key"]>("any").add("pl+two"))).toBe(true);
  expect(check(pl, new Filter<NPlang["key"]>("any").add("pl+two").add("pl+three"))).toBe(true);
});

test("influenced", () => {
  const pg = new PlangsGraph();
  const pl = pg.nodes.pl.set("pl+myplang").addInfluencedBy(["pl+one", "pl+two"]);
  const other = pg.nodes.pl.set("pl+other").addInfluencedBy(["pl+one", "pl+two"]);
  const one = pg.nodes.pl.set("pl+one");
  const { influenced: check } = PLANG_FACET_PREDICATES;

  expect(check(one, new Filter<NPlang["key"]>("all"))).toBe(true);
  expect(check(one, new Filter<NPlang["key"]>("all").add("pl+myplang").add("pl+other"))).toBe(true);
  expect(check(one, new Filter<NPlang["key"]>("any"))).toBe(false);
  expect(check(one, new Filter<NPlang["key"]>("any").add("pl+myplang").add("pl+other"))).toBe(true);
  expect(check(one, new Filter<NPlang["key"]>("any").add("pl+two").add("pl+three"))).toBe(false);

  expect(check(other, new Filter<NPlang["key"]>("all"))).toBe(true);
  expect(check(other, new Filter<NPlang["key"]>("all").add("pl+one").add("pl+two"))).toBe(false);
  expect(check(other, new Filter<NPlang["key"]>("any"))).toBe(false);
  expect(check(other, new Filter<NPlang["key"]>("any").add("pl+one").add("pl+two"))).toBe(false);

  expect(check(pl, new Filter<NPlang["key"]>("all"))).toBe(true);
  expect(check(pl, new Filter<NPlang["key"]>("all").add("pl+two").add("pl+three"))).toBe(false);
  expect(check(pl, new Filter<NPlang["key"]>("any"))).toBe(false);
  expect(check(pl, new Filter<NPlang["key"]>("any").add("pl+two").add("pl+three"))).toBe(false);
});

test("influencedBy", () => {
  const pg = new PlangsGraph();
  const pl = pg.nodes.pl.set("pl+myplang").addInfluencedBy(["pl+one", "pl+two"]);
  const { influencedBy: check } = PLANG_FACET_PREDICATES;

  expect(check(pl, new Filter<NPlang["key"]>("all").add("pl+one"))).toBe(true);
  expect(check(pl, new Filter<NPlang["key"]>("all").add("pl+one").add("pl+two"))).toBe(true);
  expect(check(pl, new Filter<NPlang["key"]>("all").add("pl+three"))).toBe(false);
  expect(check(pl, new Filter<NPlang["key"]>("all").add("pl+two"))).toBe(true);
  expect(check(pl, new Filter<NPlang["key"]>("all").add("pl+two").add("pl+three"))).toBe(false);

  expect(check(pl, new Filter<NPlang["key"]>("any").add("pl+one"))).toBe(true);
  expect(check(pl, new Filter<NPlang["key"]>("any").add("pl+one").add("pl+two"))).toBe(true);
  expect(check(pl, new Filter<NPlang["key"]>("any").add("pl+three"))).toBe(false);
  expect(check(pl, new Filter<NPlang["key"]>("any").add("pl+two"))).toBe(true);
  expect(check(pl, new Filter<NPlang["key"]>("any").add("pl+two").add("pl+three"))).toBe(true);
});

test("isMainstream", () => {
  const pg = new PlangsGraph();
  const java = pg.nodes.pl.set("pl+java", { isMainstream: true });
  const rascal = pg.nodes.pl.set("pl+rascal");
  const { isMainstream: check } = PLANG_FACET_PREDICATES;

  expect(check(java, new ValBool(false))).toBe(false);
  expect(check(java, new ValBool(true))).toBe(true);
  expect(check(rascal, new ValBool(false))).toBe(true);
  expect(check(rascal, new ValBool(true))).toBe(false);
});

test("isTranspiler", () => {
  const pg = new PlangsGraph();
  const typescript = pg.nodes.pl.set("pl+typescript", { isTranspiler: true });
  const rascal = pg.nodes.pl.set("pl+rascal");
  const { isTranspiler: check } = PLANG_FACET_PREDICATES;

  expect(check(typescript, new ValBool(false))).toBe(false);
  expect(check(typescript, new ValBool(true))).toBe(true);
  expect(check(rascal, new ValBool(false))).toBe(true);
  expect(check(rascal, new ValBool(true))).toBe(false);
});

test("licenses", () => {
  const pg = new PlangsGraph();
  const pl = pg.nodes.pl.set("pl+myplang").addLicenses(["license+one", "license+two"]);
  const { licenses: check } = PLANG_FACET_PREDICATES;

  expect(check(pl, new Filter<NLicense["key"]>("all").add("license+one"))).toBe(true);
  expect(check(pl, new Filter<NLicense["key"]>("all").add("license+one").add("license+two"))).toBe(true);
  expect(check(pl, new Filter<NLicense["key"]>("all").add("license+three"))).toBe(false);
  expect(check(pl, new Filter<NLicense["key"]>("all").add("license+two"))).toBe(true);
  expect(check(pl, new Filter<NLicense["key"]>("all").add("license+two").add("license+three"))).toBe(false);

  expect(check(pl, new Filter<NLicense["key"]>("any").add("license+one"))).toBe(true);
  expect(check(pl, new Filter<NLicense["key"]>("any").add("license+one").add("license+two"))).toBe(true);
  expect(check(pl, new Filter<NLicense["key"]>("any").add("license+three"))).toBe(false);
  expect(check(pl, new Filter<NLicense["key"]>("any").add("license+two"))).toBe(true);
  expect(check(pl, new Filter<NLicense["key"]>("any").add("license+two").add("license+three"))).toBe(true);
});

test("paradigms", () => {
  const pg = new PlangsGraph();
  const pl = pg.nodes.pl.set("pl+myplang").addParadigms(["paradigm+one", "paradigm+two"]);
  const { paradigms: check } = PLANG_FACET_PREDICATES;

  expect(check(pl, new Filter<NParadigm["key"]>("all").add("paradigm+one"))).toBe(true);
  expect(check(pl, new Filter<NParadigm["key"]>("all").add("paradigm+one").add("paradigm+two"))).toBe(true);
  expect(check(pl, new Filter<NParadigm["key"]>("all").add("paradigm+three"))).toBe(false);
  expect(check(pl, new Filter<NParadigm["key"]>("all").add("paradigm+two"))).toBe(true);
  expect(check(pl, new Filter<NParadigm["key"]>("all").add("paradigm+two").add("paradigm+three"))).toBe(false);

  expect(check(pl, new Filter<NParadigm["key"]>("any").add("paradigm+one"))).toBe(true);
  expect(check(pl, new Filter<NParadigm["key"]>("any").add("paradigm+one").add("paradigm+two"))).toBe(true);
  expect(check(pl, new Filter<NParadigm["key"]>("any").add("paradigm+three"))).toBe(false);
  expect(check(pl, new Filter<NParadigm["key"]>("any").add("paradigm+two"))).toBe(true);
  expect(check(pl, new Filter<NParadigm["key"]>("any").add("paradigm+two").add("paradigm+three"))).toBe(true);
});

test("plangName", () => {
  const pg = new PlangsGraph();
  const typescript = pg.nodes.pl.set("pl+typescript", { name: "TypeScript" });
  const rascal = pg.nodes.pl.set("pl+rascal", { name: "Rascal" });
  const { plangName: check } = PLANG_FACET_PREDICATES;

  expect(check(rascal, new ValRegExp(/Rascal/))).toBe(true);
  expect(check(rascal, new ValRegExp(/TypeScript/))).toBe(false);
  expect(check(rascal, new ValRegExp(/rascal/i))).toBe(true);
  expect(check(rascal, new ValRegExp(/typescript/i))).toBe(false);
  expect(check(rascal, new ValRegExp(/xyz/i))).toBe(false);

  expect(check(typescript, new ValRegExp(/Rascal/))).toBe(false);
  expect(check(typescript, new ValRegExp(/TypeScript/))).toBe(true);
  expect(check(typescript, new ValRegExp(/rascal/i))).toBe(false);
  expect(check(typescript, new ValRegExp(/typescript/i))).toBe(true);
  expect(check(typescript, new ValRegExp(/xyz/i))).toBe(false);
});

test("platforms", () => {
  const pg = new PlangsGraph();
  const pl = pg.nodes.pl.set("pl+myplang").addPlatforms(["plat+one", "plat+two"]);
  const { platforms: check } = PLANG_FACET_PREDICATES;

  expect(check(pl, new Filter<NPlatform["key"]>("all").add("plat+one"))).toBe(true);
  expect(check(pl, new Filter<NPlatform["key"]>("all").add("plat+one").add("plat+two"))).toBe(true);
  expect(check(pl, new Filter<NPlatform["key"]>("all").add("plat+three"))).toBe(false);
  expect(check(pl, new Filter<NPlatform["key"]>("all").add("plat+two"))).toBe(true);
  expect(check(pl, new Filter<NPlatform["key"]>("all").add("plat+two").add("plat+three"))).toBe(false);

  expect(check(pl, new Filter<NPlatform["key"]>("any").add("plat+one"))).toBe(true);
  expect(check(pl, new Filter<NPlatform["key"]>("any").add("plat+one").add("plat+two"))).toBe(true);
  expect(check(pl, new Filter<NPlatform["key"]>("any").add("plat+three"))).toBe(false);
  expect(check(pl, new Filter<NPlatform["key"]>("any").add("plat+two"))).toBe(true);
  expect(check(pl, new Filter<NPlatform["key"]>("any").add("plat+two").add("plat+three"))).toBe(true);
});

test("releasedRecently", () => {
  const pg = new PlangsGraph();
  const pl = pg.nodes.pl.set("pl+myplang").addReleases([{ date: "2020-01-01", version: "1.0" }]);
  const { releasedRecently: check } = PLANG_FACET_PREDICATES;

  expect(check(pl, new ValNumber(2019))).toBe(true);
  expect(check(pl, new ValNumber(2020))).toBe(true);
  expect(check(pl, new ValNumber(2021))).toBe(false);
  expect(check(pl, new ValNumber(2022))).toBe(false);
});

test("tags", () => {
  const pg = new PlangsGraph();
  const pl = pg.nodes.pl.set("pl+myplang").addTags(["tag+one", "tag+two"]);
  const { tags: check } = PLANG_FACET_PREDICATES;

  expect(check(pl, new Filter<NTag["key"]>("all").add("tag+one"))).toBe(true);
  expect(check(pl, new Filter<NTag["key"]>("all").add("tag+one").add("tag+two"))).toBe(true);
  expect(check(pl, new Filter<NTag["key"]>("all").add("tag+three"))).toBe(false);
  expect(check(pl, new Filter<NTag["key"]>("all").add("tag+two"))).toBe(true);
  expect(check(pl, new Filter<NTag["key"]>("all").add("tag+two").add("tag+three"))).toBe(false);

  expect(check(pl, new Filter<NTag["key"]>("any").add("tag+one"))).toBe(true);
  expect(check(pl, new Filter<NTag["key"]>("any").add("tag+one").add("tag+two"))).toBe(true);
  expect(check(pl, new Filter<NTag["key"]>("any").add("tag+three"))).toBe(false);
  expect(check(pl, new Filter<NTag["key"]>("any").add("tag+two"))).toBe(true);
  expect(check(pl, new Filter<NTag["key"]>("any").add("tag+two").add("tag+three"))).toBe(true);
});

test("typeSystems", () => {
  const pg = new PlangsGraph();
  const pl = pg.nodes.pl.set("pl+myplang").addTypeSystems(["tsys+one", "tsys+two"]);
  const { typeSystems: check } = PLANG_FACET_PREDICATES;

  expect(check(pl, new Filter<NTsys["key"]>("all").add("tsys+one"))).toBe(true);
  expect(check(pl, new Filter<NTsys["key"]>("all").add("tsys+one").add("tsys+two"))).toBe(true);
  expect(check(pl, new Filter<NTsys["key"]>("all").add("tsys+three"))).toBe(false);
  expect(check(pl, new Filter<NTsys["key"]>("all").add("tsys+two"))).toBe(true);
  expect(check(pl, new Filter<NTsys["key"]>("all").add("tsys+two").add("tsys+three"))).toBe(false);

  expect(check(pl, new Filter<NTsys["key"]>("any").add("tsys+one"))).toBe(true);
  expect(check(pl, new Filter<NTsys["key"]>("any").add("tsys+one").add("tsys+two"))).toBe(true);
  expect(check(pl, new Filter<NTsys["key"]>("any").add("tsys+three"))).toBe(false);
  expect(check(pl, new Filter<NTsys["key"]>("any").add("tsys+two"))).toBe(true);
  expect(check(pl, new Filter<NTsys["key"]>("any").add("tsys+two").add("tsys+three"))).toBe(true);
});

test("writtenIn", () => {
  const pg = new PlangsGraph();
  const pl = pg.nodes.pl.set("pl+myplang").addWrittenIn(["pl+one", "pl+two"]);
  const { writtenIn: check } = PLANG_FACET_PREDICATES;

  expect(check(pl, new Filter<NPlang["key"]>("all").add("pl+one"))).toBe(true);
  expect(check(pl, new Filter<NPlang["key"]>("all").add("pl+one").add("pl+two"))).toBe(true);
  expect(check(pl, new Filter<NPlang["key"]>("all").add("pl+three"))).toBe(false);
  expect(check(pl, new Filter<NPlang["key"]>("all").add("pl+two"))).toBe(true);
  expect(check(pl, new Filter<NPlang["key"]>("all").add("pl+two").add("pl+three"))).toBe(false);

  expect(check(pl, new Filter<NPlang["key"]>("any").add("pl+one"))).toBe(true);
  expect(check(pl, new Filter<NPlang["key"]>("any").add("pl+one").add("pl+two"))).toBe(true);
  expect(check(pl, new Filter<NPlang["key"]>("any").add("pl+three"))).toBe(false);
  expect(check(pl, new Filter<NPlang["key"]>("any").add("pl+two"))).toBe(true);
  expect(check(pl, new Filter<NPlang["key"]>("any").add("pl+two").add("pl+three"))).toBe(true);
});

test("plangMatches", () => {
  const pg = new PlangsGraph();
  const plang = pg.nodes.pl.set("pl+plang", { name: "MyPlang" }).addWrittenIn(["pl+one", "pl+two"]);
  const other = pg.nodes.pl.set("pl+other", { name: "MyOtherPlang" }).addWrittenIn(["pl+two"]);

  const writtenIn = new Filter<NPlang["key"]>("any").add("pl+one").add("pl+two");

  const filters = new Map(Object.entries({ writtenIn }) as [PlangFacetKey, AnyValue][]);

  expect(plangMatches(plang, filters)).toBe(true);
  expect(plangMatches(other, filters)).toBe(true);

  writtenIn.mode = "all";

  expect(plangMatches(plang, filters)).toBe(true);
  expect(plangMatches(other, filters)).toBe(false);

  const plangName = new ValRegExp(/myplang/i);

  writtenIn.mode = "any";
  filters.set("plangName", plangName);

  expect(plangMatches(plang, filters)).toBe(true);
  expect(plangMatches(other, filters)).toBe(false);
});
