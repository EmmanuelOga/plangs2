import type { PlangsGraph } from "@plangs/plangs/graph";

export function define(g: PlangsGraph) {
  g.plang
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
    .relImplement.add(["pl+prolog"])
    .relInfluence.add(["pl+prolog"])
    .relLicense.add(["lic+bsd", "lic+lgpl"])
    .relParadigm.add(["para+concurrent", "para+constraint", "para+declarative", "para+logic"])
    .relPlatform.add(["plat+apple", "plat+bsd", "plat+cross", "plat+linux", "plat+windows"])
    .relTag.add(["tag+app", "tag+dbms", "tag+editor", "tag+framework", "tag+industrial", "tag+interpreters", "tag+testing", "tag+ui", "tag+viz"])
    .relTypeSystem.add(["tsys+untyped"])
    .relWrittenInPlang.add(["pl+c"]);

  // TOOLS

  // TOOL BUNDLES

  // LIBRARIES

  // APPS
}
