import type { PlangsGraph } from "@plangs/plangs/graph";

export function define(g: PlangsGraph) {
  g.paradigm.set("para+scripting", {
    name: "Scripting",
    description: "Used for automating tasks within a software environment.",
    extHomeURL: "https://en.wikipedia.org/wiki/Scripting_language",
    keywords: ["scripting"],
  });
}
