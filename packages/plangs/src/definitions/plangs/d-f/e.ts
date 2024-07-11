import type { PlangsGraph } from "../../../schema/graph";

export function define(g: PlangsGraph) {
  g.buildPlang("pl+e")
    .merge({
      name: "E",
      websites: [{ kind: "wikipedia", title: "E", href: "https://en.wikipedia.org/wiki/E_(programming_language)" }],
    })
    .addInfluences(["pl+joule", "pl+java"])
    .addPerson("person+mark-s-miller", { role: "designer" })
    .addLicenses(["lic+free"])
    .addParadigms(["para+multi", "para+objects", "para+message"])
    .addPlatforms(["platf+cross-platform"])
    .addTypeSystems(["tsys+strong", "tsys+dynamic"]);

  /**/
}
