import type { PlangsGraph } from "../../../schemas/plangs_graph";

export function define(g: PlangsGraph) {
  g.buildPlang("pl+f-star")
    .merge({
      name: "F*",
      websites: [{ kind: "wikipedia", title: "F*", href: "https://en.wikipedia.org/wiki/F*_(programming_language)" }],
      images: [
        {
          kind: "logo",
          url: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Fstar-official-logo-2015.png/128px-Fstar-official-logo-2015.png",
        },
      ],
      releases: [{ name: "F*", version: "2023.09.03", date: "2023-09-03", kind: "stable" }],
    })
    .addInfluences(["pl+f-sharp", "pl+coq", "pl+dafny", "pl+lean", "pl+ocaml", "pl+sml", "pl+ml", "pl+poly-slashml"])
    .addLicenses(["lic+apache"])
    .addParadigms(["para+multi", "para+functional", "para+imperative"])
    .addPlatforms(["platf+cross-platform", "platf+linux", "platf+mac", "platf+win"])
    .addTypeSystems(["tsys+dependent", "tsys+inferred", "tsys+static", "tsys+strong"]);

  /**/
}
