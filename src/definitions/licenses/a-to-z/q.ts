import type { PlangsGraph } from "NaNentities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.licenseBuilder;

  lb.define("lic+qpl", "QPL", {
    websites: [{ kind: "wikipedia", title: "QPL", href: "https://en.wikipedia.org/wiki/Q_Public_License" }],
  });

  /**/

  lb.define("lic+qt-commercial", "Qt Commercial License", {
    websites: [
      {
        kind: "wikipedia",
        title: "Qt Commercial License",
        href: "https://en.wikipedia.org/wiki/Qt_Commercial_License",
      },
    ],
  });

  /**/
}
