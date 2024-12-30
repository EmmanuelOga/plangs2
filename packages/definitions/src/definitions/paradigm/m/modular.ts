import type { PlangsGraph } from "@plangs/plangs/graph";

export function define(g: PlangsGraph) {
  g.paradigm.set("para+modular", {
    name: "Modular",
    description: "Dividing a program into separate, independent modules.",
    extHomeURL: "https://en.wikipedia.org/wiki/Modular_programming",
    keywords: ["modular"],
  });
}
