import type { PlangsGraph } from "../../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.plangBuilder;

  lb.define("pl+easytrieve", {
    name: "Easytrieve",
    websites: [
      { kind: "wikipedia", title: "Easytrieve", href: "https://en.wikipedia.org/wiki/Easytrieve" },
      {
        kind: "homepage",
        title: "CA Easytrieve® Report Generator",
        href: "https://www.broadcom.com/products/mainframe/application-development/easytrieve-report-generator",
      },
    ],
  });
}
