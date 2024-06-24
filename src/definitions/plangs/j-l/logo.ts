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
    { influences: ["pl+lisp"] },
  );

  /**/
}
