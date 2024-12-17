import type { PlangsGraph } from "@plangs/plangs/graph";

export function define(g: PlangsGraph) {
  g.plang
    .set("pl+factor", {
      name: "Factor",
      description:
        "Stack-oriented programming language created by Slava Pestov. It features dynamic types, extensible syntax, macros, and garbage collection. The language supports a large standard library with cross-platform capabilities, providing a self-hosted optimizing compiler and an interactive development environment.",
      shortDesc: "Stack-oriented programming language with dynamic types, extensible syntax, and a self-hosted optimizing compiler.",
      created: "2003",
      extensions: [".factor"],
      extGithubPath: "factor/factor",
      extRedditPath: "factor",
      extWikipediaPath: "Factor_(programming_language)",
      githubColor: "#636746",
      githubLangId: "108",
      githubName: "Factor",
      githubPopular: false,
      githubStars: 1700,
      githubType: "programming",
      isTranspiler: false,
      keywords: ["dynamic types", "factor", "stack-oriented"],
      languishRanking: 315,
      releases: [
        { version: "0.99", name: "Factor 0.99", date: "2023-08-24" },
        { version: "0.100", name: "Factor 0.100", date: "2024-11-05" },
      ],
      stackovTags: ["factor-lang"],
    })
    .relInfluencedBy.add("pl+forth", "pl+lisp", "pl+self")
    .relLicenses.add("lic+bsd")
    .relParadigms.add("para+concatenative", "para+functional", "para+multi", "para+oop", "para+stack-oriented")
    .relPlatforms.add("plat+apple", "plat+linux", "plat+windows", "plat+x86-64")
    .relTags.add("tag+compiler", "tag+interpreters", "tag+scripting")
    .relTypeSystems.add("tsys+dynamic", "tsys+strong");

  // TOOLS

  // TOOL BUNDLES

  // LIBRARIES

  // APPS
}
