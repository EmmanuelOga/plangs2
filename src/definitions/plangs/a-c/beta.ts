import type { PlangsGraph } from "../../../schema/graph";

export function define(g: PlangsGraph) {
  g.buildPlang("pl+beta")
    .merge({
      name: "BETA",
      websites: [
        { kind: "wikipedia", title: "BETA", href: "https://en.wikipedia.org/wiki/BETA_(programming_language)" },
      ],
    })
    .addInfluences(["pl+simula", "pl+simula-67", "pl+simula67"])
    .addPerson("person+birger-m-ller-pedersen", { role: "designer" })
    .addPerson("person+kristen-nygaard", { role: "designer" })
    .addParadigms(["para+objects"]);

  /**/
}
