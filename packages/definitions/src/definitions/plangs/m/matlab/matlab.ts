import type { PlangsGraph } from "@plangs/plangs";

export function define(g: PlangsGraph) {
  g.nodes.pl
    .set("pl+matlab", {
      name: "MATLAB",
      languishRanking: 47,
      websites: [
        { kind: "reddit", title: "MATLAB on Reddit", href: "https://reddit.com/r/matlab" },
        { title: "MATLAB on Wikipedia", href: "https://en.wikipedia.org/wiki/MATLAB", kind: "wikipedia" },
        { title: "Official MATLAB Website", href: "https://mathworks.com", kind: "homepage" },
      ],
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
      year: 1979,
      isMainstream: true,
      releases: [
        { version: "R2024b", name: "Stable Release", date: "2024-09-12" },
        { version: "1.0", name: "Initial commercial release", date: "1984-01-01" },
      ],
    })
    .addParadigms(["paradigm+array", "paradigm+functional", "paradigm+imperative", "paradigm+multi", "paradigm+oop", "paradigm+procedural"])
    .addPlatforms(["plat+apple", "plat+linux", "plat+windows"])
    .addTags(["tag+modeling", "tag+numeric", "tag+sci", "tag+scripting", "tag+viz"])
    .addTypeSystems(["tsys+dynamic", "tsys+weak"]);

  // TOOLS

  // TOOL BUNDLES

  // LIBRARIES

  // APPS
}
