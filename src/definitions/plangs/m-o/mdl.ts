import type { PlangsGraph } from "../../../schemas/plangs_graph";

export function define(g: PlangsGraph) {
  g.buildPlang("pl+mdl")
    .merge({
      name: "MDL",
      websites: [{ kind: "wikipedia", title: "MDL", href: "https://en.wikipedia.org/wiki/MDL_(programming_language)" }],
      scoping: ["lexical"],
    })
    .addInfluences(["pl+lisp"])
    .addPerson("person+gerald-sussman", { role: "designer" })
    .addPerson("person+carl-hewitt", { role: "designer" })
    .addPerson("person+bruce-daniels", { role: "designer" })
    .addLicenses(["lic+open-source"])
    .addParadigms(["para+multi", "para+functional", "para+imperative", "para+reflection", "para+meta"])
    .addPlatforms(["platf+bsd"])
    .addTypeSystems(["tsys+dynamic", "tsys+strong"]);

  /**/
}
