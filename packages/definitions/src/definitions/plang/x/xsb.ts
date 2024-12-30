import type { PlangsGraph } from "@plangs/plangs/graph";

export function define(g: PlangsGraph) {
  g.plang
    .set("pl+xsb", {
      name: "XSB",
      description:
        "Logic Programming and Deductive Database system developed at Stony Brook University and other institutions. It is an implementation of a Prolog dialect that features tabled resolution and HiLog, making it suitable for knowledge base applications and deductive database engines.",
      shortDesc: "Prolog dialect with tabled resolution for logic programming and deductive databases.",
      created: "1993",
      extensions: [".P"],
      extHomeURL: "https://xsb.sourceforge.net/",
      extWikipediaPath: "XSB",
      isTranspiler: false,
      keywords: ["deductive database", "logic programming", "prolog", "xsb"],
      releases: [{ version: "5.0", name: "", date: "2022-05-12" }],
    })
    .relDialectOf.add("pl+prolog")
    .relImplements.add("pl+prolog")
    .relInfluencedBy.add("pl+prolog")
    .relLicenses.add("lic+lgpl")
    .relParadigms.add("para+declarative", "para+expert-system", "para+logic")
    .relPlatforms.add("plat+cross", "plat+linux", "plat+windows")
    .relTags.add("tag+dbms", "tag+interpreters")
    .relTypeSystems.add("tsys+untyped")
    .relWrittenWith.add("pl+c");
}
