import type { PlangsGraph } from "../../../schema/graph";

export function define(g: PlangsGraph) {
  g.buildPlang("pl+coffeescript")
    .merge({
      name: "CoffeeScript",
      websites: [{ kind: "wikipedia", title: "CoffeeScript", href: "https://en.wikipedia.org/wiki/CoffeeScript" }],
      images: [{ kind: "logo", url: "https://upload.wikimedia.org/wikipedia/commons/d/d3/CoffeeScript-logo.svg" }],
      releases: [{ name: "CoffeeScript", version: "2.7.0", date: "2022-01-01", kind: "stable" }],
      extensions: [".coffee"],
    })
    .addInfluences(["pl+javascript", "pl+ruby"])
    .addInfluence("pl+python", {
      refs: [{ href: "https://web.archive.org/web/20200612100004/http://coffeescript.org/", title: "CoffeeScript" }],
    })
    .addPerson("person+jeremy-ashkenas", { role: "designer" })
    .addLicenses(["lic+mit"])
    .addParadigms(["para+multi", "para+prototypes", "para+functional", "para+imperative", "para+scripting"])
    .addPlatforms(["platf+cross-platform"])
    .addTypeSystems(["tsys+dynamic"]);

  /**/
}
