import type { PlangsGraph } from "../../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.plangBuilder;

  lb.define(
    "pl+maxima",
    {
      name: "Maxima",
      websites: [{ kind: "wikipedia", title: "Maxima", href: "https://en.wikipedia.org/wiki/Maxima_(software)" }],
      images: [{ kind: "logo", url: "https://upload.wikimedia.org/wikipedia/commons/4/4a/Maxima-new.svg" }],
      releases: [{ version: "5.47.0", date: "2023-01-01", kind: "stable" }],
    },
    { licenses: ["lic+gpl"] },
  );
}
