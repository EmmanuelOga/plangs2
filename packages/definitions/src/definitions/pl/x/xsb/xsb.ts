import type { PlangsGraph } from "@plangs/plangs";

export function define(g: PlangsGraph) {
  g.nodes.pl
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
    .relLicenses.add(["license+lgpl"])
    .relParadigms.add(["paradigm+declarative", "paradigm+expert-system", "paradigm+logic"])
    .relPlatforms.add(["plat+cross", "plat+linux", "plat+windows"])
    .relTags.add(["tag+dbms", "tag+interpreters"])
    .relTsys.add(["tsys+untyped"])
    .relWrittenIn.add(["pl+c"]);

  // TOOLS

  // TOOL BUNDLES

  // LIBRARIES

  // APPS
}
