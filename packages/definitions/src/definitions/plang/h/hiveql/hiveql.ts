import type { PlangsGraph } from "@plangs/plangs/graph";

export function define(g: PlangsGraph) {
  g.plang
    .set("pl+hiveql", {
      name: "HiveQL",
      description:
        "HiveQL is a SQL-like query language designed for Hadoop, developed as part of the Apache Hive project, to facilitate querying and managing large datasets residing in distributed storage.",
      shortDesc: "HiveQL is a SQL-like query language for Hadoop developed by Apache Hive.",
      created: "2010",
      extensions: [".hql"],
      extGithubPath: "apache/hive",
      extHomeURL: "https://hive.apache.org",
      extWikipediaPath: "Apache_Hive",
      githubColor: "#dce200",
      githubLangId: "931814087",
      githubName: "HiveQL",
      githubPopular: false,
      githubStars: 5600,
      githubType: "programming",
      isTranspiler: false,
      keywords: ["apache-hive", "hadoop", "hiveql", "mapreduce", "sql"],
      languishRanking: 91,
      releases: [
        { version: "3.1.3", name: "Stable release", date: "2022-04-08" },
        { version: "4.0.0-beta-1", name: "Preview release", date: "2023-08-14" },
      ],
      stackovTags: ["hive", "hiveql"],
    })
    .relInfluencedBy.add("pl+sql")
    .relLicenses.add("lic+apache")
    .relParadigms.add("para+declarative", "para+query")
    .relPlatforms.add("plat+cross")
    .relTags.add("tag+dbms");

  // TOOLS

  // TOOL BUNDLES

  // LIBRARIES

  // APPS
}
