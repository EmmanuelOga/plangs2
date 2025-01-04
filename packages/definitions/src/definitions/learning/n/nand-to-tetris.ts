import type { PlangsGraph } from "@plangs/plangs/graph";

export function define(g: PlangsGraph) {
  g.learning
    .set("learn+nand-to-tetris", {
      name: "From Nand to Tetris",
      description:
        "Nand to Tetris courses, with the book The Elements of Computing Systems, By Noam Nisan and Shimon Schocken (MIT Press). This website contains all the lectures, project materials and tools necessary for building a general-purpose computer system and a modern software hierarchy from the ground up.",
      shortDesc:
        "The Elements of Computing Systems (a.k.a. Nand to Tetris) teaches students to build a modern computer system from the ground up.",
      extHomeURL: "https://www.nand2tetris.org/",
      kinds: ["book", "course"],
    })
    .relTags.add("tag+embedded", "tag+languages");
}
