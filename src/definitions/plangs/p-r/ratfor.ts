import type { PlangsGraph } from "../../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  g.buildPlang("pl+ratfor").merge({
    name: "Ratfor",
    websites: [
      { kind: "wikipedia", title: "Ratfor", href: "https://en.wikipedia.org/wiki/Ratfor" },
      {
        kind: "homepage",
        title: "sepwww.stanford.edu",
        href: "http://sepwww.stanford.edu/doku.php?id=sep:software:ratfor",
      },
    ],
  });
}
