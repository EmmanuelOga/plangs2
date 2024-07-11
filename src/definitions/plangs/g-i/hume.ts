import type { PlangsGraph } from "../../../schema/graph";

export function define(g: PlangsGraph) {
  g.buildPlang("pl+hume")
    .merge({
      name: "Hume",
      websites: [
        { kind: "wikipedia", title: "Hume", href: "https://en.wikipedia.org/wiki/Hume_(programming_language)" },
      ],
      releases: [{ name: "Hume", version: "0.8", date: "2008-01-01", kind: "stable" }],
    })
    .addInfluences(["pl+haskell"])
    .addParadigms(["para+functional"])
    .addPlatforms(["platf+ia-32", "platf+mac", "platf+red-hat", "platf+linux"])
    .addTypeSystems(["tsys+inferred", "tsys+static", "tsys+strong"]);

  /**/
}
