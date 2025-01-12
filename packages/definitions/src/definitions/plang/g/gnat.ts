import type { PlangsGraph } from "@plangs/plangs/graph";

export function define(g: PlangsGraph) {
  g.plang
    .set("pl+gnat", {
      name: "GNAT",
      description:
        "Free-software compiler for the Ada programming language that forms part of the GNU Compiler Collection (GCC). It supports all versions of Ada. Originally named as an acronym for GNU NYU Ada Translator, GNAT is developed by NYU, AdaCore, and the GNU Project. It includes a rich set of tools and libraries to support evolving project needs.",
      shortDesc:
        "Free Ada compiler in the GCC suite, supporting all Ada versions.",
      created: "1995",
      extensions: [".adb", ".ads"],
      extHomeURL: "http://www.getadanow.com/",
      extWikipediaPath: "GNAT",
      isTranspiler: false,
      keywords: ["ada", "compiler", "gcc", "gnat"],
      releases: [
        { version: "14.1", name: "FSF GNAT 14.1", date: "2024-05-07" },
        { version: "GNAT Pro 24", name: "GNAT Pro 24", date: "2024" },
      ],
    })
    .relImplements.add("pl+ada")
    .relLicenses.add("lic+gnu-gpl")
    .relParadigms.add(
      "para+compiled",
      "para+concurrent",
      "para+general-purpose",
      "para+procedural",
      "para+structured",
    )
    .relPlatforms.add("plat+bsd", "plat+cross", "plat+linux", "plat+windows")
    .relTags.add("tag+compiler", "tag+framework", "tag+interpreters")
    .relTypeSystems.add("tsys+nominal", "tsys+static", "tsys+strong");
}
