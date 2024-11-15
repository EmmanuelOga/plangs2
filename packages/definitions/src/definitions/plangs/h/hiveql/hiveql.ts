import type { PlangsGraph } from "@plangs/plangs";

export function define(g: PlangsGraph) {
  g.nodes.pl
    .set("pl+hiveql", {
      name: "HiveQL",
      languishRanking: 91,
      stackovTags: ["hive", "hiveql"],
      githubName: "HiveQL",
      githubLangId: "931814087",
      githubColor: "#dce200",
      githubPopular: false,
      githubType: "programming",
      description:
        "HiveQL is a SQL-like query language for Hadoop, developed as part of the Apache Hive project. It is designed for querying and managing large datasets residing in distributed storage.",
      keywords: ["Apache Hive", "Data Warehousing", "Hadoop", "Hive", "HiveQL", "MapReduce", "SQL"],
      extensions: [".hql"],
      year: 2010,
      isMainstream: true,
      releases: [
        { version: "3.1.3", name: "Stable release", date: "2022-04-08" },
        { version: "4.0.0-beta-1", name: "Preview release", date: "2023-08-14" },
      ],
      extWikipediaPath: "Apache_Hive",
    })
    .addLicenses(["license+apache"])
    .addParadigms(["paradigm+declarative", "paradigm+query"])
    .addPlatforms(["plat+cross"])
    .addTags(["tag+dbms"]);

  // TOOLS

  // TOOL BUNDLES

  // LIBRARIES

  // APPS
}
