import type { PlangsGraph } from "@plangs/plangs/graph";

export function define(g: PlangsGraph) {
  g.tag.set("tag+editor", {
    name: "Editor",
    description: "Software used to create and edit text and other resources, often optimized for coding or document editing.",
    extHomeURL: "https://en.wikipedia.org/wiki/Text_editor",
    keywords: ["code editor", "editor", "plain text", "text editor"],
  });
}
