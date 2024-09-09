import type { PlangsGraph } from "@plangs/plangs";

export function define(g: PlangsGraph) {
  g.n_plang
    .set("pl+wolfram-language", {
      images: [{ kind: "logo", title: "Wolfram Language", url: "/images/plangs/w/wolfram-language/logo.png" }],
      name: "Wolfram Language",
      description:
        "The Wolfram Language (/ˈwʊlfrəm/ WUUL-frəm) is a proprietary, general, very high-level multi-paradigm programming language developed by Wolfram Research. It emphasizes symbolic computation, functional programming, and rule-based programming and can employ arbitrary structures and data. It is the programming language of the mathematical symbolic computation program Mathematica.",
      websites: [
        { href: "https://www.wolfram.com/language/", title: "www.wolfram.com/language/", kind: "other" },
        { href: "https://en.wikipedia.org/wiki/Wolfram_language", title: "Wolfram Language", kind: "wikipedia" },
      ],
      extensions: [".m", ".nb", ".wl"],
      releases: [{ version: "14.1.0", date: "2024-01-01" }],
    })
    .addInfluencedBy(["pl+apl", "pl+c", "pl+c++", "pl+fortran", "pl+lisp", "pl+pascal", "pl+prolog", "pl+simula"])
    .addParadigms(["para+array", "para+functional", "para+multi", "para+procedural", "para+rewriting"])
    .addPlatforms(["platf+cross"])
    .addTypeSystems(["tsys+dynamic", "tsys+strong"]);
}
