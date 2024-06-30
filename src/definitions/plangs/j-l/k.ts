import type { PlangsGraph } from "../../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.plangBuilder;

  lb.define(
    "pl+k",
    {
      name: "k",
      websites: [{ kind: "wikipedia", title: "K", href: "https://en.wikipedia.org/wiki/K_(programming_language)" }],
    },
    {
      influences: ["pl+ap", "pl+apl", "pl+scheme"],
      paradigms: ["para+array", "para+functional"],
      people: ["person+arthur-whitney"],
      typeSystems: ["tsys+dynamic", "tsys+strong"],
    },
  );
}
