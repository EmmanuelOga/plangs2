import type { PlangsGraph } from "@plangs/plangs/graph";

export function define(g: PlangsGraph) {
  g.plang
    .set("pl+tsx", {
      name: "TSX",
      description:
        "A syntax extension of TypeScript that allows embedding of XML-like code directly in TypeScript files, typically used with React. It combines the static typing of TypeScript with the expressive syntax of JSX.",
      shortDesc: "A TypeScript extension that integrates JSX with TypeScript.",
      extensions: [".tsx"],
      extHomeURL: "https://www.typescriptlang.org/docs/handbook/jsx.html",
      isTranspiler: true,
    })
    .relTags.add("tag+webdev");
}
