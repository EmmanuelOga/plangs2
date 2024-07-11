import type { PlangsGraph } from "../../../schema/graph";

export function define(g: PlangsGraph) {
  g.buildPlang("pl+mad")
    .merge({
      name: "MAD",
      websites: [{ kind: "wikipedia", title: "MAD", href: "https://en.wikipedia.org/wiki/MAD_(programming_language)" }],
    })
    .addImplementations([
      "pl+ibm-704",
      "pl+ibm-7090",
      "pl+ibm-system-slash360",
      "pl+ibm-system-slash370",
      "pl+univac-1108",
    ])
    .addInfluences(["pl+algol"])
    .addPerson("person+bernard-galler", { role: "designer" })
    .addPerson("person+bruce-arden", { role: "designer" })
    .addPerson("person+robert-m-graham", { role: "designer" })
    .addParadigms(["para+imperative", "para+structured"])
    .addTypeSystems(["tsys+static", "tsys+strong"]);

  /**/
}
