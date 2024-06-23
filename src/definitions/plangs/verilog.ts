import type { PlangsGraph } from "../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.plangBuilder;

  lb.define(
    "pl+verilog",
    "Verilog",
    {
      name: "Verilog",
      websites: [
        { kind: "wikipedia", title: "Verilog", href: "https://en.wikipedia.org/wiki/Verilog" },
        {
          kind: "homepage",
          title: "https://ieeexplore.ieee.org/document/10458102",
          href: "https://ieeexplore.ieee.org/document/10458102",
        },
      ],
      releases: [
        { version: "unknown", date: "1984-01-01", kind: "first" },
        { version: "unknown", date: "2023-12-06", kind: "stable" },
      ],
      extensions: [".v"],
    },
    {
      influenced: ["pl+c", "pl+systemverilog"],
      influences: ["pl+ada", "pl+c", "pl+fortran", "pl+pascal", "pl+systemverilog"],
      paradigms: ["para+structured"],
      people: [
        ["person+phil-moorby", "designer"],
        ["person+prabhu-goel", "designer"],
      ],
      typeSystems: ["tsys+static", "tsys+weak"],
    },
  );

  /**/
}
