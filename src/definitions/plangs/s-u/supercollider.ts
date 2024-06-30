import type { PlangsGraph } from "../../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  g.buildPlang("pl+supercollider")
    .merge({
      name: "SuperCollider",
      websites: [{ kind: "wikipedia", title: "SuperCollider", href: "https://en.wikipedia.org/wiki/SuperCollider" }],
    })
    .addInfluence("pl+j", {
      refs: [
        {
          href: "http://doc.sccode.org/Reference/Adverbs.html",
          title: "SuperCollider documentation, Adverbs for Binary Operators",
        },
      ],
    });

  /**/
}
