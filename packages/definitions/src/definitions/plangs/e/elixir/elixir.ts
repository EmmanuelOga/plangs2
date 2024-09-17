import type { PlangsGraph } from "@plangs/plangs";

export function define(g: PlangsGraph) {
  g.nodes.pl
    .set("pl+elixir", {
      name: "Elixir",
      description:
        "Elixir is a functional, concurrent, high-level general-purpose programming language that runs on the BEAM virtual machine, which is also used to implement the Erlang programming language. Elixir builds on top of Erlang and shares the same abstractions for building distributed, fault-tolerant applications. Elixir also provides tooling and an extensible design. The latter is supported by compile-time metaprogramming with macros and polymorphism via protocols.",
      firstAppeared: "2012-01-01",
      extensions: [".ex", ".exs"],
      websites: [
        { href: "https://elixir-lang.org/", title: "elixir-lang.org", kind: "homepage" },
        { href: "https://en.wikipedia.org/wiki/Elixir_(programming_language)", title: "Elixir", kind: "wikipedia" },
      ],
      releases: [{ version: "1.17.2", date: "2024-01-01" }],
    })
    .addInfluencedBy(["pl+clojure", "pl+erlang", "pl+lisp", "pl+ruby"])
    .addLicenses(["license+apache"])
    .addParadigms(["paradigm+concurrent", "paradigm+distributed", "paradigm+functional", "paradigm+multi", "paradigm+process-oriented"])
    .addPlatforms(["plat+erlang"])
    .addTags(["tag+analysis", "tag+app", "tag+interpreter", "tag+shell"])
    .addTypeSystems(["tsys+dynamic", "tsys+strong"]);
}
