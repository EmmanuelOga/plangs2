import type { PlangsGraph } from "@plangs/plangs/graph";

export function define(g: PlangsGraph) {
  g.tag.set("tag+gui", {
    name: "GUI",
    description: "Software tools for designing and building graphical user interfaces.",
    extHomeURL: "https://en.wikipedia.org/wiki/Graphical_user_interface",
    keywords: ["GUI", "UI"],
  });
}
