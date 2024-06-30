import type { PlangsGraph } from "../../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  g.buildPlang("pl+squeak").merge({
    name: "Squeak",
    websites: [{ kind: "wikipedia", title: "Squeak", href: "https://en.wikipedia.org/wiki/Squeak" }],
    images: [{ kind: "logo", url: "https://upload.wikimedia.org/wikipedia/commons/b/b0/Squeak.svg" }],
    releases: [{ version: "unknown", date: "2023-01-01", kind: "stable" }],
  });
}
