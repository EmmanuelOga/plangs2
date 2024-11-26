import type { PlangsGraph } from "@plangs/plangs/graph";

export function define(g: PlangsGraph) {
  g.plang.    .set("pl+faust", {
      name: "FAUST",
      description:
        "FAUST (Functional AUdio STream) is a domain-specific purely functional programming language designed for implementing signal processing algorithms, sound synthesis, and audio processing applications. Developed by GRAME-CNCM, it emphasizes high-performance real-time audio processing through a combination of functional programming and block diagram syntax. The language compiles into various backend formats, making it suitable for various platforms and standards.",
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
    })
    .relInfluencedBy.add(["pl+c"])
    .relLicense.add(["license+gnu-gpl"])
    .relParadigm.add(["para+compiled", "para+dataflow", "para+declarative", "para+dsl", "para+functional"])
    .relPlatforms.add(["plat+apple", "plat+cross", "plat+linux", "plat+web", "plat+windows"])
    .relTags.add(["tag+app", "tag+audio-dev", "tag+compiler", "tag+dsp", "tag+interpreters", "tag+multimedia", "tag+ui", "tag+wavelet"])
    .relTsys.add(["tsys+manifest", "tsys+strong"])
    .relWrittenIn.add(["pl+c++"]);

  // TOOLS

  // TOOL BUNDLES

  // LIBRARIES

  // APPS
}
