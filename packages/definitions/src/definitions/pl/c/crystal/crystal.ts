import type { PlangsGraph } from "@plangs/plangs/graph";

export function define(g: PlangsGraph) {
  g.plang
    .set("pl+crystal", {
      name: "Crystal",
      description:
        "Crystal is a high-level general-purpose, object-oriented programming language, designed and developed by Ary Borenszweig, Juan Wajnerman, Brian Cardiff and more than 400 contributors. With syntax inspired by the language Ruby, it is a compiled language with static type-checking, but specifying the types of variables or method arguments is generally unneeded. Types are resolved by an advanced global type inference algorithm. Crystal is currently in active development. It is released as free and open-source software under the Apache License version 2.0.",
      keywords: ["crystal", "multi-paradigm", "programming language", "ruby-like"],
      extensions: [".cr"],
      releases: [
        { version: "1.0.0", name: "Crystal 1.0.0", date: "2021-03-31" },
        { version: "1.14.0", name: "Crystal 1.14.0", date: "2024-10-09" },
        { version: "1.13.2", name: "Crystal 1.13.2", date: "2024-01-01" },
      ],
      stackovTags: ["crystal-lang"],
      githubName: "Crystal",
      languishRanking: 144,
      githubLangId: "72",
      githubColor: "#000100",
      githubPopular: false,
      githubType: "programming",
      extWikipediaPath: "Crystal_(programming_language)",
      extRedditPath: "crystal_programming",
      extHomeURL: "https://crystal-lang.org/",
      created: "2014",
    })
    .relInfluencedBy.add(["pl+c", "pl+c-sharp", "pl+go", "pl+python", "pl+ruby", "pl+rust"])
    .relLicense.add(["lic+apache"])
    .relParadigm.add(["para+compiled", "para+concurrent", "para+multi", "para+oop"])
    .relPlatform.add(["plat+apple", "plat+arm", "plat+bsd", "plat+linux", "plat+windows", "plat+x86-64"])
    .relTag.add(["tag+compiler", "tag+interpreters", "tag+scripting"])
    .relTypeSystem.add(["tsys+duck", "tsys+inferred", "tsys+nominal", "tsys+static"])
    .relWrittenInPlang.add(["pl+c"]);

  // TOOLS

  // TOOL BUNDLES

  // LIBRARIES

  // APPS
}
