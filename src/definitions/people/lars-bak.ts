import type { PlangsGraph } from "../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.personBuilder;

  lb.define("person+lars-bak", "Lars Bak", {
    websites: [
      { title: "Lars Bak", href: "https://en.wikipedia.org/wiki/Lars_Bak_(computer_programmer)", kind: "wikipedia" },
    ],
  });

  /**/
}
