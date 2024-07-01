import type { PlangsGraph } from "../../../schemas/plangs_graph";

export function define(g: PlangsGraph) {
  g.buildPlang("pl+rapira")
    .merge({
      name: "Rapira",
      websites: [{ kind: "wikipedia", title: "Rapira", href: "https://en.wikipedia.org/wiki/Rapira" }],
      images: [
        {
          kind: "screenshot",
          url: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/RAPIRA_example.png/300px-RAPIRA_example.png",
        },
      ],
    })
    .addInfluences(["pl+algol", "pl+pop-2", "pl+setl"])
    .addPerson("person+andrey-ershov", { role: "designer" })
    .addParadigms(["para+imperative", "para+structured"])
    .addPlatforms(["platf+intel-8080", "platf+zilog-z80"])
    .addTypeSystems(["tsys+dynamic"]);

  /**/
}
