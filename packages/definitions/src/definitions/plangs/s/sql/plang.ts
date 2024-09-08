import type { PlangsGraph } from "@plangs/plangs";

export function define(g: PlangsGraph) {
  g.n_plang
    .set("pl+sql", {
      images: [],
      name: "SQL (Structured Query Language)",
      description:
        'Structured Query Language (SQL) (pronounced S-Q-L; historically "sequel") is a domain-specific language used to manage data, especially in a relational database management system (RDBMS). It is particularly useful in handling structured data, i.e., data incorporating relations among entities and variables.',
      websites: [
        { href: "https://www.iso.org/standard/76583.html", title: "www.iso.org/standard/76583.html", kind: "other" },
        { href: "https://en.wikipedia.org/wiki/SQL", title: "SQL (Structured Query Language)", kind: "wikipedia" },
      ],
      extensions: [],
      releases: [],
    })
    .addInfluencedBy(["pl+datalog"])
    .addParadigms(["para+declarative"])
    .addPlatforms(["platf+cross"])
    .addTypeSystems(["tsys+static", "tsys+strong"]);
}
