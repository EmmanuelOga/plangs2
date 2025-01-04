import type { PlangsGraph } from "@plangs/plangs/graph";

export function define(g: PlangsGraph) {
  g.typeSystem.set("tsys+flow", {
    name: "Flow-Sensitive",
    description:
      "The types of variables can change based on control flow in the program.",
    extHomeURL: "https://en.wikipedia.org/wiki/Flow-sensitive_typing",
    keywords: ["flow"],
  });
}
