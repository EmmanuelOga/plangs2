import type { PlangsGraph } from "@plangs/plangs/graph";

export function define(g: PlangsGraph) {
  g.paradigm.set("para+declarative", {
    name: "Declarative",
    description:
      "Expresses the logic of a computation without describing its control flow.",
    extHomeURL: "https://en.wikipedia.org/wiki/Declarative_programming",
    keywords: ["declarative"],
  });
}
