import type { PlangsGraph } from "@plangs/plangs/graph";

export function define(g: PlangsGraph) {
  g.plang
    .set("pl+fortran", {
      name: "Fortran",
      description:
        "Fortran is a high-performance programming language optimized for numerical computation and scientific computing. Originally developed by IBM in the 1950s, Fortran excels in handling computationally intensive tasks and is widely used in areas like scientific research, engineering, and high-performance computing.",
      keywords: ["fortran", "high-performance computing", "scientific computing"],
      extensions: [".f", ".f90", ".for"],
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
      created: "1957",
      isTranspiler: false,
      shortDesc: "Fortran is optimized for high-performance numerical computation and scientific computing.",
      links: [{ url: "https://github.com/fortran-lang", title: "Fortran Language GitHub Org" }],
    })
    .relParadigms.add(
      "para+array",
      "para+compiled",
      "para+functional",
      "para+imperative",
      "para+multi",
      "para+oop",
      "para+procedural",
      "para+structured",
    )
    .relPlatforms.add("plat+cross", "plat+linux", "plat+windows")
    .relTags.add(
      "tag+analysis",
      "tag+app",
      "tag+asm",
      "tag+compiler",
      "tag+dsp",
      "tag+framework",
      "tag+industrial",
      "tag+interpreters",
      "tag+modeling",
      "tag+multivar",
      "tag+numeric",
      "tag+ray-tracer",
      "tag+sci",
      "tag+scripting",
      "tag+stats",
      "tag+testing",
      "tag+viz",
    )
    .relTypeSystems.add("tsys+manifest", "tsys+static", "tsys+strong");

  // TOOLS

  // TOOL BUNDLES

  // LIBRARIES

  // APPS
}
