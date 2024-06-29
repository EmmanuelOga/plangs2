import type { PlangsGraph } from "../../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.plangBuilder;

  lb.define(
    "pl+elm",
    "Elm",
    {
      name: "Elm",
      websites: [
        { kind: "wikipedia", title: "Elm", href: "https://en.wikipedia.org/wiki/Elm_(programming_language)" },
        { kind: "homepage", title: "elm-lang.org", href: "https://elm-lang.org/" },
      ],
      images: [{ kind: "logo", url: "https://upload.wikimedia.org/wikipedia/commons/f/f3/Elm_logo.svg" }],
      releases: [
        { version: "unknown", kind: "first" },
        { version: "unknown", date: "2012-03-30", kind: "first" },
        { version: "0.19.1", date: "2019-10-21", kind: "stable" },
      ],
      extensions: [".elm"],
    },
    {
      influences: ["pl+sml", "pl+ocaml", "pl+ml", "pl+haskell", "pl+f-sharp"],
      licenses: ["lic+permissive", "lic+bsd"],
      paradigms: ["para+functional"],
      people: ["person+evan-czaplicki"],
      platforms: ["platf+x86-64", "platf+mac", "platf+win"],
      typeSystems: ["tsys+static", "tsys+strong", "tsys+inferred"],
    },
  );
}
