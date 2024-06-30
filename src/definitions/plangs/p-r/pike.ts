import type { PlangsGraph } from "../../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  g.buildPlang("pl+pike")
    .merge({
      name: "Pike",
      websites: [
        { kind: "wikipedia", title: "Pike", href: "https://en.wikipedia.org/wiki/Pike_(programming_language)" },
      ],
      images: [
        { kind: "logo", url: "https://upload.wikimedia.org/wikipedia/commons/3/32/Pike_Programming_Language_Logo.svg" },
      ],
      releases: [{ name: "Pike", version: "8.0.1738", date: "1738-01-01", kind: "stable" }],
    })
    .addInfluences(["pl+c", "pl+lpc", "pl+cpp"])
    .addLicenses(["lic+gpl", "lic+lgpl", "lic+mozilla-public"])
    .addParadigms(["para+multi", "para+objects", "para+functional", "para+imperative"])
    .addPlatforms(["platf+unix", "platf+win"])
    .addTypeSystems(["tsys+static", "tsys+dynamic", "tsys+manifest"]);

  /**/
}
