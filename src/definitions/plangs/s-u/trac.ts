import type { PlangsGraph } from "../../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  g.buildPlang("pl+trac")
    .merge({
      name: "TRAC",
      websites: [
        { kind: "wikipedia", title: "TRAC", href: "https://en.wikipedia.org/wiki/TRAC_(programming_language)" },
        { kind: "wikipedia", title: "TRAC", href: "https://en.wikipedia.org/wiki/TRAC_programming_language" },
      ],
    })
    .addPerson("person+calvin-mooers", { role: "designer" })
    .addParadigms(["para+macros"]);

  /**/
}
