import type { PlangsGraph } from "../../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  g.buildPlang("pl+ada")
    .merge({
      name: "Ada",
      websites: [{ kind: "wikipedia", title: "Ada", href: "https://en.wikipedia.org/wiki/Ada_(programming_language)" }],
      images: [
        {
          kind: "logo",
          url: "https://upload.wikimedia.org/wikipedia/commons/3/31/Ada_horizon_green_logo_with_slogan.svg",
        },
      ],
      releases: [{ version: "unknown", date: "2022-01-01", kind: "stable" }],
    })
    .addDialects(["pl+spark", "pl+ravenscar-profile"])
    .addImplementations(["pl+ddc-i"])
    .addImplementation("pl+gnat", {
      refs: [{ href: "https://www.adacore.com/download", title: "Commercial software solutions for Ada, C and C++" }],
    })
    .addImplementation("pl+ptc", {
      refs: [{ href: "http://www.ptc.com/developer-tools/objectada", title: "PTC ObjectAda" }],
    })
    .addInfluences([
      "pl+algol",
      "pl+pascal",
      "pl+simula-67",
      "pl+cpp",
      "pl+smalltalk",
      "pl+modula",
      "pl+java",
      "pl+eiffel",
      "pl+clu",
    ])
    .addParadigms([
      "para+multi",
      "para+structured",
      "para+imperative",
      "para+objects",
      "para+concurrent",
      "para+array",
      "para+distributed",
      "para+generic",
      "para+meta",
    ])
    .addParadigm("para+aspect", {
      refs: [
        {
          href: "https://web.archive.org/web/20160418132340/http://www.adacore.com/uploads/technical-papers/Ada2012_Rational_Introducion.pdf",
          title: "Ada2012 Rationale",
        },
      ],
    })
    .addPlatforms(["platf+cross-platform"])
    .addTypeSystems(["tsys+static", "tsys+strong", "tsys+safe", "tsys+nominative"]);

  /**/
}
