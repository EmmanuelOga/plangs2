import type { PlangsGraph } from "../../../schema/graph";

export function define(g: PlangsGraph) {
  g.buildPlang("pl+q-sharp")
    .merge({
      name: "Q#",
      websites: [{ kind: "wikipedia", title: "Q#", href: "https://en.wikipedia.org/wiki/Q_Sharp" }],
    })
    .addInfluences(["pl+c-sharp", "pl+f-sharp", "pl+python"])
    .addLicense("lic+mit", {
      refs: [
        {
          href: "https://courses.cs.washington.edu/courses/cse490q/20au/hws/qsharp-intro.pdf",
          title: "Introduction to Q#",
        },
      ],
    })
    .addParadigms(["para+quantum", "para+functional", "para+imperative"])
    .addPlatforms(["platf+.net"])
    .addTypeSystems(["tsys+static", "tsys+strong"]);

  /**/
}
