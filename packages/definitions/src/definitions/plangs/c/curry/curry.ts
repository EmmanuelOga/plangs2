import type { PlangsGraph } from "@plangs/plangs";

export function define(g: PlangsGraph) {
  g.nodes.pl
    .set("pl+curry", {
      name: "Curry",
      description:
        "Curry is a declarative programming language that uniquely integrates features of functional and logic programming paradigms. It supports non-deterministic computations, constraint programming, and combines features such as lazy evaluation and strong typing. Curry is based on Haskell but extends it with logic programming features.",
      keywords: ["curry", "declarative", "functional", "logic", "programming"],
      websites: [
        { title: "Curry Programming Language", href: "http://curry.pages.ps.informatik.uni-kiel.de/curry-lang.org", kind: "homepage" },
        { title: "Curry (programming language) - Wikipedia", href: "https://en.wikipedia.org/wiki/Curry_(programming_language)", kind: "wikipedia" },
      ],
      extensions: [".curry"],
      year: 1995,
      isMainstream: false,
      releases: [{ version: "3.6.0", name: "Curry 3.6.0", date: "2023-11-10" }],
      githubName: "Curry",
      languishRanking: 379,
      githubLangId: "439829048",
      githubColor: "#531242",
      githubPopular: false,
      githubType: "programming",
    })
    .addInfluencedBy(["pl+haskell", "pl+prolog"])
    .addLicenses(["license+bsd"])
    .addParadigms([
      "paradigm+concurrent",
      "paradigm+constraint",
      "paradigm+declarative",
      "paradigm+functional",
      "paradigm+lazy",
      "paradigm+logic",
      "paradigm+modular",
    ])
    .addPlatforms(["plat+cross", "plat+linux", "plat+x86-64"])
    .addTags(["tag+audio-dev", "tag+compiler", "tag+interpreter", "tag+scripting", "tag+testing"])
    .addTypeSystems(["tsys+inferred", "tsys+static", "tsys+strong"]);

  // TOOLS

  // TOOL BUNDLES

  // LIBRARIES

  // APPS
}
