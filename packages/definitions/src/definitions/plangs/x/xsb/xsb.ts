import type { PlangsGraph } from "@plangs/plangs";

export function define(g: PlangsGraph) {
  g.nodes.pl
    .set("pl+xsb", {
      name: "XSB",
      description:
        "XSB is the name of a dialect of the Prolog programming language and its implementation developed at Stony Brook University in collaboration with the Katholieke Universiteit Leuven, the New University of Lisbon, Uppsala University and software vendor XSB, Inc. It is renowned for featuring tabling, which ensures the termination of recursive queries and can significantly improve the performance of many knowledge base applications.",
      keywords: ["xsb"],
      websites: [
        { title: "XSB", href: "https://xsb.sourceforge.net/", kind: "homepage" },
        { title: "XSB", href: "https://en.wikipedia.org/wiki/XSB", kind: "wikipedia" },
      ],
      extensions: [".P"],
      firstAppeared: "1993-01-01",
      isTranspiler: false,
      isMainstream: false,
      releases: [{ version: "5.0", name: "XSB 5.0", date: "2022-01-01" }],
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
}
