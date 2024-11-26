import type { PlangsGraph } from "@plangs/plangs/graph";

export function define(g: PlangsGraph) {
  g.plang.    .set("pl+factor", {
      name: "Factor",
      description:
        "Factor is a stack-oriented programming language created by Slava Pestov. It features dynamic types, extensible syntax, macros, and garbage collection. Factor supports a large standard library with cross-platform capabilities, providing a self-hosted optimizing compiler and an interactive development environment.",
      keywords: ["dynamic types", "factor", "stack-oriented"],
      extensions: [".factor"],
      releases: [
        { version: "0.99", name: "Factor 0.99", date: "2023-08-24" },
        { version: "0.100", name: "Factor 0.100", date: "2024-11-05" },
      ],
      stackovTags: ["factor-lang"],
      githubName: "Factor",
      languishRanking: 315,
      githubLangId: "108",
      githubColor: "#636746",
      githubPopular: false,
      githubType: "programming",
      extWikipediaPath: "Factor_(programming_language)",
      extRedditPath: "factor",
      extHomeURL: "http://factorcode.org/",
      created: "2003",
    })
    .relInfluencedBy.add(["pl+forth", "pl+lisp", "pl+self"])
    .relLicense.add(["license+bsd"])
    .relParadigm.add(["para+concatenative", "para+functional", "para+multi", "para+oop"])
    .relPlatforms.add(["plat+apple", "plat+linux", "plat+windows", "plat+x86-64"])
    .relTags.add(["tag+compiler", "tag+interpreters", "tag+scripting"])
    .relTsys.add(["tsys+dynamic", "tsys+strong"]);

  // TOOLS

  // TOOL BUNDLES

  // LIBRARIES

  // APPS
}
