import type { PlangsGraph } from "@plangs/plangs/graph";

export function define(g: PlangsGraph) {
  g.tag.set("tag+if", {
    name: "Interactive Fiction",
    description: "Software for creating and playing narrative-driven interactive stories.",
    extHomeURL: "https://en.wikipedia.org/wiki/Interactive_fiction",
    keywords: ["interactive fiction", "text-based games"],
  });
}
