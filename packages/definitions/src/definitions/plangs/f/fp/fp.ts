import type { PlangsGraph } from "@plangs/plangs";

export function define(g: PlangsGraph) {
  g.nodes.pl
    .set("pl+fp", {
      name: "FP",
      description:
        'FP (short for functional programming) is a programming language created by John Backus to support the function-level programming paradigm. It allows building programs from a set of generally useful primitives and avoiding named variables (a style also called tacit programming or "point free"). It was heavily influenced by APL developed by Kenneth E. Iverson in the early 1960s.',
      keywords: ["fp", "functional programming", "john backus", "tacit programming", "point-free"],
      websites: [{ title: "FP", href: "https://en.wikipedia.org/wiki/FP_(programming_language)", kind: "wikipedia" }],
      year: 1977,
      isTranspiler: false,
      isMainstream: false,
    })
    .addInfluencedBy(["pl+apl"])
    .addParadigms(["paradigm+functional", "paradigm+point-free"])
    .addTags(["tag+interpreter"]);

  // TOOLS

  // TOOL BUNDLES

  // LIBRARIES

  // APPS
}
