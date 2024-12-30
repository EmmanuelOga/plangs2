import type { PlangsGraph } from "@plangs/plangs/graph";

export function define(g: PlangsGraph) {
  g.paradigm.set("para+lazy", {
    name: "Lazy Eval",
    description: "Delays the evaluation of an expression until its value is needed.",
    extHomeURL: "https://en.wikipedia.org/wiki/Lazy_evaluation",
    keywords: ["lazy"],
  });
}
