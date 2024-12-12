import type { PlangsGraph } from "@plangs/plangs/graph";

export function define(g: PlangsGraph) {
  g.plang
    .set("pl+extempore", {
      name: "Extempore",
      description:
        "Extempore is a programming language aimed at providing a high-performance environment for real-time audiovisual computing. It supports live coding and integrates Scheme with unique extensions, intended to help developers construct cyber-physical systems.",
      keywords: ["audiovisual", "extempore", "live-coding", "real-time"],
      releases: [{ version: "0.8.9", name: "", date: "2021-05-06" }],
      extensions: [".xtm"],
      extWikipediaPath: "Extempore_(software)",
      extGithubPath: "digego/extempore",
      created: "2011",
      filenames: ["Makefile"],
      isTranspiler: false,
      shortDesc: "Extempore is a high-performance language for real-time audiovisual computing and live coding.",
      extHomeURL: "https://extemporelang.github.io/",
      githubStars: 1400,
      ghRepoCreated: "2012-01-15",
    })
    .relImplements.add("pl+scheme")
    .relInfluencedBy.add("pl+lisp", "pl+scheme")
    .relLicenses.add("lic+bsd")
    .relParadigms.add("para+functional", "para+interpreted", "para+multi", "para+real-time")
    .relPlatforms.add("plat+apple", "plat+cross", "plat+linux", "plat+windows")
    .relTags.add("tag+audio-dev", "tag+compiler", "tag+dsp", "tag+multimedia", "tag+wavelet")
    .relTypeSystems.add("tsys+dynamic", "tsys+static")
    .relWrittenWith.add("pl+c");

  // TOOLS

  // TOOL BUNDLES

  // LIBRARIES

  // APPS
}
