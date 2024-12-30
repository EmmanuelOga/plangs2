import type { PlangsGraph } from "@plangs/plangs/graph";

export function define(g: PlangsGraph) {
  g.tag.set("tag+sci", {
    name: "Scientific Computing",
    description: "Software designed for performing scientific calculations and simulations.",
    extHomeURL: "https://en.wikipedia.org/wiki/List_of_numerical-analysis_software",
    keywords: ["computational science", "numerical analysis", "scientific computing"],
  });
}
