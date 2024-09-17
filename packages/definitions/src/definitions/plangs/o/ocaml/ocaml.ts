import type { PlangsGraph } from "@plangs/plangs";

export function define(g: PlangsGraph) {
  g.nodes.pl
    .set("pl+ocaml", {
      name: "OCaml",
      description:
        "OCaml (/oʊˈkæməl/ oh-KAM-əl, formerly Objective Caml) is a general-purpose, high-level, multi-paradigm programming language which extends the Caml dialect of ML with object-oriented features. OCaml was created in 1996 by Xavier Leroy, Jérôme Vouillon, Damien Doligez, Didier Rémy, Ascánder Suárez, and others.",
      firstAppeared: "1996-01-01",
      extensions: [".ml", ".mli"],
      websites: [
        { href: "https://ocaml.org/", title: "ocaml.org", kind: "homepage" },
        { href: "https://en.wikipedia.org/wiki/OCaml", title: "OCaml", kind: "wikipedia" },
      ],
      releases: [{ version: "5.2.0", date: "2024-01-01" }],
    })
    .addDialectOf(["pl+ml"])
    .addInfluencedBy(["pl+c", "pl+ml", "pl+pascal", "pl+standard-ml"])
    .addParadigms(["paradigm+functional", "paradigm+imperative", "paradigm+modular", "paradigm+multi", "paradigm+oop"])
    .addPlatforms(["plat+apple", "plat+cross", "plat+linux", "plat+riscv", "plat+windows", "plat+x86-64"])
    .addTags([
      "tag+analysis",
      "tag+automation",
      "tag+compiler",
      "tag+industrial",
      "tag+instrument_control",
      "tag+interpreter",
      "tag+proofs",
      "tag+viz",
    ])
    .addTypeSystems(["tsys+inferred", "tsys+static", "tsys+strong", "tsys+structural"])
    .addWrittenIn(["pl+c"]);
}
