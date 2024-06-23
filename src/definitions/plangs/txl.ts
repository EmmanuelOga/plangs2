import type { PlangsGraph } from "../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.plangBuilder;

  lb.define(
    "pl+txl",
    "TXL",
    {
      name: "TXL",
      websites: [
        { kind: "wikipedia", title: "TXL", href: "https://en.wikipedia.org/wiki/TXL_(programming_language)" },
        { kind: "homepage", title: "www.txl.ca", href: "https://www.txl.ca/" },
      ],
    },
    { paradigms: ["para+pattern", "para+term"], people: [["person+james-cordy", "designer"]] },
  );

  /**/
}
