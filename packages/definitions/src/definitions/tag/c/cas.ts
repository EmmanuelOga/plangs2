import type { PlangsGraph } from "@plangs/plangs/graph";

export function define(g: PlangsGraph) {
  g.tag.set("tag+cas", {
    name: "CAS",
    description:
      "Computer Algebra System: Software systems that facilitate symbolic mathematical computations.",
    extHomeURL: "https://en.wikipedia.org/wiki/Computer_algebra_system",
    keywords: ["algebra system", "computer algebra", "symbolic computation"],
  });
}
