import type { PlangsGraph } from "@plangs/plangs/graph";

export function define(g: PlangsGraph) {
  g.plang
    .set("pl+mruby", {
      name: "mruby",
      description:
        "mruby is an interpreter for the Ruby programming language with the intention of being lightweight and easily embeddable. The project is headed by Yukihiro Matsumoto, with over 100 contributors currently working on the project.",
      keywords: ["mruby"],
      extensions: [".rb"],
      extWikipediaPath: "Mruby",
      extHomeURL: "https://mruby.org/",
      created: "2012",
    })
    .relImplement.add(["pl+ruby"])
    .relInfluence.add(["pl+ruby"])
    .relLicense.add(["lic+mit"])
    .relParadigm.add(["para+embedded", "para+oop", "para+scripting"])
    .relPlatform.add(["plat+cross", "plat+embedded"])
    .relTag.add(["tag+compiler", "tag+embedded", "tag+interpreters"])
    .relTypeSystem.add(["tsys+duck", "tsys+dynamic"])
    .relWrittenInPlang.add(["pl+c"]);

  // TOOLS

  // TOOL BUNDLES

  // LIBRARIES

  // APPS
}
