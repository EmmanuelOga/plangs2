import type { PlangsGraph } from "@plangs/plangs/graph";

export function define(g: PlangsGraph) {
  g.plang
    .set("pl+labview", {
      name: "LabVIEW",
      description:
        "Graphical programming environment developed by National Instruments primarily used for data acquisition, instrument control, and industrial automation. It supports a visual programming language for rapid development of complex systems.",
      shortDesc:
        "Graphical environment for data acquisition and industrial automation.",
      created: "1986",
      extensions: [".lvproj", ".vi"],
      extHomeURL: "https://www.ni.com/labview",
      extRedditPath: "LabVIEW",
      extWikipediaPath: "LabVIEW",
      githubColor: "#fede06",
      githubLangId: "194",
      githubName: "LabVIEW",
      githubPopular: false,
      githubType: "programming",
      isTranspiler: false,
      languishRanking: 193,
      releases: [{ version: "2024 Q3", date: "2024-07-16" }],
      stackovTags: ["labview"],
    })
    .relLicenses.add("lic+proprietary")
    .relParadigms.add(
      "para+concurrent",
      "para+dataflow",
      "para+event-driven",
      "para+low-code",
      "para+multi",
      "para+simulation",
      "para+visual",
    )
    .relPlatforms.add("plat+apple", "plat+cross", "plat+linux", "plat+windows")
    .relTags.add(
      "tag+analysis",
      "tag+app",
      "tag+automation",
      "tag+compiler",
      "tag+control",
      "tag+dataflow",
      "tag+dataq",
      "tag+dsp",
      "tag+embedded",
      "tag+flow",
      "tag+framework",
      "tag+industrial",
      "tag+interpreters",
      "tag+low-code",
      "tag+modeling",
      "tag+scripting",
      "tag+stats",
      "tag+testing",
      "tag+viz",
      "tag+wavelet",
    )
    .relWrittenWith.add("pl+c", "pl+c++", "pl+c-sharp");
}
