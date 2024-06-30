import type { PlangsGraph } from "../../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  g.buildPlang("pl+gambit")
    .merge({
      name: "Gambit",
      websites: [
        { kind: "wikipedia", title: "Gambit", href: "https://en.wikipedia.org/wiki/Gambit_(Scheme_implementation)" },
      ],
      releases: [{ name: "Gambit", version: "4.9.5", date: "2023-01-01", kind: "stable" }],
    })
    .addInfluences(["pl+lisp", "pl+scheme", "pl+multilisp"])
    .addLicenses(["lic+lgpl", "lic+apache"])
    .addParadigms(["para+multi", "para+functional", "para+imperative", "para+meta"])
    .addPlatforms(["platf+ia-32", "platf+x86-64", "platf+cross-platform"])
    .addTypeSystems(["tsys+dynamic", "tsys+latent", "tsys+strong"]);

  /**/
}
