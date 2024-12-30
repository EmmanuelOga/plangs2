import type { PlangsGraph } from "@plangs/plangs/graph";

export function define(g: PlangsGraph) {
  g.paradigm.set("para+interpreted", {
    name: "Interpreted",
    description: "Executed directly, without prior compilation.",
    extHomeURL: "https://en.wikipedia.org/wiki/Interpreted_language",
    keywords: ["interpreted"],
  });
}
