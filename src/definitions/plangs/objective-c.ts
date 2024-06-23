import type { PlangsGraph } from "../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.plangBuilder;

  lb.define(
    "pl+objective-c",
    "Objective-C",
    {
      name: "Objective-C",
      websites: [{ kind: "wikipedia", title: "Objective-C", href: "https://en.wikipedia.org/wiki/Objective-C" }],
    },
    { influenced: ["pl+arkts", "pl+c", "pl+cobra", "pl+java", "pl+logtalk", "pl+nu", "pl+smalltalk"] },
  );

  /**/
}
