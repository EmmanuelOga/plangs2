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
        { title: "Max on Reddit", kind: "reddit", href: "https://reddit.com/r/MaxMSP" },
        { title: "Max on Wikipedia", kind: "wikipedia", href: "https://en.wikipedia.org/wiki/Max_(software)" },
      ],
      extensions: [".maxpat", ".mxb", ".mxt"],
      year: 1988,
      isTranspiler: false,
      isMainstream: false,
      releases: [{ version: "8.6.2", name: "Max 8.6.2", date: "2024-01-01" }],
      stackovTags: ["max-msp-jitter"],
      githubName: "Max",
      languishRanking: 196,
      githubLangId: "227",
      githubColor: "#c4a79c",
      githubPopular: false,
      githubType: "programming",
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

  // TOOLS

  // TOOL BUNDLES

  // LIBRARIES

  // APPS
}
