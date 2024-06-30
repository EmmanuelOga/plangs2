import type { PlangsGraph } from "../../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  g.buildPlang("pl+nim").merge({
    name: "Nim",
    websites: [{ kind: "wikipedia", title: "Nim", href: "https://en.wikipedia.org/wiki/Nim_(programming_language)" }],
    images: [{ kind: "logo", url: "https://upload.wikimedia.org/wikipedia/commons/e/e3/Nim_logo.svg" }],
    releases: [{ version: "2.0.4", date: "2024-01-01", kind: "stable" }],
  });
}
