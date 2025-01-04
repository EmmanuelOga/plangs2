import type { PlangsGraph } from "@plangs/plangs/graph";

export function define(g: PlangsGraph) {
  g.plang
    .set("pl+perl", {
      name: "Perl",
      description:
        'High-level, general-purpose, interpreted, dynamic programming language. Though Perl is not officially an acronym, there are various backronyms in use, including "Practical Extraction and Reporting Language".',
      shortDesc: "Dynamic language known for its text-processing capabilities.",
      created: "1987",
      extensions: [
        ".cgi",
        ".pl",
        ".pls",
        ".plx",
        ".pm",
        ".pod",
        ".psgi",
        ".t",
        ".xs",
      ],
      extGithubPath: "Perl/perl5",
      extHomeURL: "https://www.perl.org/",
      extRedditPath: "perl",
      extWikipediaPath: "Perl",
      githubColor: "#0298c3",
      githubLangId: "282",
      githubName: "Perl",
      githubPopular: true,
      githubStars: 2000,
      githubType: "programming",
      isTranspiler: false,
      keywords: ["perl"],
      languishRanking: 54,
      releases: [
        { version: "5.40.0", name: "Perl 5.40.0", date: "2024-06-09" },
        { version: "5.38.2", name: "Perl 5.38.2", date: "2023-11-29" },
        { version: "5.41.3", name: "Perl 5.41.3", date: "2024-08-29" },
      ],
      stackovTags: ["perl"],
    })
    .relInfluencedBy.add(
      "pl+awk",
      "pl+basic",
      "pl+c",
      "pl+c++",
      "pl+lisp",
      "pl+raku",
      "pl+sed",
    )
    .relLicenses.add("lic+artistic", "lic+gnu-gpl")
    .relParadigms.add(
      "para+functional",
      "para+multi",
      "para+oop",
      "para+procedural",
      "para+scripting",
    )
    .relPlatforms.add("plat+cross")
    .relTags.add(
      "tag+app",
      "tag+compiler",
      "tag+dbms",
      "tag+framework",
      "tag+genomics",
      "tag+industrial",
      "tag+interpreters",
      "tag+scripting",
      "tag+shell",
      "tag+viz",
    )
    .relTypeSystems.add("tsys+duck", "tsys+dynamic", "tsys+object")
    .relWrittenWith.add("pl+c");
}
