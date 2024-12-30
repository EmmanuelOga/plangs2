import type { PlangsGraph } from "@plangs/plangs/graph";

export function define(g: PlangsGraph) {
  g.plang
    .set("pl+swi-prolog", {
      name: "SWI-Prolog",
      description:
        "A versatile implementation of the Prolog programming language, designed with a rich set of libraries and features for teaching, semantic web applications, and more. It supports constraint logic programming, multithreading, unit testing, and has various interfaces for Java, ODBC, GUI development, web services, and more. It includes tools like an IDE with a GUI debugger and profiler.",
      shortDesc: "Implementation of Prolog focused on versatility and rich libraries.",
      created: "1987",
      extensions: [".pl", ".pro"],
      extGithubPath: "SWI-Prolog/swipl-devel",
      extHomeURL: "https://swi-prolog.org/",
      extWikipediaPath: "SWI-Prolog",
      githubStars: 991,
      isTranspiler: false,
      keywords: ["constraint logic programming", "logic programming", "prolog", "semantic web", "swi-prolog"],
      releases: [
        { version: "9.2.2", name: "SWI-Prolog 9.2.2", date: "2024-02-29" },
        { version: "9.3.2", name: "SWI-Prolog 9.3.2", date: "2024-02-29" },
      ],
    })
    .relImplements.add("pl+prolog")
    .relInfluencedBy.add("pl+prolog")
    .relLicenses.add("lic+bsd", "lic+lgpl")
    .relParadigms.add("para+concurrent", "para+constraint", "para+declarative", "para+logic")
    .relPlatforms.add("plat+apple", "plat+bsd", "plat+cross", "plat+linux", "plat+windows")
    .relTags.add("tag+app", "tag+dbms", "tag+editor", "tag+framework", "tag+gui", "tag+industrial", "tag+interpreters", "tag+testing", "tag+viz")
    .relTypeSystems.add("tsys+untyped")
    .relWrittenWith.add("pl+c");
}
