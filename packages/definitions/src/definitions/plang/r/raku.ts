import type { PlangsGraph } from "@plangs/plangs/graph";

export function define(g: PlangsGraph) {
  g.plang
    .set("pl+raku", {
      name: "Raku",
      description:
        "A member of the Perl family of programming languages. Formerly named Perl 6, it was renamed in October 2019. Raku introduces elements of many modern and historical languages. Compatibility with Perl was not a goal, though a compatibility mode is part of the specification. The design process for Raku began in 2000. Designed by Larry Wall and developed by the Raku community, it is a multi-paradigm language with a dynamic and gradual typing system.",
      shortDesc:
        "Raku, formerly Perl 6, is a multi-paradigm language in the Perl family, featuring dynamic and gradual typing.",
      created: "2015",
      extensions: [".raku", ".rakudoc", ".rakumod", ".rakutest", ".t"],
      extHomeURL: "http://raku.org/",
      extRedditPath: "rakulang",
      extWikipediaPath: "Raku_(programming_language)",
      githubColor: "#0000fb",
      githubLangId: "283",
      githubName: "Raku",
      githubPopular: false,
      githubType: "programming",
      isTranspiler: false,
      keywords: ["perl6", "raku"],
      languishRanking: 154,
      releases: [
        { version: "2023.08", name: "Raku 2023.08", date: "2023-08-01" },
      ],
      stackovTags: ["raku"],
    })
    .relDialectOf.add("pl+perl")
    .relInfluencedBy.add("pl+haskell", "pl+javascript", "pl+perl", "pl+ruby")
    .relLicenses.add("lic+artistic", "lic+gnu-gpl")
    .relParadigms.add(
      "para+functional",
      "para+general-purpose",
      "para+imperative",
      "para+multi",
      "para+oop",
    )
    .relPlatforms.add("plat+cross")
    .relTags.add(
      "tag+compiler",
      "tag+interpreters",
      "tag+scripting",
      "tag+testing",
    )
    .relTypeSystems.add("tsys+dynamic", "tsys+gradual", "tsys+object");
}
