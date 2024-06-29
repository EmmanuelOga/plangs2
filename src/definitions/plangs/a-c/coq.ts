import type { PlangsGraph } from "../../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.plangBuilder;

  lb.define(
    "pl+coq",
    "Coq",
    {
      name: "Coq",
      websites: [
        { kind: "wikipedia", title: "Coq", href: "https://en.wikipedia.org/wiki/Coq_(software)" },
        { kind: "homepage", title: "coq.inria.fr", href: "https://coq.inria.fr/" },
      ],
      images: [{ kind: "logo", url: "https://upload.wikimedia.org/wikipedia/commons/d/d8/Coq_logo.png" }],
      releases: [
        { version: "4.10", date: "1989-05-01", kind: "first" },
        { version: "unknown", kind: "stable" },
        { version: "8.19.1", date: "2024-01-01", kind: "stable" },
      ],
    },
    { influences: ["pl+ocaml", "pl+ml"], licenses: ["lic+lgpl"] },
  );
}
