import type { PlangsGraph } from "../../../schemas/plangs_graph";

export function define(g: PlangsGraph) {
  g.buildPlang("pl+applescript")
    .merge({
      name: "AppleScript",
      websites: [{ kind: "wikipedia", title: "AppleScript", href: "https://en.wikipedia.org/wiki/AppleScript" }],
      releases: [{ name: "AppleScript", version: "2.8", date: "2014-01-01", kind: "stable" }],
    })
    .addInfluences(["pl+hypertalk", "pl+smalltalk", "pl+xtalk"])
    .addLicenses(["lic+proprietary", "lic+apple-public-source"])
    .addParadigms(["para+natural", "para+scripting"])
    .addPlatforms(["platf+mac"])
    .addTypeSystems(["tsys+weak", "tsys+dynamic"]);

  /**/
}
