import type { PlangsGraph } from "@plangs/plangs/graph";

export function define(g: PlangsGraph) {
  g.typeSystem.set("tsys+safe", {
    name: "Safe",
    description:
      "Ensures that operations are performed on compatible types, preventing unintended behavior and runtime errors.",
    extHomeURL: "https://en.wikipedia.org/wiki/Type_safety",
    keywords: ["safe"],
  });
}
