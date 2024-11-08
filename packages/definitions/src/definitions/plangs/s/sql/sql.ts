import type { PlangsGraph } from "@plangs/plangs";

export function define(g: PlangsGraph) {
  g.nodes.pl
    .set("pl+sql", {
      name: "SQL",
      description:
        'Structured Query Language (SQL) (pronounced S-Q-L; historically "sequel") is a domain-specific language used to manage data, especially in a relational database management system (RDBMS). It is particularly useful in handling structured data, i.e., data incorporating relations among entities and variables.',
      keywords: ["sql", "structured query language"],
      websites: [
        { title: "www.iso.org/standard/76583.html", href: "https://www.iso.org/standard/76583.html", kind: "other" },
        { title: "SQL", href: "https://en.wikipedia.org/wiki/SQL", kind: "wikipedia" },
        { title: "SQL on Reddit", kind: "reddit", href: "https://reddit.com/r/SQL" },
      ],
      year: 1974,
      isTranspiler: false,
      isMainstream: true,
      github: { name: "SQL", langId: "333", color: "#e38c00", popular: false, type: "data" },
      stackovTags: ["sql"],
    })
    .addInfluencedBy(["pl+datalog"])
    .addParadigms(["paradigm+data-driven", "paradigm+declarative", "paradigm+dsl"])
    .addPlatforms(["plat+cross"])
    .addTags(["tag+4gl", "tag+dbms", "tag+industrial", "tag+interpreter", "tag+multimedia", "tag+testing", "tag+video", "tag+viz", "tag+workflow"])
    .addTypeSystems(["tsys+static", "tsys+strong"]);

  // TOOLS

  // TOOL BUNDLES

  // LIBRARIES

  // APPS
}
