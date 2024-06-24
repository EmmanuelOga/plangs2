import type { PlangsGraph } from "../../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.plangBuilder;

  lb.define(
    "pl+processing",
    "Processing",
    {
      name: "Processing",
      websites: [
        {
          kind: "wikipedia",
          title: "Processing",
          href: "https://en.wikipedia.org/wiki/Processing_(programming_language)",
        },
      ],
    },
    { influenced: ["pl+kojo"], influences: ["pl+c"] },
  );

  /**/
}
