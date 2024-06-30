import type { PlangsGraph } from "../../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.plangBuilder;

  lb.define("pl+sap", {
    name: "SAP S/4HANA",
    websites: [
      { kind: "wikipedia", title: "SAP R/2", href: "https://en.wikipedia.org/wiki/SAP_R/2" },
      { kind: "wikipedia", title: "SAP R/3", href: "https://en.wikipedia.org/wiki/SAP_R/3" },
      { kind: "wikipedia", title: "SAP S/4HANA", href: "https://en.wikipedia.org/wiki/SAP_S/4HANA" },
    ],
  });
}
