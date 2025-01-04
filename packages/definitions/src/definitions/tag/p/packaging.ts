import type { PlangsGraph } from "@plangs/plangs/graph";

export function define(g: PlangsGraph) {
  g.tag.set("tag+packaging", {
    name: "Packaging",
    description:
      "Software tools for managing and distributing software packages and dependencies.",
    extHomeURL: "https://en.wikipedia.org/wiki/Package_manager",
    keywords: [
      "dependency management",
      "package manager",
      "software distribution",
    ],
  });
}
