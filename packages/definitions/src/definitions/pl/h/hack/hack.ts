import type { PlangsGraph } from "@plangs/plangs";

export function define(g: PlangsGraph) {
  g.nodes.pl
    .set("pl+hack", {
      name: "Hack",
      description:
        "Hack is a multi-paradigm programming language developed by Meta (formerly Facebook) for the HipHop Virtual Machine (HHVM). It is a dialect of PHP designed to reconcile the fast development cycle of a dynamically-typed language with the discipline provided by static typing. Hack offers features like gradual typing, asynchronous operations, generics, and XHP for secure UI representations. It allows for fast development with features for type checking and is open-source under the MIT License.",
      keywords: ["facebook", "hack", "hhvm", "meta"],
      extensions: [".hack", ".hh"],
      releases: [{ version: "4.172", name: "", date: "2022-11-02" }],
      stackovTags: ["hacklang"],
      githubName: "Hack",
      languishRanking: 165,
      githubLangId: "153",
      githubColor: "#878787",
      githubPopular: false,
      githubType: "programming",
      extWikipediaPath: "Hack_(programming_language)",
      extRedditPath: "hacklang",
      extHomeURL: "https://hacklang.org",
      created: "2014",
    })
    .addDialectOf(["pl+php"])
    .addInfluencedBy(["pl+c-sharp", "pl+haskell", "pl+ocaml", "pl+php", "pl+scala"])
    .addLicenses(["license+mit"])
    .addParadigms(["paradigm+functional", "paradigm+imperative", "paradigm+multi", "paradigm+oop", "paradigm+procedural", "paradigm+reflective"])
    .addPlatforms(["plat+cross"])
    .addTags(["tag+interpreters", "tag+scripting"])
    .addTypeSystems(["tsys+dynamic", "tsys+gradual", "tsys+manifest", "tsys+safe", "tsys+static", "tsys+strong", "tsys+weak"])
    .addWrittenIn(["pl+ocaml"]);

  // TOOLS

  // TOOL BUNDLES

  // LIBRARIES

  // APPS
}
