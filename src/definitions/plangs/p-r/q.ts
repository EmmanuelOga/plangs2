import type { PlangsGraph } from "../../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.plangBuilder;

  lb.define(
    "pl+q",
    "q",
    {
      name: "q",
      websites: [
        {
          kind: "wikipedia",
          title: "Q",
          href: "https://en.wikipedia.org/wiki/Q_(programming_language_from_Kx_Systems)",
        },
        { kind: "homepage", title: "code.kx.com", href: "http://code.kx.com" },
      ],
      releases: [
        { version: "unknown", kind: "first" },
        { version: "unknown", date: "2003-01-01", kind: "first" },
        { version: "4.0", date: "2020-03-17", kind: "stable" },
      ],
    },
    {
      influences: ["pl+k", "pl+apl", "pl+ap", "pl+scheme"],
      paradigms: ["para+array", "para+functional"],
      people: ["person+arthur-whitney"],
      typeSystems: ["tsys+dynamic", "tsys+strong"],
    },
  );
}
