import type { PlangsGraph } from "@plangs/plangs/graph";

export function define(g: PlangsGraph) {
  g.plang
    .set("pl+datahike", {
      name: "Datahike",
      description:
        "Datahike is a Datalog engine that supports immutability, distribution, and composability, designed to manage and query data efficiently.",
      shortDesc: "A Datalog engine supporting immutability and distribution.",
      created: "2014-04",
      extGithubPath: "replikativ/datahike",
      extHomeURL: "https://datahike.io/",
      isTranspiler: false,
      keywords: ["compositional", "datalog", "distributed", "immutable"],
    })
    .relImplements.add("pl+datalog")
    .relInfluencedBy.add("pl+datomic")
    .relLicenses.add("lic+apache")
    .relParadigms.add("para+declarative", "para+distributed", "para+logic", "para+query")
    .relPlatforms.add("plat+java")
    .relTags.add("tag+dbms")
    .relWrittenWith.add("pl+clojure");
}
