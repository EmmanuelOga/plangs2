import type { PlangsGraph } from "@plangs/plangs";

export function define(g: PlangsGraph) {
  g.nodes.learning
    .set("learning+threejs-journey", {
      name: "ThreeJS Journey",
      description: "Everything you need in one place: 93 hours of video to go from absolute beginner to advanced Three.js developer.",
      extHomeURL: "https://threejs-journey.com/",
      kinds: ["course"],
    })
    .addPlangs(["pl+javascript"])
    .addTags(["tag+games", "tag+3dg", "tag+webdev"])
    .addCommunities(["community+threejsjourney"]);

  g.nodes.learning
    .set("learning+nand-to-tetris", {
      name: "From Nand to Tetris",
      description:
        "Nand to Tetris courses, with the book The Elements of Computing Systems, By Noam Nisan and Shimon Schocken (MIT Press). This website contains all the lectures, project materials and tools necessary for building a general-purpose computer system and a modern software hierarchy from the ground up.",
      kinds: ["book", "course"],
      extHomeURL: "https://www.nand2tetris.org/",
    })
    .addTags(["tag+embedded", "tag+languages"]);

  g.nodes.learning
    .set("learning+nystrom-interpreters", {
      name: "Crafting Interpreters",
      description: "Ever wanted to make your own programming language or wondered how they are designed and built?  If so, this book is for you.",
      extHomeURL: "https://craftinginterpreters.com/",
      kinds: ["book"],
    })
    .addPlangs(["pl+java", "pl+c"])
    .addTags(["tag+languages", "tag+interpreters"]);
}
