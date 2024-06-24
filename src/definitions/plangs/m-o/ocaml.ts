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
      references: {
        paradigms: [{ href: "https://ocaml.org/learn/tutorials/modules.html", title: "Modules" }],
        first_appeared: [
          { href: "https://sympa.inria.fr/sympa/arc/caml-list/1996-05/msg00003.html", title: "Objective Caml 1.00" },
        ],
        stable_release: [{ href: "https://ocaml.org/releases/5.2.0", title: "OCaml 5.2.0 Release Notes" }],
        influenced: [
          { href: "https://doc.rust-lang.org/reference/influences.html", title: "Influences - The Rust Reference" },
        ],
      },
      releases: [
        { version: "unknown", date: "1996-01-01", kind: "first" },
        { version: "5.2.0", date: "2024-01-01", kind: "stable" },
      ],
      extensions: [".ml", ".mli"],
    },
    {
      dialects: ["pl+ats", "pl+f-star", "pl+reason"],
      implementations: ["pl+c"],
      influences: ["pl+c", "pl+caml", "pl+ml", "pl+modula-3", "pl+pascal", "pl+sml"],
      licenses: ["lic+lgpl"],
      paradigms: ["para+functional", "para+imperative", "para+modular", "para+multi", "para+objects"],
      people: [
        ["person+damien-doligez", "designer"],
        ["person+xavier-leroy", "designer"],
      ],
      platforms: [
        "platf+arm",
        "platf+cross-platform",
        "platf+ia-32",
        "platf+linux",
        "platf+mac",
        "platf+power-isa",
        "platf+risc-v",
        "platf+unix",
        "platf+win",
        "platf+x86-64",
      ],
      typeSystems: ["tsys+inferred", "tsys+static", "tsys+strong", "tsys+structural"],
    },
  );

  /**/
}
