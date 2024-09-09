import type { PlangsGraph } from "@plangs/plangs";

export function define(g: PlangsGraph) {
  g.n_plangs
    .set("pl+algol", {
      name: "ALGOL",
      description:
        'ALGOL (/ˈælɡɒl, -ɡɔːl/; short for "Algorithmic Language") is a family of imperative computer programming languages originally developed in 1958. ALGOL heavily influenced many other languages and was the standard method for algorithm description used by the Association for Computing Machinery (ACM) in textbooks and academic sources for more than thirty years.',
      firstAppeared: "1958-01-01",
      websites: [{ href: "https://en.wikipedia.org/wiki/ALGOL", title: "ALGOL", kind: "wikipedia" }],
      images: [{ kind: "other", title: "ALGOL", url: "/images/plangs/a/algol/other.jpg" }],
    })
    .addParadigms(["para+imperative", "para+procedural", "para+structured"])
    .addTypeSystems(["tsys+static", "tsys+strong"]);
}
