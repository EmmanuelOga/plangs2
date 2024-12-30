import type { PlangsGraph } from "@plangs/plangs/graph";

export function define(g: PlangsGraph) {
  g.paradigm.set("para+data-hiding", {
    name: "Data Hiding",
    description: "Restrict access to certain parts of a program's code.",
    extHomeURL: "https://en.wikipedia.org/wiki/Information_hiding",
    keywords: ["hiding"],
  });
}
