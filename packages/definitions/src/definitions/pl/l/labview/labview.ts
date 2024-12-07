import type { PlangsGraph } from "@plangs/plangs/graph";

export function define(g: PlangsGraph) {
  g.plang
    .set("pl+labview", {
      name: "LabVIEW",
      description:
        "Laboratory Virtual Instrument Engineering Workbench (LabVIEW) is a graphical system design and development platform produced and distributed by National Instruments, based on a programming environment that uses a visual programming language. It is widely used for data acquisition, instrument control, and industrial automation. It provides tools for designing and deploying complex test and measurement systems.",
      keywords: ["labview"],
      extensions: [".lvproj", ".vi"],
      releases: [
        { version: "2024 Q3", name: "LabVIEW 2024 Q3", date: "2024-07-01" },
        { version: "NXG 5.1", name: "LabVIEW NXG 5.1", date: "2021-01-01" },
        { version: "5.1", name: "LabVIEW 5.1", date: "2023-01-01" },
      ],
      stackovTags: ["labview"],
      githubName: "LabVIEW",
      languishRanking: 193,
      githubLangId: "194",
      githubColor: "#fede06",
      githubPopular: false,
      githubType: "programming",
      extWikipediaPath: "LabVIEW",
      extRedditPath: "LabVIEW",
      extHomeURL: "https://www.ni.com/labview",
      created: "1986",
    })
    .relParadigms.add("para+concurrent", "para+dataflow", "para+event-driven", "para+low-code", "para+multi", "para+visual")
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

  // TOOLS

  // TOOL BUNDLES

  // LIBRARIES

  // APPS
}
