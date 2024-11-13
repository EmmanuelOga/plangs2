import type { PlangsGraph } from "@plangs/plangs";

export function define(g: PlangsGraph) {
  g.nodes.pl
    .set("pl+plsql", {
      name: "PLSQL",
      languishRanking: 78,
      websites: [
        { title: "PLSQL on Reddit", href: "https://reddit.com/r/plsql", kind: "reddit" },
        { title: "PL/SQL - Wikipedia", href: "https://en.wikipedia.org/wiki/PL/SQL", kind: "wikipedia" },
      ],
      stackovTags: ["plsql"],
      githubName: "PLSQL",
      githubLangId: "273",
      githubColor: "#dad8d8",
      githubPopular: false,
      githubType: "programming",
      description:
        "PL/SQL (Procedural Language for SQL) is Oracle Corporation's procedural extension for SQL and the Oracle relational database. It allows for procedural elements such as conditions, loops, exceptions, and definitions of constants and variables in SQL, in addition to enabling the creation of complex database scripts.",
      keywords: ["Oracle", "PL/SQL", "SQL", "procedural extension", "relational database"],
      extensions: [".pls", ".plsql"],
      year: 1995,
      isMainstream: true,
      releases: [{ version: "1.0", name: "Initial Release", date: "1995" }],
    })
    .addParadigms(["paradigm+imperative", "paradigm+procedural"])
    .addPlatforms(["plat+cross", "plat+linux", "plat+windows"])
    .addTags(["tag+dbms"])
    .addTypeSystems(["tsys+static", "tsys+strong"]);

  // TOOLS

  // TOOL BUNDLES

  // LIBRARIES

  // APPS
}
