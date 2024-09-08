import type { PlangsGraph } from "@plangs/plangs";

export function define(g: PlangsGraph) {
  g.n_plang
    .set("pl+purescript", {
      images: [{ title: "PureScript", kind: "logo", url: "/images/plangs/p/purescript/main.png" }],
      name: "PureScript",
      description:
        "PureScript is a strongly-typed, purely-functional programming language that transpiles to JavaScript, C++11, Erlang, and Go. It can be used to develop web applications, server side apps, and also desktop applications with use of Electron or via C++11 and Go compilers with suitable libraries. Its syntax is mostly comparable to that of Haskell. In addition, it introduces row polymorphism and extensible records. Also, contrary to Haskell, the PureScript language is defined as having a strict evaluation strategy, although there are non-conforming back ends which implement a lazy evaluation strategy.",
      websites: [
        { href: "https://www.purescript.org/", title: "www.purescript.org", kind: "homepage" },
        { href: "https://en.wikipedia.org/wiki/PureScript", title: "PureScript", kind: "wikipedia" },
      ],
      extensions: [".purs"],
      releases: [{ version: "0.15.15", date: "2024-01-01" }],
    })
    .addInfluencedBy(["pl+haskell", "pl+javascript"])
    .addLicenses(["lic+bsd"])
    .addParadigms(["para+functional"])
    .addTypeSystems(["tsys+inferred", "tsys+static", "tsys+strong"]);
}
