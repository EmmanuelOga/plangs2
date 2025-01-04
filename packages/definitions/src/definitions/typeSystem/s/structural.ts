import type { PlangsGraph } from "@plangs/plangs/graph";

export function define(g: PlangsGraph) {
  g.typeSystem.set("tsys+structural", {
    name: "Structural",
    description:
      "Bases type compatibility on the structure of data rather than explicit type declarations or names.",
    extHomeURL: "https://en.wikipedia.org/wiki/Structural_typing",
    keywords: ["structural"],
  });
}
