import type { PlangsGraph } from "../../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  g.buildPlang("pl+julia").merge({
    name: "Julia",
    websites: [
      { kind: "wikipedia", title: "Julia", href: "https://en.wikipedia.org/wiki/Julia_(programming_language)" },
    ],
    images: [
      { kind: "logo", url: "https://upload.wikimedia.org/wikipedia/commons/1/1f/Julia_Programming_Language_Logo.svg" },
    ],
    releases: [
      { version: "1.10.3", date: "2024-01-01", kind: "stable" },
      { version: "1.11.0", date: "2024-01-01", kind: "preview" },
    ],
  });
}
