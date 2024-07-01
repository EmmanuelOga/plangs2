import type { PlangsGraph } from "../../../schemas/graph";

export function define(g: PlangsGraph) {
  g.buildPlang("pl+livescript")
    .merge({
      name: "LiveScript",
      websites: [
        {
          kind: "wikipedia",
          title: "LiveScript",
          href: "https://en.wikipedia.org/wiki/LiveScript_(programming_language)",
        },
      ],
      releases: [{ name: "LiveScript", version: "1.6.1", date: "2020-01-01", kind: "stable" }],
      extensions: [".ls"],
    })
    .addInfluences(["pl+coffeescript", "pl+f-sharp", "pl+javascript", "pl+haskell"])
    .addLicenses(["lic+mit"])
    .addParadigms(["para+multi", "para+functional", "para+objects"])
    .addPlatforms(["platf+cross-platform"])
    .addTypeSystems(["tsys+dynamic", "tsys+weak"]);

  /**/
}
