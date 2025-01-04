import type { PlangsGraph } from "@plangs/plangs/graph";

export function define(g: PlangsGraph) {
  g.paradigm.set("para+multi-dispatch", {
    name: "Mult-Dispatch",
    description:
      "Selects a function to invoke based on the runtime types of multiple arguments.",
    extHomeURL: "https://en.wikipedia.org/wiki/Multiple_dispatch",
    keywords: ["multi-dispatch"],
  });
}
