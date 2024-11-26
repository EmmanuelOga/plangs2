import type { PlangsGraph } from "@plangs/plangs/graph";

export function define(g: PlangsGraph) {
  g.plang
    .set("pl+ruby", {
      name: "Ruby",
      description:
        'Ruby is an interpreted, high-level, general-purpose programming language. It was designed with an emphasis on programming productivity and simplicity. In Ruby, everything is an object, including primitive data types. It was developed in the mid-1990s by Yukihiro "Matz" Matsumoto in Japan.',
      keywords: ["ruby"],
      extensions: [".rb", ".ru"],
      releases: [
        { version: "3.3.6", name: "Ruby 3.3.6", date: "2024-11-05" },
        { version: "3.2.6", name: "Ruby 3.2.6", date: "2024-10-30" },
        { version: "3.4.0-preview2", name: "Ruby 3.4.0 preview2", date: "2024-10-07" },
        { version: "3.3.5", name: "Ruby 3.3.5", date: "2024-09-03" },
        { version: "3.2.5", name: "Ruby 3.2.5", date: "2024-07-26" },
      ],
      stackovTags: ["ruby"],
      githubName: "Ruby",
      languishRanking: 24,
      githubLangId: "326",
      githubColor: "#701516",
      githubPopular: true,
      githubType: "programming",
      extWikipediaPath: "Ruby_(programming_language)",
      extRedditPath: "ruby",
      extHomeURL: "https://www.ruby-lang.org/en/",
      created: "1995",
    })
    .relInfluence.add(["pl+basic", "pl+c++", "pl+eiffel", "pl+lisp", "pl+lua", "pl+moonscript", "pl+perl", "pl+python", "pl+r5rs", "pl+scheme"])
    .relLicense.add(["lic+bsd", "lic+mit"])
    .relParadigm.add(["para+functional", "para+imperative", "para+multi", "para+oop", "para+reflective", "para+scripting"])
    .relPlatform.add(["plat+android", "plat+apple", "plat+cross", "plat+linux", "plat+windows"])
    .relTag.add([
      "tag+analysis",
      "tag+app",
      "tag+compiler",
      "tag+control",
      "tag+framework",
      "tag+industrial",
      "tag+interpreters",
      "tag+scripting",
      "tag+ui",
      "tag+viz",
    ])
    .relTypeSystem.add(["tsys+duck", "tsys+dynamic", "tsys+strong"])
    .relWrittenInPlang.add(["pl+c"]);

  // TOOLS

  // TOOL BUNDLES

  // LIBRARIES

  // APPS
}
