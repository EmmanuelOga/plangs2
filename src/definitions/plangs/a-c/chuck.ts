import type { PlangsGraph } from "../../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  g.buildPlang("pl+chuck").merge({
    name: "ChucK",
    websites: [{ kind: "wikipedia", title: "ChucK", href: "https://en.wikipedia.org/wiki/ChucK" }],
    images: [{ kind: "logo", url: "https://upload.wikimedia.org/wikipedia/commons/2/24/Chuck-2023.png" }],
    releases: [{ version: "1.5.2.4", date: "2024-01-01", kind: "stable" }],
  });
}
