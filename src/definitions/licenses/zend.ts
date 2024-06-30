import type { PlangsGraph } from "../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  g.buildLicense("lic+zend").merge({
    name: "Zend License",
    websites: [
      { kind: "wikipedia", title: "Zend License", href: "https://en.wikipedia.org/wiki/Zend_License" },
      { kind: "wikipedia", title: "Zend Engine License", href: "https://en.wikipedia.org/wiki/Zend_Engine_License" },
    ],
  });

  /**/
}
