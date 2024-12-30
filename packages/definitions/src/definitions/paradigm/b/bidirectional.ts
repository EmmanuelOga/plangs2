import type { PlangsGraph } from "@plangs/plangs/graph";

export function define(g: PlangsGraph) {
  g.paradigm.set("para+bidirectional", {
    name: "Bidi",
    description: "The same data are sometimes considered as input, and sometimes as output.",
    extHomeURL: "https://en.wikipedia.org/wiki/Bidirectional_transformation",
    keywords: ["bi-directional", "bidirectional"],
  });
}
