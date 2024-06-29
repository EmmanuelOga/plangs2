import type { PlangsGraph } from "../../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.plangBuilder;

  lb.define(
    "pl+caml",
    "Caml",
    {
      name: "Caml",
      websites: [
        { kind: "wikipedia", title: "Caml", href: "https://en.wikipedia.org/wiki/Caml" },
        { kind: "homepage", title: "caml.inria.fr", href: "http://caml.inria.fr" },
      ],
      images: [{ kind: "logo", url: "https://upload.wikimedia.org/wikipedia/en/thumb/4/4a/Caml.gif/121px-Caml.gif" }],
      releases: [
        { version: "unknown", date: "1985-01-01", kind: "first" },
        { version: "unknown", kind: "stable" },
        { version: "0.75", date: "2002-01-26", kind: "stable" },
      ],
    },
    {
      dialects: ["pl+reason", "pl+ocaml", "pl+f-star", "pl+ats"],
      influences: ["pl+ml"],
      licenses: ["lic+q-public", "lic+lgpl"],
      paradigms: ["para+multi", "para+functional", "para+imperative"],
      people: ["person+gerard-huet", "person+xavier-leroy"],
      platforms: ["platf+cross-platform", "platf+unix", "platf+linux", "platf+mac", "platf+win"],
      typeSystems: ["tsys+inferred", "tsys+static", "tsys+strong"],
    },
  );
}
