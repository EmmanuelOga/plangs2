import type { PlangsGraph } from "@plangs/plangs/graph";

export function define(g: PlangsGraph) {
  g.plang
    .set("pl+datalevin", {
      name: "Datalevin",
      description:
        "A simple, fast, and versatile Datalog database designed for use with Clojure, focusing on efficient data storage and retrieval for various applications.",
      shortDesc: "A simple, fast and versatile Datalog database.",
      created: "2023",
      extGithubPath: "juji-io/datalevin",
      isTranspiler: false,
      keywords: ["clojure", "database", "datalog"],
    })
    .relImplements.add("pl+datalog")
    .relInfluencedBy.add("pl+datomic")
    .relLicenses.add("lic+epl")
    .relParadigms.add("para+data-driven", "para+declarative", "para+logic")
    .relPlatforms.add("plat+cross")
    .relTags.add("tag+dbms")
    .relWrittenWith.add("pl+clojure");
}
