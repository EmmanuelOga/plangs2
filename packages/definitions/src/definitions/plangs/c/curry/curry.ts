import type { PlangsGraph } from "@plangs/plangs";

export function define(g: PlangsGraph) {
  g.n_plangs
    .set("pl+curry", {
      name: "Curry",
      description:
        "Curry is a declarative programming language, an implementation of the functional logic programming paradigm, and based on the Haskell language. It merges elements of functional and logic programming, including constraint programming integration.",
      firstAppeared: "1995-01-01",
      websites: [
        {
          href: "http://curry.pages.ps.informatik.uni-kiel.de/curry-lang.org",
          title: "curry.pages.ps.informatik.uni-kiel.de/curry-lang.org",
          kind: "homepage",
        },
        { href: "https://en.wikipedia.org/wiki/Curry_(programming_language)", title: "Curry", kind: "wikipedia" },
      ],
      releases: [{ version: "3.6.0", date: "2023-01-01" }],
    })
    .addInfluencedBy(["pl+haskell", "pl+prolog"])
    .addLicenses(["lic+bsd"])
    .addParadigms(["para+functional", "para+logic"])
    .addPlatforms(["platf+cross", "platf+linux", "platf+x86-64"])
    .addTypeSystems(["tsys+inferred", "tsys+static", "tsys+strong"]);
}
