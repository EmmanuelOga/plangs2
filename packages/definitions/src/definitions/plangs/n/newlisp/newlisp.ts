import type { PlangsGraph } from "@plangs/plangs";

export function define(g: PlangsGraph) {
  g.nodes.pl
    .set("pl+newlisp", {
      name: "newLISP",
      description:
        "newLISP is a scripting language, a dialect of the Lisp family of programming languages. It was designed and developed by Lutz Mueller. Because of its small resource requirements, newLISP is excellent for embedded systems applications. Most of the functions you will ever need are already built in. This includes networking functions, support for distributed and multicore processing, and Bayesian statistics. newLISP is free and open-source software released under the GNU General Public License, version 3 or later.",
      keywords: ["newlisp"],
      websites: [
        { title: "www.newlisp.org", href: "http://www.newlisp.org/", kind: "homepage" },
        { title: "newLISP", href: "https://en.wikipedia.org/wiki/NewLISP", kind: "wikipedia" },
      ],
      extensions: [".lsp", ".nl"],
      firstAppeared: "2001-11-01",
      isTranspiler: false,
      isMainstream: false,
      releases: [
        { version: "10.7.5", name: "newLISP 10.7.5", date: "2019-01-01" },
        { version: "10.7.4", name: "newLISP 10.7.4", date: "2018-01-01" },
      ],
    })
    .addDialectOf(["pl+lisp"])
    .addInfluencedBy(["pl+c", "pl+common-lisp", "pl+perl", "pl+scheme"])
    .addLicenses(["license+gnu-gpl"])
    .addParadigms(["paradigm+functional", "paradigm+interpreted", "paradigm+procedural", "paradigm+scripting"])
    .addPlatforms(["plat+cross", "plat+linux", "plat+windows", "plat+x86-64"])
    .addTags(["tag+automation", "tag+cli", "tag+scripting"])
    .addTypeSystems(["tsys+dynamic", "tsys+latent"])
    .addWrittenIn(["pl+c"]);
}
