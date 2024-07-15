import type { PlangsGraph } from "../../../schema/graph";

export function define(g: PlangsGraph) {
  g.buildPlang("pl+verilog")
    .merge({
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
      releases: [{ name: "SystemVerilog", version: "unknown", date: "1800-01-01", kind: "stable" }],
    })
    .addDialects(["pl+verilog"])
    .addInfluences(["pl+verilog", "pl+vhdl", "pl+cpp", "pl+openvera", "pl+java", "pl+pascal", "pl+ada", "pl+fortran"])
    .addInfluence("pl+c", {
      refs: [
        {
          href: "https://web.archive.org/web/20131106064022/http://cs.anu.edu.au/courses/ENGN3213/lectures/lecture6_VERILOG_2010.pdf",
          title: "Verilog HDL (and C)",
        },
      ],
    })
    .addPerson("person+prabhu-goel", { role: "designer" })
    .addPerson("person+phil-moorby", { role: "designer" })
    .addParadigms(["para+structured", "para+objects"])
    .addTypeSystems(["tsys+static", "tsys+weak"]);

  /**/
}
