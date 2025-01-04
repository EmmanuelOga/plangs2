import type { PlangsGraph } from "@plangs/plangs/graph";

export function define(g: PlangsGraph) {
  g.typeSystem.set("tsys+gradual", {
    name: "Gradual",
    description:
      "Allows mixing statically and dynamically typed code, progressively introducing type annotations.",
    extHomeURL: "https://en.wikipedia.org/wiki/Gradual_typing",
    keywords: ["gradual"],
  });
}
