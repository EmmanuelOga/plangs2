import type { PlangsGraph } from "@plangs/plangs/graph";

export function define(g: PlangsGraph) {
  g.paradigm.set("para+educational", {
    name: "Edu",
    description: "Educational languages are designed mainly to teach programming concepts.",
    extHomeURL: "https://en.wikipedia.org/wiki/Educational_programming_language",
    keywords: ["educational"],
  });
}
