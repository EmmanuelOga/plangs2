import type { PlangsGraph } from "@plangs/plangs/graph";

export function define(g: PlangsGraph) {
  g.plang
    .set("pl+raku", {
      name: "Raku",
      description:
        "Raku is a member of the Perl family of programming languages. Formerly named Perl 6, it was renamed in October 2019. Raku introduces elements of many modern and historical languages. Compatibility with Perl was not a goal, though a compatibility mode is part of the specification. The design process for Raku began in 2000. Designed by Larry Wall and developed by the Raku community, it is a multi-paradigm language with a dynamic and gradual typing system.",
      keywords: ["perl6", "raku"],
      extensions: [".raku", ".rakudoc", ".rakumod", ".rakutest", ".t"],
      releases: [
        { version: "6.d", name: "'Diwali' Release", date: "2020-10-24" },
        { version: "2021.03", name: "Raku 2021.03", date: "2021-03-01" },
        { version: "2022.06", name: "Raku 2022.06", date: "2022-06-01" },
        { version: "2023.08", name: "Raku 2023.08", date: "2023-08-01" },
      ],
      stackovTags: ["raku"],
      githubName: "Raku",
      languishRanking: 205,
      githubLangId: "283",
      githubColor: "#0000fb",
      githubPopular: false,
      githubType: "programming",
      extWikipediaPath: "Raku_(programming_language)",
      extRedditPath: "rakulang",
      extHomeURL: "http://raku.org/",
      created: "2015",
    })
    .relDialectOf.add("pl+perl")
    .relInfluencedBy.add("pl+haskell", "pl+javascript", "pl+perl", "pl+ruby")
    .relLicenses.add("lic+artistic", "lic+gnu-gpl")
    .relParadigms.add("para+functional", "para+imperative", "para+multi", "para+oop")
    .relPlatforms.add("plat+cross")
    .relTags.add("tag+compiler", "tag+interpreters", "tag+scripting", "tag+testing")
    .relTypeSystems.add("tsys+dynamic", "tsys+gradual");

  // TOOLS

  // TOOL BUNDLES

  // LIBRARIES

  // APPS
}
