import type { PlangsGraph } from "../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.licenseBuilder;

  lb.define("license+zend", "Zend License", [
    {
      kind: "wikipedia",
      title: "Zend Engine License",
      href: "https://en.wikipedia.org/wiki/Zend_Engine_License",
    },
    {
      kind: "wikipedia",
      title: "Zend License",
      href: "https://en.wikipedia.org/wiki/Zend_License",
    },
  ]);
}
