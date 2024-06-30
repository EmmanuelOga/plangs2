import type { PlangsGraph } from "../../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  g.buildPlang("pl+ballerina").merge({
    name: "Ballerina",
    websites: [
      { kind: "wikipedia", title: "Ballerina", href: "https://en.wikipedia.org/wiki/Ballerina_(programming_language)" },
    ],
    images: [
      {
        kind: "logo",
        url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/Official_Ballerina_Programming_Language_Logo.png/200px-Official_Ballerina_Programming_Language_Logo.png",
      },
    ],
  });
}
