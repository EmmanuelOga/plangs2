import type { PlangsGraph } from "@plangs/plangs/graph";

export function define(g: PlangsGraph) {
  g.plang
    .set("pl+vue", {
      name: "Vue",
      description: "model-view-viewmodel front end JavaScript framework for building user interfaces and single-page applications.",
      shortDesc: "JavaScript framework for front end development.",
      created: "2014",
      extensions: [".vue"],
      extGithubPath: "vuejs/core",
      extHomeURL: "https://vuejs.org",
      extRedditPath: "vuejs",
      extWikipediaPath: "Vue.js",
      githubColor: "#41b883",
      githubLangId: "391",
      githubName: "Vue",
      githubPopular: false,
      githubStars: 48000,
      githubType: "markup",
      isTranspiler: true,
      keywords: ["vue.js"],
      languishRanking: 20,
      releases: [{ version: "3.5.12", name: "Tengen Toppa Gurren Lagann", date: "2024-10-11" }],
      stackovTags: ["vue.js"],
    })
    .relCompilesTo.add("pl+javascript")
    .relInfluencedBy.add("pl+javascript")
    .relLicenses.add("lic+mit")
    .relParadigms.add("para+declarative", "para+event-driven", "para+oop")
    .relPlatforms.add("plat+web")
    .relTags.add("tag+framework", "tag+gui")
    .relTypeSystems.add("tsys+dynamic");

  // TOOLS

  // TOOL BUNDLES

  // LIBRARIES

  // APPS
}
