import type { PlangsGraph } from "../../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.plangBuilder;

  lb.define(
    "pl+json",
    "JSON",
    { name: "JSON", websites: [{ kind: "wikipedia", title: "JSON", href: "https://en.wikipedia.org/wiki/JSON" }] },
    { influences: ["pl+rebol"] },
  );

  /**/
}
