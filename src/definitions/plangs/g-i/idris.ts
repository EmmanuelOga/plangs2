import type { PlangsGraph } from "../../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  g.buildPlang("pl+idris").merge({
    name: "Idris",
    websites: [
      { kind: "wikipedia", title: "Idris", href: "https://en.wikipedia.org/wiki/Idris_(programming_language)" },
    ],
    releases: [
      { version: "1.3.4", date: "2021-01-01", kind: "stable" },
      { version: "0.7.0", date: "2023-01-01", kind: "preview" },
    ],
  });
}
