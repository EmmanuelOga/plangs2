import type { PlangsGraph } from "@plangs/plangs/graph";

export function define(g: PlangsGraph) {
  g.paradigm.set("para+reflective", {
    name: "Reflective",
    description:
      "Allows a program to inspect and modify its own structure and behavior at runtime.",
    extHomeURL: "https://en.wikipedia.org/wiki/Reflective_programming",
    keywords: ["reflective"],
  });
}
