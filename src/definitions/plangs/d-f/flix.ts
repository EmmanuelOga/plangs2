import type { PlangsGraph } from "../../../schema/graph";

export function define(g: PlangsGraph) {
  g.buildPlang("pl+flix")
    .merge({
      name: "Flix",
      websites: [
        { kind: "wikipedia", title: "Flix", href: "https://en.wikipedia.org/wiki/Flix_(programming_language)" },
      ],
      extensions: [".flix"],
    })
    .addInfluences(["pl+f-sharp", "pl+go", "pl+haskell", "pl+ocaml", "pl+scala"])
    .addLicense("lic+apache", {
      refs: [{ href: "https://github.com/flix/flix/blob/master/LICENSE.md", title: "Apache License 2.0" }],
    })
    .addParadigms(["para+multi", "para+functional", "para+imperative", "para+logic"])
    .addPlatforms(["platf+jvm"])
    .addTypeSystems(["tsys+inferred", "tsys+static", "tsys+strong", "tsys+structural"]);

  /**/
}
