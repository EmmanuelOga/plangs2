import type { PlangsGraph } from "@plangs/plangs";

export function define(g: PlangsGraph) {
  g.nodes.pl
    .set("pl+wolfram-language", {
      name: "Wolfram Language",
      description:
        "The Wolfram Language (/ˈwʊlfrəm/ WUUL-frəm) is a proprietary, general, very high-level multi-paradigm programming language developed by Wolfram Research. It emphasizes symbolic computation, functional programming, and rule-based programming and can employ arbitrary structures and data. It is the programming language of the mathematical symbolic computation program Mathematica.",
      firstAppeared: "1988-01-01",
      extensions: [".m", ".nb", ".wl"],
      websites: [
        { href: "https://www.wolfram.com/language/", title: "www.wolfram.com/language/", kind: "other" },
        { href: "https://en.wikipedia.org/wiki/Wolfram_language", title: "Wolfram Language", kind: "wikipedia" },
      ],
      releases: [{ version: "14.1.0", date: "2024-01-01" }],
      images: [{ kind: "logo", title: "Wolfram Language", url: "/images/plangs/w/wolfram-language/logo.png" }],
    })
    .addInfluencedBy(["pl+apl", "pl+c", "pl+c++", "pl+fortran", "pl+lisp", "pl+pascal", "pl+prolog", "pl+simula"])
    .addParadigms(["paradigm+array", "paradigm+functional", "paradigm+multi", "paradigm+procedural", "paradigm+rewriting"])
    .addPlatforms(["plat+cross"])
    .addTypeSystems(["tsys+dynamic", "tsys+strong"]);
}
