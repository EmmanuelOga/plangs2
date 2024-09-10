import type { PlangsGraph } from "@plangs/plangs";

export function define(g: PlangsGraph) {
  g.nodes.pl
    .set("pl+boomerang", {
      name: "Boomerang",
      description:
        "Boomerang is a programming language for writing lenses—well-behaved bidirectional transformations —that operate on ad-hoc, textual data formats.",
      firstAppeared: "2008-01-01",
      websites: [
        { href: "http://www.seas.upenn.edu/~harmony/", title: "www.seas.upenn.edu/~harmony/", kind: "other" },
        { href: "https://en.wikipedia.org/wiki/Boomerang_(programming_language)", title: "Boomerang", kind: "wikipedia" },
      ],
      releases: [{ version: "0.2", date: "2009-01-01" }],
    })
    .addInfluencedBy(["pl+ocaml"])
    .addPlatforms(["plat+linux"]);
}
