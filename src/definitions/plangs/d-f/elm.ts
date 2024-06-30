import type { PlangsGraph } from "../../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.plangBuilder;

  lb.define(
    "pl+elm",
    {
      name: "Elm",
      websites: [{ kind: "wikipedia", title: "Elm", href: "https://en.wikipedia.org/wiki/Elm_(programming_language)" }],
      images: [{ kind: "logo", url: "https://upload.wikimedia.org/wikipedia/commons/f/f3/Elm_logo.svg" }],
      releases: [{ version: "0.19.1", date: "2019-01-01", kind: "stable" }],
    },
    {
      influences: ["pl+f-sharp", "pl+haskell", "pl+ml", "pl+ocaml", "pl+poly-slashml", "pl+sml"],
      licenses: ["lic+bsd", "lic+permissive"],
      paradigms: ["para+functional"],
      platforms: ["platf+mac", "platf+win", "platf+x86-64"],
      typeSystems: ["tsys+inferred", "tsys+static", "tsys+strong"],
    },
  );
}
