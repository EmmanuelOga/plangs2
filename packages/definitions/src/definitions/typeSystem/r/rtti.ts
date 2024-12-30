import type { PlangsGraph } from "@plangs/plangs/graph";

export function define(g: PlangsGraph) {
  g.typeSystem.set("tsys+rtti", {
    name: "RTTI",
    description: "Run time time information is a feature that allows a program to retrieve type information about an object during runtime.",
    extHomeURL: "https://en.wikipedia.org/wiki/Run-time_type_information",
    keywords: ["rtti", "run-time"],
  });
}
