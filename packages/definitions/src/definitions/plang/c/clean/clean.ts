import type { PlangsGraph } from "@plangs/plangs/graph";

export function define(g: PlangsGraph) {
  g.plang
    .set("pl+clean", {
      name: "Clean",
      description:
        "Clean is a general-purpose purely functional programming language designed for real-world applications. It is known for its uniqueness typing, dynamic typing, generic functions, and lazy evaluation. Developed since 1987 by the Software Technology Research Group of Radboud University Nijmegen, Clean shares many properties with Haskell, offering an efficient compilation to machine code with its unique type system.",
      keywords: ["clean", "functional programming", "uniqueness typing"],
      extensions: [".abc", ".dcl", ".icl"],
      releases: [{ version: "3.1", name: "Clean 3.1", date: "2022-01-05" }],
      stackovTags: ["clean-language"],
      githubName: "Clean",
      languishRanking: 420,
      githubLangId: "60",
      githubColor: "#3F85AF",
      githubPopular: false,
      githubType: "programming",
      extWikipediaPath: "Clean_(programming_language)",
      extHomeURL: "http://clean.cs.ru.nl/",
      created: "1987",
      isTranspiler: false,
      shortDesc: "Clean is a functional programming language known for uniqueness typing and lazy evaluation.",
      ghRepoCreated: "2017-05-07",
    })
    .relInfluencedBy.add("pl+haskell")
    .relLicenses.add("lic+bsd")
    .relParadigms.add("para+compiled", "para+functional", "para+lazy")
    .relPlatforms.add("plat+cross")
    .relTags.add("tag+app", "tag+compiler", "tag+interpreters")
    .relTypeSystems.add("tsys+dynamic", "tsys+static", "tsys+strong", "tsys+uniqueness")
    .relWrittenWith.add("pl+c");

  // TOOLS

  // TOOL BUNDLES

  // LIBRARIES

  // APPS
}
