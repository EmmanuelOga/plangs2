import type { PlangsGraph } from "@plangs/plangs";

export function define(g: PlangsGraph) {
  g.nodes.pl
    .set("pl+faust", {
      name: "FAUST",
      description:
        "FAUST (Functional AUdio STream) is a domain-specific purely functional programming language for implementing signal processing algorithms in the form of libraries, audio plug-ins, or standalone applications. A FAUST program denotes a signal processor: a mathematical function that is applied to some input signal and then fed out.",
      websites: [
        { href: "http://faust.grame.fr/", title: "faust.grame.fr", kind: "homepage" },
        { href: "https://en.wikipedia.org/wiki/FAUST_(programming_language)", title: "FAUST", kind: "wikipedia" },
      ],
      releases: [{ version: "2.60.3", date: "2023-01-01" }],
    })
    .addLicenses(["license+gnu-gpl"])
    .addPlatforms(["plat+linux", "plat+windows"])
    .addTags(["tag+app", "tag+audio-dev", "tag+compiler", "tag+dsp", "tag+interpreter", "tag+ui", "tag+wavelet"])
    .addWrittenIn(["pl+c++"]);
}
