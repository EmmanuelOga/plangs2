import type { PlangsGraph } from "@plangs/plangs/graph";

export function define(g: PlangsGraph) {
  g.typeSystem.set("tsys+static", {
    name: "Static",
    description:
      "Checks type correctness at compile-time, reducing runtime errors by ensuring variables are properly typed before execution.",
    extHomeURL: "https://en.wikipedia.org/wiki/Static_typing",
    keywords: ["static"],
  });
}
