import type { PlangsGraph } from "../../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  g.buildPlang("pl+c-")
    .merge({
      name: "Cω",
      websites: [
        { kind: "wikipedia", title: "C--", href: "https://en.wikipedia.org/wiki/C--" },
        {
          kind: "homepage",
          title: "https://www.cs.tufts.edu/~nr/c--/index.html",
          href: "https://www.cs.tufts.edu/~nr/c--/index.html",
        },
        { kind: "wikipedia", title: "Cω", href: "https://en.wikipedia.org/wiki/C%CF%89" },
      ],
    })
    .addInfluences(["pl+c"])
    .addPerson("person+simon-peyton-jones", { role: "designer" })
    .addParadigms(["para+imperative"])
    .addTypeSystems(["tsys+static", "tsys+weak"]);

  /**/
}
