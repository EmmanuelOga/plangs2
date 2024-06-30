import type { PlangsGraph } from "../../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.plangBuilder;

  lb.define(
    "pl+plexil",
    {
      name: "PLEXIL",
      websites: [
        { kind: "wikipedia", title: "PLEXIL", href: "https://en.wikipedia.org/wiki/PLEXIL" },
        { kind: "homepage", title: "http://plexil.sourceforge.net/", href: "http://plexil.sourceforge.net/" },
      ],
    },
    {
      implementations: ["pl+robotics"],
      paradigms: ["para+multi"],
      platforms: ["platf+linux", "platf+mac"],
      typeSystems: ["tsys+nominative", "tsys+safe", "tsys+static"],
    },
  );
}
