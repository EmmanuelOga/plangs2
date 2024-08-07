import type { PlangsGraph } from "../../../schema/graph";

export function define(g: PlangsGraph) {
  g.buildPlang("pl+plexil")
    .merge({
      name: "PLEXIL",
      websites: [
        { kind: "wikipedia", title: "PLEXIL", href: "https://en.wikipedia.org/wiki/PLEXIL" },
        { kind: "homepage", title: "http://plexil.sourceforge.net/", href: "http://plexil.sourceforge.net/" },
      ],
    })
    .addImplementations(["pl+robotics"])
    .addParadigms(["para+multi"])
    .addPlatforms(["platf+linux", "platf+mac"])
    .addTypeSystems(["tsys+static", "tsys+safe", "tsys+nominative"]);

  /**/
}
