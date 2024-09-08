import type { PlangsGraph } from "@plangs/plangs";

export function define(g: PlangsGraph) {
  g.n_plang
    .set("pl+boomerang", {
      images: [],
      name: "Boomerang",
      description:
        "Boomerang is a programming language for writing lenses—well-behaved bidirectional transformations —that operate on ad-hoc, textual data formats.",
      websites: [
        { href: "http://www.seas.upenn.edu/~harmony/", title: "www.seas.upenn.edu/~harmony/", kind: "other" },
        { href: "https://en.wikipedia.org/wiki/Boomerang_(programming_language)", title: "Boomerang", kind: "wikipedia" },
      ],
      extensions: [],
      releases: [{ version: "0.2", date: "2009-01-01" }],
    })
    .addInfluencedBy(["pl+ocaml"])
    .addPlatforms(["platf+linux"]);
}
