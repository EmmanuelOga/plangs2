import type { PlangsGraph } from "../../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  g.buildPlang("pl+godel")
    .merge({
      name: "Gödel",
      websites: [
        { kind: "wikipedia", title: "Gödel", href: "https://en.wikipedia.org/wiki/G%C3%B6del_(programming_language)" },
        {
          kind: "homepage",
          title: "https://www.cs.unipr.it/~hill/GOEDEL/expgoedel.html",
          href: "https://www.cs.unipr.it/~hill/GOEDEL/expgoedel.html",
        },
      ],
      releases: [{ version: "1.5", date: "1995-01-01", kind: "stable" }],
    })
    .addParadigms(["para+dec", "para+logic"])
    .addPlatforms(["platf+unix"])
    .addTypeSystems(["tsys+strong"]);

  /**/
}
