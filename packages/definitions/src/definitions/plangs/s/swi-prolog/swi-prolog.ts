import type { PlangsGraph } from "@plangs/plangs";

export function define(g: PlangsGraph) {
  g.nodes.pl
    .set("pl+swi-prolog", {
      name: "SWI-Prolog",
      description:
        "SWI-Prolog is a versatile and open-source implementation of the Prolog programming language, designed with a rich set of libraries and features for teaching, semantic web applications, and more. It supports constraint logic programming, multithreading, unit testing, and has various interfaces for Java, ODBC, GUI development, web services, and more. It includes tools like an IDE with a GUI debugger and profiler.",
      keywords: ["swi-prolog", "prolog", "semantic web", "logic programming", "constraint logic programming"],
      websites: [
        { title: "SWI-Prolog", href: "http://swi-prolog.org/", kind: "homepage" },
        { title: "SWI-Prolog", href: "https://en.wikipedia.org/wiki/SWI-Prolog", kind: "wikipedia" },
      ],
      extensions: [".pl", ".pro"],
      firstAppeared: "1987-01-01",
      isTranspiler: false,
      isMainstream: true,
      releases: [
        { version: "9.2.2", name: "SWI-Prolog 9.2.2", date: "2024-01-01" },
        { version: "9.3.2", name: "SWI-Prolog 9.3.2", date: "2024-01-01" },
      ],
    })
    .addImplements(["pl+prolog"])
    .addInfluencedBy(["pl+prolog"])
    .addLicenses(["license+bsd", "license+lgpl"])
    .addParadigms(["paradigm+concurrent", "paradigm+constraint", "paradigm+declarative", "paradigm+logic"])
    .addPlatforms(["plat+bsd", "plat+cross", "plat+linux", "plat+windows"])
    .addTags(["tag+app", "tag+dbms", "tag+editor", "tag+framework", "tag+industrial", "tag+interpreter", "tag+testing", "tag+ui", "tag+viz"])
    .addTypeSystems(["tsys+untyped"])
    .addWrittenIn(["pl+c"]);
}
