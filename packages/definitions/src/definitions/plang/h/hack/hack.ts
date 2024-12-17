import type { PlangsGraph } from "@plangs/plangs/graph";

export function define(g: PlangsGraph) {
  g.plang
    .set("pl+hack", {
      name: "Hack",
      description:
        "Hack is a programming language developed by Meta (formerly Facebook) for HHVM, designed to enhance PHP with features like static type checking, gradual typing, and asynchronous programming. It supports various programming paradigms and aims to provide a balance between development speed and safety.",
      shortDesc: "Hack is a PHP-influenced language with static and gradual typing, used on the HHVM platform.",
      created: "2014",
      extensions: [".hack", ".hck", ".hh"],
      extGithubPath: "facebook/hhvm",
      extHomeURL: "https://hacklang.org/",
      extRedditPath: "hacklang",
      extWikipediaPath: "Hack_(programming_language)",
      githubColor: "#878787",
      githubLangId: "153",
      githubName: "Hack",
      githubPopular: false,
      githubStars: 18200,
      githubType: "programming",
      isTranspiler: false,
      keywords: ["hack", "hhvm", "meta", "static type checking"],
      languishRanking: 165,
      releases: [{ version: "4.172", name: "", date: "2022-11-02" }],
      stackovTags: ["hacklang"],
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
