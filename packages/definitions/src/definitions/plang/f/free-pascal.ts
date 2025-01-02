import type { PlangsGraph } from "@plangs/plangs/graph";

export function define(g: PlangsGraph) {
  g.plang
    .set("pl+free-pascal", {
      name: "Free Pascal",
      description:
        'Pascal and Object Pascal compiler designed to support a wide range of processor architectures and operating systems with its feature-rich environment. It adheres to the "write once, compile anywhere" philosophy and includes functionality for inline assembly and compatibility with multiple Pascal dialects.',
      shortDesc: "Pascal compiler supporting multiple architectures and dialects.",
      created: "1993",
      extensions: [".p", ".pas", ".pp"],
      extHomeURL: "https://www.freepascal.org/",
      extWikipediaPath: "Free_Pascal",
      filenames: ["Makefile"],
      isTranspiler: false,
      keywords: ["cross-platform", "fpc", "freepascal", "object pascal", "pascal"],
      releases: [{ version: "3.2.2", date: "2021-05-20" }],
    })
    .relDialectOf.add("pl+pascal")
    .relImplements.add("pl+pascal")
    .relInfluencedBy.add("pl+pascal")
    .relLicenses.add("lic+gnu-gpl")
    .relParadigms.add("para+compiled", "para+multi", "para+oop", "para+procedural", "para+structured")
    .relPlatforms.add("plat+android", "plat+apple", "plat+bsd", "plat+cross", "plat+dos", "plat+embedded", "plat+linux", "plat+windows")
    .relTags.add("tag+better-c", "tag+compiler", "tag+gui", "tag+industrial")
    .relTypeSystems.add("tsys+object", "tsys+static", "tsys+strong")
    .relWrittenWith.add("pl+pascal");
}
