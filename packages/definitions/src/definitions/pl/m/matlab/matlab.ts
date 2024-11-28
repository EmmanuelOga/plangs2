import type { PlangsGraph } from "@plangs/plangs/graph";

export function define(g: PlangsGraph) {
  g.plang
    .set("pl+matlab", {
      name: "MATLAB",
      languishRanking: 47,
      stackovTags: ["matlab"],
      githubName: "MATLAB",
      githubLangId: "225",
      githubColor: "#e16737",
      githubPopular: false,
      githubType: "programming",
      description:
        "MATLAB is a proprietary multi-paradigm programming language and numerical computing environment developed by MathWorks, designed primarily for numerical computing. It supports matrix manipulations, data plotting, algorithm implementation, and the creation of user interfaces, among other features.",
      keywords: ["algorithms", "computing", "data analysis", "mathworks", "matrices", "matrix", "numerical", "programming", "visualization"],
      extensions: [".fig", ".m", ".mat", ".mex", ".mlapp", ".mlappinstall", ".mlpkginstall", ".mltbx", ".mlx", ".p"],
      releases: [
        { version: "R2024b", name: "Stable Release", date: "2024-09-12" },
        { version: "1.0", name: "Initial commercial release", date: "1984-01-01" },
      ],
      extWikipediaPath: "MATLAB",
      extRedditPath: "matlab",
      extHomeURL: "https://mathworks.com",
      created: "1979",
    })
    .relParadigms.add(["para+array", "para+functional", "para+imperative", "para+multi", "para+oop", "para+procedural"])
    .relPlatforms.add(["plat+apple", "plat+linux", "plat+windows"])
    .relTags.add(["tag+modeling", "tag+numeric", "tag+sci", "tag+scripting", "tag+viz"])
    .relTypeSystems.add(["tsys+dynamic", "tsys+weak"]);

  // TOOLS

  // TOOL BUNDLES

  // LIBRARIES

  // APPS
}
