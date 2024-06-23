import type { PlangsGraph } from "../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.plangBuilder;

  lb.define(
    "pl+fortran",
    "FORTRAN II",
    {
      name: "FORTRAN II",
      websites: [{ kind: "wikipedia", title: "Fortran", href: "https://en.wikipedia.org/wiki/Fortran" }],
    },
    {
      influenced: [
        "pl+algol-58",
        "pl+basic",
        "pl+c",
        "pl+chapel",
        "pl+cms-2",
        "pl+coral",
        "pl+dartmouth-basic",
        "pl+dibol",
        "pl+dope",
        "pl+fortress",
        "pl+matlab",
        "pl+pl-slash1",
        "pl+ratfiv",
        "pl+s",
        "pl+sisal",
        "pl+speedcoding",
        "pl+verilog",
        "pl+wolfram-language",
      ],
    },
  );

  /**/
}
