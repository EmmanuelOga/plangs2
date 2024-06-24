import type { PlangsGraph } from "../../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.plangBuilder;

  lb.define(
    "pl+k",
    "k",
    {
      name: "k",
      websites: [
        { kind: "wikipedia", title: "K", href: "https://en.wikipedia.org/wiki/K_(programming_language)" },
        { kind: "homepage", title: "kx.com", href: "http://kx.com" },
      ],
      releases: [{ version: "unknown", date: "1993-01-01", kind: "first" }],
    },
    {
      influenced: ["pl+ap", "pl+apl", "pl+q"],
      influences: ["pl+ap", "pl+apl", "pl+q", "pl+scheme"],
      paradigms: ["para+array", "para+functional"],
      people: [["person+arthur-whitney", "designer"]],
      typeSystems: ["tsys+dynamic", "tsys+strong"],
    },
  );

  /**/
}
