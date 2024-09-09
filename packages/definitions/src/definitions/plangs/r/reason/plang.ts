import type { PlangsGraph } from "@plangs/plangs";

export function define(g: PlangsGraph) {
  g.n_plang
    .set("pl+reason", {
      images: [{ kind: "logo", title: "Reason", url: "/images/plangs/r/reason/logo.png" }],
      name: "Reason",
      description:
        "Reason, also known as ReasonML, is a general-purpose, high-level, multi-paradigm, functional and object-oriented programming language and syntax extension and toolchain for OCaml created by Jordan Walke, who also created the React framework, at Facebook. Reason uses many syntax elements from JavaScript, compiles to native code using OCaml's compiler toolchain, and can compile to JavaScript using the ReScript compiler.",
      websites: [
        { href: "https://reasonml.github.io/", title: "reasonml.github.io", kind: "repository" },
        { href: "https://en.wikipedia.org/wiki/Reason_(programming_language)", title: "Reason", kind: "wikipedia" },
      ],
      extensions: [".re", ".rei"],
      releases: [{ version: "3.12.0", date: "2024-01-01" }],
    })
    .addDialectOf(["pl+ml", "pl+ocaml"])
    .addInfluencedBy(["pl+javascript", "pl+ocaml"])
    .addLicenses(["lic+mit"])
    .addParadigms(["para+functional", "para+imperative", "para+modular", "para+multi", "para+oop"]);
}
