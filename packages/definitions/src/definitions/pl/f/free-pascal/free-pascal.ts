import type { PlangsGraph } from "@plangs/plangs/graph";

export function define(g: PlangsGraph) {
  g.plang.    .set("pl+free-pascal", {
      name: "Free Pascal",
      description:
        "Free Pascal Compiler (FPC) is a versatile, open source Pascal compiler for Pascal and Object Pascal. It adapts a 'write once, compile anywhere' approach, supporting numerous architectures and operating systems, with capabilities for inline assembly and multiple dialect compatibilities. Also known for its transpiler pas2js for converting Pascal to JavaScript.",
      keywords: ["compiler", "cross-platform", "freepascal", "objectpascal", "pascal"],
      extensions: [".p", ".pas", ".pp"],
      releases: [
        { version: "3.2.2", name: "Free Pascal 3.2.2", date: "2021-05-20" },
        { version: "3.3.1", name: "Free Pascal 3.3.1" },
      ],
      extWikipediaPath: "Free_Pascal",
      extHomeURL: "http://www.freepascal.org/",
      created: "1993",
    })
    .relImplements.add(["pl+pascal"])
    .relInfluencedBy.add(["pl+pascal"])
    .relLicense.add(["license+gnu-gpl"])
    .relParadigm.add(["para+compiled", "para+multi", "para+oop", "para+procedural", "para+structured"])
    .relPlatforms.add(["plat+android", "plat+apple", "plat+bsd", "plat+cross", "plat+dos", "plat+embedded", "plat+linux", "plat+windows"])
    .relTags.add(["tag+compiler", "tag+industrial", "tag+ui"])
    .relTsys.add(["tsys+object", "tsys+static", "tsys+strong"])
    .relWrittenIn.add(["pl+pascal"]);

  // TOOLS

  // TOOL BUNDLES

  // LIBRARIES

  // APPS
}
