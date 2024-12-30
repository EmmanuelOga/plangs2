import type { PlangsGraph } from "@plangs/plangs/graph";

export function define(g: PlangsGraph) {
  g.tag.set("tag+3dg", {
    name: "3D Graphics",
    description: "Software and tools for creating and manipulating 3D models and rendering graphics.",
    extHomeURL: "https://en.wikipedia.org/wiki/3D_computer_graphics",
    keywords: ["3D graphics", "rendering", "visualization"],
  });
}
