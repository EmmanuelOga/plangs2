import type { PlangsGraph } from "@plangs/plangs";

export function define(g: PlangsGraph) {
  g.nodes.pl
    .set("pl+sqlpl", {
      name: "SQLPL",
      languishRanking: 98,
      stackovTags: ["db2"],
      githubName: "SQLPL",
      githubLangId: "334",
      githubColor: "#e38c00",
      githubPopular: false,
      githubType: "programming",
      description:
        "SQL PL stands for Structured Query Language Procedural Language and was developed by IBM as a set of commands that extend the use of SQL in the IBM Db2 database system. It provides procedural programmability in addition to the querying commands of SQL and is a subset of the SQL Persistent Stored Modules language standard.",
      keywords: ["DB2", "IBM", "SQL PL", "Structured Query Language Procedural Language"],
      year: 2001,
      isMainstream: true,
      extWikipediaPath: "SQL_PL",
      extRedditPath: "DB2",
    })
    .addParadigms(["paradigm+query"])
    .addPlatforms(["plat+cross"])
    .addTags(["tag+dbms"]);

  // TOOLS

  // TOOL BUNDLES

  // LIBRARIES

  // APPS
}
