import type { PlangsGraph } from "../../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  g.buildPlang("pl+gnu-prolog").merge({
    name: "GNU Prolog",
    websites: [{ kind: "wikipedia", title: "GNU Prolog", href: "https://en.wikipedia.org/wiki/GNU_Prolog" }],
    images: [{ kind: "logo", url: "https://upload.wikimedia.org/wikipedia/en/2/22/Heckert_GNU_white.svg" }],
    releases: [{ version: "1.5.0", date: "2021-01-01", kind: "stable" }],
  });
}
