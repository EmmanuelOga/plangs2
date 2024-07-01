import type { PlangsGraph } from "../../../schemas/plangs_graph";

export function define(g: PlangsGraph) {
  g.buildPlang("pl+sequencel")
    .merge({
      name: "SequenceL",
      websites: [{ kind: "wikipedia", title: "SequenceL", href: "https://en.wikipedia.org/wiki/SequenceL" }],
    })
    .addLicense("lic+proprietary", {
      refs: [
        {
          href: "https://web.archive.org/web/20170202045317/https://texasmulticore.com/products/sequencel-licenses/",
          title: "SequenceL Licensing",
        },
      ],
    })
    .addParadigms(["para+parallel", "para+functional", "para+dec"])
    .addPlatforms(["platf+x86", "platf+arm", "platf+win", "platf+mac", "platf+linux"])
    .addTypeSystems(["tsys+static", "tsys+inferred"]);

  /**/
}
