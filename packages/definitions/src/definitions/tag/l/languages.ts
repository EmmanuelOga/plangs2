import type { PlangsGraph } from "@plangs/plangs/graph";

export function define(g: PlangsGraph) {
  g.tag.set("tag+languages", {
    name: "Language Engineering",
    description:
      "Tools and techniques for designing, implementing, and analyzing programming languages.",
    extHomeURL: "https://en.wikipedia.org/wiki/Programming_language",
    keywords: [
      "compilers",
      "interpreters",
      "lexers",
      "parsers",
      "programming languages",
      "semantics",
      "static analysis",
      "syntax",
    ],
  });
}
