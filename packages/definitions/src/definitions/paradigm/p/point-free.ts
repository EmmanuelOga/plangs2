import type { PlangsGraph } from "@plangs/plangs/graph";

export function define(g: PlangsGraph) {
  g.paradigm.set("para+point-free", {
    name: "Point-free",
    description:
      "Point-free, or tacit programming avoids specifying arguments in function definitions, focusing on composition rather than application.",
    extHomeURL: "https://en.wikipedia.org/wiki/Tacit_programming",
    keywords: ["point-free", "tacit"],
  });
}
