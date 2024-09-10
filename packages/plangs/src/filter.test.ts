import { expect, test } from "bun:test";
import { PlangsGraph } from ".";
import { PlangFilters } from "./filter";

function createGraph() {
  const g = new PlangsGraph();

  g.n_plangs
    .set("pl+javascript", {
      name: "JavaScript",
      description:
        "JavaScript (/ˈdʒɑːvəskrɪpt/), often abbreviated as JS, is a programming language and core technology of the Web, alongside HTML and CSS. 99% of websites use JavaScript on the client side for webpage behavior.",
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
    .addParadigms(["para+event-driven", "para+functional", "para+imperative", "para+multi", "para+oop", "para+procedural"])
    .addTypeSystems(["tsys+duck", "tsys+dynamic", "tsys+weak"])
    .addReleases([{ version: "ES12", date: "2020-01-01" }])
    .addImages([{ kind: "other", title: "JavaScript", url: "/images/plangs/j/javascript/other.png" }]);

  g.n_plangs
    .set("pl+typescript", {
      name: "TypeScript",
      description:
        "TypeScript is a free and open-source high-level programming language developed by Microsoft that adds static typing with optional type annotations to JavaScript. It is designed for the development of large applications and transpiles to JavaScript. Because TypeScript is a superset of JavaScript, all JavaScript programs are syntactically valid TypeScript, but they can fail to type-check for safety reasons.",
      isTranspiler: true,
      firstAppeared: "2012-01-01",
      extensions: [".cts", ".mts", ".ts", ".tsx"],
      websites: [{ href: "https://www.typescriptlang.org/", title: "www.typescriptlang.org", kind: "homepage" }],
    })
    .addInfluencedBy(["pl+actionscript", "pl+c-sharp", "pl+f-sharp", "pl+javascript"])
    .addLicenses(["lic+apache"])
    .addParadigms(["para+functional", "para+imperative", "para+multi", "para+oop"])
    .addTypeSystems(["tsys+duck", "tsys+gradual", "tsys+structural"])
    .addImages([{ kind: "logo", title: "TypeScript", url: "/images/plangs/j/javascript/other.png" }]);

  g.n_plangs
    .set("pl+pascal", {
      name: "Pascal",
      description:
        "Pascal is an imperative and procedural programming language, designed by Niklaus Wirth as a small, efficient language intended to encourage good programming practices using structured programming and data structuring. It is named after French mathematician, philosopher and physicist Blaise Pascal.",
      firstAppeared: "1970-01-01",
      websites: [
        {
          href: "https://en.wikipedia.org/wiki/Pascal_(programming_language)#ISO/IEC_10206:1990_Extended_Pascal",
          title: "Pascal",
          kind: "wikipedia",
        },
      ],
    })
    .addInfluencedBy(["pl+algol", "pl+simula"])
    .addParadigms(["para+imperative", "para+structured"])
    .addTypeSystems(["tsys+safe", "tsys+static", "tsys+strong"])
    .addReleases([{ version: "ISO/IEC 10206:1990 Extended Pascal", date: "1990-01-01" }]);

  g.n_tsystems.set("tsys+weak", { keywords: ["weak"] });
  g.n_tsystems.set("tsys+dynamic", { keywords: ["dynamic"] });
  g.n_tsystems.set("tsys+strong", { keywords: ["strongly-typed"] });
  g.n_tsystems.set("tsys+adt", { keywords: ["sum types"] });

  return g;
}

test("empty filters match all languages", () => {
  const [g, f] = [createGraph(), new PlangFilters()];
  expect(g.plangs(f)).toEqual(["pl+javascript", "pl+pascal", "pl+typescript"]);
});

test("filters languages by name", () => {
  const [g, f] = [createGraph(), new PlangFilters()];

  f.values.plangName = /script/i;
  expect(g.plangs(f)).toEqual(["pl+javascript", "pl+typescript"]);

  f.values.plangName = /pascal/i;
  expect(g.plangs(f)).toEqual(["pl+pascal"]);

  f.values.plangName = undefined;
  expect(g.plangs(f)).toEqual(["pl+javascript", "pl+pascal", "pl+typescript"]);
});

test("filters languages by first appeareance date", () => {
  const [g, f] = [createGraph(), new PlangFilters()];

  f.values.firstAppearedMinDate = "2000-01-01";
  expect(g.plangs(f)).toEqual(["pl+typescript"]);

  f.values.firstAppearedMinDate = "1990-01-01";
  expect(g.plangs(f)).toEqual(["pl+javascript", "pl+typescript"]);

  f.values.firstAppearedMinDate = "1970-01-01";
  expect(g.plangs(f)).toEqual(["pl+javascript", "pl+pascal", "pl+typescript"]);

  f.values.firstAppearedMinDate = "1960-01-01";
  expect(g.plangs(f)).toEqual(["pl+javascript", "pl+pascal", "pl+typescript"]);

  f.values.firstAppearedMinDate = undefined;
  expect(g.plangs(f)).toEqual(["pl+javascript", "pl+pascal", "pl+typescript"]);
});

test("filters languages by min release date", () => {
  const [g, f] = [createGraph(), new PlangFilters()];

  f.values.releaseMinDate = "1989-11-01";
  expect(g.plangs(f)).toEqual(["pl+javascript", "pl+pascal"]);

  f.values.releaseMinDate = "2010-12-31";
  expect(g.plangs(f)).toEqual(["pl+javascript"]);

  f.values.releaseMinDate = undefined;
  expect(g.plangs(f)).toEqual(["pl+javascript", "pl+pascal", "pl+typescript"]);
});

test("filters languages by whether they have a logo", () => {
  const [g, f] = [createGraph(), new PlangFilters()];

  f.values.hasLogo = true;
  expect(g.plangs(f)).toEqual(["pl+typescript"]);

  f.values.hasLogo = false;
  expect(g.plangs(f)).toEqual(["pl+javascript", "pl+pascal"]);

  f.values.hasLogo = undefined;
  expect(g.plangs(f)).toEqual(["pl+javascript", "pl+pascal", "pl+typescript"]);
});

test("filters languages by whether they have any releases", () => {
  const [g, f] = [createGraph(), new PlangFilters()];

  f.values.hasReleases = true;
  expect(g.plangs(f)).toEqual(["pl+javascript", "pl+pascal"]);

  f.values.hasReleases = false;
  expect(g.plangs(f)).toEqual(["pl+typescript"]);

  f.values.hasReleases = undefined;
  expect(g.plangs(f)).toEqual(["pl+javascript", "pl+pascal", "pl+typescript"]);
});

test("filters languages by whether they have a wikipedia page", () => {
  const [g, f] = [createGraph(), new PlangFilters()];

  f.values.hasWikipedia = true;
  expect(g.plangs(f)).toEqual(["pl+pascal"]);

  f.values.hasWikipedia = false;
  expect(g.plangs(f)).toEqual(["pl+javascript", "pl+typescript"]);

  f.values.hasWikipedia = undefined;
  expect(g.plangs(f)).toEqual(["pl+javascript", "pl+pascal", "pl+typescript"]);
});

test("filters transpilers", () => {
  const [g, f] = [createGraph(), new PlangFilters()];

  f.values.isTranspiler = true;
  expect(g.plangs(f)).toEqual(["pl+typescript"]);

  f.values.isTranspiler = false;
  expect(g.plangs(f)).toEqual(["pl+javascript", "pl+pascal"]);

  f.values.isTranspiler = undefined;
  expect(g.plangs(f)).toEqual(["pl+javascript", "pl+pascal", "pl+typescript"]);
});
