import type { PlangsGraph } from "../../../schema/graph";

export function define(g: PlangsGraph) {
  g.buildPlang("pl+q")
    .merge({
      name: "q",
      websites: [
        {
          kind: "wikipedia",
          title: "Q",
          href: "https://en.wikipedia.org/wiki/Q_(programming_language_from_Kx_Systems)",
        },
      ],
      releases: [{ name: "q", version: "4.0", date: "2020-01-01", kind: "stable" }],
    })
    .addInfluences(["pl+k", "pl+ap", "pl+apl", "pl+scheme"])
    .addPerson("person+arthur-whitney", { role: "designer" })
    .addParadigms(["para+array", "para+functional"])
    .addTypeSystems(["tsys+dynamic", "tsys+strong"]);

  /**/
}
