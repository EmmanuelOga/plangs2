import type { PlangsGraph } from "../../../schemas/graph";

export function define(g: PlangsGraph) {
  g.buildPlang("pl+dis-virtual-machine")
    .merge({
      name: "Dis virtual machine",
      websites: [{ kind: "wikipedia", title: "Limbo", href: "https://en.wikipedia.org/wiki/Dis_virtual_machine" }],
    })
    .addImplementations(["pl+dis-virtual-machine"])
    .addInfluences(["pl+c", "pl+pascal", "pl+csp", "pl+alef", "pl+newsqueak"])
    .addPerson("person+rob-pike", { role: "designer" })
    .addLicenses(["lic+gpl"])
    .addParadigms(["para+concurrent"])
    .addTypeSystems(["tsys+strong"]);

  /**/
}
