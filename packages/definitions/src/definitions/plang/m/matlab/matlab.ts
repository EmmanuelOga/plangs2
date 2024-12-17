import type { PlangsGraph } from "@plangs/plangs/graph";

export function define(g: PlangsGraph) {
  g.plang
    .set("pl+matlab", {
      name: "MATLAB",
      description:
        "Proprietary multi-paradigm programming language and numerical computing environment developed by MathWorks, designed primarily for numerical computing. It supports matrix manipulations, data plotting, algorithm implementation, and the creation of user interfaces, among other features.",
      shortDesc: "Proprietary multi-paradigm programming language and numerical computing environment.",
      created: "1979",
      extensions: [".fig", ".m", ".mat", ".mex", ".mlapp", ".mlappinstall", ".mlpkginstall", ".mltbx", ".mlx", ".p"],
      extRedditPath: "matlab",
      extWikipediaPath: "MATLAB",
      githubColor: "#e16737",
      githubLangId: "225",
      githubName: "MATLAB",
      githubPopular: false,
      githubType: "programming",
      isTranspiler: false,
      keywords: ["algorithms", "computing", "data analysis", "mathworks", "matrices", "matrix", "numerical", "programming", "visualization"],
      languishRanking: 47,
      releases: [
        { version: "R2024b", name: "Stable Release", date: "2024-09-12" },
        { version: "1.0", name: "Initial commercial release", date: "1984-01-01" },
      ],
      stackovTags: ["matlab"],
    })
    .relParadigms.add("para+array", "para+functional", "para+imperative", "para+multi", "para+oop", "para+procedural")
    .relPlatforms.add("plat+apple", "plat+linux", "plat+windows")
    .relTags.add("tag+modeling", "tag+numeric", "tag+sci", "tag+scripting", "tag+viz")
    .relTypeSystems.add("tsys+dynamic", "tsys+weak");

  // TOOLS

  // TOOL BUNDLES

  // LIBRARIES

  // APPS
}
