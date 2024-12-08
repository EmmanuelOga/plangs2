import type { PlangsGraph } from "@plangs/plangs/graph";

export function define(g: PlangsGraph) {
  g.plang
    .set("pl+cython", {
      name: "Cython",
      description:
        "Cython is an optimising static compiler for both the Python programming language and the extended Cython programming language, making it easy to write C extensions for Python. It allows developers to write Python code that calls and interacts with C or C++ code with efficiency close to that of C.",
      keywords: ["c", "c++", "compiler", "cython", "extensions", "python"],
      extensions: [".pxd", ".pxi", ".pyx"],
      releases: [
        { version: "3.0.11-1", name: "Cython 3.0.11-1", date: "2024-08-05" },
        { version: "3.0.0 beta 2", name: "Cython 3.0.0 beta 2", date: "2023-03-27" },
        { version: "3.0.11", name: "Cython 3.0.11", date: "2024-01-01" },
        { version: "3.0.0", name: "Cython 3.0.0", date: "2023-01-01" },
      ],
      stackovTags: ["cython"],
      githubName: "Cython",
      languishRanking: 110,
      githubLangId: "79",
      githubColor: "#fedf5b",
      githubPopular: false,
      githubType: "programming",
      extWikipediaPath: "Cython",
      extRedditPath: "Cython",
      extHomeURL: "https://cython.org/",
      created: "2007",
    })
    .relDialectOf.add("pl+python")
    .relInfluencedBy.add("pl+c", "pl+python")
    .relLicenses.add("lic+apache")
    .relParadigms.add("para+compiled", "para+multi", "para+oop", "para+scripting")
    .relPlatforms.add("plat+apple", "plat+cross", "plat+linux", "plat+windows")
    .relTags.add("tag+automation", "tag+compiler", "tag+interpreters", "tag+scripting")
    .relTypeSystems.add("tsys+dynamic", "tsys+static", "tsys+strong")
    .relWrittenWith.add("pl+python");

  // TOOLS

  // TOOL BUNDLES

  // LIBRARIES

  // APPS
}
