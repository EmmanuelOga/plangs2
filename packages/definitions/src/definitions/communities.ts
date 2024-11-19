import type { PlangsGraph } from "@plangs/plangs";

export function define(g: PlangsGraph) {
  g.nodes.community.set("community+todo", {
    name: "TODO Comm #1",
    description: "A community node, for linking to websites, forums, discord channels, conferences, etc.",
    keywords: [],
  });
}
