import type { PlangsGraph } from "@plangs/plangs/graph";

export function define(g: PlangsGraph) {
  g.paradigm.set("para+query", {
    name: "Query",
    description: "Used to make queries in databases and information systems.",
    extHomeURL: "https://en.wikipedia.org/wiki/Query_language",
    keywords: ["query"],
  });
}
