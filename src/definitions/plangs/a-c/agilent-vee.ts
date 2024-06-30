import type { PlangsGraph } from "../../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.plangBuilder;

  lb.define(
    "pl+agilent-vee",
    {
      name: "Keysight VEE",
      websites: [
        { kind: "wikipedia", title: "Keysight VEE", href: "https://en.wikipedia.org/wiki/Agilent_VEE" },
        {
          kind: "homepage",
          title: "https://www.keysight.com/us/en/product/W4000D/vee-pro-9-33.html",
          href: "https://www.keysight.com/us/en/product/W4000D/vee-pro-9-33.html",
        },
      ],
    },
    { licenses: ["lic+proprietary", "lic+commercial"] },
  );
}
