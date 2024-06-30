import type { PlangsGraph } from "../../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  g.buildPlang("pl+gnu-octave").merge({
    name: "GNU Octave",
    websites: [{ kind: "wikipedia", title: "GNU Octave", href: "https://en.wikipedia.org/wiki/GNU_Octave" }],
    images: [{ kind: "logo", url: "https://upload.wikimedia.org/wikipedia/commons/6/6a/Gnu-octave-logo.svg" }],
    releases: [{ version: "9.1.0", date: "2024-01-01", kind: "stable" }],
  });
}
