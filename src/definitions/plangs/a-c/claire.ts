import type { PlangsGraph } from "../../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  g.buildPlang("pl+claire")
    .merge({
      name: "Claire",
      websites: [
        { kind: "wikipedia", title: "Claire", href: "https://en.wikipedia.org/wiki/Claire_(programming_language)" },
      ],
      releases: [{ name: "Claire", version: "3.3.46", date: "2009-01-01", kind: "stable" }],
      extensions: [".cl"],
    })
    .addInfluences(["pl+smalltalk", "pl+setl", "pl+ops5", "pl+lisp", "pl+ml", "pl+c"])
    .addLicenses(["lic+permissive-free-licence"])
    .addParadigms(["para+multi", "para+functional", "para+objects", "para+class", "para+production", "para+reflection"])
    .addPlatforms(["platf+cross-platform"])
    .addTypeSystems(["tsys+strong", "tsys+static", "tsys+dynamic"]);

  /**/
}
