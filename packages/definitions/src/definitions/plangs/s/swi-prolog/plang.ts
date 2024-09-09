import type { PlangsGraph } from "@plangs/plangs";

export function define(g: PlangsGraph) {
  g.n_plang
    .set("pl+swi-prolog", {
      name: "SWI-Prolog",
      description:
        "SWI-Prolog is a free implementation of the programming language Prolog, commonly used for teaching and semantic web applications. It has a rich set of features, libraries for constraint logic programming, multithreading, unit testing, GUI, interfacing to Java, ODBC and others, literate programming, a web server, SGML, RDF, RDFS, developer tools (including an IDE with a GUI debugger and GUI profiler), and extensive documentation.",
      websites: [
        { href: "http://swi-prolog.org/", title: "swi-prolog.org", kind: "homepage" },
        { href: "https://en.wikipedia.org/wiki/SWI-Prolog", title: "SWI-Prolog", kind: "wikipedia" },
      ],
      releases: [
        { version: "9.2.2", date: "2024-01-01" },
        { version: "9.3.2", date: "2024-01-01" },
      ],
    })
    .addImplements(["pl+prolog"])
    .addLicenses(["lic+bsd", "lic+lgpl"])
    .addPlatforms(["platf+cross"])
    .addWrittenIn(["pl+c", "pl+prolog"]);
}
