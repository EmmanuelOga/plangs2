import type { PlangsGraph } from "../../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.plangBuilder;

  lb.define(
    "pl+coq",
    {
      name: "Coq",
      websites: [{ kind: "wikipedia", title: "Coq", href: "https://en.wikipedia.org/wiki/Coq_(software)" }],
      images: [{ kind: "logo", url: "https://upload.wikimedia.org/wikipedia/commons/d/d8/Coq_logo.png" }],
      releases: [{ version: "8.19.1", date: "2024-01-01", kind: "stable" }],
    },
    { influences: ["pl+ml", "pl+ocaml"], licenses: ["lic+lgpl"] },
  );
}
