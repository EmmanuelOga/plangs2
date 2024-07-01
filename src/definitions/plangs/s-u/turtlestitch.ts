import type { PlangsGraph } from "../../../schemas/graph";

export function define(g: PlangsGraph) {
  g.buildPlang("pl+turtlestitch")
    .merge({
      name: "TurtleStitch",
      websites: [{ kind: "wikipedia", title: "Turtlestitch", href: "https://en.wikipedia.org/wiki/Turtlestitch" }],
      images: [
        {
          kind: "logo",
          url: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Turtlestitch_Logo.png/121px-Turtlestitch_Logo.png",
        },
      ],
      releases: [{ name: "TurtleStitch", version: "2.7.7", date: "2022-01-01", kind: "stable" }],
    })
    .addImplementations(["pl+javascript"])
    .addInfluences(["pl+scratch", "pl+snap-", "pl+logo", "pl+maker-culture"])
    .addLicenses(["lic+affero-gpl"])
    .addParadigms(["para+objects", "para+educational", "para+event"])
    .addPlatforms(["platf+cross-platform"])
    .addTypeSystems(["tsys+dynamic"]);

  /**/
}
