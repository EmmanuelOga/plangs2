import type { PlangsGraph } from "@plangs/plangs/graph";

export function define(g: PlangsGraph) {
  g.plang
    .set("pl+clean", {
      name: "Clean",
      description:
        "General-purpose purely functional programming language designed for real-world applications. It is known for its uniqueness typing, dynamic typing, generic functions, and lazy evaluation. Developed since 1987 by the Software Technology Research Group of Radboud University Nijmegen, Clean shares many properties with Haskell, offering an efficient compilation to machine code with its unique type system.",
      shortDesc: "Functional programming language known for uniqueness typing and lazy evaluation.",
      created: "1987",
      extensions: [".abc", ".dcl", ".icl"],
      extHomeURL: "http://clean.cs.ru.nl/",
      extWikipediaPath: "Clean_(programming_language)",
      githubColor: "#3F85AF",
      githubLangId: "60",
      githubName: "Clean",
      githubPopular: false,
      githubType: "programming",
      isTranspiler: false,
      keywords: ["clean", "functional programming", "uniqueness typing"],
      languishRanking: 420,
      releases: [{ version: "3.1", name: "Clean 3.1", date: "2022-01-05" }],
      stackovTags: ["clean-language"],
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
