import type { PlangsGraph } from "@plangs/plangs/graph";

export function define(g: PlangsGraph) {
  g.plang
    .set("pl+faust", {
      name: "FAUST",
      description:
        "FAUST (Functional AUdio STream) is a domain-specific programming language focused on designing sound synthesis and audio processing applications. It stands out for its high-performance real-time audio processing capabilities and compiles into various backends, offering flexibility across different platforms. Developed by GRAME-CNCM, it combines functional programming with a block diagram syntax.",
      keywords: ["audio processing", "faust", "functional programming", "signal processing"],
      extensions: [".dsp"],
      releases: [{ version: "2.60.3", name: "Stable Release", date: "2023-06-14" }],
      githubName: "Faust",
      githubLangId: "622529198",
      githubColor: "#c37240",
      githubPopular: false,
      githubType: "programming",
      extWikipediaPath: "FAUST_(programming_language)",
      extRedditPath: "faustdsp",
      extHomeURL: "http://faust.grame.fr/",
      created: "2002",
      isTranspiler: false,
      shortDesc: "FAUST is designed for sound synthesis and high-performance audio processing, supporting multiple backends.",
      githubStars: 2600,
      extGithubPath: "grame-cncm/faust",
    })
    .relInfluencedBy.add("pl+c")
    .relLicenses.add("lic+gnu-gpl")
    .relParadigms.add("para+compiled", "para+dataflow", "para+declarative", "para+dsl", "para+functional")
    .relPlatforms.add("plat+apple", "plat+cross", "plat+linux", "plat+web", "plat+windows")
    .relTags.add("tag+app", "tag+audio-dev", "tag+compiler", "tag+dsp", "tag+gui", "tag+interpreters", "tag+multimedia", "tag+wavelet")
    .relTypeSystems.add("tsys+manifest", "tsys+strong")
    .relWrittenWith.add("pl+c++");

  // TOOLS

  // TOOL BUNDLES

  // LIBRARIES

  // APPS
}
