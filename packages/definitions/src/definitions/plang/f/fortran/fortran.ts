import type { PlangsGraph } from "@plangs/plangs/graph";

export function define(g: PlangsGraph) {
  g.plang
    .set("pl+fortran", {
      name: "Fortran",
      description:
        "Fortran is a high-performance programming language optimized for numerical computation and scientific computing. Originally developed by IBM in the 1950s, Fortran excels in handling computationally intensive tasks and is widely used in areas like scientific research, engineering, and high-performance computing.",
      shortDesc: "Fortran is optimized for high-performance numerical computation and scientific computing.",
      created: "1957",
      extensions: [".f", ".f90", ".for"],
      extHomeURL: "https://fortran-lang.org/",
      extRedditPath: "fortran",
      extWikipediaPath: "Fortran",
      githubColor: "#4d41b1",
      githubLangId: "107",
      githubName: "Fortran",
      githubPopular: false,
      githubType: "programming",
      isTranspiler: false,
      keywords: ["fortran", "high-performance computing", "scientific computing"],
      languishRanking: 67,
      links: [{ url: "https://github.com/fortran-lang", title: "Fortran Language GitHub Org" }],
      stackovTags: ["fortran"],
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
