import type { PlangsGraph } from "@plangs/plangs";

export function define(g: PlangsGraph) {
  g.nodes.pl
    .set("pl+plpgsql", {
      name: "PLpgSQL",
      languishRanking: 28,
      websites: [
        { kind: "reddit", title: "PLpgSQL on Reddit", href: "https://reddit.com/r/PostgreSQL" },
        { kind: "wikipedia", title: "PLpgSQL on Wikipedia", href: "https://en.wikipedia.org/wiki/pgSQL" },
      ],
      stackovTags: ["postgresql"],
      githubName: "PLpgSQL",
      githubLangId: "274",
      githubColor: "#336790",
      githubPopular: false,
      githubType: "programming",
      description:
        "PLpgSQL is a procedural language supported by the PostgreSQL relational database management system. It allows users to write complex business logic in a language similar to PL/SQL in Oracle.",
      keywords: ["PLpgSQL", "PostgreSQL", "procedural language", "stored procedure"],
      year: 1995,
      isMainstream: false,
    })
    .addParadigms(["paradigm+procedural"])
    .addPlatforms(["plat+apple", "plat+cross", "plat+linux", "plat+windows"])
    .addTags(["tag+dbms", "tag+scripting"]);

  // TOOLS

  // TOOL BUNDLES

  // LIBRARIES

  // APPS
}
