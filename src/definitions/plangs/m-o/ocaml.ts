import type { PlangsGraph } from "../../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  g.buildPlang("pl+ocaml")
    .merge({
      name: "OCaml",
      websites: [{ kind: "wikipedia", title: "OCaml", href: "https://en.wikipedia.org/wiki/OCaml" }],
      images: [{ kind: "logo", url: "https://upload.wikimedia.org/wikipedia/commons/f/ff/OCaml_Logo.svg" }],
      releases: [{ version: "5.2.0", date: "2024-01-01", kind: "stable" }],
    })
    .addDialects(["pl+ats", "pl+f-sharp", "pl+f-star", "pl+reason"])
    .addImplementations(["pl+c"])
    .addInfluences(["pl+caml", "pl+ml", "pl+modula", "pl+c", "pl+pascal", "pl+sml", "pl+poly-slashml"])
    .addPerson("person+xavier-leroy", { role: "designer" })
    .addPerson("person+damien-doligez", { role: "designer" })
    .addLicenses(["lic+lgpl"])
    .addParadigms(["para+multi", "para+functional", "para+imperative", "para+objects"])
    .addParadigm("para+modular", {
      refs: [{ href: "https://ocaml.org/learn/tutorials/modules.html", title: "Modules" }],
    })
    .addPlatforms([
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
    ])
    .addTypeSystems(["tsys+inferred", "tsys+static", "tsys+strong", "tsys+structural"]);

  /**/
}
