import type { PlangsGraph } from "@plangs/plangs";

export function define(g: PlangsGraph) {
  g.nodes.pl
    .set("pl+pascal", {
      name: "Pascal",
      description:
        "Pascal is an imperative and procedural programming language, designed by Niklaus Wirth as a small, efficient language intended to encourage good programming practices using structured programming and data structuring. It is named after French mathematician, philosopher and physicist Blaise Pascal.",
      keywords: ["pascal"],
      websites: [
        {
          title: "Pascal",
          href: "https://en.wikipedia.org/wiki/Pascal_(programming_language)#ISO/IEC_10206:1990_Extended_Pascal",
          kind: "wikipedia",
        },
        { title: "Pascal on Reddit", kind: "reddit", href: "https://reddit.com/r/pascal" },
        { title: "Pascal on Wikipedia", kind: "wikipedia", href: "https://en.wikipedia.org/wiki/Pascal_(programming_language)" },
      ],
      extensions: [".pas", ".pp", ".p"],
      year: 1970,
      isTranspiler: false,
      isMainstream: true,
      github: { name: "Pascal", langId: "281", color: "#E3F171", popular: false, type: "programming" },
      stackovTags: ["pascal"],
    })
    .addInfluencedBy(["pl+algol", "pl+simula"])
    .addParadigms(["paradigm+imperative", "paradigm+procedural", "paradigm+structured"])
    .addPlatforms(["plat+bsd", "plat+cross", "plat+dos", "plat+linux", "plat+windows"])
    .addTags(["tag+compiler", "tag+edu", "tag+framework", "tag+games", "tag+interpreter"])
    .addTypeSystems(["tsys+safe", "tsys+static", "tsys+strong"]);

  // TOOLS

  // TOOL BUNDLES

  // LIBRARIES

  // APPS
}
