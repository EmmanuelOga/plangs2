import type { PlangsGraph } from "../../../schemas/plangs_graph";

export function define(g: PlangsGraph) {
  g.buildPlang("pl+vhdl")
    .merge({
      name: "VHDL",
      websites: [
        { kind: "wikipedia", title: "VHDL", href: "https://en.wikipedia.org/wiki/VHDL" },
        { kind: "homepage", title: "IEEE VASG", href: "https://opensource.ieee.org/vasg" },
      ],
      releases: [{ name: "VHDL", version: "unknown", date: "1076-01-01", kind: "stable" }],
    })
    .addDialects(["pl+vhdl-ams"])
    .addInfluences(["pl+pascal"])
    .addInfluence("pl+ada", {
      refs: [{ href: "https://books.google.com/books?id=IxZqlbYMJCIC&q=Ada", title: "The VHDL Handbook" }],
    })
    .addParadigms(["para+concurrent", "para+reactive", "para+dataflow"])
    .addTypeSystems(["tsys+strong"]);

  /**/

  g.buildPlang("pl+vhdl-ams").merge({
    name: "VHDL-AMS",
    websites: [{ kind: "wikipedia", title: "VHDL-AMS", href: "https://en.wikipedia.org/wiki/VHDL-AMS" }],
  });

  /**/
}
