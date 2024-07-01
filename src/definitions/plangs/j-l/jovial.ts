import type { PlangsGraph } from "../../../schemas/plangs_graph";

export function define(g: PlangsGraph) {
  g.buildPlang("pl+jovial")
    .merge({
      name: "JOVIAL",
      websites: [{ kind: "wikipedia", title: "JOVIAL", href: "https://en.wikipedia.org/wiki/JOVIAL" }],
    })
    .addImplementations([
      "pl+mvs",
      "pl+openvms",
      "pl+macos",
      "pl+win",
      "pl+linux",
      "pl+sparc",
      "pl+powerpc",
      "pl+mil-std-1750a",
    ])
    .addInfluences(["pl+algol", "pl+semi-automatic-ground-environment"])
    .addParadigms(["para+imperative", "para+structured"])
    .addTypeSystems(["tsys+static", "tsys+strong", "tsys+safe", "tsys+structural"]);

  /**/
}
