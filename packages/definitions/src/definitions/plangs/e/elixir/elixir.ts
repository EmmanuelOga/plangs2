import type { PlangsGraph } from "@plangs/plangs";

export function define(g: PlangsGraph) {
  g.nodes.pl
    .set("pl+elixir", {
      name: "Elixir",
      description:
        "Elixir is a dynamic, functional language designed for building scalable and maintainable applications. Leveraging the Erlang VM, it provides a robust platform for building distributed and fault-tolerant systems. Elixir introduces metaprogramming, allowing developers to extend the language's capabilities with macros and protocols, offering flexibility in building complex applications.",
      keywords: ["elixir"],
      websites: [
        { title: "elixir-lang.org", href: "https://elixir-lang.org/", kind: "homepage" },
        { title: "Wikipedia", href: "https://en.wikipedia.org/wiki/Elixir_(programming_language)", kind: "wikipedia" },
      ],
      extensions: [".ex", ".exs"],
      firstAppeared: "2012-01-01",
      isTranspiler: false,
      isMainstream: true,
      releases: [{ version: "1.17.2", name: "Elixir 1.17.2", date: "2024-01-01" }],
    })
    .addInfluencedBy(["pl+clojure", "pl+erlang", "pl+lisp", "pl+ruby"])
    .addLicenses(["license+apache"])
    .addParadigms(["paradigm+concurrent", "paradigm+distributed", "paradigm+functional", "paradigm+multi", "paradigm+process-oriented"])
    .addPlatforms(["plat+erlang"])
    .addTags(["tag+analysis", "tag+app", "tag+interpreter", "tag+shell"])
    .addTypeSystems(["tsys+dynamic", "tsys+strong"]);
}
