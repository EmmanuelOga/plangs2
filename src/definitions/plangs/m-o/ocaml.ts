import type { PlangsGraph } from "../../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.plangBuilder;

  lb.define(
    "pl+ocaml",
    {
      name: "OCaml",
      websites: [{ kind: "wikipedia", title: "OCaml", href: "https://en.wikipedia.org/wiki/OCaml" }],
      images: [{ kind: "logo", url: "https://upload.wikimedia.org/wikipedia/commons/f/ff/OCaml_Logo.svg" }],
      releases: [{ version: "5.2.0", date: "2024-01-01", kind: "stable" }],
    },
    {
      dialects: ["pl+ats", "pl+f-sharp", "pl+f-star", "pl+reason"],
      implementations: ["pl+c"],
      influences: ["pl+c", "pl+caml", "pl+ml", "pl+modula", "pl+pascal", "pl+poly-slashml", "pl+sml"],
      people: ["person+damien-doligez", "person+xavier-leroy"],
      licenses: ["lic+lgpl"],
      paradigms: ["para+functional", "para+imperative", "para+modular", "para+multi", "para+objects"],
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
}
