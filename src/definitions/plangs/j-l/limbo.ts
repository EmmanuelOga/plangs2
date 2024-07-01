import type { PlangsGraph } from "../../../schemas/plangs_graph";

export function define(g: PlangsGraph) {
  g.buildPlang("pl+limbo")
    .merge({
      name: "Limbo",
      websites: [
        { kind: "wikipedia", title: "Limbo", href: "https://en.wikipedia.org/wiki/Limbo_(programming_language)" },
      ],
    })
    .addImplementations(["pl+dis-virtual-machine"])
    .addInfluences(["pl+alef", "pl+c", "pl+pascal", "pl+csp", "pl+newsqueak"])
    .addPerson("person+rob-pike", { role: "designer" })
    .addLicenses(["lic+gpl"])
    .addParadigms(["para+concurrent"])
    .addTypeSystems(["tsys+strong"]);

  /**/
}
