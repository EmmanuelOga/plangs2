import type { PlangsGraph } from "@plangs/plangs";

export function define(g: PlangsGraph) {
  g.nodes.pl
    .set("pl+r", {
      name: "R",
      description:
        "R is a language and environment for statistical computing and graphics. It is widely used among statisticians and data miners for data analysis and developing statistical software.",
      websites: [
        { title: "R", href: "https://www.r-project.org/", kind: "homepage" },
        { title: "R", href: "https://en.wikipedia.org/wiki/R_(programming_language)", kind: "wikipedia" },
      ],
      extensions: [".r", ".rdata", ".rhistory", ".rds", ".rda"],
      year: 1993,
      images: [{ kind: "logo", title: "R", url: "https://www.r-project.org/logo/Rlogo.png", width: 512, height: 512 }],
      isTranspiler: false,
      isMainstream: true,
      releases: [
        { version: "4.0.0", name: "R 4.0.0", date: "2020-04-24" },
        { version: "4.4.1", name: "R 4.4.1", date: "2024-01-01" },
      ],
    })
    .addInfluencedBy(["pl+common-lisp", "pl+lisp", "pl+r5rs", "pl+s", "pl+scheme", "pl+xlispstat"])
    .addLicenses(["license+gnu-gpl"])
    .addParadigms([
      "paradigm+array",
      "paradigm+functional",
      "paradigm+imperative",
      "paradigm+multi",
      "paradigm+oop",
      "paradigm+procedural",
      "paradigm+reflective",
    ])
    .addPlatforms(["plat+apple", "plat+arm", "plat+cross", "plat+linux", "plat+windows", "plat+x86-64"])
    .addTags(["tag+analysis", "tag+cli", "tag+dataq", "tag+genomics", "tag+interpreter", "tag+multivar", "tag+scripting", "tag+stats", "tag+viz"])
    .addTypeSystems(["tsys+dynamic", "tsys+strong"])
    .addWrittenIn(["pl+c", "pl+fortran"]);
}
