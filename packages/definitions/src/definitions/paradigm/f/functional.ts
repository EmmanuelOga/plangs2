import type { PlangsGraph } from "@plangs/plangs/graph";

export function define(g: PlangsGraph) {
  g.paradigm.set("para+functional", {
    name: "Functional",
    description:
      "Programs are constructed by applying and composing functions.",
    extHomeURL: "https://en.wikipedia.org/wiki/Functional_programming",
    keywords: ["functional", "lambda", "pure"],
  });
}
