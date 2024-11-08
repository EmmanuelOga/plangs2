import type { PlangsGraph } from "@plangs/plangs";

export function define(g: PlangsGraph) {
  g.nodes.pl
    .set("pl+wolfram-language", {
      name: "Wolfram Language",
      description:
        "The Wolfram Language (/ˈwʊlfrəm/ WUUL-frəm) is a proprietary, general, very high-level multi-paradigm programming language developed by Wolfram Research. It emphasizes symbolic computation, functional programming, and rule-based programming and can employ arbitrary structures and data. It is the programming language of the mathematical symbolic computation program Mathematica.",
      keywords: ["wolfram", "wolfram language", "mathematica"],
      websites: [
        { title: "Wolfram Language", href: "https://www.wolfram.com/language/", kind: "homepage" },
        { title: "Wolfram Language", href: "https://en.wikipedia.org/wiki/Wolfram_language", kind: "wikipedia" },
        { title: "Wolfram Language on Reddit", kind: "reddit", href: "https://reddit.com/r/Mathematica" },
        { title: "Wolfram Language on Wikipedia", kind: "wikipedia", href: "https://en.wikipedia.org/wiki/Wolfram_Mathematica" },
      ],
      extensions: [".m", ".nb", ".wl"],
      year: 1988,
      isTranspiler: false,
      isMainstream: false,
      releases: [{ version: "14.1.0", name: "Wolfram Language 14.1.0", date: "2024-01-01" }],
      github: { name: "Mathematica", langId: "224", color: "#dd1100", popular: false, type: "programming" },
      stackovTags: ["wolfram-mathematica"],
    })
    .addInfluencedBy(["pl+apl", "pl+c", "pl+c++", "pl+fortran", "pl+lisp", "pl+pascal", "pl+prolog", "pl+simula"])
    .addParadigms(["paradigm+array", "paradigm+functional", "paradigm+multi", "paradigm+procedural", "paradigm+rewriting"])
    .addPlatforms(["plat+cross"])
    .addTags(["tag+audio-dev", "tag+cas", "tag+cli", "tag+games", "tag+interpreter", "tag+shell"])
    .addTypeSystems(["tsys+dynamic", "tsys+strong"]);

  // TOOLS

  // TOOL BUNDLES

  // LIBRARIES

  // APPS
}
