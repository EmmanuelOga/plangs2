import type { PlangsGraph } from "@plangs/plangs/graph";

export function define(g: PlangsGraph) {
  g.plang
    .set("pl+xsb", {
      name: "XSB",
      description:
        "XSB is a Logic Programming and Deductive Database system developed at Stony Brook University and other institutions. It is an implementation of a Prolog dialect that features tabled resolution and HiLog, making it suitable for knowledge base applications and deductive database engines.",
      keywords: ["deductive database", "logic programming", "prolog", "xsb"],
      extensions: [".P"],
      releases: [{ version: "5.0", name: "", date: "2022-05-12" }],
      extWikipediaPath: "XSB",
      extHomeURL: "https://xsb.sourceforge.net/",
      created: "1993",
    })
    .relDialectOf.add(["pl+prolog"])
    .relImplements.add(["pl+prolog"])
    .relInfluencedBy.add(["pl+prolog"])
    .relLicense.add(["lic+lgpl"])
    .relParadigm.add(["para+declarative", "para+expert-system", "para+logic"])
    .relPlatform.add(["plat+cross", "plat+linux", "plat+windows"])
    .relTag.add(["tag+dbms", "tag+interpreters"])
    .relTypeSystem.add(["tsys+untyped"])
    .relWrittenInPlang.add(["pl+c"]);

  // TOOLS

  // TOOL BUNDLES

  // LIBRARIES

  // APPS
}
