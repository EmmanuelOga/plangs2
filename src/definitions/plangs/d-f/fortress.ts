import type { PlangsGraph } from "../../../schemas/plangs_graph";

export function define(g: PlangsGraph) {
  g.buildPlang("pl+fortress")
    .merge({
      name: "Fortress",
      websites: [
        { kind: "wikipedia", title: "Fortress", href: "https://en.wikipedia.org/wiki/Fortress_(programming_language)" },
      ],
    })
    .addInfluences(["pl+fortran", "pl+scala", "pl+haskell"])
    .addLicenses(["lic+bsd-s"])
    .addPlatforms(["platf+jvm", "platf+cross-platform"])
    .addTypeSystems(["tsys+static"]);

  /**/
}
