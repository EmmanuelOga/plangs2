import type { PlangsGraph } from "@plangs/plangs/graph";

export function define(g: PlangsGraph) {
  g.paradigm.set("para+frp", {
    name: "Functional Reactive",
    description: "Modeling reactive systems using functional programming.",
    extHomeURL: "https://en.wikipedia.org/wiki/Functional_reactive_programming",
    keywords: ["frp", "functional reactive"],
  });
}
