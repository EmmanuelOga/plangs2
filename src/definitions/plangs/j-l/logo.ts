import type { PlangsGraph } from "../../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.plangBuilder;

  lb.define(
    "pl+logo",
    "Logo",
    {
      name: "Logo",
      websites: [
        { kind: "wikipedia", title: "Logo", href: "https://en.wikipedia.org/wiki/Logo_(programming_language)" },
      ],
    },
    {
      influenced: [
        "pl+agentcubes",
        "pl+agentsheets",
        "pl+etoys",
        "pl+ezhil",
        "pl+kojo",
        "pl+ms-small-basic",
        "pl+netlogo",
        "pl+rebol",
        "pl+scratch",
        "pl+smalltalk",
        "pl+snap-",
        "pl+squeak",
        "pl+starlogo",
        "pl+turtlestitch",
        "pl+visualworks",
      ],
      influences: ["pl+lisp"],
    },
  );

  /**/
}
