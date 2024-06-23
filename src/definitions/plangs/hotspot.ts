import type { PlangsGraph } from "../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.plangBuilder;

  lb.define(
    "pl+hotspot",
    "HotSpot",
    {
      name: "HotSpot",
      websites: [
        { kind: "wikipedia", title: "HotSpot", href: "https://en.wikipedia.org/wiki/HotSpot_(virtual_machine)" },
      ],
    },
    { influenced: ["pl+strongtalk"] },
  );

  /**/
}
