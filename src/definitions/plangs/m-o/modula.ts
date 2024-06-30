import type { PlangsGraph } from "../../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  g.buildPlang("pl+modula").merge({
    name: "Modula-2",
    websites: [
      { kind: "wikipedia", title: "Modula-2", href: "https://en.wikipedia.org/wiki/Modula-2" },
      { kind: "wikipedia", title: "Modula", href: "https://en.wikipedia.org/wiki/Modula" },
      { kind: "wikipedia", title: "Modula-3", href: "https://en.wikipedia.org/wiki/Modula-3" },
      { kind: "wikipedia", title: "Modula-2+", href: "https://en.wikipedia.org/wiki/Modula-2%2B" },
      { kind: "wikipedia", title: "ORCA/Modula-2", href: "https://en.wikipedia.org/wiki/ORCA/Modula-2" },
    ],
    images: [{ kind: "logo", url: "https://upload.wikimedia.org/wikipedia/commons/6/6f/Modula-3.svg" }],
    releases: [{ version: "5.8.6", date: "2010-01-01", kind: "stable" }],
  });
}
