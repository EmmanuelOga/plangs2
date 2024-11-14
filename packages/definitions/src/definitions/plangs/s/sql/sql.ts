import type { PlangsGraph } from "@plangs/plangs";

export function define(g: PlangsGraph) {
  g.nodes.pl
    .set("pl+sql", {
      name: "SQL",
      description:
        "Structured Query Language (SQL) is a domain-specific language designed for managing data in relational database systems. It is particularly useful for querying and managing structured data, which includes relationships between entities and variables. Although named as an acronym for Structured Query Language, 'SQL' is commonly pronounced as 'sequel'.",
      keywords: ["sql", "structured query language"],
      websites: [
        {
          title: "ISO/IEC 9075-1:2023 - Information technology — Database languages SQL — Part 1: Framework (SQL/Framework)",
          href: "https://www.iso.org/standard/76583.html",
          kind: "other",
        },
        { title: "SQL - Wikipedia", href: "https://en.wikipedia.org/wiki/SQL", kind: "wikipedia" },
        { title: "SQL on Reddit", href: "https://reddit.com/r/SQL", kind: "reddit" },
      ],
      year: 1974,
      isMainstream: true,
      stackovTags: ["sql"],
      githubName: "SQL",
      languishRanking: 22,
      githubLangId: "333",
      githubColor: "#e38c00",
      githubPopular: false,
      githubType: "data",
      extensions: [".sql"],
      releases: [{ version: "2023", name: "SQL:2023", date: "2023-06" }],
    })
    .addInfluencedBy(["pl+datalog"])
    .addParadigms(["paradigm+data-driven", "paradigm+declarative", "paradigm+dsl", "paradigm+query"])
    .addPlatforms(["plat+cross"])
    .addTags(["tag+4gl", "tag+dbms", "tag+industrial", "tag+interpreter", "tag+multimedia", "tag+testing", "tag+video", "tag+viz", "tag+workflow"])
    .addTypeSystems(["tsys+static", "tsys+strong"]);

  // TOOLS

  // TOOL BUNDLES

  // LIBRARIES

  // APPS
}
