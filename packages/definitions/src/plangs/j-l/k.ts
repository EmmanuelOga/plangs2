import type { PlangsGraph } from "../../../schema/graph";

export function define(g: PlangsGraph) {
  g.buildPlang("pl+k")
    .merge({
      name: "k",
      websites: [{ kind: "wikipedia", title: "K", href: "https://en.wikipedia.org/wiki/K_(programming_language)" }],
    })
    .addInfluences(["pl+ap", "pl+apl", "pl+scheme"])
    .addPerson("person+arthur-whitney", { role: "designer" })
    .addParadigms(["para+array", "para+functional"])
    .addTypeSystems(["tsys+dynamic", "tsys+strong"]);

  /**/
}
