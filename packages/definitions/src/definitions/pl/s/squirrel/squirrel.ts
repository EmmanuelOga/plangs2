import type { PlangsGraph } from "@plangs/plangs";

export function define(g: PlangsGraph) {
  g.nodes.pl
    .set("pl+squirrel", {
      name: "Squirrel",
      description:
        "Squirrel is a high-level imperative, object-oriented programming language, designed to be a lightweight scripting language that fits in the size, memory bandwidth, and real-time requirements of applications like video games.",
      keywords: ["squirrel"],
      extensions: [".nut"],
      releases: [{ version: "3.2", name: "Squirrel 3.2", date: "2022-02-10" }],
      stackovTags: ["squirrel"],
      githubName: "Squirrel",
      languishRanking: 221,
      githubLangId: "355",
      githubColor: "#800000",
      githubPopular: false,
      githubType: "programming",
      extWikipediaPath: "Squirrel_(programming_language)",
      extHomeURL: "http://squirrel-lang.org/",
      created: "2003",
    })
    .relInfluencedBy.add(["pl+c++", "pl+javascript", "pl+lua", "pl+python"])
    .relLicenses.add(["license+mit"])
    .relParadigms.add(["paradigm+functional", "paradigm+imperative", "paradigm+multi", "paradigm+oop", "paradigm+scripting"])
    .relPlatforms.add(["plat+cross"])
    .relTags.add(["tag+app", "tag+games", "tag+interpreters", "tag+scripting"])
    .relTsys.add(["tsys+dynamic"]);

  // TOOLS

  // TOOL BUNDLES

  // LIBRARIES

  // APPS
}
