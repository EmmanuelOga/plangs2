import type { PlangsGraph } from "../../../schemas/plangs_graph";

export function define(g: PlangsGraph) {
  g.buildPlang("pl+idl")
    .merge({
      name: "IDL",
      websites: [{ kind: "wikipedia", title: "IDL", href: "https://en.wikipedia.org/wiki/IDL_(programming_language)" }],
      releases: [{ name: "IDL (Interactive Data Language)", version: "9.0", date: "2023-01-01", kind: "stable" }],
    })
    .addImplementations(["pl+gnu-data"])
    .addInfluences(["pl+fortran"])
    .addParadigms(["para+array"])
    .addTypeSystems(["tsys+dynamic"]);

  /**/
}
