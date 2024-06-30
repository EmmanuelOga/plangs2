import type { PlangsGraph } from "../../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  g.buildPlang("pl+maple").merge({
    name: "Maple",
    websites: [{ kind: "wikipedia", title: "Maple", href: "https://en.wikipedia.org/wiki/Maple_(software)" }],
    images: [{ kind: "logo", url: "https://upload.wikimedia.org/wikipedia/commons/3/30/Maple_2015_logo.svg" }],
    releases: [{ version: "unknown", date: "2024-01-01", kind: "stable" }],
  });
}
