import type { PlangsGraph } from "../../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  g.buildPlang("pl+cuneiform")
    .merge({
      name: "Cuneiform",
      websites: [
        {
          kind: "wikipedia",
          title: "Cuneiform",
          href: "https://en.wikipedia.org/wiki/Cuneiform_(programming_language)",
        },
      ],
      images: [
        {
          kind: "screenshot",
          url: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/G18225.png/121px-G18225.png",
        },
      ],
      releases: [{ name: "Cuneiform", version: "3.0.4", date: "2018-01-01", kind: "stable" }],
    })
    .addImplementations(["pl+erlang"])
    .addInfluences(["pl+swift"])
    .addLicenses(["lic+apache"])
    .addParadigms(["para+functional", "para+scientific"])
    .addPlatforms(["platf+linux", "platf+mac"])
    .addTypeSystems(["tsys+static"]);

  /**/
}
