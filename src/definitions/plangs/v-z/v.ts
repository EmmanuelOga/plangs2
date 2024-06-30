import type { PlangsGraph } from "../../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  g.buildPlang("pl+v").merge({
    name: "V",
    websites: [
      { kind: "wikipedia", title: "V (Vlang)", href: "https://en.wikipedia.org/wiki/V_(programming_language)" },
    ],
    images: [{ kind: "logo", url: "https://upload.wikimedia.org/wikipedia/commons/e/e8/V_Logo_SVG.svg" }],
    releases: [{ version: "0.4.5", date: "2024-01-01", kind: "stable" }],
    extensions: [".v", ".vsh"],
  });
}
