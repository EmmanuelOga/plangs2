import type { PlangsGraph } from "@plangs/plangs/graph";

export function define(g: PlangsGraph) {
  g.plang
    .set("pl+extempore", {
      name: "Extempore",
      description:
        "Programming language aimed at providing a high-performance environment for real-time audiovisual computing. It supports live coding and integrates Scheme with unique extensions, intended to help developers construct cyber-physical systems.",
      shortDesc:
        "High-performance language for real-time audiovisual computing and live coding.",
      created: "2011",
      extensions: [".xtm"],
      extGithubPath: "digego/extempore",
      extHomeURL: "https://extemporelang.github.io/",
      extWikipediaPath: "Extempore_(software)",
      filenames: ["Makefile"],
      githubStars: 1400,
      isTranspiler: false,
      keywords: ["audiovisual", "extempore", "live-coding", "real-time"],
      releases: [{ version: "0.8.9", name: "", date: "2021-05-06" }],
    })
    .relImplements.add("pl+scheme")
    .relInfluencedBy.add("pl+lisp", "pl+scheme")
    .relLicenses.add("lic+bsd")
    .relParadigms.add(
      "para+functional",
      "para+general-purpose",
      "para+interpreted",
      "para+multi",
      "para+real-time",
    )
    .relPlatforms.add("plat+apple", "plat+cross", "plat+linux", "plat+windows")
    .relTags.add(
      "tag+audio-dev",
      "tag+compiler",
      "tag+dsp",
      "tag+multimedia",
      "tag+wavelet",
    )
    .relTypeSystems.add("tsys+dynamic", "tsys+static")
    .relWrittenWith.add("pl+c");
}
