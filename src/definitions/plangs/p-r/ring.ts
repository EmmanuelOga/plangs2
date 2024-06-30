import type { PlangsGraph } from "../../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  g.buildPlang("pl+ring").merge({
    name: "Ring",
    websites: [
      { kind: "wikipedia", title: "Ring", href: "https://en.wikipedia.org/wiki/Ring_(programming_language)" },
      { kind: "homepage", title: "http://ring-lang.net", href: "http://ring-lang.net" },
    ],
    images: [
      {
        kind: "logo",
        url: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/Ringlogo_transparent.png/121px-Ringlogo_transparent.png",
      },
    ],
    releases: [{ version: "1.20", date: "2024-01-01", kind: "stable" }],
  });
}
