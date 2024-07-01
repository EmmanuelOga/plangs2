import type { PlangsGraph } from "../../../schemas/graph";

export function define(g: PlangsGraph) {
  g.buildPlang("pl+joss")
    .merge({
      name: "JOSS",
      websites: [{ kind: "wikipedia", title: "JOSS", href: "https://en.wikipedia.org/wiki/JOSS" }],
    })
    .addDialects(["pl+focal"])
    .addImplementations(["pl+assembly"])
    .addPerson("person+cliff-shaw", { role: "designer" })
    .addParadigms(["para+non", "para+imperative"]);

  /**/
}
