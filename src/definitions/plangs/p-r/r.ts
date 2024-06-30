import type { PlangsGraph } from "../../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  g.buildPlang("pl+r").merge({
    name: "R",
    websites: [{ kind: "wikipedia", title: "R", href: "https://en.wikipedia.org/wiki/R_(programming_language)" }],
    images: [{ kind: "logo", url: "https://upload.wikimedia.org/wikipedia/commons/1/1b/R_logo.svg" }],
    releases: [{ version: "4.4.0", date: "2024-01-01", kind: "stable" }],
  });
}
