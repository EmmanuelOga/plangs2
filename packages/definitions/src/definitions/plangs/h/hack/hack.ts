import type { PlangsGraph } from "@plangs/plangs";

export function define(g: PlangsGraph) {
  g.nodes.pl
    .set("pl+hack", {
      name: "Hack",
      description:
        "Hack is a programming language for the HipHop Virtual Machine (HHVM), created by Meta (formerly Facebook) as a dialect of PHP. It is designed to provide improved performance, better safety, and new features compared to PHP. Hack offers features like type annotations, generics, collections, and lambda expressions while allowing incremental typing. The language implementation is open-source and licensed under the MIT License.",
      keywords: ["hack", "hhvm"],
      websites: [
        { title: "hacklang.org", href: "https://hacklang.org/", kind: "homepage" },
        { title: "Hack", href: "https://en.wikipedia.org/wiki/Hack_(programming_language)", kind: "wikipedia" },
        { title: "Hack on Reddit", kind: "reddit", href: "https://reddit.com/r/hacklang" },
      ],
      extensions: [".hack", ".hh"],
      year: 2014,
      isTranspiler: false,
      isMainstream: true,
      releases: [{ version: "4.172", name: "", date: "2022-01-01" }],
      stackovTags: ["hacklang"],
      githubName: "Hack",
      languishRanking: 165,
      githubLangId: "153",
      githubColor: "#878787",
      githubPopular: false,
      githubType: "programming",
    })
    .addDialectOf(["pl+php"])
    .addInfluencedBy(["pl+c-sharp", "pl+haskell", "pl+ocaml", "pl+php", "pl+scala"])
    .addLicenses(["license+mit"])
    .addParadigms(["paradigm+functional", "paradigm+multi", "paradigm+oop"])
    .addPlatforms(["plat+cross"])
    .addTags(["tag+interpreter", "tag+scripting"])
    .addTypeSystems(["tsys+gradual", "tsys+manifest", "tsys+safe", "tsys+static", "tsys+strong"])
    .addWrittenIn(["pl+ocaml"]);

  // TOOLS

  // TOOL BUNDLES

  // LIBRARIES

  // APPS
}
