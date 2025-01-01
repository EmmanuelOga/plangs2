import type { PlangsGraph } from "@plangs/plangs/graph";

export function define(g: PlangsGraph) {
  g.plang
    .set("pl+reason", {
      name: "Reason",
      description:
        "General-purpose, high-level, multi-paradigm programming language and syntax extension for OCaml, created by Jordan Walke at Facebook. It focuses on functional and object-oriented programming features and compiles to native code via OCaml's compiler, as well as to JavaScript using a ReScript compiler.",
      shortDesc: "Multi-paradigm language focusing on functional programming, compiling to OCaml and JavaScript.",
      created: "2016",
      extensions: [".re", ".rei"],
      extGithubPath: "reasonml/reason",
      extHomeURL: "https://reasonml.github.io",
      extRedditPath: "reasonml",
      extWikipediaPath: "Reason_(programming_language)",
      githubColor: "#ff5847",
      githubLangId: "869538413",
      githubName: "Reason",
      githubPopular: false,
      githubStars: 10200,
      githubType: "programming",
      isTranspiler: true,
      keywords: ["ocaml", "reasonml"],
      languishRanking: 245,
      releases: [{ version: "3.14.0", date: "2024-09-28" }],
      stackovTags: ["reason"],
    })
    .relCompilesTo.add("pl+javascript", "pl+ocaml")
    .relDialectOf.add("pl+ocaml")
    .relInfluencedBy.add("pl+javascript", "pl+ocaml")
    .relLicenses.add("lic+mit")
    .relParadigms.add("para+functional", "para+general-purpose", "para+modular", "para+multi", "para+oop")
    .relPlatforms.add("plat+cross", "plat+linux", "plat+windows")
    .relTags.add("tag+app", "tag+compiler", "tag+framework", "tag+interpreters", "tag+scripting")
    .relTypeSystems.add("tsys+flow", "tsys+generic", "tsys+object", "tsys+static", "tsys+strong")
    .relWrittenWith.add("pl+ocaml");
}
