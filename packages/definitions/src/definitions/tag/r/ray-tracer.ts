import type { PlangsGraph } from "@plangs/plangs/graph";

export function define(g: PlangsGraph) {
  g.tag.set("tag+ray-tracer", {
    name: "Ray Tracer",
    description:
      "Software that uses ray tracing to generate realistic lighting and shadows in 3D environments.",
    extHomeURL: "https://en.wikipedia.org/wiki/Ray_tracing_(graphics)",
    keywords: ["3D rendering", "graphics", "ray tracer", "ray tracing"],
  });
}
