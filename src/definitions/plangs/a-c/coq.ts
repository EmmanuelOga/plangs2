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
        { version: "8.19.1", date: "2024-01-01", kind: "stable" },
      ],
      references: {
        stable_release: [{ href: "https://github.com/coq/coq/releases/tag/V8.19.1", title: "Release Coq 8.19.1" }],
      },
    },
    { influenced: ["pl+agda", "pl+f-star", "pl+idris", "pl+lean", "pl+ml", "pl+ocaml"], licenses: ["lic+lgpl"] },
  );

  /**/
}
