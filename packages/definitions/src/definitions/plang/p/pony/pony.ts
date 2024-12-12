import type { PlangsGraph } from "@plangs/plangs/graph";

export function define(g: PlangsGraph) {
  g.plang
    .set("pl+pony", {
      name: "Pony",
      description: "Pony is an open-source, object-oriented, actor-model, capabilities-secure, high-performance programming language.",
      keywords: ["actor-model", "capability-security", "pony"],
      extensions: [".pony"],
      releases: [{ version: "0.58.7", name: "Pony 0.41.0", date: "2024-09-30" }],
      stackovTags: ["ponylang"],
      githubName: "Pony",
      languishRanking: 357,
      githubLangId: "290",
      githubPopular: false,
      githubType: "programming",
      extRedditPath: "ponylang",
      extWikipediaPath: "Pony_(programming_language)",
      extHomeURL: "https://www.ponylang.io/",
      created: "2015",
      isTranspiler: false,
      shortDesc: "Pony is an open-source, object-oriented, actor-model, secure programming language.",
      githubStars: 5700,
      extGithubPath: "ponylang/ponyc",
      ghRepoCreated: "2015-09-24",
    })
    .relInfluencedBy.add("pl+erlang", "pl+scala")
    .relLicenses.add("lic+bsd")
    .relParadigms.add("para+concurrent", "para+functional", "para+message-passing", "para+oop")
    .relPlatforms.add("plat+apple", "plat+bsd", "plat+linux", "plat+windows")
    .relTypeSystems.add("tsys+safe", "tsys+static", "tsys+strong")
    .relWrittenWith.add("pl+c");

  // TOOLS

  // TOOL BUNDLES

  // LIBRARIES

  // APPS
}
