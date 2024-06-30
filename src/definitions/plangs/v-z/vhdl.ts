import type { PlangsGraph } from "../../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.plangBuilder;

  lb.define(
    "pl+vhdl",
    {
      name: "VHDL",
      websites: [
        { kind: "wikipedia", title: "VHDL", href: "https://en.wikipedia.org/wiki/VHDL" },
        { kind: "homepage", title: "IEEE VASG", href: "https://opensource.ieee.org/vasg" },
      ],
      releases: [{ version: "unknown", date: "1076-01-01", kind: "stable" }],
    },
    {
      dialects: ["pl+vhdl-ams"],
      influences: ["pl+ada", "pl+pascal"],
      paradigms: ["para+concurrent", "para+dataflow", "para+reactive"],
      typeSystems: ["tsys+strong"],
    },
  );
}
