import type { PlangsGraph } from "../../entities/plangs_graph";

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
      dialects: ["pl+ml"],
      influenced: [
        "pl+arkts",
        "pl+c-plus-plus",
        "pl+elm",
        "pl+erlang",
        "pl+f-star",
        "pl+flix",
        "pl+idris",
        "pl+livescript",
        "pl+ml",
        "pl+ocaml",
        "pl+python",
        "pl+scala",
        "pl+sml",
        "pl+typescript",
      ],
    },
  );

  /**/
}
