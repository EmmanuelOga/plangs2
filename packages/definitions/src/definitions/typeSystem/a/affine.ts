import type { PlangsGraph } from "@plangs/plangs/graph";

export function define(g: PlangsGraph) {
  g.typeSystem.set("tsys+affine", {
    name: "Affine",
    description:
      "Enforces that variables are used at most once, allowing for optimizations such as memory reuse.",
    extHomeURL: "https://en.wikipedia.org/wiki/Affine_type_system",
    keywords: ["affine"],
  });
}
