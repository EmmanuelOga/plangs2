import type { PlangsGraph } from "../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.plangBuilder;

  lb.define(
    "pl+c-sharp",
    "C#",
    {
      name: "C#",
      websites: [
        { kind: "wikipedia", title: "C#", href: "https://en.wikipedia.org/wiki/C_Sharp_(programming_language)" },
      ],
    },
    {
      dialects: ["pl+nemerle"],
      influenced: [
        "pl+arkts",
        "pl+ballerina",
        "pl+boo",
        "pl+c",
        "pl+c-plus-plus",
        "pl+chapel",
        "pl+clojure",
        "pl+cobra",
        "pl+crystal",
        "pl+d",
        "pl+dart",
        "pl+eiffel",
        "pl+fantom",
        "pl+gosu",
        "pl+hack",
        "pl+haxe",
        "pl+java",
        "pl+js-plus-plus",
        "pl+kotlin",
        "pl+modula-3",
        "pl+nemerle",
        "pl+object-pascal",
        "pl+oxygene",
        "pl+pascal",
        "pl+ring",
        "pl+rust",
        "pl+scala",
        "pl+typescript",
        "pl+vala",
        "pl+windows-powershell",
      ],
    },
  );

  /**/
}
