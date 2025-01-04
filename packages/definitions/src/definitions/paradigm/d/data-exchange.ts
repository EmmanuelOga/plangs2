import type { PlangsGraph } from "@plangs/plangs/graph";

export function define(g: PlangsGraph) {
  g.paradigm.set("para+data-exchange", {
    name: "Data Exchange",
    description:
      "Allow data to be shared between systems in a structured format.",
    extHomeURL: "https://en.wikipedia.org/wiki/Data_exchange_language",
    keywords: ["data exchange"],
  });
}
