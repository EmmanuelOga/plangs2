import type { PlangsGraph } from "@plangs/plangs/graph";

export function define(g: PlangsGraph) {
  g.plang.    .set("pl+vue", {
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
      isTranspiler: true,
      releases: [{ version: "3.5.12", name: "Tengen Toppa Gurren Lagann", date: "2024-10-11" }],
      extWikipediaPath: "Vue.js",
      extRedditPath: "vuejs",
      extHomeURL: "https://vuejs.org",
      created: "2014",
    })
    .relCompilesTo.add(["pl+javascript"])
    .relLicense.add(["license+mit"])
    .relParadigm.add(["para+declarative", "para+event-driven", "para+oop"])
    .relPlatforms.add(["plat+web"])
    .relTags.add(["tag+framework", "tag+ui"])
    .relTsys.add(["tsys+dynamic"]);

  // TOOLS

  // TOOL BUNDLES

  // LIBRARIES

  // APPS
}
