import type { PlangsGraph } from "../../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  g.buildPlang("pl+sensetalk")
    .merge({
      name: "SenseTalk",
      websites: [{ kind: "wikipedia", title: "SenseTalk", href: "https://en.wikipedia.org/wiki/SenseTalk" }],
      images: [
        {
          kind: "screenshot",
          url: "https://upload.wikimedia.org/wikipedia/en/thumb/9/9c/ST-HelloWorld2.png/250px-ST-HelloWorld2.png",
        },
      ],
      releases: [{ name: "SenseTalk", version: "2.15", date: "2024-01-01", kind: "stable" }],
      extensions: [".script", ".st"],
    })
    .addInfluences(["pl+hypertalk", "pl+xtalk"])
    .addLicenses(["lic+proprietary"])
    .addParadigms(["para+people", "para+multi", "para+objects"])
    .addTypeSystems(["tsys+duck"]);

  /**/
}
