import type { PlangsGraph } from "@plangs/plangs";

export function define(g: PlangsGraph) {
  g.n_plang
    .set("pl+r", {
      images: [{ title: "R", kind: "logo", url: "/images/plangs/r/r/main.png" }],
      name: "R",
      description:
        "R is a programming language for statistical computing and data visualization. It has been adopted in the fields of data mining, bioinformatics, and data analysis.",
      websites: [
        { href: "https://www.r-project.org/", title: "www.r-project.org", kind: "homepage" },
        { href: "https://en.wikipedia.org/wiki/R_(programming_language)", title: "R", kind: "wikipedia" },
      ],
      extensions: [".r.rdata.rhistory.rds.rda"],
      releases: [{ version: "4.4.1", date: "2024-01-01" }],
    })
    .addInfluencedBy(["pl+common-lisp", "pl+lisp", "pl+r5rs", "pl+scheme"])
    .addLicenses(["lic+gnu-gpl"])
    .addParadigms(["para+array", "para+functional", "para+imperative", "para+multi", "para+oop", "para+procedural", "para+reflective"])
    .addPlatforms(["platf+arm", "platf+x86-64"])
    .addTypeSystems(["tsys+dynamic"]);
}
