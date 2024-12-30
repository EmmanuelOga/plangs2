import type { PlangsGraph } from "@plangs/plangs/graph";

export function define(g: PlangsGraph) {
  g.paradigm.set("para+contracts", {
    name: "DbC",
    description:
      "Design by Contract is a software design approach that uses contracts to define the obligations and guarantees of software components.",
    extHomeURL: "https://en.wikipedia.org/wiki/Design_by_contract",
    keywords: ["contracts", "dbc", "design by contract"],
  });
}
