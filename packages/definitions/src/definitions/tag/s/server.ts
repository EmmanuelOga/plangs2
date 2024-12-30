import type { PlangsGraph } from "@plangs/plangs/graph";

export function define(g: PlangsGraph) {
  g.tag.set("tag+server", {
    name: "Server",
    description: 'A Server hosts and runs applications, often described as "running in the background".',
    extHomeURL: "https://en.wikipedia.org/wiki/Application_server",
    keywords: ["application server", "backend server", "middleware"],
  });
}
