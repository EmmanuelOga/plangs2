import type { PlangsGraph } from "../../../schema/graph";

export function define(g: PlangsGraph) {
  g.buildPlang("pl+elm")
    .merge({
      name: "Elm",
      websites: [{ kind: "wikipedia", title: "Elm", href: "https://en.wikipedia.org/wiki/Elm_(programming_language)" }],
      images: [{ kind: "logo", url: "https://upload.wikimedia.org/wikipedia/commons/f/f3/Elm_logo.svg" }],
      releases: [{ name: "Elm", version: "0.19.1", date: "2019-01-01", kind: "stable" }],
    })
    .addInfluences(["pl+haskell", "pl+sml", "pl+ocaml", "pl+f-sharp", "pl+ml", "pl+poly-slashml"])
    .addLicenses(["lic+permissive"])
    .addLicense("lic+bsd", {
      refs: [{ href: "https://github.com/elm/compiler/blob/master/LICENSE", title: "elm/compiler" }],
    })
    .addParadigms(["para+functional"])
    .addPlatforms(["platf+x86-64", "platf+mac", "platf+win"])
    .addTypeSystems(["tsys+static", "tsys+strong", "tsys+inferred"]);

  /**/
}
