import type { PlangsGraph } from "@plangs/plangs";

export function define(g: PlangsGraph) {
  g.n_plang
    .set("pl+algol", {
      images: [{ kind: "other", title: "ALGOL", url: "/images/plangs/a/algol/other.jpg" }],
      name: "ALGOL",
      description:
        'ALGOL (/ˈælɡɒl, -ɡɔːl/; short for "Algorithmic Language") is a family of imperative computer programming languages originally developed in 1958. ALGOL heavily influenced many other languages and was the standard method for algorithm description used by the Association for Computing Machinery (ACM) in textbooks and academic sources for more than thirty years.',
      websites: [{ href: "https://en.wikipedia.org/wiki/ALGOL", title: "ALGOL", kind: "wikipedia" }],
      extensions: [],
      releases: [],
    })
    .addParadigms(["para+imperative", "para+procedural", "para+structured"])
    .addTypeSystems(["tsys+static", "tsys+strong"]);
}
