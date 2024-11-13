import type { PlangsGraph } from "@plangs/plangs";

export function define(g: PlangsGraph) {
  g.nodes.pl
    .set("pl+cython", {
      name: "Cython",
      description:
        "Cython (/ˈsaɪθɒn/) is a superset of the programming language Python, which allows developers to write Python code (with optional, C-inspired syntax extensions) that yields performance comparable to that of C. It is designed to give C-like performance with code that is written mostly in a Python-like syntax.",
      keywords: ["cython"],
      websites: [
        { title: "cython.org", href: "https://cython.org/", kind: "homepage" },
        { title: "Cython", href: "https://en.wikipedia.org/wiki/Cython", kind: "wikipedia" },
        { title: "Cython on Reddit", kind: "reddit", href: "https://reddit.com/r/Cython" },
      ],
      extensions: [".pxd", ".pxi", ".pyx"],
      year: 2007,
      isTranspiler: false,
      isMainstream: true,
      releases: [
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
    })
    .addDialectOf(["pl+python"])
    .addInfluencedBy(["pl+c", "pl+python"])
    .addLicenses(["license+apache"])
    .addParadigms(["paradigm+compiled", "paradigm+multi"])
    .addPlatforms(["plat+apple", "plat+cross", "plat+linux", "plat+windows"])
    .addTags(["tag+automation", "tag+compiler", "tag+interpreter", "tag+scripting"])
    .addTypeSystems(["tsys+dynamic", "tsys+strong"])
    .addWrittenIn(["pl+python"]);

  // TOOLS

  // TOOL BUNDLES

  // LIBRARIES

  // APPS
}
