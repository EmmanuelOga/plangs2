import type { PlangsGraph } from "@plangs/plangs/graph";

export function define(g: PlangsGraph) {
  g.plang
    .set("pl+sql", {
      name: "SQL",
      description:
        "Structured Query Language (SQL) is a domain-specific language for managing data in relational database systems, focusing primarily on data query and manipulation.",
      keywords: ["sql", "structured query language"],
      stackovTags: ["sql"],
      githubName: "SQL",
      languishRanking: 22,
      githubLangId: "333",
      githubColor: "#e38c00",
      githubPopular: false,
      githubType: "data",
      extensions: [".sql"],
      releases: [{ version: "2023", name: "SQL:2023", date: "2023-06" }],
      extWikipediaPath: "SQL",
      extRedditPath: "SQL",
      extHomeURL: "https://www.iso.org/standard/76583.html",
      created: "1974",
      isTranspiler: false,
      shortDesc: "SQL is a domain-specific language for managing data in relational databases.",
    })
    .relInfluencedBy.add("pl+datalog")
    .relParadigms.add("para+data-driven", "para+declarative", "para+dsl", "para+query")
    .relPlatforms.add("plat+cross")
    .relTags.add("tag+4gl", "tag+dbms", "tag+industrial", "tag+interpreters", "tag+multimedia", "tag+testing", "tag+video", "tag+viz", "tag+workflow")
    .relTypeSystems.add("tsys+static", "tsys+strong");

  // TOOLS

  // TOOL BUNDLES

  // LIBRARIES

  // APPS
}
