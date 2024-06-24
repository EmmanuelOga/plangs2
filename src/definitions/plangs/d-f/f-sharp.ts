import type { PlangsGraph } from "../../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.plangBuilder;

  lb.define(
    "pl+f-sharp",
    "F#",
    {
      name: "F#",
      websites: [
        { kind: "wikipedia", title: "F#", href: "https://en.wikipedia.org/wiki/F_Sharp_(programming_language)" },
      ],
    },
    {
      influenced: [
        "pl+arkts",
        "pl+cpp",
        "pl+elm",
        "pl+f-star",
        "pl+flix",
        "pl+idris",
        "pl+livescript",
        "pl+scala",
        "pl+typescript",
      ],
      influences: ["pl+erlang", "pl+ml", "pl+ocaml", "pl+python", "pl+scala", "pl+sml"],
    },
  );

  /**/
}
