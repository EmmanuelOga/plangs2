import type { PlangsGraph } from "@plangs/plangs";

export function define(g: PlangsGraph) {
  g.nodes.pl
    .set("pl+max-msp", {
      name: "Max",
      description:
        "Max, also known as Max/MSP/Jitter, is a visual programming language for music and multimedia developed and maintained by San Francisco-based software company Cycling '74. It allows users to create interactive sound, graphics, and media applications through a modular and flexible visual interface.",
      keywords: ["max msp", "maxmsp"],
      websites: [
        { title: "cycling74.com/products/max/", href: "https://cycling74.com/products/max/", kind: "other" },
        { title: "Max", href: "https://en.wikipedia.org/wiki/Max/MSP", kind: "wikipedia" },
      ],
      extensions: [".maxpat", ".mxb", ".mxt"],
      year: 1988,
      isTranspiler: false,
      isMainstream: false,
      releases: [{ version: "8.6.2", name: "Max 8.6.2", date: "2024-01-01" }],
    })
    .addParadigms(["paradigm+dataflow", "paradigm+event-driven", "paradigm+visual"])
    .addPlatforms(["plat+apple", "plat+windows"])
    .addTags([
      "tag+3dg",
      "tag+app",
      "tag+audio-dev",
      "tag+dsp",
      "tag+flow",
      "tag+industrial",
      "tag+interpreter",
      "tag+midi",
      "tag+modular",
      "tag+multimedia",
      "tag+ray-tracer",
      "tag+ui",
      "tag+video",
      "tag+viz",
      "tag+wavelet",
    ])
    .addTypeSystems(["tsys+dynamic"])
    .addWrittenIn(["pl+c", "pl+c++"]);
}
