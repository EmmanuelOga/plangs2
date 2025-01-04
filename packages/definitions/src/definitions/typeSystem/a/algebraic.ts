import type { PlangsGraph } from "@plangs/plangs/graph";

export function define(g: PlangsGraph) {
  g.typeSystem.set("tsys+algebraic", {
    name: "Algebraic Data Types",
    description:
      "Kind of composite type, i.e., a type formed by combining other types.",
    extHomeURL: "https://en.wikipedia.org/wiki/Algebraic_data_type",
    keywords: [
      "adt",
      "algebraic",
      "product types",
      "sum types",
      "unions",
      "variant",
    ],
  });
}
