import type { PlangsGraph } from "@plangs/plangs/graph";

export function define(g: PlangsGraph) {
  g.paradigm.set("para+validation", {
    name: "Validation",
    description:
      "Ensures that data conforms to predefined rules before it is processed.",
    extHomeURL: "https://en.wikipedia.org/wiki/Data_Validation",
    keywords: ["validation"],
  });
}
