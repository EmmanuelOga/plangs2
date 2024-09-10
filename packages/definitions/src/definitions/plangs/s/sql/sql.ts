import type { PlangsGraph } from "@plangs/plangs";

export function define(g: PlangsGraph) {
  g.nodes.pl
    .set("pl+sql", {
      name: "SQL (Structured Query Language)",
      description:
        'Structured Query Language (SQL) (pronounced S-Q-L; historically "sequel") is a domain-specific language used to manage data, especially in a relational database management system (RDBMS). It is particularly useful in handling structured data, i.e., data incorporating relations among entities and variables.',
      firstAppeared: "1974-01-01",
      websites: [
        { href: "https://www.iso.org/standard/76583.html", title: "www.iso.org/standard/76583.html", kind: "other" },
        { href: "https://en.wikipedia.org/wiki/SQL", title: "SQL (Structured Query Language)", kind: "wikipedia" },
      ],
    })
    .addInfluencedBy(["pl+datalog"])
    .addParadigms(["paradigm+declarative"])
    .addPlatforms(["plat+cross"])
    .addTypeSystems(["tsys+static", "tsys+strong"]);
}
