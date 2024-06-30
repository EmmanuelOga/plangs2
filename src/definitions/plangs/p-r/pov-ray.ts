import type { PlangsGraph } from "../../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  g.buildPlang("pl+pov-ray").merge({
    name: "POV-Ray",
    websites: [{ kind: "wikipedia", title: "POV-Ray", href: "https://en.wikipedia.org/wiki/POV-Ray" }],
    images: [
      {
        kind: "logo",
        url: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/Povray_logo_sphere.png/120px-Povray_logo_sphere.png",
      },
    ],
    releases: [
      { version: "unknown", date: "1991-01-01", kind: "first" },
      { version: "3.7.0.0", date: "2013-01-01", kind: "stable" },
    ],
  });
}
