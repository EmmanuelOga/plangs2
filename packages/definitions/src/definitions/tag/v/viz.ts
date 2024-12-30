import type { PlangsGraph } from "@plangs/plangs/graph";

export function define(g: PlangsGraph) {
  g.tag.set("tag+viz", {
    name: "Visualization",
    description: "Software for visually representing complex data to assist in understanding patterns and trends.",
    extHomeURL: "https://en.wikipedia.org/wiki/Information_visualization",
    keywords: ["data analysis", "data visualization", "information", "visualization", "viz"],
  });
}
