import type { PlangsGraph } from "../../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  g.buildPlang("pl+rpg").merge({
    name: "RPG IV",
    websites: [
      { kind: "wikipedia", title: "RPG II", href: "https://en.wikipedia.org/wiki/RPG_II" },
      { kind: "wikipedia", title: "RPG III", href: "https://en.wikipedia.org/wiki/RPG_III" },
      { kind: "wikipedia", title: "RPG IV", href: "https://en.wikipedia.org/wiki/RPG_IV" },
    ],
  });
}
