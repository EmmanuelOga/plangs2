import type { PlangsGraph } from "@plangs/plangs";

export function define(g: PlangsGraph) {
  g.nodes.pl
    .set("pl+vue", {
      name: "Vue",
      languishRanking: 20,
      stackovTags: ["vue.js"],
      githubName: "Vue",
      githubLangId: "391",
      githubColor: "#41b883",
      githubPopular: false,
      githubType: "markup",
      description:
        "Vue.js is an open-source model–view–viewmodel front end JavaScript framework for building user interfaces and single-page applications.",
      keywords: ["Evan You", "JavaScript framework", "SPA", "UI", "Vue.js", "front end", "open-source", "single-page application", "user interface"],
      extensions: [".vue"],
      year: 2014,
      isTranspiler: true,
      isMainstream: true,
      releases: [{ version: "3.5.12", name: "Tengen Toppa Gurren Lagann", date: "2024-10-11" }],
      extWikipediaPath: "Vue.js",
      extRedditPath: "vuejs",
      extHomeURL: "https://vuejs.org",
    })
    .addCompilesTo(["pl+javascript"])
    .addLicenses(["license+mit"])
    .addParadigms(["paradigm+declarative", "paradigm+event-driven", "paradigm+oop"])
    .addPlatforms(["plat+web"])
    .addTags(["tag+framework", "tag+ui"])
    .addTypeSystems(["tsys+dynamic"]);

  // TOOLS

  // TOOL BUNDLES

  // LIBRARIES

  // APPS
}
