import type { PlangsGraph } from "@plangs/plangs";

export function define(g: PlangsGraph) {
  g.nodes.pl
    .set("pl+ruby", {
      name: "Ruby",
      description:
        'Ruby is an interpreted, high-level, general-purpose programming language. It was designed with an emphasis on programming productivity and simplicity. In Ruby, everything is an object, including primitive data types. It was developed in the mid-1990s by Yukihiro "Matz" Matsumoto in Japan.',
      keywords: ["ruby"],
      websites: [
        { title: "Ruby Programming Language", href: "https://www.ruby-lang.org/en/", kind: "homepage" },
        { title: "Ruby on Wikipedia", href: "https://en.wikipedia.org/wiki/Ruby_programming_language", kind: "wikipedia" },
        { title: "Ruby on Reddit", kind: "reddit", href: "https://reddit.com/r/ruby" },
      ],
      extensions: [".rb", ".ru"],
      year: 1995,
      isMainstream: true,
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
    })
    .addInfluencedBy([
      "pl+ada",
      "pl+basic",
      "pl+c++",
      "pl+clu",
      "pl+dylan",
      "pl+eiffel",
      "pl+lisp",
      "pl+lua",
      "pl+moonscript",
      "pl+perl",
      "pl+python",
      "pl+r5rs",
      "pl+scheme",
    ])
    .addLicenses(["license+bsd", "license+mit"])
    .addParadigms(["paradigm+functional", "paradigm+imperative", "paradigm+multi", "paradigm+oop", "paradigm+reflective", "paradigm+scripting"])
    .addPlatforms(["plat+android", "plat+apple", "plat+cross", "plat+linux", "plat+windows"])
    .addTags([
      "tag+analysis",
      "tag+app",
      "tag+compiler",
      "tag+framework",
      "tag+industrial",
      "tag+instrument_control",
      "tag+interpreter",
      "tag+scripting",
      "tag+ui",
      "tag+viz",
    ])
    .addTypeSystems(["tsys+duck", "tsys+dynamic", "tsys+strong"])
    .addWrittenIn(["pl+c"]);

  // TOOLS

  // TOOL BUNDLES

  // LIBRARIES

  // APPS
}
