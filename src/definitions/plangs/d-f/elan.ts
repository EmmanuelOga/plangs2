import type { PlangsGraph } from "../../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  g.buildPlang("pl+elan")
    .merge({
      name: "Elan",
      websites: [
        { kind: "wikipedia", title: "Elan", href: "https://en.wikipedia.org/wiki/ELAN_(programming_language)" },
      ],
    })
    .addInfluences(["pl+algol"])
    .addPerson("person+cha-koster", { role: "designer" })
    .addParadigms(["para+imperative", "para+structured"])
    .addPlatforms(["platf+zilog-z80"])
    .addTypeSystems(["tsys+static", "tsys+strong"]);

  /**/
}
