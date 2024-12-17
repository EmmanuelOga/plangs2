import type { PlangsGraph } from "@plangs/plangs/graph";

export function define(g: PlangsGraph) {
  g.plang
    .set("pl+puredata", {
      name: "Pure Data",
      description:
        "Visual programming language developed by Miller Puckette in the 1990s for creating interactive computer music and multimedia works. While Puckette is the main author of the program, Pd has a large developer base working on new extensions.",
      shortDesc: "Visual programming language for interactive computer music and multimedia.",
      created: "1996",
      extensions: [".pd"],
      extGithubPath: "pure-data/pure-data",
      extHomeURL: "https://puredata.info/",
      extRedditPath: "puredata",
      extWikipediaPath: "Pure_Data",
      githubLangId: "300",
      githubName: "Pure Data",
      githubPopular: false,
      githubStars: 1600,
      githubType: "data",
      isTranspiler: false,
      keywords: ["pd", "pure data", "puredata"],
      languishRanking: 306,
      releases: [{ version: "0.55-2", date: "2023-09-17" }],
      stackovTags: ["puredata"],
    })
    .relLicenses.add("lic+bsd")
    .relParadigms.add("para+concurrent", "para+dataflow", "para+event-driven", "para+visual")
    .relPlatforms.add("plat+android", "plat+apple", "plat+cross", "plat+linux", "plat+windows")
    .relTags.add(
      "tag+audio-dev",
      "tag+dataflow",
      "tag+dsp",
      "tag+flow",
      "tag+games",
      "tag+gui",
      "tag+industrial",
      "tag+interpreters",
      "tag+midi",
      "tag+multimedia",
      "tag+ray-tracer",
      "tag+video",
      "tag+wavelet",
    )
    .relTypeSystems.add("tsys+untyped")
    .relWrittenWith.add("pl+c");

  // TOOLS

  // TOOL BUNDLES

  // LIBRARIES

  // APPS
}
