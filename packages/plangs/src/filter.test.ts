import { expect, test } from "bun:test";

import { Filter } from "@plangs/graph/auxiliar";

import type { NLicense, NParadigm, NPlang, NPlatform, NTag, NTsys } from ".";
import { PlangsGraph } from ".";
import { PlangFilters } from "./filter";

function createGraph() {
  const g = new PlangsGraph();

  g.nodes.pl
    .set("pl+javascript", {
      name: "JavaScript",
      description:
        "JavaScript (/ˈdʒɑːvəskrɪpt/), often abbreviated as JS, is a programming language and core technology of the Web, alongside HTML and CSS. 99% of websites use JavaScript on the client side for webpage behavior.",
      isMainstream: true,
      firstAppeared: "1995-01-01",
      extensions: [".cjs", ".js", ".mjs"],
      websites: [
        {
          href: "https://ecma-international.org/publications-and-standards/standards/ecma-262/",
          title: "ecma-international.org/publications-and-standards/standards/ecma-262/",
          kind: "other",
        },
      ],
    })
    .addImplements(["pl+ecmascript"])
    .addInfluencedBy(["pl+awk", "pl+c", "pl+lisp", "pl+lua", "pl+moonscript", "pl+perl", "pl+r5rs", "pl+scheme", "pl+self"])
    .addParadigms(["paradigm+event-driven", "paradigm+functional", "paradigm+imperative", "paradigm+multi", "paradigm+oop", "paradigm+procedural"])
    .addTypeSystems(["tsys+duck", "tsys+dynamic", "tsys+weak"])
    .addReleases([{ version: "ES12", date: "2020-01-01" }])
    .addImages([{ kind: "other", title: "JavaScript", url: "/images/plangs/j/javascript/other.png" }])
    .addDialectOf(["pl+some-other-language"])
    .addInfluencedBy(["pl+influence-a"])
    .addLicenses(["license+a"])
    .addParadigms(["paradigm+a"])
    .addPlatforms(["plat+web"])
    .addTags(["tag+frontend"])
    .addTypeSystems(["tsys+dynamic"]);

  g.nodes.pl
    .set("pl+typescript", {
      name: "TypeScript",
      description:
        "TypeScript is a free and open-source high-level programming language developed by Microsoft that adds static typing with optional type annotations to JavaScript. It is designed for the development of large applications and transpiles to JavaScript. Because TypeScript is a superset of JavaScript, all JavaScript programs are syntactically valid TypeScript, but they can fail to type-check for safety reasons.",
      isTranspiler: true,
      isMainstream: true,
      firstAppeared: "2012-01-01",
      extensions: [".cts", ".mts", ".ts", ".tsx", ".d.ts"],
      websites: [{ href: "https://www.typescriptlang.org/", title: "www.typescriptlang.org", kind: "homepage" }],
    })
    .addInfluencedBy(["pl+actionscript", "pl+c-sharp", "pl+f-sharp", "pl+javascript"])
    .addLicenses(["license+apache"])
    .addParadigms(["paradigm+functional", "paradigm+imperative", "paradigm+multi", "paradigm+oop"])
    .addTypeSystems(["tsys+duck", "tsys+gradual", "tsys+structural"])
    .addImages([{ kind: "logo", title: "TypeScript", url: "/images/plangs/j/javascript/other.png" }])
    .addDialectOf(["pl+javascript", "pl+some-other-language"])
    .addInfluencedBy(["pl+influence-b"])
    .addLicenses(["license+b"])
    .addParadigms(["paradigm+b"])
    .addTags(["tag+frontend"])
    .addTypeSystems(["tsys+static"])
    .addWrittenIn(["pl+typescript"]);

  g.nodes.pl
    .set("pl+pascal", {
      name: "Pascal",
      description:
        "Pascal is an imperative and procedural programming language, designed by Niklaus Wirth as a small, efficient language intended to encourage good programming practices using structured programming and data structuring. It is named after French mathematician, philosopher and physicist Blaise Pascal.",
      firstAppeared: "1970-01-01",
      extensions: [".pas"],
      websites: [
        {
          href: "https://en.wikipedia.org/wiki/Pascal_(programming_language)#ISO/IEC_10206:1990_Extended_Pascal",
          title: "Pascal",
          kind: "wikipedia",
        },
      ],
    })
    .addInfluencedBy(["pl+algol", "pl+simula"])
    .addParadigms(["paradigm+imperative", "paradigm+structured"])
    .addTypeSystems(["tsys+safe", "tsys+static", "tsys+strong"])
    .addReleases([{ version: "ISO/IEC 10206:1990 Extended Pascal", date: "1990-01-01" }])
    .addInfluencedBy(["pl+influence-b"])
    .addLicenses(["license+b"])
    .addParadigms(["paradigm+a", "paradigm+b"])
    .addExtensions([".tpu"])
    .addPlatforms(["plat+backend"])
    .addTypeSystems(["tsys+static"])
    .addWrittenIn(["pl+assembly", "pl+c"]);

  g.nodes.tsys.set("tsys+weak", { keywords: ["weak"] });
  g.nodes.tsys.set("tsys+dynamic", { keywords: ["dynamic"] });
  g.nodes.tsys.set("tsys+strong", { keywords: ["strongly-typed"] });
  g.nodes.tsys.set("tsys+adt", { keywords: ["sum types"] });

  return g;
}

test("empty filters match all languages", () => {
  const [g, f] = [createGraph(), new PlangFilters()];
  expect(g.plangs(f)).toEqual(new Set(["pl+javascript", "pl+pascal", "pl+typescript"]));
});

test("filters languages by name", () => {
  const [g, f] = [createGraph(), new PlangFilters()];

  f.filters.plangName.value = /script/i;
  expect(g.plangs(f)).toEqual(new Set(["pl+javascript", "pl+typescript"]));

  f.filters.plangName.value = /pascal/i;
  expect(g.plangs(f)).toEqual(new Set(["pl+pascal"]));

  f.filters.plangName.value = undefined;
  expect(g.plangs(f)).toEqual(new Set(["pl+javascript", "pl+pascal", "pl+typescript"]));
});

test("filters languages by first appeareance date", () => {
  const [g, f] = [createGraph(), new PlangFilters()];

  f.filters.appearedAfter.value = "2000-01-01";
  expect(g.plangs(f)).toEqual(new Set(["pl+typescript"]));

  f.filters.appearedAfter.value = "1990-01-01";
  expect(g.plangs(f)).toEqual(new Set(["pl+javascript", "pl+typescript"]));

  f.filters.appearedAfter.value = "1970-01-01";
  expect(g.plangs(f)).toEqual(new Set(["pl+javascript", "pl+pascal", "pl+typescript"]));

  f.filters.appearedAfter.value = "1960-01-01";
  expect(g.plangs(f)).toEqual(new Set(["pl+javascript", "pl+pascal", "pl+typescript"]));

  f.filters.appearedAfter.value = undefined;
  expect(g.plangs(f)).toEqual(new Set(["pl+javascript", "pl+pascal", "pl+typescript"]));
});

test("filters languages by min release date", () => {
  const [g, f] = [createGraph(), new PlangFilters()];

  f.filters.releasedAfter.value = "1989-11-01";
  expect(g.plangs(f)).toEqual(new Set(["pl+javascript", "pl+pascal"]));

  f.filters.releasedAfter.value = "2010-12-31";
  expect(g.plangs(f)).toEqual(new Set(["pl+javascript"]));

  f.filters.releasedAfter.value = undefined;
  expect(g.plangs(f)).toEqual(new Set(["pl+javascript", "pl+pascal", "pl+typescript"]));
});

test("filters languages by whether they have a logo", () => {
  const [g, f] = [createGraph(), new PlangFilters()];

  f.filters.hasLogo.value = true;
  expect(g.plangs(f)).toEqual(new Set(["pl+typescript"]));

  f.filters.hasLogo.value = false;
  expect(g.plangs(f)).toEqual(new Set(["pl+javascript", "pl+pascal"]));

  f.filters.hasLogo.value = undefined;
  expect(g.plangs(f)).toEqual(new Set(["pl+javascript", "pl+pascal", "pl+typescript"]));
});

test("filters languages by whether they have any releases", () => {
  const [g, f] = [createGraph(), new PlangFilters()];

  f.filters.hasReleases.value = true;
  expect(g.plangs(f)).toEqual(new Set(["pl+javascript", "pl+pascal"]));

  f.filters.hasReleases.value = false;
  expect(g.plangs(f)).toEqual(new Set(["pl+typescript"]));

  f.filters.hasReleases.value = undefined;
  expect(g.plangs(f)).toEqual(new Set(["pl+javascript", "pl+pascal", "pl+typescript"]));
});

test("filters languages by whether they have a wikipedia page", () => {
  const [g, f] = [createGraph(), new PlangFilters()];

  f.filters.hasWikipedia.value = true;
  expect(g.plangs(f)).toEqual(new Set(["pl+pascal"]));

  f.filters.hasWikipedia.value = false;
  expect(g.plangs(f)).toEqual(new Set(["pl+javascript", "pl+typescript"]));

  f.filters.hasWikipedia.value = undefined;
  expect(g.plangs(f)).toEqual(new Set(["pl+javascript", "pl+pascal", "pl+typescript"]));
});

test("filters transpilers", () => {
  const [g, f] = [createGraph(), new PlangFilters()];

  f.filters.isTranspiler.value = true;
  expect(g.plangs(f)).toEqual(new Set(["pl+typescript"]));

  f.filters.isTranspiler.value = false;
  expect(g.plangs(f)).toEqual(new Set(["pl+javascript", "pl+pascal"]));

  f.filters.isTranspiler.value = undefined;
  expect(g.plangs(f)).toEqual(new Set(["pl+javascript", "pl+pascal", "pl+typescript"]));
});

test("filters mainstream languages", () => {
  const [g, f] = [createGraph(), new PlangFilters()];

  f.filters.isMainstream.value = true;
  expect(g.plangs(f)).toEqual(new Set(["pl+javascript", "pl+typescript"]));

  f.filters.isMainstream.value = false;
  expect(g.plangs(f)).toEqual(new Set(["pl+pascal"]));

  f.filters.isMainstream.value = undefined;
  expect(g.plangs(f)).toEqual(new Set(["pl+javascript", "pl+pascal", "pl+typescript"]));
});

test("filters languages by dialect", () => {
  const [g, f] = [createGraph(), new PlangFilters()];

  f.filters.dialectOf.value = new Filter<NPlang["key"]>("any", new Set());
  expect(g.plangs(f)).toEqual(new Set(["pl+javascript", "pl+pascal", "pl+typescript"]));

  f.filters.dialectOf.value = new Filter<NPlang["key"]>("all", new Set());
  expect(g.plangs(f)).toEqual(new Set(["pl+javascript", "pl+pascal", "pl+typescript"]));

  f.filters.dialectOf.value = new Filter<NPlang["key"]>("any", new Set(["pl+javascript"]));
  expect(g.plangs(f)).toEqual(new Set(["pl+typescript"]));

  f.filters.dialectOf.value = new Filter<NPlang["key"]>("all", new Set(["pl+javascript"]));
  expect(g.plangs(f)).toEqual(new Set(["pl+typescript"]));

  f.filters.dialectOf.value = new Filter<NPlang["key"]>("any", new Set(["pl+javascript", "pl+some-other-language"]));
  expect(g.plangs(f)).toEqual(new Set(["pl+javascript", "pl+typescript"]));

  f.filters.dialectOf.value = new Filter<NPlang["key"]>("all", new Set(["pl+javascript", "pl+some-other-language"]));
  expect(g.plangs(f)).toEqual(new Set(["pl+typescript"]));

  f.filters.dialectOf.value = undefined;
  expect(g.plangs(f)).toEqual(new Set(["pl+javascript", "pl+pascal", "pl+typescript"]));
});

test("filters languages by 'implements'", () => {
  const [g, f] = [createGraph(), new PlangFilters()];

  f.filters.implements.value = new Filter<NPlang["key"]>("any", new Set());
  expect(g.plangs(f)).toEqual(new Set(["pl+javascript", "pl+pascal", "pl+typescript"]));

  f.filters.implements.value = new Filter<NPlang["key"]>("all", new Set());
  expect(g.plangs(f)).toEqual(new Set(["pl+javascript", "pl+pascal", "pl+typescript"]));

  f.filters.implements.value = new Filter<NPlang["key"]>("any", new Set(["pl+ecmascript"]));
  expect(g.plangs(f)).toEqual(new Set(["pl+javascript"]));

  f.filters.implements.value = new Filter<NPlang["key"]>("all", new Set(["pl+ecmascript"]));
  expect(g.plangs(f)).toEqual(new Set(["pl+javascript"]));

  f.filters.implements.value = new Filter<NPlang["key"]>("any", new Set(["pl+ecmascript", "pl+some-other-language"]));
  expect(g.plangs(f)).toEqual(new Set(["pl+javascript"]));

  f.filters.implements.value = new Filter<NPlang["key"]>("all", new Set(["pl+ecmascript", "pl+some-other-language"]));
  expect(g.plangs(f)).toEqual(new Set([]));

  f.filters.implements.value = undefined;
  expect(g.plangs(f)).toEqual(new Set(["pl+javascript", "pl+pascal", "pl+typescript"]));
});

test("filters languages by 'influencedBy'", () => {
  const [g, f] = [createGraph(), new PlangFilters()];

  f.filters.influencedBy.value = new Filter<NPlang["key"]>("all", new Set(["pl+influence-a"]));
  expect(g.plangs(f)).toEqual(new Set(["pl+javascript"]));

  f.filters.influencedBy.value = new Filter<NPlang["key"]>("all", new Set(["pl+influence-a", "pl+influence-b"]));
  expect(g.plangs(f)).toEqual(new Set([]));

  f.filters.influencedBy.value = new Filter<NPlang["key"]>("any", new Set(["pl+influence-a", "pl+influence-b"]));
  expect(g.plangs(f)).toEqual(new Set(["pl+javascript", "pl+pascal", "pl+typescript"]));
});

test("filters languages by license", () => {
  const [g, f] = [createGraph(), new PlangFilters()];

  f.filters.licenses.value = new Filter<NLicense["key"]>("all", new Set(["license+a"]));
  expect(g.plangs(f)).toEqual(new Set(["pl+javascript"]));

  f.filters.licenses.value = new Filter<NLicense["key"]>("all", new Set(["license+a", "license+b"]));
  expect(g.plangs(f)).toEqual(new Set([]));

  f.filters.licenses.value = new Filter<NLicense["key"]>("any", new Set(["license+a", "license+b"]));
  expect(g.plangs(f)).toEqual(new Set(["pl+javascript", "pl+pascal", "pl+typescript"]));
});

test("filters languages by paradigm", () => {
  const [g, f] = [createGraph(), new PlangFilters()];

  f.filters.paradigms.value = new Filter<NParadigm["key"]>("all", new Set(["paradigm+a"]));
  expect(g.plangs(f)).toEqual(new Set(["pl+javascript", "pl+pascal"]));

  f.filters.paradigms.value = new Filter<NParadigm["key"]>("all", new Set(["paradigm+a", "paradigm+b"]));
  expect(g.plangs(f)).toEqual(new Set(["pl+pascal"]));

  f.filters.paradigms.value = new Filter<NParadigm["key"]>("any", new Set(["paradigm+a", "paradigm+b"]));
  expect(g.plangs(f)).toEqual(new Set(["pl+javascript", "pl+pascal", "pl+typescript"]));
});

test("filters languages by extensions", () => {
  const [g, f] = [createGraph(), new PlangFilters()];

  f.filters.extensions.value = new Filter<string>("any", new Set([".tpu", ".js"]));
  expect(g.plangs(f)).toEqual(new Set(["pl+javascript", "pl+pascal"]));

  f.filters.extensions.value = new Filter<string>("all", new Set([".ts", ".d.ts"]));
  expect(g.plangs(f)).toEqual(new Set(["pl+typescript"]));
});

test("filters languages by platform", () => {
  const [g, f] = [createGraph(), new PlangFilters()];

  f.filters.platforms.value = new Filter<NPlatform["key"]>("any", new Set(["plat+web", "plat+backend"]));
  expect(g.plangs(f)).toEqual(new Set(["pl+javascript", "pl+pascal"]));

  f.filters.platforms.value = new Filter<NPlatform["key"]>("all", new Set(["plat+web", "plat+backend"]));
  expect(g.plangs(f)).toEqual(new Set([]));

  f.filters.platforms.value = new Filter<NPlatform["key"]>("any", new Set(["plat+backend"]));
  expect(g.plangs(f)).toEqual(new Set(["pl+pascal"]));

  f.filters.platforms.value = new Filter<NPlatform["key"]>("all", new Set(["plat+backend"]));
  expect(g.plangs(f)).toEqual(new Set(["pl+pascal"]));
});

test("filters languages by tags", () => {
  const [g, f] = [createGraph(), new PlangFilters()];

  f.filters.tags.value = new Filter<NTag["key"]>("any", new Set(["tag+frontend"]));
  expect(g.plangs(f)).toEqual(new Set(["pl+javascript", "pl+typescript"]));

  f.filters.tags.value = new Filter<NTag["key"]>("all", new Set(["tag+other"]));
  expect(g.plangs(f)).toEqual(new Set([]));

  f.filters.tags.value = new Filter<NTag["key"]>("any", new Set(["tag+other", "tag+another"]));
  expect(g.plangs(f)).toEqual(new Set([]));
});

test("filters languages by type systems", () => {
  const [g, f] = [createGraph(), new PlangFilters()];

  f.filters.typeSystems.value = new Filter<NTsys["key"]>("any", new Set(["tsys+static"]));
  expect(g.plangs(f)).toEqual(new Set(["pl+pascal", "pl+typescript"]));

  f.filters.typeSystems.value = new Filter<NTsys["key"]>("all", new Set(["tsys+dynamic"]));
  expect(g.plangs(f)).toEqual(new Set(["pl+javascript"]));
});

test("filters languages by written in", () => {
  const [g, f] = [createGraph(), new PlangFilters()];

  f.filters.writtenIn.value = new Filter<NPlang["key"]>("all", new Set(["pl+c", "pl+assembly"]));
  expect(g.plangs(f)).toEqual(new Set(["pl+pascal"]));

  f.filters.writtenIn.value = new Filter<NPlang["key"]>("all", new Set(["pl+typescript"]));
  expect(g.plangs(f)).toEqual(new Set(["pl+typescript"]));
});

test("serializing filters", () => {
  const [g, f] = [createGraph(), new PlangFilters()];

  f.filters.appearedAfter.value = "2000-01-01";
  f.filters.hasLogo.value = true;
  f.filters.hasReleases.value = false;
  f.filters.plangName.value = /script/i;
  f.filters.releasedAfter.value = "2010-12-31";
  f.filters.typeSystems.value = new Filter<NTsys["key"]>("all", new Set(["tsys+dynamic"]));
  f.filters.writtenIn.value = new Filter<NPlang["key"]>("any", new Set(["pl+c", "pl+assembly"]));
  f.filters.influencedBy.value = new Filter<NPlang["key"]>("all", new Set());

  const serialized = JSON.stringify(f, null, 2);

  expect(JSON.parse(serialized)).toEqual({
    plangName: "script",
    appearedAfter: "2000-01-01",
    releasedAfter: "2010-12-31",
    hasLogo: true,
    typeSystems: {
      mode: "all",
      values: ["tsys+dynamic"],
    },
    writtenIn: {
      mode: "any",
      values: ["pl+c", "pl+assembly"],
    },
  });
});
