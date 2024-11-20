import type { PlangsGraph } from "@plangs/plangs";

export function define(g: PlangsGraph) {
  g.nodes.pl
    .set("pl+fennel", {
      name: "Fennel",
      description:
        "Fennel is a programming language that combines the simplicity, speed, and reach of Lua with the flexibility of Lisp syntax and a macro system. It offers full Lua compatibility and can run wherever Lua runs, including game development, web servers, and microcontrollers.",
      keywords: ["fennel"],
      extensions: [".fnl"],
      year: 2020,
      isTranspiler: true,
      releases: [
        { version: "0.6.0", name: "Fennel 0.6.0", date: "2021-07-22" },
        { version: "0.7.0", name: "Fennel 0.7.0", date: "2022-03-01" },
        { version: "0.8.0", name: "Fennel 0.8.0", date: "2022-12-15" },
      ],
      githubName: "Fennel",
      languishRanking: 244,
      githubLangId: "239946126",
      githubColor: "#fff3d7",
      githubPopular: false,
      githubType: "programming",
      extHomeURL: "https://fennel-lang.org/",
    })
    .addCompilesTo(["pl+lua"])
    .addInfluencedBy(["pl+lua", "pl+scheme"])
    .addLicenses(["license+mit"])
    .addParadigms(["paradigm+functional", "paradigm+macro", "paradigm+metaprogramming", "paradigm+scripting"])
    .addPlatforms(["plat+cross"])
    .addTags(["tag+interpreters", "tag+scripting"])
    .addTypeSystems(["tsys+dynamic"])
    .addWrittenIn(["pl+lua"]);

  // TOOLS

  // TOOL BUNDLES

  // LIBRARIES

  // APPS
}
