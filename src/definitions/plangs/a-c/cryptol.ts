import type { PlangsGraph } from "../../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.plangBuilder;

  lb.define("pl+cryptol", "Cryptol", {
    name: "Cryptol",
    websites: [
      { kind: "wikipedia", title: "Cryptol", href: "https://en.wikipedia.org/wiki/Cryptol" },
      {
        kind: "repository",
        title: "galoisinc.github.io/cryptol/master/RefMan.html",
        href: "https://galoisinc.github.io/cryptol/master/RefMan.html",
      },
    ],
  });

  /**/
}
