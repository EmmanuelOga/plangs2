import type { PlangsGraph } from "@plangs/plangs/graph";

export function define(g: PlangsGraph) {
  g.tag.set("tag+collab", {
    name: "Collaborative",
    description: "Collaborative Software is designed to help multiple users work together on tasks and projects.",
    extHomeURL: "https://en.wikipedia.org/wiki/Collaborative_software",
    keywords: ["collab", "collaboration tools", "collaborative software", "groupware"],
  });
}
