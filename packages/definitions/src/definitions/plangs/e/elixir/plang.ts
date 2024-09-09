import type { PlangsGraph } from "@plangs/plangs";

export function define(g: PlangsGraph) {
  g.n_plang
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
    .addLicenses(["lic+apache"])
    .addParadigms(["para+concurrent", "para+distributed", "para+functional", "para+multi", "para+process-oriented"])
    .addPlatforms(["platf+erlang"])
    .addTypeSystems(["tsys+dynamic", "tsys+strong"]);
}
