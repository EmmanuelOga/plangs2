import type { PlangsGraph } from "@plangs/plangs";

export function define(g: PlangsGraph) {
  g.nodes.pl
    .set("pl+swi-prolog", {
      name: "SWI-Prolog",
      description:
        "SWI-Prolog is a versatile and open-source implementation of the Prolog programming language, designed with a rich set of libraries and features for teaching, semantic web applications, and more. It supports constraint logic programming, multithreading, unit testing, and has various interfaces for Java, ODBC, GUI development, web services, and more. It includes tools like an IDE with a GUI debugger and profiler.",
      keywords: ["constraint logic programming", "logic programming", "prolog", "semantic web", "swi-prolog"],
      extensions: [".pl", ".pro"],
      releases: [
        { version: "9.2.2", name: "SWI-Prolog 9.2.2", date: "2024-02-29" },
        { version: "9.3.2", name: "SWI-Prolog 9.3.2", date: "2024-02-29" },
      ],
      extWikipediaPath: "SWI-Prolog",
      extHomeURL: "http://swi-prolog.org/",
      created: "1987",
    })
    .relImplements.add(["pl+prolog"])
    .relInfluencedBy.add(["pl+prolog"])
    .relLicenses.add(["license+bsd", "license+lgpl"])
    .relParadigms.add(["paradigm+concurrent", "paradigm+constraint", "paradigm+declarative", "paradigm+logic"])
    .relPlatforms.add(["plat+apple", "plat+bsd", "plat+cross", "plat+linux", "plat+windows"])
    .relTags.add(["tag+app", "tag+dbms", "tag+editor", "tag+framework", "tag+industrial", "tag+interpreters", "tag+testing", "tag+ui", "tag+viz"])
    .relTsys.add(["tsys+untyped"])
    .relWrittenIn.add(["pl+c"]);

  // TOOLS

  // TOOL BUNDLES

  // LIBRARIES

  // APPS
}
