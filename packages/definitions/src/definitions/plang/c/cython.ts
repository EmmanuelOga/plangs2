import type { PlangsGraph } from "@plangs/plangs/graph";

export function define(g: PlangsGraph) {
  g.plang
    .set("pl+cython", {
      name: "Cython",
      description:
        "An optimising static compiler for both the Python programming language and the Cython language extensions, facilitating the writing of C extensions for Python. It allows for Python code to call C functions and includes C libraries, providing near-C performance.",
      shortDesc:
        "Is an optimising static compiler for Python and Cython extensions improving performance and interoperability with C.",
      created: "2007",
      extensions: [".pxd", ".pxi", ".pyx"],
      extGithubPath: "cython/cython",
      extHomeURL: "https://cython.org",
      extRedditPath: "Cython",
      extWikipediaPath: "Cython",
      githubColor: "#fedf5b",
      githubLangId: "79",
      githubName: "Cython",
      githubPopular: false,
      githubStars: 9600,
      githubType: "programming",
      isTranspiler: true,
      keywords: [
        "c",
        "compiler",
        "cython",
        "extension",
        "interoperability",
        "python",
      ],
      languishRanking: 103,
      releases: [{ version: "3.0.10", date: "2024-03-30" }],
      stackovTags: ["cython"],
    })
    .relCompilesTo.add("pl+c")
    .relDialectOf.add("pl+python")
    .relInfluencedBy.add("pl+c", "pl+python")
    .relLicenses.add("lic+apache")
    .relParadigms.add(
      "para+compiled",
      "para+functional",
      "para+multi",
      "para+oop",
      "para+scripting",
    )
    .relPlatforms.add("plat+apple", "plat+cross", "plat+linux", "plat+windows")
    .relTags.add(
      "tag+automation",
      "tag+compiler",
      "tag+interpreters",
      "tag+scripting",
    )
    .relTypeSystems.add("tsys+dynamic", "tsys+static", "tsys+strong")
    .relWrittenWith.add("pl+python");
}
