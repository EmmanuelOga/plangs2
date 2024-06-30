import type { PlangsGraph } from "../../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  g.buildPlang("pl+zig").merge({
    name: "Zig",
    websites: [{ kind: "wikipedia", title: "Zig", href: "https://en.wikipedia.org/wiki/Zig_(programming_language)" }],
    images: [{ kind: "logo", url: "https://upload.wikimedia.org/wikipedia/commons/b/b3/Zig_logo_2020.svg" }],
    releases: [{ version: "0.13.0", date: "2024-01-01", kind: "preview" }],
  });
}
