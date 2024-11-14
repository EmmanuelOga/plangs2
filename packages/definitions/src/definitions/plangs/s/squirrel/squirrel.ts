import type { PlangsGraph } from "@plangs/plangs";

export function define(g: PlangsGraph) {
  g.nodes.pl
    .set("pl+squirrel", {
      name: "Squirrel",
      description:
        "Squirrel is a high-level imperative, object-oriented programming language, designed to be a lightweight scripting language that fits in the size, memory bandwidth, and real-time requirements of applications like video games.",
      keywords: ["squirrel"],
      websites: [
        { title: "Squirrel - The Programming Language", href: "http://squirrel-lang.org/", kind: "homepage" },
        {
          title: "Squirrel (programming language) - Wikipedia",
          href: "https://en.wikipedia.org/wiki/Squirrel_(programming_language)",
          kind: "wikipedia",
        },
      ],
      extensions: [".nut"],
      year: 2003,
      isMainstream: false,
      releases: [{ version: "3.2", name: "Squirrel 3.2", date: "2022-02-10" }],
      stackovTags: ["squirrel"],
      githubName: "Squirrel",
      languishRanking: 221,
      githubLangId: "355",
      githubColor: "#800000",
      githubPopular: false,
      githubType: "programming",
    })
    .addInfluencedBy(["pl+c++", "pl+javascript", "pl+lua", "pl+python"])
    .addLicenses(["license+mit"])
    .addParadigms(["paradigm+functional", "paradigm+imperative", "paradigm+multi", "paradigm+oop", "paradigm+scripting"])
    .addPlatforms(["plat+cross"])
    .addTags(["tag+app", "tag+games", "tag+interpreter", "tag+scripting"])
    .addTypeSystems(["tsys+dynamic"]);

  // TOOLS

  // TOOL BUNDLES

  // LIBRARIES

  // APPS
}
