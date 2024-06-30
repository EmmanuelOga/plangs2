import type { PlangsGraph } from "../../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  g.buildPlang("pl+modelica")
    .merge({
      name: "Modelica",
      websites: [
        { kind: "wikipedia", title: "Modelica", href: "https://en.wikipedia.org/wiki/Modelica" },
        { kind: "homepage", title: "www.modelica.org", href: "https://www.modelica.org/" },
      ],
      images: [
        {
          kind: "screenshot",
          url: "https://upload.wikimedia.org/wikipedia/en/thumb/0/0e/Modelica_Language.png/300px-Modelica_Language.png",
        },
      ],
      releases: [{ version: "3.6", date: "2023-01-01", kind: "stable" }],
    })
    .addImplementations([
      "pl+amesim",
      "pl+catia",
      "pl+dymola",
      "pl+jmodelica.org",
      "pl+maplesim",
      "pl+wolfram-systemmodeler",
      "pl+openmodelica",
      "pl+scicos",
      "pl+simulationx",
      "pl+xcos",
    ])
    .addLicenses(["lic+ccs"])
    .addParadigms(["para+dec"])
    .addPlatforms(["platf+cross-platform"]);

  /**/
}
