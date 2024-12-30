import type { PlangsGraph } from "@plangs/plangs/graph";

export function define(g: PlangsGraph) {
  g.tag.set("tag+automation", {
    name: "Automation",
    description: "Software tools that automate repetitive tasks and processes.",
    extHomeURL: "https://en.wikipedia.org/wiki/Automation",
    keywords: ["automated processes", "automation", "workflow"],
  });
}
