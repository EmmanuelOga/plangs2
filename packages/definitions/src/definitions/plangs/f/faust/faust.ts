import type { PlangsGraph } from "@plangs/plangs";

export function define(g: PlangsGraph) {
  g.nodes.pl
    .set("pl+faust", {
      name: "FAUST",
      description:
        "FAUST (Functional AUdio STream) is a domain-specific, purely functional programming language used for real-time signal processing and audio applications. FAUST is designed to facilitate the creation of signal processing algorithms that are directly compiled into efficient C++ code, enabling high-performance standalone applications, audio plug-ins, or even embedded software.",
      keywords: ["faust"],
      websites: [
        { title: "faust.grame.fr", href: "http://faust.grame.fr/", kind: "homepage" },
        { title: "FAUST", href: "https://en.wikipedia.org/wiki/FAUST_(programming_language)", kind: "wikipedia" },
      ],
      extensions: [".dsp"],
      year: 2002,
      isTranspiler: true,
      isMainstream: false,
      releases: [{ version: "2.60.3", name: "FAUST 2.60.3", date: "2023-01-01" }],
    })
    .addInfluencedBy(["pl+c"])
    .addLicenses(["license+gnu-gpl"])
    .addParadigms(["paradigm+compiled", "paradigm+dataflow", "paradigm+declarative", "paradigm+dsl", "paradigm+functional"])
    .addPlatforms(["plat+apple", "plat+cross", "plat+linux", "plat+windows"])
    .addTags(["tag+app", "tag+audio-dev", "tag+compiler", "tag+dsp", "tag+interpreter", "tag+ui", "tag+wavelet"])
    .addTypeSystems(["tsys+manifest", "tsys+strong"])
    .addWrittenIn(["pl+c++"]);
}
