import type { PlangsGraph } from "@plangs/plangs/graph";

export function define(g: PlangsGraph) {
  g.plang
    .set("pl+ruby", {
      name: "Ruby",
      description:
        'An interpreted, high-level, general-purpose programming language. It was designed with an emphasis on programming productivity and simplicity. In Ruby, everything is an object, including primitive data types. It was developed in the mid-1990s by Yukihiro "Matz" Matsumoto in Japan.',
      shortDesc: "Interpreted, high-level language focused on productivity and simplicity.",
      created: "1995",
      extensions: [".rb", ".ru"],
      extGithubPath: "ruby/ruby",
      extHomeURL: "https://www.ruby-lang.org/en/",
      extRedditPath: "ruby",
      extWikipediaPath: "Ruby_(programming_language)",
      githubColor: "#701516",
      githubLangId: "326",
      githubName: "Ruby",
      githubPopular: true,
      githubStars: 22200,
      githubType: "programming",
      isTranspiler: false,
      keywords: ["ruby"],
      languishRanking: 24,
      releases: [
        { version: "3.3.6", name: "Ruby 3.3.6", date: "2024-11-05" },
        { version: "3.2.6", name: "Ruby 3.2.6", date: "2024-10-30" },
        { version: "3.4.0-preview2", name: "Ruby 3.4.0 preview2", date: "2024-10-07" },
        { version: "3.3.5", name: "Ruby 3.3.5", date: "2024-09-03" },
        { version: "3.2.5", name: "Ruby 3.2.5", date: "2024-07-26" },
      ],
      stackovTags: ["ruby"],
    })
    .relInfluencedBy.add("pl+basic", "pl+c++", "pl+eiffel", "pl+lisp", "pl+lua", "pl+moonscript", "pl+perl", "pl+python", "pl+r5rs", "pl+scheme")
    .relLicenses.add("lic+bsd", "lic+mit")
    .relParadigms.add("para+functional", "para+imperative", "para+multi", "para+oop", "para+reflective", "para+scripting")
    .relPlatforms.add("plat+android", "plat+apple", "plat+cross", "plat+linux", "plat+windows")
    .relTags.add(
      "tag+analysis",
      "tag+app",
      "tag+compiler",
      "tag+control",
      "tag+framework",
      "tag+gui",
      "tag+industrial",
      "tag+interpreters",
      "tag+scripting",
      "tag+viz",
    )
    .relTypeSystems.add("tsys+duck", "tsys+dynamic", "tsys+strong")
    .relWrittenWith.add("pl+c");
}
