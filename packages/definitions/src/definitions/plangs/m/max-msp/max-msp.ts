import type { PlangsGraph } from "@plangs/plangs";

export function define(g: PlangsGraph) {
  g.nodes.pl
    .set("pl+max-msp", {
      name: "Max",
      description:
        "Max, also known as Max/MSP/Jitter, is a visual programming language for music and multimedia developed and maintained by San Francisco-based software company Cycling '74. Over its more than thirty-year history, it has been used by composers, performers, software designers, researchers, and artists to create recordings, performances, and installations.",
      websites: [
        { href: "https://cycling74.com/products/max/", title: "cycling74.com/products/max/", kind: "other" },
        { href: "https://en.wikipedia.org/wiki/Max/MSP", title: "Max", kind: "wikipedia" },
      ],
      releases: [{ version: "8.6.2", date: "2024-01-01" }],
    })
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
    .addWrittenIn(["pl+c", "pl+c++"]);
}
