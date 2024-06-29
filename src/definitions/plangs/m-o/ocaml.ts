import type { PlangsGraph } from "../../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.plangBuilder;

  lb.define(
    "pl+ocaml",
    "OCaml",
    {
      name: "OCaml",
      websites: [
        { kind: "wikipedia", title: "OCaml", href: "https://en.wikipedia.org/wiki/OCaml" },
        { kind: "homepage", title: "ocaml.org", href: "https://ocaml.org/" },
      ],
      images: [{ kind: "logo", url: "https://upload.wikimedia.org/wikipedia/commons/f/ff/OCaml_Logo.svg" }],
      releases: [
        { version: "unknown", kind: "first" },
        { version: "unknown", date: "1996-01-01", kind: "first" },
        { version: "5.2.0", date: "2024-01-01", kind: "stable" },
      ],
      extensions: [".ml", ".mli"],
    },
    {
      dialects: ["pl+reason", "pl+f-star", "pl+ats"],
      implementations: ["pl+c"],
      influences: ["pl+sml", "pl+caml", "pl+c", "pl+modula", "pl+pascal", "pl+ml"],
      licenses: ["lic+lgpl"],
      paradigms: ["para+multi", "para+functional", "para+imperative", "para+modular", "para+objects"],
      people: ["person+xavier-leroy", "person+damien-doligez"],
      platforms: [
        "platf+ia-32",
        "platf+x86-64",
        "platf+power-isa",
        "platf+arm",
        "platf+risc-v",
        "platf+cross-platform",
        "platf+linux",
        "platf+unix",
        "platf+mac",
        "platf+win",
      ],
      typeSystems: ["tsys+inferred", "tsys+static", "tsys+strong", "tsys+structural"],
    },
  );
}
