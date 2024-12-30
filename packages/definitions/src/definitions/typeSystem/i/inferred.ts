import type { PlangsGraph } from "@plangs/plangs/graph";

export function define(g: PlangsGraph) {
  g.typeSystem.set("tsys+inferred", {
    name: "Inferred",
    description: "Types are automatically deduced without requiring explicit type annotations.",
    extHomeURL: "https://en.wikipedia.org/wiki/Type_inference",
    keywords: ["hindley", "implicit", "inferred", "milner"],
  });
}
