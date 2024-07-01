import type { PlangsGraph } from "../../../schemas/plangs_graph";

export function define(g: PlangsGraph) {
  g.buildPlang("pl+gnu-m4")
    .merge({
      name: "GNU m4",
      websites: [{ kind: "wikipedia", title: "m4", href: "https://en.wikipedia.org/wiki/GNU_m4" }],
    })
    .addImplementations(["pl+gnu-m4"])
    .addPerson("person+brian-kernighan", { role: "designer" })
    .addPerson("person+dennis-ritchie", { role: "designer" })
    .addParadigms(["para+macros"]);

  /**/
}
