import type { PlangsGraph } from "../../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.plangBuilder;

  lb.define(
    "pl+elm",
    "Elm",
    {
      name: "Elm",
      websites: [{ kind: "wikipedia", title: "Elm", href: "https://en.wikipedia.org/wiki/Elm_(programming_language)" }],
      images: [{ kind: "logo", url: "https://upload.wikimedia.org/wikipedia/commons/f/f3/Elm_logo.svg" }],
      releases: [{ version: "0.19.1", date: "2019-01-01", kind: "stable" }],
    },
    {
      influences: ["pl+haskell", "pl+sml", "pl+ocaml", "pl+f-sharp", "pl+ml", "pl+poly-slashml"],
      licenses: ["lic+permissive", "lic+bsd"],
      paradigms: ["para+functional"],
      platforms: ["platf+x86-64", "platf+mac", "platf+win"],
      typeSystems: ["tsys+static", "tsys+strong", "tsys+inferred"],
    },
  );
}
