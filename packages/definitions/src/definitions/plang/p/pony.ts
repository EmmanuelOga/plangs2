import type { PlangsGraph } from "@plangs/plangs/graph";

export function define(g: PlangsGraph) {
  g.plang
    .set("pl+pony", {
      name: "Pony",
      description:
        "Object-oriented, actor-model, capabilities-secure, high-performance programming language.",
      shortDesc: "Object-oriented, actor-model, secure programming language.",
      created: "2015",
      extensions: [".pony"],
      extGithubPath: "ponylang/ponyc",
      extHomeURL: "https://www.ponylang.io/",
      extRedditPath: "ponylang",
      extWikipediaPath: "Pony_(programming_language)",
      githubLangId: "290",
      githubName: "Pony",
      githubPopular: false,
      githubStars: 5700,
      githubType: "programming",
      isTranspiler: false,
      keywords: ["actor-model", "capability-security", "pony"],
      languishRanking: 377,
      releases: [
        { version: "0.58.7", name: "Pony 0.41.0", date: "2024-09-30" },
      ],
      stackovTags: ["ponylang"],
    })
    .relInfluencedBy.add("pl+erlang", "pl+scala")
    .relLicenses.add("lic+bsd")
    .relParadigms.add(
      "para+concurrent",
      "para+functional",
      "para+general-purpose",
      "para+message-passing",
      "para+oop",
    )
    .relPlatforms.add("plat+apple", "plat+bsd", "plat+linux", "plat+windows")
    .relTypeSystems.add("tsys+safe", "tsys+static", "tsys+strong")
    .relWrittenWith.add("pl+c");
}
