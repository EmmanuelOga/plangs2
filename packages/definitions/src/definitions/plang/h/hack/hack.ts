import type { PlangsGraph } from "@plangs/plangs/graph";

export function define(g: PlangsGraph) {
  g.plang
    .set("pl+hack", {
      name: "Hack",
      description:
        "Hack is a programming language developed by Meta (formerly Facebook) for HHVM, designed to enhance PHP with features like static type checking, gradual typing, and asynchronous programming. It supports various programming paradigms and aims to provide a balance between development speed and safety.",
      keywords: ["hack", "hhvm", "meta", "static type checking"],
      extensions: [".hack", ".hck", ".hh"],
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
      extHomeURL: "https://hacklang.org/",
      created: "2014",
      isTranspiler: false,
      shortDesc: "Hack is a PHP-influenced language with static and gradual typing, used on the HHVM platform.",
      githubStars: 18200,
      extGithubPath: "facebook/hhvm",
      ghRepoCreated: "2013-11-03",
    })
    .relDialectOf.add("pl+php")
    .relImplements.add("pl+php")
    .relInfluencedBy.add("pl+c-sharp", "pl+haskell", "pl+java", "pl+ocaml", "pl+php", "pl+scala", "pl+typescript")
    .relLicenses.add("lic+mit")
    .relParadigms.add("para+functional", "para+imperative", "para+multi", "para+oop", "para+procedural", "para+reflective")
    .relPlatforms.add("plat+cross")
    .relTags.add("tag+interpreters", "tag+scripting", "tag+webdev")
    .relTypeSystems.add("tsys+dynamic", "tsys+gradual", "tsys+inferred", "tsys+manifest", "tsys+safe", "tsys+static", "tsys+strong", "tsys+weak")
    .relWrittenWith.add("pl+ocaml");

  // TOOLS

  // TOOL BUNDLES

  // LIBRARIES

  // APPS
}
