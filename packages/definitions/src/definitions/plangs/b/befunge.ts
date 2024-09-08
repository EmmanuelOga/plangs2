import type { PlangsGraph } from "@plangs/plangs";

export function define(g: PlangsGraph) {
  g.n_plang
    .set("pl+befunge", {
      images: [],
      name: "Befunge",
      description:
        'Befunge is a two-dimensional stack-based, reflective, esoteric programming language. It differs from conventional languages in that programs are arranged on a two-dimensional grid. "Arrow" instructions direct the control flow to the left, right, up or down, and loops are constructed by sending the control flow in a cycle. It has been described as "a cross between Forth and Lemmings".',
      websites: [
        { href: "http://catseye.tc/node/Befunge-93.html", title: "catseye.tc/node/Befunge-93.html", kind: "other" },
        { href: "https://en.wikipedia.org/wiki/Befunge", title: "Befunge", kind: "wikipedia" },
      ],
      extensions: [],
      releases: [],
    })
    .addInfluencedBy(["pl+forth"]);
}
