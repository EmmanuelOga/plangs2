import type { PlangsGraph } from "@plangs/plangs/graph";

export function define(g: PlangsGraph) {
  g.plang
    .set("pl+datascript", {
      name: "DataScript",
      description:
        "A Datalog query engine built for use with Clojure, ClojureScript, and JavaScript environments, enabling immutable database operations.",
      shortDesc: "Immutable database and Datalog query engine for Clojure, ClojureScript and JS.",
      extensions: [".cljs"],
      extGithubPath: "tonsky/datascript",
      extHomeURL: "https://github.com/tonsky/datascript",
      isTranspiler: false,
      keywords: ["clojure-script", "database", "datalog", "immutable"],
      links: [{ url: "https://github.com/tonsky/datascript", title: "Main GitHub Repository" }],
    })
    .relInfluencedBy.add("pl+datalog", "pl+datomic")
    .relLicenses.add("lic+mit")
    .relParadigms.add("para+declarative", "para+functional", "para+logic")
    .relPlatforms.add("plat+web")
    .relTags.add("tag+dbms", "tag+webdev")
    .relTypeSystems.add("tsys+dynamic")
    .relWrittenWith.add("pl+clojure");

  // TOOLS

  // TOOL BUNDLES

  // LIBRARIES

  // APPS
}
