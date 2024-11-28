import type { PlangsGraph } from "@plangs/plangs/graph";

export function define(g: PlangsGraph) {
  g.learning
    .set("learn+nand-to-tetris", {
      name: "From Nand to Tetris",
      description:
        "Nand to Tetris courses, with the book The Elements of Computing Systems, By Noam Nisan and Shimon Schocken (MIT Press). This website contains all the lectures, project materials and tools necessary for building a general-purpose computer system and a modern software hierarchy from the ground up.",
      kinds: ["book", "course"],
      extHomeURL: "https://www.nand2tetris.org/",
    })
    .relTag.add(["tag+embedded", "tag+languages"]);

  g.learning
    .set("learn+nystrom-interpreters", {
      name: "Crafting Interpreters",
      description: "Ever wanted to make your own programming language or wondered how they are designed and built?  If so, this book is for you.",
      extHomeURL: "https://craftinginterpreters.com/",
      kinds: ["book"],
    })
    .relPlang.add(["pl+c", "pl+java"])
    .relTag.add(["tag+interpreters", "tag+languages"]);

  g.learning
    .set("learn+threejs-journey", {
      name: "ThreeJS Journey",
      description: "Everything you need in one place: 93 hours of video to go from absolute beginner to advanced Three.js developer.",
      extHomeURL: "https://threejs-journey.com/",
      kinds: ["course"],
    })
    .relCommunity.add(["comm+threejs-journey"])
    .relPlang.add(["pl+javascript"])
    .relTag.add(["tag+3dg", "tag+games", "tag+webdev"]);
}
