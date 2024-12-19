import type { PlangsGraph } from "@plangs/plangs/graph";

export function define(g: PlangsGraph) {
  g.plang
    .set("pl+logica", {
      name: "Logica",
      description:
        "A declarative logic programming language designed for complex data analysis and manipulation tasks, facilitating efficient querying and reasoning over datasets.",
      shortDesc: "A declarative logic programming language for data manipulation.",
      created: "2020",
      extensions: [".lgo"],
      extGithubPath: "google/logica",
      extHomeURL: "https://logica.dev/",
      isTranspiler: false,
      keywords: ["data analysis", "declarative", "logic programming", "query language"],
      links: [{ url: "https://cloud.google.com/bigquery/docs/reference/mapping-functions#logica_extensions", title: "BigQuery Logica" }],
    })
    .relDialectOf.add("pl+prolog")
    .relImplements.add("pl+datalog")
    .relInfluencedBy.add("pl+datalog", "pl+prolog")
    .relLicenses.add("lic+apache")
    .relParadigms.add("para+declarative", "para+logic")
    .relPlatforms.add("plat+linux", "plat+web", "plat+windows")
    .relTags.add("tag+dataq", "tag+dbms", "tag+scripting")
    .relWrittenWith.add("pl+python");

  // TOOLS

  // TOOL BUNDLES

  // LIBRARIES

  // APPS
}
