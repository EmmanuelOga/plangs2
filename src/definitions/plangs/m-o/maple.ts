import type { PlangsGraph } from "../../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.plangBuilder;

  lb.define(
    "pl+maple",
    {
      name: "Maple",
      websites: [{ kind: "wikipedia", title: "Maple", href: "https://en.wikipedia.org/wiki/Maple_(software)" }],
      images: [{ kind: "logo", url: "https://upload.wikimedia.org/wikipedia/commons/3/30/Maple_2015_logo.svg" }],
      releases: [{ version: "unknown", date: "2024-01-01", kind: "stable" }],
    },
    {
      people: ["person+waterloo-maple"],
      licenses: ["lic+commercial", "lic+proprietary"],
      platforms: ["platf+linux", "platf+mac", "platf+win"],
    },
  );
}
