import type { PlangsGraph } from "../../../schemas/graph";

export function define(g: PlangsGraph) {
  g.buildPlang("pl+stoic")
    .merge({
      name: "STOIC",
      websites: [{ kind: "wikipedia", title: "STOIC", href: "https://en.wikipedia.org/wiki/STOIC" }],
    })
    .addInfluences(["pl+forth", "pl+reverse-polish-notation"])
    .addPerson("person+jonathan-sachs", { role: "developer" })
    .addParadigms(["para+concatenative", "para+stack", "para+imperative"])
    .addPlatforms(["platf+openvms"]);

  /**/
}
