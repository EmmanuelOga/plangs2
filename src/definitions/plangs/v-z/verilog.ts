import type { PlangsGraph } from "../../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.plangBuilder;

  lb.define(
    "pl+verilog",
    {
      name: "SystemVerilog",
      websites: [
        { kind: "wikipedia", title: "Verilog", href: "https://en.wikipedia.org/wiki/Verilog" },
        { kind: "wikipedia", title: "SystemVerilog", href: "https://en.wikipedia.org/wiki/SystemVerilog" },
        {
          kind: "homepage",
          title: "https://ieeexplore.ieee.org/document/10458102",
          href: "https://ieeexplore.ieee.org/document/10458102",
        },
        { kind: "wikipedia", title: "Verilog-AMS", href: "https://en.wikipedia.org/wiki/Verilog-AMS" },
      ],
      releases: [{ version: "unknown", date: "1800-01-01", kind: "stable" }],
    },
    {
      dialects: ["pl+verilog"],
      influences: [
        "pl+ada",
        "pl+c",
        "pl+cpp",
        "pl+fortran",
        "pl+java",
        "pl+openvera",
        "pl+pascal",
        "pl+verilog",
        "pl+vhdl",
      ],
      people: ["person+phil-moorby", "person+prabhu-goel"],
      paradigms: ["para+objects", "para+structured"],
      typeSystems: ["tsys+static", "tsys+weak"],
    },
  );
}
