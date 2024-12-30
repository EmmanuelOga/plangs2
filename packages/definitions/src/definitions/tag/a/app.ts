import type { PlangsGraph } from "@plangs/plangs/graph";

export function define(g: PlangsGraph) {
  g.tag.set("tag+app", {
    name: "Application",
    description: "Software designed to perform specific tasks for users.",
    extHomeURL: "https://en.wikipedia.org/wiki/Application_software",
    keywords: ["applications"],
  });
}
