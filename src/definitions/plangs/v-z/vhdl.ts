import type { PlangsGraph } from "../../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.plangBuilder;

  lb.define(
    "pl+vhdl",
    "VHDL",
    {
      name: "VHDL",
      websites: [
        { kind: "wikipedia", title: "VHDL", href: "https://en.wikipedia.org/wiki/VHDL" },
        { kind: "homepage", title: "IEEE VASG", href: "https://opensource.ieee.org/vasg" },
      ],
      releases: [
        { version: "unknown", date: "1980-01-01", kind: "first" },
        { version: "unknown", date: "2019-12-23", kind: "stable" },
      ],
      extensions: [".vhd"],
      references: {
        influenced_by: [{ href: "https://books.google.com/books?id=IxZqlbYMJCIC&q=Ada", title: "The VHDL Handbook" }],
      },
    },
    {
      dialects: ["pl+vhdl-ams"],
      influences: ["pl+ada", "pl+pascal"],
      paradigms: ["para+concurrent", "para+dataflow", "para+reactive"],
      typeSystems: ["tsys+strong"],
    },
  );

  /**/
}
