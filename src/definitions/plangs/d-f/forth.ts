import type { PlangsGraph } from "../../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  g.buildPlang("pl+forth")
    .merge({
      name: "Forth",
      websites: [
        { kind: "wikipedia", title: "Forth", href: "https://en.wikipedia.org/wiki/Forth_(programming_language)" },
      ],
    })
    .addImplementations(["pl+gforth"])
    .addPerson("person+charles-h-moore", { role: "designer" })
    .addParadigms(["para+concatenative", "para+stack", "para+imperative", "para+reflective"]);

  /**/
}
