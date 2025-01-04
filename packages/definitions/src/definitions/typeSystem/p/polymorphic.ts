import type { PlangsGraph } from "@plangs/plangs/graph";

export function define(g: PlangsGraph) {
  g.typeSystem.set("tsys+polymorphic", {
    name: "Polymorphic",
    description:
      "Allows types to be parameterized and reused with different data types, enhancing code reusability.",
    extHomeURL: "https://en.wikipedia.org/wiki/Polymorphism_(computer_science)",
    keywords: ["polymorphic"],
  });
}
