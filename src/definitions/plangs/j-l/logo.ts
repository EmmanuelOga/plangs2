import type { PlangsGraph } from "../../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  g.buildPlang("pl+logo").merge({
    name: "Logo",
    websites: [{ kind: "wikipedia", title: "Logo", href: "https://en.wikipedia.org/wiki/Logo_(programming_language)" }],
    images: [
      {
        kind: "logo",
        url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/KochTurtleAnim.gif/300px-KochTurtleAnim.gif",
      },
    ],
  });
}
