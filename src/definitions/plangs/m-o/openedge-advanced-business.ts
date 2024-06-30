import type { PlangsGraph } from "../../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.plangBuilder;

  lb.define("pl+openedge-advanced-business", {
    name: "OpenEdge Advanced Business Language (ABL)",
    websites: [
      {
        kind: "wikipedia",
        title: "OpenEdge Advanced Business Language (ABL)",
        href: "https://en.wikipedia.org/wiki/OpenEdge_Advanced_Business_Language",
      },
      { kind: "homepage", title: "https://www.progress.com/openedge", href: "https://www.progress.com/openedge" },
    ],
    images: [
      {
        kind: "logo",
        url: "https://upload.wikimedia.org/wikipedia/en/thumb/5/58/OpenEdge_logo.png/120px-OpenEdge_logo.png",
      },
    ],
    releases: [{ version: "12.8", date: "2024-01-01", kind: "stable" }],
  });
}
