import type { PlangsGraph } from "@plangs/plangs";

export function define(g: PlangsGraph) {
  g.nodes.pl
    .set("pl+factor", {
      name: "Factor",
      description:
        "Factor is a stack-oriented programming language created by Slava Pestov. It features dynamic types, extensible syntax, macros, and garbage collection. Factor supports a large standard library with cross-platform capabilities, providing a self-hosted optimizing compiler and an interactive development environment.",
      keywords: ["dynamic types", "factor", "stack-oriented"],
      websites: [
        { title: "Factor programming language", href: "http://factorcode.org/", kind: "homepage" },
        {
          title: "Factor (programming language) - Wikipedia",
          href: "https://en.wikipedia.org/wiki/Factor_(programming_language)",
          kind: "wikipedia",
        },
      ],
      extensions: [".factor"],
      year: 2003,
      isMainstream: false,
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
    })
    .addInfluencedBy(["pl+forth", "pl+joy", "pl+lisp", "pl+self"])
    .addLicenses(["license+bsd"])
    .addParadigms(["paradigm+concatenative", "paradigm+functional", "paradigm+multi", "paradigm+oop"])
    .addPlatforms(["plat+apple", "plat+linux", "plat+windows", "plat+x86-64"])
    .addTags(["tag+compiler", "tag+interpreter", "tag+scripting"])
    .addTypeSystems(["tsys+dynamic", "tsys+strong"]);

  // TOOLS

  // TOOL BUNDLES

  // LIBRARIES

  // APPS
}
