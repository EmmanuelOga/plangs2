import type { PlangsGraph } from "@plangs/plangs";

export function define(g: PlangsGraph) {
  g.nodes.pl
    .set("pl+purescript", {
      name: "PureScript",
      description:
        "PureScript is a strongly-typed, purely-functional programming language that transpiles to JavaScript, C++11, Erlang, and Go. It can be used to develop web applications, server-side apps, and also desktop applications with the use of Electron or via C++11 and Go compilers with suitable libraries. Its syntax is mostly comparable to that of Haskell. Additionally, PureScript introduces features like row polymorphism and extensible records. Unlike Haskell, PureScript is defined with a strict evaluation strategy, although some backends offer lazy evaluation.",
      keywords: ["purescript"],
      websites: [
        { title: "www.purescript.org", href: "https://www.purescript.org/", kind: "homepage" },
        { title: "PureScript", href: "https://en.wikipedia.org/wiki/PureScript", kind: "wikipedia" },
        { title: "PureScript on Reddit", kind: "reddit", href: "https://reddit.com/r/purescript" },
      ],
      extensions: [".purs"],
      year: 2013,
      isTranspiler: true,
      isMainstream: false,
      releases: [{ version: "0.15.15", name: "PureScript 0.15.15", date: "2024-01-01" }],
      stackovTags: ["purescript"],
      githubName: "PureScript",
      languishRanking: 222,
      githubLangId: "302",
      githubColor: "#1D222D",
      githubPopular: false,
      githubType: "programming",
    })
    .addInfluencedBy(["pl+haskell", "pl+javascript"])
    .addLicenses(["license+bsd"])
    .addParadigms(["paradigm+declarative", "paradigm+functional"])
    .addPlatforms(["plat+cross", "plat+nodejs"])
    .addTags(["tag+app", "tag+compiler", "tag+editor", "tag+interpreter"])
    .addTypeSystems(["tsys+inferred", "tsys+static", "tsys+strong"])
    .addWrittenIn(["pl+haskell", "pl+javascript"]);

  // TOOLS

  // TOOL BUNDLES

  // LIBRARIES

  // APPS
}
