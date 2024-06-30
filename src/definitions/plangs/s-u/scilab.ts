import type { PlangsGraph } from "../../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  g.buildPlang("pl+scilab").merge({
    name: "Scilab",
    websites: [{ kind: "wikipedia", title: "Scilab", href: "https://en.wikipedia.org/wiki/Scilab" }],
    images: [
      {
        kind: "logo",
        url: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Scilab_Logo.png/90px-Scilab_Logo.png",
      },
    ],
    releases: [{ version: "2024.1.0", date: "2024-01-01", kind: "stable" }],
  });
}
