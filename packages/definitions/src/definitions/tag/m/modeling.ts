import type { PlangsGraph } from "@plangs/plangs/graph";

export function define(g: PlangsGraph) {
  g.tag.set("tag+modeling", {
    name: "Mathematical Modeling",
    description: "Software used for creating mathematical models and simulations.",
    extHomeURL: "https://en.wikipedia.org/wiki/Mathematical_modeling",
    keywords: ["mathematical modeling", "mathematics", "simulation"],
  });
}
