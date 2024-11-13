import type { PlangsGraph } from "@plangs/plangs";

export function define(g: PlangsGraph) {
  g.nodes.pl
    .set("pl+clean", {
      name: "Clean",
      description:
        "Clean is a general-purpose purely functional programming language designed for real-world applications. It is known for its uniqueness typing, dynamic typing, generic functions, and lazy evaluation. Developed since 1987 by the Software Technology Research Group of Radboud University Nijmegen, Clean shares many properties with Haskell, offering an efficient compilation to machine code with its unique type system.",
      keywords: ["clean", "functional programming", "uniqueness typing"],
      websites: [
        { title: "Clean", href: "http://clean.cs.ru.nl/", kind: "homepage" },
        { title: "Clean (programming language) - Wikipedia", href: "https://en.wikipedia.org/wiki/Clean_(programming_language)", kind: "wikipedia" },
      ],
      extensions: [".abc", ".dcl", ".icl"],
      year: 1987,
      isMainstream: false,
      releases: [{ version: "3.1", name: "Clean 3.1", date: "2022-01-05" }],
      stackovTags: ["clean-language"],
      githubName: "Clean",
      languishRanking: 420,
      githubLangId: "60",
      githubColor: "#3F85AF",
      githubPopular: false,
      githubType: "programming",
    })
    .addInfluencedBy(["pl+haskell"])
    .addLicenses(["license+bsd"])
    .addParadigms(["paradigm+functional"])
    .addPlatforms(["plat+cross"])
    .addTags(["tag+app", "tag+compiler", "tag+interpreter"])
    .addTypeSystems(["tsys+dynamic", "tsys+static", "tsys+strong", "tsys+uniqueness"])
    .addWrittenIn(["pl+c"]);

  // TOOLS

  // TOOL BUNDLES

  // LIBRARIES

  // APPS
}
