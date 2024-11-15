import type { PlangsGraph } from "@plangs/plangs";

export function define(g: PlangsGraph) {
  g.nodes.pl
    .set("pl+fortran", {
      name: "Fortran",
      description:
        "Fortran is a high-performance programming language optimized for numerical computation and scientific computing. Originally developed by IBM in the 1950s, Fortran excels in handling computationally intensive tasks and is widely used in areas like scientific research, engineering, and high-performance computing.",
      keywords: ["fortran", "high-performance computing", "scientific computing"],
      extensions: [".f", ".f90", ".for"],
      year: 1957,
      isMainstream: true,
      releases: [
        { version: "IV", name: "FORTRAN IV", date: "1962-01-01" },
        { version: "77", name: "FORTRAN 77", date: "1978-01-01" },
        { version: "90", name: "Fortran 90", date: "1991-01-01" },
        { version: "95", name: "Fortran 95", date: "1997-01-01" },
        { version: "2003", name: "Fortran 2003", date: "2004-01-01" },
        { version: "2008", name: "Fortran 2008", date: "2010-01-01" },
        { version: "2018", name: "Fortran 2018", date: "2018-01-01" },
        { version: "2023", name: "Fortran 2023", date: "2023-11-17" },
      ],
      stackovTags: ["fortran"],
      githubName: "Fortran",
      languishRanking: 67,
      githubLangId: "107",
      githubColor: "#4d41b1",
      githubPopular: false,
      githubType: "programming",
      extWikipediaPath: "Fortran",
      extRedditPath: "fortran",
      extHomeURL: "https://fortran-lang.org/",
    })
    .addParadigms([
      "paradigm+array",
      "paradigm+compiled",
      "paradigm+functional",
      "paradigm+imperative",
      "paradigm+multi",
      "paradigm+oop",
      "paradigm+procedural",
      "paradigm+structured",
    ])
    .addPlatforms(["plat+cross", "plat+linux", "plat+windows"])
    .addTags([
      "tag+analysis",
      "tag+app",
      "tag+asm",
      "tag+compiler",
      "tag+dsp",
      "tag+framework",
      "tag+industrial",
      "tag+interpreter",
      "tag+modeling",
      "tag+multivar",
      "tag+numeric",
      "tag+ray-tracer",
      "tag+sci",
      "tag+scripting",
      "tag+stats",
      "tag+testing",
      "tag+viz",
    ])
    .addTypeSystems(["tsys+manifest", "tsys+static", "tsys+strong"]);

  // TOOLS

  // TOOL BUNDLES

  // LIBRARIES

  // APPS
}