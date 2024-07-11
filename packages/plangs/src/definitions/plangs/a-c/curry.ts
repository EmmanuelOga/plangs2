import type { PlangsGraph } from "../../../schema/graph";

export function define(g: PlangsGraph) {
  g.buildPlang("pl+curry")
    .merge({
      name: "Curry",
      websites: [
        { kind: "wikipedia", title: "Curry", href: "https://en.wikipedia.org/wiki/Curry_(programming_language)" },
      ],
      releases: [{ name: "Curry", version: "3.6.0", date: "2023-01-01", kind: "stable" }],
    })
    .addImplementations(["pl+prolog", "pl+c", "pl+haskell"])
    .addInfluences(["pl+haskell", "pl+prolog"])
    .addLicenses(["lic+bsd-s"])
    .addParadigms(["para+functional", "para+logic"])
    .addPlatforms(["platf+x86-64", "platf+cross-platform", "platf+linux"])
    .addTypeSystems(["tsys+static", "tsys+strong", "tsys+inferred"]);

  /**/
}
