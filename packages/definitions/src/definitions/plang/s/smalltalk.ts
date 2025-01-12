import type { PlangsGraph } from "@plangs/plangs/graph";

export function define(g: PlangsGraph) {
  g.plang
    .set("pl+smalltalk", {
      name: "Smalltalk",
      description:
        "A pioneering language in object-oriented programming and development environments, known for its simple syntax and powerful metaprogramming capabilities.",
      shortDesc:
        "A pioneering object-oriented language known for its simplicity and metaprogramming.",
      created: "1972",
      extensions: [".st"],
      extGithubPath: "",
      extHomeURL: "https://www.smalltalk.org/",
      extWikipediaPath: "Smalltalk",
      isTranspiler: false,
      keywords: ["metaprogramming", "object-oriented", "oop"],
      links: [
        {
          url: "https://en.wikipedia.org/wiki/Smalltalk",
          title: "Wikipedia - Smalltalk",
        },
      ],
    })
    .relParadigms.add(
      "para+agents",
      "para+data-hiding",
      "para+general-purpose",
      "para+interpreted",
      "para+message-passing",
      "para+oop",
      "para+reflective",
    )
    .relPlatforms.add("plat+cross")
    .relTags.add("tag+edu")
    .relTypeSystems.add("tsys+duck", "tsys+dynamic");
}
