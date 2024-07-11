import type { PlangsGraph } from "../../../schema/graph";

export function define(g: PlangsGraph) {
  g.buildPlang("pl+cobra")
    .merge({
      name: "Cobra",
      websites: [
        { kind: "wikipedia", title: "Cobra", href: "https://en.wikipedia.org/wiki/Cobra_(programming_language)" },
      ],
    })
    .addInfluences(["pl+python", "pl+eiffel", "pl+c-sharp", "pl+objective-c"])
    .addLicenses(["lic+mit"])
    .addParadigms(["para+multi", "para+objects"])
    .addPlatforms(["platf+.net", "platf+mono"])
    .addTypeSystems(["tsys+strong", "tsys+static", "tsys+dynamic", "tsys+inferred"]);

  /**/
}
