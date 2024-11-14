import type { PlangsGraph } from "@plangs/plangs";

export function define(g: PlangsGraph) {
  g.nodes.pl
    .set("pl+faust", {
      name: "FAUST",
      description:
        "FAUST (Functional AUdio STream) is a domain-specific purely functional programming language designed for implementing signal processing algorithms, sound synthesis, and audio processing applications. Developed by GRAME-CNCM, it emphasizes high-performance real-time audio processing through a combination of functional programming and block diagram syntax. The language compiles into various backend formats, making it suitable for various platforms and standards.",
      keywords: ["audio processing", "faust", "functional programming", "signal processing"],
      websites: [
        { title: "Faust Programming Language", href: "http://faust.grame.fr/", kind: "homepage" },
        { title: "FAUST (programming language) - Wikipedia", href: "https://en.wikipedia.org/wiki/FAUST_(programming_language)", kind: "wikipedia" },
      ],
      extensions: [".dsp"],
      year: 2002,
      isMainstream: false,
      releases: [{ version: "2.60.3", name: "Stable Release", date: "2023-06-14" }],
      githubName: "Faust",
      githubLangId: "622529198",
      githubColor: "#c37240",
      githubPopular: false,
      githubType: "programming",
    })
    .addInfluencedBy(["pl+c"])
    .addLicenses(["license+gnu-gpl"])
    .addParadigms(["paradigm+compiled", "paradigm+dataflow", "paradigm+declarative", "paradigm+dsl", "paradigm+functional"])
    .addPlatforms(["plat+apple", "plat+cross", "plat+linux", "plat+web", "plat+windows"])
    .addTags(["tag+app", "tag+audio-dev", "tag+compiler", "tag+dsp", "tag+interpreter", "tag+multimedia", "tag+ui", "tag+wavelet"])
    .addTypeSystems(["tsys+manifest", "tsys+strong"])
    .addWrittenIn(["pl+c++"]);

  // TOOLS

  // TOOL BUNDLES

  // LIBRARIES

  // APPS
}
