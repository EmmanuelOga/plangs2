import type { PlangsGraph } from "@plangs/plangs/graph";

export function define(g: PlangsGraph) {
  g.tag.set("tag+asm", {
    name: "Assembler",
    description: "Software that translates assembly language code into machine code.",
    extHomeURL: "https://en.wikipedia.org/wiki/Assembly_language#Assembler",
    keywords: ["asm", "assembler", "assembly language", "low-level programming"],
  });
}
