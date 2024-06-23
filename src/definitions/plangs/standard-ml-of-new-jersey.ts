import type { PlangsGraph } from "../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.plangBuilder;

  lb.define(
    "pl+standard-ml-of-new-jersey",
    "Standard ML of New Jersey",
    {
      name: "Standard ML of New Jersey",
      websites: [
        { kind: "wikipedia", title: "SML/NJ", href: "https://en.wikipedia.org/wiki/Standard_ML_of_New_Jersey" },
        { kind: "homepage", title: "www.smlnj.org", href: "http://www.smlnj.org" },
      ],
      references: {
        developers: [{ href: "https://www.smlnj.org/smlnj.html", title: "SML/NJ background information" }],
        license: [{ href: "http://www.smlnj.org/license.html", title: "Standard ML of New Jersey License" }],
      },
      releases: [
        { version: "unknown", date: "1988-01-01", kind: "first" },
        { version: "110.99.4", date: "2023-01-01", kind: "stable" },
      ],
      extensions: [".sml"],
    },
    {
      implementations: ["pl+c", "pl+standard-ml"],
      influences: ["pl+standard-ml"],
      licenses: ["lic+permissive"],
      paradigms: ["para+functional", "para+imperative", "para+multi"],
      typeSystems: ["tsys+inferred", "tsys+static", "tsys+strong"],
    },
  );

  /**/
}
