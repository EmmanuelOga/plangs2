import type { PlangsGraph } from "@plangs/plangs";

export function define(g: PlangsGraph) {
  g.nodes.pl
    .set("pl+csound", {
      name: "Csound",
      description:
        'Csound is a domain-specific computer programming language for audio programming. It is called "Csound" because it is written in C, as opposed to some of its predecessors. Csound is known for its flexibility and high-quality audio synthesis capabilities, often used in computer music and audio processing.',
      keywords: ["csound"],
      websites: [
        { title: "csound.com", href: "http://csound.com/", kind: "homepage" },
        { title: "Csound", href: "https://en.wikipedia.org/wiki/Csound", kind: "wikipedia" },
      ],
      extensions: [".orc", ".sco"],
      firstAppeared: "1986-01-01",
      isTranspiler: false,
      isMainstream: false,
      releases: [{ version: "6.18.1", name: "Csound 6.18.1", date: "2022-01-01" }],
    })
    .addLicenses(["license+lgpl"])
    .addParadigms(["paradigm+compiled", "paradigm+dsl"])
    .addPlatforms(["plat+cross"])
    .addTags(["tag+audio-dev", "tag+dsp", "tag+industrial", "tag+interpreter", "tag+midi", "tag+testing"])
    .addTypeSystems(["tsys+strong"])
    .addWrittenIn(["pl+c"]);
}
