import type { PlangsGraph } from "../../../schemas/plangs_graph";

export function define(g: PlangsGraph) {
  g.buildPlang("pl+ibm-rpg")
    .merge({
      name: "RPGReport Program Generator",
      websites: [
        { kind: "wikipedia", title: "RPGReport Program Generator", href: "https://en.wikipedia.org/wiki/IBM_RPG" },
      ],
      images: [
        {
          kind: "logo",
          url: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/IBM_RPG_logo.png/121px-IBM_RPG_logo.png",
        },
      ],
      releases: [{ name: "RPGReport Program Generator", version: "unknown", date: "2020-01-01", kind: "stable" }],
    })
    .addDialects(["pl+rpg"])
    .addInfluences(["pl+ibm-709-slash90-9pac", "pl+fargo"])
    .addParadigms(["para+multi"])
    .addPlatforms(["platf+z-slashos", "platf+vse", "platf+openvms", "platf+dos", "platf+win"])
    .addTypeSystems(["tsys+strong", "tsys+static"]);

  /**/
}
