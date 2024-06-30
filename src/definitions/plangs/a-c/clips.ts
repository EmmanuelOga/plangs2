import type { PlangsGraph } from "../../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.plangBuilder;

  lb.define(
    "pl+clips",
    {
      name: "CLIPS",
      websites: [
        { kind: "wikipedia", title: "CLIPS", href: "https://en.wikipedia.org/wiki/CLIPS_(programming_language)" },
        { kind: "homepage", title: "https://clipsrules.net", href: "https://clipsrules.net" },
      ],
    },
    { paradigms: ["para+expert"] },
  );
}
