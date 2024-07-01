import type { PlangsGraph } from "../../../schemas/graph";

export function define(g: PlangsGraph) {
  g.buildPlang("pl+source")
    .merge({
      name: "Source",
      websites: [
        { kind: "wikipedia", title: "Source", href: "https://en.wikipedia.org/wiki/Source_(programming_language)" },
      ],
      releases: [{ name: "Source", version: "unknown", date: "2024-01-01", kind: "stable" }],
    })
    .addImplementations(["pl+safari"])
    .addImplementation("pl+tail-call", { refs: [{ href: "https://sourceacademy.org", title: "Source Academy" }] })
    .addInfluences(["pl+javascript", "pl+scheme"])
    .addLicenses(["lic+apache"])
    .addParadigms(["para+multi", "para+scripting", "para+imperative", "para+functional"])
    .addPlatforms(["platf+web"])
    .addTypeSystems(["tsys+dynamic", "tsys+duck"]);

  /**/
}
