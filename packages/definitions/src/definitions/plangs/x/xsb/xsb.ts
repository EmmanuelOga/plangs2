import type { PlangsGraph } from "@plangs/plangs";

export function define(g: PlangsGraph) {
  g.nodes.pl
    .set("pl+xsb", {
      name: "XSB",
      description:
        "XSB is a Logic Programming and Deductive Database system developed at Stony Brook University and other institutions. It is an implementation of a Prolog dialect that features tabled resolution and HiLog, making it suitable for knowledge base applications and deductive database engines.",
      keywords: ["deductive database", "logic programming", "prolog", "xsb"],
      websites: [
        { title: "Welcome to the home of XSB!", href: "https://xsb.sourceforge.net/", kind: "homepage" },
        { title: "XSB - Wikipedia", href: "https://en.wikipedia.org/wiki/XSB", kind: "wikipedia" },
      ],
      extensions: [".P"],
      year: 1993,
      isMainstream: false,
      releases: [{ version: "5.0", name: "", date: "2022-05-12" }],
    })
    .addDialectOf(["pl+prolog"])
    .addImplements(["pl+prolog"])
    .addInfluencedBy(["pl+prolog"])
    .addLicenses(["license+lgpl"])
    .addParadigms(["paradigm+declarative", "paradigm+expert-system", "paradigm+logic"])
    .addPlatforms(["plat+cross", "plat+linux", "plat+windows"])
    .addTags(["tag+dbms", "tag+interpreter", "tag+query"])
    .addTypeSystems(["tsys+untyped"])
    .addWrittenIn(["pl+c"]);

  // TOOLS

  // TOOL BUNDLES

  // LIBRARIES

  // APPS
}
