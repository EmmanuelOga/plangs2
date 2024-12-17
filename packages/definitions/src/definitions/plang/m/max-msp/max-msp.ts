import type { PlangsGraph } from "@plangs/plangs/graph";

export function define(g: PlangsGraph) {
  g.plang
    .set("pl+max-msp", {
      name: "Max",
      description:
        "Also known as Max/MSP/Jitter. A visual programming language primarily used for music and multimedia development. It allows users to create interactive sound, graphics, and media applications through a scalable visual interface.",
      shortDesc: "Visual language used for multimedia and music creation.",
      created: "1988",
      extensions: [".maxpat", ".mxb", ".mxt"],
      extHomeURL: "https://cycling74.com/products/max",
      extRedditPath: "MaxMSP",
      extWikipediaPath: "Max_(software)",
      githubColor: "#c4a79c",
      githubLangId: "227",
      githubName: "Max",
      githubPopular: false,
      githubType: "programming",
      isTranspiler: false,
      keywords: ["cycling74", "max for live", "max msp", "maxmsp"],
      languishRanking: 196,
      releases: [
        { version: "8.6.2", name: "Max 8.6.2", date: "2024-03-19" },
        { version: "9", name: "Max 9", date: "2024-10-29" },
      ],
      stackovTags: ["max-msp-jitter"],
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
