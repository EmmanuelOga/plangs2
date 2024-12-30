import type { PlangsGraph } from "@plangs/plangs/graph";

export function define(g: PlangsGraph) {
  g.typeSystem.set("tsys+object", {
    name: "Object-Oriented",
    description: "Manage and enforce types for objects and classes, focusing on inheritance and polymorphism.",
    extHomeURL: "https://en.wikipedia.org/wiki/Object_(computer_science)",
    keywords: ["object"],
  });
}
