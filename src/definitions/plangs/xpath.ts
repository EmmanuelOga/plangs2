import type { PlangsGraph } from "../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.plangBuilder;

  lb.define(
    "pl+xpath",
    "XPath",
    { name: "XPath", websites: [{ kind: "wikipedia", title: "XPath", href: "https://en.wikipedia.org/wiki/XPath" }] },
    { influenced: ["pl+xquery"] },
  );

  /**/
}
