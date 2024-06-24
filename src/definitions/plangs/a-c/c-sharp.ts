import type { PlangsGraph } from "../../../entities/plangs_graph";

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
        "pl+chapel",
        "pl+clojure",
        "pl+cobra",
        "pl+crystal",
        "pl+d",
        "pl+dart",
        "pl+fantom",
        "pl+gosu",
        "pl+hack",
        "pl+haxe",
        "pl+java",
        "pl+jspp",
        "pl+kotlin",
        "pl+nemerle",
        "pl+oxygene",
        "pl+powershell",
        "pl+ring",
        "pl+rust",
        "pl+typescript",
        "pl+vala",
      ],
      influences: [
        "pl+c",
        "pl+cpp",
        "pl+d",
        "pl+eiffel",
        "pl+java",
        "pl+modula-3",
        "pl+object-pascal",
        "pl+pascal",
        "pl+scala",
      ],
    },
  );

  /**/
}
