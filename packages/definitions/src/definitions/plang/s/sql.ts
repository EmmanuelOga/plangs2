import type { PlangsGraph } from "@plangs/plangs/graph";

export function define(g: PlangsGraph) {
  g.plang
    .set("pl+sql", {
      name: "SQL",
      description:
        "Structured Query Language is a domain-specific language for managing data in relational database systems, focusing primarily on data query and manipulation.",
      shortDesc:
        "Domain-specific language for managing data in relational databases.",
      created: "1974",
      extensions: [".sql"],
      extHomeURL: "https://www.iso.org/standard/76583.html",
      extRedditPath: "SQL",
      extWikipediaPath: "SQL",
      githubColor: "#e38c00",
      githubLangId: "333",
      githubName: "SQL",
      githubPopular: false,
      githubType: "data",
      isTranspiler: false,
      keywords: ["sql", "structured query language"],
      languishRanking: 22,
      releases: [{ version: "2023", name: "SQL:2023", date: "2023-06" }],
      stackovTags: ["sql"],
    })
    .relInfluencedBy.add("pl+datalog")
    .relParadigms.add(
      "para+data-driven",
      "para+declarative",
      "para+dsl",
      "para+query",
    )
    .relPlatforms.add("plat+cross")
    .relTags.add(
      "tag+4gl",
      "tag+dbms",
      "tag+industrial",
      "tag+interpreters",
      "tag+multimedia",
      "tag+testing",
      "tag+video",
      "tag+viz",
      "tag+workflow",
    )
    .relTypeSystems.add("tsys+static", "tsys+strong");
}
