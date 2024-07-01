import type { PlangsGraph } from "../../../schemas/plangs_graph";

export function define(g: PlangsGraph) {
  g.buildPlang("pl+mumps")
    .merge({
      name: "MUMPS",
      websites: [{ kind: "wikipedia", title: "MUMPS", href: "https://en.wikipedia.org/wiki/MUMPS" }],
      releases: [{ name: "MUMPS", version: "11.1", date: "1995-01-01", kind: "stable" }],
    })
    .addInfluences(["pl+fortran", "pl+joss", "pl+speedcoding", "pl+telcomp"])
    .addPerson("person+neil-pappalardo", { role: "designer" })
    .addPerson("person+robert-a-greenes", { role: "designer" })
    .addParadigms(["para+imperative"])
    .addPlatforms(["platf+cross-platform"]);

  /**/
}
