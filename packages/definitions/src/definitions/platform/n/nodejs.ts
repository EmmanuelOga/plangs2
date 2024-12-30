import type { PlangsGraph } from "@plangs/plangs/graph";

export function define(g: PlangsGraph) {
  g.platform.set("plat+nodejs", {
    name: "Node.js",
    description: "Open-source, cross-platform JavaScript runtime environment that executes JavaScript code outside a web browser.",
    extHomeURL: "https://en.wikipedia.org/wiki/Node.js",
    keywords: ["javascript", "js", "nodejs", "server-side javascript"],
  });
}
