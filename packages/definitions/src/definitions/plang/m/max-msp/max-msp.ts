import type { PlangsGraph } from "@plangs/plangs/graph";

export function define(g: PlangsGraph) {
  g.plang
    .set("pl+max-msp", {
      name: "Max",
      description:
        "Max, also known as Max/MSP/Jitter, is a visual programming language primarily used for music and multimedia development. It allows users to create interactive sound, graphics, and media applications through a scalable visual interface.",
      keywords: ["cycling74", "max for live", "max msp", "maxmsp"],
      extensions: [".maxpat", ".mxb", ".mxt"],
      releases: [
        { version: "8.6.2", name: "Max 8.6.2", date: "2024-03-19" },
        { version: "9", name: "Max 9", date: "2024-10-29" },
      ],
      stackovTags: ["max-msp-jitter"],
      githubName: "Max",
      languishRanking: 196,
      githubLangId: "227",
      githubColor: "#c4a79c",
      githubPopular: false,
      githubType: "programming",
      extWikipediaPath: "Max_(software)",
      extRedditPath: "MaxMSP",
      extHomeURL: "https://cycling74.com/products/max",
      created: "1988",
      isTranspiler: false,
      shortDesc: "Max is a visual language used for multimedia and music creation.",
    })
    .relLicenses.add("lic+proprietary")
    .relParadigms.add("para+dataflow", "para+event-driven", "para+visual")
    .relPlatforms.add("plat+apple", "plat+windows")
    .relTags.add(
      "tag+3dg",
      "tag+app",
      "tag+audio-dev",
      "tag+dsp",
      "tag+flow",
      "tag+gui",
      "tag+industrial",
      "tag+interpreters",
      "tag+midi",
      "tag+modular",
      "tag+multimedia",
      "tag+ray-tracer",
      "tag+video",
      "tag+viz",
      "tag+wavelet",
    )
    .relTypeSystems.add("tsys+dynamic")
    .relWrittenWith.add("pl+c", "pl+c++");

  // TOOLS

  // TOOL BUNDLES

  // LIBRARIES

  // APPS
}
