import type { PlangsGraph } from "@plangs/plangs";

export function define(g: PlangsGraph) {
  g.nodes.pl
    .set("pl+fp", {
      name: "FP",
      description:
        'FP (short for functional programming) is a programming language created by John Backus to support the function-level programming paradigm. It allows building programs from a set of generally useful primitives and avoiding named variables (a style also called tacit programming or "point free"). It was heavily influenced by APL developed by Kenneth E. Iverson in the early 1960s.',
      firstAppeared: "1977-01-01",
      websites: [{ href: "https://en.wikipedia.org/wiki/FP_(programming_language)", title: "FP", kind: "wikipedia" }],
    })
    .addInfluencedBy(["pl+apl"]);
}
