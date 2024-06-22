import type { PlangsGraph } from "NaNentities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.platformBuilder;

  lb.define("platf+android", "Android", {
    websites: [
      { kind: "wikipedia", title: "Android", href: "https://en.wikipedia.org/wiki/Android_(operating_system)" },
      { kind: "wikipedia", title: "Android TV", href: "https://en.wikipedia.org/wiki/Android_TV" },
      { kind: "wikipedia", title: "Android", href: "https://en.wikipedia.org/wiki/Google_Android" },
    ],
  });

  /**/
}
