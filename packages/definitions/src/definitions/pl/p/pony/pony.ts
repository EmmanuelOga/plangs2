import type { PlangsGraph } from "@plangs/plangs";

export function define(g: PlangsGraph) {
  g.nodes.pl
    .set("pl+pony", {
      name: "Pony",
      description: "Pony is an open-source, object-oriented, actor-model, capabilities-secure, high-performance programming language.",
      keywords: ["actor-model", "capability-security", "pony"],
      extensions: [".pony"],
      year: 2015,
      releases: [{ version: "0.41.0", name: "Pony 0.41.0", date: "2023-09-01" }],
      stackovTags: ["ponylang"],
      githubName: "Pony",
      languishRanking: 357,
      githubLangId: "290",
      githubPopular: false,
      githubType: "programming",
      extRedditPath: "ponylang",
      extWikipediaPath: "Pony_(programming_language)",
      extHomeURL: "https://www.ponylang.io/",
    })
    .addInfluencedBy(["pl+erlang", "pl+ml", "pl+scala"])
    .addLicenses(["license+bsd"])
    .addParadigms(["paradigm+concurrent", "paradigm+functional", "paradigm+message-passing", "paradigm+oop"])
    .addPlatforms(["plat+apple", "plat+bsd", "plat+linux", "plat+windows"])
    .addTags(["tag+concurrency", "tag+safety"])
    .addTypeSystems(["tsys+safe", "tsys+static", "tsys+strong"])
    .addWrittenIn(["pl+c"]);

  // TOOLS

  // TOOL BUNDLES

  // LIBRARIES

  // APPS
}