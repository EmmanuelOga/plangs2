import type { PlangsGraph } from "../../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  g.buildPlang("pl+dart").merge({
    name: "Dart",
    websites: [{ kind: "wikipedia", title: "Dart", href: "https://en.wikipedia.org/wiki/Dart_(programming_language)" }],
    images: [
      { kind: "logo", url: "https://upload.wikimedia.org/wikipedia/commons/f/fe/Dart_programming_language_logo.svg" },
    ],
    releases: [{ version: "3.4.3", date: "2024-01-01", kind: "stable" }],
  });
}
