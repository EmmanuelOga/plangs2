import type { PlangsGraph } from "@plangs/plangs";

export function define(g: PlangsGraph) {
  g.nodes.pl
    .set("pl+elixir", {
      name: "Elixir",
      description:
        "Elixir is a dynamic, functional language designed for building scalable and maintainable applications. It builds on the Erlang VM, known for creating low-latency, distributed, and fault-tolerant systems. Elixir provides metaprogramming capabilities, allowing developers to extend the language comprehensively, leveraging macros and protocols for polymorphism, enhancing its ability to handle large and complex systems.",
      keywords: ["concurrent", "distributed", "elixir", "erlang", "functional"],
      extensions: [".ex", ".exs"],
      year: 2012,
      isMainstream: true,
      releases: [
        { version: "1.17.3", name: "Elixir 1.17.3", date: "2024-09-18" },
        { version: "1.17.2", name: "Elixir 1.17.2", date: "2024-01-01" },
      ],
      stackovTags: ["elixir"],
      githubName: "Elixir",
      languishRanking: 43,
      githubLangId: "100",
      githubColor: "#6e4a7e",
      githubPopular: true,
      githubType: "programming",
      extWikipediaPath: "Elixir_(programming_language)",
      extRedditPath: "elixir",
      extHomeURL: "https://elixir-lang.org/",
    })
    .addInfluencedBy(["pl+clojure", "pl+erlang", "pl+lisp", "pl+ruby"])
    .addLicenses(["license+apache"])
    .addParadigms(["paradigm+concurrent", "paradigm+distributed", "paradigm+functional", "paradigm+multi", "paradigm+process-oriented"])
    .addPlatforms(["plat+beam"])
    .addTags(["tag+analysis", "tag+app", "tag+embedded", "tag+interpreter", "tag+multimedia", "tag+shell"])
    .addTypeSystems(["tsys+dynamic", "tsys+strong"]);

  // TOOLS

  // TOOL BUNDLES

  // LIBRARIES

  // APPS
}
