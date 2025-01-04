import type { PlangsGraph } from "@plangs/plangs/graph";

export function define(g: PlangsGraph) {
  g.tag.set("tag+framework", {
    name: "Application Framework",
    description:
      "Software framework that provides a structure for developing software applications.",
    extHomeURL: "https://en.wikipedia.org/wiki/Application_framework",
    keywords: ["framework"],
  });
}
