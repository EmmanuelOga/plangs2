import type { PlangsGraph } from "../../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.plangBuilder;

  lb.define(
    "pl+systemverilog",
    "SystemVerilog",
    {
      name: "SystemVerilog",
      websites: [{ kind: "wikipedia", title: "SystemVerilog", href: "https://en.wikipedia.org/wiki/SystemVerilog" }],
      releases: [
        { version: "unknown", date: "2002-01-01", kind: "first" },
        { version: "unknown", date: "2023-12-16", kind: "stable" },
      ],
      extensions: [".sv"],
    },
    {
      influences: ["pl+verilog", "pl+vhdl", "pl+cpp", "pl+openvera", "pl+java"],
      paradigms: ["para+structured", "para+objects"],
      typeSystems: ["tsys+static", "tsys+weak"],
    },
  );
}
