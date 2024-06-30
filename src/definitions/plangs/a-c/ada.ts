import type { PlangsGraph } from "../../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  g.buildPlang("pl+ada").merge({
    name: "Ada",
    websites: [{ kind: "wikipedia", title: "Ada", href: "https://en.wikipedia.org/wiki/Ada_(programming_language)" }],
    images: [
      {
        kind: "logo",
        url: "https://upload.wikimedia.org/wikipedia/commons/3/31/Ada_horizon_green_logo_with_slogan.svg",
      },
    ],
    releases: [{ version: "unknown", date: "2022-01-01", kind: "stable" }],
  });
}
