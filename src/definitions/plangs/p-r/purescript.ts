import type { PlangsGraph } from "../../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  g.buildPlang("pl+purescript")
    .merge({
      name: "PureScript",
      websites: [{ kind: "wikipedia", title: "PureScript", href: "https://en.wikipedia.org/wiki/PureScript" }],
      images: [
        {
          kind: "logo",
          url: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/PureScript_Logo.png/121px-PureScript_Logo.png",
        },
      ],
      releases: [{ version: "0.15.15", date: "2024-01-01", kind: "stable" }],
    })
    .addInfluences(["pl+haskell", "pl+javascript"])
    .addLicense("lic+bsd-m", {
      refs: [{ href: "https://github.com/purescript/purescript/blob/master/LICENSE", title: "purescript/purescript" }],
    })
    .addParadigms(["para+functional"])
    .addTypeSystems(["tsys+inferred", "tsys+static", "tsys+strong"]);

  /**/
}
