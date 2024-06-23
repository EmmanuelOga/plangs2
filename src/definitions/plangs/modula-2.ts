import type { PlangsGraph } from "../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.plangBuilder;

  lb.define(
    "pl+modula-2",
    "Modula-2",
    {
      name: "Modula-2",
      websites: [
        { kind: "wikipedia", title: "Modula-2", href: "https://en.wikipedia.org/wiki/Modula-2" },
        { kind: "homepage", title: "www.modula2.org", href: "http://www.modula2.org" },
      ],
      releases: [{ version: "unknown", date: "1978-01-01", kind: "first" }],
      extensions: [".mod", ".m2", ".def", ".MOD", ".DEF", ".mi", ".md"],
    },
    {
      influenced: [
        "pl+ada",
        "pl+algol-w",
        "pl+alma-0",
        "pl+c-plus-plus",
        "pl+go",
        "pl+lua",
        "pl+mesa",
        "pl+modula",
        "pl+modula-2-plus",
        "pl+modula-3",
        "pl+oberon",
        "pl+oberon-2",
        "pl+object-oberon",
        "pl+pascal",
        "pl+seed7",
      ],
      influences: [
        "pl+ada",
        "pl+algol-w",
        "pl+euclid",
        "pl+fortran-90",
        "pl+lua",
        "pl+mesa",
        "pl+modula",
        "pl+modula-2-plus",
        "pl+modula-3",
        "pl+oberon",
        "pl+pascal",
        "pl+seed7",
        "pl+zonnon",
      ],
      paradigms: ["para+concurrent", "para+imperative", "para+information", "para+modular", "para+structured"],
      people: [["person+niklaus-wirth", "designer"]],
      platforms: ["platf+amd", "platf+amd-am2900", "platf+cross-platform"],
      typeSystems: ["tsys+safe", "tsys+static", "tsys+strong"],
    },
  );

  /**/
}
