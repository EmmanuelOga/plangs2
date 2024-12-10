import type { PlangsGraph } from "@plangs/plangs/graph";

export function define(g: PlangsGraph) {
  g.plang
    .set("pl+puredata", {
      name: "Pure Data",
      description:
        "Pure Data (Pd) is a visual programming language developed by Miller Puckette in the 1990s for creating interactive computer music and multimedia works. While Puckette is the main author of the program, Pd is an open-source project with a large developer base working on new extensions. It is released under the BSD-3-Clause license. It runs on Linux, macOS, iOS, Android, and Windows with ports for FreeBSD and IRIX.",
      keywords: ["pd", "pure data", "puredata"],
      extensions: [".pd"],
      releases: [
        { version: "0.53-2", name: "Stable release", date: "2023-03-15" },
        { version: "0.53", name: "Pd 0.53", date: "2023-01-01" },
      ],
      githubName: "Pure Data",
      githubLangId: "300",
      githubPopular: false,
      githubType: "data",
      languishRanking: 306,
      extWikipediaPath: "Pure_Data",
      extRedditPath: "puredata",
      stackovTags: ["puredata"],
      extHomeURL: "http://puredata.info/",
      created: "1996",
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
      "tag+industrial",
      "tag+interpreters",
      "tag+midi",
      "tag+multimedia",
      "tag+ray-tracer",
      "tag+gui",
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
