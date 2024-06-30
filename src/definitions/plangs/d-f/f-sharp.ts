import type { PlangsGraph } from "../../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  g.buildPlang("pl+f-sharp").merge({
    name: "F#",
    websites: [
      { kind: "wikipedia", title: "F#", href: "https://en.wikipedia.org/wiki/F_Sharp_(programming_language)" },
    ],
    images: [{ kind: "logo", url: "https://upload.wikimedia.org/wikipedia/commons/6/66/F_Sharp_logo.svg" }],
    releases: [{ version: "8.0.0", date: "2023-01-01", kind: "stable" }],
  });
}
