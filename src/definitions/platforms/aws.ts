import type { PlangsGraph } from "../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.platformBuilder;

  lb.define("platf+aws", "Amazon Web Services", {
    websites: [
      { kind: "wikipedia", title: "Amazon Web Services", href: "https://en.wikipedia.org/wiki/Amazon_Web_Services" },
    ],
  });
}
