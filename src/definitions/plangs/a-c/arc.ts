import type { PlangsGraph } from "../../../schemas/plangs_graph";

export function define(g: PlangsGraph) {
  g.buildPlang("pl+arc")
    .merge({
      name: "Arc",
      websites: [{ kind: "wikipedia", title: "Arc", href: "https://en.wikipedia.org/wiki/Arc_(programming_language)" }],
      releases: [{ name: "Arc", version: "3.2", date: "2018-01-01", kind: "stable" }],
    })
    .addImplementations(["pl+racket"])
    .addInfluences(["pl+lisp", "pl+scheme"])
    .addPerson("person+paul-graham", { role: "designer" })
    .addLicenses(["lic+artistic"])
    .addParadigms(["para+multi", "para+functional", "para+meta", "para+imperative"])
    .addPlatforms(["platf+ia-32", "platf+x86-64", "platf+linux"])
    .addTypeSystems(["tsys+dynamic"]);

  /**/
}
