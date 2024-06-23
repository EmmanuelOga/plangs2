import type { PlangsGraph } from "../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.plangBuilder;

  lb.define(
    "pl+puredata",
    "PureData",
    {
      name: "PureData",
      websites: [{ kind: "wikipedia", title: "PureData", href: "https://en.wikipedia.org/wiki/PureData" }],
    },
    { influenced: ["pl+lucid"] },
  );

  /**/
}
