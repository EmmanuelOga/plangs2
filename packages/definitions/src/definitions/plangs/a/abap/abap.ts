import type { PlangsGraph } from "@plangs/plangs";

export function define(g: PlangsGraph) {
  g.nodes.pl
    .set("pl+abap", {
      name: "ABAP",
      languishRanking: 81,
      websites: [
        { title: "ABAP on Wikipedia", href: "https://en.wikipedia.org/wiki/ABAP", kind: "wikipedia" },
        { title: "SAP Community - ABAP", href: "https://community.sap.com/topics/abap", kind: "other" },
      ],
      stackovTags: ["abap"],
      githubName: "ABAP",
      githubLangId: "1",
      githubColor: "#E8274B",
      githubPopular: false,
      githubType: "programming",
      description:
        "ABAP (Advanced Business Application Programming), a language developed by SAP, is used for programming the SAP NetWeaver Application Server and is key in building business applications. Initially designed for the SAP R/2 platform, it has now evolved to support object-oriented programming and provides a high level of abstraction from basic database levels.",
      keywords: ["4GL", "ABAP", "ABAP Objects", "Business Applications", "Logical Databases", "NetWeaver", "SAP", "SAP R/2", "SAP R/3"],
      extensions: [".abap"],
      year: 1983,
      isMainstream: true,
      releases: [{ version: "7.58", name: "Stable Release", date: "2023-10-26" }],
    })
    .addParadigms(["paradigm+imperative", "paradigm+oop", "paradigm+structured"])
    .addPlatforms(["plat+cross"])
    .addTags(["tag+4gl", "tag+server"])
    .addTypeSystems(["tsys+nominal", "tsys+safe", "tsys+static", "tsys+strong"]);

  // TOOLS

  // TOOL BUNDLES

  // LIBRARIES

  // APPS
}
