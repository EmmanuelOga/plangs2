import type { PlangsGraph } from "../../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  g.buildPlang("pl+sml")
    .merge({
      name: "SML/NJ",
      websites: [
        { kind: "wikipedia", title: "Standard ML", href: "https://en.wikipedia.org/wiki/Standard_ML" },
        { kind: "wikipedia", title: "SML/NJ", href: "https://en.wikipedia.org/wiki/Standard_ML_of_New_Jersey" },
      ],
      releases: [
        { version: "110.99.4", date: "2023-01-01", kind: "stable" },
        { version: "unknown", date: "1997-01-01", kind: "stable" },
      ],
    })
    .addDialects(["pl+alice", "pl+mlton", "pl+sml", "pl+concurrent-ml", "pl+dependent-ml"])
    .addImplementations(["pl+sml", "pl+c", "pl+mlton", "pl+poly-slashml"])
    .addInfluences(["pl+ml", "pl+sml", "pl+hope", "pl+pascal"])
    .addLicense("lic+permissive", {
      refs: [{ href: "http://www.smlnj.org/license.html", title: "Standard ML of New Jersey License" }],
    })
    .addParadigms(["para+multi", "para+functional", "para+imperative"])
    .addParadigm("para+modular", {
      refs: [
        {
          href: "https://www.cs.cmu.edu/~rwh/introsml/modules/subfun.htm",
          title: "Programming in Standard ML: Hierarchies and Parameterization",
        },
      ],
    })
    .addTypeSystems(["tsys+strong", "tsys+static", "tsys+inferred"]);

  /**/
}
