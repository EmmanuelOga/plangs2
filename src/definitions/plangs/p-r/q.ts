import type { PlangsGraph } from "../../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.plangBuilder;

  lb.define(
    "pl+q",
    {
      name: "q",
      websites: [
        {
          kind: "wikipedia",
          title: "Q",
          href: "https://en.wikipedia.org/wiki/Q_(programming_language_from_Kx_Systems)",
        },
      ],
      releases: [{ version: "4.0", date: "2020-01-01", kind: "stable" }],
    },
    {
      influences: ["pl+ap", "pl+apl", "pl+k", "pl+scheme"],
      people: ["person+arthur-whitney"],
      paradigms: ["para+array", "para+functional"],
      typeSystems: ["tsys+dynamic", "tsys+strong"],
    },
  );
}
