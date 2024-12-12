import type { PlangsGraph } from "@plangs/plangs/graph";

export function define(g: PlangsGraph) {
  g.plang
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
      keywords: ["vue.js"],
      extensions: [".vue"],
      isTranspiler: false,
      releases: [{ version: "3.5.12", name: "Tengen Toppa Gurren Lagann", date: "2024-10-11" }],
      extWikipediaPath: "Vue.js",
      extRedditPath: "vuejs",
      extHomeURL: "https://vuejs.org",
      created: "2014",
      shortDesc: "Vue.js is an open-source JavaScript framework for front end development.",
      githubStars: 48000,
      extGithubPath: "vuejs/core",
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
