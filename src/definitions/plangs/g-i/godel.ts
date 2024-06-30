import type { PlangsGraph } from "../../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.plangBuilder;

  lb.define(
    "pl+godel",
    {
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
    },
    { paradigms: ["para+dec", "para+logic"], platforms: ["platf+unix"], typeSystems: ["tsys+strong"] },
  );
}
