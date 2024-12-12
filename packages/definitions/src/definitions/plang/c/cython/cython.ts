import type { PlangsGraph } from "@plangs/plangs/graph";

export function define(g: PlangsGraph) {
  g.plang
    .set("pl+cython", {
      name: "Cython",
      description:
        "Cython is an optimising static compiler for both the Python programming language and the Cython language extensions, facilitating the writing of C extensions for Python. It allows for Python code to call C functions and includes C libraries, providing near-C performance.",
      keywords: ["c", "compiler", "cython", "extension", "interoperability", "python"],
      extensions: [".pxd", ".pxi", ".pyx"],
      releases: [{ version: "3.0.10", date: "2024-03-30" }],
      stackovTags: ["cython"],
      githubName: "Cython",
      languishRanking: 110,
      githubLangId: "79",
      githubColor: "#fedf5b",
      githubPopular: false,
      githubType: "programming",
      extWikipediaPath: "Cython",
      extRedditPath: "Cython",
      extHomeURL: "https://cython.org",
      created: "2007",
      isTranspiler: true,
      shortDesc: "Cython is an optimising static compiler for Python and Cython extensions improving performance and interoperability with C.",
      githubStars: 9600,
      extGithubPath: "cython/cython",
      ghRepoCreated: "2010-01-01",
    })
    .relCompilesTo.add("pl+c")
    .relDialectOf.add("pl+python")
    .relInfluencedBy.add("pl+c", "pl+python")
    .relLicenses.add("lic+apache")
    .relParadigms.add("para+compiled", "para+functional", "para+multi", "para+oop", "para+scripting")
    .relPlatforms.add("plat+apple", "plat+cross", "plat+linux", "plat+windows")
    .relTags.add("tag+automation", "tag+compiler", "tag+interpreters", "tag+scripting")
    .relTypeSystems.add("tsys+dynamic", "tsys+static", "tsys+strong")
    .relWrittenWith.add("pl+python");

  // TOOLS

  // TOOL BUNDLES

  // LIBRARIES

  // APPS
}
