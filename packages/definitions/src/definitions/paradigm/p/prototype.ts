import type { PlangsGraph } from "@plangs/plangs/graph";

export function define(g: PlangsGraph) {
  g.paradigm.set("para+prototype", {
    name: "Prototype-Based",
    description:
      "Style of object-oriented programming where objects are created by cloning existing ones.",
    extHomeURL: "https://en.wikipedia.org/wiki/Prototype-based_programming",
    keywords: ["prototype"],
  });
}
