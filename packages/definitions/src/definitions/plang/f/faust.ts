import type { PlangsGraph } from "@plangs/plangs/graph";

export function define(g: PlangsGraph) {
  g.plang
    .set("pl+faust", {
      name: "FAUST",
      description:
        "Functional AUdio STream is a domain-specific programming language focused on designing sound synthesis and audio processing applications. It stands out for its high-performance real-time audio processing capabilities and compiles into various backends, offering flexibility across different platforms. Developed by GRAME-CNCM, it combines functional programming with a block diagram syntax.",
      shortDesc: "Designed for sound synthesis and high-performance audio processing, supporting multiple backends.",
      created: "2002",
      extensions: [".dsp"],
      extGithubPath: "grame-cncm/faust",
      extHomeURL: "http://faust.grame.fr/",
      extRedditPath: "faustdsp",
      extWikipediaPath: "FAUST_(programming_language)",
      githubColor: "#c37240",
      githubLangId: "622529198",
      githubName: "Faust",
      githubPopular: false,
      githubStars: 2600,
      githubType: "programming",
      isTranspiler: false,
      keywords: ["audio processing", "faust", "functional programming", "signal processing"],
      releases: [{ version: "2.60.3", name: "Stable Release", date: "2023-06-14" }],
    })
    .relInfluencedBy.add("pl+c")
    .relLicenses.add("lic+gnu-gpl")
    .relParadigms.add("para+compiled", "para+dataflow", "para+declarative", "para+dsl", "para+functional")
    .relPlatforms.add("plat+apple", "plat+cross", "plat+linux", "plat+web", "plat+windows")
    .relTags.add("tag+app", "tag+audio-dev", "tag+compiler", "tag+dsp", "tag+gui", "tag+interpreters", "tag+multimedia", "tag+wavelet")
    .relTypeSystems.add("tsys+manifest", "tsys+strong")
    .relWrittenWith.add("pl+c++");
}
