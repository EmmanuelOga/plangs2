import type { PlangsGraph } from "@plangs/plangs";

export function define(g: PlangsGraph) {
  g.nodes.pl
    .set("pl+xsb", {
      name: "XSB",
      description:
        "XSB is a Logic Programming and Deductive Database system developed at Stony Brook University and other institutions. It is an implementation of a Prolog dialect that features tabled resolution and HiLog, making it suitable for knowledge base applications and deductive database engines.",
      keywords: ["deductive database", "logic programming", "prolog", "xsb"],
      extensions: [".P"],
      year: 1993,
      releases: [{ version: "5.0", name: "", date: "2022-05-12" }],
      extWikipediaPath: "XSB",
      extHomeURL: "https://xsb.sourceforge.net/",
    })
    .addDialectOf(["pl+prolog"])
    .addImplements(["pl+prolog"])
    .addInfluencedBy(["pl+prolog"])
    .addLicenses(["license+lgpl"])
    .addParadigms(["paradigm+declarative", "paradigm+expert-system", "paradigm+logic"])
    .addPlatforms(["plat+cross", "plat+linux", "plat+windows"])
    .addTags(["tag+dbms", "tag+interpreters"])
    .addTypeSystems(["tsys+untyped"])
    .addWrittenIn(["pl+c"]);

  // TOOLS

  // TOOL BUNDLES

  // LIBRARIES

  // APPS
}
