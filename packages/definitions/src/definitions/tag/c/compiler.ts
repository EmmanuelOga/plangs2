import type { PlangsGraph } from "@plangs/plangs/graph";

export function define(g: PlangsGraph) {
  g.tag.set("tag+compiler", {
    name: "Compiler",
    description:
      "Software that translates high-level programming languages into machine code or another form.",
    extHomeURL: "https://en.wikipedia.org/wiki/Compiler",
    keywords: ["code optimization", "compiler", "source code translator"],
  });
}
