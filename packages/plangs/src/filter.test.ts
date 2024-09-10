import { expect, test } from "bun:test";
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

  f.values.plangName = /script/i;
  expect(g.plangs(f)).toEqual(new Set(["pl+javascript", "pl+typescript"]));

  f.values.plangName = /pascal/i;
  expect(g.plangs(f)).toEqual(new Set(["pl+pascal"]));

  f.values.plangName = undefined;
  expect(g.plangs(f)).toEqual(new Set(["pl+javascript", "pl+pascal", "pl+typescript"]));
});

test("filters languages by first appeareance date", () => {
  const [g, f] = [createGraph(), new PlangFilters()];

  f.values.appearedAfter = "2000-01-01";
  expect(g.plangs(f)).toEqual(new Set(["pl+typescript"]));

  f.values.appearedAfter = "1990-01-01";
  expect(g.plangs(f)).toEqual(new Set(["pl+javascript", "pl+typescript"]));

  f.values.appearedAfter = "1970-01-01";
  expect(g.plangs(f)).toEqual(new Set(["pl+javascript", "pl+pascal", "pl+typescript"]));

  f.values.appearedAfter = "1960-01-01";
  expect(g.plangs(f)).toEqual(new Set(["pl+javascript", "pl+pascal", "pl+typescript"]));

  f.values.appearedAfter = undefined;
  expect(g.plangs(f)).toEqual(new Set(["pl+javascript", "pl+pascal", "pl+typescript"]));
});

test("filters languages by min release date", () => {
  const [g, f] = [createGraph(), new PlangFilters()];

  f.values.releasedAfter = "1989-11-01";
  expect(g.plangs(f)).toEqual(new Set(["pl+javascript", "pl+pascal"]));

  f.values.releasedAfter = "2010-12-31";
  expect(g.plangs(f)).toEqual(new Set(["pl+javascript"]));

  f.values.releasedAfter = undefined;
  expect(g.plangs(f)).toEqual(new Set(["pl+javascript", "pl+pascal", "pl+typescript"]));
});

test("filters languages by whether they have a logo", () => {
  const [g, f] = [createGraph(), new PlangFilters()];

  f.values.hasLogo = true;
  expect(g.plangs(f)).toEqual(new Set(["pl+typescript"]));

  f.values.hasLogo = false;
  expect(g.plangs(f)).toEqual(new Set(["pl+javascript", "pl+pascal"]));

  f.values.hasLogo = undefined;
  expect(g.plangs(f)).toEqual(new Set(["pl+javascript", "pl+pascal", "pl+typescript"]));
});

test("filters languages by whether they have any releases", () => {
  const [g, f] = [createGraph(), new PlangFilters()];

  f.values.hasReleases = true;
  expect(g.plangs(f)).toEqual(new Set(["pl+javascript", "pl+pascal"]));

  f.values.hasReleases = false;
  expect(g.plangs(f)).toEqual(new Set(["pl+typescript"]));

  f.values.hasReleases = undefined;
  expect(g.plangs(f)).toEqual(new Set(["pl+javascript", "pl+pascal", "pl+typescript"]));
});

test("filters languages by whether they have a wikipedia page", () => {
  const [g, f] = [createGraph(), new PlangFilters()];

  f.values.hasWikipedia = true;
  expect(g.plangs(f)).toEqual(new Set(["pl+pascal"]));

  f.values.hasWikipedia = false;
  expect(g.plangs(f)).toEqual(new Set(["pl+javascript", "pl+typescript"]));

  f.values.hasWikipedia = undefined;
  expect(g.plangs(f)).toEqual(new Set(["pl+javascript", "pl+pascal", "pl+typescript"]));
});

test("filters transpilers", () => {
  const [g, f] = [createGraph(), new PlangFilters()];

  f.values.isTranspiler = true;
  expect(g.plangs(f)).toEqual(new Set(["pl+typescript"]));

  f.values.isTranspiler = false;
  expect(g.plangs(f)).toEqual(new Set(["pl+javascript", "pl+pascal"]));

  f.values.isTranspiler = undefined;
  expect(g.plangs(f)).toEqual(new Set(["pl+javascript", "pl+pascal", "pl+typescript"]));
});

test("filters mainstream languages", () => {
  const [g, f] = [createGraph(), new PlangFilters()];

  f.values.isMainstream = true;
  expect(g.plangs(f)).toEqual(new Set(["pl+javascript", "pl+typescript"]));

  f.values.isMainstream = false;
  expect(g.plangs(f)).toEqual(new Set(["pl+pascal"]));

  f.values.isMainstream = undefined;
  expect(g.plangs(f)).toEqual(new Set(["pl+javascript", "pl+pascal", "pl+typescript"]));
});

test("filters languages by dialect", () => {
  const [g, f] = [createGraph(), new PlangFilters()];

  f.values.dialectOf = { mode: "any", values: new Set() };
  expect(g.plangs(f)).toEqual(new Set(["pl+javascript", "pl+pascal", "pl+typescript"]));

  f.values.dialectOf = { mode: "all", values: new Set() };
  expect(g.plangs(f)).toEqual(new Set(["pl+javascript", "pl+pascal", "pl+typescript"]));

  f.values.dialectOf = { mode: "any", values: new Set(["pl+javascript"]) };
  expect(g.plangs(f)).toEqual(new Set(["pl+typescript"]));

  f.values.dialectOf = { mode: "all", values: new Set(["pl+javascript"]) };
  expect(g.plangs(f)).toEqual(new Set(["pl+typescript"]));

  f.values.dialectOf = { mode: "any", values: new Set(["pl+javascript", "pl+some-other-language"]) };
  expect(g.plangs(f)).toEqual(new Set(["pl+javascript", "pl+typescript"]));

  f.values.dialectOf = { mode: "all", values: new Set(["pl+javascript", "pl+some-other-language"]) };
  expect(g.plangs(f)).toEqual(new Set(["pl+typescript"]));

  f.values.dialectOf = undefined;
  expect(g.plangs(f)).toEqual(new Set(["pl+javascript", "pl+pascal", "pl+typescript"]));
});

test("filters languages by 'implements'", () => {
  const [g, f] = [createGraph(), new PlangFilters()];

  f.values.implements = { mode: "any", values: new Set() };
  expect(g.plangs(f)).toEqual(new Set(["pl+javascript", "pl+pascal", "pl+typescript"]));

  f.values.implements = { mode: "all", values: new Set() };
  expect(g.plangs(f)).toEqual(new Set(["pl+javascript", "pl+pascal", "pl+typescript"]));

  f.values.implements = { mode: "any", values: new Set(["pl+ecmascript"]) };
  expect(g.plangs(f)).toEqual(new Set(["pl+javascript"]));

  f.values.implements = { mode: "all", values: new Set(["pl+ecmascript"]) };
  expect(g.plangs(f)).toEqual(new Set(["pl+javascript"]));

  f.values.implements = { mode: "any", values: new Set(["pl+ecmascript", "pl+some-other-language"]) };
  expect(g.plangs(f)).toEqual(new Set(["pl+javascript"]));

  f.values.implements = { mode: "all", values: new Set(["pl+ecmascript", "pl+some-other-language"]) };
  expect(g.plangs(f)).toEqual(new Set([]));

  f.values.implements = undefined;
  expect(g.plangs(f)).toEqual(new Set(["pl+javascript", "pl+pascal", "pl+typescript"]));
});

test("filters languages by 'influencedBy'", () => {
  const [g, f] = [createGraph(), new PlangFilters()];

  f.values.influencedBy = { mode: "all", values: new Set(["pl+influence-a"]) };
  expect(g.plangs(f)).toEqual(new Set(["pl+javascript"]));

  f.values.influencedBy = { mode: "all", values: new Set(["pl+influence-a", "pl+influence-b"]) };
  expect(g.plangs(f)).toEqual(new Set([]));

  f.values.influencedBy = { mode: "any", values: new Set(["pl+influence-a", "pl+influence-b"]) };
  expect(g.plangs(f)).toEqual(new Set(["pl+javascript", "pl+pascal", "pl+typescript"]));
});

test("filters languages by license", () => {
  const [g, f] = [createGraph(), new PlangFilters()];

  f.values.licenses = { mode: "all", values: new Set(["license+a"]) };
  expect(g.plangs(f)).toEqual(new Set(["pl+javascript"]));

  f.values.licenses = { mode: "all", values: new Set(["license+a", "license+b"]) };
  expect(g.plangs(f)).toEqual(new Set([]));

  f.values.licenses = { mode: "any", values: new Set(["license+a", "license+b"]) };
  expect(g.plangs(f)).toEqual(new Set(["pl+javascript", "pl+pascal", "pl+typescript"]));
});

test("filters languages by paradigm", () => {
  const [g, f] = [createGraph(), new PlangFilters()];

  f.values.paradigms = { mode: "all", values: new Set(["paradigm+a"]) };
  expect(g.plangs(f)).toEqual(new Set(["pl+javascript", "pl+pascal"]));

  f.values.paradigms = { mode: "all", values: new Set(["paradigm+a", "paradigm+b"]) };
  expect(g.plangs(f)).toEqual(new Set(["pl+pascal"]));

  f.values.paradigms = { mode: "any", values: new Set(["paradigm+a", "paradigm+b"]) };
  expect(g.plangs(f)).toEqual(new Set(["pl+javascript", "pl+pascal", "pl+typescript"]));
});

test("filters languages by extensions", () => {
  const [g, f] = [createGraph(), new PlangFilters()];

  f.values.extensions = { mode: "any", values: new Set([".tpu", ".js"]) };
  expect(g.plangs(f)).toEqual(new Set(["pl+javascript", "pl+pascal"]));

  f.values.extensions = { mode: "all", values: new Set([".ts", ".d.ts"]) };
  expect(g.plangs(f)).toEqual(new Set(["pl+typescript"]));
});

test("filters languages by platform", () => {
  const [g, f] = [createGraph(), new PlangFilters()];

  f.values.platforms = { mode: "any", values: new Set(["plat+web", "plat+backend"]) };
  expect(g.plangs(f)).toEqual(new Set(["pl+javascript", "pl+pascal"]));

  f.values.platforms = { mode: "all", values: new Set(["plat+web", "plat+backend"]) };
  expect(g.plangs(f)).toEqual(new Set([]));

  f.values.platforms = { mode: "any", values: new Set(["plat+backend"]) };
  expect(g.plangs(f)).toEqual(new Set(["pl+pascal"]));

  f.values.platforms = { mode: "all", values: new Set(["plat+backend"]) };
  expect(g.plangs(f)).toEqual(new Set(["pl+pascal"]));
});

test("filters languages by tags", () => {
  const [g, f] = [createGraph(), new PlangFilters()];

  f.values.tags = { mode: "any", values: new Set(["tag+frontend"]) };
  expect(g.plangs(f)).toEqual(new Set(["pl+javascript", "pl+typescript"]));

  f.values.tags = { mode: "all", values: new Set(["tag+other"]) };
  expect(g.plangs(f)).toEqual(new Set([]));

  f.values.tags = { mode: "any", values: new Set(["tag+other", "tag+another"]) };
  expect(g.plangs(f)).toEqual(new Set([]));
});

test("filters languages by type systems", () => {
  const [g, f] = [createGraph(), new PlangFilters()];

  f.values.typeSystems = { mode: "any", values: new Set(["tsys+static"]) };
  expect(g.plangs(f)).toEqual(new Set(["pl+pascal", "pl+typescript"]));

  f.values.typeSystems = { mode: "all", values: new Set(["tsys+dynamic"]) };
  expect(g.plangs(f)).toEqual(new Set(["pl+javascript"]));
});

test("filters languages by written in", () => {
  const [g, f] = [createGraph(), new PlangFilters()];

  f.values.writtenIn = { mode: "all", values: new Set(["pl+c", "pl+assembly"]) };
  expect(g.plangs(f)).toEqual(new Set(["pl+pascal"]));

  f.values.writtenIn = { mode: "all", values: new Set(["pl+typescript"]) };
  expect(g.plangs(f)).toEqual(new Set(["pl+typescript"]));
});
