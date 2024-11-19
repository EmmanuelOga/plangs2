import type { PlangsGraph } from "@plangs/plangs";

export function define(g: PlangsGraph) {
  g.nodes.learning.set("learning+todo", {
    name: "TODO Learning #1",
    description: "A learning resource node, for books, courses, video playlists, etc.",
    keywords: [],
  });
}
