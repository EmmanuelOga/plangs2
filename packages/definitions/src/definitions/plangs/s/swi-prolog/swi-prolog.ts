import type { PlangsGraph } from "@plangs/plangs";

export function define(g: PlangsGraph) {
  g.nodes.pl
    .set("pl+swi-prolog", {
      name: "SWI-Prolog",
      description:
        "SWI-Prolog is a versatile and open-source implementation of the Prolog programming language, designed with a rich set of libraries and features for teaching, semantic web applications, and more. It supports constraint logic programming, multithreading, unit testing, and has various interfaces for Java, ODBC, GUI development, web services, and more. It includes tools like an IDE with a GUI debugger and profiler.",
      keywords: ["constraint logic programming", "logic programming", "prolog", "semantic web", "swi-prolog"],
      websites: [
        { title: "SWI-Prolog", href: "http://swi-prolog.org/", kind: "homepage" },
        { title: "SWI-Prolog - Wikipedia", href: "https://en.wikipedia.org/wiki/SWI-Prolog", kind: "wikipedia" },
      ],
      extensions: [".pl", ".pro"],
      year: 1987,
      releases: [
        { version: "9.2.2", name: "SWI-Prolog 9.2.2", date: "2024-02-29" },
        { version: "9.3.2", name: "SWI-Prolog 9.3.2", date: "2024-02-29" },
      ],
    })
    .addImplements(["pl+prolog"])
    .addInfluencedBy(["pl+prolog"])
    .addLicenses(["license+bsd", "license+lgpl"])
    .addParadigms(["paradigm+concurrent", "paradigm+constraint", "paradigm+declarative", "paradigm+logic"])
    .addPlatforms(["plat+apple", "plat+bsd", "plat+cross", "plat+linux", "plat+windows"])
    .addTags(["tag+app", "tag+dbms", "tag+editor", "tag+framework", "tag+industrial", "tag+interpreter", "tag+testing", "tag+ui", "tag+viz"])
    .addTypeSystems(["tsys+untyped"])
    .addWrittenIn(["pl+c"]);

  // TOOLS

  // TOOL BUNDLES

  // LIBRARIES

  // APPS
}
