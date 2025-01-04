import type { PlangsGraph } from "@plangs/plangs/graph";

export function define(g: PlangsGraph) {
  g.typeSystem.set("tsys+generic", {
    name: "Generic",
    description:
      "Uses algorithms that can work with several different but related data types.",
    extHomeURL: "https://en.wikipedia.org/wiki/Generic_programming",
    keywords: ["generic"],
  });
}
